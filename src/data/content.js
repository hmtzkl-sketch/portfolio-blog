export const authorProfile = {
  name: "Ahmet Özkul",
  handle: "@ahmetozkul",
  title: "Açık Kaynak (OSINT) Savunma Sanayii & Askeri Teknolojiler Araştırmacısı",
  bio: "Halka açık savunma sanayii bültenleri, uluslararası askeri fuarlar (IDEF, SAHA EXPO), üretici teknik katalogları ve açık kaynak istihbaratı (OSINT) doğrultusunda; piyade silahları, balistik prensipler ve savunma teknolojileri üzerine bağımsız teknik analizler ve derlemeler sunuyorum.",
  location: "Türkiye",
  status: "Canlı İstihbarat & Taktik Radar Aktif [Ekim 2026]",
  stats: [
    { label: "Katalog & Sistem İncelemesi", value: "95+", change: "Açık Kaynak (OSINT)" },
    { label: "Sıcak Çatışma Radarı", value: "16 Bölge", change: "Canlı Taktik Takip" },
    { label: "Teknik Rapor & Doküman", value: "48 Modül", change: "Halka Açık Veri" },
    { label: "Aylık Ziyaret & Okur", value: "140.000+", change: "Savunma Meraklıları" }
  ],
  socials: {
    github: "https://github.com/hmtzkl-sketch",
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/ahmet-%C3%B6zkul-82aa0093",
    email: "iletisim@ahmetozkul.com.tr"
  }
};

// Canlı Tıklanabilir Son Dakika İstihbarat Radarı
export const breakingIntel = [
  {
    id: "siper-urun-2-balistik-onleme-testi",
    badge: "SON TEST",
    title: "SİPER Ürün-2: Sinop'ta 150+ km Hit-to-Kill balistik önleme testi başarıyla icra edildi.",
    target: "article",
    type: "defense"
  },
  {
    id: "rusya-ukrayna-savasi",
    badge: "CEPHE RAPORU",
    title: "Pokrovsk ve Kursk Hatlarında Fiber-Optik FPV kamikaze dron taarruzları yoğunlaştı.",
    target: "conflict",
    type: "conflict"
  },
  {
    id: "kaan-5th-gen-fighter-supersonic-avionics",
    badge: "MİLLİ HAVA GÜCÜ",
    title: "KAAN MMU: ASELSAN MURAD AESA burun radarı entegrasyonu ve süpersonik seyir fazı.",
    target: "article",
    type: "defense"
  },
  {
    id: "iran-israil-balistik-fuze-ve-bolgesel-tirmantis",
    badge: "BALİSTİK HARP",
    title: "İran-İsrail: THAAD ve Arrow-3 bataryaları ile Fettah hipersonik başlıkları arasında hava harbi.",
    target: "conflict",
    type: "conflict"
  },
  {
    id: "kizilelma-insansiz-savas-ucagi-it-dalasi",
    badge: "İNSANSIZ JET",
    title: "KIZILELMA: Otonom it dalaşı ve BVR Görüş Ötesi GÖKDOĞAN füzesi entegrasyonu tamamlandı.",
    target: "article",
    type: "defense"
  },
  {
    id: "bayraktar-tb3-tcg-anadolu-naval-uav",
    badge: "MAVİ VATAN",
    title: "Bayraktar TB3: TCG Anadolu LHD amfibi gemisi güvertesinden otonom iniş-kalkış döngüsü.",
    target: "article",
    type: "defense"
  }
];

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

