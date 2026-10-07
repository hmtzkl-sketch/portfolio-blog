export const weaponCategories = [
  "Tümü",
  "Türk Silah Sanayii",
  "Piyade Tüfekleri (Dünya)",
  "Özel Birlikler (SOF)",
  "Tabancalar",
  "Keskin Nişancı Tüfekleri"
];

export const weaponsList = [
  // --- TÜRK SİLAH SANAYİİ & TÜRKİYE'DE KULLANILANLAR ---
  {
    id: "sar-56",
    name: "Sarsılmaz SAR 56 (5.56x45mm Karabin)",
    category: "Türk Silah Sanayii",
    subCategory: "Piyade Tüfeği",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "Sarsılmaz Silah Sanayi (SAR)",
    caliber: "5.56x45mm NATO",
    usedBy: "TSK Özel Kuvvetleri, Deniz Piyadeleri, Polis Özel Harekat (PÖH)",
    specs: {
      range: "450 m etkili menzil",
      fireRate: "750 - 850 atım/dk",
      weight: "3.2 kg (Boş)",
      barrel: "11 inç / 14.5 inç seçenekleri"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SAR_56_Assault_Rifle_IDEF_2021.jpg/1280px-SAR_56_Assault_Rifle_IDEF_2021.jpg",
    description: "Kısa stroklu gaz piston sistemi ve döner başlı kilit mekanizmasıyla donatılmış, meskun mahal ve özel operasyonlar için optimize edilmiş modern taarruz tüfeğidir. M-LOK el kundağı, çift taraflı şarjör mandalı ve ayarlanabilir teleskopik dipçiğiyle yüksek ergonomi sağlar.",
    highlight: "TSK ve Özel Harekât birimlerinin modern meskun mahal karabini."
  },
  {
    id: "mpt-76",
    name: "MKE MPT-76 (Milli Piyade Tüfeği)",
    category: "Türk Silah Sanayii",
    subCategory: "Piyade Tüfeği",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş. & Kalekalıp",
    caliber: "7.62x51mm NATO",
    usedBy: "Türk Silahlı Kuvvetleri (TSK), Jandarma, KKTC, Somali",
    specs: {
      range: "600 m etkili menzil",
      fireRate: "650 atım/dk",
      weight: "4.1 kg (Boş)",
      barrel: "406 mm (16 inç)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/MPT-76_Assault_Rifle_noBG.png",
    description: "NATO'nun 42 zorlu dayanıklılık testinin tamamını sıfır hata ile geçen dünyadaki nadir tüfeklerdendir. Çamur, toz, aşırı soğuk (-40°C) ve yüksek ısı (+60°C) testlerini başarıyla tamamlamıştır. Kısa vuruşlu gaz piston çalışma prensibiyle 7.62mm'nin yüksek durdurucu gücünü modern ergonomiyle buluşturur.",
    highlight: "NATO standart testlerinin tamamını geçen tek piyade tüfeği."
  },
  {
    id: "knt-76",
    name: "MKE KNT-76 (Keskin Nişancı Tüfeği)",
    category: "Türk Silah Sanayii",
    subCategory: "Keskin Nişancı Tüfeği",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş. & Kalekalıp",
    caliber: "7.62x51mm NATO",
    usedBy: "TSK, Jandarma Genel Komutanlığı (JÖAK / JAK)",
    specs: {
      range: "800 m etkili menzil",
      fireRate: "Yarı Otomatik Hassas Atış",
      weight: "4.7 kg",
      barrel: "508 mm (20 inç Ağır Namlu)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Turkish_Gendarmerie_KNT-76_Teknofest_2025.jpg",
    description: "Milli Piyade Tüfeği projesinden türetilen, piyade mangalarının 800 metreye kadar olan hedefleri cerrahi hassasiyetle imha etmesi için geliştirilen manga tipi keskin nişancı tüfeğidir. Ayarlanabilir yanaklıklı dipçiği, iki ayaklı çatal ayağı (bipod) ve Schmidt & Bender / yerli optikleriyle görev yapar.",
    highlight: "TSK ve Jandarma mangalarının yarı otomatik keskin nişancı tüfeği."
  },
  {
    id: "canik-tp9-sfx",
    name: "CANiK TP9 SFx / METE Serisi",
    category: "Türk Silah Sanayii",
    subCategory: "Tabancalar",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "Samsun Yurt Savunma (SYS) / CANiK",
    caliber: "9x19mm Parabellum",
    usedBy: "Emniyet Genel Müdürlüğü, Özel Kuvvetler, ABD Kolluk Kuvvetleri",
    specs: {
      range: "50-75 m etkili menzil",
      capacity: "18+1 / 20+1 mermi",
      weight: "830 g",
      barrel: "132 mm (Match-grade)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Canik-TP9-SFx.jpg",
    description: "Türk savunma sanayiinin dünyaya ihraç ettiği en başarılı hafif silahlardandır. ABD'de 'Yılın Tabancası' (ICA) ödülünü defalarca kazanmıştır. Optik montaj yuvası (Optic-Ready), hafifletilmiş polimer gövdesi ve düz tetik mekanizmasıyla hızlı ve hassas mükerrer atış sağlar.",
    highlight: "ABD pazarında en çok satan ve ödüllü Türk tabancası."
  },
  {
    id: "sar-9",
    name: "Sarsılmaz SAR9 Gen2",
    category: "Türk Silah Sanayii",
    subCategory: "Tabancalar",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "Sarsılmaz Silah Sanayi",
    caliber: "9x19mm Parabellum",
    usedBy: "TSK & EGM Resmi Görev Tabancası (Özgün Yerli Tabanca)",
    specs: {
      range: "50 m",
      capacity: "15+1 / 17+1 mermi",
      weight: "790 g",
      barrel: "113 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/SAR9_Black_Right.png",
    description: "Türkiye'nin 'Özgün Yerli Tabanca Projesi' kapsamında birinci seçilerek Türk Silahlı Kuvvetleri ve Emniyet'in standart görev tabancası olmuştur. 50.000 atım ömrü testini sıfır arızayla geçerek polimer gövdeli iğne vuruşlu (striker-fired) tabancalar arasında üstün güvenilirlik kanıtlamıştır.",
    highlight: "TSK ve Emniyet'in ana hizmet tabancası; 50.000 atım dayanıklılığı."
  },
  {
    id: "bora-12",
    name: "MKE BORA-12 (JNG-90)",
    category: "Türk Silah Sanayii",
    subCategory: "Keskin Nişancı Tüfekleri",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş.",
    caliber: "7.62x51mm NATO (.308 Win)",
    usedBy: "Jandarma Özel Asayiş Komutanlığı (JÖAK), TSK, Azerbaycan",
    specs: {
      range: "1200 m etkili menzil",
      accuracy: "0.3 MOA (Üstün Hassasiyet)",
      weight: "6.4 kg",
      barrel: "660 mm (Serbest Salınımlı)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bora-12_%28MKEK_JNG-90%29.jpg",
    description: "Milli imkanlarla geliştirilen ilk keskin nişancı tüfeğidir. Uluslararası keskin nişancı yarışmalarında birinci gelerek doğruluğunu kanıtlamıştır. Serbest salınımlı namlusu ve ayarlanabilir kundağıyla 1000+ metrede cerrahi isabet sağlar.",
    highlight: "0.3 MOA hassasiyet ile dünya çapında yarışma şampiyonu."
  },
  {
    id: "canik-m2-qcb",
    name: "CANiK M2 QCB 12.7mm Ağır Makineli Tüfek",
    category: "Türk Silah Sanayii",
    subCategory: "Ağır Silahlar",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "CANiK / SYS",
    caliber: "12.7x99mm (.50 BMG)",
    usedBy: "Zırhlı Araçlar, Sahil Güvenlik Botları, TSK",
    specs: {
      range: "1830 m etkili / 6800 m azami menzil",
      fireRate: "450 - 650 atım/dk",
      weight: "38 kg",
      barrel: "1143 mm (Hızlı Değiştirilebilir - QCB)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/M2_Browning_01.jpg/1280px-M2_Browning_01.jpg",
    description: "Türkiye'nin ilk yerli 12.7mm ağır makineli tüfeğidir. Namlusu hızla değiştirilebilir (Quick Change Barrel) yapısı sayesinde çatışma anında alet gerektirmeden saniyeler içinde namlu değişimi yapılır. Zırhlı araç kulelerinde ve deniz platformlarında uçaksavar ve zırh delici mermilerle görev yapar.",
    highlight: "Milli 12.7mm platformu, zırhlı ve deniz araçlarının ana ateş gücü."
  },

  // --- DÜNYA ORDULARI PİYADE TÜFEKLERİ ---
  {
    id: "sig-xm7",
    name: "SIG Sauer XM7 (M7 Spear)",
    category: "Piyade Tüfekleri (Dünya)",
    subCategory: "Yeni Nesil Piyade Tüfeği",
    origin: "ABD",
    originFlag: "🇺🇸",
    manufacturer: "SIG Sauer",
    caliber: "6.8x51mm (.277 FURY)",
    usedBy: "ABD Kara Kuvvetleri (M4A1 Değişimi - NGSW Programı)",
    specs: {
      range: "600+ m etkili menzil",
      fireRate: "700 atım/dk",
      weight: "3.8 kg (Susturucu ile)",
      barrel: "330 mm (13 inç)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/XM7_Rifle.jpg/1280px-XM7_Rifle.jpg",
    description: "ABD ordusunun 50 yıllık M4/M16 çağını kapatan yeni standart tüfeğidir. 80.000 PSI namlu içi basınca sahip hibrit kovanlı mühimmatı sayesinde, düşman vücut zırhlarını yüzlerce metre uzaktan delip geçmek üzere geliştirilmiştir. Standart SLX susturucu ve akıllı XM157 atış kontrol bilgisayarıyla birlikte gelir.",
    highlight: "M4'lerin yerini alan ABD Ordusu'nun 6.8mm yeni tüfeği."
  },
  {
    id: "hk-416",
    name: "Heckler & Koch HK416 A5",
    category: "Piyade Tüfekleri (Dünya)",
    subCategory: "Piyade / Özel Birlikler",
    origin: "Almanya",
    originFlag: "🇩🇪",
    manufacturer: "Heckler & Koch",
    caliber: "5.56x45mm NATO",
    usedBy: "Fransız Ordusu (HK416F), Norveç, Alman Ordusu (G95)",
    specs: {
      range: "500 m",
      fireRate: "850 atım/dk",
      weight: "3.5 kg",
      barrel: "279 - 419 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/HK416_noBG.png/1280px-HK416_noBG.png",
    description: "M4 platformunun ergonomisini G36'nın güvenilir gaz piston sistemiyle birleştirerek efsaneleşen muharebe tüfeğidir. Sudan çıkar çıkmaz ateş edebilme (Over-the-Beach) yeteneği ve tutukluk yapmayan dayanıklılığıyla NATO müttefiklerinin ana tercihi olmuştur.",
    highlight: "Dünyanın en güvenilir kısa vuruşlu gaz piston tüfeklerinden biri."
  },
  {
    id: "ak-12",
    name: "Kalaşnikof AK-12 (Ratnik)",
    category: "Piyade Tüfekleri (Dünya)",
    subCategory: "Piyade Tüfeği",
    origin: "Rusya",
    originFlag: "🇷🇺",
    manufacturer: "Kalashnikov Concern",
    caliber: "5.45x39mm",
    usedBy: "Rusya Federasyonu Silahlı Kuvvetleri",
    specs: {
      range: "450 m",
      fireRate: "700 atım/dk",
      weight: "3.5 kg",
      barrel: "415 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/AK-12_rifle.jpg/1280px-AK-12_rifle.jpg",
    description: "Klasik AK-74M mimarisinin 21. yüzyıl ergonomisiyle modernize edilmiş halidir. Entegre Picatinny rayları, serbest salınımlı el kundağı ve katlanabilir teleskopik dipçik ile gece görüş ve kırmızı nokta (red dot) optik kullanımına uyarlanmıştır.",
    highlight: "Modern Rus piyadesinin Ratnik teçhizat projesindeki ana tüfeği."
  },

  // --- ÖZEL BİRLİKLERİN (SOF) KULLANDIĞI SİLAHLAR ---
  {
    id: "fn-scar-h",
    name: "FN SCAR-H (Mk 17)",
    category: "Özel Birlikler (SOF)",
    subCategory: "Ağır Taarruz Tüfeği",
    origin: "Belçika / ABD",
    originFlag: "🇧🇪",
    manufacturer: "FN Herstal",
    caliber: "7.62x51mm NATO",
    usedBy: "US SOCOM (Navy SEALs, Green Berets), Bordo Bereliler (ÖKK)",
    specs: {
      range: "600-800 m",
      fireRate: "625 atım/dk",
      weight: "3.58 kg",
      barrel: "406 mm (Değiştirilebilir)"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/ScarSandiaPix.png",
    description: "Özel Kuvvetler Komutanlıklarının zorlu dağ ve uzun menzil operasyonlarında en çok tercih ettiği 7.62mm modüler taarruz tüfeğidir. Düşük geri tepmesi, monolitik üst gövdesi ve saniyeler içinde namlu boyunun değiştirilebilmesi operasyonel esneklik sağlar.",
    highlight: "Küresel Özel Kuvvetlerin (SOCOM/ÖKK) uzun menzilli taarruz tercihi."
  },
  {
    id: "hk-mp7a1",
    name: "Heckler & Koch MP7A1",
    category: "Özel Birlikler (SOF)",
    subCategory: "PDW / Makinalı Tabanca",
    origin: "Almanya",
    originFlag: "🇩🇪",
    manufacturer: "Heckler & Koch",
    caliber: "4.6x30mm Yüksek Delici",
    usedBy: "DEVGRU (SEAL Team 6), KSK, Özel Operasyon Polisleri",
    specs: {
      range: "200 m",
      fireRate: "950 atım/dk",
      weight: "1.9 kg",
      barrel: "180 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/HK_MP7A1.jpg/1280px-HK_MP7A1.jpg",
    description: "CRISAT zırh delme standardına göre üretilmiştir. 1.6 mm titanyum ve 20 kat Kevlar zırhı 200 metreden delebilen özel 4.6mm çelik çekirdekli mermi kullanır. Sıfır geri tepme hissi ile tek elle bile seri atış kontrolü mükemmeldir.",
    highlight: "200 metreden vücut zırhını delen ultra kompakt PDW."
  },

  // --- DÜNYA VE KOLLUK TABANCALARI ---
  {
    id: "glock-19-gen5",
    name: "Glock 19 Gen5 MOS",
    category: "Tabancalar",
    subCategory: "Hizmet Tabancası",
    origin: "Avusturya",
    originFlag: "🇦🇹",
    manufacturer: "Glock Ges.m.b.H.",
    caliber: "9x19mm Parabellum",
    usedBy: "FBI, Delta Force, Dünya Genelinde 100+ Kolluk Kuvveti",
    specs: {
      range: "50 m",
      capacity: "15+1 mermi",
      weight: "670 g (Boş)",
      barrel: "102 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Glock_19_Gen_4.JPG/1280px-Glock_19_Gen_4.JPG",
    description: "Modern kolluk kuvvetlerinin altın standardı kabul edilen polimer gövdeli tabancadır. Az sayıda hareketli parçası sayesinde çamurda, suda ve karda takılmaksızın çalışır. Gen5 ile gelen 'Marksman' yiv-setli namlu ve MOS (optik yuvası) sistemiyle refleks atışlarda mükemmeldir.",
    highlight: "Dünya kolluk ve özel kuvvetlerinin en yaygın kullandığı tabanca."
  },
  {
    id: "sig-m17",
    name: "SIG Sauer M17 (P320 MHS)",
    category: "Tabancalar",
    subCategory: "Ordu Görev Tabancası",
    origin: "ABD / İsviçre",
    originFlag: "🇺🇸",
    manufacturer: "SIG Sauer",
    caliber: "9x19mm Parabellum",
    usedBy: "ABD Ordusu (Beretta M9'un yerini aldı), Deniz Piyadeleri (M18)",
    specs: {
      range: "50 m",
      capacity: "17+1 / 21+1 mermi",
      weight: "833 g",
      barrel: "119 mm"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SIG_Sauer_M17.jpg/1280px-SIG_Sauer_M17.jpg",
    description: "ABD Savunma Bakanlığı'nın 'Modüler Tabanca Sistemi (MHS)' ihalesini kazanarak 30 yıllık Beretta M9 dönemini sonlandırmıştır. Çelik iç şasisi polimer gövdeden bağımsız olarak sökülebilir ve farklı kabze boyutlarına saniyeler içinde aktarılabilir.",
    highlight: "ABD Silahlı Kuvvetleri'nin yeni resmi hizmet tabancası."
  }
];

export const turkishDefenseIndustry = [
  {
    company: "MKE A.Ş. (Makine ve Kimya Endüstrisi)",
    role: "Hafif ve Ağır Silah Mühimmat Ana Üreticisi",
    flagships: ["MPT-76 / MPT-55", "BORA-12 Keskin Nişancı", "PMT-76 / 57A Ağır Makineli", "Tolun Akıllı Mühimmat", "155mm Fırtına Obüs Mühimmatı"],
    description: "Cumhuriyetin ilk sanayi kuruluşlarından olan MKE; küçük kalibreden 155mm top mermisine, uçak bombalarından milli piyade tüfeği MPT-76'ya kadar Türk ordusunun temel muharebe ateş gücünü kesintisiz üretmektedir.",
    badge: "Milli Omurga"
  },
  {
    company: "Sarsılmaz Silah Sanayi (SAR)",
    role: "Hafif Silahlar, Piyade Tüfekleri ve Otomatik Top Sistemleri",
    flagships: ["SAR9 (TSK & EGM Standart)", "SAR 56 (5.56mm Karabin)", "SAR 109T (9mm SMG)", "25mm Kara & Deniz Topu (ATAK Helikopteri)"],
    description: "Avrupa'nın en büyük hafif silah entegre üretim tesisine sahip olan Sarsılmaz; SAR9 serisiyle yerli tabanca ihtiyacını karşılarken, ATAK helikopterinin 20mm burun topunu ve zırhlı araç kule toplarını üretmektedir.",
    badge: "Avrupa'nın En Büyük Üreticisi"
  },
  {
    company: "Samsun Yurt Savunma (CANiK)",
    role: "Taktik Tabancalar, Ağır Makineli Tüfekler & Kule Sistemleri",
    flagships: ["CANiK TP9 / METE Serisi", "CANiK M2 QCB 12.7mm Ağır Makineli", "TRAKON Uzaktan Komutalı Silah Kulesi", "M2F Hızlı Ateş Uçaksavar"],
    description: "Dünyanın 5 kıtasında 70'ten fazla ülkeye ihracat yapan CANiK, ABD pazarında ilk 3 yabancı üretici arasındadır. 12.7mm M2 QCB ağır makineli tüfek üretimiyle Türkiye'yi bu sınıfta üretim yapabilen 5 ülkeden biri haline getirmiştir.",
    badge: "Küresel İhracat Lideri"
  },
  {
    company: "Kale Kalıp & Kale Savunma",
    role: "Hassas Piyade & Keskin Nişancı Tüfekleri",
    flagships: ["KCR556 (5.56mm Taarruz Tüfeği)", "KCR762 (7.62mm)", "KSR50 (.50 BMG Anti-Materiel Keskin Nişancı)"],
    description: "Yüksek mühendislik ve toleransla üretilen KCR serisi gaz pistonlu tüfekler, TSK Özel Kuvvetleri ve Jandarma birlikleri tarafından meskun mahal operasyonlarında yoğun şekilde kullanılmaktadır.",
    badge: "Özel Kuvvetler Donanımı"
  },
  {
    company: "Aselsan & Roketsan Savunma Teknolojileri",
    role: "Akıllı Atış Kontrol, Lazer, Anti-Drone ve Füze Sistemleri",
    flagships: ["SARP / NEFER Uzaktan Komutalı Silah Kuleleri", "İHASAVAR / ŞAHİN Anti-Drone", "CİRİT & UMTAS Lazer Güdümlü Füzeler", "GÖKDENİZ CIWS"],
    description: "Piyade silahlarının ötesinde; zırhlı araçların üzerine takılan yapay zekalı optik nişangahlar, termal kameralar, dron savunma karıştırıcıları ve lazer güdümlü mühimmatlarla modern savaş sahasının elektronik beynini inşa eder.",
    badge: "Yüksek Teknoloji & Savunma Elektroniği"
  }
];
