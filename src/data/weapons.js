export const weaponCategories = [
  "Tümü",
  "Piyade Tüfekleri",
  "Özel Birlikler (SOF)",
  "Keskin Nişancı Tüfekleri",
  "Tabancalar",
  "Ağır Silahlar"
];

export const weaponsList = [
  // --- PİYADE TÜFEKLERİ (TSK & NATO) ---
  {
    id: "mpt-76",
    name: "MKE MPT-76 (Milli Piyade Tüfeği)",
    category: "Piyade Tüfekleri",
    subCategory: "Milli Taarruz Tüfeği",
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
    metrics: {
      range: 600,
      fireRate: 650,
      weight: 4.1,
      penetration: 92,
      recoilControl: 70,
      modularity: 85
    },
    image: "/weapons/mpt-76.png",
    description: "NATO'nun 42 zorlu dayanıklılık testinin tamamını sıfır hata ile geçen dünyadaki nadir tüfeklerdendir. Çamur, toz, aşırı soğuk (-40°C) ve yüksek ısı (+60°C) testlerini başarıyla tamamlamıştır. Kısa vuruşlu gaz piston çalışma prensibiyle 7.62mm'nin yüksek durdurucu gücünü modern ergonomiyle buluşturur.",
    highlight: "NATO standart testlerinin tamamını geçen tek piyade tüfeği."
  },
  {
    id: "mpt-55",
    name: "MKE MPT-55 (5.56mm Taarruz Tüfeği)",
    category: "Piyade Tüfekleri",
    subCategory: "Kompakt Taarruz Tüfeği",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş.",
    caliber: "5.56x45mm NATO",
    usedBy: "Cumhurbaşkanlığı Koruma, TSK Özel Kuvvetleri, Emniyet",
    specs: {
      range: "400 m etkili menzil",
      fireRate: "750 atım/dk",
      weight: "3.3 kg",
      barrel: "368 mm / 279 mm (K Kısa Namlu)"
    },
    metrics: {
      range: 400,
      fireRate: 750,
      weight: 3.3,
      penetration: 76,
      recoilControl: 88,
      modularity: 88
    },
    image: "/weapons/mpt-55.png",
    description: "Yakın muharebe ve meskun mahal görevleri için MPT-76'nın 5.56mm hafifletilmiş versiyonudur. Döner başlı kilitlemeli gaz piston sistemi, polimer şarjörü ve 4 yönde Picatinny rayları ile yüksek modülerlik sunar.",
    highlight: "TSK ve Özel Harekâtın hafif ve seri milli 5.56mm taarruz tüfeği."
  },
  {
    id: "kcr-556",
    name: "Kale KCR556 Taktik Taarruz Tüfeği",
    category: "Özel Birlikler (SOF)",
    subCategory: "Özel Birlik Karabini",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "Kale Savunma / Kale Kalıp",
    caliber: "5.56x45mm NATO",
    usedBy: "Jandarma Komando, Deniz Kuvvetleri SAT/SAS, Polis Özel Harekat",
    specs: {
      range: "500 m",
      fireRate: "800 atım/dk",
      weight: "3.2 kg",
      barrel: "11 inç / 14.5 inç soğuk dövme"
    },
    metrics: {
      range: 500,
      fireRate: 800,
      weight: 3.2,
      penetration: 78,
      recoilControl: 90,
      modularity: 95
    },
    image: "/weapons/kcr-556.jpg",
    description: "Özel Kuvvetlerin zorlu arazi ve meskun mahal şartlarında kullandığı, aşırı güvenilir kısa vuruşlu gaz piston tüfeğidir. Çamurda ve suda bekletildikten sonra takılmadan seri atış yapabilen üstün toleranslı mekanizmaya sahiptir.",
    highlight: "Özel operasyon birliklerinin sahada kanıtlanmış milli karabini."
  },
  {
    id: "hk-416",
    name: "Heckler & Koch HK416 A5",
    category: "Piyade Tüfekleri",
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
    metrics: {
      range: 500,
      fireRate: 850,
      weight: 3.5,
      penetration: 80,
      recoilControl: 92,
      modularity: 94
    },
    image: "/weapons/hk-416.png",
    description: "M4 platformunun ergonomisini G36'nın güvenilir gaz piston sistemiyle birleştirerek efsaneleşen muharebe tüfeğidir. Sudan çıkar çıkmaz ateş edebilme (Over-the-Beach) yeteneği ve tutukluk yapmayan dayanıklılığıyla NATO müttefiklerinin ana tercihi olmuştur.",
    highlight: "Dünyanın en güvenilir kısa vuruşlu gaz piston tüfeklerinden biri."
  },
  {
    id: "sig-xm7",
    name: "SIG Sauer XM7 (M7 Spear)",
    category: "Piyade Tüfekleri",
    subCategory: "Yeni Nesil Ordu Tüfeği",
    origin: "ABD",
    originFlag: "🇺🇸",
    manufacturer: "SIG Sauer",
    caliber: "6.8x51mm (.277 FURY)",
    usedBy: "ABD Kara Kuvvetleri (M4A1 Değişimi - NGSW Programı)",
    specs: {
      range: "650 m etkili menzil",
      fireRate: "700 atım/dk",
      weight: "3.8 kg (Susturucu ile)",
      barrel: "330 mm (13 inç)"
    },
    metrics: {
      range: 650,
      fireRate: 700,
      weight: 3.8,
      penetration: 98,
      recoilControl: 74,
      modularity: 96
    },
    image: "/weapons/sig-xm7.png",
    description: "ABD ordusunun 50 yıllık M4/M16 çağını kapatan yeni standart tüfeğidir. 80.000 PSI namlu içi basınca sahip hibrit kovanlı mühimmatı sayesinde, düşman vücut zırhlarını yüzlerce metre uzaktan delip geçmek üzere geliştirilmiştir. Standart SLX susturucu ve akıllı XM157 atış kontrol bilgisayarıyla birlikte gelir.",
    highlight: "M4'lerin yerini alan ABD Ordusu'nun 6.8mm yeni tüfeği."
  },
  {
    id: "ak-12",
    name: "Kalaşnikof AK-12 (Ratnik)",
    category: "Piyade Tüfekleri",
    subCategory: "Piyade Taarruz Tüfeği",
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
    metrics: {
      range: 450,
      fireRate: 700,
      weight: 3.5,
      penetration: 75,
      recoilControl: 82,
      modularity: 78
    },
    image: "/weapons/ak-12.jpg",
    description: "Klasik AK-74M mimarisinin 21. yüzyıl ergonomisiyle modernize edilmiş halidir. Entegre Picatinny rayları, serbest salınımlı el kundağı ve katlanabilir teleskopik dipçik ile gece görüş ve kırmızı nokta (red dot) optik kullanımına uyarlanmıştır.",
    highlight: "Modern Rus piyadesinin Ratnik teçhizat projesindeki ana tüfeği."
  },
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
      range: "700 m",
      fireRate: "625 atım/dk",
      weight: "3.58 kg",
      barrel: "406 mm (Değiştirilebilir)"
    },
    metrics: {
      range: 700,
      fireRate: 625,
      weight: 3.58,
      penetration: 93,
      recoilControl: 78,
      modularity: 95
    },
    image: "/weapons/scar-h.png",
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
    metrics: {
      range: 200,
      fireRate: 950,
      weight: 1.9,
      penetration: 85,
      recoilControl: 96,
      modularity: 90
    },
    image: "/weapons/hk-mp7.png",
    description: "CRISAT zırh delme standardına göre üretilmiştir. 1.6 mm titanyum ve 20 kat Kevlar zırhı 200 metreden delebilen özel 4.6mm çelik çekirdekli mermi kullanır. Sıfır geri tepme hissi ile tek elle bile seri atış kontrolü mükemmeldir.",
    highlight: "200 metreden vücut zırhını delen ultra kompakt PDW."
  },
  // --- KESKİN NİŞANCI TÜFEKLERİ ---
  {
    id: "mke-kn-12",
    name: "MKE KN-12 (Çok Kalibreli Değişken Keskin Nişancı)",
    category: "Keskin Nişancı Tüfekleri",
    subCategory: "Değişken Kalibre Cerrahi Tüfek",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş.",
    caliber: "7.62x51mm NATO & .300 Win Mag",
    usedBy: "Polis Özel Harekat (PÖH), TSK, Jandarma (8. BORAN Şampiyonu)",
    specs: {
      range: "1500 m etkili menzil (.300 WM)",
      accuracy: "0.5 MOA altı cerrahi hassasiyet",
      weight: "7.2 kg",
      barrel: "Serbest Salınımlı Değiştirilebilir Namlu (660 mm)"
    },
    metrics: {
      range: 1500,
      fireRate: 30,
      weight: 7.2,
      penetration: 99,
      recoilControl: 88,
      modularity: 98
    },
    image: "/weapons/bora-12.jpg",
    description: "Türkiye'nin ilk değişken kalibreli cerrahi keskin nişancı tüfeğidir. Namlu ve kilit mekanizması operatör tarafından arazide hızla değiştirilerek hem 7.62x51mm NATO hem de .300 Winchester Magnum mühimmatı atabilmektedir. 8. BORAN Uluslararası Keskin Nişancı Yarışması'nda Polis Özel Harekat (PÖH) timleri bu tüfekle dünya 1.si olarak şampiyonluk kupasını kazanmıştır.",
    highlight: "8. BORAN Uluslararası Keskin Nişancı Yarışması Şampiyonu Tüfek (PÖH)."
  },
  {
    id: "knt-76",
    name: "MKE KNT-76 (Manga Keskin Nişancı)",
    category: "Keskin Nişancı Tüfekleri",
    subCategory: "Yarı Otomatik Keskin Nişancı",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "MKE A.Ş. & Kalekalıp",
    caliber: "7.62x51mm NATO",
    usedBy: "TSK, Jandarma Genel Komutanlığı (JÖAK / JAK)",
    specs: {
      range: "800 m etkili menzil",
      fireRate: "Yarı Otomatik",
      weight: "4.7 kg",
      barrel: "508 mm (20 inç Ağır Namlu)"
    },
    metrics: {
      range: 800,
      fireRate: 450,
      weight: 4.7,
      penetration: 94,
      recoilControl: 75,
      modularity: 88
    },
    image: "/weapons/knt-76.jpg",
    description: "Milli Piyade Tüfeği projesinden türetilen, piyade mangalarının 800 metreye kadar olan hedefleri cerrahi hassasiyetle imha etmesi için geliştirilen manga tipi keskin nişancı tüfeğidir. Ayarlanabilir yanaklıklı dipçiği, iki ayaklı çatal ayağı (bipod) ve yerli optikleriyle görev yapar.",
    highlight: "TSK ve Jandarma mangalarının yarı otomatik keskin nişancı tüfeği."
  },
  {
    id: "bora-12",
    name: "MKE BORA-12 (JNG-90)",
    category: "Keskin Nişancı Tüfekleri",
    subCategory: "Cerrahi Keskin Nişancı Tüfeği",
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
    metrics: {
      range: 1200,
      fireRate: 30,
      weight: 6.4,
      penetration: 97,
      recoilControl: 85,
      modularity: 86
    },
    image: "/weapons/bora-12.jpg",
    description: "Milli imkanlarla geliştirilen ilk cerrahi keskin nişancı tüfeğidir. Uluslararası keskin nişancı yarışmalarında birinci gelerek doğruluğunu kanıtlamıştır. Serbest salınımlı namlusu ve ayarlanabilir kundağıyla 1000+ metrede cerrahi isabet sağlar.",
    highlight: "0.3 MOA hassasiyet ile dünya çapında yarışma şampiyonu."
  },
  // --- TABANCALAR ---
  {
    id: "canik-tp9-sfx",
    name: "CANiK TP9 SFx / METE Serisi",
    category: "Tabancalar",
    subCategory: "Taktik Görev Tabancası",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "Samsun Yurt Savunma (SYS) / CANiK",
    caliber: "9x19mm Parabellum",
    usedBy: "Emniyet Genel Müdürlüğü, Özel Kuvvetler, ABD Kolluk Kuvvetleri",
    specs: {
      range: "65 m etkili menzil",
      capacity: "18+1 / 20+1 mermi",
      weight: "830 g",
      barrel: "132 mm (Match-grade)"
    },
    metrics: {
      range: 65,
      fireRate: 400,
      weight: 0.83,
      penetration: 62,
      recoilControl: 93,
      modularity: 96
    },
    image: "/weapons/canik-tp9.jpg",
    description: "Türk savunma sanayiinin dünyaya ihraç ettiği en başarılı hafif silahlardandır. ABD'de 'Yılın Tabancası' (ICA) ödülünü defalarca kazanmıştır. Optik montaj yuvası (Optic-Ready), hafifletilmiş polimer gövdesi ve düz tetik mekanizmasıyla hızlı ve hassas mükerrer atış sağlar.",
    highlight: "ABD pazarında en çok satan ve ödüllü Türk tabancası."
  },
  {
    id: "sar-9",
    name: "Sarsılmaz SAR9 Gen2",
    category: "Tabancalar",
    subCategory: "Resmi Görev Tabancası",
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
    metrics: {
      range: 50,
      fireRate: 400,
      weight: 0.79,
      penetration: 60,
      recoilControl: 91,
      modularity: 90
    },
    image: "/weapons/sar-9.png",
    description: "Türkiye'nin 'Özgün Yerli Tabanca Projesi' kapsamında birinci seçilerek Türk Silahlı Kuvvetleri ve Emniyet'in standart görev tabancası olmuştur. 50.000 atım ömrü testini sıfır arızayla geçerek polimer gövdeli iğne vuruşlu (striker-fired) tabancalar arasında üstün güvenilirlik kanıtlamıştır.",
    highlight: "TSK ve Emniyet'in ana hizmet tabancası; 50.000 atım dayanıklılığı."
  },
  {
    id: "glock-19-gen5",
    name: "Glock 19 Gen5 MOS",
    category: "Tabancalar",
    subCategory: "Kolluk & Görev Tabancası",
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
    metrics: {
      range: 50,
      fireRate: 400,
      weight: 0.67,
      penetration: 60,
      recoilControl: 92,
      modularity: 91
    },
    image: "/weapons/glock-19.jpg",
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
    metrics: {
      range: 50,
      fireRate: 400,
      weight: 0.83,
      penetration: 62,
      recoilControl: 91,
      modularity: 95
    },
    image: "/weapons/sig-m17.jpg",
    description: "ABD Savunma Bakanlığı'nın 'Modüler Tabanca Sistemi (MHS)' ihalesini kazanarak 30 yıllık Beretta M9 dönemini sonlandırmıştır. Çelik iç şasisi polimer gövdeden bağımsız olarak sökülebilir ve farklı kabze boyutlarına saniyeler içinde aktarılabilir.",
    highlight: "ABD Silahlı Kuvvetleri'nin yeni resmi hizmet tabancası."
  },
  // --- AĞIR SİLAHLAR ---
  {
    id: "canik-m2-qcb",
    name: "CANiK M2 QCB 12.7mm Ağır Makineli",
    category: "Ağır Silahlar",
    subCategory: "Ağır Makineli Tüfek / Uçaksavar",
    origin: "Türkiye",
    originFlag: "🇹🇷",
    manufacturer: "CANiK / SYS",
    caliber: "12.7x99mm (.50 BMG)",
    usedBy: "Zırhlı Araçlar, Sahil Güvenlik Botları, TSK",
    specs: {
      range: "1830 m etkili / 6800 m azami",
      fireRate: "550 atım/dk",
      weight: "38 kg",
      barrel: "1143 mm (QCB Hızlı Değişim)"
    },
    metrics: {
      range: 1830,
      fireRate: 550,
      weight: 38,
      penetration: 100,
      recoilControl: 60,
      modularity: 82
    },
    image: "/weapons/canik-m2.jpg",
    description: "Türkiye'nin ilk yerli 12.7mm ağır makineli tüfeğidir. Namlusu hızla değiştirilebilir (Quick Change Barrel) yapısı sayesinde çatışma anında alet gerektirmeden saniyeler içinde namlu değişimi yapılır. Zırhlı araç kulelerinde ve deniz platformlarında uçaksavar ve zırh delici mermilerle görev yapar.",
    highlight: "Milli 12.7mm platformu, zırhlı ve deniz araçlarının ana ateş gücü."
  }
];
