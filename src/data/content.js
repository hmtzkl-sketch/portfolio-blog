// Canlı Dinamik İstihbarat ve Çatışma Verisi (Her gün otomatik güncellenir)
import liveConflictData from './liveConflictData.json';

const activeDateLabel = liveConflictData.lastUpdated ? liveConflictData.lastUpdated.split(',')[0].trim() : "20 Ekim 2026";

export const authorProfile = {
  name: "Ahmet Özkul",
  handle: "@ahmetozkul",
  title: "Açık Kaynak (OSINT) Savunma Sanayii & Askeri Teknolojiler Araştırmacısı",
  bio: "Halka açık savunma sanayii bültenleri, uluslararası askeri fuarlar (IDEF, SAHA EXPO), üretici teknik katalogları ve açık kaynak istihbaratı (OSINT) doğrultusunda; piyade silahları, balistik prensipler ve savunma teknolojileri üzerine bağımsız teknik analizler ve derlemeler sunuyorum.",
  location: "Türkiye",
  status: `Canlı Askeri İstihbarat & Taktik Radar [${activeDateLabel} Aktif]`,
  stats: [
    { label: "Katalog & Sistem İncelemesi", value: "98+", change: "Açık Kaynak (OSINT)" },
    { label: "Sıcak Çatışma Radarı", value: "16 Bölge", change: "Canlı Taktik Takip" },
    { label: "Teknik Rapor & Doküman", value: "58 Modül", change: "Halka Açık Veri" },
    { label: "Aylık Ziyaret & Okur", value: "170.000+", change: "Savunma Meraklıları" }
  ],
  socials: {
    github: "https://github.com/hmtzkl-sketch",
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/ahmet-%C3%B6zkul-82aa0093",
    email: "iletisim@ahmetozkul.com.tr"
  }
};

export const lastRadarUpdate = liveConflictData.lastUpdated || "20 Ekim 2026, 21:00 TSİ";
export const breakingIntel = liveConflictData.breakingIntel;

export const legalDisclaimer = {
  title: "Yasal Uyarı, Ulusal Güvenlik ve Mevzuat Bildirimi",
  badge: "657 SK. ve TCK Mevzuatına Tam Uyum Bildirimi",
  paragraphs: [
    "1. AÇIK KAYNAK GÜVENCESİ (OSINT): Bu sitede yer alan tüm silah, mühimmat, balistik, aksesuar ve askeri teknoloji verileri; üretici firmaların (MKE A.Ş., Sarsılmaz, CANiK vb.) halka açık resmi kataloglarından, Savunma Sanayii Başkanlığı (SSB) basın bültenlerinden, IDEF/TEKNOFEST fuarlarından ve uluslararası tescilli savunma yayınlarından (Jane's, Defence Review vb.) derlenmiştir.",
    "2. ULUSAL GÜVENLİK VE DEVLET SIRRI: Sitede Türkiye Cumhuriyeti'nin güvenliğini ilgilendiren hiçbir gizli, hizmete özel veya 'Devlet Sırrı' niteliğinde askeri/kolluk bilgisi, gizli envanter kaydı, operasyonel plan veya gizli taktik veri KESİNLİKLE yer almamaktadır ve yer alamaz (TCK 326-339. maddelerine tam uyum).",
    "3. 657 SAYILI DEVLET MEMURLARI KANUNU UYUMU: Bu site tamamen kâr amacı gütmeyen, bağımsız ve bilimsel/teknik bilgi paylaşımı amaçlı kişisel bir blogdur. Sitede 657 sayılı Kanunun 28. maddesine aykırı hiçbir ticari faaliyet, silah satışı, gelir getirici danışmanlık, reklam veya aracılık hizmeti yürütülmemektedir. Ayrıca 15. madde uyarınca yürütülen herhangi bir kamu görevi veya kurumsal işleyişe dair hiçbir bilgi veya demeç verilmemektedir."
  ]
};

export const categories = [
  "Tümü",
  "Askeri Silahlar & Balistik",
  "Silah Eğitimleri & Prosedürler",
  "Silah Aksesuarları & Optikler",
  "Saldırı & Savunma Teknolojileri",
  "Küresel Çatışmalar & Sıcak Olaylar"
];

// Dünyada aktif olarak devam eden savaşlar, silahlı çatışmalar ve sıcak kriz bölgeleri (Otomatik Güncellenir)
export const globalConflicts = liveConflictData.conflicts;


