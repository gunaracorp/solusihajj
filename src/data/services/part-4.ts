import type { Service } from "./types";

/**
 * PART 4 — Kategori: keluarga-lansia (15) + haji-khusus (15) + digital-tools (15).
 * Melengkapi katalog hingga 14 kategori penuh.
 */
export const servicesPart4: Service[] = [
  // ================= KATEGORI 12: KELUARGA, LANSIA & AKSESIBILITAS =================
  {
    slug: "umrah-keluarga-paket-privat",
    name: "Umrah Keluarga — Paket Privat",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Paket umrah privat khusus keluarga: jadwal fleksibel, kamar menyatu, ritme ibadah menyesuaikan anak dan lansia — tanpa berebut rombongan.",
    longDesc:
      "Berangkat umrah bersama seluruh keluarga memiliki tantangan yang berbeda dari rombongan biasa: anak-anak butuh waktu tidur yang terjaga, lansia butuh ritme lambat, dan setiap anggota butuh ruang untuk beribadah dengan tenang. Paket privat keluarga menyatukan semuanya dalam satu rombongan kecil — hanya keluarga Anda, dengan pemandu khusus yang mengatur ritme perjalanan sesuai kebutuhan keluarga.\n\nSemua komponen disusun dari awal untuk keluarga: kamar hotel yang menyatu atau bersebelahan, jadwal ziarah yang pendek dan ringan, makan yang bersih dan ramah anak, serta transportasi darat dengan ruang berlebih untuk barang bayi. Bila ada anggota keluarga yang ingin fokus ibadah sementara yang lain menemani anak di hotel, pemandu mengatur dua jalur kegiatan tanpa memisahkan keluarga terlalu lama.",
    features: [
      "Rombongan privat — hanya keluarga Anda, 6–20 jamaah",
      "Kamar menyatu/bersebelahan dan opsi kamar connecting",
      "Pemandu khusus keluarga yang memahami ritme anak & lansia",
      "Jadwal fleksibel: bisa diubah di tempat sesuai kondisi",
      "Kursi roda dan stroller tersedia atas permintaan",
    ],
    process: [
      "Konsultasi profil keluarga: jumlah, usia, kebutuhan khusus, budget",
      "Penawaran paket dengan 2–3 opsi hotel dan tanggal",
      "Pengurusan visa dan tiket seluruh anggota keluarga",
      "Briefing keluarga singkat + kit dokumentasi perjalanan",
      "Pendampingan penuh dari bandara Indonesia sampai pulang",
    ],
    priceNote:
      "Mulai Rp 26 juta/orang (anak 2–11 tahun diskon berbagi kasur); harga final tergantung musim dan hotel.",
    priceFrom: 26000000,
    faqs: [
      {
        q: "Apakah ada harga khusus untuk anak-anak?",
        a: "Ada. Anak 2–11 tahun yang berbagi kasur dengan orang tua biasanya 75–85% dari harga dewasa, dan bayi di bawah 2 tahun hanya dikenakan biaya tiket dan pajak. Minta rincian saat konsultasi agar perhitungan jelas sejak awal.",
      },
      {
        q: "Bagaimana kalau anak sakit di tengah perjalanan?",
        a: "Pemandu membantu mengatur kunjungan klinik atau rumah sakit di Makkah/Madinah — fasilitas kesehatan di dua kota suci lengkap dan melayani jamaah Indonesia. Biaya medis ditanggung asuransi perjalanan yang terikat pada visa Anda.",
      },
    ],
    keywords: ["umrah keluarga", "paket umrah privat", "umrah bawa anak", "umrah rombongan keluarga", "umrah keluarga besar"],
  },
  {
    slug: "pendamping-lansia-24-jam",
    name: "Pendamping Lansia 24 Jam",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Pendamping khusus lansia selama umrah: dari toilet, makan, obat, sampai membantu posisi tawaf — sehingga anak yang berangkat jadi tenang.",
    longDesc:
      "Banyak jamaah muda ingin membawa orang tua berumrah, namun khawatir tidak sanggup mendampingi sepanjang perjalanan. Layanan pendamping lansia menempatkan pendamping terlatih — biasanya mahasiswa Indonesia di Makkah/Madinah atau mutawif pendamping — yang bertugas menjaga lansia Anda dalam perjalanan ibadah: membantu berjalan, menyiapkan makan dan obat sesuai jadwal, menemani toilet, dan mengingatkan waktu sholat.\n\nPendamping bekerja bersama keluarga, bukan menggantikan. Anak tetap memimpin keputusan ibadah; pendamping memastikan detail harian berjalan. Untuk lansia dengan kondisi medis tertentu (diabetes, jantung ringan, keterbatasan mobilitas), pendamping dibekali catatan kondisi dari keluarga dan rencana darurat — termasuk nomor klinik terdekat dan kontak keluarga di Indonesia.",
    features: [
      "Pendamping khusus satu-jamaah atau satu-keluarga",
      "Bantuan mobilitas: berjalan, kursi roda, naik-turun bus",
      "Pengingat obat dan makan sesuai catatan medis keluarga",
      "Koordinasi dengan mutawif untuk jalur ibadah lansia",
      "Laporan harian singkat ke keluarga via WhatsApp",
    ],
    process: [
      "Wawancara kondisi lansia: mobilitas, obat rutin, kebiasaan makan",
      "Penetapan pola pendampingan (full-day, partial, atau on-call)",
      "Penyusunan rencana darurat + kontak keluarga",
      "Pertemuan pendamping dan lansia di hotel hari pertama",
      "Evaluasi harian dan penyesuaian sepanjang trip",
    ],
    priceNote:
      "Rp 350–650 ribu/hari tergantung intensitas pendampingan; paket trip penuh 9–12 hari tersedia.",
    priceFrom: 350000,
    faqs: [
      {
        q: "Apakah pendampingnya perawat?",
        a: "Umumnya pendamping terlatih, bukan perawat klinis. Untuk lansia dengan kebutuhan medis aktif (infus, oksigen, luka), kami merekomendasikan opsi pendamping medis di kategori Kesehatan yang dibawakan tenaga kesehatan.",
      },
      {
        q: "Bisakah pendamping membantu tawaf pakai kursi roda?",
        a: "Bisa. Pendamping mendorong kursi roda dan menjaga jalur tawaf yang aman, termasuk memilih waktu yang tidak padat — biasanya setelah tarwih atau menjelang Subuh.",
      },
    ],
    keywords: ["pendamping lansia umrah", "umrah bawa orang tua", "perawat pendamping umrah", "umrah lansia", "pendamping jamaah tua"],
  },
  {
    slug: "umrah-jamaah-difabel",
    name: "Umrah Jamaah Difabel",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Perjalanan umrah aksesibel untuk jamaah difabel: jalur tanpa hambatan, kamar aksesibel, dan pendamping yang paham kebutuhan disabilitas.",
    longDesc:
      "Beribadah dengan keterbatasan fisik bukan penghalang untuk berumrah. Layanan ini menyusun perjalanan yang aksesibel sejak rencana pertama: kamar hotel dengan pintu dan kamar mandi aksesibel, jalur transfer tanpa tangga, bus dengan lift kursi roda bila tersedia, serta pendamping yang terbiasa menemani jamaah difabel — termasuk pendamping tunanetra dan penerjemah bahasa isyarat untuk jamaah tuli.\n\nDi Tanah Suci, Masjidil Haram dan Masjid Nabawi punya jalur aksesibilitas dan area khusus kursi roda. Pendamping menyiapkan rute masuk-keluar yang tepat, lokasi parkir kursi roda, dan waktu terbaik untuk tawaf tanpa keramaian — sehingga jamaah difabel dapat beribadah dengan bermartabat dan setenang mungkin.",
    features: [
      "Kamar hotel aksesibel (pintu lebar, kamar mandi grab bar)",
      "Pendamping terlatih difabel: fisik, tunanetra, tuli",
      "Rute aksesibel Masjidil Haram & Masjid Nabawi",
      "Kursi roda medis disewakan/tersedia sepanjang trip",
      "Penerjemah bahasa isyarat atas permintaan",
    ],
    process: [
      "Konsultasi jenis keterbatasan dan kebutuhan aksesibilitas",
      "Pemilihan hotel dengan kamar aksesibel tersedia",
      "Koordinasi maskapai: kursi roda bandara, prioritas boarding",
      "Penyusunan rute ibadah dan ziarah aksesibel",
      "Trip dengan pendamping tetap sepanjang perjalanan",
    ],
    priceNote:
      "Mulai Rp 28 juta/orang termasuk pendamping penuh; kamar aksesibel berlaku tarif kamar normal dengan penyesuaian musim.",
    priceFrom: 28000000,
    faqs: [
      {
        q: "Apakah semua hotel di Makkah punya kamar aksesibel?",
        a: "Tidak semua. Hotel besar dan baru umumnya punya; hotel kecil dekat Haram sering tidak. Karena itu pemilihan hotel dilakukan lebih dulu berdasarkan aksesibilitas sebelum harga dan jarak.",
      },
      {
        q: "Bagaimana tawaf untuk jamaah kursi roda?",
        a: "Masjidil Haram menyediakan jalur tawaf khusus kursi roda di lantai tertentu. Pendamping mengatur waktu tawaf di luar jam puncak agar jalur ini tidak padat.",
      },
    ],
    keywords: ["umrah difabel", "umrah kursi roda", "umrah disabilitas", "umrah aksesibel", "umrah tunanetra"],
  },
  {
    slug: "kamar-hotel-dekat-lift",
    name: "Kamar Hotel Dekat Lift",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Kamar dengan lokasi strategis dekat lift — menghemat langkah lansia di hotel tinggi Makkah, terutama saat menuju sholat berjamaah.",
    longDesc:
      "Di hotel tinggi dekat Masjidil Haram, jarak dari kamar ke lift bisa lebih melelahkan daripada jarak hotel ke masjid — lansia bisa berjalan ratusan meter di dalam lantai sebelum sampai lift. Layanan ini memastikan kamar Anda berlokasi dekat lift atau di lantai rendah, dengan permintaan resmi ke hotel sejak saat pemesanan (bukan sekadar harapan saat check-in).\n\nPermintaan lokasi kamar menjadi bagian dari booking: lantai dekat lift, kamar bersebelahan untuk keluarga, dan jauh dari area mesin AC yang berisik. Untuk hotel tanpa lift ke lantai tertentu, tim mencarikan alternatif lantai lebih rendah dengan penyesuaian harga. Detail kecil ini membuat bedanya terasa setiap kali keluar-masuk kamar — biasanya 6–10 kali sehari.",
    features: [
      "Permintaan lokasi kamar resmi ke hotel sejak booking",
      "Prioritas lantai rendah atau dekat lift",
      "Kamar bersebelahan untuk anggota keluarga lansia",
      "Koordinasi ulang saat check-in bila ada perubahan",
      "Alternatif hotel dengan lift langsung ke lobby masjid",
    ],
    process: [
      "Sebutkan kebutuhan saat pemesanan paket/hotel",
      "Tim menambahkan special request ke booking hotel",
      "Konfirmasi tertulis lokasi kamar dari hotel bila memungkinkan",
      "Follow-up check-in oleh handling di Makkah",
    ],
    priceNote:
      "Gratis sebagai permintaan pada booking; beberapa hotel mengenakan biaya kecil untuk jaminan lantai/lokasi kamar.",
    faqs: [
      {
        q: "Apakah permintaan kamar dekat lift dijamin?",
        a: "Hotel umumnya menghormati special request tapi tidak bisa menjamin 100% sebelum hari-H. Kami meminta konfirmasi tertulis, dan bila berubah, handling menegosiasikan solusi terdekat di lokasi.",
      },
      {
        q: "Hotel mana yang liftnya paling membantu lansia?",
        a: "Hotel dengan lobby yang terhubung langsung ke area sholat Masjidil Haram (misalnya menara-menara di sisi King Abdulaziz Gate) menghilangkan hampir semua jalan di luar ruangan — pilihan terbaik untuk lansia.",
      },
    ],
    keywords: ["kamar dekat lift makkah", "hotel lansia makkah", "lantai rendah hotel makkah", "special request hotel umrah"],
  },
  {
    slug: "stroller-kursi-roda-sewa",
    name: "Sewa Stroller & Kursi Roda",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Sewa stroller anak dan kursi roda di Makkah/Madinah — diantar ke hotel, cukup pakai lalu titip di lobby saat pulang.",
    longDesc:
      "Membawa stroller sendiri berarti menambah satu koper di bandara. Di Makkah dan Madinah tersedia layanan sewa stroller dan kursi roda yang diantar langsung ke hotel Anda: cukup sebutkan tanggal pakai, tim mengantar, dan saat selesai Anda titipkan di lobby hotel — tim menjemputnya. Stroller yang disewakan tipe ringan yang bisa dilipat, cocok untuk bus dan area masjid.\n\nKursi roda tersedia tipe biasa (didorong pendamping) dan tipe besar dengan roda stabil untuk jalur tawaf kursi roda. Untuk jamaah yang hanya butuh kursi roda sesekali — misalnya hanya saat ziarah panjang — tersedia tarif harian; untuk kebutuhan sepanjang trip tersedia paket penuh dengan harga lebih murah per hari.",
    features: [
      "Stroller lipat ringan siap pakai, diantar ke hotel",
      "Kursi roda biasa & tipe stabil jalur tawaf",
      "Tarif harian atau paket sepanjang trip",
      "Penjemputan kembali via lobby hotel saat selesai",
      "Cadangan penggantian bila ada kerusakan alat",
    ],
    process: [
      "Pesan minimal 2 hari sebelum tiba di Makkah/Madinah",
      "Sebutkan nama hotel, tanggal pakai, dan tipe alat",
      "Alat diantar ke hotel sesuai jadwal",
      "Titipkan alat di lobby saat selesai — tim menjemput",
    ],
    priceNote:
      "Stroller mulai Rp 60 ribu/hari; kursi roda mulai Rp 45 ribu/hari; paket trip penuh tersedia dengan harga tetap.",
    priceFrom: 45000,
    faqs: [
      {
        q: "Apakah stroller boleh dibawa ke dalam Masjidil Haram?",
        a: "Boleh di area tertentu, dan ada area penyimpanan stroller di gerbang masjid. Banyak keluarga memakai stroller untuk perjalanan hotel–masjid lalu menyimpannya di rak yang tersedia.",
      },
      {
        q: "Kursi rodanya bisa dipakai di pesawat?",
        a: "Kursi roda sewa lokal tidak untuk kabin pesawat. Untuk kebutuhan di bandara Indonesia dan Saudi, minta kursi roda bandara melalui maskapai — gratis dan disediakan di check-in.",
      },
    ],
    keywords: ["sewa stroller makkah", "sewa kursi roda makkah", "kursi roda madinah", "sewa alat bantu umrah"],
  },
  {
    slug: "umrah-trimester-aksesibilitas",
    name: "Konsultasi Umrah untuk Ibu Hamil",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Konsultasi dan penyusunan perjalanan umrah untuk ibu hamil: batas usia kandungan per maskapai, hotel nyaman, dan jadwal yang santai.",
    longDesc:
      "Ibu hamil boleh berumrah selama memenuhi syarat kesehatan dan kebijakan maskapai. Aturan umumnya: kebanyakan maskapai menerima ibu hamil hingga 32 minggu tanpa surat dokter dan hingga 35 minggu dengan surat kelayakan — tetapi kebijakan tiap maskapai berbeda dan bisa berubah, sehingga konsultasi lebih dulu wajib sebelum membeli tiket.\n\nLayanan ini memandu ibu hamil dan keluarganya menyusun perjalanan yang aman: pemilihan maskapai dengan kebijakan paling sesuai, jadwal penerbangan yang tidak terlalu pagi atau larut, hotel dengan jarak berjalan minimum, dan ritme ibadah yang santai. Termasuk daftar periksa dokumen kesehatan dan rekomendasi bagian kesehatan yang perlu dikonsultasikan ke dokter kandungan Anda sebelum berangkat.",
    features: [
      "Ringkasan kebijakan kehamilan per maskapai saat ini",
      "Penyusunan itinerary santai dengan jalan minimum",
      "Hotel dekat Haram sehingga mudah kamar-istirahat",
      "Daftar periksa dokumen dan surat kelayakan bila perlu",
      "Koordinasi makan dan istirahat dengan penyelenggara",
    ],
    process: [
      "Konfirmasi usia kehamilan saat berangkat & pulang",
      "Pemilihan maskapai dan tanggal sesuai kebijakan",
      "Penyusunan itinerary ringan + hotel dekat Haram",
      "Panduan dokumen kesehatan untuk dibawa",
      "Pendampingan koordinasi saat trip berjalan",
    ],
    priceNote:
      "Biaya konsultasi dan penyusunan Rp 250 ribu; diterapkan sebagai kredit bila melanjutkan pemesanan paket/tiket.",
    priceFrom: 250000,
    faqs: [
      {
        q: "Umur kehamilan berapa batas maksimal untuk umrah?",
        a: "Umumnya hingga 32–35 minggu tergantung maskapai, ditambah syarat kesehatan dari dokter. Selalu konfirmasi kebijakan maskapai spesifik dan izin dokter kandungan sebelum membeli tiket.",
      },
      {
        q: "Apakah tawaf dan sa'i boleh untuk ibu hamil?",
        a: "Bila kondisi sehat dan dokter mengizinkan, ibu hamil boleh menunaikan tawaf dan sa'i dengan ritme santai; bila ada kekhawatiran, tersedia jalur kursi roda. Keputusan akhir selalu mengikuti anjuran dokter Anda.",
      },
    ],
    keywords: ["umrah ibu hamil", "batas kehamilan umrah", "kebijakan maskapai ibu hamil", "umrah hamil 7 bulan"],
  },
  {
    slug: "umrah-anak-pertama-keluarga",
    name: "Panduan Umrah Anak Pertama",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Bimbingan lengkap membawa anak pertama berumrah: dokumen anak, perlengkapan, ibadah bersama anak, dan pola jadwal yang realistis.",
    longDesc:
      "Membawa anak — terutama pertama kali — membuat orang tua banyak bertanya: apakah anak harus berihram, bagaimana jika anak menangis saat tawaf, apakah anak perlu visa sendiri? Layanan ini menjawab semuanya dalam satu sesi bimbingan keluarga: dokumen anak (paspor sendiri wajib sejak bayi, visa terpisah), perlengkapan yang layak dibawa dan yang sebaiknya ditinggalkan, serta strategi ibadah bersama anak — tawaf bergantian menjaga anak, memanfaatkan area keluarga, dan memilih waktu masjid yang tidak padat.\n\nAnda juga mendapat pola jadwal harian realistis untuk keluarga dengan anak: sholat di kamar saat anak tidur, ibadah utama saat anak segar, dan ziarah singkat. Pola ini hasil pengalaman ribuan keluarga jamaah Indonesia — realistis, bukan idealis.",
    features: [
      "Sesi bimbingan keluarga online 60 menit",
      "Checklist dokumen & perlengkapan anak per usia",
      "Pola jadwal harian keluarga dengan anak",
      "Strategi tawaf/sa'i bersama anak",
      "Rekomendasi kamar dan hotel ramah anak",
    ],
    process: [
      "Booking sesi dan sebutkan usia anak",
      "Ikut sesi bimbingan online bersama keluarga",
      "Terima panduan tertulis dan checklist",
      "Tanya-jawab lanjutan via WhatsApp hingga berangkat",
    ],
    priceNote: "Rp 150 ribu per keluarga — sekali bayar, berlaku hingga selesai trip.",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah anak kecil harus berihram dan berumrah?",
        a: "Anak tidak wajib umrah, tetapi boleh dibawa berihram bersama orang tua sebagai kebiasaan baik; umrahnya dihitung sebagai umrah anak yang dapat diqada bila ia dewasa. Detail fiqihnya dijelaskan saat sesi bimbingan.",
      },
      {
        q: "Berapa usia anak paling ideal diajak umrah?",
        a: "Tidak ada batasan, namun banyak keluarga merasa paling nyaman membawa anak usia 4–9 tahun: sudah paham instruksi, kuat berjalan, dan masih mudah diatur ritmenya. Bayi dan balita lebih menantang tapi tetap banyak yang berhasil dengan persiapan tepat.",
      },
    ],
    keywords: ["umrah bawa anak", "umrah anak kecil", "dokumen anak umrah", "umrah keluarga muda"],
  },
  {
    slug: "kamar-connecting-keluarga",
    name: "Kamar Connecting untuk Keluarga",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Kamar connecting (pintu penghubung antar kamar) untuk keluarga dengan anak atau lansia — satu pintu, dua kamar, privasi tetap terjaga.",
    longDesc:
      "Kamar connecting menghubungkan dua kamar dengan pintu di dalam — keluarga dengan anak remaja atau orang tua bisa saling menjenguk tanpa lewat koridor. Di hotel Makkah dan Madinah, kamar connecting jumlahnya terbatas dan cepat habis, terutama musim liburan; karena itu pemesanan harus dilakukan jauh-jauh hari dengan permintaan tertulis.\n\nLayanan ini menangani pencarian kamar connecting yang benar-benar tersedia (bukan sekadar janji front office): konfirmasi tertulis, pengecekan ulang menjelang check-in, dan rencana cadangan — kamar bersebelahan dengan pintu dekat bila connecting penuh. Bila Anda memesan paket umrah lengkap, permintaan ini disematkan pada booking hotel Anda tanpa biaya tambahan dari kami.",
    features: [
      "Pencarian kamar connecting yang benar-benar tersedia",
      "Konfirmasi tertulis dan pengecekan ulang pre-check-in",
      "Rencana cadangan kamar bersebelahan",
      "Gratis sebagai bagian pemesanan paket lengkap",
      "Cocok untuk keluarga dengan anak/lansia",
    ],
    process: [
      "Sebutkan kebutuhan connecting saat pemesanan",
      "Tim memeriksa ketersediaan nyata per hotel",
      "Konfirmasi tertulis dari hotel bila tersedia",
      "Follow-up handling di Makkah saat check-in",
    ],
    priceNote:
      "Tanpa biaya tambahan sebagai permintaan booking; tarif mengikuti harga dua kamar normal hotel terkait.",
    faqs: [
      {
        q: "Apakah kamar connecting lebih mahal?",
        a: "Tidak — tarifnya sama dengan dua kamar standar hotel terkait. Yang membedakan hanyalah ketersediaan yang terbatas, jadi pesan sejak awal.",
      },
      {
        q: "Kamar connecting dan adjoining apa bedanya?",
        a: "Connecting dihubungkan pintu di dalam; adjoining hanyalah bersebelahan tanpa pintu penghubung. Untuk keluarga dengan anak, connecting jelas lebih praktis.",
      },
    ],
    keywords: ["kamar connecting makkah", "kamar keluarga hotel madinah", "connecting room umrah", "hotel ramah anak makkah"],
  },
  {
    slug: "pendamping-bahasa-isyarat",
    name: "Pendamping Bahasa Isyarat (Tuli)",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Pendamping penerjemah bahasa isyarat Indonesia untuk jamaah tuli — dari briefing manasik, tawaf, hingga ziarah dengan komunikasi penuh.",
    longDesc:
      "Jamaah tuli berhak menikmati perjalanan ibadah dengan komunikasi setara. Layanan ini menempatkan pendamping penerjemah bahasa isyarat Indonesia (Bisindo/SIBI sesuai kebiasaan jamaah) yang menemani sepanjang trip: menerjemahkan briefing manasik, penjelasan mutawif saat ibadah, instruksi handling di bandara, hingga cerita sejarah saat ziarah.\n\nPendamping juga menjadi jembatan komunikasi dengan petugas hotel, restoran, dan maskapai yang tidak memahami isyarat. Untuk rombongan komunitas tuli, tersedia pendamping ganda agar penerjemahan berjalan terus tanpa lelah sepanjang hari.",
    features: [
      "Penerjemah Bisindo/SIBI sesuai preferensi jamaah",
      "Mendampingi full trip: briefing, ibadah, ziarah, logistik",
      "Jembatan komunikasi dengan petugas lokal",
      "Opsi pendamping ganda untuk rombongan komunitas",
      "Koordinasi pra-trip via video call isyarat",
    ],
    process: [
      "Konsultasi pra-trip via video call (isyarat)",
      "Pemetaan kebutuhan komunikasi per tahap trip",
      "Penempatan pendamping isyarat tetap sepanjang trip",
      "Evaluasi komunikasi harian",
    ],
    priceNote:
      "Rp 500–750 ribu/hari per pendamping; komunitas/rombongan mendapat tarif khusus.",
    priceFrom: 500000,
    faqs: [
      {
        q: "Apakah pendampingnya penerjemah tersertifikasi?",
        a: "Pendamping kami bekerja sama dengan komunitas penerjemah isyarat berpengalaman memandu umrah. Sertifikasi formal bervariasi; minta profil pendamping saat konsultasi bila penting bagi Anda.",
      },
      {
        q: "Bisakah anggota keluarga tuli berumrah tanpa pendamping?",
        a: "Bisa — banyak jamaah tuli berumrah mandiri. Pendamping memberi kenyamanan pada penjelasan ibadah dan situasi darurat; keputusan sepenuhnya milik keluarga.",
      },
    ],
    keywords: ["umrah jamaah tuli", "penerjemah isyarat umrah", "umrah Bisindo", "umrah difabel tuli"],
  },
  {
    slug: "ziarah-ringkas-lansia",
    name: "Ziarah Ringkas Ramah Lansia",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Rute ziarah Makkah & Madinah versi ringkas: tempat inti, waktu pendek, naik-turun bus minimal — cocok untuk lansia dan keluarga kecil.",
    longDesc:
      "Ziarah standar bisa memakan 4–6 jam dengan banyak naik-turun bus dan berjalan di bawah matahari. Untuk lansia, versi ringkasnya memotong ke tempat inti: di Makkah — Jabal Tsur, Arafah, Muzdalifah, Mina dalam satu putaran efisien; di Madinah — Masjid Quba, Jabal Uhud, dan Masjid Qiblatain dengan rute bus yang meminimalkan jalan kaki.\n\nGrup ringkas berangkat pagi atau sore di luar jam panas, dengan bus yang menunggu di titik terdekat dari setiap lokasi, dan durasi berhenti yang lebih singkat namun cukup untuk berdoa. Pemandu menjelaskan sejarah ringkas di dalam bus ber-AC, sehingga waktu di luar bus benar-benar untuk berdoa saja.",
    features: [
      "Rute inti dengan jalan kaki minimum",
      "Berangkat di luar jam panas (pagi/sore)",
      "Bus menunggu di titik terdekat tiap lokasi",
      "Penjelasan sejarah di dalam bus ber-AC",
      "Durasi total 2–3 jam saja",
    ],
    process: [
      "Pilih slot ziarah saat sudah di Makkah/Madinah",
      "Berangkat dari hotel dengan bus grup ringkas",
      "Kunjungan inti dengan berhenti singkat",
      "Kembali ke hotel sebelum waktu panas/ibadah utama",
    ],
    priceNote: "Rp 120–200 ribu/orang untuk grup kecil; gratis bila termasuk paket penyelenggara tertentu.",
    priceFrom: 120000,
    faqs: [
      {
        q: "Apakah ziarah ringkas mencakup semua tempat utama?",
        a: "Mencakup tempat-tempat inti yang biasanya dituju jamaah Indonesia. Bila Anda ingin tempat khusus tambahan, sampaikan saat pemesanan dan rute akan disesuaikan bila memungkinkan.",
      },
      {
        q: "Apakah cocok untuk ibu hamil dan anak?",
        a: "Sangat cocok — rute ringkas justru dirancang untuk mereka yang butuh perjalanan santai: ibu hamil, lansia, dan keluarga dengan anak.",
      },
    ],
    keywords: ["ziarah makkah lansia", "ziarah ringkas", "ziarah madinah santai", "tour ziarah ramah lansia"],
  },
  {
    slug: "umrah-santai-slow-pace",
    name: "Umrah Santai (Slow Pace)",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Paket umrah slow pace: durasi lebih panjang, agenda lebih longgar, tanpa paksaan bangun subuh rombongan — ibadah dengan ritme sendiri.",
    longDesc:
      "Umrah rombongan biasanya padat: bangun subuh bareng, briefing malam, ziarah harian — berat untuk jamaah yang butuh istirahat lebih. Paket slow pace mengubah filosofi perjalanan: durasi diperpanjang (12–15 hari), agenda wajib dipangkas ke minimum, dan jamaah bebas mengatur ritme ibadahnya sendiri dengan dukungan pemandu yang tersedia bila dibutuhkan.\n\nHotel dipilih dengan kenyamanan maksimum dan jarak terdekat ke masjid, karena prinsipnya sederhana: jamaah yang cukup tidur dan tidak kelelahan akan beribadah lebih khusyuk. Ideal untuk lansia sehat, pemulihan sakit, jamaah yang pernah berumrah dan ingin fokus ibadah tanpa agenda tur, serta keluarga dengan balita.",
    features: [
      "Durasi 12–15 hari dengan agenda wajib minimum",
      "Hotel terdekat Haram untuk jalan kaki singkat",
      "Tanpa briefing malam panjang — materinya dikirim digital",
      "Pemandu on-call, bukan pemandu rombongan penuh",
      "Fleksibilitas total jadwal ibadah harian",
    ],
    process: [
      "Konsultasi profil dan tujuan ibadah",
      "Pemilihan tanggal longgar dan hotel nyaman",
      "Pengurusan visa, tiket, dan akomodasi",
      "Trip dengan dukungan on-call sepanjang perjalanan",
    ],
    priceNote:
      "Mulai Rp 32 juta/orang untuk 12 hari (hotel 4★ dekat Haram); bervariasi signifikan per musim.",
    priceFrom: 32000000,
    faqs: [
      {
        q: "Apa bedanya paket slow pace dengan paket reguler?",
        a: "Paket reguler mengoptimalkan jumlah agenda dalam durasi pendek; slow pace mengoptimalkan kenyamanan dan fokus ibadah dalam durasi panjang. Harganya lebih tinggi karena hotel lebih dekat dan durasi lebih panjang.",
      },
      {
        q: "Apakah slow pace cocok untuk jamaah pertama kali?",
        a: "Cocok bagi jamaah pertama yang ingin belajar dengan tenang dan tidak terburu-buru. Namun jamaah pertama yang butuh pendampingan intensif lebih cocok paket reguler dengan mutawif aktif.",
      },
    ],
    keywords: ["umrah slow pace", "umrah santai", "umrah fokus ibadah", "umrah tanpa rombongan padat", "umrah 12 hari"],
  },
  {
    slug: "pendamping-wanita-rombongan-mahram",
    name: "Pendamping Wanita & Regulasi Mahram",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Pendamping wanita (mutawifah) dan bantuan regulasi mahram terkini — memastikan rombongan wanita berangkat sesuai ketentuan terbaru Saudi.",
    longDesc:
      "Regulasi perjalanan wanita ke Saudi berubah signifikan beberapa tahun terakhir: kini wanita dapat berumrah dalam rombongan wanita terorganisir tanpa mahram, dengan syarat administratif tertentu. Layanan ini memastikan rombongan wanita Anda berangkat legal dan nyaman: pengecekan ketentuan terkini, pengurusan dokumen rombongan, dan penempatan mutawifah — pemandu wanita yang memandu ibadah dan membantu kebutuhan khusus jamaah wanita.\n\nUntuk jamaah wanita yang tetap ditemani mahram, pendamping membantu memastikan kesesuaian hubungan mahram pada dokumen (akta kelahiran, kartu keluarga, akta nikah) agar tidak bermasalah saat imigrasi. Aturan berbeda antar status visa dan usia — selalu divalidasi ke ketentuan resmi saat pemesanan, bukan dari kabar burung.",
    features: [
      "Validasi regulasi mahram/wanita terkini sebelum booking",
      "Mutawifah (pemandu wanita) untuk rombongan wanita",
      "Pengecekan dokumen hubungan mahram",
      "Kamar khusus rombongan wanita",
      "Dukungan koordinasi khusus kebutuhan jamaah wanita",
    ],
    process: [
      "Konsultasi profil rombongan wanita Anda",
      "Validasi ketentuan resmi terkini",
      "Pengurusan dokumen dan visa rombongan",
      "Penempatan mutawifah dan pendampingan trip",
    ],
    priceNote:
      "Mutawifah mulai Rp 1,8 juta/trip per grup (dibagi anggota grup); validasi dokumen gratis saat pemesanan paket.",
    priceFrom: 1800000,
    faqs: [
      {
        q: "Apakah wanita masih wajib mahram untuk umrah?",
        a: "Aturan terkini memungkinkan wanita berumrah dalam rombongan terorganisir tanpa mahram dengan syarat tertentu. Karena regulasi bisa berubah, tim selalu memvalidasi ketentuan resmi pada waktu Anda berangkat.",
      },
      {
        q: "Siapa saja yang dianggap mahram?",
        a: "Umumnya suami, ayah, anak, saudara laki-laki kandung, paman, dan kakek — sesuai ketentuan syariat yang diakui otoritas Saudi. Dokumen pembuktian hubungan perlu disiapkan dan akan diperiksa tim Anda.",
      },
    ],
    keywords: ["umrah wanita tanpa mahram", "mutawifah", "regulasi mahram umrah", "rombongan wanita umrah"],
  },
  {
    slug: "konsultasi-persiapan-keluarga-besar",
    name: "Konsultasi Persiapan Keluarga Besar",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Sesi konsultasi menyusun umrah keluarga besar 10–30 orang: satu tanggal, satu hotel, satu keuangan — terkoordinasi rapi sejak awal.",
    longDesc:
      "Mengajak keluarga besar berumrah — orang tua, saudara, besan, anak dan cucu — adalah mimpi yang rumit realisasinya: tanggal yang cocok untuk semua, budget yang berbeda antar rumah tangga, kamar yang harus berdekatan, dan satu orang yang jadi koordinator tersiksa oleh grup WhatsApp. Sesi konsultasi ini menyusun semuanya: struktur siapa bayar apa, opsi tanggal dan hotel, pembagian kamar, hingga rencana komunikasi selama trip.\n\nAnda mendapat dokumen rencana tertulis yang bisa dibagikan ke seluruh keluarga, termasuk estimasi biaya per rumah tangga dan opsi cicilan syariah untuk anggota yang membutuhkan. Bila melanjutkan pemesanan, biaya konsultasi menjadi kredit pemesanan.",
    features: [
      "Sesi konsultasi 90 menit (online/offline Jakarta)",
      "Dokumen rencana keluarga yang bisa dibagikan",
      "Struktur keuangan & opsi cicilan syariah",
      "Rencana kamar dan koordinasi trip",
      "Kredit biaya bila lanjut pemesanan",
    ],
    process: [
      "Booking sesi dan kumpulkan profil keluarga",
      "Ikut sesi konsultasi dengan koordinator keluarga",
      "Terima dokumen rencana tertulis",
      "Lanjut pemesanan bila sepakat (konsultasi jadi kredit)",
    ],
    priceNote: "Rp 300 ribu per sesi — jadi kredit penuh bila melanjutkan pemesanan paket.",
    priceFrom: 300000,
    faqs: [
      {
        q: "Berapa minimal keluarga agar layak pakai layanan ini?",
        a: "Mulai 8–10 orang sudah terasa rumit koordinasinya dan layak dikonsultasikan. Di atas 30 orang biasanya lebih baik dikelola sebagai rombongan kecil terstruktur.",
      },
      {
        q: "Apakah bisa untuk campuran PPIU berbeda?",
        a: "Bisa dibahas — namun umumnya satu penyelenggara untuk seluruh keluarga lebih murah dan mudah dikoordinasi. Sesi konsultasi membantu menimbang opsi ini.",
      },
    ],
    keywords: ["umrah keluarga besar", "konsultasi umrah keluarga", "umrah 20 orang keluarga", "persiapan umrah keluarga"],
  },
  {
    slug: "kamar-rest-time-transit",
    name: "Kamar Rest Time untuk Transit",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Sewa kamar per blok jam (6–12 jam) di Makkah/Madinah untuk jamaah transit atau antara check-in — istirahat sungguhan tanpa bayar semalam penuh.",
    longDesc:
      "Jamaah yang tiba subuh di Madinah sebelum check-in sore, atau yang menunggu bus ke Makkah sore ini, sering terjebak lelah tanpa tempat istirahat. Kamar rest time menyediakan kamar hotel per blok jam: check-in 6–12 jam, fasilitas hotel penuh, dan harga jauh di bawah tarif semalam penuh. Cocok juga untuk keluarga yang perlu ruang menunggu dengan balita dan lansia.\n\nKetersediaan rest time bervariasi per hotel dan per hari — hotel dekat Haram biasanya sibuk. Pemesanan lebih awal memastikan kamar siap saat Anda tiba, termasuk pengecekan jam check-in terakhir hotel agar tidak salah tanggal. Untuk grup besar, tersedia beberapa kamar sekaligus di hotel yang sama.",
    features: [
      "Kamar per blok 6 atau 12 jam",
      "Fasilitas hotel penuh (kamar mandi, AC, wifi)",
      "Lokasi hotel dekat Haram",
      "Bisa beberapa kamar untuk grup",
      "Konfirmasi jam check-in/check-out jelas sejak booking",
    ],
    process: [
      "Sebutkan jam tiba dan durasi butuh istirahat",
      "Tim mencari kamar rest time tersedia di hotel dekat Haram",
      "Konfirmasi harga dan jadwal kamar",
      "Tiba, check-in langsung tanpa menunggu",
    ],
    priceNote:
      "Mulai Rp 450 ribu per blok 6 jam untuk kamar standar dekat Haram; bervariasi per musim.",
    priceFrom: 450000,
    faqs: [
      {
        q: "Bisakah memperpanjang jadi semalam penuh?",
        a: "Bisa, dengan selisih tarif semalam penuh dikurangi yang sudah dibayar — selama kamar masih tersedia. Sebutkan sejak awal bila kemungkinan besar akan menginap.",
      },
      {
        q: "Apakah rest time tersedia untuk grup besar?",
        a: "Ya, dengan pemesanan awal kami bisa mengamankan beberapa kamar sekaligus di hotel yang sama untuk grup Anda.",
      },
    ],
    keywords: ["rest time makkah", "sewa kamar per jam madinah", "kamar transit umrah", "istirahat sebelum check-in"],
  },

  // ================= KATEGORI 13: LAYANAN KHUSUS HAJI =================
  {
    slug: "haji-furoh-paket-lengkap",
    name: "Haji Furoh — Paket Lengkap",
    categorySlug: "haji-khusus",
    shortDesc:
      "Haji khusus (furoh) lewat PIHK berizin dengan kuota resmi: visa haji, hotel premium, kendaraan pribadi di Mina — ibadah haji tanpa antre bertahun-tahun.",
    longDesc:
      "Haji furoh (haji khusus) memungkinkan jamaah menunaikan haji tanpa menunggu antrean haji reguler yang bisa puluhan tahun — dengan kuota resmi dari PIHK (Penyelenggara Ibadah Haji Khusus) berizin Kemenag. Layanan menyeluruh mencakup: visa haji khusus, tiket, hotel premium dekat Haram di Makkah (sebelum dan sesudah wukuf), tenda/kamp di Mina, kendaraan, makan, mutawif, dan seluruh perizinan.\n\nPerbedaan utama dengan haji reguler ada di kenyamanan dan kepastian: tenda Mina berkualitas dengan AC dan makan layak, kendaraan yang tersedia saat dibutuhkan (bukan menunggu bus bersama ribuan jamaah), dan hotel dalam jarak berjalan ke Haram. Kuota haji khusus terbatas per tahun dan diatur ketat pemerintah Saudi dan Indonesia — jadwal dan slot selalu dikonfirmasi resmi saat pemesanan.",
    features: [
      "Kuota resmi PIHK berizin Kemenag",
      "Visa haji khusus + seluruh perizinan",
      "Hotel premium dekat Haram sebelum & sesudah wukuf",
      "Tenda/kamp Mina premium dengan AC",
      "Kendaraan pribadi di Makkah & Mina",
      "Mutawif dan pendamping penuh sepanjang haji",
    ],
    process: [
      "Konsultasi slot kuota dan jadwal musim haji",
      "Penyusunan kontrak dan pengurusan dokumen haji",
      "Penerbitan visa haji khusus",
      "Trip haji lengkap dengan pendampingan",
      "Evaluasi pasca-haji dan sertifikat",
    ],
    priceNote:
      "Mulai USD 8.000–15.000+ per jamaah tergantung paket hotel & kamp Mina; slot kuota sangat terbatas.",
    priceFrom: 128000000,
    faqs: [
      {
        q: "Apa beda haji furoh dengan haji reguler Kemenag?",
        a: "Rukun dan sahnya sama — bedanya di penyelenggaraan: furoh lewat PIHK berizin dengan kuota khusus, kenyamanan premium, dan tanpa antrean bertahun-tahun; haji reguler lewat antrean Kemenag dengan biaya jauh lebih murah.",
      },
      {
        q: "Berapa lama proses dari daftar sampai berangkat?",
        a: "Tergantung slot kuota — bisa beberapa bulan hingga setahun. Proses dokumen dan pembayaran bertahap dipandu sejak kontrak ditandatangani.",
      },
    ],
    keywords: ["haji furoh", "haji khusus", "paket haji khusus", "PIHK haji furoh", "haji tanpa antre"],
  },
  {
    slug: "kendaraan-haji-mina-arafah",
    name: "Kendaraan Haji Mina & Arafah",
    categorySlug: "haji-khusus",
    shortDesc:
      "Kendaraan pribadi selama musim haji: transfer Makkah–Mina–Arafah–Muzdalifah sesuai jadwal Anda — tanpa menunggu bus campuran ribuan jamaah.",
    longDesc:
      "Momen paling melelahkan haji adalah perpindahan Makkah–Mina–Arafah–Muzdalifah–Makkah bersama jutaan jamaah. Kendaraan haji pribadi mengganti pengalaman menunggu bus campuran dengan kendaraan khusus untuk rombongan Anda: jadwal keberangkatan sesuai rencana ibadah, penumpang hanya rombongan sendiri, dan pengemudi yang paham jalur khusus haji.\n\nKendaraan tersedia dari van 7 penumpang hingga bus 50 kursi, semua dengan izin operasi musim haji yang diatur ketat otoritas Saudi (kendaraan tanpa izin musim haji tidak bisa beroperasi di rute jamaah). Pemesanan jauh sebelum musim haji memastikan kendaraan dan izinnya aman.",
    features: [
      "Van 7 seat sampai bus 50 seat berizin musim haji",
      "Jadwal transfer sesuai rencana ibadah rombongan",
      "Pengemudi berpengalaman jalur khusus haji",
      "Skenario cadangan bila ada penutupan jalan",
      "Koordinasi dengan polisi haji bila perlu",
    ],
    process: [
      "Pesan jauh sebelum musim haji (bulan-bulan sebelumnya)",
      "Tentukan jadwal transfer rombongan",
      "Konfirmasi kendaraan + izin operasi",
      "Operasional transfer sesuai jadwal selama hari-hari haji",
    ],
    priceNote:
      "Mulai USD 900/van/hari dan USD 2.500+/bus/hari selama hari-hari puncak haji; harga musim haji sangat dinamis.",
    priceFrom: 14500000,
    faqs: [
      {
        q: "Kenapa harga kendaraan musim haji jauh lebih mahal?",
        a: "Karena hanya kendaraan dengan izin khusus musim haji boleh beroperasi di rute jamaah, dan permintaannya jutaan — harganya mengikuti mekanisme musim puncak. Pemesanan awal mengunci harga lebih baik.",
      },
      {
        q: "Bisakah kendaraan menunggu di Arafah?",
        a: "Selama wukuf, kendaraan dilarang bergerak pada jam-jam tertentu sesuai aturan lalu lintas haji — tetapi bisa menunggu di area parkir yang ditentukan, jauh lebih nyaman daripada berjalan bermil-mil.",
      },
    ],
    keywords: ["kendaraan haji", "bus haji mina", "transport arafah", "sewa bus musim haji", "transfer haji pribadi"],
  },
  {
    slug: "kamp-tenda-mina-premium",
    name: "Kamp/Tenda Mina Premium",
    categorySlug: "haji-khusus",
    shortDesc:
      "Tenda Mina premium: AC, kasur sungguhan, makan layak, dan jarak jalan minimal ke Jamarat — kesiapan fisik untuk hari-hari tasyriq.",
    longDesc:
      "Hari-hari di Mina menentukan kesiapan fisik jamaah untuk seluruh rangkaian haji. Kamp premium mengganti pengalaman tenda padat dengan fasilitas layak: AC atau pendingin yang bekerja di panas Mina, kasur sungguhan (bukan alas tipis), makan terjadwal yang dikirim ke tenda, toilet bersih dengan antrean minim, dan lokasi yang menghemat jalan ke Jamarat.\n\nKetersediaan kamp premium terbatas dan dikelola operator resmi di bawah regulasi otoritas haji Saudi. Pemilihan lokasi kamp lebih penting daripada bintang fasilitasnya: jarak ke Jamarat dan akses toilet menentukan pengalaman harian Anda jauh lebih besar daripada dekorasi tenda. Konsultasi mencakup perbandingan lokasi secara jujur.",
    features: [
      "Tenda ber-AC dengan kasur sungguhan",
      "Makan 3x sehari dikirim ke tenda",
      "Toilet bersih dengan antrean minim",
      "Lokasi strategis jarak ke Jamarat",
      "Petugas kamp siaga 24 jam selama tasyriq",
    ],
    process: [
      "Konsultasi lokasi kamp dan paket fasilitas",
      "Pemesanan slot kamp untuk musim haji",
      "Konfirmasi penempatan tenda rombongan",
      "Operasional penuh selama hari-hari tasyriq",
    ],
    priceNote:
      "Mulai USD 1.800–3.500 per jamaah untuk paket kamp premium 5–6 hari; berbeda signifikan per lokasi.",
    priceFrom: 29000000,
    faqs: [
      {
        q: "Apakah kamp premium menjamin tidak panas?",
        a: "AC membantu banyak, namun suhu Mina bisa ekstrem dan listrik musim haji bekerja pada kapasitas maksimum. Kamp premium meminimalkan ketidaknyamanan, bukan meniadakannya — harapan yang jujur lebih baik dari janji berlebihan.",
      },
      {
        q: "Kapan harus memesan kamp?",
        a: "Secepatnya setelah slot haji Anda pasti — kamp premium terbaik terpesan berbulan-bulan sebelum musim haji.",
      },
    ],
    keywords: ["tenda mina premium", "kamp mina AC", "penginapan mina haji", "tenda haji khusus", "jamarat dekat tenda"],
  },
  {
    slug: "konsultasi-manasik-haji-khusus",
    name: "Konsultasi Manasik Haji Khusus",
    categorySlug: "haji-khusus",
    shortDesc:
      "Kelas manasik haji privat untuk jamaah haji khusus: fiqih haji, simulasi rangkaian, skenario padat, dan tanya jawab langsung dengan ustadz pendamping.",
    longDesc:
      "Haji khusus tanpa persiapan manasik yang matang berisiko jamaah kewalahan di hari-hari kritis. Kelas manasik privat ini disusun khusus untuk jamaah haji khusus: fiqih lengkap haji (ihram, wukuf, tawaf ifadhah, sa'i, tahallul, tawaf wada'), simulasi urutan hari demi hari, dan yang paling penting — skenario saat hal-hal tidak berjalan ideal: haid saat wukuf, tertinggal rombongan, kehabisan tenaga di Mina.\n\nKelas dijalankan privat untuk keluarga/rombongan kecil dengan jadwal fleksibel (3 sesi × 2 jam, bisa online), materi digital yang bisa dibaca ulang, dan grup tanya jawab dengan ustadz hingga selesai haji. Bila Anda menunaikan haji bersama PIHK tertentu, kelas ini melengkapi — bukan menggantikan — manasik penyelenggara Anda.",
    features: [
      "3 sesi privat (online) dengan ustadz pendamping haji",
      "Simulasi rangkaian hari haji dari ihram ke tawaf wada'",
      "Skenario darurat fiqih (haid, sakit, tertinggal)",
      "Materi digital + grup tanya jawab",
      "Fokus jamaah haji khusus, bukan materi generik",
    ],
    process: [
      "Booking jadwal 3 sesi sesuai ketersediaan keluarga",
      "Sesi 1: fiqih ihram & persiapan; Sesi 2: wukuf & Mina; Sesi 3: tawaf, sa'i, penutup",
      "Terima materi digital lengkap",
      "Tanya jawab via grup hingga selesai ibadah haji",
    ],
    priceNote: "Rp 1,2 juta per keluarga/rombongan kecil (maks 10 orang) untuk seluruh program.",
    priceFrom: 1200000,
    faqs: [
      {
        q: "Apakah kelas ini menggantikan manasik PIHK?",
        a: "Tidak — ini pelengkap. Manasik penyelenggara Anda tetap berjalan; kelas ini memberi kedalaman fiqih dan skenario yang jarang sempat dibahas di manasik massal.",
      },
      {
        q: "Bisakah kelas diadakan offline di rumah?",
        a: "Bisa untuk wilayah Jakarta dan sekitarnya dengan biaya perjalanan tambahan; kota lain tetap online — kualitas materinya sama.",
      },
    ],
    keywords: ["manasik haji khusus", "kelas manasik privat", "fiqih haji lengkap", "simulasi manasik haji"],
  },
  {
    slug: "dokumen-visa-haji-khusus",
    name: "Pengurusan Visa Haji Khusus",
    categorySlug: "haji-khusus",
    shortDesc:
      "Pengurusan visa haji khusus melalui kanal resmi — dokumen, kuota, dan biaya transparan, dipandu bersama PIHK penyelenggara Anda.",
    longDesc:
      "Visa haji khusus berbeda mekanismenya dari visa umrah: terikat kuota tahunan yang dibagi ke negara, diterbitkan melalui kanal resmi, dan hanya sah untuk periode haji. Pengurusan dilakukan bersama PIHK yang mengangkat kuota Anda — dokumen identitas, kesehatan, dan relasi mahram (bila relevan) disiapkan sesuai checklist resmi, lalu diproses pada jendela waktu penerbitan visa haji.\n\nLayanan ini memandu keluarga/rombongan memahami tahapannya tanpa kebingungan: apa yang perlu disiapkan kapan, biaya mana yang termasuk kuota dan mana yang tambahan, serta hal-hal yang sering membuat visa haji terhambat (ketidaksesuaian nama paspor, data kesehatan, dsb). Untuk rombongan besar, tersedia manajemen dokumen terpusat.",
    features: [
      "Panduan checklist dokumen visa haji resmi",
      "Koordinasi dengan PIHK pengangkat kuota",
      "Pemantauan jendela penerbitan visa",
      "Manajemen dokumen terpusat untuk rombongan",
      "Klarifikasi biaya kuota vs tambahan sejak awal",
    ],
    process: [
      "Konfirmasi slot kuota melalui PIHK",
      "Pengumpulan dokumen sesuai checklist resmi",
      "Proses penerbitan pada jendela resmi",
      "Serah terima visa + briefing kelengkapan berangkat",
    ],
    priceNote:
      "Biaya administrasi mulai Rp 3,5 juta/jamaah (di luar biaya kuota haji yang dibayarkan ke PIHK).",
    priceFrom: 3500000,
    faqs: [
      {
        q: "Apakah visa haji khusus bisa diurus mandiri tanpa PIHK?",
        a: "Kuota haji khusus diangkat melalui PIHK berizin, sehingga visa haji khusus praktis diurus bersama PIHK penyelenggara Anda. Layanan kami membantu memastikan prosesnya rapi dan transparan.",
      },
      {
        q: "Kapan visa haji biasanya terbit?",
        a: "Pada jendela penerbitan visa haji menjelang musim haji — kepastian tanggalnya diumumkan otoritas haji tiap tahun dan dipantau tim sepanjang proses.",
      },
    ],
    keywords: ["visa haji khusus", "kuota haji furoh", "pengurusan visa haji", "dokumen haji khusus"],
  },
  {
    slug: "hotel-makkah-musim-haji",
    name: "Hotel Makkah Musim Haji",
    categorySlug: "haji-khusus",
    shortDesc:
      "Pemesanan hotel Makkah periode haji dengan jadwal tepat: sebelum wukuf, selama tasyriq, dan sesudah — termasuk strategi kamar di hari puncak.",
    longDesc:
      "Hotel di Makkah pada musim haji berperilaku unik: banyak jamaah mengosongkan kamar saat hari-hari di Mina dan butuh lagi saat pulang dari Muzdalifah. Layanan ini menyusun strategi kamar yang benar: kamar sebelum wukuf (masa persiapan dan umrah qiran/tamattu), opsi penyimpanan bagasi berat saat ke Mina, dan kamar kembali tersedia saat selesai tasyriq — dengan harga terbaik untuk pola tinggal yang tidak kontinu.\n\nTanpa strategi ini, jamaah sering membayar kamar penuh untuk malam yang tidak dihuni, atau sebaliknya kehilangan kamar saat kembali dari Mina karena harga melonjak. Pemesanan jauh hari dan pemahaman pola musim haji adalah kuncinya — dan itulah yang tim tangani untuk Anda.",
    features: [
      "Strategi kamar pra-wukuf dan pasca-tasyriq",
      "Penyimpanan bagasi saat hari-hari Mina",
      "Kunci harga lebih awal sebelum lonjakan musim",
      "Pilihan hotel dekat Haram untuk efisiensi jalan",
      "Koordinasi check-in/out dengan jadwal haji",
    ],
    process: [
      "Konsultasi tanggal pasti rangkaian haji Anda",
      "Penyusunan pola tinggal dan penyimpanan bagasi",
      "Pemesanan hotel dengan harga terkunci",
      "Penyesuaian bila jadwal haji berubah",
    ],
    priceNote:
      "Tarif hotel musim haji mulai Rp 2,5 juta/malam (4★ dekat Haram); paket pola haji diberikan saat konsultasi.",
    priceFrom: 2500000,
    faqs: [
      {
        q: "Apakah perlu bayar kamar penuh saat di Mina?",
        a: "Tidak harus — dengan pola booking yang tepat, kamar bisa dilepas sementara atau bagasi dititip, lalu kamar diambil kembali. Pola ini disusun sejak awal agar hemat.",
      },
      {
        q: "Kapan harga hotel haji paling tinggi?",
        a: "Menjelang dan selama hari wukuf hingga selesai tasyriq. Pemesanan bulan-bulan sebelumnya mengunci harga jauh lebih baik.",
      },
    ],
    keywords: ["hotel musim haji makkah", "hotel haji dekat haram", "kamar haji khusus", "strategi hotel haji"],
  },
  {
    slug: "mutawif-haji-pendamping-rangkaian",
    name: "Mutawif Haji — Pendamping Rangkaian",
    categorySlug: "haji-khusus",
    shortDesc:
      "Mutawif khusus haji yang mendampingi seluruh rangkaian: ihram di miqat, wukuf, Mina, tawaf ifadhah, sampai tawaf wada' — dengan bahasa Indonesia.",
    longDesc:
      "Mutawif haji berbeda dari mutawif umrah: ia mendampingi rangkaian panjang dan berisiko kelelahan — bukan sekadar memandu satu sesi umrah. Layanan ini menempatkan mutawif berbahasa Indonesia yang berpengalaman memandu haji: mengingatkan doa dan niat di setiap titik, menjaga rombongan tetap utuh di keramaian, mengatur strategi energi jamaah lansia, dan menjadi tenaga fiqih yang siap menjawab situasi tak terduga di lapangan.\n\nRasio mutawif:jamaah yang sehat adalah 1:20–30 untuk haji (lebih padat dari umrah karena durasi panjang). Untuk rombongan dengan banyak lansia, tambahkan mutawif pendamping mobilitas. Seluruh penempatan dikonfirmasi sebelum keberangkatan — bukan dadakan saat tiba.",
    features: [
      "Mutawif berbahasa Indonesia berpengalaman haji",
      "Dampingan penuh ihram → wukuf → Mina → tawaf wada'",
      "Strategi energi untuk jamaah lansia",
      "Penanganan fiqih situasional di lapangan",
      "Rasio sehat 1:20–30 jamaah",
    ],
    process: [
      "Konsultasi profil rombongan dan kebutuhan",
      "Penempatan mutawif tetap sebelum keberangkatan",
      "Briefing bersama mutawif sebelum terbang",
      "Pendampingan penuh selama hari-hari haji",
    ],
    priceNote:
      "Mulai Rp 4,5 juta/mutawif per trip haji per grup 20–30 jamaah (dibagi anggota).",
    priceFrom: 4500000,
    faqs: [
      {
        q: "Apakah mutawif termasuk paket PIHK?",
        a: "Umumnya ya pada paket PIHK lengkap. Layanan ini untuk rombongan yang menyusun komponennya sendiri atau butuh mutawif tambahan berbahasa Indonesia.",
      },
      {
        q: "Bagaimana bila mutawif sakit di tengah haji?",
        a: "Kontrak mutawif professional menyediakan pengganti dari timnya. Ini salah satu alasan memilih mutawif dari lembaga, bukan individu lepas.",
      },
    ],
    keywords: ["mutawif haji", "pendamping haji indonesia", "mutawif bahasa indonesia", "pemandu haji khusus"],
  },
  {
    slug: "paket-makan-musim-haji",
    name: "Paket Makan Musim Haji",
    categorySlug: "haji-khusus",
    shortDesc:
      "Paket makan khusus musim haji: dikirim ke hotel Makkah dan tenda Mina sesuai jadwal rangkaian — jamaah tidak pernah kehilangan waktu makan layak.",
    longDesc:
      "Makan di musim haji adalah logistik tersulit: restoran penuh, antrean panjang, dan hari-hari di Mina/Arafah tidak memungkinkan jamaah mencari makan sendiri. Paket makan musim haji mengaturnya: makan terjadwal dikirim ke hotel saat di Makkah, dan porsi ringan-perkasa (roti, buah, air, lauk tahan) dibagikan saat perpindahan ke Mina dan Arafah, plus makan hangat dikirim ke tenda selama tasyriq.\n\nMenu dirancang untuk kondisi musim haji: tidak berat untuk pencernaan di cuaca panas, cukup karbohidrat untuk energi panjang, dan aman disimpan di tenda. Bagi rombongan dengan kebutuhan khusus (diabetes, alergi), menu khusus disiapkan dan ditandai per jamaah — detail yang di hari-hari kritis sangat menentukan.",
    features: [
      "Makan terjadwal ke hotel Makkah sesuai rangkaian",
      "Paket ringan untuk perpindahan Mina/Arafah",
      "Makan hangat dikirim ke tenda selama tasyriq",
      "Menu khusus diabetes/alergi bertanda per jamaah",
      "Air minum selalu tersedia di setiap titik",
    ],
    process: [
      "Konsultasi jadwal rangkaian haji rombongan",
      "Penyusunan jadwal makan per hari",
      "Konfirmasi menu dan kebutuhan khusus",
      "Operasional pengiriman sesuai jadwal",
    ],
    priceNote:
      "Mulai USD 180–280 per jamaah untuk paket makan periode haji penuh (10–14 hari).",
    priceFrom: 2800000,
    faqs: [
      {
        q: "Apakah makan bisa sampai ke tenda di Mina?",
        a: "Ya — operator katering resmi musim haji memiliki izin dan jalur pengiriman ke area tenda. Itulah sebabnya pemesanan lewat operator resmi penting, bukan improvisasi.",
      },
      {
        q: "Bisakah menu makanan Indonesia penuh?",
        a: "Menu utama memang masakan Indonesia; pada hari-hari logistik berat, porsi ringan praktis digabung dengan lauk Indonesia yang tahan lama.",
      },
    ],
    keywords: ["makan musim haji", "katering haji mina", "paket makan haji khusus", "makan jamaah arafah"],
  },
  {
    slug: "asuransi-haji-khusus",
    name: "Asuransi Perjalanan Haji Khusus",
    categorySlug: "haji-khusus",
    shortDesc:
      "Asuransi perjalanan khusus musim haji: cakupan medis yang realistis untuk risiko haji — evakuasi, rawat inap, dan pembatalan rangkaian ibadah.",
    longDesc:
      "Musim haji punya profil risiko berbeda dari umrah: keramaian ekstrem, cuaca panas puncak, dan durasi ibadah panjang bagi jamaah berusia tinggi. Asuransi perjalanan haji khusus dirancang untuk profil itu: cakupan rawat inap dan poliklinik di Saudi, evakuasi medis bila diperlukan, kecelakaan selama rangkaian, serta sebagian kerugian pembatalan bila jamaah tidak mampu melanjutkan rangkaian karena alasan medis.\n\nPenting dipahami dengan jujur: asuransi haji khusus tidak menjamin semua skenario, dan sebagian risiko (misalnya keterlambatan akibat manajemen keramaian resmi) ada di luar cakupan apa pun. Polis dibaca bersama Anda sebelum dibeli — hal yang tidak dilakukan penjual asuransi biasa — supaya jamaah tahu persis apa yang dilindungi.",
    features: [
      "Cakupan medis Saudi sesuai profil risiko haji",
      "Evakuasi medis darurat",
      "Kecelakaan selama rangkaian ibadah",
      "Sebagian proteksi pembatalan karena medis",
      "Pembacaan polis bersama sebelum pembelian",
    ],
    process: [
      "Konsultasi profil risiko jamaah",
      "Rekomendasi polis yang sesuai + pembacaan bersama",
      "Penerbitan polis sebelum keberangkatan",
      "Dukungan klaim via kanal resmi saat dibutuhkan",
    ],
    priceNote:
      "Mulai Rp 900 ribu–2,8 juta per jamaah tergantung usia dan cakupan; usia lanjut memiliki tarif khusus.",
    priceFrom: 900000,
    faqs: [
      {
        q: "Apakah visa haji sudah termasuk asuransi?",
        a: "Visa umrah menyertakan asuransi terikat; untuk visa haji, cakupannya berbeda dan biasanya dasar — polis tambahan memberi perlindungan yang lebih realistis untuk musim haji.",
      },
      {
        q: "Apakah penyakit bawaan ditanggung?",
        a: "Tergantung polis — sebagian polis menanggung akutisasi penyakit bawaan dengan batas tertentu, sebagian tidak. Pembacaan polis bersama memastikan Anda tidak keliru harapan.",
      },
    ],
    keywords: ["asuransi haji khusus", "asuransi musim haji", "evakuasi medis haji", "polis haji furoh"],
  },
  {
    slug: "penyimpanan-bagasi-musim-haji",
    name: "Penyimpanan Bagasi Musim Haji",
    categorySlug: "haji-khusus",
    shortDesc:
      "Titip koper berat di Makkah saat ke Mina — ambil kembali saat selesai tasyriq. Koper Anda tidak ikut memenuhi tenda.",
    longDesc:
      "Aturan praktis haji: barang berat tidak dibawa ke Mina. Namun banyak jamaah tetap menyeret koper besar karena tidak tahu ke mana menitipkannya dengan aman. Layanan penyimpanan bagasi mengambil koper Anda dari hotel Makkah, menyimpannya di gudang aman ber-AC selama hari-hari tasyriq, dan mengirimkannya kembali ke hotel (atau langsung ke bandara) saat Anda selesai haji.\n\nSistem nomor tag dan foto kondisi koper saat diterima memastikan tidak ada salah serah terima di tengah keramaian. Untuk rombongan, pengambilan dilakukan terpusat lewat koordinator — satu kali serah terima untuk seluruh grup, jauh lebih tertib.",
    features: [
      "Pengambilan koper dari hotel Makkah",
      "Gudang aman ber-AC selama tasyriq",
      "Nomor tag + foto kondisi saat diterima",
      "Pengiriman kembali ke hotel/bandara",
      "Pengambilan terpusat untuk rombongan",
    ],
    process: [
      "Jadwalkan pengambilan sehari sebelum ke Mina",
      "Serah terima dengan tag dan foto kondisi",
      "Penyimpanan aman selama hari-hari haji",
      "Pengiriman kembali sesuai perencanaan",
    ],
    priceNote: "Mulai Rp 250 ribu per koper untuk penyimpanan periode tasyriq penuh.",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah barang berharga aman disimpan?",
        a: "Dokumen dan barang berharga sebaiknya tetap dibawa (tas kecil ikut ke Mina). Layanan ini untuk koper pakaian dan barang tidak berharga — pembagian ini dijelaskan saat penjemputan.",
      },
      {
        q: "Bisakah dikirim langsung ke bandara?",
        a: "Bisa, dengan biaya tambahan transportasi. Pilihan populer: koper menunggu di bandara saat Anda pulang dari Makkah — tidak perlu membukanya lagi.",
      },
    ],
    keywords: ["titip koper haji", "penyimpanan bagasi makkah", "bagasi musim haji", "luggage storage haji"],
  },
  {
    slug: "paket-wukuf-arafah-premium",
    name: "Paket Wukuf Arafah Premium",
    categorySlug: "haji-khusus",
    shortDesc:
      "Kenyamanan wukuf di Arafah: tenda ber-AC, makan & minum terjaga, akses toilet bersih, dan strategi doa — hari puncak haji dengan persiapan maksimal.",
    longDesc:
      "Wukuf adalah inti haji — dan hari yang paling menguji fisik. Paket wukuf premium mempersiapkannya serius: tenda Arafah ber-AC dengan kursi dan alas tidur nyaman, makanan dan minuman tersedia sepanjang hari (kebiasaan jamaah Indonesia: tidak wajib puasa, banyak yang makan supaya kuat berdoa), akses toilet bersih dengan antrean singkat, dan strategi doa yang dipandu ustadz — dari doa selepas Zuhur sampai menjelang Magrib.\n\nYang sering diremehkan adalah manajemen air dan panas: paket premium memastikan air minum dingin tersedia, es cukup, dan jadwal pergerakan keluar-tender tidak di jam terpanas. Detail ini menjaga jamaah tetap berdiri kuat berdoa di akhir hari — bukan tumbang sebelum waktu wukuf berakhir.",
    features: [
      "Tenda Arafah ber-AC dengan alas tidur nyaman",
      "Makan & minum tersedia sepanjang hari wukuf",
      "Akses toilet bersih dengan antrean singkat",
      "Panduan doa wukuf oleh ustadz pendamping",
      "Manajemen air, es, dan jadwal panas",
    ],
    process: [
      "Pemesanan bersama paket kamp Mina (satu operator)",
      "Briefing strategi wukuf sebelum hari-H",
      "Operasional penuh selama hari wukuf",
      "Koordinasi perpindahan ke Muzdalifah sesuai jadwal",
    ],
    priceNote:
      "Termasuk dalam paket kamp Mina premium; bila dijual terpisah mulai USD 700–1.200 per jamaah.",
    priceFrom: 11000000,
    faqs: [
      {
        q: "Apakah wajib puasa di Arafah untuk jamaah haji?",
        a: "Tidak — jamaah yang sedang berhaji dianjurkan TIDAK berpuasa di Arafah agar kuat berdoa. Puasa Arafah berpahala bagi yang tidak sedang berhaji. Ini dijelaskan tegas di briefing paket.",
      },
      {
        q: "Bisakah paket ini dibeli terpisah dari PIHK?",
        a: "Sebagian operator menjual kamp Arafah/Mina terpisah, namun koordinasinya jauh lebih mulus bila satu paket dengan penyelenggara rangkaian haji Anda.",
      },
    ],
    keywords: ["paket wukuf arafah", "tenda arafah AC", "wukuf premium", "persiapan arafah haji"],
  },
  {
    slug: "panduan-tasyriq-udzur",
    name: "Panduan Tasyriq & Udzur (Digital)",
    categorySlug: "haji-khusus",
    shortDesc:
      "Panduan digital hari-hari tasyriq dan udzur haji: apa yang boleh dilonggarkan saat sakit/haid/tertunggu, langkah demi langkah dalam bahasa Indonesia.",
    longDesc:
      "Hari-hari tasyriq penuh skenario: jamaah sakit, haid tiba, tertinggal rombongan, kelelahan ekstrem. Panduan digital ini menyusun jawaban fiqih praktis untuk skenario terbanyak — dalam bahasa Indonesia yang lugas, dengan langkah konkret (bukan teori): apa yang dilakukan hari ini, apa yang diganti saat qada, kapan perlu menyembelih dam, dan kapan cukup melakukan apa adanya.\n\nMateri ditulis bersama ustadz pendamping haji berpengalaman memandu ribuan jamaah, disusun per hari (8 Dzulhijjah sampai 13 Dzulhijjah) per skenario. Format digital ringan: bisa dibaca offline di ponsel, dicari cepat saat dibutuhkan di tenda, dan diperbarui tiap musim haji sesuai pengalaman lapangan terbaru.",
    features: [
      "Disusun per hari: 8–13 Dzulhijjah",
      "Skenario udzur: sakit, haid, tertinggal, kelelahan",
      "Langkah konkret, bukan teori panjang",
      "Bisa dibaca offline di ponsel",
      "Diperbarui tiap musim haji",
    ],
    process: [
      "Beli dan terima akses digital",
      "Baca bagian persiapan sebelum berangkat",
      "Gunakan per hari selama rangkaian haji",
      "Tanya jawab via grup pendamping hingga selesai",
    ],
    priceNote: "Rp 199 ribu per akun — berlaku seumur edisi musim haji saat ini.",
    priceFrom: 199000,
    faqs: [
      {
        q: "Apakah panduan ini menggantikan ustadz?",
        a: "Tidak — ini penguat. Untuk keputusan fiqih besar (damp, qada), selalu konsultasikan ke mutawif/ustadz pendamping Anda; panduan ini membuat Anda bertanya dengan tepat.",
      },
      {
        q: "Bisakah dibagikan ke seluruh rombongan?",
        a: "Ada lisensi grup dengan harga khusus per rombongan — hubungi kami untuk pengaturan akses grup.",
      },
    ],
    keywords: ["panduan tasyriq", "udzur haji", "fiqih haji praktis", "panduan haji digital", "dam haji"],
  },
  {
    slug: "transfer-bandara-jeddah-makkah-haji",
    name: "Transfer Bandara Jeddah–Makkah Musim Haji",
    categorySlug: "haji-khusus",
    shortDesc:
      "Transfer bandara Jeddah ke Makkah periode haji dengan izin khusus: kendaraan berizin, jadwal sesuai visa haji, tanpa drama terminal campuran.",
    longDesc:
      "Periode haji, perjalanan bandara Jeddah–Makkah diatur ketat: kendaraan reguler tidak boleh mengangkut jamaah haji, dan jalur masuk Makkah memiliki gerbang khusus per status. Layanan transfer musim haji menyediakan kendaraan berizin haji dengan pengemudi yang paham gerbang dan prosedur — dari terminal haji sampai hotel Makkah Anda, termasuk koordinasi bila tiba di jam padat.\n\nUntuk rombongan besar dengan banyak bagasi, digunakan bus berizin dengan handling bagasi. Perjalanan pulang (Makkah–Jeddah) juga diatur dengan buffer waktu yang aman untuk ketertiban musim haji — jamaah pulang dengan tenang, bukan terburu-buru di ujung trip.",
    features: [
      "Kendaraan berizin musim haji",
      "Pengemudi paham gerbang & prosedur haji",
      "Handling bagasi untuk rombongan",
      "Buffer waktu aman untuk perjalanan pulang",
      "Koordinasi jam padat",
    ],
    process: [
      "Konfirmasi jadwal tiba/berangkat + jumlah jamaah",
      "Penempatan kendaraan berizin",
      "Penjemputan di terminal sesuai status visa haji",
      "Transfer pulang dengan buffer aman",
    ],
    priceNote:
      "Mulai USD 350/van dan USD 950/bus per trip periode haji; harga dinamis menjelang puncak.",
    priceFrom: 5500000,
    faqs: [
      {
        q: "Kenapa tidak bisa pakai taksumi/Grab biasa saat haji?",
        a: "Pada periode haji, angkutan jamaah wajib kendaraan berizin khusus. Aplikasi biasa umumnya menolak atau tidak diizinkan melewati gerbang jamaah haji.",
      },
      {
        q: "Bisakah menunggu grup yang terlambat di bandara?",
        a: "Bisa dengan biaya menunggu per jam — sebaiknya sampaikan estimasi sejak awal agar pengemudi menyesuaikan jadwalnya.",
      },
    ],
    keywords: ["transfer haji jeddah makkah", "kendaraan izin haji", "bus haji bandara", "transport musim haji"],
  },
  {
    slug: "medis-siap-siaga-rombongan-haji",
    name: "Medis Siap Siaga Rombongan Haji",
    categorySlug: "haji-khusus",
    shortDesc:
      "Tenaga kesehatan siap siaga untuk rombongan haji: pemeriksaan rutin harian, penanganan dehidrasi/panas, dan koordinasi rujukan — kepercayaan keluarga di tanah suci.",
    longDesc:
      "Rombongan haji dengan banyak lansia membutuhkan tenaga kesehatan yang siap siaga — bukan hanya asuransi. Layanan menempatkan perawat/dokter Indonesia di sisi rombongan Anda: pemeriksaan rutin pagi (tensi, gula, keluhan harian), manajemen obat rutin lansia, penanganan cepat dehidrasi dan heat exhaustion yang paling sering menjatuhkan jamaah, serta koordinasi rujukan ke fasilitas kesehatan resmi haji bila diperlukan.\n\nUntuk rombongan besar, satu tenaga medis melayani 40–60 jamaah dengan pos siaga di tenda/hotel. Rekaman kondisi harian dikirim ke koordinator — keluarga di Indonesia bisa memantau secara tenang. Kombinasi ideal: tenaga medis siap siaga + asuransi medis + rencana rujukan.",
    features: [
      "Perawat/dokter Indonesia siap siaga rombongan",
      "Pemeriksaan rutin harian (tensi, gula, keluhan)",
      "Manajemen obat rutin lansia",
      "Penanganan cepat dehidrasi & kelelahan panas",
      "Koordinasi rujukan ke fasilitas resmi haji",
    ],
    process: [
      "Profil kesehatan rombongan sebelum berangkat",
      "Penempatan tenaga medis sesuai rasio",
      "Pos siaga + pemeriksaan harian selama haji",
      "Rujukan terkoordinasi bila diperlukan",
    ],
    priceNote:
      "Mulai USD 1.200–2.500 per tenaga medis untuk periode haji penuh (dibagi anggota rombongan).",
    priceFrom: 19000000,
    faqs: [
      {
        q: "Apakah tenaga medis ini pengganti fasilitas kesehatan resmi haji?",
        a: "Tidak — ia lapisan pertama. Fasilitas resmi haji tetap rujukan utama untuk kasus serius; tenaga medis rombongan membuat penanganan awal cepat dan rujukan tepat.",
      },
      {
        q: "Dokternya siapa?",
        a: "Tenaga kesehatan Indonesia (perawat/dokter) yang berpengalaman mendampingi jamaah, dengan penempatan lewat operator resmi yang memiliki izin bekerja selama musim haji.",
      },
    ],
    keywords: ["tenaga medis rombongan haji", "dokter pendamping haji", "medis mina arafah", "kesehatan jamaah haji"],
  },
];
