/**
 * BENCHMARK 20 — Riset 20 marketplace/platform haji & umrah teratas dunia.
 * Sumber riset (Okt 2026): situs resmi masing-masing platform, rilis Kementerian
 * Haji & Umrah Saudi (Direct Umrah, Sep 2026), dan liputan industri.
 *
 * Setiap entri memuat: keunggulan utama platform (killer), fitur yang digabungkan
 * ke SolusiHajj (adopted), dan pembeda eksklusif SolusiHajj di atas platform itu
 * (exclusive). Inilah jawaban "gabungkan semuanya ada di sini".
 */

export type BenchmarkCategory = "Marketplace" | "OTA" | "Platform Resmi" | "Travel Tech";

export interface BenchmarkSite {
  rank: number;
  name: string;
  domain: string;
  url: string;
  country: string;
  flag: string;
  category: BenchmarkCategory;
  scale: string;
  killer: string[];
  adopted: string[];
  exclusive: string;
}

export const BENCHMARK_DATE = "Oktober 2026";

export const benchmarkList: BenchmarkSite[] = [
  {
    rank: 1,
    name: "umroh.com",
    domain: "umroh.com",
    url: "https://www.umroh.com",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Marketplace",
    scale: "1.200+ paket • 100+ travel resmi Kemenag • 250.000+ jamaah berangkat",
    killer: [
      "Agregator paket multi-travel dalam satu katalog",
      "Tiket charter grosir grup (min. 10 kursi, 100% refund bila tiket tidak tersedia)",
      "Land arrangement + jadwal penerbangan grosir harian",
    ],
    adopted: [
      "Model marketplace murni: platform wadah, travel yang jual (fondasi SolusiHajj)",
      "Tabel jadwal charter grup per kota keberangkatan",
      "Jaminan transparansi harga & refund",
    ],
    exclusive:
      "Dana jamaah dijaga AmanahEscrow 40/40/20 — di umroh.com pembayaran langsung ke travel tanpa perlindungan escrow.",
  },
  {
    rank: 2,
    name: "Nusuk Hajj",
    domain: "hajj.nusuk.sa",
    url: "https://hajj.nusuk.sa",
    country: "Arab Saudi",
    flag: "🇸🇦",
    category: "Platform Resmi",
    scale: "Platform resmi Kementerian Haji & Umrah untuk jamaah haji seluruh dunia",
    killer: [
      "Paket haji all-inclusive, shifting & non-shifting standar MOHU",
      "Alur 10 langkah: akun → dokumen → verifikasi → e-wallet → booking",
      "Hanya penyelenggara terakreditasi MOHU yang boleh tayang",
    ],
    adopted: [
      "Klasifikasi paket standar MOHU (all-inclusive / tanpa visa / kustom)",
      "Alur booking bertahap yang jelas untuk jamaah pemula",
      "Prinsip: hanya penyelenggara terverifikasi yang tayang",
    ],
    exclusive:
      "Terbuka lintas platform: SolusiHajj mengagregasi banyak penyelenggara lintas negara, bukan satu kanal resmi satu negara.",
  },
  {
    rank: 3,
    name: "Nusuk Umrah",
    domain: "umrah.nusuk.sa",
    url: "https://umrah.nusuk.sa",
    country: "Arab Saudi",
    flag: "🇸🇦",
    category: "Platform Resmi",
    scale: "Gerbang umrah resmi MOHU — melayani jamaah dari 100+ negara",
    killer: [
      "Paket comprehensive (visa termasuk) & paket tanpa visa untuk warga GCC",
      "Fitur 'Gift Umrah' — menghadiahkan perjalanan umrah untuk keluarga",
      "Custom package builder: hotel, transport, malam bisa diatur sendiri",
    ],
    adopted: [
      "Fitur kado umrah (roadmap: hadiah paket untuk orang tua)",
      "Konsep paket kustom per komponen",
      "Booking Rawdah & kunjungan situs heritage dalam satu aplikasi",
    ],
    exclusive:
      "Escrow dana jamaah + review Saksi Jamaah — di Nusuk pembayaran tidak ditahan pihak ketiga netral.",
  },
  {
    rank: 4,
    name: "Direct Umrah (MOHU)",
    domain: "direct.umrah.sa",
    url: "https://www.umrah.nusuk.sa",
    country: "Arab Saudi",
    flag: "🇸🇦",
    category: "Platform Resmi",
    scale: "Layanan booking umrah terpusat MOHU (diluncurkan Sep 2026) lewat 5 platform mitra global",
    killer: [
      "Satu gerbang resmi: jamaah dalam & luar negeri booking dari kanal yang sama",
      "Distribusi lintas mitra: ShareTrip, Wakanow, Bookme, Wego, Almatar",
      "Pengawasan harga & mutu layanan langsung oleh kementerian",
    ],
    adopted: [
      "Prinsip 'satu gerbang, banyak platform mitra' — arsitektur distribusi SolusiHajj",
      "Standarisasi info paket lintas penyedia (visa, hotel, transport, pendampingan)",
    ],
    exclusive:
      "Agregasi dua arah: SolusiHajj menggabungkan kanal resmi (Nusuk/Direct Umrah) DAN travel swasta terverifikasi dalam satu katalog.",
  },
  {
    rank: 5,
    name: "Wego",
    domain: "wego.com/umrah",
    url: "https://www.wego.com/umrah",
    country: "MENA / Global",
    flag: "🌍",
    category: "OTA",
    scale: "Meta-search travel terbesar MENA — mitra resmi Kementerian Haji & Umrah",
    killer: [
      "Membandingkan 1.000+ situs booking dalam satu pencarian",
      "Kanal umrah resmi: eVisa, penerbangan, hotel dekat Haram",
      "Multi-bahasa & multi-mata uang untuk pasar MENA-Asia",
    ],
    adopted: [
      "Pengalaman meta-search: bandingkan paket lintas penyelenggara (halaman Bandingkan)",
      "Multi-bahasa ID/EN/AR di seluruh platform",
    ],
    exclusive:
      "Fokus 100% ibadah: kurasi khusus haji-umrah, bukan OTA umum yang mencampur liburan biasa.",
  },
  {
    rank: 6,
    name: "Almatar",
    domain: "almatar.com",
    url: "https://almatar.com",
    country: "Arab Saudi",
    flag: "🇸🇦",
    category: "OTA",
    scale: "OTA cepat tumbuh di KSA — platform mitra resmi Direct Umrah",
    killer: [
      "Booking penerbangan + hotel + paket umrah dalam satu aplikasi",
      "Pembayaran lokal Saudi lengkap (mada, Apple Pay, STC Pay)",
      "Ekspansi mitra lintas benua (kemitraan Wakanow untuk Afrika)",
    ],
    adopted: [
      "Ragam metode pembayaran lokal (roadmap: VA syariah, QRIS, e-wallet)",
      "Model kemitraan lintas platform untuk memperluas jangkauan",
    ],
    exclusive:
      "Perlindungan dana escrow + status verifikasi izin tiap penyelenggara tampil publik.",
  },
  {
    rank: 7,
    name: "Musafir",
    domain: "musafir.com",
    url: "https://www.musafir.com",
    country: "Uni Emirat Arab",
    flag: "🇦🇪",
    category: "OTA",
    scale: "OTA online pertama UAE — paket umrah mulai AED 5.499",
    killer: [
      "Paket umrah visa + hotel + bus all-in untuk pasar GCC",
      "Layanan visa terintegrasi (salah satu yang terlengkap di UAE)",
      "Booking multi-kota Makkah–Madinah dengan transport darat",
    ],
    adopted: [
      "Paket visa-all-in untuk jamaah dari luar Indonesia",
      "Itinerary dua kota suci dengan transport darat terjadwal",
    ],
    exclusive:
      "Katalog lintas negara Asia (ID, MY, SG, BN, TH, PK, SA) dalam satu database 3.966 organisasi.",
  },
  {
    rank: 8,
    name: "HalalBooking",
    domain: "halalbooking.com",
    url: "https://www.halalbooking.com/en/umrah",
    country: "Inggris / Global",
    flag: "🇬🇧",
    category: "OTA",
    scale: "OTA muslim global — ratusan ribu properti ramah muslim",
    killer: [
      "DIY Umrah Planner: rakit umrah sendiri, hotel per jarak ke Haram",
      "Filter fasilitas muslim (alkohol-free, makanan halal, fasilitas sholat)",
      "Panduan langkah demi langkah visa & manasik",
    ],
    adopted: [
      "Filter jarak hotel ke Haram (ada di halaman Bandingkan & detail paket)",
      "Konsep perencana mandiri (DIY) yang tetap dibantu verifikasi",
    ],
    exclusive:
      "Bukan hanya hotel: SolusiHajj memverifikasi izin resmi PPIU/PIHK + catatan sanksi publik penyelenggara.",
  },
  {
    rank: 9,
    name: "Tripfez",
    domain: "tripfez.com",
    url: "https://www.tripfez.com",
    country: "Malaysia",
    flag: "🇲🇾",
    category: "OTA",
    scale: "Pionir OTA muslim Asia Tenggara — integrasi booking umrah via app Raudhah",
    killer: [
      "Paket umrah booking terintegrasi di aplikasi islami",
      "Kurasi hotel halal Makkah & Madinah",
      "Konten edukasi perjalanan ibadah berbahasa Melayu",
    ],
    adopted: [
      "Mobile-first: UI SolusiHajj dirancang mobile sejak awal",
      "Edukasi berbahasa lokal sebagai pintu masuk SEO",
    ],
    exclusive:
      "Data riil terauditable (Kemenag, SISKOPATUH, HIMPUH 474 anggota) — bukan sekadar katalog marketing.",
  },
  {
    rank: 10,
    name: "HalalTrip",
    domain: "halaltrip.com",
    url: "https://www.halaltrip.com",
    country: "Singapura",
    flag: "🇸🇬",
    category: "Travel Tech",
    scale: "Platform travel muslim global — konten + produk lintas 100+ kota",
    killer: [
      "Konten panduan ibadah & wisata halal yang sangat kuat (SEO)",
      "Jadwal sholat, arah kiblat, masjid terdekat dalam aplikasi",
      "Produk umrah + wisata muslim dalam satu ekosistem",
    ],
    adopted: [
      "Travel Kit: jadwal sholat, kiblat, konverter mata uang (sudah live)",
      "Strategi konten edukasi & glosarium istilah ibadah",
    ],
    exclusive:
      "Transaksi terlindungi escrow syariah dan review hanya dari jamaah yang benar-benar berangkat.",
  },
  {
    rank: 11,
    name: "Traveloka (Xperience Umrah)",
    domain: "traveloka.com",
    url: "https://www.traveloka.com/id-id",
    country: "Indonesia / SEA",
    flag: "🇮🇩",
    category: "OTA",
    scale: "Super-app raksasa SEA — menjual paket umrah mitra (contoh: Mahabbah by Lion Air)",
    killer: [
      "Distribusi paket umrah ke ratusan juta pengguna super-app",
      "Pembayaran paling lengkap di Asia Tenggara (50+ metode)",
      "Trust badge, review, dan promo bundling khas OTA besar",
    ],
    adopted: [
      "Standar UX super-app: pencarian, filter, kartu paket, trust badge",
      "Roadmap pembayaran lengkap + bundling tiket pesawat",
    ],
    exclusive:
      "Kurasi murni ibadah dengan perlindungan regulasi (UU 8/2019, PMHU 1/2025) — Traveloka memperlakukan umrah sebagai 'aktivitas' biasa.",
  },
  {
    rank: 12,
    name: "pengenumroh.com",
    domain: "pengenumroh.com",
    url: "https://pengenumroh.com",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Marketplace",
    scale: "Marketplace umroh & haji khusus Indonesia (PT Kolaborasi Para Sahabat)",
    killer: [
      "Marketplace paket umroh + haji khusus multi-travel",
      "Blog edukasi masif (belasan artikel SEO aktif per bulan)",
      "Konten anti-tipu: panduan memilih travel resmi",
    ],
    adopted: [
      "Pusat edukasi + glosarium + artikel anti-penipuan",
      "Segmentasi paket umroh & haji khusus/furoh",
    ],
    exclusive:
      "Verifikasi 5 lapis per penyelenggara + database sanksi publik dari Kemenag (pengenumroh tidak menampilkan catatan sanksi).",
  },
  {
    rank: 13,
    name: "Dream Tours & Travel",
    domain: "dreamtour.co",
    url: "https://www.dreamtour.co",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Travel Tech",
    scale: "Travel umroh-haji besar — umrah series, private, corporate, plus holiday",
    killer: [
      "Segmentasi cerdas: Umrah Series, Private, Corporate, Plus Holiday",
      "Haji ONH Plus & Furoh dalam satu gerbang",
      "Muslim Trip — paket wisata halal lintas destinasi",
    ],
    adopted: [
      "Segmentasi paket (reguler / premium / ramadhan / plus turki / land)",
      "Kategori korporat & komunitas (roadmap: booking grup massal)",
    ],
    exclusive:
      "Netralitas marketplace: SolusiHajj tidak menjual paket sendiri sehingga tidak memonopoli traffic.",
  },
  {
    rank: 14,
    name: "Rabbani Tour",
    domain: "rabbanitour.com",
    url: "https://rabbanitour.com",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Travel Tech",
    scale: "Jaringan travel umroh terbesar model kemitraan cabang di Indonesia",
    killer: [
      "Harga ALL IN tanpa biaya tersembunyi",
      "Jaringan cabang/kemitraan nasional yang masif",
      "Konsultasi WhatsApp 24 jam",
    ],
    adopted: [
      "Prinsip harga all-in di setiap kartu paket (rincian biaya transparan)",
      "Konsultasi WhatsApp respons cepat di semua halaman",
    ],
    exclusive:
      "Bandingkan lintas travel dalam satu tabel — Rabbani hanya menawarkan produk sendiri.",
  },
  {
    rank: 15,
    name: "Jejak Imani",
    domain: "jejakimani.com",
    url: "https://www.jejakimani.com",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Travel Tech",
    scale: "Travel haji, umroh & jelajah dunya — fokus pengalaman jamaah",
    killer: [
      "Bundling ibadah + wisata halal (jelajah dunya)",
      "Storytelling pengalaman jamaah di konten marketing",
      "Paket keluarga & lansia yang ramah",
    ],
    adopted: [
      "Kategori umrah plus (Turki) & wisata halal",
      "Storytelling: review Saksi Jamaah sebagai inti kepercayaan",
    ],
    exclusive:
      "Ulasan tervalidasi hanya dari jamaah nyata — bukan testimoni kurasi marketing.",
  },
  {
    rank: 16,
    name: "DawnTravels",
    domain: "dawntravels.com",
    url: "https://dawntravels.com",
    country: "Amerika Serikat",
    flag: "🇺🇸",
    category: "OTA",
    scale: "Penyedia haji & umrah premium dari AS — puluhan tahun pengalaman",
    killer: [
      "Paket haji & umrah customizable per komponen",
      "Segmentasi pasar diaspora (US → Jeddah/Madinah langsung)",
      "Paket premium + ekonomi dalam satu katalog",
    ],
    adopted: [
      "Customizability paket untuk kebutuhan khusus (lansia, keluarga, grup)",
      "Dua kutub harga: ekonomi & premium jelas terpisah",
    ],
    exclusive:
      "Escrow 40/40/20 + jalur sengketa resmi — paket diaspora biasanya bayar penuh di muka tanpa proteksi.",
  },
  {
    rank: 17,
    name: "International Hajj",
    domain: "internationalhajj.com",
    url: "https://internationalhajj.com",
    country: "Amerika Serikat",
    flag: "🇺🇸",
    category: "Travel Tech",
    scale: "Spesialis umrah AS — tier Ekonomi/Silver/Gold + 198 review terverifikasi 4.9★",
    killer: [
      "Tiering paket jelas: Economy, Silver, Gold",
      "Info jarak hotel ke Haram per meter di setiap paket",
      "Konsultasi cepat via WhatsApp + landing page per kota keberangkatan",
    ],
    adopted: [
      "Badge jarak ke Haram & tier hotel di kartu paket",
      "Landing page SEO per kota (roadmap: /paket?kota= per 8 kota besar)",
    ],
    exclusive:
      "Verifikasi izin penyelenggara lintas negara + escrow — International Hajj adalah travel tunggal, bukan pembanding.",
  },
  {
    rank: 18,
    name: "ShareTrip",
    domain: "sharetrip.net",
    url: "https://www.sharetrip.net",
    country: "Bangladesh",
    flag: "🇧🇩",
    category: "OTA",
    scale: "OTA terbesar Bangladesh — platform mitra resmi Direct Umrah (Umrah Fare)",
    killer: [
      "Kelas tarif khusus 'Umrah Fare' untuk jamaah",
      "Super-app: tiket, hotel, visa, eSIM, pembayaran lokal (bKash/Nagad)",
      "Dipercaya MOHU sebagai kanal resmi Direct Umrah",
    ],
    adopted: [
      "Kelas tarif khusus jamaah (roadmap: fare charter grup khusus umrah)",
      "Integrasi pembayaran dompet lokal",
    ],
    exclusive:
      "Katalog penyelenggara terverifikasi lintas 7 negara + tool Cek Izin publik.",
  },
  {
    rank: 19,
    name: "Wakanow",
    domain: "wakanow.com",
    url: "https://www.wakanow.com",
    country: "Nigeria / Afrika",
    flag: "🇳🇬",
    category: "Travel Tech",
    scale: "Travel-tech terbesar Afrika Barat — mitra resmi Direct Umrah",
    killer: [
      "Pay Small Small — cicilan tanpa bunga untuk paket ibadah",
      "Visa assistance + airport pickup terintegrasi",
      "Distribusi Afrika melalui kemitraan Almatar (15+ negara)",
    ],
    adopted: [
      "Model simpanan/cicilan menuju keberangkatan (Kalkulator Simpanan Haji live)",
      "Roadmap cicilan syariah tanpa riba",
    ],
    exclusive:
      "Simpanan ibadah dihitung otomatis dari target paket nyata + escrow, bukan sekadar cicilan travel.",
  },
  {
    rank: 20,
    name: "BookMyUmrahTrip",
    domain: "bookmyumrahtrip.com",
    url: "https://www.bookmyumrahtrip.com",
    country: "Global",
    flag: "🌐",
    category: "Marketplace",
    scale: "Platform booking umrah online — transparansi itinerary penuh",
    killer: [
      "Booking umrah online end-to-end dalam hitungan menit",
      "Itinerary detail tampil sebelum bayar",
      "Sistem booking terintegrasi dengan penyedia terverifikasi",
    ],
    adopted: [
      "Detail itinerary lengkap di halaman paket sebelum kontak travel",
      "Alur booking cepat tanpa friksi",
    ],
    exclusive:
      "Dana tidak langsung ke travel: ditahan escrow pihak ketiga dan cair bertahap 40/40/20 mengikuti progres ibadah.",
  },
];

