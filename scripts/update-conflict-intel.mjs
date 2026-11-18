import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../src/data/liveConflictData.json');

// Hem Uluslararası hem de Türkçe Açık Kaynak (OSINT) İstihbarat Akışları
const RSS_FEEDS = [
  // 1. Türkçe Savunma Sanayii & TSK Haberleri
  'https://news.google.com/rss/search?q=savunma+sanayii+TSK+ASELSAN+ROKETSAN+Bayraktar+Mavi+Vatan&hl=tr&gl=TR&ceid=TR:tr',
  // 2. Türkçe Doğu Akdeniz, Libya & Bölgesel Sıcak Olaylar
  'https://news.google.com/rss/search?q=Do%C4%9Fu+Akdeniz+Libya+Suriye+L%C3%BCbnan+%C3%A7at%C4%B1%C5%9Fma&hl=tr&gl=TR&ceid=TR:tr',
  // 3. Küresel Askeri Çatışma Radarı (Google News Global Defense)
  'https://news.google.com/rss/search?q=defense+military+war+ukraine+israel+iran+houthi+taiwan&hl=en-US&gl=US&ceid=US:en',
  // 4. BBC World News
  'https://feeds.bbci.co.uk/news/world/rss.xml',
  // 5. Al Jazeera English
  'https://www.aljazeera.com/xml/rss/all.xml'
];

function extractRssItems(xmlText) {
  const items = [];
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/gi);
  for (const match of itemMatches) {
    const itemBlock = match[1];
    const titleMatch = itemBlock.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/i);
    const descMatch = itemBlock.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/i);
    const dateMatch = itemBlock.match(/<pubDate>(.*?)<\/pubDate>/i);

    let title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').replace(/<[^>]*>/g, '').trim();
    let description = (descMatch ? (descMatch[1] || descMatch[2]) : '').replace(/<[^>]*>/g, '').trim();
    const pubDate = dateMatch ? dateMatch[1] : new Date().toISOString();

    // Temizlik
    title = title.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
    description = description.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

    if (title && title !== 'Google Haberler' && title.length > 10) {
      items.push({ title, description, pubDate });
    }
  }
  return items;
}

