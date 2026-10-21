import type { Article } from "./types";
import { engineArticles } from "./article-engine";

/** 4 artikel seed asli + 108 artikel Article Content Engine (Prioritas 4) = 112. */
export const articleList: Article[] = [
  {
    slug: "cara-cek-izin-ppiu-umrah",
    title: "Cara Cek Izin PPIU Umrah Secara Online (Panduan Lengkap 2026)",
    excerpt:
      "Langkah demi langkah memastikan travel umrah Anda benar-benar berizin Kemenag — sebelum Anda transfer uang sepeser pun. Termasuk cara membaca nomor izin dan tanda-tanda travel nakal.",
    category: "Keamanan & Verifikasi",
    readMinutes: 7,
    publishedAt: "2026-01-05",
    lastReviewed: "2026-02-10",
    author: "Tim Edukasi SolusiHajj",
    related: ["biaya-umrah-2026-rincian-lengkap", "tanda-travel-umrah-nakal"],
    blocks: [
      { type: "p", text: "Jawaban singkatnya: izin PPIU bisa Anda cek sendiri secara gratis melalui kanal resmi Kementerian Agama, atau lebih cepatnya lewat tool Cek Izin PPIU di SolusiHajj yang menampilkan status, nomor izin, dan tanggal verifikasi. Yang terpenting: lakukan pengecekan ini SEBELUM transfer uang, bukan setelahnya. Kasus penipuan umrah di Indonesia hampir selalu dimulai dengan hal yang sama — jamaah tergerak harga, langsung transfer ke rekening pribadi, tanpa pernah mengecek apakah travel itu punya izin." },
      { type: "p", text: "Artikel ini memandu Anda langkah demi langkah, dari cara membaca dokumen izin hingga tanda-tanda peringatan dini. Sebagai rujukan aturan, seluruh penyelenggaraan perjalanan ibadah umrah di Indonesia diatur dalam Peraturan Menteri Agama No. 21 Tahun 2020 tentang Penyelenggaraan Perjalanan Ibadah Umrah dan Ziarah, yang antara lain mewajibkan setiap PPIU memiliki izin tertulis dan menyelenggarakan perjalanan melalui sistem perjalanan yang terdaftar." },
      { type: "h2", text: "Apa Itu PPIU dan Mengapa Izinnya Wajib?" },
      { type: "p", text: "PPIU (Penyelia Perjalanan Ibadah Umrah) adalah badan hukum yang memiliki izin resmi dari Kementerian Agama untuk menyelenggarakan perjalanan ibadah umrah. Izin ini bukan formalitas: PPIU terikat kewajiban menempatkan dana jamaah pada perbankan syariah, mengganti kerugian jamaah atas kelalaian penyelenggaraan, serta memiliki standar mutawif dan handling yang diawasi Kemenag. Travel tanpa izin PPIU berarti beroperasi di luar semua perlindungan itu — sekecil apa pun operasionalnya, Anda tidak punya penanggung jawab hukum yang jelas bila terjadi masalah." },
      { type: "h2", text: "Cara Cek Izin PPIU Langsung di Kanal Resmi Kemenag" },
      { type: "ol", items: [
        "Buka situs SIMPU Kemenag (simpu.kemenag.go.id) atau kanal layanan informasi PPIU di kemenag.go.id melalui browser Anda.",
        "Masukkan nama travel persis seperti yang tercantum di dokumen/brosur — bukan nama panggilan. Misalnya 'PT Amanah Barokah Wisata', bukan 'Amanah Travel'.",
        "Periksa tiga hal: status izin (aktif/tidak), masa berlaku, dan wilayah kerja izinnya (PPIU punya wilayah kerja tertentu, misalnya Kanwil Kemenag DKI Jakarta).",
        "Cocokkan nomor izin pada dokumen dengan hasil pencarian. Travel yang baik akan dengan senang hati mencantumkan nomor izin di brosur dan websitenya.",
        "Jika ragu, telepon Kanwil Kemenag di provinsi Anda dan sebutkan nama travel — layanan ini gratis dan biasanya dijawab petugas umrah.",
      ] },
      { type: "p", text: "Jika langkah di atas terasa rumit atau Anda butuh lebih cepat, gunakan tool publik kami:" },
      { type: "callout", title: "Cek Izin PPIU — Gratis, 10 Detik", text: "Ketik nama travel atau nomor izinnya, dan lihat statusnya langsung. Setiap hasil menampilkan dasar pengecekan dan tautan kanal resmi Kemenag untuk verifikasi hukum penuh.", ctaLabel: "Buka Tool Cek Izin PPIU", ctaTo: "/verifikasi/cek-izin-ppiu" },
      { type: "h2", text: "Cara Membaca Dokumen Izin PPIU" },
      { type: "p", text: "Dokumen izin PPIU (SK izin) memuat beberapa unsur yang perlu Anda baca teliti. Nomor izin biasanya berformat 'PPIU-XXXXXXXX' atau SK dengan nomor klasifikasi kantor. Pastikan: (1) nama badan hukum di SK sama dengan nama yang tercantum pada rekening tempat Anda diminta transfer — travel yang meminta transfer ke rekening pribadi adalah red flag terberat; (2) masa berlaku masih berjalan; (3) ada tanda tangan pejabat berwenang (Direktur Jenderal Bimbingan Masyarakat Haji dan Umrah atau pejabat yang didelegasikan). Jika travel hanya menunjukkan 'Surat Keterangan Domisili' atau 'NIB' sebagai pengganti izin PPIU, itu BUKAN izin penyelenggaraan umrah." },
      { type: "h2", text: "5 Tanda Travel Umrah Patut Anda Curigai" },
      { type: "ul", items: [
        "Meminta DP besar (>30%) atau pelunasan penuh sebelum kontrak ditandatangani, terutama ke rekening pribadi.",
        "Harga jauh di bawah pasar (misalnya umrah 9 hari Rp 18 juta saat harga wajar Rp 28–38 juta) tanpa penjelasan struktur biayanya.",
        "Menawarkan 'jalur cepat' atau 'tanpa antre visa' — semua umrah sah harus melalui proses visa yang sama.",
        "Tidak mau memperlihatkan SK izin asli, atau hanya menampilkan screenshot yang tidak bisa dicocokkan dengan basis data.",
        "Alamat kantor hanya ada di media sosial; saat dikunjungi, lokasinya kios kosong atau tidak sesuai.",
      ] },
      { type: "callout", title: "Lihat Juga: Sistem Perlindungan Dana", text: "Selain izin, cara teraman melindungi dana adalah escrow: dana Anda ditahan pihak ketiga dan baru dirilis ke PPIU sesuai progres perjalanan. Baca cara kerjanya di halaman AmanahEscrow.", ctaLabel: "Pelajari AmanahEscrow", ctaTo: "/escrow" },
      { type: "h2", text: "Penutup: Cek Dulu, Bayar Kemudian" },
      { type: "p", text: "Menempuh ibadah adalah keputusan besar — dan sumber dananya pun sering disimpan bertahun-tahun. Lima menit mengecek izin dapat menyelamatkan puluhan juta rupiah dan, yang lebih penting, menjaga hati Anda tetap tenang menjelang berangkat. Mulai dari tool gratis kami, atau dari kanal resmi Kemenag; yang terpenting adalah kebiasaannya: cek dulu, bayar kemudian." },
    ],
  },
  {
    slug: "biaya-umrah-2026-rincian-lengkap",
    title: "Biaya Umrah 2026: Rincian Lengkap dari Jakarta, Bandung & Surabaya",
    excerpt:
      "Berapa biaya umrah yang wajar di 2026? Ini rinciannya per komponen — visa, tiket, hotel, makan, bus, mutawif — plus batas harga wajar dan contoh hitungan untuk keluarga 2 orang.",
    category: "Biaya & Keuangan",
    readMinutes: 8,
    publishedAt: "2026-01-12",
    lastReviewed: "2026-02-14",
    author: "Tim Edukasi SolusiHajj",
    related: ["cara-cek-izin-ppiu-umrah", "panduan-umrah-pemula-30-hari"],
    blocks: [
      { type: "p", text: "Jawaban singkat: per awal 2026, biaya umrah reguler 9 hari yang wajar berada di kisaran Rp 28–38 juta per orang untuk kamar quad (4 orang per kamar), dengan titik awal dari kota besar seperti Jakarta, Bandung, atau Surabaya. Umrah Ramadhan naik ke Rp 45–65 juta, dan umrah plus (Turki/Dubai) Rp 39–50 juta. Angka di bawah rentang itu tidak otomatis penipuan, tetapi wajib Anda bedah rinciannya — dan artikel ini mengajarkan caranya." },
      { type: "h2", text: "Rincian Komponen Biaya Umrah Reguler" },
      { type: "table", head: ["Komponen", "Kisaran Biaya (per jamaah)", "Catatan"], rows: [
        ["Visa umrah + administrasi", "Rp 1,5 – 2,5 juta", "Termasuk biaya petugas & dokumen; berubah mengikuti kebijakan Arab Saudi"],
        ["Tiket pesawat PP ekonomi", "Rp 8 – 12 juta", "Langsung (JKT/BDO/SUB–JED) di kisaran atas; transit lebih murah"],
        ["Hotel Makkah (4–5 malam)", "Rp 6 – 11 juta", "Sangat sensitif jarak: 100 m vs 800 m bisa beda 2× lipat"],
        ["Hotel Madinah (3–4 malam)", "Rp 3 – 6 juta", "Madinah umumnya lebih murah dari Makkah"],
        ["Makan 3× sehari", "Rp 2 – 3,5 juta", "Buffet Indonesia vs voucher kupon"],
        ["Bus, mutawif, handling, ziarah", "Rp 3 – 4,5 juta", "Termasuk handling bandara & ziarah internal"],
        ["Perlengkapan & asuransi", "Rp 0,5 – 1 juta", "Koper, tas ihram, buku doa, asuransi dasar"],
        ["Margin penyelenggara PPIU", "Rp 2 – 5 juta", "Wajar antara 8–15% dari total biaya operasional"],
      ] },
      { type: "p", text: "Total operasional menempatkan harga wajar umrah reguler 9 hari pada Rp 27–36 juta, dan dengan margin penyelenggara yang sehat menjadi Rp 28–38 juta. Perhatikan dua komponen yang paling sering dipangkas oleh travel nakal: jarak hotel (diganti hotel 1–2 km saat di Makkah) dan kualitas bus (diganti bus non-eksklusif yang digabung grup lain). Itulah sebabnya di SolusiHajj, jarak hotel ke Haram wajib dicantumkan dalam meter — bukan klaim 'dekat'." },
      { type: "callout", title: "Coba Sendiri dengan Data Nyata", text: "Bandingkan paket dari 10 PPIU Founding Partner kami — semua mencantumkan nama hotel, jarak meter ke Haram, dan rincian harga all-in tanpa asterisk tersembunyi.", ctaLabel: "Buka Katalog Paket", ctaTo: "/paket" },
      { type: "h2", text: "Faktor yang Membuat Harga Naik atau Turun" },
      { type: "ul", items: [
        "Musim: Ramadhan akhir (malam ganjil) adalah puncak termahal — bisa 1,8× harga reguler. Desember (libur sekolah) naik 10–20%. Februari–April adalah off-peak termurah.",
        "Jarak & bintang hotel: selisih hotel 100 m dan 800 m ke Haram bisa mencapai Rp 4–6 juta per jamaah.",
        "Tipe kamar: quad (termurah), triple (+Rp 1–2 juta), double (+Rp 2,5–4 juta).",
        "Kota keberangkatan: rute langsung dari Medan/Makassar kadang lebih mahal karena kuota penerbangan lebih terbatas.",
        "Tipe grup: grup kecil (maks 40) biasanya +Rp 1–2 juta, namun kualitas pendampingan berbeda jauh.",
      ] },
      { type: "h2", text: "Contoh Hitungan Keluarga 2 Orang (Reguler 9 Hari)" },
      { type: "table", head: ["Pos", "Jumlah"], rows: [
        ["Paket quad 2 jamaah × Rp 32,5 juta", "Rp 65.000.000"],
        ["Upgrade kamar double (opsional)", "Rp 5.000.000"],
        ["Belanja & pengeluaran pribadi (estimasi)", "Rp 5.000.000"],
        ["Kontingensi kesehatan & darurat", "Rp 2.000.000"],
        ["Total siapkan per keluarga", "± Rp 77 juta (Rp 72 juta tanpa upgrade)"],
      ] },
      { type: "h2", text: "Tanda Harga 'Terlalu Bagus untuk Benar'" },
      { type: "p", text: "Umrah 9 hari Rp 20 juta dari Jakarta saat harga pasar Rp 30 juta hampir pasti menyimpan kompromi yang tidak diceritakan: hotel diganti saat tiba, jadwal di Makkah dipotong, makanan dikurangi, atau — yang terburuk — operasional dibiayai uang jamaah baru (skema ponzi travel). Jika suatu penawaran membuat Anda bertanya 'kok bisa semurah ini?', minta rincian per komponen dalam tulisan. PPIU yang amanah tidak keberatan; justru mereka yang paling siap menjelaskan." },
      { type: "callout", title: "Rencanakan Dananya Bertahap", text: "Gunakan Kalkulator Simpanan Haji kami untuk memproyeksikan tabungan ke tahun target keberangkatan — gratis, tanpa daftar akun.", ctaLabel: "Buka Kalkulator Simpanan Haji", ctaTo: "/kalkulator-haji" },
    ],
  },
  {
    slug: "panduan-umrah-pemula-30-hari",
    title: "Panduan Umrah untuk Pemula: Persiapan 30 Hari Sebelum Berangkat",
    excerpt:
      "Checklist lengkap 30 hari menjelang umrah pertama: dokumen, kesehatan, manasik, perlengkapan, dan persiapan hati — dirangkum dari pengalaman ribuan jamaah.",
    category: "Panduan Umrah",
    readMinutes: 9,
    publishedAt: "2026-01-20",
    lastReviewed: "2026-02-14",
    author: "Tim Edukasi SolusiHajj",
    related: ["doa-ziarah-makkah-madinah", "biaya-umrah-2026-rincian-lengkap"],
    blocks: [
      { type: "p", text: "Umrah pertama menghadirkan dua perasaan sekaligus: rindu ke Baitullah dan cemas akan hal yang tidak diketahui. Kabar baiknya: sebagian besar kecemasan itu bisa dihilangkan dengan persiapan terstruktur 30 hari. Panduan ini merangkum checklist yang dipakai PPIU Founding Partner kami di manasik pra-keberangkatan — dipadukan tips praktis dari review jamaah nyata." },
      { type: "h2", text: "H-30 s.d. H-21: Dokumen dan Administrasi" },
      { type: "ul", items: [
        "Paspor aktif minimal 7 bulan dari tanggal keberangkatan (bukan 6 — beri margin). Jika belum, proses paspor online di imigrasi memakan 5–14 hari kerja.",
        "Serahkan scan paspor & pas foto latar putih ke PPIU untuk pengajuan visa umrah (Nusuk). Pastikan nama persis sesuai akta lahir.",
        "Vaksin meningitis (Menactra/Mencevax) dari Puskesmas/klinik; simpan kartu Internasional Vaksinasi — akan diperiksa saat imigrasi.",
        "Untuk jamaah wanita di bawah 45 tahun: pastikan ketentuan mahram sesuai aturan terkini dan sudah difasilitasi PPIU.",
      ] },
      { type: "h2", text: "H-20 s.d. H-11: Manasik dan Ilmu" },
      { type: "p", text: "Manasik bukan formalitas — jamaah yang memahami makna setiap rangkaian (niat, tawaf, sa'i, tahallul) melaporkan pengalaman ibadah yang jauh lebih tenang. Ikuti minimal 2 sesi manasik PPIU Anda. Tiga hal yang wajib lancar sebelum berangkat: bacaan niat umrah, talbiyah, dan doa antara Rukun Yamani–Hajar Aswad. Hafalkan juga doa tawaf umum agar tidak kehabisan amunisi di sekitar Ka'bah — lihat koleksi doa kami untuk membawa versi cetaknya." },
      { type: "callout", title: "Kumpulan Doa & Ziarah", text: "Kami merangkum doa-doa inti umrah (teks Arab, latin, arti) dan panduan ziarah Makkah–Madinah dalam satu halaman yang bisa Anda cetak.", ctaLabel: "Buka Kumpulan Doa & Ziarah", ctaTo: "/edukasi/doa-ziarah-makkah-madinah" },
      { type: "h2", text: "H-10 s.d. H-4: Kesehatan dan Kebugaran" },
      { type: "p", text: "Umrah menuntut fisik: jalan 5–10 km per hari adalah hal normal. Mulai latihan jalan 30 menit setiap hari sejak H-14, dan jika Anda di atas 60 tahun atau punya hipertensi/diabetes, lakukan medical check-up dan bawa resep obat dalam jumlah cukup (dalam kemasan asli + surat dokter bila jarum suntik diperlukan). Gunakan sepatu/sandal yang sudah 'matang' — jangan sepatu baru. Jamaah senior sebaiknya mempertimbangkan paket dengan ritme longgar dan pendampingan khusus seperti program 'Bersama Orang Tua'." },
      { type: "h2", text: "H-3 s.d. H-1: Perlengkapan dan Rumah" },
      { type: "ul", items: [
        "Ihram 2 lembar + sabuk; mukena ringan yang cepat kering; peci hitam 'kualitas hotel' yang tidak pantul kamera.",
        "Sandali jalan tahan air (masjid Arab lantainya licin saat basah), ikat gantung sandali — sandali hilang di Haram adalah hal klasik.",
        "Power bank ≤ 20.000 mAh (aturan kabin), adapter plug tipe G (Arab Saudi), SIM card/internet paket Saudi (bisa dibeli PPIU saat handling).",
        "Obat pribadi + plester + minyak telon; sampo sachet (bebas parfum) untuk masa ihram.",
        "Koper 28–30 inci dengan pengeras bagasi; label nama & nomor WA PPIU.",
        "Urus rumah: titip kunci, titip hewan, titip tanaman, dan beri tahu keluarga jadwal + kontak PPIU Anda.",
      ] },
      { type: "h2", text: "Hari-H: Yang Sering Terlupa" },
      { type: "p", text: "Tiga hal yang hampir selalu luput: (1) foto dokumentasi koper & tas sebelum berangkat — memudahkan klaim bila hilang; (2) isi uang tunai SAR/USD secukupnya (Rp 2–5 juta setara) untuk kebutuhan kecil, sisanya kartu debit; (3) niatkan dan tuliskan daftar permohonan doa Anda — saat berdiri di depan Ka'bah, ingatan sering kosong karena haru. Daftar itu jadi harta yang Anda bawa pulang." },
      { type: "callout", title: "Pilih Paket yang Sesuai Kondisi Anda", text: "Setiap paket di katalog kami mencantumkan ritme perjalanan, jarak hotel, dan program pendampingan — bandingkan sebelum memutuskan.", ctaLabel: "Lihat Katalog Paket", ctaTo: "/paket" },
    ],
  },
  {
    slug: "doa-ziarah-makkah-madinah",
    title: "Kumpulan Doa & Panduan Ziarah di Makkah dan Madinah",
    excerpt:
      "Doa-doa inti umrah dengan teks Arab, latin, dan arti — plus tata cara ziarah di Masjid Nabawi, Raudhah, Jabal Uhud, dan Masjid Quba.",
    category: "Manasik & Doa",
    readMinutes: 10,
    publishedAt: "2026-02-01",
    lastReviewed: "2026-02-14",
    author: "Tim Edukasi SolusiHajj",
    related: ["panduan-umrah-pemula-30-hari", "biaya-umrah-2026-rincian-lengkap"],
    blocks: [
      { type: "p", text: "Halaman ini merangkum doa-doa inti yang paling sering dibutuhkan jamaah — cukup dicetak satu lembar A4 dua sisi dan dibawa dalam tas ihram. Semua teks Arab menggunakan huruf yang mudah dibaca lansia, disertai latin dan arti. Setelah tabel doa, Anda menemukan panduan singkat ziarah di kedua kota suci." },
      { type: "h2", text: "Doa Inti Umrah" },
      { type: "h3", text: "Niat Umrah (dari miqat)" },
      { type: "arabic", text: "لَبَّيْكَ عُمْرَةً", translation: "Labbaika 'umrah — Aku penuhi panggilan-Mu untuk berumrah." },
      { type: "h3", text: "Talbiyah" },
      { type: "arabic", text: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ", translation: "Labbaikallāhumma labbaik, labbaika lā syarīka laka labbaik, innal-hamda wan-ni'mata laka wal-mulk, lā syarīka lak — Aku penuhi panggilan-Mu ya Allah, tiada sekutu bagi-Mu; segala puji, nikmat, dan kerajaan milik-Mu." },
      { type: "h3", text: "Doa antara Rukun Yamani dan Hajar Aswad" },
      { type: "arabic", text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", translation: "Rabbanā ātinā fid-dunyā hasanah wa fil-ākhirati hasanah wa qinā 'adzāban-nār — Ya Tuhan kami, berilah kami kebaikan di dunia dan akhirat, dan lindungilah kami dari azab neraka." },
      { type: "h3", text: "Doa Minum Air Zamzam" },
      { type: "arabic", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ", translation: "Allāhumma innī as'aluka 'ilman nāfi'an wa rizqan wāsi'an wa syifā'an min kulli dā' — Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit." },
      { type: "h2", text: "Tata Ziarah di Masjid Nabawi" },
      { type: "p", text: "Berangkatlah segera setelah tiba di Madinah — keutamaan shalat di Masjid Nabawi seribu kali lipat selain di Masjidil Haram. Masuklah dengan kaki kanan melalui Baab as-Salam sambil membaca salam kepada Rasulullah ﷺ. Shalat dua rakaat tahiyatul masjid, lalu berdiri menghadap makam Rasulullah ﷺ sambil menyampaikan salam dengan suara yang terkendali (bukan berteriak, tidak menyentuh kisi-kisi saat ramai, tidak menolak). Kunjungan Raudhah kini memakai slot aplikasi Nusuk — pastikan PPIU Anda mengatur jadwalnya, dan jangan lupa: Raudhah adalah area antara rumah Rasulullah ﷺ dan mimbar, bukan seluruh ruangan hijau." },
      { type: "h2", text: "Ziarah Sekitar Madinah" },
      { type: "ul", items: [
        "Masjid Quba: masjid pertama dalam sejarah Islam; shalat 2 rakaat di dalamnya bernilai umrah sunnah. Bisa dijadikan titik niat umrah sunnah.",
        "Masjid Qiblatain: tempat perubahan arah kiblat; kini arah lamanya ditandai mihrab lama.",
        "Jabal Uhud: gunung 'yang mencintai kita dan kita mencintainya'. Bacalah salam kepada para syuhada Uhud, termasuk Sa'id bin Musayyab dan Hamzah bin Abdul Muthalib.",
        "Masjid Jumu'ah & Masjid Qiblatayn lama: pilihan tambahan bila waktu memungkinkan.",
      ] },
      { type: "h2", text: "Ziarah Internal Makkah" },
      { type: "ul", items: [
        "Jabal Rahmah: tempat bertemunya Nabi Adam & Hawa; cocok untuk doa keluarga dan keturunan.",
        "Mina, Arafah, Muzdalifah: memahami medannya membantu memaknai perjalanan haji kelak — jangan lewatkan ziarah bus ini.",
        "Masjid Aisyah (At-Tan'im): miqat terdekat dari Haram untuk umrah sunnah; PPIU biasanya menyediakan bus grup.",
      ] },
      { type: "callout", title: "Semua Paket Menyertakan Ziarah Ini", text: "Bandingkan paket dan lihat itinerary hariannya — ziarah internal Makkah & Madinah sudah termasuk di seluruh paket Founding Partner kami.", ctaLabel: "Buka Katalog Paket", ctaTo: "/paket" },
    ],
  },
  ...engineArticles,
];

export function getArticle(slug: string): Article | undefined {
  return articleList.find((a) => a.slug === slug);
}

/** Artikel dalam satu kategori (urut terbit terbaru dulu). */
export function articlesByCategory(category: string): Article[] {
  return articleList
    .filter((a) => a.category === category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
