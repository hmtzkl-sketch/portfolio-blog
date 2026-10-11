import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../src/data/liveConflictData.json');

// Public Open-Source RSS Intelligence Sources
const RSS_FEEDS = [
  'https://feeds.bbci.co.uk/news/world/rss.xml',
  'https://www.aljazeera.com/xml/rss/all.xml',
  'https://news.google.com/rss/search?q=defense+military+ukraine+israel+iran+houthi+sudan&hl=en-US&gl=US&ceid=US:en'
];

function extractRssItems(xmlText) {
  const items = [];
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/gi);
  for (const match of itemMatches) {
    const itemBlock = match[1];
    const titleMatch = itemBlock.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/i);
    const descMatch = itemBlock.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/i);
    const dateMatch = itemBlock.match(/<pubDate>(.*?)<\/pubDate>/i);

    const title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').replace(/<[^>]*>/g, '').trim();
    const description = (descMatch ? (descMatch[1] || descMatch[2]) : '').replace(/<[^>]*>/g, '').trim();
    const pubDate = dateMatch ? dateMatch[1] : new Date().toISOString();

    if (title) {
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
      const timeout = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(feedUrl, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) OSINT-Bot/1.0' }
      });
      clearTimeout(timeout);
      if (res.ok) {
        const text = await res.text();
        const items = extractRssItems(text);
        allItems.push(...items);
      }
    } catch (e) {
      console.warn(`[OSINT Bot] Feed fetch warning (${feedUrl}):`, e.message);
    }
  }
  return allItems;
}

async function runGeminiEnhancement(apiKey, newsItems, existingData) {
  try {
    const newsSummary = newsItems.slice(0, 15).map(n => `- ${n.title}`).join('\n');
    const prompt = `
Aşağıda son 24 saatin açık kaynak uluslararası askeri ve jeopolitik haber başlıkları yer almaktadır:
${newsSummary}

Görev:
1. "breakingIntel" listesi için en önemli 6 adet güncel gelişmeyi Türkçe olarak derle. Format: [{ id, badge, title, target, type }]
2. Şu 9 sıcak çatışma bölgesi için son 24 saatin özet durumunu (frontlineStatus) kısaca Türkçe olarak güncelle:
- Rusya-Ukrayna (Donbas, Pokrovsk & Kursk)
- İran-İsrail Balistik Füze & Hava Harbi
- İsrail - Güney Lübnan (Litani) & Gazze
- Suriye & İdlib Hattı
- Kızıldeniz & Babülmendep
- Sudan & El Faşir Kuşatması
- Myanmar & Shan Eyaleti
- Kore DMZ & Sarı Deniz
- Tayvan Boğazı & Abluka

Lütfen SADECE geçerli JSON formatında yanıt ver:
{
  "breakingIntel": [...],
  "conflictUpdates": {
    "rusya-ukrayna-savasi": { "frontlineStatus": "...", "threat": "%98 KRİTİK" },
    ...
  }
}
`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });

    if (res.ok) {
      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return JSON.parse(text);
      }
    }
  } catch (err) {
    console.warn('[OSINT Bot] Gemini API generation failed, falling back to rule-based parser:', err.message);
  }
  return null;
}

async function main() {
  console.log('[OSINT Bot] Otomatik Günlük Çatışma & Savunma Radarı Güncellemesi Başlatıldı...');
  
  // Read existing data
  let existingData;
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    existingData = JSON.parse(raw);
  } catch (err) {
    console.error('[OSINT Bot] Data file read error, exiting:', err.message);
    process.exit(1);
  }

  const newsItems = await fetchLiveNews();
  console.log(`[OSINT Bot] ${newsItems.length} adet uluslararası açık kaynak haber maddesi tarandı.`);

  const apiKey = process.env.GEMINI_API_KEY;
  let aiData = null;
  if (apiKey) {
    console.log('[OSINT Bot] GEMINI_API_KEY tespit edildi, AI ile Türkçe cephe analizi yapılıyor...');
    aiData = await runGeminiEnhancement(apiKey, newsItems, existingData);
  }

  // Update data
  const updatedTimestamp = getTurkishTimestamp();
  existingData.lastUpdated = updatedTimestamp;

  if (aiData && aiData.breakingIntel && Array.isArray(aiData.breakingIntel)) {
    existingData.breakingIntel = aiData.breakingIntel;
    console.log('[OSINT Bot] Breaking intel AI tarafından güncellendi.');
  }

  if (aiData && aiData.conflictUpdates) {
    existingData.conflicts = existingData.conflicts.map(c => {
      const update = aiData.conflictUpdates[c.id];
      if (update) {
        return {
          ...c,
          frontlineStatus: update.frontlineStatus || c.frontlineStatus,
          threatLevel: update.threat || c.threatLevel
        };
      }
      return c;
    });
    console.log('[OSINT Bot] Çatışma cephe durumları AI tarafından güncellendi.');
  } else if (!aiData) {
    console.log('[OSINT Bot] Kural tabanlı OSINT eşleştirici ile güncelleniyor...');
    const conflictKeywords = {
      'rusya-ukrayna-savasi': ['ukraine', 'russia', 'pokrovsk', 'kursk', 'donbas', 'kyiv', 'drone'],
      'iran-israil-balistik-fuze-ve-bolgesel-tirmantis': ['iran', 'israel', 'ballistic', 'missile', 'tehran'],
      'israil-gazze-lubnan-catismasi': ['lebanon', 'hezbollah', 'gaza', 'beirut', 'litani'],
      'kizildeniz-yemen-deniz-krizi': ['houthi', 'yemen', 'red sea', 'bab el-mandeb', 'aden'],
      'suriye-ic-savasi-bolgesel-dinamikler': ['syria', 'idlib', 'aleppo', 'damascus'],
      'sudan-ic-savasi': ['sudan', 'fasher', 'khartoum', 'rsf', 'darfur'],
      'myanmar-ic-savasi': ['myanmar', 'junta', 'shan'],
      'kore-yarimadasi-dmz-gerilimi': ['north korea', 'south korea', 'pyongyang', 'dmz', 'icbm'],
      'tayvan-bogazi-guney-cin-denizi': ['taiwan', 'china', 'strait', 'pla', 'taipei']
    };

    const matchedArticles = {};
    for (const item of newsItems) {
      const lower = (item.title + ' ' + (item.description || '')).toLowerCase();
      for (const [id, kwList] of Object.entries(conflictKeywords)) {
        if (!matchedArticles[id] && kwList.some(kw => lower.includes(kw))) {
          matchedArticles[id] = item.title;
        }
      }
    }

    existingData.conflicts = existingData.conflicts.map(c => {
      if (matchedArticles[c.id]) {
        return {
          ...c,
          osintNote: `[Canlı OSINT Doğrulama - ${updatedTimestamp}]: Açık kaynak askeri bültenlerde son teyit edilen başlık: "${matchedArticles[c.id]}".`
        };
      }
      return c;
    });
  }

  // Write back to file
  await fs.writeFile(DATA_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
  console.log(`[OSINT Bot] ✅ Başarıyla tamamlandı! Son Güncelleme: ${updatedTimestamp}`);
}

main().catch(err => {
  console.error('[OSINT Bot] Kritik hata:', err);
  process.exit(1);
});