export const articles = [
  {
    id: "libya-deniz-yetki-alani-mavi-vatan-onay",
    title: "Libya Meclisi'nden Tarihi Mavi Vatan Onayı: Türkiye-Libya Deniz Yetki Alanları Anlaşması Oy Birliğiyle Kabul Edildi",
    category: "Küresel Çatışmalar & Sıcak Olaylar",
    readTime: "12 dk okuma",
    date: "21 Ekim 2026",
    excerpt: "Libya Temsilciler Meclisi (Bingazi), Türkiye ile imzalanan Deniz Yetki Alanlarının Sınırlandırılması Mutabakatı'nı oy birliğiyle onaylayarak 2020 ret kararını iptal etti. Mavi Vatan koridoru, çöken Seville haritası, Atina-AB paniği ve Türk donanmasının yeni safhası.",
    tags: ["Mavi Vatan", "Libya", "Deniz Yetki Alanları", "Doğu Akdeniz", "Temsilciler Meclisi", "Yunanistan", "Oruç Reis", "Sismik Araştırma"],
    featured: true,
    likes: 1480,
    content: `
### GİRİŞ: DOĞU AKDENİZ'DE TARİHİ JEOPOLİTİK DÖNÜM NOKTASI

Doğu Akdeniz'deki hidrokarbon ve deniz yetki alanları mücadelesinde Türkiye'nin "Mavi Vatan" doktrinini uluslararası hukuki zeminde perçinleyen tarihi bir gelişme yaşandı. 

Libya'nın doğusunda faaliyet gösteren ve yıllardır Türkiye karşıtı bir çizgide konumlanan **Libya Temsilciler Meclisi (Bingazi / Akile Salih Meclisi)**, Türkiye Cumhuriyeti ile Libya arasında 27 Kasım 2019'da imzalanan *"Akdeniz'de Deniz Yetki Alanlarının Sınırlandırılmasına İlişkin Mutabakat Muhtırası"*nı **oy birliğiyle resmen onayladı.**

Ayrıca Meclis, mutabakatın reddine ilişkin 2020 yılında aldığı eski parlamenter kararını da yine oy birliğiyle **feshederek yürürlükten kaldırdı.**

---

### BU KARAR NEDEN "TARİHİ" BİR KIRILMA NOKTASIDIR?

1. **Libya'nın İki Kanadı da Anlaşmayı Onayladı (Tam Ulusal Meşruiyet):**
   * 2019 yılında mutabakat Trablus'taki Ulusal Mutabakat Hükümeti (UMH) ile imzalandığında, Yunanistan, Mısır, İsrail ve Avrupa Birliği; "Anlaşmanın Libya Temsilciler Meclisi tarafından onaylanmadığı, bu nedenle hukuken geçersiz olduğu" tezine sığınıyordu.
   * Bingazi'deki Temsilciler Meclisi'nin oy birliğiyle aldığı bu karar; Libya'nın hem Batı (Trablus) hem Doğu (Bingazi/Tobruk) siyasi iradelerinin anlaşmayı resmen tanıdığını tescilledi. Yunanistan'ın yıllardır öne sürdüğü "geçersizlik" argümanı kökünden çöktü.

2. **Sözde Seville Haritası ve Yunan İddialarının Çöküşü:**
   * Yunanistan ve Güney Kıbrıs Rum Yönetimi (GKRY); Meis, Rodos, Kerpe, Kaşot ve Girit adalarının ana karalar gibi devasa kıta sahanlığı ürettiğini iddia ederek Türkiye'yi Antalya Körfezi'ne hapsetmeye çalışıyordu (Seville Haritası).
   * Türkiye-Libya deniz sınırı, Anadolu ana karası ile Libya ana karası arasındaki karşılıklı kıyıları esas alarak Doğu Akdeniz'i köşegenle ikiye bölen bir "Deniz Koridoru" oluşturmuştur. Bu koridor, Yunanistan'ın Mısır ve İsrail ile Türkiye'yi dışlayan korsan deniz hattı kurmasını fiziksel olarak engellemektedir.

3. **Enerji ve Hidrokarbon Arama Sahalarının Hukuki Güvencesi:**
   * Mutabakatın tescillenmesiyle Türkiye Petrolleri Anonim Ortaklığı'nın (TPAO) Girit'in güneyi ve doğusunda ilan ettiği ruhsat sahalarında Türk sismik ve derin deniz sondaj gemilerinin (Oruç Reis, Abdülhamid Han, Fatih, Yavuz, Kanuni) faaliyetleri tartışmasız bir uluslararası meşruiyet zırhına bürünmüştür.

---

### TÜRK DENİZ KUVVETLERİ VE ASKERİ MEKANİZMA

Deniz yetki anlaşmasının hukuki başarısı, sahadaki güçlü donanma caydırıcılığıyla doğrudan bağlantılıdır:

* **MİLGEM ADA Sınıfı ve Fırkateyn Kalkanı:** Türk Deniz Kuvvetleri, Doğu Akdeniz'deki araştırma gemilerini TCG Heybeliada, TCG Büyükada, TCG Kınalıada ve gabya sınıfı fırkateynlerle kesintisiz koruma çemberine almaktadır.
* **ATMACA ve Hava Savunma Üstünlüğü:** 220+ km menzilli milli gemisavar füzesi ATMACA ve denizaltı savunma harbi sistemleri bölgede yabancı tacizlerini caydırmaktadır.
* **MARLİN ve ULAQ SİDA Entegrasyonu:** Dünyanın ilk elektronik harp kabiliyetli silahlı insansız deniz aracı MARLİN ve füzeli ULAQ botları, Doğu Akdeniz devriyelerinde kritik görev almaktadır.

---

### ULUSLARARASI TEPKİLER: ATİNA, BRÜKSEL VE İSRAİL CEPHESİ

* **Yunanistan:** Atina'da kararın ardından Dışişleri Bakanlığı olağanüstü toplantılar düzenlerken, Yunan medyası gelişmeyi *"Atina diplomasisine indirilmiş ağır bir balyoz"* olarak nitelendirdi.
* **Avrupa Birliği (AB):** Brüksel yönetimi mutabakatın üçüncü ülkelerin egemenlik haklarını ihlal ettiğini öne sürse de; Libya Meclisi'nin bağımsız egemen iradesine karşı hukuki bir yaptırım gücü bulunmuyor.
* **Ankara'nın Net Mesajı:** Dışişleri Bakanı Hakan Fidan ve Cumhurbaşkanlığı, Türkiye'nin Mavi Vatan'daki haklarından asla taviz verilmeyeceğini, kararın Doğu Akdeniz'de barış, istikrar ve hakkaniyete hizmet ettiğini vurguladı.

---

### STRATEJİK DEĞERLENDİRME

Libya Temsilciler Meclisi'nin oy birliği kararı, Türk dış politikasının ve savunma sanayiinin Doğu Akdeniz'de son 20 yılda attığı en büyük stratejik zaferlerden biridir. Mavi Vatan sadece bir askeri doktrin olmaktan çıkmış; Doğu Akdeniz'in iki yakasındaki halkların parlamentolarıyla tescillediği sarsılmaz bir uluslararası hukuki gerçeklik haline gelmiştir.
`
  },
  {
    id: "boran-uluslararasi-keskin-nisanci-yarismasi-poh-kn12",
    title: "8. BORAN Uluslararası Keskin Nişancı Yarışması: PÖH Şampiyonluğu, Kürsü Zaferi ve MKE KN-12 Analizi",
    category: "Askeri Silahlar & Balistik",
    readTime: "12 dk okuma",
    date: "20 Ekim 2026",
    excerpt: "İzmir Foça'da 20 ülkeden 96 seçkin keskin nişancının katıldığı 8. BORAN Yarışması'nda Polis Özel Harekât (PÖH) birinci oldu. Milli çoklu kalibre keskin nişancı tüfeği MKE KN-12, yarışma sıralaması ve zorlu etapların teknik analizi.",
    tags: ["8. BORAN", "Polis Özel Harekat", "PÖH", "MKE KN-12", "Keskin Nişancı", "Özel Kuvvetler", "KNT-76", "BORA-12"],
    featured: true,
    likes: 1240,
    content: `
### GİRİŞ: FOÇA'DA DÜNYA SEVİYESİNDE KESKİN NİŞANCI REKABETİ

Jandarma Genel Komutanlığı ev sahipliğinde, İzmir Foça Jandarma Komando Okulu ve Eğitim Merkezi Komutanlığı'nda düzenlenen **8. BORAN Uluslararası Keskin Nişancı Yarışması**, dünyanın en prestijli taktik ve cerrahi atış etkinliklerinden biri olarak tamamlandı. 

Yarışmaya **20 farklı ülkeden toplam 96 seçkin keskin nişancı** (ABD, İngiltere, Katar, Azerbaycan, Suudi Arabistan, Kazakistan, Özbekistan, Pakistan, Bahreyn vb.) katılarak fiziksel dayanıklılık, kamuflaj, gece görüş atışları, aşırı rüzgar ve açı hesaplamaları gibi son derece zorlu parkurlarda yarıştı.

---

### YARIŞMA SIRALAMASI VE KÜRSÜ TABLOSU

8. BORAN yarışmasında Türk güvenlik güçleri uluslararası tüm rakiplerini geride bırakarak **kürsünün tamamını (1., 2. ve 3. basamakları)** domine etti:

1. 🥇 **BİRİNCİ (DÜNYA ŞAMPİYONU):** **Emniyet Genel Müdürlüğü Polis Özel Harekât (PÖH) Başkanlığı**
   * PÖH timleri, gece ve gündüz etaplarında hedefleri en kısa sürede ve ilk atışta (first-round hit) vurarak genel klasmanda zirveye yerleşti.
   * Şampiyonlukta kullanılan ana silah: **Milli Çok Kalibreli MKE KN-12 Keskin Nişancı Tüfeği**.

2. 🥈 **İKİNCİ:** **Genelkurmay Özel Kuvvetler Komutanlığı (ÖKK - Bordo Bereliler)**
   * Yüksek irtifa, sızma ve aşırı stres parkurlarındaki cerrahi isabetleriyle dünya ikinciliğini elde etti.

3. 🥉 **ÜÇÜNCÜ:** **Kara Kuvvetleri Komutanlığı**
   * Manga keskin nişancı tüfeği **MKE KNT-76** ve yerli optiklerle desteklenen Kara Kuvvetleri timi, yabancı özel birlikleri geride bırakarak 3. oldu.

4. **Yabancı Katılımcılar Sıralaması:**
   * Katar Özel Kuvvetleri, Azerbaycan Özel Kuvvetleri ve Suudi Arabistan timleri ilk 10 içinde yer alırken; ABD ve İngiltere temsilcileri Türk timlerinin hız ve isabet derecelerine yetişemedi.

---

### ŞAMPİYON TÜFEK: MKE KN-12 ÇOKLU KALİBRE CERRAHİ TÜFEK

PÖH'e şampiyonluk getiren ve yarışmanın odak noktası haline gelen **MKE KN-12**, Türk savunma sanayiinin ilk değişken kalibreli modüler keskin nişancı tüfeğidir:

1. **Değiştirilebilir Namlu ve Mekanizma:**
   * Operatör arazide dakikalar içinde kilit ve namluyu değiştirerek **7.62x51mm NATO (.308 Win)** kalibresinden **.300 Winchester Magnum (8.6x70mm)** kalibresine geçiş yapabilmektedir.
   * Bu özellik; meskun mahalde veya orta menzilde 7.62mm ekonomi ve kontrolü sağlarken, 1000m+ açık arazi hedeflerinde .300 Win Mag'in süpersonik düz hatlı balistik avantajını devreye sokar.

2. **Cerrahi Hassasiyet (Sub-MOA):**
   * KN-12, **0.5 MOA'nın altında** grupman performansı sunmaktadır (100 metrede yaklaşık 1.4 cm çapında bir daireye mermileri toplayabilme kabiliyeti).
   * Serbest salınımlı (free-floating) soğuk dövme namlu yapısı, el kundağına veya bipod'a binen yüklerin namlu titreşimini (harmonics) bozmasını engeller.

3. **Etkili Cerrahi Menzil:**
   * .300 Win Mag konfigürasyonunda **1500 metreye kadar** nokta hedef tahribatı sağlayabilmektedir.
   * Yarışmadaki 800m - 1200m hedeflerinde PÖH nişancılarının rüzgar sapması (drift) ve yerçekimi düşüşünü (drop) minimum düzeltmeyle tolere etmesine imkan tanımıştır.

---

### YARIŞMANIN ZORLU ETAPLARI VE TAKTİK DİSİPLİNLER

BORAN yarışması klasik poligon atışlarından tamamen farklı, gerçek harp ortamını simüle eden senaryolardan oluşur:

* **Stres ve Fiziksel Kondisyon Etabı:** Nişancılar ağır taktik yük ile engelleri aştıktan ve kalp atış hızı 160-180 bpm seviyesine ulaştıktan hemen sonra saniyeler içinde 400-600 metredeki gizlenmiş hedeflere angaje oldu.
* **Gece Termal ve Gece Görüş (NVG) Atışları:** Sıfır ışıkta, termal kamuflajlı ve reaktif hedeflere yönelik cerrahi gece atışları icra edildi.
* **Meskun Mahal Rehineli Hedef Ayrımı:** Dost unsurlar ile düşman hedeflerinin milisaniyeler içinde teşhis edilip vurulması gereken açısal poligon parkuru.
* **Aşırı Uzun Menzil (1200m+) ve Açılı Atışlar:** Vadi ve yükselti farkı olan Ege arazisinde, termal hava akımları (mirage) ve çapraz rüzgarlar altında 1 kilometreyi aşan hedeflere ilk mermide isabet başarısı ölçüldü.

---

### SONUÇ: TÜRK ASKERİ VE YERLİ SİLAH DOKTRİNİNİN ÜSTÜNLÜĞÜ

8. BORAN Uluslararası Keskin Nişancı Yarışması iki büyük gerçeği tescillemiştir:
1. **İnsan Faktörü:** PÖH, ÖKK ve Kara Kuvvetleri personelinin gerek dağlık arazide gerek meskun mahalde edindiği operasyonel tecrübe ve disiplin, dünya özel kuvvetleri arasında zirvededir.
2. **Milli Silah Sanayii:** Eskiden yabancı silahlara (Accuracy International, Barrett, Sako vb.) bağımlı olan güvenlik güçlerimiz; artık **MKE KN-12**, **KNT-76** ve **BORA-12** gibi tamamen yerli ve milli silahlarla dünya şampiyonlukları kazanmakta, sahada mutlak üstünlük kurmaktadır.
`
  },
  {
    id: "kn23-kursk-donbas-tactical-ballistic",
    title: "Kursk ve Donbas Hattında KN-23 Taktik Balistik Füzeleri: Yarı-Balistik Manevra ve Topçu Entegrasyonu",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "11 dk okuma",
    date: "20 Ekim 2026",
    excerpt: "Kuzey Kore menşeili KN-23 (Hwasong-11Ga) katı yakıtlı füzelerinin alçak irtifa seyrüseferi, pull-up manevrası ve Kursk sınır hattındaki 152mm/122mm mühimmat ve personel sevkiyatı analizi.",
    tags: ["KN-23", "Kursk Cephesi", "Taktik Balistik Füze", "Donbas", "Hwasong-11", "Hava Savunma"],
    featured: true,
    likes: 865,
    content: `
### GİRİŞ: DOĞU AVRUPA VE KORE YARIMADASI KESİŞİMİ

Ekim 2026 askeri istihbarat raporlarında (OSINT), Rusya-Ukrayna savaşı Kursk sınır cebi ve Donbas hattında Kuzey Kore menşeili taktik balistik füzelerin (KN-23 / Hwasong-11Ga) ve milyonlarca 152mm topçu mühimmatının yoğun kullanımı muharebe sahasını stratejik olarak genişletmiştir.

### KN-23 (HWASONG-11GA) FÜZESİNİN BALİSTİK DİNAMİKLERİ

1. **Yarı-Balistik (Quasi-Ballistic) Alçak İrtifa Uçuş Profili:**
   * Klasik parabolik balistik yay çizmek yerine, atmosferin üst sınırında (40-50 km irtifada) yatay uçuş gerçekleştirir.
   * Bu sayede kara konuşlu erken ihbar radarlarının radar ufkunun (radar horizon) altında kalarak tespit süresini asgariye indirir.

2. **Terminal Fazda 'Pull-Up' (Yukarı Tırmanma) Manevrası:**
   * Hedefe dalışa geçmeden önce aerodinamik kanatçıklarıyla ani bir irtifa tırmanışı yaparak Patriot PAC-3 veya SAMP/T gibi hava savunma sistemlerinin önleme algoritmasını yanıltır ve 90 dereceye yakın dik açıyla dalış yapar.
   * 500 kg harp başlığı ve ~600-700 km operasyonel menzil sunmaktadır.

3. **152mm ve 122mm Sovyet Standardı Topçu Uyumluluğu:**
   * Kuzey Kore cephaneliklerinden gelen mühimmatlar, Rus 2S19 Msta-S ve D-20 obüsleriyle birebir kovan uyumluluğuna sahip olup, günde on binlerce atımlık ateş üstünlüğü sağlamaktadır.
    `
  },
  {
    id: "hurmuz-kizildeniz-sida-akilli-deniz-mayini",
    title: "Hürmüz Boğazı ve Kızıldeniz'de SİDA Devrimi: Akıllı Deniz Mayınları ve Asimetrik Deniz Harbi",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "11 dk okuma",
    date: "19 Ekim 2026",
    excerpt: "MARLİN, ULAQ ve kamikaze insansız deniz araçlarının (USV) dar boğazlardaki krizlerde oynadığı rol, akustik/manyetik akıllı dip mayınları ve asimetrik kıyı savunma doktrini.",
    tags: ["SİDA", "MARLİN", "ULAQ", "Hürmüz Boğazı", "Kızıldeniz", "Akıllı Mayın", "Asimetrik Deniz Harbi"],
    featured: true,
    likes: 834,
    content: `
### GİRİŞ: DAR SU YOLLARINDA ASİMETRİK DENİZ HARBİ VE SİDA ÇAĞI

Ekim 2026 küresel jeopolitiğinde, Hürmüz Boğazı ve Kızıldeniz (Babülmendep) hattı, klasik muhripler ve fırkateynlerin yerini hafif, ucuz ve otonom İnsansız Deniz Araçlarına (SİDA / USV) bıraktığı bir taktik dönüşüm yaşamaktadır.

### AKILLI DENİZ MAYINLARI VE OTONOM DİP SİSTEMLERİ

1. **Çok Modlu Akustik ve Manyetik Algılama:**
   * Klasik demirli temas mayınları yerine; deniz tabanında yatan, geçen geminin tonajını ve akustik motor pervanesi imzasını analiz ederek sadece askeri hedefleri vuran akıllı dip mayınları.
   * Gemi yaklaşırken tabandan fırlayan roket güdümlü torpido-mayın hibrit sistemleri.

2. **Türk Savunma Sanayiinin SİDA Doktrini (MARLİN & ULAQ):**
   * **MARLİN SİDA:** NATO tatbikatlarında elektronik harp podu taşıyarak dünyada ilk kez elektronik taarruz icra eden insansız su üstü platformudur. Düşman sahil radarlarını körleştirirken KUZGUN seyir füzeleri fırlatabilmektedir.
   * **ULAQ SİDA Ailesi:** CİRİT ve L-UMTAS lazer güdümlü füzeleriyle asimetrik hücumbot akınlarını yüzlerce mil açıktan karşılayan milli deniz muhafızı.

3. **Sürü Taktikleri ve Denizaltı Savunma Harbi (DSH):**
   * Hafif torpido taşıyan veya daldırma sonarı indiren otonom SİDA sürüleri, milyonlarca dolarlık denizaltıların boğaz geçişlerini tamamen abluka altına alabilmektedir.
    `
  },
  {
    id: "lazer-ve-mikrodalga-hpm-anti-drone-savunma",
    title: "Taktik Lazer ve Mikrodalga (HPM) Silahları: Dron Sürülerine Karşı 'Sıfır Maliyetli' Işık Hızı Kalkanı",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "19 Ekim 2026",
    excerpt: "ASELSAN GÖKBERK ve ROKETSAN ALKA sistemlerinin sürü kamikaze İHA'lara karşı kilowatt başına atış maliyetini kuruş seviyesine indiren yönlendirilmiş enerji devrimi.",
    tags: ["Lazer Silahı", "GÖKBERK", "ALKA", "HPM Mikrodalga", "Anti-Drone", "Yönlendirilmiş Enerji"],
    featured: true,
    likes: 792,
    content: `
### HAVA SAVUNMASINDA EKONOMİK AÇMAZ: FÜZE VS. UCUZ DRON

Geleneksel hava savunma füzelerinin (Patriot, SM-2, HİSAR vb.) her bir atış maliyeti 100.000 ila 2.000.000 dolar arasındayken; hedeflenen intihar dronlarının maliyeti 500 ila 5.000 dolardır. Bu asimetrik maliyet dengesizliğini kalıcı olarak çözen teknoloji: **Yönlendirilmiş Enerji Silahları (DEW)**.

### LAZER VE YÜKSEK GÜÇLÜ MİKRODALGA (HPM) MEKANİZMASI

1. **ASELSAN GÖKBERK Mobil Lazer Silah Sistemi:**
   * Çok namlulu elektro-optik hedefleme ve 5 kW - 10 kW fiber lazer kaynağı ile kamikaze İHA'ların kanatlarını, kompozit gövdelerini ve optik kameralarını 1 saniyenin altında eriterek imha eder.
   * Şarjör sınırlaması yoktur; aracın jeneratörü veya bataryası çalıştığı sürece sınırsız mermi kapasitesine sahiptir. Her atışın maliyeti sadece birkaç sentlik elektrik tüketimidir.

2. **ROKETSAN ALKA Yönlendirilmiş Enerji Ağı:**
   * Elektromanyetik karıştırma (Jammer) ve yüksek güçlü lazeri tek kulede birleştirir.
   * Yaklaşan dron sürüsünün haberleşmesini keser; yaklaşmaya devam edenleri lazer ışınıyla imha eder.

3. **Yüksek Güçlü Mikrodalga (HPM) ile Toplu Sürü İmhası:**
   * Lazer tek bir hedefe odaklanırken, HPM (High Power Microwave) konik bir mikrodalga şoku yayarak havadaki 20-30 dronun tüm mikroçiplerini aynı anda yakar ve sürüyü gökyüzünden yere indirir.
    `
  },
  {
    id: "thaad-arrow-3-exo-atmospheric-defense",
    title: "THAAD ve Arrow-3 vs. Hipersonik Balistik Tehditler: Atmosfer Dışı Uzay ve Füze Savunma Doktrini",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "12 dk okuma",
    date: "15 Ekim 2026",
    excerpt: "ABD'nin İsrail'e konuşlandırdığı THAAD bataryaları, AN/TPY-2 erken ihbar radarı ve Arrow-3 ile uzay boşluğunda Hit-to-Kill exo-atmosferik füze önleme mimarisi.",
    tags: ["THAAD", "Arrow-3", "Balistik Füze", "Exo-Atmosferik", "Uzay Harbi", "Fettah"],
    featured: true,
    likes: 812,
    content: `
### GİRİŞ: STRATOSFER VE UZAY BOŞLUĞUNDA BALİSTİK ÖNLEME

Ekim 2026'da Orta Doğu sahasında katı yakıtlı balistik füzeler ve hipersonik kayma araçlarının (HGV) kitlesel salvo halinde kullanılması, küresel hava savunma mimarisini yer seviyesinden uzay boşluğuna (Exo-Atmospheric) taşımıştır.

### THAAD VE ARROW-3 SİSTEMLERİNİN ÇALIŞMA MEKANİZMASI

1. **AN/TPY-2 İleri Konuşlu X-Band Radarı:**
   * Binlerce kilometrelik menziliyle füzelerin yakıt tükenme (burn-out) irtifasını milimetrik olarak izler.
   * Hedefin gerçek harp başlığı mı yoksa yanıltıcı sahte hedef (decoy) mi olduğunu radar dalgalarının mikro-doppler yansımalarından ayrıştırır.

2. **Hit-to-Kill (Doğrudan Kinetik Çarpma) Prensibi:**
   * Klasik parçacıklı harp başlığı yerine, önleme füzesinin kinetik öldürücü aracı (KKV) saniyede 3.5 kilometre hızla hedefin gövdesine doğrudan çarparak imha eder.
   * Bu sayede kimyasal, biyolojik veya nükleer yüklerin infilak etmeden uzayda buharlaşması sağlanır.

3. **Çok Katmanlı Ağ Entegrasyonu:**
   * Uzay boşluğunda **Arrow-3** önleme yapar; ıskalanması halinde üst atmosferde **THAAD**, alt atmosferde ise **David's Sling (Davud Sapanı)** ve **Patriot PAC-3** devreye girer.
    `
  },
  {
    id: "fiber-optic-spool-fpv-drones-doctrine",
    title: "Fiber-Optik Makaralı FPV Dronlar: Jammer Kalkanlarını Çözen Kablolu Harp Devrimi",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "15 Ekim 2026",
    excerpt: "Elektronik harp jammer'larının iflas ettiği Donbas ve Pokrovsk siperlerinde 15 km mikro fiber-optik makaralı FPV kamikaze dronların muharebe sahasını ele geçirmesi.",
    tags: ["Fiber-Optik", "FPV Dron", "Elektronik Harp", "Pokrovsk", "Asimetrik Harp"],
    featured: true,
    likes: 749,
    content: `
### ELEKTRONİK HARPTE KURALLARI YIKAN DEVRİM: KABLOLU DRONLAR

Donbas, Pokrovsk ve Kursk temas hatlarında ortaya çıkan en şaşırtıcı taktik gelişme, her iki tarafın kablosuz radyo dalgalarını tamamen terk ederek arkasından 10-15 km mikro fiber-optik kablo salan FPV kamikaze dronlara geçmesidir.

### FİBER-OPTİK İNTİHAR DRONLARININ ÜSTÜNLÜKLERİ

1. **%100 Jammer ve Elektronik Karıştırma Bağışıklığı:**
   * Sinyal bozucular (Jammer'lar) sadece radyo frekanslarını (RF) kesebilir. Dron komutları ve video verisi cam elyaf kablo içinden ışık hızında aktığı için sahadaki en güçlü elektronik harp kuleleri bile bu dronları durduramaz.

2. **Kristal Netliğinde 4K Sıfır Gecikmeli Görüntü:**
   * Klasik analog FPV dronlar yere yaklaştıkça sinyal zayıflar ve karıncalanır. Fiber-optik kabloda ise son saniyeye kadar pırıl pırıl 4K görüntü gelir; operatör tankın en zayıf zırh kapağını nokta atışıyla seçebilir.

3. **Sıfır Elektronik İz:**
   * RF yayını yapmadığı için düşmanın elektronik gözetleme istasyonları dronun nereden kalktığını ve operatörün nerede saklandığını tespit edemez.
    `
  },
  {
    id: "siper-urun-2-balistik-onleme-testi",
    title: "SİPER Ürün-2 Uzun Menzilli Bölge Hava Savunma Sistemi: Balistik Önleme Başarısı",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "14 Ekim 2026",
    excerpt: "ROKETSAN ve ASELSAN ortaklığıyla geliştirilen SİPER Ürün-2 füzesinin Sinop atış alanında 150+ km menzilde yüksek irtifa ve süpersonik hedefi doğrudan vuruşla (Hit-to-Kill) imha testi.",
    tags: ["SİPER", "Hava Savunma", "Çelik Kubbe", "ROKETSAN", "ASELSAN", "Hit-to-Kill"],
    featured: true,
    likes: 785,
    content: `
### SİPER ÜRÜN-2 İLE TÜRKİYE'NİN STRATEJİK HAVA SAVUNMA KALKANI

Türk savunma sanayiinin 'Çelik Kubbe' vizyonunun en kritik uzun menzilli ayağını oluşturan **SİPER Ürün-2**, Sinop Atış Alanı'nda gerçekleştirilen en kapsamlı harp başlıklı atış testinde hedefi tam isabetle imha etmiştir.

### TEKNİK KABİLİYETLER VE GELİŞMİŞ RADAR ENTEGRASYONU

1. **Gelişmiş Çift Kademeli İtki:**
   * SİPER Ürün-1'e kıyasla daha kalın çaplı katı yakıtlı roket motoru ve manevra kabiliyetini artıran itki vektör kontrol (TVC) sistemi.
   * 150 kilometreyi aşan önleme menzili ve 30.000+ metre irtifa tavanı ile düşman avcı jetleri, seyir füzeleri ve taktik balistik füzelere karşı tam koruma.

2. **Aktif Radar Arayıcı Başlık (RF Seeker):**
   * Son yaklaşma fazında hedefi milimetrik hassasiyetle kilitleyen yerli RF arayıcı başlık.
   * ASELSAN EİRS (Erken İhbar Radar Sistemi) ve Filo Seviyesi Atış Kontrol Radarları ile kesintisiz veri bağı (Data Link) iletişimi.

3. **Milli Hava Sahası Entegrasyonu:**
   * HAKİM Komuta Kontrol yazılımı üzerinden KORKUT ve HİSAR bataryalarıyla müşterek hava resmi oluşturarak mühimmat israfını önleyen yapay zekâ hedef önceliklendirmesi.
    `
  },
  {
    id: "som-j-f-35-kaan-cruise-missile",
    title: "SOM-J ve ÇAKIR Seyir Füzeleri: Mini Turbojet Motorlu Yeni Nesil Hassas Taarruz",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "9 dk okuma",
    date: "09 Ekim 2026",
    excerpt: "Kale Arge KTJ-3200 ve KTJ-1750 turbojet motorlarıyla güçlendirilen SOM-J ve ÇAKIR füzelerinin KAAN dahili istasyonundan ve AKINCI TİHA'dan gerçekleştirilen su üstü hedef atışları.",
    tags: ["SOM-J", "ÇAKIR", "Seyir Füzesi", "ROKETSAN", "Kale Arge", "KTJ-3200"],
    featured: true,
    likes: 615,
    content: `
### MİLLİ TURBOJET MOTORLARLA STRATEJİK VURUŞ GÜCÜ

ROKETSAN ve TÜBİTAK SAGE tarafından geliştirilen **SOM-J** ve kompakt seyir füzesi **ÇAKIR**, yerli turbojet motorlarla seri üretim ve operasyonel kabul testlerini tamamlamıştır.

### ÖNE ÇIKAN HAREKÂT DİNAMİKLERİ

1. **Dahili Silah İstasyonu Optimizasyonu:**
   * KAAN ve KIZILELMA gibi 5. nesil hayalet platformların gövde içi istasyonlarına sığacak şekilde tasarlanan aerodinamik katlanır kanat geometrisi.

2. **Görüntüleyici Kızılötesi (IIR) ve Karıştırmasız Navigasyon:**
   * Yeryüzü referanslı seyrüsefer (TERCOM) ve hedefin termal silüetini hafızasındaki veri tabanıyla eşleştiren akıllı kızılötesi arayıcı başlık sayesinde yoğun GPS karıştırmasında dahi sıfır sapma.

3. **Çok Platformlu Kullanım:**
   * SİHA'lar (AKINCI, AKSUNGUR), insanlı savaş uçakları, SİDA'lar (ULAQ, MARLİN) ve karadan atılan kıyı savunma bataryalarından fırlatılabilme kabiliyeti.
    `
  },
  {
    id: "kaan-5th-gen-fighter-supersonic-avionics",
    title: "Milli Muharip Uçak KAAN: Süpersonik Seyir ve 5. Nesil Aviyonik Mimarisi",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "05 Ekim 2026",
    excerpt: "TUSAŞ KAAN'ın yüksek irtifa ve süpersonik uçuş testleri, ASELSAN MURAD AESA burun radarı entegrasyonu ve dahili silah istasyonunun aerodinamik analizi.",
    tags: ["KAAN", "Milli Muharip Uçak", "AESA Radar", "5. Nesil", "TUSAŞ"],
    featured: true,
    likes: 582,
    content: `
### GİRİŞ: TÜRKİYE'NİN 5. NESİL HAVA ÜSTÜNLÜĞÜ DOKTRİNİ

TUSAŞ (Türk Havacılık ve Uzay Sanayii) tarafından geliştirilen Milli Muharip Uçak KAAN, Türk Hava Kuvvetleri'nin envanterindeki F-16 filolarının yerini almak ve ağ merkezli harp yeteneği kazandırmak amacıyla tasarlanmıştır.

### AÇIK KAYNAKLI TEKNİK VE AVİYONİK ANALİZİ

1. **Düşük Radar Kesit Alanı (Stealth):**
   * Gövde içi dahili silah istasyonları (Internal Weapon Bays) sayesinde füze taşırken dahi radar izi minimuma indirilmektedir.
   * Özel kompozit radar soğurucu malzemeler (RAM kaplama) ve radar yansımalarını saptıran eğimli gövde geometrisi.

2. **MURAD AESA Radarı (ASELSAN):**
   * Galyum Nitrür (GaN) tabanlı modüllerle çalışan aktif elektronik taramalı radar mimarisi.
   * Aynı anda onlarca hava hedefini takip ederken bağımsız olarak elektronik taarruz (radar karıştırma) yapabilme kabiliyeti.

3. **Süpersonik Seyir (Supercruise):**
   * Art yakıcı (Afterburner) kullanmaksızın ses hızının üzerinde uçabilme, bu sayede yakıt tüketimini düşürüp harekat yarıçapını maksimuma çıkarma.
    `
  },
  {
    id: "kizilelma-insansiz-savas-ucagi-it-dalasi",
    title: "Bayraktar KIZILELMA: İnsansız Savaş Uçağı Doktrini ve Görüş Ötesi Hava Muharebesi",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "11 dk okuma",
    date: "07 Ekim 2026",
    excerpt: "KIZILELMA'nın süpersonik motor testleri, AESA radar güdümlü GÖKDOĞAN ve BOZDOĞAN füzeleriyle otonom it dalaşı (dogfight) algoritması ve düşük radar izi analizi.",
    tags: ["KIZILELMA", "İnsansız Savaş Uçağı", "Baykar", "AESA Radar", "GÖKDOĞAN"],
    featured: true,
    likes: 684,
    content: `
### İNSANSIZ HAVA MUHAREBESİNDE DÖNÜM NOKTASI: KIZILELMA

Baykar tarafından öz kaynaklarla geliştirilen **Bayraktar KIZILELMA (MİUS)**, havacılık tarihinde jet motorlu insansız savaş uçağı konseptini somut bir muharebe platformuna dönüştüren öncü projedir.

### TEKNİK VE OPERASYONEL MİMARİ

1. **Yüksek Manevra Kabiliyeti & Otonom Karar Mekanizması:**
   * İnsan pilotun maruz kaldığı fizyolojik G-kuvveti sınırlarını (9G sınırı) aşabilen aerodinamik gövde tasarımı ve kanart (canard) kontrol yüzeyleri.
   * Yapay zekâ destekli otonom kol uçuşu (Manned-Unmanned Teaming / MUM-T) ile KAAN ve F-16 filolarına sadık kanat adamı (Loyal Wingman) olarak eşlik edebilme.

2. **Dahili Silah İstasyonu ve Hava-Hava Angajmanı:**
   * TÜBİTAK SAGE üretimi Görüş Ötesi (BVR) GÖKDOĞAN ve Görüş İçi BOZDOĞAN füzelerini gövde içinde taşıyarak radar kesit alanını asgari düzeyde tutma.
   * ASELSAN MURAD AESA radarı entegrasyonu sayesinde yüzlerce kilometre menzildeki hava hedeflerini pasif ve aktif modda izleyebilme.

3. **Kısa Pistli Gemilere İniş-Kalkış:**
   * TCG Anadolu gibi LHD sınıfı kısa pistli amfibi hücum gemilerinden katapultsuz kalkış ve yakalama kancasıyla emniyetli iniş yapabilme doktrini.
    `
  },
  {
    id: "bayraktar-tb3-tcg-anadolu-naval-uav",
    title: "Bayraktar TB3 ve Deniz Havacılığı: TCG Anadolu'da Katlanan Kanat Devrimi",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "8 dk okuma",
    date: "06 Ekim 2026",
    excerpt: "Katlanabilir kanat yapısına sahip Bayraktar TB3'ün TCG Anadolu rampasından başarılı otonom iniş-kalkış testleri ve Mavi Vatan deniz karakol görevleri.",
    tags: ["Bayraktar TB3", "TCG Anadolu", "Deniz Havacılığı", "Mavi Vatan", "TEI PD170"],
    featured: true,
    likes: 541,
    content: `
### DÜNYADA BİR İLK: KISA PİSTLİ GEMİDEN SİHA OPERASYONU

Bayraktar TB3, TCG Anadolu gibi amfibi hücum gemilerinden hiçbir mancınık veya fırlatma sistemi kullanmaksızın, kendi motor gücü ve özel rampa geometrisiyle havalanabilen dünyanın ilk silahlı insansız deniz hava aracıdır.

### DENİZ HAVACILIĞI TEKNİK DETAYLARI

1. **Katlanabilir Kanat ve Hangar Optimizasyonu:**
   * Gemi güvertesinde ve hangar katında minimum yer kaplayacak şekilde tasarlanan elektro-mekanik katlanır kanat mimarisi sayesinde TCG Anadolu'da onlarca TB3 aynı anda konuşlanabilmektedir.

2. **Yerli PD170 Turbodizel Motor:**
   * TEI tarafından geliştirilen çift turboşarjlı PD170 motoru; düşük yakıt sarfiyatı ve deniz seviyesindeki tuzlu korozif neme dayanıklı alaşımlarıyla 30 saati aşan havada kalış süresi sunmaktadır.

3. **Denizaltı Savunma ve Gemisavar Görevleri:**
   * Sonar şamandırası (sonobuoy) dinleme kabiliyeti, hafif torpido ve ROKETSAN ÇAKIR seyir füzesi atış yeteneğiyle açık denizlerde yüzlerce millik koruma kalkanı oluşturmaktadır.
    `
  },
  {
    id: "celik-kubbe-integrated-air-defense",
    title: "Çelik Kubbe Doktrini: Türkiye'nin Çok Katmanlı Entegre Hava ve Füze Savunma Ağı",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "12 dk okuma",
    date: "30 Eylül 2026",
    excerpt: "Korkut, HİSAR-A+/O+, SİPER Ürün-1/2 ve GÜRZ sistemlerinin HAKİM komuta kontrol mimarisiyle tek bir hava sahası resminde birleştirilmesi.",
    tags: ["Çelik Kubbe", "Hava Savunma", "SİPER", "HİSAR", "ASELSAN", "ROKETSAN"],
    featured: true,
    likes: 647,
    content: `
### KATMANLI HAVA SAVUNMASINDA YENİ DOKTRİN: ÇELİK KUBBE

Savunma Sanayii İcra Komitesi (SSİK) kararıyla duyurulan **Çelik Kubbe (Steel Dome)** projesi, münferit hava savunma bataryalarının ötesinde, yapay zekâ destekli bütünleşik bir hava savunma mimarisidir.

### KATMANLAR VE GÖREV PAYLAŞIMI

* **Çok Alçak İrtifa & Nokta Savunma (0 - 4 km):**
  * **KORKUT 35mm Parçacıklı Mühimmatlı Namlulu Sistem:** Seyir füzeleri ve mini İHA'lara karşı dakikada 1100 atım hızı (ATOM akıllı mühimmat).
  * **GÜRZ & ŞAHİN:** Mobil kamikaze İHA önleme sistemleri.
* **Alçak İrtifa (4 - 15 km):**
  * **HİSAR-A+:** Zırhlı mekanize birliklerin intikali sırasında hava koruması sağlayan otonom füze bataryası.
* **Orta İrtifa (15 - 35 km):**
  * **HİSAR-O+:** Kritik askeri üsler, limanlar ve stratejik tesislerin savaş uçağı ve seyir füzelerinden korunması.
* **Uzun Menzil ve Bölge Savunması (35 - 150+ km):**
  * **SİPER Ürün-1 ve SİPER Ürün-2:** Yüksek irtifadaki balistik ve aerodinamik hedeflere karşı uzun menzilli caydırıcı kalkan.
* **HAKİM Komuta Kontrol Sistemi:**
  * Tüm radar verilerini, erken ihbar uçaklarını (HİK) ve bataryaları yapay zekâ yardımıyla tek bir müşterek taktik resimde birleştiren dijital beyin.
    `
  },
  {
    id: "fpv-kamikaze-drone-swarms-doctrine",
    title: "Modern Harp Alanında FPV Kamikaze Dronlar ve Sürü Zekası Doktrini",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "9 dk okuma",
    date: "22 Eylül 2026",
    excerpt: "500 dolarlık FPV dronların 5 milyon dolarlık zırhlı araçları saf dışı bırakması, fiber-optik karıştırmasız kablolar ve otonom hedef tanıma algoritmaları.",
    tags: ["FPV Dron", "Kamikaze İHA", "Asimetrik Harp", "Elektronik Harp"],
    featured: true,
    likes: 519,
    content: `
### ASİMETRİK HARPTE PARADİGMA DEĞİŞİMİ

Ukrayna ve Orta Doğu sahasındaki muharebeler, piyade taktiklerinde ve zırhlı birlik doktrinlerinde köklü değişikliklere yol açmıştır.

### FİBER-OPTİK KABLOLU DRONLAR VE ELEKTRONİK HARP

1. **RF Jammer Kalkanlarının İflası:**
   * Klasik FPV dronlar 2.4 GHz veya 5.8 GHz radyo dalgalarıyla kontrol edilirken, güçlü sinyal bozucular (Jammer) karşısında irtibat kaybediyordu.
   * Sahada ortaya çıkan makaralı fiber-optik kablolu (10 km - 15 km uzunluğunda) FPV dronlar hiçbir radyo dalgası yaymadığı için jammer'lardan %100 bağışık şekilde zırhlı hedefleri vurabilmektedir.

2. **Maliyet-Etkinlik Dengesi:**
   * Bir ana muharebe tankı (örneğin T-90M veya Leopard 2) ~4-8 milyon dolar değerindeyken; üzerine PG-7V RPG roketi monte edilmiş bir FPV dronun maliyeti sadece 500-800 dolardır.
   * Bu durum tankların üzerine 'ızgara kafesler' (cope cages) ve zırh üstü mobil jammer sistemleri eklenmesini zorunlu kılmıştır.
    `
  },
  {
    id: "electronic-warfare-gps-spoofing-ins",
    title: "Elektronik Harp Çağı: GNSS/GPS Karıştırma (Spoofing) ve Bağımsız Ataletsel Seyrüsefer",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "11 dk okuma",
    date: "14 Eylül 2026",
    excerpt: "Savaş bölgelerinde sivil ve askeri uçuşları saptıran küresel uydu karartması, CRPA antenleri ve Lazer Halkalı Jiroskop (RLG) navigasyon mimarisi.",
    tags: ["Elektronik Harp", "GPS Karıştırma", "Spoofing", "Seyrüsefer"],
    featured: false,
    likes: 462,
    content: `
### UYDU BAĞIMLILIĞININ ASKERİ RİSKLERİ

Modern askeri mühimmatlar uzun yıllar GPS/GLONASS koordinatlarına güvenerek hedeflerini buldu. Ancak yüksek güçlü yer konuşlu elektronik harp istasyonları (KORAL, Krasukha-4 vb.) yüzlerce kilometrelik alanda uydu sinyallerini tamamen sağır edebilmektedir.

### ÇÖZÜM DİNAMİKLERİ

* **CRPA (Controlled Reception Pattern Antenna):** Düşman jammer sinyallerinin geldiği yönü tespit edip o yöne sıfır kazanç (null) koyarak sadece uydulardan gelen temiz sinyali süzen akıllı antenler.
* **Lazer Halkalı Jiroskop Tabanlı Ataletsel Seyrüsefer (RLG-INS):** Dış dünyadan hiçbir sinyal almadan, sadece mühimmatın kendi ivme ve açısal dönüşlerini hesaplayarak sıfır sapmayla hedefe yönelen mekanik-optik navigasyon.
* **Optik Arazi Referanslı Seyrüsefer (TERCOM/DSMAC):** Mühimmat altındaki yüksek çözünürlüklü termal kameranın yeryüzü haritasıyla anlık eşleşme yaparak rotasını bulması.
    `
  },
  {
    id: "modern-infantry-rifles-evolution",
    title: "5.56x45mm'den 6.8x51mm'ye: Piyade Silahlarında Balistik Dinamikler",
    category: "Askeri Silahlar & Balistik",
    readTime: "9 dk okuma",
    date: "02 Ekim 2026",
    excerpt: "Üretici firmaların halka açık verilerine göre 5.56mm ve 6.8mm hibrit kovanlı mühimmatların namlu basıncı, çıkış hızı ve kinetik enerji hesaplamaları.",
    tags: ["Piyade Tüfeği", "Balistik", "6.8mm", "Halka Açık Veri"],
    featured: true,
    likes: 342,
    content: `
### GİRİŞ: BALİSTİK TARİHÇE VE MÜHİMMAT EVRİMİ

Bu teknik inceleme, açık kaynaklı akademik ve savunma literatüründe (NATO STANAG standartları, üretici teknik bültenleri) yer alan veriler doğrultusunda hazırlanmıştır.

5.56x45mm NATO mühimmatı hafifliği ile bilinirken, son yıllarda açık kaynaklarda duyurulan 6.8x51mm hibrit kovan teknolojisi; çelik taban ve pirinç gövde yapısıyla yüksek basınçlara dayanacak şekilde tasarlanmıştır.

### AÇIK KAYNAKLI TEKNİK HESAPLAMALAR

* **Namlu İçi Basınç Değerleri:** Üretici katalog verilerine göre ~80,000 PSI basınca ulaşılabilmektedir.
* **Kinetik Enerji Dengesi:** 500 metre menzilde mermi çekirdeğinin aerodinamik sürtünme katsayısı ve enerji korunumu.

\`\`\`
AÇIK KAYNAK TEKNİK KARŞILAŞTIRMA (Katalog Verileri):
5.56x45mm M855A1 : Kinetik Enerji ~450 Joule (500m)
7.62x51mm M80A1   : Kinetik Enerji ~1100 Joule (500m)
6.8x51mm Hibrit   : Kinetik Enerji ~1650 Joule (500m)
\`\`\`
    `
  },
  {
    id: "tactical-shooting-procedural-training",
    title: "Temel Silah Güvenliği ve Uluslararası Standart Atış Prosedürleri",
    category: "Silah Eğitimleri & Prosedürler",
    readTime: "11 dk okuma",
    date: "25 Eylül 2026",
    excerpt: "Sivil ve sportif atış sahalarında kabul görmüş dört temel güvenlik kuralı ve standart mekanik tutukluk giderme yöntemleri.",
    tags: ["Silah Güvenliği", "Atış Kuralları", "Temel Prosedürler"],
    featured: true,
    likes: 418,
    content: `
### DÖRT TEMEL EVRENSEL SİLAH GÜVENLİK KURALI

Tüm dünyada sivil atıcılık federasyonları ve spor kulüpleri tarafından kabul edilen uluslararası güvenlik ilkeleri şunlardır:

1. **Her silah her zaman dolu kabul edilir.**
2. **Namlu asla zarar vermek istemediğiniz bir yöne çevrilmez.**
3. **Ateş etme kararı verilmedikçe tetik parmağı tetik korkuluğu dışındadır.**
4. **Hedef ve hedefin arkasındaki alan daima kontrol edilir.**

### STANDART MEKANİK TUTUKLUK GİDERME DÖNGÜSÜ

Sportif ve poligondaki mekanik arızalarda uygulanan standart prosedürler:
* **Tap-Rack-Bang:** Şarjörün tam oturduğundan emin olunur, kurma kolu çekilip bırakılır ve atış hattı kontrol edilir.
* **Kovan Tahliyesi:** Dışarı atılamayan boş kovanların yerçekimi yardımıyla mekanizmadan tahliyesi.
    `
  },
  {
    id: "tactical-weapon-accessories-guide",
    title: "Optik Sistemler Kılavuzu: Holografik, Red Dot ve LPVO Dürbünler",
    category: "Silah Aksesuarları & Optikler",
    readTime: "8 dk okuma",
    date: "18 Eylül 2026",
    excerpt: "Üretici kullanım kılavuzlarına göre EOTech, Aimpoint ve Vortex optiklerinin büyütme oranları, pil ömürleri ve çalışma prensipleri.",
    tags: ["Optikler", "Holografik", "LPVO", "Katalog İncelemesi"],
    featured: false,
    likes: 275,
    content: `
### AÇIK KATALOG KARŞILAŞTIRMASI

* **Holografik Nişangahlar:** Lazer diyotu ve holografik ızgara prensibiyle çalışır.
* **Reflex Red Dot Nişangahlar:** LED yansıtmalı lens yapısıyla uzun pil ömrü sunar.
* **LPVO (Değişken Büyütmeli Dürbünler):** 1x ile 10x arasında büyütme sağlayarak poligon ve sportif atıcılıkta hassasiyeti artırır.
    `
  },
  {
    id: "anti-drone-directed-energy-tech",
    title: "Anti-Drone Savunma ve Yönlendirilmiş Enerji Teknolojileri",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "08 Eylül 2026",
    excerpt: "Savunma sanayii fuarlarında sergilenen yüksek güçlü lazer ve mikrodalga anti-drone sistemlerinin bilimsel çalışma prensipleri.",
    tags: ["Anti-Drone", "Yönlendirilmiş Enerji", "Fuar Bülteni", "Bilimsel"],
    featured: false,
    likes: 389,
    content: `
### AÇIK BİLİMSEL VE FUAR BİLGİLERİ

Uluslararası savunma sanayii fuarlarında (IDEF, Eurosatory) sergilenen sistemler:

1. **Yüksek Güçlü Lazerler (HEL):** 30kW - 100kW seviyesindeki fiber lazerlerin termal etkisiyle mini İHA pervanelerinin ve optiklerinin işlevsiz hale getirilmesi.
2. **Elektromanyetik Karıştırıcılar (C-UAS):** 2.4 GHz ve 5.8 GHz ISM radyo frekans bantlarında çalışan yönlü antenler ile kumanda irtibatının kesilmesi.
    `
  }
];