// Dünyada aktif olarak devam eden savaşlar, silahlı çatışmalar ve sıcak kriz bölgeleri (Ekim 2026 Güncel)
export const globalConflicts = [
  {
    id: "rusya-ukrayna-savasi",
    title: "Rusya - Ukrayna Savaşı (Donbas, Pokrovsk & Kursk Cepheleri)",
    region: "Doğu Avrupa",
    location: "Donbas (Pokrovsk Kuşatması, Toretsk, Kurahove Cebi) & Kursk Sınırı",
    coordinates: "48.28°N, 37.18°E",
    intensity: 98,
    startDate: "24 Şubat 2022",
    duration: "4+ Yıldır Devam Ediyor (12. Yıl)",
    threatLevel: "AKTİF KONVANSİYONEL TOPYEKÛN SAVAŞ",
    levelColor: "rose",
    frontlineStatus: "Pokrovsk ve Kurahove Yıpratma Muharebeleri & Fiber-Optik FPV Dron Harbi",
    parties: "Ukrayna Silahlı Kuvvetleri vs. Rusya Federasyonu Silahlı Kuvvetleri",
    summary: "Donbas'ın ana lojistik merkezi Pokrovsk çevresinde ağır kentsel kuşatma, Kurahove yönünde kanat ilerlemeleri, Kursk sınırında yıpratma karşı taarruzları, derin enerji altyapı salvosu ve karıştırmasız fiber-optik FPV dronların muharebe sahasını ele geçirmesi.",
    currentSituation: "Ekim 2026 itibarıyla Pokrovsk ve Kupyansk demiryolu/ikmal kavşaklarında yoğun kentsel kuşatma ve taarruz harekatları en üst noktaya ulaşmıştır. Vuhledar'ın düşüşünün ardından Rus kuvvetleri Kurahove rezervuarı çevresindeki Ukrayna mevzilerini kuşatmaya çalışmaktadır. Ukrayna kuvvetleri Batı menşeili F-16 devriyeleriyle seyir füzelerini önlemekte ve Patriot PAC-3 bataryalarıyla hava sahası savunmasını sürdürmektedir. Sahadaki en büyük taktik devrim, her iki tarafın 10-15 km menzilli fiber-optik makaralı FPV intihar dronlarını kullanmasıdır; bu dronlar jammer sinyal bozucularından %100 bağışık olarak tank ve siperleri nokta atışıyla imha etmektedir. Stratejik derinlikte ise Rusya'nın Oreshnik / İskender-M balistik salvo taarruzlarına karşılık Ukrayna, yerli jet motorlu Palianytsia dronları ile Rusya içindeki mühimmat depoları ve rafinerileri vurmaktadır.",
    keyTech: [
      "Fiber-Optik Karıştırmasız FPV Dron",
      "FAB-3000 UMPK Süzülen Ağır Bombalar",
      "Palianytsia Jet Kamikaze İHA & ATACMS",
      "Patriot PAC-3 & S-400 Füze Kalkanı",
      "Starlink & Taktik Ağ İletişimi"
    ],
    osintNote: "Ticari uydu fotoğrafları (Sentinel & Maxar), Pokrovsk güneybatısında siper hatlarının tamamen FPV dron avcıları tarafından kilitlendiğini ve zırhlı araç konvoylarının yerini küçük piyade sızma gruplarına bıraktığını doğrulamaktadır."
  },
  {
    id: "iran-israil-balistik-fuze-ve-bolgesel-tirmantis",
    title: "İran - İsrail Doğrudan Balistik Füze & Hava Harbi",
    region: "Orta Doğu / Basra Körfezi",
    location: "Tahran, İsfahan, Şiraz, Tel Aviv, Negev Çölü (Nevatim & Ovda Hava Üssü)",
    coordinates: "31.76°N, 35.21°E",
    intensity: 95,
    startDate: "Nisan 2024 (Ekim 2024 - 2026 Tırmanışı)",
    duration: "Devletler Arası Doğrudan Balistik Füze Düellosu",
    threatLevel: "KRİTİK BÖLGESEL BALİSTİK & HAVA HARBİ",
    levelColor: "rose",
    frontlineStatus: "THAAD / Arrow-3 Kalkanı vs. Fettah Hipersonik & İmad Katı Yakıtlı Balistik Başlıklar",
    parties: "İsrail Savunma Kuvvetleri (IDF) & ABD Merkez Komutanlığı (CENTCOM) vs. İran Devrim Muhafızları (IRGC)",
    summary: "Hipersonik manevra başlıklı katı yakıtlı balistik füzeler ile çok katmanlı atmosfer dışı füze savunma kalkanları (Arrow-3, THAAD, David's Sling) arasında modern harp tarihinin ilk kıtalararası füze savaşı.",
    currentSituation: "İran Devrim Muhafızları'nın (IRGC) yüzlerce katı yakıtlı balistik füze (Fettah-1, Hayber Şeken, Kadr) ve Şahid-136 İHA salvosu ile İsrail askeri üslerine (Nevatim, Tel Nof) yönelik gerçekleştirdiği dalga taarruzları, küresel hava savunma mimarisini kökten değiştirmiştir. ABD Ordusu, İsrail topraklarına doğrudan THAAD (Terminal High Altitude Area Defense) bataryaları konuşlandırmış; İsrail'in Arrow 3 ve David's Sling sistemleriyle uzay boşluğu seviyesinde exo-atmosferik önlemeler gerçekleştirilmiştir. İsrail Hava Kuvvetleri ise F-35I Adir hayalet jetleri, Rampage süpersonik füzeleri ve Rocks aerobalistik füzeleriyle İran'ın radar sahaları ve füze yakıt üretim tesislerine nokta hava akınları düzenlemektedir.",
    keyTech: [
      "THAAD & Arrow-3 Atmosfer Dışı Füze Önleme",
      "Fettah Hipersonik Manevra Başlığı (HGV)",
      "F-35I Adir Hayalet Jet & RAMPAGE",
      "Erken İhbar Radarları (AN/TPY-2 & Green Pine)",
      "Elektronik GNSS Karartma & Uydu Karıştırma"
    ],
    osintNote: "Nevatim Hava Üssü uydu analizleri, balistik önleme oranının yüksek olmasına rağmen süpersonik enkaz ve doğrudan isabetlerin pistlerde ve taksi yollarında çukurlar açtığını göstermektedir."
  },
  {
    id: "israil-gazze-lubnan-catismasi",
    title: "İsrail - Güney Lübnan & Gazze Çatışmaları",
    region: "Orta Doğu",
    location: "Güney Lübnan (Litani Hattı, Maroun al-Ras, Khiam), Beyrut, Gazze (Cebaliye)",
    coordinates: "33.27°N, 35.20°E",
    intensity: 92,
    startDate: "7 Ekim 2023",
    duration: "3. Yılına Giren Çok Cepheli Kriz",
    threatLevel: "YÜKSEK ŞİDDETLİ ASİMETRİK VE KARA HARBİ",
    levelColor: "rose",
    frontlineStatus: "Litani Tampon Bölge Harekâtı & Tanksavar / İHA Pusuları",
    parties: "İsrail Savunma Kuvvetleri (IDF) vs. Hizbullah, Hamas & Direniş Ekseni",
    summary: "Güney Lübnan sınırında Litani Nehri güneyine yönelik zırhlı mekanize sınır ötesi kara operasyonu, Beyrut güney banliyöleri hava taarruzları, Hayfa ve Tel Aviv'e yönelik roket/İHA saldırıları.",
    currentSituation: "İsrail ordusu, Güney Lübnan'da sınır hattındaki köyleri ve tünel ağlarını temizleyerek Litani Nehri güneyinde kalıcı bir tampon bölge oluşturmak amacıyla tugay seviyesinde kara taarruzlarını sürdürmektedir. Hizbullah güçleri ise sarp kayalık ve zeytinlik arazide Almas-3 (TV güdümlü) ve Kornet-EM tanksavar pusuları kurarak Merkava Mk4 tanklarını hedef almakta; Hayfa limanı, üsler ve Tel Aviv'e yönelik her gün onlarca Fadi-1/2 ağır roketi ve patlayıcı yüklü Ebabil kamikaze İHA'sı ateşlemektedir. Gazze'de ise Cebaliye mülteci kampı ve kuzey Gazze ceplerinde meskun mahal gerilla çatışmaları devam etmektedir.",
    keyTech: [
      "Demir Kubbe & Davud Sapanı (David's Sling)",
      "Almas-3 (TV Güdümlü) & Kornet-EM Tanksavar",
      "Trophy Aktif Koruma Sistemi (APS)",
      "Meskun Mahal Tünel Arama Robotları",
      "Hafif Taktik Kamikaze Dronlar"
    ],
    osintNote: "Termal İHA görüntülerinde Hizbullah'ın sınır tünellerinden anlık çıkıp optik güdümlü füzeleri fırlatarak 15 saniye içinde kaybolduğu 'vur-kaç-gizlen' taktiği gözlenmektedir."
  },
  {
    id: "kizildeniz-yemen-deniz-krizi",
    title: "Kızıldeniz & Aden Körfezi Deniz Güvenliği Krizi",
    region: "Kızıldeniz & Arap Denizi",
    location: "Babülmendep Boğazı, Aden Körfezi, Hudeyde Limanı & Kızıldeniz",
    coordinates: "12.58°N, 43.33°E",
    intensity: 88,
    startDate: "19 Kasım 2023",
    duration: "2+ Yıldır Devam Ediyor",
    threatLevel: "DENİZ TİCARETİ VE DONANMA ANGAJMANI",
    levelColor: "amber",
    frontlineStatus: "Gemisavar Balistik Füzeler (ASBM) & Kamikaze USV İnsansız Botlar",
    parties: "Ensarullah (Husiler / Yemen) vs. Çok Uluslu Görev Gücü (ABD, İngiltere, AB Aspides)",
    summary: "Babülmendep Boğazı'nda ticari gemilere ve uluslararası donanmalara karşı gemisavar balistik füzeler, kamikaze insansız deniz botları ve karşı hava bombardımanları.",
    currentSituation: "Husiler, İsrail limanlarıyla bağlantılı ve Batılı ticari gemilere yönelik Babülmendep Boğazı ve Aden Körfezi'nde seyir füzeleri, gemisavar balistik füzeler (ASBM) ve patlayıcı yüklü insansız deniz araçları (USV) ile saldırılarını sürdürmektedir. Küresel deniz taşımacılığının önemli bir kısmı rotasını Güney Afrika'daki Ümit Burnu'na çevirmiştir. ABD ve müttefik donanmaları Aegis destroyerleri ile SM-2/SM-3 füzelerini kullanarak angajman sağlamakta, Yemen içindeki füze fırlatma rampaları ve radar merkezlerine periyodik hava harekâtları düzenlemektedir.",
    keyTech: [
      "Gemisavar Balistik Füzeler (ASBM - Tankil)",
      "Patlayıcı Yüklü İnsansız Deniz Araçları (Tufan USV)",
      "Aegis Muharebe Sistemi & SM-2/SM-6 Füzeleri",
      "Uzun Menzilli Quds Seyir Füzeleri",
      "Donanma Lazer ve CIWS Yakın Savunma"
    ],
    osintNote: "Otomatik Tanımlama Sistemi (AIS) verilerine göre Süveyş Kanalı ticari gemi trafiği %60'ın üzerinde düşmüş durumdadır; güzergâhın Ümit Burnu'na kayması küresel navlun fiyatlarını yükseltmiştir."
  },
  {
    id: "suriye-ic-savasi-bolgesel-dinamikler",
    title: "Suriye Çatışmaları & Bölgesel Güvenlik Dinamikleri",
    region: "Orta Doğu / Levant",
    location: "Halep Kırsalı, İdlib Hattı, Tel Rıfat - Münbiç, Fırat'ın Doğusu & Deyrizor",
    coordinates: "36.20°N, 37.13°E",
    intensity: 84,
    startDate: "15 Mart 2011",
    duration: "15+ Yıldır Devam Eden Bölünmüş Kriz",
    threatLevel: "BÖLGESEL HAREKÂT VE TERÖRLE MÜCADELE",
    levelColor: "amber",
    frontlineStatus: "Nokta SİHA Harekâtları, Tünel İmhaları & İdlib Topçu Düellosu",
    parties: "Rejim Güçleri, HTŞ & Suriye Milli Ordusu, Terör Örgütü PKK/YPG, TSK/MİT ve Koalisyon",
    summary: "İdlib temas hattında topçu-drone tacizleri, Fırat'ın doğusunda terör örgütü hedeflerine yönelik nokta SİHA operasyonları ve Deyrizor'da aşiret gerilimleri.",
    currentSituation: "İdlib temas hattında rejim güçleri ile muhalif unsurlar arasında FPV intihar dronları ve karşılıklı topçu atışları sürmektedir. Türkiye, sınır güvenliğini tehdit eden terör örgütü PKK/YPG'nin Tel Rıfat, Münbiç ve Fırat'ın doğusundaki lojistik merkezleri, sözde lider kadroları ve tünel ağlarına yönelik Bayraktar TB2 ve AKINCI TİHA ile nokta operasyonlarını kararlılıkla sürdürmektedir. Deyrizor hattında ise yerel Arap aşiretleri ile terör örgütü unsurları arasında periyodik çatışmalar devam etmektedir.",
    keyTech: [
      "Milli TİHA/SİHA (Bayraktar TB2 / AKINCI) Hassas Vuruş",
      "MAM-L & MAM-T Akıllı Mikro Mühimmat",
      "Elektronik Harp (KORAL Sistemi)",
      "Meskun Mahal Tahkimat ve Tünel Savunması"
    ],
    osintNote: "MİT ve TSK SİHA operasyonları, örgütün sözde lojistik merkezleri ve petrol kuyusu gelir kaynaklarını cerrahi vuruşlarla felç etmektedir."
  },
  {
    id: "sudan-ic-savasi",
    title: "Sudan İç Savaşı (Hartum ve El Faşir Kuşatması)",
    region: "Doğu & Kuzey Afrika",
    location: "Hartum, El Cezire, Kuzey Darfur (El Faşir)",
    coordinates: "15.50°N, 32.55°E",
    intensity: 90,
    startDate: "15 Nisan 2023",
    duration: "3+ Yıldır Devam Ediyor",
    threatLevel: "AĞIR İÇ SAVAŞ & İNSANİ KRİZ",
    levelColor: "rose",
    frontlineStatus: "El Faşir Son Kale Kuşatması & Modifiye Dron Saldırıları",
    parties: "Sudan Silahlı Kuvvetleri (SAF - Burhan) vs. Hızlı Destek Kuvvetleri (RSF - Hemeti)",
    summary: "Dünyanın en derin insani krizlerinden biri haline gelen çatışmada, başkent Hartum köprüleri ve Kuzey Darfur'un son kalesi El Faşir çevresinde ağır kentsel kuşatma savaşı.",
    currentSituation: "Sudan ordusu (SAF) ile paramiliter Hızlı Destek Kuvvetleri (RSF) arasındaki çatışmalar, başkent Hartum'un kontrolü ve Kuzey Darfur eyaletinin başkenti El Faşir çevresinde kilitlenmiştir. RSF birlikleri kenti kuşatma altında tutarken, SAF hava saldırıları ve topçu bataryaları ile karşılık vermektedir. Çatışmalarda 10 milyondan fazla sivil yerinden edilmiş olup, hafif ticari dronların havan ve bomba atacak şekilde modifiye edildiği ve teknik araçlara dayalı hızlı manevra taktiklerinin kullanıldığı gözlenmektedir.",
    keyTech: [
      "Modifiye Edilmiş Ticari Bombardıman Dronları",
      "Meskun Mahal Ağır Topçu & Çok Namlulu Roketatar",
      "Hafif Zırhlı Taktik Araçlar (Technical)",
      "Gezici Keskin Nişancı Timleri"
    ],
    osintNote: "Açık kaynak uydu haritaları El Faşir çevresinde yüzlerce sivil mahallenin yakıldığını ve gıda koridorlarının tamamen kesildiğini belgelemektedir."
  },
  {
    id: "myanmar-ic-savasi",
    title: "Myanmar İç Savaşı (Bahar Devrimi ve 1027 Operasyonu)",
    region: "Güneydoğu Asya",
    location: "Shan Eyaleti, Rakhine, Sagaing, Çin Sınır Hatları",
    coordinates: "21.91°N, 95.95°E",
    intensity: 85,
    startDate: "1 Şubat 2021 (Askeri Darbe)",
    duration: "5+ Yıldır Devam Ediyor",
    threatLevel: "ÇOK CEPHELİ DİRENİŞ & GERİLLA HARBİ",
    levelColor: "rose",
    frontlineStatus: "Cunta Karargahlarının Ele Geçirilmesi & 3D Dron Sürüleri",
    parties: "Myanmar Askeri Cuntası (Tatmadaw) vs. PDF (Halk Savunma Güçleri) & Etnik Silahlı İttifak (Üç Kardeşlik)",
    summary: "Askeri cuntanın kontrolü kaybetmeye başladığı, etnik orduların kritik Çin sınırı ticaret kapılarını ve cunta üslerini ele geçirdiği yaygın asimetrik halk savaşı.",
    currentSituation: "1027 Operasyonu ile büyük bir ivme kazanan etnik direniş ittifakı (MNDAA, TNLA, AA) ve sivil Halk Savunma Güçleri (PDF), Shan ve Rakhine eyaletlerinde cuntanın onlarca tabur karargahını ve stratejik sınır kapısını ele geçirmiştir. Cunta güçleri kara üstünlüğünü kaybederek yoğun hava bombardımanları ve zorunlu askerlik uygulamalarıyla ayakta kalmaya çalışmaktadır. Direniş güçleri ucuz 3D yazıcı teknolojileriyle ürettikleri bomba bırakan FPV dronları sürüler halinde kullanarak modern bir halk gerilla harbi yürütmektedir.",
    keyTech: [
      "3D Baskı Bomba Bırakan Mini İHA Sistemleri",
      "Orman ve Dağ Tipi Asimetrik Pusu Taktikleri",
      "Hafif Havan ve Omuzdan Atılan Roketler",
      "Cunta Hava Kuvvetleri Ağır Bombardıman Uçakları"
    ],
    osintNote: "Etnik ittifakın Çin sınırındaki Lashio bölgesel askeri komutanlığını düşürmesi, 1962'den bu yana cunta ordusunun aldığı en büyük tekil yenilgi olarak kayda geçmiştir."
  },
  {
    id: "kore-yarimadasi-dmz-gerilimi",
    title: "Kore Yarımadası & DMZ Askeri Alarm Hattı",
    region: "Doğu Asya / Pasifik",
    location: "Askerden Arındırılmış Bölge (DMZ), Sarı Deniz & Pyongyang Sınır Hattı",
    coordinates: "37.95°N, 126.95°E",
    intensity: 82,
    startDate: "1950 (Ateşkes 1953, Nükleer/Füze Tırmanışı: 2024-2026)",
    duration: "70+ Yıldır Donmuş, Yeniden Isınan Kriz",
    threatLevel: "STRATEJİK NÜKLEER & BALİSTİK TEHDİT",
    levelColor: "amber",
    frontlineStatus: "Sınır Yollarının Dinamitlenmesi & Hwasong-19 ICBM Testleri",
    parties: "Kore Demokratik Halk Cumhuriyeti (Kuzey) vs. Kore Cumhuriyeti (Güney) & ABD",
    summary: "Kuzey Kore'nin birleşme politikasını terk etmesi, sınır yollarını dinamitlemesi, Hwasong-19 katı yakıtlı ICBM testleri ve karşılıklı dev tatbikatlar.",
    currentSituation: "Kuzey Kore liderliği anayasal düzeyde Güney Kore ile barışçıl birleşme maddelerini kaldırarak sınır hattındaki tüm karayolu ve demiryolu bağlantılarını havaya uçurmuştur. Sınır boyunca yoğun beton tahkimatlar ve mayın hatları kurulurken, Pyongyang yönetimi katı yakıtlı kıtalararası balistik füzeler (Hwasong-19) ve hipersonik kayma araçları denemektedir. Güney Kore ve ABD ise nükleer denizaltılar, B-52 bombardıman uçakları ve F-35A filolarıyla ortak caydırıcılık manevralarını artırmıştır.",
    keyTech: [
      "Katı Yakıtlı Kıtalararası Balistik Füzeler (ICBM)",
      "GPS Karıştırma ve Elektronik Sınır Harp Sistemleri",
      "THAAD & Patriot Çok Katmanlı Füze Kalkanı",
      "Hipersonik Kayma Araçları (HGV)"
    ],
    osintNote: "DMZ boyunca inşa edilen anti-tank hendekleri ve mayın tarlaları, yarımadada barışçıl diplomasi döneminin tamamen kapandığını göstermektedir."
  },
  {
    id: "tayvan-bogazi-guney-cin-denizi",
    title: "Tayvan Boğazı & Güney Çin Denizi Askeri Abluka Kalkanı",
    region: "Güneydoğu Asya / Pasifik",
    location: "Tayvan Boğazı, Pratas Adaları, İkinci Thomas Resifi",
    coordinates: "23.69°N, 120.96°E",
    intensity: 80,
    startDate: "1949 (Son Tırmanış: 2022-2026)",
    duration: "Sürekli Yüksek Stratejik Gerilim",
    threatLevel: "DENİZ VE HAVA ALAN REDDİ (A2/AD)",
    levelColor: "amber",
    frontlineStatus: "Joint Sword Ada Kuşatma Tatbikatları & Kirpi Savunma Stratejisi",
    parties: "Çin Halk Kurtuluş Ordusu (PLA) vs. Tayvan Savunma Kuvvetleri & Müttefikler (ABD, Japonya)",
    summary: "Çin'in Joint Sword ada kuşatma tatbikatları, Type 055 kruvazörleri, J-20 hayalet filoları ve Tayvan'ın yerli denizaltı ve kıyı savunma füzeleriyle karşı hamleleri.",
    currentSituation: "Çin ordusu (PLA), Tayvan çevresinde gerçekleştirdiği 'Joint Sword' tatbikatlarıyla adanın dış dünyayla petrol ve enerji tedarikini kesmeye yönelik koordineli deniz ve hava ablukası senaryolarını test etmektedir. Tayvan hava savunma tanımlama sahası (ADIZ) her gün onlarca Çin savaş uçağı ve İHA'sı tarafından aşılmaktadır. Tayvan ise asimetrik 'kirpi stratejisi' kapsamında karadan atılan Harpoon ve yerli Hsiung Feng III gemisavar füzeleri, yerli üretim Hai Kun denizaltıları ve deniz mayınlama kabiliyetleriyle yanıt vermektedir.",
    keyTech: [
      "J-20 Hayalet Savaş Uçakları",
      "DF-21D & DF-26 Uçak Gemisi Katili Balistik Füzeler",
      "Kıyı Konuşlu Süpersonik Gemisavar Füzeleri",
      "Tip 075 Amfibi Çıkarma Gemileri"
    ],
    osintNote: "Tayvan Boğazı orta çizgisinin (Median Line) Çin jetleri tarafından fiilen yok sayılması, tepki süresini 3 dakikanın altına indirmiştir."
  }
];

export const articles = [
  {
    id: "siper-urun-2-balistik-onleme-testi",
    title: "SİPER Ürün-2 Uzun Menzilli Bölge Hava Savunma Sistemi: Balistik Önleme Başarısı",
    category: "Saldırı & Savunma Teknolojileri",
    readTime: "10 dk okuma",
    date: "10 Ekim 2026",
    excerpt: "ROKETSAN ve ASELSAN ortaklığıyla geliştirilen SİPER Ürün-2 füzesinin Sinop atış alanında 150+ km menzilde yüksek irtifa ve süpersonik hedefi doğrudan vuruşla (Hit-to-Kill) imha testi.",
    tags: ["SİPER", "Hava Savunma", "Çelik Kubbe", "ROKETSAN", "ASELSAN", "Hit-to-Kill"],
    featured: true,
    likes: 728,
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
