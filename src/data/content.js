export const authorProfile = {
  name: "Ahmet Özkul",
  handle: "@ahmetozkul",
  title: "Açık Kaynak (OSINT) Savunma Sanayii & Askeri Teknolojiler Araştırmacısı",
  bio: "Halka açık savunma sanayii bültenleri, uluslararası askeri fuarlar (IDEF, SAHA EXPO), üretici teknik katalogları ve açık kaynak istihbaratı (OSINT) doğrultusunda; piyade silahları, balistik prensipler ve savunma teknolojileri üzerine bağımsız teknik analizler ve derlemeler sunuyorum.",
  location: "Türkiye",
  status: "Açık Kaynak Savunma & Teknoloji Derlemesi Yayında",
  stats: [
    { label: "Katalog & Sistem İncelemesi", value: "85+", change: "Açık Kaynak (OSINT)" },
    { label: "İncelenen Açık Olay", value: "14 Bölge", change: "Uluslararası Basın" },
    { label: "Teknik Bilgi Notu", value: "32 Modül", change: "Halka Açık Veri" },
    { label: "Aylık Takipçi / Okur", value: "95.000+", change: "Savunma Meraklıları" }
  ],
  socials: {
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    email: "iletisim@ahmetozkul.com.tr"
  }
};

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