export const tacticalGearReviews = [
  {
    title: "MKE MPT-76 Milli Piyade Tüfeği Teknik Analizi",
    category: "Milli Platformlar",
    specs: "7.62x51mm NATO | MKE Resmi Katalog Verisi | Menzil: 600m",
    rating: "4.9 / 5.0",
    badge: "MKE A.Ş. Resmi Ürün",
    summary: "MKE A.Ş. tarafından yayımlanan teknik bülten ve NATO test sertifikaları doğrultusunda mekanizma analizi."
  },
  {
    title: "CANiK TP9 SFx / METE Tabanca İncelemesi",
    category: "Hafif Silahlar",
    specs: "9x19mm | SYS Resmi Fuar Kataloğu | Match-Grade Namlu",
    rating: "4.8 / 5.0",
    badge: "SYS Resmi Ürün",
    summary: "Samsun Yurt Savunma'nın (CANiK) uluslararası fuarlarda sergilediği teknik özelliklerin değerlendirilmesi."
  },
  {
    title: "SAR9 Gen2 Görev Tabancası Değerlendirmesi",
    category: "Hafif Silahlar",
    specs: "9x19mm | Sarsılmaz Resmi Ürün Verisi | 50.000 Atım Ömrü",
    rating: "4.8 / 5.0",
    badge: "Sarsılmaz Resmi Ürün",
    summary: "Sarsılmaz Silah Sanayi tarafından açıklanan test sonuçları ve ergonomik gövde yapısının açık kaynak incelemesi."
  }
];

export const newsletterStats = {
  title: "Açık Kaynak Savunma & Teknoloji Bülteni",
  subtitle: "Haftalık derleme: Uluslararası savunma sanayii fuarlarından haberler, açık kaynaklı teknik makaleler ve balistik analizler. Tamamen ücretsiz ve kâr amacı gütmez.",
  subscribers: "18.600+ Savunma ve Teknoloji Meraklısı"
};
