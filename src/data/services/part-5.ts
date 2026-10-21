import type { Service } from "./types";

/**
 * PART 5 — layanan pelengkap lintas kategori (12 layanan)
 * untuk menutup celah yang paling sering ditanyakan jamaah.
 */
export const servicesPart5: Service[] = [
  {
    slug: "upgrade-kelas-bisnis-umrah",
    name: "Upgrade Kelas Bisnis Umrah",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Upgrade tiket umrah ke kelas bisnis: istirahat layak di udara, prioritas bagasi, dan lounge bandara — tiba di Tanah Suci dengan tenaga penuh.",
    longDesc:
      "Penerbangan menuju Tanah Suci biasanya ditempuh dengan kelas ekonomi — wajar untuk menghemat, namun bagi jamaah lansia atau yang punya masalah punggung, 8–10 jam duduk bisa menguras tenaga sebelum ibadah dimulai. Upgrade ke kelas bisnis memberi kursi yang rebah penuh, makan yang layak, prioritas boarding, dan akses lounge — jamaah tiba dengan kondisi prima.\n\nUpgrade tersedia dua jalur: upgrade sejak penerbitan tiket (harga paling stabil) atau bid upgrade menjelang keberangkatan (kadang jauh lebih murah, tidak terjamin). Tim mengawasi keduanya dan merekomendasikan jalur yang paling menguntungkan untuk tanggal Anda. Untuk grup, upgrade selektif per jamaah (misalnya hanya lansia) juga bisa diatur.",
    features: [
      "Kursi rebah penuh — tiba dengan tenaga penuh",
      "Prioritas boarding & bagasi lebih banyak",
      "Akses lounge bandara",
      "Opsi upgrade sejak terbit atau bid menjelang",
      "Upgrade selektif per jamaah untuk grup",
    ],
    process: [
      "Sebutkan nomor booking dan preferensi upgrade",
      "Tim cek harga upgrade & peluang bid",
      "Konfirmasi pilihan termurah yang tersedia",
      "Tiket baru diterbitkan / upgrade dikonfirmasi",
    ],
    priceNote:
      "Mulai Rp 9–20 juta per pax one-way ekonomi→bisnis tergantung maskapai dan musim; bid mulai jauh lebih rendah.",
    priceFrom: 9000000,
    faqs: [
      {
        q: "Kapan waktu terbaik menawar bid upgrade?",
        a: "Umumnya 48–24 jam sebelum keberangkatan saat maskapai membuka jendela bid. Peluang diterima lebih tinggi pada penerbangan yang belum penuh kelas bisnisnya.",
      },
      {
        q: "Apakah upgrade bisnis termasuk layanan ekstra bagasi?",
        a: "Ya, kelas bisnis umumnya memberi jatah bagasi lebih besar (40–50 kg di kebanyakan maskapai rute Indonesia–Saudi) plus prioritas penanganan.",
      },
    ],
    keywords: ["upgrade bisnis umrah", "tiket bisnis ke jeddah", "bid upgrade maskapai", "kelas bisnis umrah"],
  },
  {
    slug: "hotel-apartemen-jamaah-keluarga",
    name: "Apartemen Jamaah untuk Keluarga",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Sewa apartemen berdapur di Makkah/Madinah untuk keluarga: ruang luas, bisa memasak sendiri, dan tarif lebih hemat untuk tinggal panjang.",
    longDesc:
      "Untuk keluarga yang berumrah panjang (2–4 minggu) atau rombongan besar yang ingin menghemat, apartemen jamaah adalah alternatif hotel yang sering lebih unggul: ruang tamu yang luas, dapur untuk memasak sendiri, kamar lebih banyak per unit, dan mesin cuci — kebutuhan nyata untuk tinggal lama dengan anak-anak.\n\nPilihan unit disaring ketat: hanya di wilayah aman dan dekat transportasi ke Haram (atau berjalan kaki untuk yang dekat), dengan pemilik yang berpengalaman menerima jamaah Indonesia. Foto unit, fasilitas, dan aturan rumah dikirim transparan sebelum booking — termasuk estimasi biaya listrik/AC yang di Saudi kadang dihitung terpisah.",
    features: [
      "Unit berdapur penuh — bisa memasak sendiri",
      "Ruang luas untuk keluarga besar",
      "Mesin cuci untuk tinggal panjang",
      "Lokasi tersaring: aman & akses Haram baik",
      "Estimasi biaya utilitas transparan sejak awal",
    ],
    process: [
      "Sebutkan durasi, jumlah orang, dan budget",
      "Terima 2–3 opsi unit dengan foto & fasilitas",
      "Booking dengan kontrak sewa yang jelas",
      "Check-in dibantu koordinator lokal",
    ],
    priceNote:
      "Mulai Rp 900 ribu–2,5 juta per malam per unit (2–3 kamar) tergantung lokasi & musim — hemat 30–50% dibanding kamar hotel setara.",
    priceFrom: 900000,
    faqs: [
      {
        q: "Apakah apartemen lebih murah dari hotel?",
        a: "Untuk tinggal panjang dan rombongan besar — hampir selalu ya, karena tarif per orang jauh lebih rendah dan bisa memasak sendiri. Untuk tinggal 3–5 hari, hotel dekat Haram biasanya lebih praktis.",
      },
      {
        q: "Apakah apartemen termasuk layanan harian hotel?",
        a: "Tidak — apartemen bersifat sewa mandiri. Sebagian unit menawarkan cleaning berkala dengan biaya tambahan; hal ini bisa diatur saat booking.",
      },
    ],
    keywords: ["apartemen makkah", "sewa apartemen madinah", "penginapan keluarga umrah", "apartemen jamaah", "umrah panjang hemat"],
  },
  {
    slug: "katering-hotel-masakan-indonesia",
    name: "Katering Hotel — Masakan Indonesia",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Katering masakan Indonesia yang mengantar langsung ke hotel Makkah/Madinah — lauk hangat bergaya rumahan sepanjang hari ibadah.",
    longDesc:
      "Bukan semua jamaah cocok dengan makanan hotel Timur Tengah. Katering masakan Indonesia melayani antar ke hotel: nasi, lauk rumahan (ayam goreng, sayur lodeh, tempe, sambal), dan buah — masak jamaah Indonesia di Tanah Suci, dikirim panas sesuai jadwal makan Anda. Cocok untuk rombongan yang menginap di hotel tanpa paket makan Indonesia, atau keluarga yang ingin makan sesuai selera.\n\nMenu ditetapkan mingguan dan bisa dimodifikasi untuk kebutuhan khusus: tidak pedas untuk anak, rendah garam untuk lansia, dan menu sahur/berbuka saat musim Ramadhan. Pesanan grup (10+ orang) mendapat jadwal tetap; pesanan keluarga kecil fleksibel per hari.",
    features: [
      "Menu masakan Indonesia bergaya rumahan",
      "Antar langsung ke kamar/lobby hotel",
      "Modifikasi menu: tidak pedas, rendah garam",
      "Menu sahur & berbuka khusus Ramadhan",
      "Fleksibel per hari untuk keluarga kecil",
    ],
    process: [
      "Pilih paket makan (sarapan / 2x / 3x sehari)",
      "Konfirmasi hotel, tanggal, dan jumlah orang",
      "Menu mingguan dikirim untuk persetujuan",
      "Makan diantar sesuai jadwal sepanjang trip",
    ],
    priceNote:
      "Mulai Rp 85 ribu per porsi makan utama; paket 3x sehari mulai Rp 230 ribu/hari per orang.",
    priceFrom: 85000,
    faqs: [
      {
        q: "Apakah katering ini halal tersertifikasi?",
        a: "Seluruh bahan diperoleh dari pasar halal Makkah/Madinah dan dimasak dapur katering jamaah Indonesia — halal sejak sumbernya. Sertifikat katering resmi tersedia untuk pesanan grup besar.",
      },
      {
        q: "Bisakah pesanan terakhir menit (same-day)?",
        a: "Untuk grup ya kadang bisa dengan menu yang tersedia; untuk menu penuh sebaiknya pesan H-1. Pesanan tetap mingguan memberi kualitas dapur terbaik.",
      },
    ],
    keywords: ["katering indonesia makkah", "makanan indonesia madinah", "katering jamaah umrah", "antar makan hotel makkah"],
  },
  {
    slug: "kursus-tahsin-pra-umrah",
    name: "Kursus Tahsin Pra-Umrah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Perbaiki bacaan Al-Qur'an sebelum berumrah: tahsin privat online 8 sesi — agar tawaf, doa, dan tilawah di Haram lebih berkualitas.",
    longDesc:
      "Umrah adalah momen tilawah dan doa di tempat terbaik — namun banyak jamaah merasa bacaannya belum layak untuk dipraktikkan di depan Ka'bah. Kursus tahsin privat pra-umrah menyiapkan bacaan Anda: makharij huruf, sifat huruf, tajwid praktis, dan praktik baca doa-doa umrah — dalam 8 sesi online privat dengan pengajar ijazah.\n\nKurikulum disesuaikan target: bila keberangkatan 2 bulan lagi, fokus perbaikan yang paling mengganggu; bila 6 bulan, perbaikan menyeluruh. Materi doa umrah dibaca langsung dalam konteks ritual (tawaf, sa'i, di maqam Ibrahim) sehingga saat tiba di Tanah Suci, bacaan Anda sudah otomatis.",
    features: [
      "8 sesi privat online dengan pengajar ijazah",
      "Makharij & tajwid praktis, bukan teori berat",
      "Praktik doa umrah dalam konteks ritual",
      "Jadwal fleksibel pagi/sore/malam",
      "Evaluasi bacaan sebelum keberangkatan",
    ],
    process: [
      "Tes bacaan awal untuk memetakan kebutuhan",
      "8 sesi privat sesuai jadwal Anda",
      "Praktik doa-doa umrah per konteks",
      "Evaluasi akhir & saran latihan lanjutan",
    ],
    priceNote: "Rp 950 ribu untuk paket 8 sesi privat (sekali bayar per jamaah).",
    priceFrom: 950000,
    faqs: [
      {
        q: "Apakah cocok untuk yang belum bisa baca Arab sama sekali?",
        a: "Untuk pemula total, kurikulum diawali iqra terpandu dan waktu yang dibutuhkan lebih panjang — tim akan menyesuaikan target realistis dengan jadwal keberangkatan Anda.",
      },
      {
        q: "Bisakah satu keluarga ikut bersama?",
        a: "Bisa dengan format semi-privat (maks 3 orang selevel bacaan) dengan biaya tambahan kecil per orang tambahan.",
      },
    ],
    keywords: ["tahsin online", "kursus quran pra umrah", "perbaikan bacaan umrah", "tajwid praktis jamaah"],
  },
  {
    slug: "esim-saudi-aktif-instal",
    name: "eSIM Saudi — Aktif Sebelum Terbang",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "eSIM Saudi yang aktif sebelum keberangkatan: QR code dikirim ke email, langsung terhubung saat mendarat — tanpa antre SIM fisik di bandara.",
    longDesc:
      "eSIM menghilangkan langkah paling melelahkan saat tiba: antre beli SIM di bandara dengan ponsel baterai kritis. eSIM Saudi dikirim sebagai QR code ke email Anda sebelum terbang — pasang di rumah, dan saat mendarat di Jeddah/Madinah ponsel otomatis terhubung jaringan lokal (STC/Mobily/Zain).\n\nPaket tersedia dari 3 GB hingga unlimited harian, berlaku 7–30 hari. Kompatibilitas ponsel dicek sejak awal (iPhone XR ke atas, sebagian Android flagship/menengah). Untuk ponsel tanpa eSIM, tetap tersedia opsi SIM fisik yang dikirim ke alamat Indonesia sebelum keberangkatan — langkah yang sama nyamannya.",
    features: [
      "QR code dikirim sebelum keberangkatan",
      "Otomatis terhubung saat mendarat",
      "Paket 3 GB s.d. unlimited, 7–30 hari",
      "Cek kompatibilitas ponsel sejak awal",
      "Opsi SIM fisik dikirim ke rumah bila tak support eSIM",
    ],
    process: [
      "Pilih paket data sesuai durasi trip",
      "Terima QR code via email + panduan pasang",
      "Pasang eSIM di rumah (set sekunder)",
      "Mendarat — data aktif otomatis",
    ],
    priceNote: "Mulai Rp 95 ribu untuk 3 GB/7 hari; unlimited harian mulai Rp 55 ribu/hari.",
    priceFrom: 95000,
    faqs: [
      {
        q: "Apakah eSIM bisa dipakai menelepon ke Indonesia?",
        a: "eSIM data umumnya data-only — untuk menelepon gunakan WhatsApp/telepon-VoIP via data, atau tambahkan nomor lokal sebagai fitur tertentu. Untuk panggilan rutin keluarga, WhatsApp sudah sangat cukup.",
      },
      {
        q: "Apakah eSIM berfungsi juga di Makkah dan Madinah?",
        a: "Ya — jaringan STC/Mobily/Zain menjangkau penuh dua kota suci termasuk area masjid, dengan kecepatan terbaik di luar jam keramaian puncak.",
      },
    ],
    keywords: ["esim saudi", "esim umrah", "internet tanah suci", "esim jeddah", "data umrah murah"],
  },
  {
    slug: "refund-garansi-pembatalan-umrah",
    name: "Garansi Refund Pembatalan Umrah",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Lindungi dana umrah Anda: produk garansi pembatalan yang mengembalikan sebagian besar dana bila keberangkatan batal karena hal tak terduga.",
    longDesc:
      "Ketakutan terbesar calon jamaah: membayar lunas lalu terpaksa batal — sakit, musibah keluarga, atau urusan tak terduga — dan dana hangus sesuai tabel pembatalan penyelenggara. Produk garansi pembatalan mengambil risiko itu: dengan biaya sekali (biasanya 4–7% dari nilai paket), bila Anda batal karena alasan yang dicakup, sebagian besar dana (hingga 90–100% sesuai produk) kembali ke Anda.\n\nPenting dibaca dengan jujur: tidak ada garansi yang mencakup SEMUA alasan batal, dan syarat dokumen (surat dokter, dsb) tetap berlaku. Tim membantu membandingkan produk garansi yang tersedia dan membaca syaratnya bersama Anda sebelum membeli — jadi keputusannya berdasar pemahaman, bukan janji manis.",
    features: [
      "Pengembalian hingga 90–100% dana sesuai produk",
      "Cakupan batal karena sakit & musibah keluarga",
      "Pembacaan syarat bersama sebelum membeli",
      "Proses klaim didampingi via kanal resmi",
      "Cocok dipadukan dengan escrow penyelenggara",
    ],
    process: [
      "Sebutkan nilai paket dan profil risiko",
      "Terima perbandingan produk garansi",
      "Baca syarat bersama, pilih produk",
      "Polis/garansi diterbitkan sebelum bayar paket",
    ],
    priceNote: "4–7% dari nilai paket umrah; contoh paket Rp 25 juta → garansi Rp 1–1,75 juta.",
    priceFrom: 1000000,
    faqs: [
      {
        q: "Apakah semua alasan pembatalan ditanggung?",
        a: "Tidak semua — alasan yang dicakup umumnya sakit (dengan surat dokter), musibah, dan kepergian keluarga inti. Batal karena berubah pikiran biasanya di luar cakupan apa pun. Syarat dibaca bersama sebelum membeli.",
      },
      {
        q: "Berapa lama proses refund berjalan?",
        a: "Umumnya 14–30 hari kerja setelah dokumen klaim lengkap, tergantung penyedia garansi. Tim mendampingi pengajuan sampai dana masuk.",
      },
    ],
    keywords: ["garansi refund umrah", "asuransi pembatalan umrah", "refund paket umrah", "lindungi dana umrah"],
  },
  {
    slug: "kunci-hotel-harga-tahun-depan",
    name: "Kunci Harga Hotel Tahun Depan",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Booking hotel Tanah Suci untuk keberangkatan tahun depan dengan harga hari ini — lindungi diri dari kenaikan harga musiman yang tajam.",
    longDesc:
      "Harga hotel Makkah naik tajam tiap tahun — musim Ramadhan dan liburan sekolah bisa naik 60–100% dalam satu tahun. Kunci harga hotel tahun depan berarti membayar (atau menyetor sebagian) hari ini untuk tanggal keberangkatan tahun depan: hotel mengunci tarif, dan Anda tidak terkena kenaikan apa pun.\n\nProduk ini cocok untuk jamaah yang sudah pasti tanggalnya (misalnya tiap Ramadhan), komunitas yang menyusun rombongan tahunan, dan keluarga yang menganggarkan umrah jangka panjang. Ketentuan perubahan tanggal dan pembatalan dijelaskan tertulis sejak awal — fleksibilitas yang wajar tetap dijaga.",
    features: [
      "Harga terkunci hari ini untuk keberangkatan tahun depan",
      "Terlindung dari kenaikan musiman 60–100%",
      "Fleksibilitas ubah tanggal dalam batas tertentu",
      "Cocok untuk rombongan komunitas tahunan",
      "Ketentuan tertulis jelas sejak awal",
    ],
    process: [
      "Tentukan hotel target dan perkiraan tanggal",
      "Penawaran harga terkunci + ketentuan",
      "Bayar deposit atau lunas sesuai pilihan",
      "Konfirmasi booking saat mendekati tanggal",
    ],
    priceNote:
      "Deposit mulai 30% dari nilai booking; pelunasan mengikuti jadwal yang disepakati (biasanya H-60).",
    faqs: [
      {
        q: "Bagaimana bila tanggal keberangkatan berubah?",
        a: "Perubahan tanggal dalam periode yang sama (misalnya pindah minggu di bulan yang sama) umumnya gratis bila kamar tersedia; perubahan musim disesuaikan selisih tarif. Ketentuannya tertulis sejak awal.",
      },
      {
        q: "Apakah deposit bisa hangus?",
        a: "Bila pembatalan sesuai ketentuan (misalnya H-90), deposit dikembalikan atau dialihkan ke booking lain. Hangus hanya bila batal di luar ketentuan yang sudah disepakati.",
      },
    ],
    keywords: ["kunci harga hotel makkah", "booking hotel tahun depan", "harga hotel ramadhan", "hemat hotel tanah suci"],
  },
  {
    slug: "paket-sahur-berbuka-makkah",
    name: "Paket Sahur & Berbuka di Makkah",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Paket sahur & berbuka Ramadhan di Makkah/Madinah: dikirim ke hotel tepat waktu, menu Indonesia, dan energi ibadah malam terjaga.",
    longDesc:
      "Berumrah di Ramadhan berarti mengatur energi ibadah malam (tarwih, tawaf malam) dengan makan yang tepat waktu — di tengah keramaian yang membuat mencari makan menjadi petualangan berisiko. Paket sahur & berbuka mengatur keduanya: berbuka dikirim sebelum Magrib (kurma, buah, minuman hangat, makanan berenergi), sahur dikirim dini hari (nasi, lauk, air).\n\nJadwal pengiriman mengikuti kalender imsakiyah setempat dan menyesuaikan pergeseran hari demi hari. Untuk rombongan, pengiriman terkoordinasi per lantai/kamar agar semua menerima makanan bersamaan — detail penting saat jamaah harus bergegas ke masjid untuk tarwih.",
    features: [
      "Berbuka terkirim sebelum Magrib",
      "Sahur terkirim dini hari sesuai imsak",
      "Menu Indonesia dengan porsi berenergi",
      "Koordinasi pengiriman per lantai untuk rombongan",
      "Air dan kurma selalu tersedia di kamar",
    ],
    process: [
      "Pesan untuk rentang tanggal Ramadhan Anda",
      "Konfirmasi hotel dan jumlah kamar",
      "Menu mingguan disepakati",
      "Pengiriman tepat waktu sepanjang Ramadhan",
    ],
    priceNote:
      "Mulai Rp 175 ribu/hari per orang untuk paket sahur + berbuka; diskon untuk rombongan 20+ orang.",
    priceFrom: 175000,
    faqs: [
      {
        q: "Apakah bisa pesan hanya berbuka saja?",
        a: "Bisa — paket berbuka saja mulai Rp 110 ribu/hari. Banyak jamaah memilih gabungan karena sahur dini hari paling sulit dicari sendiri.",
      },
      {
        q: "Bagaimana dengan hari-hari sangat padat di Haram?",
        a: "Pengiriman tetap berjalan ke hotel (bukan ke masjid) dengan jalur dapur yang berpengalaman Ramadhan — makan menunggu di kamar, bukan Anda antre mencarinya.",
      },
    ],
    keywords: ["paket sahur makkah", "berbuka umrah ramadhan", "katering ramadhan madinah", "sahur berbuka jamaah"],
  },
  {
    slug: "paspor-bianka-percepatan",
    name: "Bantuan Paspor — Percepatan & Pendampingan",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pendampingan pembuatan/perpanjangan paspor: pengisian form, jadwal antrean, dan opsi percepatan — persiapan dokumen inti umrah tanpa pusing.",
    longDesc:
      "Paspor adalah dokumen inti umrah — tanpa paspor valid minimal 6 bulan, tidak ada visa yang bisa diproses. Layanan ini mendampingi proses paspor di kantor imigrasi: pengisian form online yang benar, pemilihan slot antrean, kelengkapan dokumen persyaratan, dan pendampingan hari-H — termasuk opsi layanan percepatan yang tersedia di beberapa kanwil untuk kebutuhan mendesak.\n\nUntuk keluarga dengan anak, pendampingan memastikan dokumen anak lengkap (akta kelahiran, kartu keluarga) dan paspor anak diterbitkan sekali jalan. Untuk jamaah lansia, pendamping membantu proses antre dan pengambilan. Paspor selesai, proses visa bisa langsung jalan.",
    features: [
      "Pengisian form online yang benar sejak awal",
      "Pemilihan slot antrean terbaik",
      "Pendampingan hari-H di kantor imigrasi",
      "Opsi percepatan bila tersedia di kanwil Anda",
      "Khusus keluarga: dokumen anak sekali jalan",
    ],
    process: [
      "Konsultasi status paspor dan tanggal keberangkatan",
      "Pengisian form + pengumpulan syarat",
      "Pendampingan hari-H",
      "Paspor terbit — lanjut proses visa",
    ],
    priceNote:
      "Biaya resmi paspor 48 halaman reguler Rp 650 ribu (percepatan lebih); biaya pendampingan mulai Rp 350 ribu/orang.",
    priceFrom: 350000,
    faqs: [
      {
        q: "Apakah layanan ini menjamin paspor cepat terbit?",
        a: "Proses paspor dijalankan otoritas imigrasi — kami memastikan form benar, slot terbaik, dan dokumen lengkap supaya tidak ada putaran ulang. Percepatan hanya bila kanal resmi di kanwil Anda menyediakannya.",
      },
      {
        q: "Berapa lama paspor biasanya terbit?",
        a: "Reguler umumnya 5–10 hari kerja setelah proses; percepatan bisa 2–3 hari kerja di kanwil tertentu. Rencanakan minimal sebulan sebelum keberangkatan.",
      },
    ],
    keywords: ["bantuan paspor umrah", "percepatan paspor", "buat paspor cepat", "pendampingan imigrasi"],
  },
  {
    slug: "edukasi-fiqih-wanita-umrah",
    name: "Edukasi Fiqih Wanita Umrah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Kelas khusus fiqih wanita umrah online: ihram wanita, haid saat umrah, aturan nikab/kaos kaki, dan skenario lapangan — dijelaskan ustadzah.",
    longDesc:
      "Fiqih wanita punya detail yang jarang dibahas tuntas di manasik campuran: niat ihram wanita dan warna pakaian, hukum nikab dan sarung tangan, berjaga haid pada saat tawaf, waktu-waktu yang lebih nyaman untuk wanita di Haram, dan etika beribadah di area wanita. Kelas online 2 sesi ini diampu ustadzah yang berpengalaman memandu rombongan wanita — bukan teori umum, tapi jawaban untuk pertanyaan nyata yang selalu muncul.\n\nMateri digital disertakan untuk dibaca ulang, dan grup tanya jawab tetap terbuka hingga keberangkatan. Kelas ini ideal diikuti 1–2 bulan sebelum keberangkatan — cukup dekat untuk diingat, cukup awal untuk menyiapkan perlengkapan yang disarankan.",
    features: [
      "2 sesi online privat dengan ustadzah",
      "Fiqih ihram, nikab, dan perlengkapan wanita",
      "Panduan haid saat umrah — skenario lengkap",
      "Tips waktu & area ibadah nyaman untuk wanita",
      "Materi digital + grup tanya jawab",
    ],
    process: [
      "Booking jadwal 2 sesi",
      "Sesi 1: ihram, perlengkapan, tata ibadah",
      "Sesi 2: skenario haid & situasional",
      "Grup tanya jawab hingga berangkat",
    ],
    priceNote: "Rp 450 ribu per peserta (bisa semi-privat maks 4 teman sekelas).",
    priceFrom: 450000,
    faqs: [
      {
        q: "Apakah kelas ini hanya untuk wanita?",
        a: "Ya — kelas ini khusus peserta wanita agar bebas bertanya detail yang sulit ditanyakan di forum campuran. Pendamping suami yang ingin ikut memahami bisa menyimak rekaman ringkasannya.",
      },
      {
        q: "Bila haid tiba saat sudah di Makkah, bagaimana?",
        a: "Skenario ini dibahas lengkap di sesi 2: ibadah yang tetap sah, waktu menunggu, dan langkah bila kondisi berlarut. Anda akan tahu persis apa yang dilakukan tanpa panik.",
      },
    ],
    keywords: ["fiqih wanita umrah", "kelas umrah wanita", "haid saat umrah", "ihram wanita", "ustadzah manasik"],
  },
  {
    slug: "watch-smartcard-nusuk-setup",
    name: "Setup Smartwatch & Kartu Nusuk",
    categorySlug: "digital-tools",
    shortDesc:
      "Aktivasi smartwatch/smartcard Nusuk untuk jamaah: tawaf & sa'i terekam otomatis, akses area khusus, dan data ibadah tercatat resmi di aplikasi.",
    longDesc:
      "Ekosistem digital Nusuk memperluas dari ponsel ke smartwatch dan smartcard: gelang/jam pintar yang terhubung akun Nusuk merekam tawaf dan sa'i secara otomatis, memberi akses masuk area tertentu, dan menyimpan riwayat ibadah Anda secara resmi. Untuk jamaah yang ingin catatan ibadahnya rapi — atau yang punya kondisi medis dengan informasi darurat tertanam — perangkat ini bernilai besar.\n\nLayanan setup meliputi: pengecekan kompatibilitas perangkat, aktivasi ke akun Nusuk Anda, sinkronisasi awal, dan panduan pemakaian di lapangan (cara memastikan data tawaf terbaca, apa yang dilakukan saat baterai habis, dan cara memindahkan data bila ganti perangkat). Dilakukan online sebelum keberangkatan — di Tanah Suci Anda cukup memakainya.",
    features: [
      "Cek kompatibilitas perangkat Anda",
      "Aktivasi ke akun Nusuk pribadi",
      "Sinkronisasi & uji awal",
      "Panduan lapangan: tawaf terbaca, baterai, ganti perangkat",
      "Dukungan online saat trip bila ada kendala",
    ],
    process: [
      "Konsultasi perangkat (jam/card) dan akun Nusuk",
      "Aktivasi & sinkronisasi online",
      "Uji bacaan data tawaf",
      "Siap pakai — terekam otomatis di Tanah Suci",
    ],
    priceNote: "Rp 250 ribu per perangkat (di luar harga perangkat bila perlu dibeli baru).",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah smartwatch apa saja bisa?",
        a: "Perangkat yang didukung ekosistem Nusuk dibatasi ke tipe-tipe tertentu — cek kompatibilitas dilakukan lebih dulu sebelum Anda membeli perangkat baru.",
      },
      {
        q: "Apakah wajib untuk umrah?",
        a: "Tidak wajib — ponsel dengan aplikasi Nusuk sudah mencukupi untuk kebanyakan kebutuhan. Smartwatch memberi kenyamanan pencatatan otomatis dan akses lebih cepat.",
      },
    ],
    keywords: ["smartwatch nusuk", "smartcard nusuk", "aktivasi nusuk watch", "tawaf otomatis terekam"],
  },
];