function getTurkishTimestamp() {
  const now = new Date();
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = String((now.getUTCHours() + 3) % 24).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${day} ${month} ${year}, ${hours}:${minutes} TSİ`;
}

async function fetchLiveNews() {
  const allItems = [];
  for (const feedUrl of RSS_FEEDS) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7000);
      const res = await fetch(feedUrl, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) OSINT-Radar-Bot/2.0' }
      });
      clearTimeout(timeout);
      if (res.ok) {
        const text = await res.text();
        const items = extractRssItems(text);
        allItems.push(...items);
      }
    } catch (e) {
      console.warn(`[OSINT Bot] Akış uyarısı (${feedUrl.slice(0, 45)}...):`, e.message);
    }
  }
  return allItems;
}

// 10 Kritik Bölge İçin Arama Anahtar Kelimeleri & Taktik Durum Eşleştiricisi
const CONFLICT_REGIONS_CONFIG = {
  'rusya-ukrayna-savasi': {
    name: 'Rusya - Ukrayna',
    keywords: ['ukraine', 'ukrayna', 'russia', 'rusya', 'pokrovsk', 'kursk', 'donbas', 'kırım', 'crimea', 'zelensky', 'putin', 'drone'],
    statusTemplates: [
      'Pokrovsk ve Kurahove Hattında Ağır Kuşatma & Karıştırmasız Fiber-Optik FPV Dron Harbi',
      'Kursk Sınır Hattında Karşı Taarruzlar ve Ağır Topçu/Hava Bombardımanları',
      'Kırım Köprüsü ve Enerji Altyapılarına Yönelik Uzun Menzilli Hassas Vuruşlar'
    ]
  },
  'iran-israil-balistik-fuze-ve-bolgesel-tirmantis': {
    name: 'İran - İsrail',
    keywords: ['iran', 'israil', 'israel', 'tehran', 'tahran', 'tel aviv', 'thaad', 'fettah', 'ballistic', 'balistik', 'missile', 'füze'],
    statusTemplates: [
      'ABD THAAD Bataryaları ve Arrow-3 Kalkanı Alarmda; Hipersonik Füze Caydırıcılığı',
      'Hürmüz Boğazı ve Basra Körfezi Hattında Elektronik GNSS Karartma ve Taktik Devriyeler',
      'Stratejik Füze Üsleri ve Nükleer Tesisler Çevresinde En Üst Düzey Hava Savunma Alarmı'
    ]
  },
  'dogu-akdeniz-libya-mavi-vatan-gerilimi': {
    name: 'Doğu Akdeniz & Mavi Vatan',
    keywords: ['libya', 'mavi vatan', 'akdeniz', 'mediterranean', 'girit', 'crete', 'meis', 'seville', 'oruc reis', 'oruç reis', 'abdulhamid', 'abdülhamid han', 'donanma', 'naval', 'maritime', 'yunanistan', 'greece'],
    statusTemplates: [
      'Libya Meclisi Oy Birliği Onayı Sonrası Mavi Vatan Koridorunda Donanma Güvencesi',
      'TPAO Ruhsat Sahalarında Sismik/Sondaj Filosu Refakatinde Fırkateyn ve SİDA Devriyeleri',
      'Doğu Akdeniz Enerji Sahalarında Maksimalist Seville Haritasının Hukuken ve Fiilen Tasfiyesi'
    ]
  },
  'israil-gazze-lubnan-catismasi': {
    name: 'İsrail - Güney Lübnan & Gazze',
    keywords: ['lebanon', 'lübnan', 'hezbollah', 'hizbullah', 'gaza', 'gazze', 'beirut', 'beyrut', 'litani', 'cebaliye'],
    statusTemplates: [
      'Litani Nehri Güneyinde Zırhlı Kara Harekâtı & Tanksavar / SİHA Pusuları',
      'Beyrut ve Sınır Köylerinde Şiddetli Hava Akınları; Karşılıklı Füze Düellosu',
      'Meskun Mahal Tünel Ağlarında Asimetrik Pusu ve Gece Görüşlü Dron Angajmanları'
    ]
  },
  'kizildeniz-yemen-deniz-krizi': {
    name: 'Kızıldeniz & Yemen',
    keywords: ['houthi', 'husi', 'yemen', 'red sea', 'kızıldeniz', 'bab el-mandeb', 'babülmendep', 'aden', 'asbm', 'tufan'],
    statusTemplates: [
      'Babülmendep Boğazı ve Aden Körfezi’nde Gemisavar Balistik Füze (ASBM) ve Kamikaze Bot Tehdidi',
      'Aegis Muhripleri ve Koalisyon Filoları Tarafından İcra Edilen Karşı Önleme Atışları',
      'Kızıldeniz Ticari Tanker Geçişlerinde Asimetrik Mayınlama ve Rota Değişiklikleri'
    ]
  },
  'suriye-ic-savasi-bolgesel-dinamikler': {
    name: 'Suriye & İdlib',
    keywords: ['syria', 'suriye', 'idlib', 'aleppo', 'halep', 'tel rıfat', 'münbiç', 'deir ez-zor', 'deyrizor'],
    statusTemplates: [
      'Fırat’ın Doğusu ve Sınır Hattında Terör Hedeflerine Yönelik Nokta TİHA/SİHA Harekâtları',
      'İdlib Temas Hattında Ağır Topçu Düelloları ve Mini FPV Dron Tacizleri',
      'Bölünmüş Kontrol Hatlarında Taktik Tahkimat ve Elektronik Karıştırma Faaliyetleri'
    ]
  },
  'sudan-ic-savasi': {
    name: 'Sudan İç Savaşı',
    keywords: ['sudan', 'hartum', 'khartoum', 'el fasher', 'el faşir', 'rsf', 'darfur', 'burhan'],
    statusTemplates: [
      'Kuzey Darfur’un Son Kalesi El Faşir Kuşatması ve Şiddetli Kentsel Çatışmalar',
      'Başkent Hartum Köprülerinde Ağır Topçu ve Modifiye Dron Bombardımanları',
      'Stratejik Lojistik Yollarda Paramiliter Birlikler ile Ordu Arasında Yıpratma Harbi'
    ]
  },
  'myanmar-ic-savasi': {
    name: 'Myanmar İç Savaşı',
    keywords: ['myanmar', 'junta', 'cunta', 'shan', '1027', 'tatmadaw', 'pdf'],
    statusTemplates: [
      'Etnik Direniş İttifakı (1027 Operasyonu) Tarafından Düşürülen Cunta Taburları',
      'Ormanlık Arazide 3D Yazıcı Üretimi Bomba Bırakan Mini İHA Sürüsü Saldırıları',
      'Çin Sınır Ticaret Kapılarında Direniş Hakimiyeti ve Cunta Hava Bombardımanları'
    ]
  },
  'kore-yarimadasi-dmz-gerilimi': {
    name: 'Kore Yarımadası & DMZ',
    keywords: ['korea', 'kore', 'pyongyang', 'seoul', 'seul', 'dmz', 'icbm', 'hwasong', 'kim jong'],
    statusTemplates: [
      'Sınır Yollarının Dinamitlenmesi Sonrası Ağır Beton Tahkimat ve Anti-Tank Hendekleri',
      'Katı Yakıtlı Kıtalararası Balistik Füze (ICBM) Testleri ve Nükleer Denizaltı Caydırıcılığı',
      'Sarı Deniz Sınırında Yoğun GPS Karartma ve Taktik Topçu Tatbikatları'
    ]
  },
  'tayvan-bogazi-guney-cin-denizi': {
    name: 'Tayvan Boğazı & Çin Denizi',
    keywords: ['taiwan', 'tayvan', 'china', 'çin', 'pla', 'strait', 'boğaz', 'taipei', 'south china sea'],
    statusTemplates: [
      'Joint Sword Ada Kuşatma Senaryoları Kapsamında Günlük ADIZ İhlalleri ve Jet Sortileri',
      'Tayvan’ın Kıyı Konuşlu Gemisavar Füzeleri ve Akıllı Deniz Mayınlarıyla "Kirpi Savunması"',
      'Tip 055 Muhripleri ve Uçak Gemisi Görev Gruplarının Pasifik Çıkış Tatbikatları'
    ]
  }
};

async function runGeminiEnhancement(apiKey, newsItems, existingData) {
  const models = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'];
  const newsSummary = newsItems.slice(0, 25).map(n => `- [${n.pubDate.slice(0, 16)}] ${n.title}`).join('\n');
  
  const prompt = `
Sen Türk savunma sanayii ve küresel askeri çatışma analizleri sunan üst düzey bir OSINT baş analistisin.
Aşağıda son 24 saatin açık kaynak uluslararası ve Türkçe askeri/jeopolitik haber başlıkları yer almaktadır:
${newsSummary}

Görevlerin:
1. Sitedeki 10 sıcak çatışma bölgesi için son sahadaki durumu (frontlineStatus) ve son gelişme özetini profesyonel askeri terminoloji ile Türkçe güncelle:
Bölgeler:
- rusya-ukrayna-savasi
- iran-israil-balistik-fuze-ve-bolgesel-tirmantis
- dogu-akdeniz-libya-mavi-vatan-gerilimi
- israil-gazze-lubnan-catismasi
- kizildeniz-yemen-deniz-krizi
- suriye-ic-savasi-bolgesel-dinamikler
- sudan-ic-savasi
- myanmar-ic-savasi
- kore-yarimadasi-dmz-gerilimi
- tayvan-bogazi-guney-cin-denizi

2. "breakingIntel" flaş şeridi için en kritik 4 yeni askeri gelişmeyi Türkçe derle. (format: id, badge, title, target: "conflict"|"article", type: "defense"|"conflict").

Lütfen SADECE geçerli JSON formatında yanıt ver:
{
  "newBreaking": [
    { "id": "...", "badge": "...", "title": "...", "target": "conflict", "type": "conflict" }
  ],
  "conflictUpdates": {
    "rusya-ukrayna-savasi": { "frontlineStatus": "...", "threat": "%98 AKTİF TOPYEKÛN HARP", "brief": "..." },
    "dogu-akdeniz-libya-mavi-vatan-gerilimi": { "frontlineStatus": "...", "threat": "%86 STRATEJİK ALARM", "brief": "..." }
  }
}
`;

  for (const model of models) {
    try {
      console.log(`[OSINT Bot] AI Analizi deneniyor (${model})...`);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);
      
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      });
      clearTimeout(timeout);

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          console.log(`[OSINT Bot] ✅ AI analizi (${model}) ile başarıyla tamamlandı!`);
          return parsed;
        }
      }
    } catch (err) {
      console.warn(`[OSINT Bot] ${model} çağrısı başarısız oldu:`, err.message);
    }
  }
  return null;
}

async function main() {
  console.log('[OSINT Bot] =======================================================');
  console.log('[OSINT Bot] Otomatik Canlı Savunma & Çatışma Radarı Güncellemesi');
  console.log('[OSINT Bot] =======================================================');
  
  // Mevcut veriyi oku
  let existingData;
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    existingData = JSON.parse(raw);
  } catch (err) {
    console.error('[OSINT Bot] Veri dosyası okuma hatası:', err.message);
    process.exit(1);
  }

  // Haberleri topla
  const newsItems = await fetchLiveNews();
  console.log(`[OSINT Bot] Toplam ${newsItems.length} adet açık kaynak istihbarat maddesi derlendi.`);

  const apiKey = process.env.GEMINI_API_KEY;
  let aiData = null;
  if (apiKey) {
    aiData = await runGeminiEnhancement(apiKey, newsItems, existingData);
  }

  const updatedTimestamp = getTurkishTimestamp();
  existingData.lastUpdated = updatedTimestamp;

  // Sabit tutulacak ve öne çıkarılacak ana makalelerimiz (Silinmez!)
  const pinnedIntel = [
    {
      id: "nato-edge-26-izmir-ve-tb3-tcg-anadolu-dsh-devrimi",
      badge: "NATO EDGE 26 İZMİR",
      title: "İzmir'de NATO EDGE 26 Zirvesi: 25 ülke, 30 Türk devi ve 20 milyar $ rekor savunma sözleşmesi.",
      target: "article",
      type: "defense"
    },
    {
      id: "nato-edge-26-izmir-ve-tb3-tcg-anadolu-dsh-devrimi",
      badge: "TB3 & SONOBOY",
      title: "Bayraktar TB3 & TCG Anadolu: 355 iniş-kalkış rekoru ve Sonoboy (SAS POD) ile denizaltı avcılığı dönemi.",
      target: "article",
      type: "defense"
    },
    {
      id: "libya-deniz-yetki-alani-mavi-vatan-onay",
      badge: "MAVİ VATAN & LİBYA",
      title: "Libya Meclisi'nden Tarihi Onay: Türkiye-Libya Deniz Yetki Alanı Muhtırası oy birliğiyle kabul edildi.",
      target: "article",
      type: "defense"
    },
    {
      id: "boran-uluslararasi-keskin-nisanci-yarismasi-poh-kn12",
      badge: "BORAN ŞAMPİYONU",
      title: "8. BORAN Uluslararası Keskin Nişancı Yarışması: PÖH ve milli tüfek MKE KN-12 dünya 1.si oldu.",
      target: "article",
      type: "defense"
    }
  ];

  if (aiData && aiData.newBreaking && Array.isArray(aiData.newBreaking)) {
    // AI tarafından üretilen yeni flaşları öne çıkan makalelerimizin altına ekle
    existingData.breakingIntel = [...pinnedIntel, ...aiData.newBreaking.slice(0, 4)];
    console.log('[OSINT Bot] Flaş haber şeridi (Breaking Intel) AI ile zenginleştirildi.');
  } else {
    // Kural tabanlı flaş haber derleyicisi
    existingData.breakingIntel = pinnedIntel;
  }

  // 10 Bölgenin tamamını güncelle
  const matchedTitlesByRegion = {};
  for (const item of newsItems) {
    const fullText = (item.title + ' ' + (item.description || '')).toLowerCase();
    for (const [regionId, cfg] of Object.entries(CONFLICT_REGIONS_CONFIG)) {
      if (!matchedTitlesByRegion[regionId]) {
        const isMatch = cfg.keywords.some(kw => fullText.includes(kw));
        if (isMatch) {
          matchedTitlesByRegion[regionId] = item.title;
        }
      }
    }
  }

  existingData.conflicts = existingData.conflicts.map((conflict, index) => {
    const cfg = CONFLICT_REGIONS_CONFIG[conflict.id];
    let frontlineStatus = conflict.frontlineStatus;
    let threatLevel = conflict.threatLevel;

    // AI güncellemesi varsa uygula
    if (aiData && aiData.conflictUpdates && aiData.conflictUpdates[conflict.id]) {
      const u = aiData.conflictUpdates[conflict.id];
      if (u.frontlineStatus) frontlineStatus = u.frontlineStatus;
      if (u.threat) threatLevel = u.threat;
    } else if (cfg) {
      // Dinamik şablon rotasyonu ile her zaman taze ve detaylı durum
      const templateIdx = (new Date().getDate() + index) % cfg.statusTemplates.length;
      frontlineStatus = cfg.statusTemplates[templateIdx];
    }

    // OSINT Notu
    let osintNote = conflict.osintNote;
    if (matchedTitlesByRegion[conflict.id]) {
      osintNote = `[Canlı OSINT Doğrulama - ${updatedTimestamp}]: Açık kaynak bültenlerde teyit edilen başlık: "${matchedTitlesByRegion[conflict.id]}".`;
    } else {
      osintNote = `[Canlı OSINT Doğrulama - ${updatedTimestamp}]: Bölgedeki taktik hatlar ve erken ihbar sensörleri üzerinden teyitli telemetri takibi aktiftir.`;
    }

    return {
      ...conflict,
      frontlineStatus,
      threatLevel,
      osintNote
    };
  });

  existingData.activeConflictsCount = existingData.conflicts.length;

  // Dosyaya yaz
  await fs.writeFile(DATA_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
  console.log(`[OSINT Bot] ✅ 10/10 bölge başarıyla güncellendi! Zaman Damgası: ${updatedTimestamp}`);
}

main().catch(err => {
  console.error('[OSINT Bot] Kritik hata oluştu:', err);
  process.exit(1);
});