// Dünyada aktif olarak devam eden savaşlar, silahlı çatışmalar ve sıcak kriz bölgeleri
export const globalConflicts = [
  {
    id: "rusya-ukrayna-savasi",
    title: "Rusya - Ukrayna Savaşı (Topyekûn Cephe Taarruzları)",
    region: "Doğu Avrupa",
    location: "Donbas (Pokrovsk, Toretsk, Çasiv Yar, Kurahove) & Kursk Sınırı",
    startDate: "24 Şubat 2022",
    duration: "4+ Yıldır Devam Ediyor (2014 Kırım ilhakından itibaren 12. yıl)",
    threatLevel: "AKTİF KONVANSİYONEL SAVAŞ",
    levelColor: "rose",
    parties: "Ukrayna Silahlı Kuvvetleri vs. Rusya Federasyonu Silahlı Kuvvetleri",
    summary: "Donbas cephesi boyunca Pokrovsk, Toretsk ve Kurahove yönlerindeki yıpratma taarruzları, Kursk sınır bölgesi çatışmaları, derin altyapı füze/İHA vuruşları ve fiber-optik FPV dronların sahada yaygınlaşması.",
    currentSituation: "Donbas hattında Pokrovsk, Toretsk, Çasiv Yar ve Kurahove istikametlerinde Rus kuvvetlerinin yoğun piyade ve zırhlı sızma taarruzları devam etmektedir. Ukrayna kuvvetleri Kursk bölgesindeki sınır ceplerini tutarken, her iki taraf karşılıklı olarak kritik lojistik, petrol rafinerileri ve enerji şebekelerine uzun menzilli seyir/balistik füzeler ve kamikaze İHA'lar fırlatmaktadır. Elektronik harbin (Jammer) zirveye çıktığı cephede, sinyal kesicilerden etkilenmeyen makaralı fiber-optik kablolu FPV kamikaze dronlar ve KAB/FAB süzülen ağır güdümlü mühimmatlar belirleyici taktik unsurlar haline gelmiştir.",
    keyTech: ["Fiber-Optik Güdümlü FPV Dron", "FAB/KAB Süzülen Bombalar", "Elektronik Harp & Jammer Kalkanları", "Patriot / S-400 Çok Katmanlı Hava Savunma"]
  },
  {
    id: "israil-gazze-lubnan-catismasi",
    title: "İsrail - Gazze & Lübnan Çatışmaları (Çok Cepheli Orta Doğu Krizi)",
    region: "Orta Doğu",
    location: "Gazze Şeridi, Güney Lübnan, Batı Şeria & Golan Tepeleri",
    startDate: "7 Ekim 2023",
    duration: "2.5+ Yıldır Devam Ediyor",
    threatLevel: "YÜKSEK ŞİDDETLİ ASİMETRİK VE BÖLGESEL HARP",
    levelColor: "rose",
    parties: "İsrail Savunma Kuvvetleri (IDF) vs. Hamas, Hizbullah & Direniş Ekseni",
    summary: "Gazze'de meskun mahal/tünel operasyonları; Güney Lübnan sınırında Hizbullah ile yoğun sınır ötesi kara harekatı, hava taarruzları, roket-İHA bombardımanları ve bölgesel balistik füze gerilimi.",
    currentSituation: "Gazze Şeridi genelinde meskun mahal temizlik operasyonları, tünel ağlarının imhası ve asimetrik gerilla pusuları devam ederken büyük bir insani kriz sürmektedir. İsrail-Lübnan sınır hattında İsrail ordusunun Güney Lübnan'a yönelik kara ve hava operasyonları ile Hizbullah'ın Hayfa ve Tel Aviv yönündeki roket ve intihar İHA akınları devam etmektedir. Ayrıca İran ve müttefik unsurlar ile karşılıklı doğrudan balistik füze ve hava savunma angajmanları bölgeyi geniş çaplı bir bölgesel savaş eşiğinde tutmaktadır.",
    keyTech: ["Demir Kubbe (Iron Dome) & Arrow 3", "Meskun Mahal Tünel Harbi & Yeraltı Taraması", "Hassas Güdümlü Seyir ve Balistik Füzeler", "Termal Optikli Kamikaze İHA'lar"]
  },
  {
    id: "sudan-ic-savasi",
    title: "Sudan İç Savaşı (Hartum ve El Faşir Kuşatması)",
    region: "Doğu & Kuzey Afrika",
    location: "Hartum, El Cezire, Kuzey Darfur (El Faşir)",
    startDate: "15 Nisan 2023",
    duration: "3+ Yıldır Devam Ediyor",
    threatLevel: "AĞIR İÇ SAVAŞ & İNSANİ KRİZ",
    levelColor: "rose",
    parties: "Sudan Silahlı Kuvvetleri (SAF - Burhan) vs. Hızlı Destek Kuvvetleri (RSF - Hemeti)",
    summary: "Dünyanın en derin insani krizlerinden biri haline gelen çatışmada, başkent Hartum köprüleri ve Kuzey Darfur'un son kalesi El Faşir çevresinde ağır kentsel kuşatma savaşı.",
    currentSituation: "Sudan ordusu (SAF) ile paramiliter Hızlı Destek Kuvvetleri (RSF) arasındaki çatışmalar, başkent Hartum'un kontrolü ve Kuzey Darfur eyaletinin başkenti El Faşir çevresinde kilitlenmiştir. RSF birlikleri kenti kuşatma altında tutarken, SAF hava saldırıları ve topçu bataryaları ile karşılık vermektedir. Çatışmalarda 10 milyondan fazla sivil yerinden edilmiş olup, hafif ticari dronların havan ve bomba atacak şekilde modifiye edildiği ve teknik araçlara dayalı hızlı manevra taktiklerinin kullanıldığı gözlenmektedir.",
    keyTech: ["Modifiye Edilmiş Ticari Bombardıman Dronları", "Meskun Mahal Ağır Topçu & Çok Namlulu Roketatar", "Hafif Zırhlı Taktik Araçlar (Technical)", "Gezici Keskin Nişancı Timleri"]
  },
  {
    id: "kizildeniz-yemen-deniz-krizi",
    title: "Kızıldeniz & Aden Körfezi Deniz Güvenliği Krizi",
    region: "Kızıldeniz & Arap Denizi",
    location: "Babülmendep Boğazı, Aden Körfezi & Yemen Kıyı Hattı",
    startDate: "19 Kasım 2023",
    duration: "2+ Yıldır Devam Ediyor",
    threatLevel: "DENİZ TİCARETİ VE DONANMA ANGAJMANI",
    levelColor: "amber",
    parties: "Ensarullah (Husiler / Yemen) vs. Çok Uluslu Görev Gücü (Prosperity Guardian, ABD, İngiltere vb.)",
    summary: "Babülmendep Boğazı'nda ticari gemilere ve uluslararası donanmalara karşı gemisavar balistik füzeler, kamikaze insansız deniz botları ve karşı hava bombardımanları.",
    currentSituation: "Husiler, İsrail limanlarıyla bağlantılı ve Batılı ticari gemilere yönelik Babülmendep Boğazı ve Aden Körfezi'nde seyir füzeleri, gemisavar balistik füzeler (ASBM) ve patlayıcı yüklü insansız deniz araçları (USV) ile saldırılarını sürdürmektedir. Küresel deniz taşımacılığının önemli bir kısmı rotasını Güney Afrika'daki Ümit Burnu'na çevirmiştir. ABD ve müttefik donanmaları Aegis destroyerleri ile SM-2/SM-3 füzelerini kullanarak angajman sağlamakta, Yemen içindeki füze fırlatma rampaları ve radar merkezlerine periyodik hava harekâtları düzenlemektedir.",
    keyTech: ["Gemisavar Balistik Füzeler (ASBM)", "Patlayıcı Yüklü İnsansız Deniz Araçları (Kamikaze USV)", "Aegis Muharebe Sistemi & SM-2/SM-6", "Uzun Menzilli Quds Seyir Füzeleri"]
  },
  {
    id: "myanmar-ic-savasi",
    title: "Myanmar İç Savaşı (Bahar Devrimi ve 1027 Operasyonu)",
    region: "Güneydoğu Asya",
    location: "Shan Eyaleti, Rakhine, Sagaing, Çin Sınır Hatları",
    startDate: "1 Şubat 2021 (Askeri Darbe)",
    duration: "5+ Yıldır Devam Ediyor",
    threatLevel: "ÇOK CEPHELİ DİRENİŞ & GERİLLA HARBİ",
    levelColor: "rose",
    parties: "Myanmar Askeri Cuntası (Tatmadaw) vs. PDF (Halk Savunma Güçleri) & Etnik Silahlı İttifak (Üç Kardeşlik)",
    summary: "Askeri cuntanın kontrolü kaybetmeye başladığı, etnik orduların kritik Çin sınırı ticaret kapılarını ve cunta üslerini ele geçirdiği yaygın asimetrik halk savaşı.",
    currentSituation: "1027 Operasyonu ile büyük bir ivme kazanan etnik direniş ittifakı (MNDAA, TNLA, AA) ve sivil Halk Savunma Güçleri (PDF), Shan ve Rakhine eyaletlerinde cuntanın onlarca tabur karargahını ve stratejik sınır kapısını ele geçirmiştir. Cunta güçleri kara üstünlüğünü kaybederek yoğun hava bombardımanları ve zorunlu askerlik uygulamalarıyla ayakta kalmaya çalışmaktadır. Direniş güçleri ucuz 3D yazıcı teknolojileriyle ürettikleri bomba bırakan FPV dronları sürüler halinde kullanarak modern bir halk gerilla harbi yürütmektedir.",
    keyTech: ["3D Baskı Bomba Bırakan Mini İHA Sistemleri", "Orman ve Dağ Tipi Asimetrik Pusu Taktikleri", "Hafif Havan ve Omuzdan Atılan Roketler", "Cunta Hava Kuvvetleri Ağır Bombardıman Uçakları"]
  },
  {
    id: "suriye-ic-savasi-bolgesel-dinamikler",
    title: "Suriye Çatışmaları & Bölgesel Güvenlik Dinamikleri",
    region: "Orta Doğu / Levant",
    location: "İdlib Hattı, Tel Rıfat - Münbiç, Fırat'ın Doğusu & Deyrizor",
    startDate: "15 Mart 2011",
    duration: "15+ Yıldır Devam Eden Bölünmüş Kriz",
    threatLevel: "BÖLGESEL HAREKÂT VE TERÖRLE MÜCADELE",
    levelColor: "amber",
    parties: "Rejim Güçleri, HTŞ & Suriye Milli Ordusu, Terör Örgütü PKK/YPG, TSK/MİT ve Koalisyon",
    summary: "İdlib cephe hattında topçu-drone tacizleri, Fırat'ın doğusunda terör örgütü hedeflerine yönelik nokta SİHA operasyonları ve Deyrizor'da aşiret gerilimleri.",
    currentSituation: "İdlib temas hattında rejim güçleri ile muhalif unsurlar arasında FPV intihar dronları ve karşılıklı topçu atışları sürmektedir. Türkiye, sınır güvenliğini tehdit eden terör örgütü PKK/YPG'nin Tel Rıfat, Münbiç ve Fırat'ın doğusundaki lojistik merkezleri, sözde lider kadroları ve altyapı tesislerine yönelik Bayraktar TB2 ve AKINCI TİHA ile nokta operasyonlarını kararlılıkla sürdürmektedir. Deyrizor hattında ise yerel Arap aşiretleri ile PKK/YPG güçleri arasında periyodik çatışmalar devam etmektedir.",
    keyTech: ["Milli TİHA/SİHA (Bayraktar TB2 / AKINCI) Hassas Vuruş", "MAM-L & MAM-T Akıllı Mühimmat", "Elektronik Harp (KORAL Sistemi)", "Meskun Mahal Tahkimat ve Tünel Savunması"]
  },
  {
    id: "kongo-dc-m23-isyani",
    title: "Kongo DC Doğu Bölgesi Savaşı (M23 İsyanı & Goma Tehdidi)",
    region: "Orta Afrika / Büyük Göller",
    location: "Kuzey Kivu Eyaleti (Goma, Rutshuru, Masisi)",
    startDate: "Mart 2022 (Yeniden Alevlenme - Kökeni 1994)",
    duration: "4+ Yıldır Devam Eden Şiddetli Çatışma",
    threatLevel: "BÖLGESEL ASKERİ KRİZ",
    levelColor: "rose",
    parties: "M23 İsyancıları (Ruanda Destekli İddiası) vs. Kongo Ordusu (FARDC), Wazalendo & SAMIDRC",
    summary: "Milyonluk Goma şehrini tehdit eden M23 ilerleyişi, gelişmiş hava savunma füzelerinin kullanımı ve Ruanda ile Kongo DC arasında topyekûn savaş riski.",
    currentSituation: "Kuzey Kivu eyaletinde M23 isyancıları göl kenarındaki stratejik Goma kentinin ana tedarik yollarını kesmiş durumdadır. Çatışmalarda isyancıların modern gece görüş sistemleri, taşınabilir hava savunma füzeleri (MANPADS) ve topçu radarları kullandığı doğrulanmıştır. Kongo ordusu (FARDC) Doğu Avrupa menşeili askeri helikopterler ve yerel milis güçlerle karşı koymaya çalışırken, çatışmalar yüz binlerce yeni mülteci yaratmış ve Ruanda-KDC sınır hattında ordu birlikleri teyakkuz durumuna geçirilmiştir.",
    keyTech: ["Omuzdan Atılan Hava Savunma Füzeleri (MANPADS)", "Termal ve Gece Görüş Taktik Cihazları", "Ağır Havan Bataryaları", "Saldırı Helikopterleri ve Yakın Hava Desteği"]
  },
  {
    id: "somali-es-sebab-catismasi",
    title: "Somali & Eş-Şebab Savaşı (Afrika Boynuzu Güvenliği)",
    region: "Doğu Afrika / Afrika Boynuzu",
    location: "Orta ve Güney Somali (Hiran, Galguduud, Mogadişu Kırsalı)",
    startDate: "2006",
    duration: "20 Yıldır Süren Asimetrik Savaş",
    threatLevel: "ASİMETRİK TERÖR HARBİ & KIYI GÜVENLİĞİ",
    levelColor: "amber",
    parties: "Somali Federal Hükümeti (SNA & Klan Güçleri) vs. El Kaide Bağlantılı Eş-Şebab",
    summary: "Somali ordusunun kırsal kurtarma taarruzları, Eş-Şebab'ın bomba yüklü intihar araçları (SVBIED) ve Türkiye-Somali Savunma Anlaşması kapsamında deniz güvenliği adımları.",
    currentSituation: "Somali Ulusal Ordusu (SNA) yerel klan güçleriyle ortaklaşa Orta Somali kırsalında operasyonlarını sürdürmektedir. Eş-Şebab kontrol ettiği kırsal koridorlardan askeri kontrol noktalarına ve başkent Mogadişu'daki hükümet binalarına yönelik bomba yüklü araçlar (SVBIED) ve uzaktan komutalı EYP pusuları düzenlemektedir. ATMIS Afrika Birliği misyonunun kademeli çekilme sürecinde, Türkiye ile Somali arasında imzalanan Savunma ve Ekonomik İşbirliği Anlaşması gereğince Somali karasuları ve münhasır ekonomik bölgesinin güvenliği Türk Deniz Kuvvetleri desteğiyle güvence altına alınmaktadır.",
    keyTech: ["El Yapımı Patlayıcı (EYP) & Bomba Yüklü İntihar Araçları", "Kırsal Pusu ve Vur-Kaç Taktikleri", "Bayraktar TB2 SİHA Hava Desteği", "Sahil Güvenlik Karakol ve Radar Ağları"]
  },
  {
    id: "kore-yarimadasi-dmz-gerilimi",
    title: "Kore Yarımadası & DMZ Askeri Alarm Hattı",
    region: "Doğu Asya / Pasifik",
    location: "Askerden Arındırılmış Bölge (DMZ), Sarı Deniz & Pyongyang Sınır Hattı",
    startDate: "1950 (Ateşkes 1953, Nükleer/Füze Tırmanışı: 2024-2026)",
    duration: "70+ Yıldır Donmuş, Yeniden Isınan Kriz",
    threatLevel: "STRATEJİK NÜKLEER & BALİSTİK TEHDİT",
    levelColor: "amber",
    parties: "Kore Demokratik Halk Cumhuriyeti (Kuzey) vs. Kore Cumhuriyeti (Güney) & ABD",
    summary: "Kuzey Kore'nin birleşme politikasını terk etmesi, sınır yollarını dinamitlemesi, Hwasong-19 katı yakıtlı ICBM testleri ve karşılıklı dev tatbikatlar.",
    currentSituation: "Kuzey Kore liderliği anayasal düzeyde Güney Kore ile barışçıl birleşme maddelerini kaldırarak sınır hattındaki tüm karayolu ve demiryolu bağlantılarını havaya uçurmuştur. Sınır boyunca yoğun beton tahkimatlar ve mayın hatları kurulurken, Pyongyang yönetimi katı yakıtlı kıtalararası balistik füzeler (Hwasong-19) ve hipersonik kayma araçları denemektedir. Güney Kore ve ABD ise nükleer denizaltılar, B-52 bombardıman uçakları ve F-35A filolarıyla ortak caydırıcılık manevralarını artırmıştır.",
    keyTech: ["Katı Yakıtlı Kıtalararası Balistik Füzeler (ICBM)", "GPS Karıştırma ve Elektronik Sınır Harp Sistemleri", "THAAD & Patriot Çok Katmanlı Füze Kalkanı", "Hipersonik Kayma Araçları (HGV)"]
  },
  {
    id: "tayvan-bogazi-guney-cin-denizi",
    title: "Tayvan Boğazı & Güney Çin Denizi Askeri Abluka Kalkanı",
    region: "Güneydoğu Asya / Pasifik",
    location: "Tayvan Boğazı, Pratas Adaları, İkinci Thomas Resifi",
    startDate: "1949 (Son Tırmanış: 2022-2026)",
    duration: "Sürekli Yüksek Stratejik Gerilim",
    threatLevel: "DENİZ VE HAVA ALAN REDDİ (A2/AD)",
    levelColor: "amber",
    parties: "Çin Halk Kurtuluş Ordusu (PLA) vs. Tayvan Savunma Kuvvetleri & Müttefikler (ABD, Japonya)",
    summary: "Çin'in Joint Sword ada kuşatma tatbikatları, Type 055 kruvazörleri, J-20 hayalet filoları ve Tayvan'ın yerli denizaltı ve kıyı savunma füzeleriyle karşı hamleleri.",
    currentSituation: "Çin ordusu (PLA), Tayvan çevresinde gerçekleştirdiği 'Joint Sword' tatbikatlarıyla adanın dış dünyayla petrol ve enerji tedarikini kesmeye yönelik koordineli deniz ve hava ablukası senaryolarını test etmektedir. Tayvan hava savunma tanımlama sahası (ADIZ) her gün onlarca Çin savaş uçağı ve İHA'sı tarafından aşılmaktadır. Tayvan ise asimetrik 'kirpi stratejisi' kapsamında karadan atılan Harpoon ve yerli Hsiung Feng III gemisavar füzeleri, yerli üretim Hai Kun denizaltıları ve deniz mayınlama kabiliyetleriyle yanıt vermektedir.",
    keyTech: ["J-20 Hayalet Savaş Uçakları", "DF-21D & DF-26 Uçak Gemisi Katili Balistik Füzeler", "Kıyı Konuşlu Süpersonik Gemisavar Füzeleri", "Tip 075 Amfibi Çıkarma Gemileri"]
  }
];

export const articles = [
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