/** Fitur gabungan — matriks adopsi yang diterjemahkan jadi kemampuan SolusiHajj */
export const fusionFeatures: {
  icon: string;
  title: string;
  desc: string;
  from: string[];
  status: "LIVE" | "LIVE (R2)" | "LIVE (R3)" | "LIVE (R4)" | "ROADMAP";
}[] = [
  {
    icon: "Library",
    title: "Katalog Agregator Multi-Travel",
    desc: "Model umroh.com: satu katalog, banyak penyelenggara, platform netral sebagai wadah.",
    from: ["umroh.com", "pengenumroh.com", "BookMyUmrahTrip"],
    status: "LIVE",
  },
  {
    icon: "ShieldCheck",
    title: "AmanahEscrow Syariah 40/40/20",
    desc: "Tidak ada di ke-20 platform: dana ditahan pihak ketiga netral, cair bertahap mengikuti progres ibadah dengan dual-control & audit trail.",
    from: ["Inovasi SolusiHajj (di atas semua benchmark)"],
    status: "LIVE (R3)",
  },
  {
    icon: "BadgeCheck",
    title: "Verifikasi 5 Lapis + Sanksi Publik",
    desc: "Standar Nusuk (hanya penyelenggara berizin) diperketat: audit kantor, legalitas, track record, pemantauan, plus database sanksi Kemenag.",
    from: ["Nusuk Hajj", "Direct Umrah", "HalalBooking"],
    status: "LIVE (R2)",
  },
  {
    icon: "Database",
    title: "Pusat Data Nasional Ter-audit",
    desc: "3.966 organisasi dari 9 sumber resmi — registri nasional SISKOPATUH penuh (3.634 PPIU + 967 PIHK, 34 provinsi), HIMPUH 474 anggota, Nusuk SA, MORA PK — dengan provenance yang bisa diaudit publik.",
    from: ["Nusuk Umrah", "Direct Umrah", "Tripfez"],
    status: "LIVE (R2)",
  },
  {
    icon: "Sparkles",
    title: "NurMatch AI Transparan",
    desc: "AI pencocok paket ala meta-search Wego, tapi menjelaskan alasan, menampilkan kandidat, dan bisa difollow-up — bukan kotak hitam.",
    from: ["Wego", "DawnTravels", "International Hajj"],
    status: "LIVE (R3)",
  },
  {
    icon: "PlaneTakeoff",
    title: "Tiket Charter Grup & Maskapai Ibadah",
    desc: "Tabel jadwal grosir ala umroh.com + data maskapai ibadah riil (Garuda, Saudia, Lion, Citilink) dari keputusan resmi Kemenag.",
    from: ["umroh.com", "ShareTrip", "Musafir"],
    status: "LIVE (R2)",
  },
  {
    icon: "Wallet",
    title: "Simpanan & Cicilan Ibadah",
    desc: "Inspirasi 'Pay Small Small' Wakanow — kalkulator simpanan otomatis dari target paket nyata, tanpa riba.",
    from: ["Wakanow", "Traveloka"],
    status: "LIVE",
  },
  {
    icon: "Landmark",
    title: "Jarak Hotel ke Haram & Tier Paket",
    desc: "Standar International Hajj & HalalBooking: jarak hotel per meter, tier Ekonomi/Silver/Gold, klasifikasi standar MOHU.",
    from: ["International Hajj", "HalalBooking", "Nusuk Hajj"],
    status: "LIVE",
  },
  {
    icon: "Gift",
    title: "Umrah Kado & Paket Kustom",
    desc: "Fitur 'Gift Umrah' Nusuk Umrah + custom builder: hadiahkan umrah untuk orang tua, rakit komponen sesuai kebutuhan.",
    from: ["Nusuk Umrah", "DawnTravels"],
    status: "ROADMAP",
  },
  {
    icon: "MessageCircle",
    title: "Konsultasi WhatsApp Respons Cepat",
    desc: "Standar Rabbani Tour & International Hajj: tombol WA kontekstual di semua halaman, respons < 15 menit jam kerja.",
    from: ["Rabbani Tour", "International Hajj"],
    status: "LIVE",
  },
  {
    icon: "BookOpen",
    title: "Pusat Edukasi Anti-Tipu",
    desc: "Blog masif ala pengenumroh & HalalTrip: glosarium 32 istilah, artikel anti-penipuan, panduan manasik.",
    from: ["pengenumroh.com", "HalalTrip", "Tripfez"],
    status: "LIVE",
  },
  {
    icon: "Globe2",
    title: "Multi-Bahasa ID/EN/AR + Mode Lansia",
    desc: "Jangkauan Wego (multi-bahasa) + kepedulian Jejak Imani (ramah lansia): font besar, kontras tinggi, navigasi sederhana.",
    from: ["Wego", "Almatar", "Jejak Imani"],
    status: "LIVE",
  },
  {
    icon: "Gift",
    title: "Kado Umrah (Gift Umrah)",
    desc: "Praktik voucher umrah Indonesia (hantaran pernikahan, kado pensiun, undian korporat) diadopsi jadi vertikal: voucher nominal atau paket spesifik, kartu digital berkode pelacakan, dana escrow, masa aktif 24 bulan, refund 100%, gabung dana se-saudara.",
    from: ["Umrah Gift programs", "Traveloka voucher", "praktik PPIU Indonesia"],
    status: "LIVE (R4)",
  },
  {
    icon: "HandCoins",
    title: "Cicilan Syariah 0% (Murabahah)",
    desc: "Mekanisme paylater umrah ALULAA (BTPN Syariah) & sharE (Mega Syariah) plus pembiayaan BSI/Pegadaian/Muamalat: kalkulator DP-tenor transparan, tanpa bunga, tanpa denda majemuk, denda sosial ke infaq, dana tetap di escrow 40/40/20.",
    from: ["ALULAA (BTPN Syariah)", "sharE (Mega Syariah)", "BSI", "DawnTravels (installments)"],
    status: "LIVE (R4)",
  },
];