// ---- Tambahan penutup (melengkapi 210 layanan) ----
export const servicesPart5Extra: Service[] = [
  {
    slug: "umrah-honeymoon-pasangan-muda",
    name: "Umrah Honeymoon Pasangan Muda",
    categorySlug: "keluarga-lansia",
    shortDesc:
      "Umrah pertama bersama pasangan: kamar double berpemandangan Haram, jadwal ibadah berdua yang tenang, dan momen tawaf yang tak terlupakan.",
    longDesc:
      "Menjalani umrah pertama bersama pasangan adalah pembuka perjalanan rumah tangga yang istimewa. Paket honeymoon umrah menyusun pengalamannya dengan detail: kamar double dengan jendela menghadap Masjidil Haram bila tersedia, jadwal ibadah berdua yang tidak terburu-buru, ziarah ringan yang bisa disesuaikan mood, dan waktu luang yang cukup untuk menikmati dua kota suci tanpa agenda padat.\n\nPemandu memberi tips praktis pasangan muda: waktu tawaf yang paling tenang, area sa'i yang nyaman, dan ritme istirahat yang menjaga keduanya tetap segar sepanjang trip. Untuk yang ingin menambah momen spesial, tersedia opsi kamar upgrade, makan romantis di hotel, dan sesi foto profesional di sekitar Haram (sesuai ketentuan yang berlaku).",
    features: [
      "Kamar double pemandangan Haram bila tersedia",
      "Jadwal ibadah berdua dengan ritme santai",
      "Tips tawaf & sa'i waktu tenang untuk pasangan",
      "Opsi kamar upgrade & makan spesial di hotel",
      "Sesi foto profesional sekitar Haram (sesuai ketentuan)",
    ],
    process: [
      "Konsultasi tanggal dan preferensi kamar",
      "Penawaran paket dengan opsi pemandangan Haram",
      "Pengurusan visa, tiket, dan akomodasi",
      "Trip berdua dengan dukungan on-call pemandu",
    ],
    priceNote:
      "Mulai Rp 56 juta per pasangan (9 hari, hotel 4★); upgrade pemandangan Haram tersedia dengan selisih tarif.",
    priceFrom: 56000000,
    faqs: [
      {
        q: "Apakah kamar pemandangan Haram dijamin?",
        a: "Tersedia dengan selisih tarif dan keterbatasan jumlah kamar — dikonfirmasi tertulis saat booking. Bila penuh, tim mencarikan lantai tertinggi dengan pemandangan terbaik yang tersedia.",
      },
      {
        q: "Bisakah dibundel dengan foto profesional?",
        a: "Bisa sebagai opsi tambahan; fotografer jamaah lokal berpengalaman di sekitar Haram dengan ketentuan yang menghormati kesucian area — dijelaskan saat booking.",
      },
    ],
    keywords: ["umrah honeymoon", "umrah bulan madu", "umrah pasangan muda", "umrah berdua", "kamar pemandangan haram"],
  },
];