export const fusionStats = {
  platforms: benchmarkList.length,
  countries: new Set(benchmarkList.map((b) => b.country)).size,
  featuresAdopted: fusionFeatures.length,
  exclusive: fusionFeatures.filter((f) => f.desc.includes("Tidak ada di ke-20")).length + 1,
};

/** Matriks perbandingan kemampuan: rata-rata benchmark vs SolusiHajj */
export const capabilityMatrix: { capability: string; benchmark: string; solusihajj: string }[] = [
  { capability: "Perlindungan dana escrow syariah", benchmark: "0/20 — bayar langsung ke travel/mitra", solusihajj: "AmanahEscrow 40/40/20 + dual-control + audit trail" },
  { capability: "Review dari jamaah nyata", benchmark: "6/20 (sebagian testimoni kurasi)", solusihajj: "Saksi Jamaah — hanya pembayar escrow bisa review" },
  { capability: "Database penyelenggara ter-audit", benchmark: "3/20 (kanal resmi satu negara)", solusihajj: "3.966 organisasi — registri nasional penuh 34 provinsi + Asia, provenance publik" },
  { capability: "Catatan sanksi penyelenggara", benchmark: "0/20 — tidak ada yang menampilkan", solusihajj: "Sanksi Kemenag tampil merah di direktori & Cek Izin" },
  { capability: "AI rekomendasi transparan", benchmark: "1/20 (kotak hitam tanpa alasan)", solusihajj: "NurMatch AI: verdict + alasan + follow-up" },
  { capability: "Cakupan lintas negara", benchmark: "5/20 global (satu kanal per negara)", solusihajj: "ID, MY, SG, BN, TH, SA, PK dalam satu katalog" },
  { capability: "Multi-bahasa", benchmark: "8/20 (umumnya EN + bahasa lokal)", solusihajj: "ID / EN / AR penuh" },
  { capability: "Mode aksesibilitas lansia", benchmark: "0/20", solusihajj: "Mode Lansia: font 120%, kontras tinggi" },
  { capability: "Tool cek izin publik", benchmark: "1/20 (verifikasi internal)", solusihajj: "Cek Izin PPIU publik + hasil langsung dari database" },
  { capability: "Model netral (tidak jual paket sendiri)", benchmark: "9/20 murni marketplace", solusihajj: "100% wadah — komisi 4-6% hanya saat transaksi sukses" },
];
