import type { Service } from "./types";

/**
 * PART 1 — Kategori: visa-dokumen (17) + tiket-penerbangan (17).
 */
export const servicesPart1: Service[] = [
  // ================= KATEGORI 1: VISA & DOKUMEN PERJALANAN =================
  {
    slug: "pengurusan-visa-umrah",
    name: "Pengurusan Visa Umrah (Nusuk)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pengurusan visa umrah resmi melalui platform Nusuk dengan pendampingan dokumen hingga visa terbit — tanpa perantara yang tidak jelas identitasnya.",
    longDesc:
      "Visa umrah kini diterbitkan melalui platform resmi Nusuk milik Kementerian Haji Arab Saudi, lengkap dengan data biometrik dan asuransi terikat. Bagi jamaah yang menyusun perjalanan secara mandiri atau melalui PPIU, proses ini menuntut ketelitian: paspor minimal 6 bulan, foto biometrik sesuai standar, vaksin meningitis ber-ICC, serta data yang konsisten dengan tiket dan hotel.\n\nTim partner kami adalah agent Nusuk terdaftar yang mengurus seluruh alur — dari pembuatan akun, unggah dokumen, pembayaran biaya konsulat, sampai visa terbit dalam bentuk e-visa. Anda memantau statusnya secara transparan, dan bila ada revisi dokumen kami kabari di hari yang sama. Untuk jamaah yang berangkat bersama PPIU, layanan ini biasanya sudah termasuk dalam paket; layanan mandiri cocok untuk keluarga kecil atau rombongan yang sudah punya tiket dan hotel sendiri.",
    features: [
      "Pengurusan penuh via akun agent Nusuk terdaftar",
      "Termasuk asuransi terikat visa sesuai ketentuan Saudi",
      "Konsultasi kelengkapan paspor & vaksin meningitis ICC",
      "Monitoring status visa harian sampai e-visa terbit",
      "Revisi dokumen gratis bila ditolak karena kekeliruan format",
      "Dukungan grup 10–500 jamaah dalam satu batch",
    ],
    process: [
      "Konsultasi awal: cek masa berlaku paspor & kelengkapan vaksin",
      "Kirim scan paspor, pas foto, dan data diri melalui formulir aman",
      "Tim membuat aplikasi visa di Nusuk dan unggah biometrik",
      "Bayar biaya konsulat + fee pengurusan melalui rekening escrow",
      "Visa terbit dalam e-visa PDF — dikirim ke WhatsApp & email Anda",
    ],
    priceNote:
      "Mulai Rp 2,1 juta/jamaah (fee pengurusan + asuransi visa; biaya konsulat mengikuti kebijakan Saudi terkini)",
    priceFrom: 2100000,
    faqs: [
      {
        q: "Berapa lama visa umrah diproses?",
        a: "Di musim normal visa umrah terbit 3–5 hari kerja setelah dokumen lengkap. Saat Ramadhan dan musim puncak, antrean sistem Nusuk bisa memakan 7–14 hari — makanya kami menyarankan pengurusan mulai 45–60 hari sebelum keberangkatan.",
      },
      {
        q: "Apakah visa umrah bisa dipakai bepergian ke Riyadh atau Dammam?",
        a: "Visa umrah resmi memungkinkan jamaah berada di wilayah Arab Saudi selama masa berlakunya, namun memiliki batasan pergerakan dan durasi. Untuk rencana perjalanan yang luas (liburan bisnis atau keluarga), konsultasikan tipe visa yang tepat — jangan memaksakan visa umrah untuk tujuan non-ibadah.",
      },
      {
        q: "Kenapa ada yang bisa visa-nya murah dan ada yang mahal?",
        a: "Komponen biayanya sama: biaya konsulat, asuransi, dan platform. Yang berbeda adalah fee layanan dan tidak jarang penjual ilegal menjual 'visa murah' dengan data yang dimanipulasi — risikonya visa dicabut di imigrasi. Selalu minta bukti bahwa pengurusan dilakukan lewat akun agent Nusuk yang sah.",
      },
    ],
    keywords: [
      "visa umrah",
      "pengurusan visa umrah",
      "biaya visa umrah 2025",
      "visa umrah nusuk",
      "syarat visa umrah",
      "agent visa umrah",
    ],
  },
  {
    slug: "visa-umrah-express-48-jam",
    name: "Visa Umrah Express 48 Jam",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Layanan percepatan visa umrah untuk keberangkatan mendadak — dokumen lengkap hari ini, visa berpeluang terbit dalam 48 jam kerja di musim normal.",
    longDesc:
      "Ada jamaah yang memang harus berangkat cepat: mengantar orang tua terakhir kali, menyusul rombongan yang sudah berangkat, atau memanfaatkan cuti yang mendadak disetujui. Untuk situasi seperti ini layanan express memangkas waktu tunggu dengan slot prioritas di sistem Nusuk dan pemeriksaan dokumen secara seketika oleh petugas berpengalaman.\n\nYang menjadi syarat mutlak: paspor Anda sudah ada dan masih berlaku minimal 7 bulan, sertifikat vaksin meningitis sudah di tangan, dan pembayaran dilakukan penuh di awal. Tanpa tiga hal itu, kecepatan terbaik pun tidak bisa menolong. Kami juga menyiapkan rencana cadangan bila sistem Saudi sedang padat — Anda akan tahu sejak awal skenario terburuknya, bukan saat berada di bandara.",
    features: [
      "Slot prioritas pengajuan di sistem Nusuk",
      "Pemeriksaan dokumen instan oleh petugas senior",
      "Update status tiap 12 jam sampai visa terbit",
      "Rencana cadangan transparan bila antrean sistem padat",
      "Bisa dikombinasikan dengan tiket dengan tanggal fleksibel",
    ],
    process: [
      "Hubungi tim lewat WhatsApp dan sampaikan tanggal target berangkat",
      "Kirim scan paspor + ICC vaksin meningitis seketika",
      "Bayar penuh via rekening escrow (bukan rekening pribadi)",
      "Tim mengajukan visa di jalur prioritas dan memantau tiap 12 jam",
      "E-visa dikirim — lanjutkan terbitkan tiket sesuai tanggal aman",
    ],
    priceNote: "Mulai Rp 2,9 juta/jamaah (termasuk fee prioritas; musim puncak dapat berubah)",
    priceFrom: 2900000,
    faqs: [
      {
        q: "Apakah visa express dijamin 48 jam?",
        a: "Kami bekerja dengan slot prioritas sehingga di musim normal umumnya terbit dalam 24–48 jam kerja. Namun sistem Nusuk adalah sistem pemerintah Saudi — tidak ada pihak manapun yang bisa 'menjamin' 100%. Yang kami jamin: transparansi status dan pengembalian biaya pengurusan bila visa gagal terbit sebelum tanggal berangkat Anda.",
      },
      {
        q: "Apakah tiket bisa diterbitkan duluan sebelum visa?",
        a: "Sebaiknya tidak. Terbitkan tiket setelah e-visa muncul, atau pilih tiket dengan opsi rebooking. Menerbitkan tiket sebelum visa berisiko kerugian besar bila antrean sistem Saudi memanjang tanpa bisa diprediksi.",
      },
    ],
    keywords: [
      "visa umrah cepat",
      "visa umrah express",
      "visa umrah 48 jam",
      "umrah mendadak",
      "biaya visa express",
    ],
  },
  {
    slug: "pengurusan-visa-grup-rombongan",
    name: "Pengurusan Visa Grup & Rombongan (10–500 Jamaah)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pengajuan visa umrah massal untuk rombongan takmir masjid, komunitas, dan pesantren — satu koordinator, satu laporan, semua status terpantau.",
    longDesc:
      "Rombongan komunitas biasanya dimulai dari satu orang pengurus yang memikul semua pekerjaan: mengumpulkan 40 paspor, mengejar yang lupa vaksin, dan menjelaskan ulang syarat ke tiap keluarga. Layanan ini dirancang untuk mengambil beban itu — satu koordinator komunitas sebagai lawan bicara, satu dasbor status untuk seluruh jamaah, dan laporan berkala yang bisa dibagikan ke grup WhatsApp pengurus.\n\nKami menangani batch mulai 10 hingga 500 jamaah dengan sistem penjadwalan bertahap agar kuota agent tidak menumpuk di satu hari. Dokumen bermasalah (paspor hampir habis berlaku, foto tidak sesuai, nama berbeda dengan ijazah) ditandai sejak minggu pertama — saat masih ada waktu untuk memperbaiki, bukan tiga hari sebelum keberangkatan.",
    features: [
      "Satu koordinator khusus untuk seluruh rombongan",
      "Dasbor status per jamaah yang bisa dibagikan ke pengurus",
      "Deteksi dini dokumen bermasalah di minggu pertama",
      "Skedul batch agar kuota agent tidak menumpuk",
      "Laporan progres mingguan siap pakai untuk grup WhatsApp",
    ],
    process: [
      "Rapat awal: tentukan tanggal target & hitung jumlah jamaah",
      "Kami kirim template pengumpulan data + checklist per jamaah",
      "Pengajuan batch berdasarkan siap-tidaknya dokumen tiap jamaah",
      "Laporan mingguan: siapa terbit, siapa revisi, siapa nunggu",
      "Semua e-visa dikemas satu folder rapi per bus/kelompok kecil",
    ],
    priceNote:
      "Mulai Rp 1,9 juta/jamaah untuk grup 50+ (fee grup lebih hemat dari pengurusan individual)",
    priceFrom: 1900000,
    faqs: [
      {
        q: "Berapa minimal jamaah untuk harga grup?",
        a: "Tarif fee grup berlaku mulai 10 jamaah, dengan diskon bertingkat pada 50 dan 150 jamaah. Untuk rombongan di atas 300 orang kami menyarankan pembagian dua batch keberangkatan agar handling di bandara tetap terkendali.",
      },
      {
        q: "Kalau ada jamaah yang batal setelah visa terbit?",
        a: "Visa yang sudah terbit tidak bisa di-refund ke sistem Saudi. Namun visa itu tetap berlaku sampai masa berakhirnya dan bisa dialihkan ke anggota keluarga lain yang datanya sesuai — atau dipakai di keberangkatan rombongan berikutnya selama masih dalam masa berlaku.",
      },
    ],
    keywords: [
      "visa umrah grup",
      "pengurusan visa rombongan",
      "umrah komunitas masjid",
      "visa umrah pesantren",
      "umrah kantor batch",
    ],
  },
  {
    slug: "pengurusan-paspor-biasa-ekspres",
    name: "Pengurusan Paspor Baru & Ekspres",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Bantuan pengurusan paspor RI biasa dan jalur cepat untuk jamaah yang belum memilikinya — dari pengisian M-Paspor sampai hari pengambilan.",
    longDesc:
      "Paspor adalah dokumen pertama yang harus Anda amani sebelum bicara visa, tiket, atau hotel. Banyak calon jamaah baru tahu ternyata paspornya sudah hangus atau belum pernah punya saat semua rencana sudah dibuat. Layanan ini memandu Anda melewati sistem M-Paspor Imigrasi: pilih kanal layanan (biasa, cepat, atau sangat cepat), siapkan dokumen persyaratan, dan atur jadwal ke kantor imigrasi pilihan Anda.\n\nKami tidak bisa mempercepat antrean imigrasi — itu kewenangan penuh negara — tapi kami bisa memastikan dokumen Anda diterima di percobaan pertama, jadwal terdekat terpantau, dan kesalahan klasik (foto tidak sesuai, KK belum update alamat, nama beda dengan akta) tidak terjadi. Untuk jamaah di kota dengan antrian panjang seperti Jakarta dan Surabaya, pendampingan ini biasanya menghemat 2–3 kali kunjungan sia-sia.",
    features: [
      "Panduan penuh aplikasi M-Paspor langkah demi langkah",
      "Pengecekan kelengkapan dokumen sebelum ke imigrasi",
      "Rekomendasi kanal layanan sesuai kematangan jadwal umrah",
      "Pendampingan hari-H di kantor imigrasi (wilayah tertentu)",
      "Reminder otomatis jadwal wawancara & pengambilan",
    ],
    process: [
      "Konsultasi: cek status kependudukan & kelengkapan dokumen",
      "Buat akun M-Paspor dan pilih kanal layanan bersama tim kami",
      "Bayar PNBP paspor sesuai kanal yang dipilih",
      "Datang ke imigrasi sesuai jadwal — kami cek dokumen sebelum masuk",
      "Paspor terbit & diambil — langsung lanjut pengurusan visa",
    ],
    priceNote:
      "Biaya resmi paspor 48 hal Rp 650 ribu (biasa); fee pendampingan mulai Rp 250 ribu",
    priceFrom: 650000,
    faqs: [
      {
        q: "Berapa lama paspor biasa terbit?",
        a: "Kanal biasa umumnya 5–10 hari kerja setelah wawancara, tergantung kantor imigrasi. Kanal cepat (2 hari kerja) dan sangat cepat (satu hari kerja) tersedia dengan PNBP lebih tinggi. Saat jelang musim umrah, antrean slot wawancara sendiri yang paling lama — makanya daftar sejak awal.",
      },
      {
        q: "Saya nama saya beda dengan akta lahir, apakah jadi masalah?",
        a: "Bisa jadi masalah besar di tahap visa. Pastikan perubahan nama sudah dituangkan secara sah (akta pengganti, putusan pengadilan, atau catatan kependudukan) sebelum mengajukan paspor. Tim kami memeriksa konsistensi nama antar dokumen sejak awal supaya tidak gagal di visa.",
      },
    ],
    keywords: [
      "buat paspor umrah",
      "syarat paspor",
      "paspor ekspres",
      "biaya paspor 2025",
      "mpaspor imigrasi",
    ],
  },
  {
    slug: "perpanjangan-paspor-jamaah",
    name: "Perpanjangan & Koreksi Data Paspor",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Perpanjangan paspor yang hampir habis berlakunya dan koreksi data keliru — dilakukan jauh sebelum visa umrah diajukan agar tidak gagal di tengah jalan.",
    longDesc:
      "Sejak sistem paspor terbit ulang (bukan stempel perpanjangan), banyak jamaah bingung karena prosesnya nyaris sama dengan membuat paspor baru. Yang perlu diwaspadai: visa umrah mensyaratkan paspor berlaku minimal 6 bulan sejak tanggal keberangkatan, jadi paspor dengan sisa berlaku 7–8 bulan sebaiknya diperpanjang dulu bila jadwal perjalanan masih berpotensi bergeser.\n\nLayanan ini mencakup perpanjangan paspor, koreksi kesalahan data (nama, tanggal lahir, tempat lahir), dan penggantian paspor rusak atau hilang — termasuk penyusunan surat keterangan hilang dari polisi bila diperlukan. Kami memeriksa seluruh dokumen pendukung dulu, baru mengajukan, supaya tidak ada kejutan di loket imigrasi.",
    features: [
      "Perpanjangan paspor biasa & kanal cepat",
      "Koreksi data nama, tanggal, dan tempat lahir",
      "Penggantian paspor hilang/rusak termasuk SKCK polisi",
      "Audit konsistensi nama antar dokumen sebelum pengajuan",
      "Sinkronisasi tanggal berlaku baru dengan rencana visa",
    ],
    process: [
      "Kirim scan paspor lama untuk penilaian kondisi & sisa berlaku",
      "Tentukan kanal perpanjangan sesuai kematangan jadwal umrah",
      "Rapikan dokumen kependudukan pendukung",
      "Wawancara di imigrasi dengan pendamping (wilayah tertentu)",
      "Paspor baru terbit — data langsung dipakai untuk visa Nusuk",
    ],
    priceNote: "PNBP paspor sama dengan penerbitan baru (mulai Rp 650 ribu); fee pendampingan mulai Rp 250 ribu",
    priceFrom: 650000,
    faqs: [
      {
        q: "Paspor saya sisa 8 bulan, apakah sudah aman untuk umrah?",
        a: "Syarat umum visa umrah adalah paspor berlaku minimal 6 bulan sejak keberangkatan. Sisa 8 bulan masih lolos, tapi bila jadwal Anda masih mungkin bergeser 2 bulan atau lebih, sebaiknya perpanjang dulu — perpanjangan paspor dengan visa aktif di dalamnya akan menghanguskan visa tersebut.",
      },
      {
        q: "Paspor hilang tapi visa umrah sudah terbit di dalamnya, bagaimana?",
        a: "Lapor ke polisi untuk surat keterangan, terbitkan paspor baru, lalu visa harus diajukan ulang dengan paspor baru. Ini salah satu alasan kami selalu menyarankan scan digital paspor disimpan di cloud — proses klaim jauh lebih cepat.",
      },
    ],
    keywords: [
      "perpanjang paspor",
      "paspor habis berlaku",
      "koreksi data paspor",
      "paspor hilang",
      "syarat paspor umrah",
    ],
  },
  {
    slug: "vaksinasi-meningitis-acwy",
    name: "Vaksin Meningitis (Menin ACWY) + Sertifikat ICC",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Vaksin meningitis ACWY yang wajib untuk visa umrah, lengkap dengan penerbitan sertifikat internasional ICC yang sah untuk imigrasi Saudi.",
    longDesc:
      "Vaksin meningitis tipe ACWY adalah syarat wajib pemerintah Arab Saudi untuk semua jamaah umrah dan haji, dengan ketentuan disuntik minimal 10 hari sebelum keberangkatan dan maksimal 3–5 tahun (tergantung jenis vaksin). Tanpa sertifikat Internasional Certificate of Vaccination (ICC) yang sah, visa bisa terhambat dan imigrasi Jeddah berhak menolak masuk.\n\nLayanan ini dilakukan di klinik mitra yang terakreditasi klinik vaksinasi internasional — bukan puskesmas sembarangan yang kartunya tidak dikenali sistem Saudi. Obrolan awal mencakup riwayat alergi dan kondisi khusus (kehamilan, penyakit autoimun) yang membuat sebagian jamaah butuh surat kontraindikasi. Sertifikat ICC diterbitkan langsung dalam format yang dibaca sistem Nusuk.",
    features: [
      "Vaksin quadrivalent ACWY sesuai syarat resmi Saudi",
      "Penerbitan ICC digital & fisik siap diunggah ke Nusuk",
      "Konsultasi kontraindikasi (hamil, autoimun, alergi telur)",
      "Jaringan klinik mitra di 20+ kota",
      "Reminder masa berlaku vaksin bila berangkat tahun depan",
    ],
    process: [
      "Isi formulir riwayat kesehatan singkat secara online",
      "Jadwalkan kunjungan ke klinik mitra terdekat di kota Anda",
      "Suntik vaksin (±15 menit) + masa tunggu observasi",
      "ICC terbit — kami bantu unggah ke aplikasi visa Nusuk",
    ],
    priceNote: "Rp 350–450 ribu/dosis termasuk penerbitan ICC",
    priceFrom: 350000,
    faqs: [
      {
        q: "Sudah divaksin meningitis 2 tahun lalu, perlu ulang?",
        a: "Tergantung jenis vaksinnya. Vaksin polisakarida berlaku 3 tahun, vaksin konjugasi berlaku 5 tahun. Cek jenis vaksin di ICC Anda — bila tidak jelas, lebih aman menyuntik ulang daripada ditolak di visa. Penyuntikan ulang dalam jangka pendek aman secara medis.",
      },
      {
        q: "Anak berumur 2 tahun ikut umrah, boleh divaksin?",
        a: "Boleh, dengan penyesuaian dosis dan anjuran dokter anak. Anak di bawah 2 tahun biasanya menggunakan jadwal vaksinasi yang berbeda — klinik mitra kami akan menilai kasus per kasus dan menerbitkan ICC yang sesuai.",
      },
    ],
    keywords: [
      "vaksin meningitis umrah",
      "menin acwy",
      "icc vaksin",
      "syarat vaksin umrah",
      "biaya vaksin meningitis",
    ],
  },
  {
    slug: "vaksinasi-influenza-pneumonia-persiapan",
    name: "Vaksinasi Persiapan: Influenza, Pneumonia & Tetanus",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Vaksin penambah perlindungan sebelum berangkat — bukan syarat visa, tapi sangat dianjurkan untuk jamaah lansia dan yang berangkat musim dingin.",
    longDesc:
      "Hanya meningitis yang wajib secara resmi, tapi dokter kesehatan jamaah hampir selalu menganjurkan vaksin influenza dan pneumonia untuk kelompok rentan. Logikanya sederhana: di Tanah Suci jamaah berpapasan dengan jutaan orang dari seluruh dunia dalam ruangan ber-AC padat, dan satu infeksi ringan bisa merusak seluruh rangkaian ibadah — apalagi saat menunaikan tawaf berjam-jam di musim dingin.\n\nLayanan ini mencakup konsultasi kebutuhan vaksin berdasarkan usia, kondisi kronis (diabetes, jantung, asma), dan musim keberangkatan Anda. Vaksinasi dilakukan di klinik mitra terakreditasi, satu kunjungan bisa menuntaskan beberapa jenis vaksin sekaligus dengan jeda yang aman.",
    features: [
      "Asesmen kebutuhan vaksin sesuai usia & kondisi kronis",
      "Influenza, pneumonia (PCV/PPSV), dan tetanus dalam satu kunjungan",
      "Klinik mitra terakreditasi di kota besar Indonesia",
      "Kartu vaksinasi lengkap sebagai dokumen pendukung",
      "Anjuran jadwal ideal: 3–4 minggu sebelum keberangkatan",
    ],
    process: [
      "Konsultasi online: usia, kondisi kronis, musim keberangkatan",
      "Rekomendasi paket vaksin & estimasi biaya",
      "Kunjungan klinik — suntik beberapa vaksin sekaligus",
      "Kartu vaksinasi lengkap dikirim sebagai dokumen perjalanan",
    ],
    priceNote: "Mulai Rp 250 ribu (influenza); paket lengkap lansia Rp 900 ribu–1,5 juta",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah vaksin ini wajib untuk visa umrah?",
        a: "Tidak. Yang wajib hanya meningitis ACWY. Vaksin influenza dan pneumonia bersifat anjuran medis — tapi untuk jamaah di atas 60 tahun atau punya penyakit kronis, manfaatnya sangat nyata selama musim ramai.",
      },
      {
        q: "Bisa sekalian dengan vaksin meningitis?",
        a: "Bisa. Umumnya meningitis, influenza, dan pneumonia dapat diberikan dalam kunjungan yang sama. Dokter klinik mitra akan mengatur urutan dan sisi tubuh penyuntikan agar respons imun tetap optimal.",
      },
    ],
    keywords: [
      "vaksin sebelum umrah",
      "vaksin influenza jamaah",
      "vaksin pneumonia lansia",
      "persiapan kesehatan umrah",
    ],
  },
  {
    slug: "medical-check-up-sertifikat-kesehatan",
    name: "Medical Check-Up & Sertifikat Kesehatan Jamaah",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pemeriksaan kesehatan pra-umrah dengan sertifikat siap pakai untuk asuransi dan kebutuhan PPIU — menemukan risiko sebelum menjadi kejadian di Saudi.",
    longDesc:
      "Medical check-up pra-umrah bukan sekadar formalitas. Tekanan darah yang tak terkendali, gula yang melonjak, atau jantung yang diam-diam bermasalah adalah tiga penyebab terbanyak jamaah masuk rumah sakit di Saudi — dan semuanya bisa terdeteksi minggu-minggu sebelumnya di Indonesia. Layanan ini memeriksa fungsi vital, darah, jantung, hingga paru, lalu menerbitkan sertifikat kesehatan berbahasa Inggris yang diterima asuransi dan sebagian PPIU.\n\nUntuk jamaah lansia atau punya riwayat penyakit, hasil MCU menjadi dasar penentuan apakah perlu pendamping medis, kursi roda, atau penyesuaian jadwal ibadah. Menemukan masalah di Indonesia berarti punya waktu mengobatinya — bukan mengobati di negeri orang dengan biaya 5–10 kali lipat.",
    features: [
      "Paket MCU dasar: tekanan, darah, gula, kolesterol, EKG",
      "Paket lanjutan dengan rontgen dada & treadmill jantung",
      "Sertifikat kesehatan berbahasa Inggris resmi",
      "Rekomendasi kesiapan ibadah (level aktivitas aman)",
      "Jaringan laboratorium mitra di 25+ kota",
    ],
    process: [
      "Pilih paket MCU sesuai usia & riwayat penyakit",
      "Puasa malam sebelumnya, datang pagi ke laboratorium mitra",
      "Pemeriksaan fisik oleh dokter + pengambilan sampel",
      "Hasil 1–3 hari — sertifikat dikirim siap diunggah ke asuransi",
    ],
    priceNote: "Rp 450–900 ribu dasar; paket lansia lengkap dengan treadmill Rp 1,2–1,8 juta",
    priceFrom: 450000,
    faqs: [
      {
        q: "Apakah MCU ini wajib sebelum umrah?",
        a: "Secara regulasi tidak wajib untuk semua jamaah umrah, tapi hampir semua PPIU yang baik memintanya — dan asuransi travel menuntutnya saat ada klaim berat. Untuk jamaah di atas 60 tahun atau dengan penyakit kronis, MCU sangat kami anjurkan.",
      },
      {
        q: "Kalau hasil MCU menemukan masalah, umrah saya batal?",
        a: "Tidak otomatis. Hasil dianalisis dokter: sebagian masalah bisa ditangani dalam 2–4 minggu (tekanan darah, gula), sebagian hanya butuh penyesuaian seperti pendamping medis atau kursi roda. Langka sekali kasus yang benar-benar dianjurkan menunda ibadah — dan lebih baik menunda daripada mengambil risiko di Saudi.",
      },
    ],
    keywords: [
      "medical check up umrah",
      "mcu jamaah",
      "sertifikat kesehatan umrah",
      "cek kesehatan sebelum umrah",
    ],
  },
  {
    slug: "legalisir-dokumen-kemenag-mfa",
    name: "Legalisir & Legalisasi Dokumen (Kemenag/Kemenlu)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Legalisir ijazah, buku nikah, akta lahir, dan dokumen lain di instansi terkait — dokumen jadi sah dipakai di Tanah Suci tanpa bolak-balik kantor.",
    longDesc:
      "Beberapa kebutuhan jamaah meminta dokumen yang sudah dilegalisir: pernikahan di Arab Saudi, izin sekolah anak yang ikut berangkat, kuasa hukum, hingga keperluan kerja pasca-ibadah. Legalisir berlapis (notaris, instansi asal, Kemenag/Kemenlu, kadang KBRI di Riyadh atau konsulat di Jeddah) membuat banyak orang menyerah di tengah jalan karena waktunya menumpuk.\n\nLayanan ini menjalankan seluruh rantai legalisasi untuk Anda dengan pelaporan tahapan. Anda cukup mengirim dokumen asli lewat kurir resmi, dan kami mengembalikannya lengkap dengan semua cap yang dibutuhkan. Untuk dokumen penting seperti akta, kami merekam kondisi awalnya sebagai bukti sebelum diproses.",
    features: [
      "Legalisir bertingkat: notaris → instansi asal → Kemenag/Kemenlu",
      "Dukungan dokumen untuk nikah, sekolah anak, kuasa, ijazah",
      "Kurir asuransied dua arah dengan kondisi awal direkam",
      "Estimasi waktu per jenis dokumen dijelaskan sejak awal",
      "Opsi terjemahan tersumpah Arab/Inggris dalam satu paket",
    ],
    process: [
      "Konsultasi: sebutkan tujuan pemakaian dokumen di Saudi",
      "Kami tentukan rantai legalisasi yang tepat (tidak berlebihan)",
      "Kirim dokumen asli via kurir asuransied",
      "Proses berlapis dengan laporan tahapan tiap 2–3 hari",
      "Dokumen asli kembali lengkap ke alamat Anda",
    ],
    priceNote: "Mulai Rp 150 ribu/dokumen tergantung jenis & jumlah lapisan legalisasi",
    priceFrom: 150000,
    faqs: [
      {
        q: "Dokumen apa yang biasanya perlu dilegalisir untuk keperluan umrah?",
        a: "Umrah reguler tidak menuntut legalisir tambahan. Kebutuhan muncul saat jamaah punya agenda spesifik: menikah di Saudi (buku nikah & akta), sekolah anak yang menyertai (surat izin sekolah), atau kuasa mengelola harta. Konsultasikan tujuannya — kami akan bilang jujur bila dokumen Anda ternyata tidak butuh legalisir.",
      },
      {
        q: "Berapa lama proses legalisasi berlapis?",
        a: "Legalisir satu lapis 1–3 hari kerja; rantai lengkap notaris-instansi-Kemenlu umumnya 5–10 hari kerja. Saat libur nasional bertumpuk, waktu bisa memanjang — sebaiknya mulai sebulan sebelum kebutuhan.",
      },
    ],
    keywords: [
      "legalisir dokumen umrah",
      "legalisasi ijazah",
      "legalisir buku nikah saudi",
      "kemenlu legalisasi",
    ],
  },
  {
    slug: "penerjemahan-tersumpah-dokumen",
    name: "Penerjemah Tersumpah Dokumen (Indonesia–Arab/Inggris)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Terjemahan tersumpah resmi untuk dokumen jamaah — diterima instansi Indonesia dan otoritas Saudi, dengan stempel translator tersumpah yang sah.",
    longDesc:
      "Dokumen berbahasa Indonesia tidak otomatis sah di Arab Saudi dan sebaliknya. Akta lahir, ijazah, buku nikah, surat keterangan kerja, hingga dokumen medis sering diminta dalam terjemahan tersumpah (sworn translation) — terjemahan yang dibuat translator resmi dengan stempel dan tanda tangan yang bisa dipertanggungjawabkan.\n\nTim kami bekerja dengan jaringan penerjemah tersumpah berpengalaman menangani dokumen jamaah — mereka paham format yang dibutuhkan Nusuk, asuransi Saudi, dan kependudukan lokal. Hasil kerja diperiksa ganda: kesesuaian ejaan nama (transliterasi) adalah kesalahan paling mahal, karena satu huruf berbeda bisa membuat dokumen dianggap milik orang lain.",
    features: [
      "Translator tersumpah resmi dengan stempel sah",
      "Pemetaan konsisten nama transliterasi Arab/Inggris",
      "Pemeriksaan ganda oleh editor kedua sebelum terbit",
      "Format digital (PDF) dan cetak bersinji siap kirim",
      "Rush service 24–48 jam untuk dokumen mendesak",
    ],
    process: [
      "Kirim scan dokumen sumber ke kanal aman",
      "Kutipan harga & waktu disepakati sebelum dikerjakan",
      "Penerjemahan + review ganda transliterasi nama",
      "Dokumen jadi dikirim PDF dan (bila perlu) fisik via kurir",
    ],
    priceNote: "Mulai Rp 120 ribu/halaman; rush +50%",
    priceFrom: 120000,
    faqs: [
      {
        q: "Apa bedanya terjemahan biasa dan tersumpah?",
        a: "Terjemahan tersumpah dibuat oleh translator yang diakui negara, dengan stempel dan tanda tangan resmi — instansi menuntut yang ini. Terjemahan biasa cukup untuk kebutuhan internal seperti membaca dokumen sendiri, tapi tidak sah untuk visa, asuransi, atau perkawinan di Saudi.",
      },
      {
        q: "Nama saya ditulis beda di KTP dan paspor, mana yang dipakai?",
        a: "Yang mengikuti paspor — karena itulah dokumen yang dibaca imigrasi. Translator kami akan mencocokkan transliterasi dengan paspor, dan bila ketidaksesuaian berisiko, kami beri catatan perbaikan dokumen sumbernya dulu.",
      },
    ],
    keywords: [
      "penerjemah tersumpah",
      "terjemah dokumen arab",
      "sworn translation umrah",
      "terjemahan akta lahir",
    ],
  },
  {
    slug: "surat-izin-wali-dan-surat-kuasa",
    name: "Penyusunan Surat Izin Wali & Surat Kuasa",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Penyusunan dan pengesahan surat izin suami/wali, surat kuasa pengelolaan harta, dan dokumen pernyataan lain yang diminta saat jamaah berangkat berdua.",
    longDesc:
      "Jamaah perempuan yang berangkat tanpa suami atau mahram, jamaah yang meninggalkan usaha/tanah/properti saat beribadah sebulan lebih, dan keluarga dengan situasi khusus (perwalian, adopsi) sering diminta menyiapkan surat pernyataan yang rapi secara hukum. Surat yang asal dibuat di rumah sering ditolak karena format dan pengesahannya tidak tepat.\n\nLayanan ini menyusun draft surat sesuai kebutuhan — izin suami/wali untuk berangkat, kuasa penuh mengelola usaha, kuasa menjaga anak, pernyataan tanggung jawab — lalu mengaturnya melewati pengesahan yang tepat (notaris, camat, atau Kemenag tergantung tujuan pemakaian). Hasilnya siap dipakai di Indonesia maupun ditunjukkan saat ada pemeriksaan di Saudi.",
    features: [
      "Draft disusun konsultan yang paham konteks jamaah",
      "Pengesahan notaris / instansi sesuai tujuan surat",
      "Versi dwibahasa (Indonesia–Arab/Inggris) bila diminta",
      "Konsultasi gratis situasi keluarga yang kompleks",
      "Penyimpanan digital salinan sebagai cadangan",
    ],
    process: [
      "Ceritakan situasinya lewat konsultasi (video call/telepon)",
      "Draft surat dikirim untuk diperiksa bersama keluarga",
      "Revisi sampai semua pihak setuju isi suratnya",
      "Jadwalkan tanda tangan di hadapan pengesah",
      "Dokumen jadi dikirim fisik + salinan digital",
    ],
    priceNote: "Mulai Rp 300 ribu/surat termasuk pengesahan notaris dasar",
    priceFrom: 300000,
    faqs: [
      {
        q: "Apakah perempuan wajib ditemani mahram untuk umrah?",
        a: "Pemerintah Saudi telah mencabut kewajiban mahram sejak 2023, dan Kemenag RI menindaklanjuti dengan membuka keberangkatan jamaah perempuan tanpa mahram. Namun sebagian keluarga tetap menyusun surat izin sebagai rukun keluarga dan kebutuhan administrasi tertentu — kami bantu menyusunnya bila diperlukan.",
      },
      {
        q: "Surat kuasa saya sudah notaris, apakah perlu legalisir lagi?",
        a: "Untuk dipakai di Indonesia, notaris cukup. Untuk dipakai resmi di Arab Saudi biasanya perlu legalisasi tambahan sampai kanal Kemenlu. Jelaskan di mana surat akan dipakai — kami susun rantai pengesahannya sejak awal supaya tidak boros dua kali.",
      },
    ],
    keywords: [
      "surat izin suami umrah",
      "surat kuasa notaris",
      "izin wali umrah",
      "surat kuasa saat umrah",
    ],
  },
  {
    slug: "dokumen-umrah-anak-remaja",
    name: "Pengurusan Dokumen Umrah Anak & Remaja",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pengurusan lengkap dokumen perjalanan anak dan remaja — akta lahir, izin sekolah, relasi keluarga, hingga catatan perwalian untuk keberangkatan tanpa satu orang tua.",
    longDesc:
      "Membawa anak berumrah adalah permintaan yang indah — dan berantai dokumen yang lebih panjang dari orang dewasa. Anak wajib punya paspor sendiri, datanya harus selaras dengan akta lahir, dan bila berangkat bersama salah satu orang tua (bukan keduanya), umumnya perlu persetujuan tertulis orang tua satunya yang disahkan. Remaja yang berangkat dengan sekolah atau pesantren butuh tambahan surat izin lembaga dan pendamping resmi.\n\nLayanan ini merapikan seluruh rantai itu: penerbitan paspor anak, kelengkapan akta, surat persetujuan orang tua yang disahkan notaris, surat izin sekolah, hingga mencantumkan penjaga resmi anak dalam pendaftaran. Kami juga memberi catatan praktis untuk orang tua — dokumen apa yang dicetak dua, apa yang disimpan di ponsel, dan bagaimana menghadapi pertanyaan imigrasi tentang anak Anda.",
    features: [
      "Pengurusan paspor anak dari awal sampai terbit",
      "Audit konsistensi nama anak dengan akta & paspor orang tua",
      "Surat persetujuan orang tua terutang yang disahkan",
      "Surat izin sekolah/pesantren bila berangkat rombongan",
      "Panduan jawaban imigrasi & checklist dokumen orang tua",
    ],
    process: [
      "Konsultasi usia anak & komposisi keberangkatan keluarga",
      "Kami susun daftar dokumen yang wajib dan yang anjuran",
      "Pengurusan paspor + penyusunan surat persetujuan",
      "Pemeriksaan akhir seluruh dokumen sebelum visa diajukan",
      "Kit dokumen keluarga dikemas rapi siap dibawa berangkat",
    ],
    priceNote: "Mulai Rp 900 ribu/anak (pengurusan paspor + surat; biaya resmi paspor terpisah)",
    priceFrom: 900000,
    faqs: [
      {
        q: "Umur berapa anak boleh berumrah?",
        a: "Tidak ada batasan usia dari sisi Saudi — bayi pun boleh dengan visa dan persyaratan kesehatannya. Pertimbangan yang lebih relevan adalah kesiapan orang tua: anak di bawah 5 tahun butuh rencana khusus untuk tawaf, sa'i, dan jadwal tidur. Lihat juga layanan kategori Keluarga & Lansia untuk dukungan stroller dan babysitter.",
      },
      {
        q: "Ayah anak bekerja di luar negeri, bagaimana surat persetujuannya?",
        a: "Surat persetujuan bisa dibuat di negara tempat ayah bekerja dan disahkan di KBRI setempat, atau ditandatangani lewat mekanisme yang sah menurut hukum negara tersebut. Kami pandu formatnya supaya diterima imigrasi Indonesia dan Saudi — proses ini butuh waktu, jadi mulai jauh hari.",
      },
    ],
    keywords: [
      "umrah anak anak",
      "paspor anak",
      "surat izin sekolah umrah",
      "umrah keluarga dengan anak",
      "dokumen anak umrah",
    ],
  },
  {
    slug: "perizinan-nusuk-raudhah",
    name: "Perizinan Nusuk: Slot Raudhah & Jam Padat",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pengurusan slot perizinan Nusuk untuk shalat di Raudhah dan akses jam-jam padat — kejar jadwal terbaik, tapi dengan janji yang realistis.",
    longDesc:
      "Shalat di Raudhah — area antara rumah dan mimbar Rasulullah ﷺ — memerlukan slot izin dari aplikasi Nusuk berdasarkan tanggal dan jam. Slotnya terbatas dan diambil jutaan jamaah, sehingga mendapatkan jadwal yang pas dengan itinerary grup adalah pekerjaan teknis yang butuh kesabaran dan sistem.\n\nPartner kami memantau ketersediaan slot harian dan mengantrekannya sesuai jadwal Anda di Madinah. Yang perlu Anda pahami sejak awal: slot adalah izin masuk, bukan jaminan suasana. Kami tidak akan menjual ilusi 'pasti dapat Raudhah yang sepi' — yang bisa kami janji adalah slot sah, panduan teknis masuk, dan rencana cadangan bila slot yang dapat adalah jam yang ramai.",
    features: [
      "Pengantrean slot Raudhah sesuai tanggal di Madinah",
      "Slot akses jam padat untuk grup yang jadwalnya ketat",
      "Panduan teknis: gerbang masuk, antrean, adab di Raudhah",
      "Koordinasi dengan mutawif grup di lapangan",
      "Slot cadangan bila jadwal perjalanan bergeser",
    ],
    process: [
      "Kirim tanggal-tanggal Anda di Madinah & jumlah jamaah",
      "Tim mengantre slot di Nusuk sesuai prioritas jadwal",
      "Slot terkunci — nomor & jam dikirim ke koordinator grup",
      "Panduan teknis dikirim sebelum hari-H",
      "Evaluasi pasca-shalat: bila perlu, ajukan slot cadangan",
    ],
    priceNote: "Rp 150–400 ribu/jamaah tergantung musim (slot Nusuk sendiri gratis dari pemerintah Saudi)",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah Raudhah bisa didapatkan tanpa slot?",
        a: "Area Raudhah untuk jamaah pria sebagian terbuka tanpa slot di jam tertentu, tapi untuk perempuan dan jam-jam tertentu slot Nusuk wajib. Tanpa slot, peluang shalat tepat di Raudhah sangat kecil di jam ramai — biasanya jamaah hanya shalat di area sekitarnya.",
      },
      {
        q: "Slot saya jam 2 pagi, apakah aman untuk ibu saya yang lansia?",
        a: "Jam malam justru sering paling tenang. Yang penting disiapkan: transportasi hotel–Nabawi, pendamping, dan pemanasan kaki. Untuk lansia dengan keterbatasan berjalan, kombinasikan dengan layanan kursi roda di area Nabawi.",
      },
    ],
    keywords: [
      "slot raudhah nusuk",
      "izin raudhah",
      "perizinan nusuk",
      "shalat di raudhah",
      "jam padat nusuk",
    ],
  },
  {
    slug: "asuransi-terikat-visa-nusuk",
    name: "Pendampingan Asuransi Terikat Visa (Bundle Nusuk)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Setiap visa umrah membawa asuransi bawaan dari sistem Saudi — kami bantu Anda memahami cakupannya, cara klaimnya, dan celah yang perlu ditambal.",
    longDesc:
      "Sedikit jamaah yang tahu bahwa visa umrah mereka sudah membawa asuransi dasar dari pemerintah Saudi — dan lebih sedikit lagi yang tahu cara memakainya saat benar-benar sakit. Polis bawaan ini mencakup penanganan darurat dasar, tapi memiliki batasan yang sering mengejutkan: tidak semua rumah sakit terhubung, tidak semua layanan ditanggung penuh, dan prosedurnya berbeda dengan asuransi Indonesia.\n\nLayanan ini menjelaskan polis bawaan Anda dengan bahasa manusia: apa yang ditanggung, sampai berapa, di mana, dan langkah klaimnya saat darurat. Bila cakupannya dirasa kurang untuk kondisi Anda (lansia, penyakit kronis, ibu hamil), kami sarankan tambahan asuransi perjalanan dari Indonesia yang benar-benar melengkapi — bukan tumpang tindih yang buang uang.",
    features: [
      "Penjelasan cakupan polis bawaan visa dalam bahasa Indonesia",
      "Daftar rumah sakit jaringan di Jeddah, Makkah, Madinah",
      "Panduan langkah klaim saat darurat (nomor, dokumen, urutan)",
      "Analisis celah perlindungan untuk jamaah berisiko",
      "Rekomendasi tambahan yang benar-benar dibutuhkan",
    ],
    process: [
      "Kirim nomor visa/e-visa setelah terbit",
      "Tim menarik rincian polis terikat dan menyiapkan ringkasan",
      "Sesi penjelasan 20 menit via video call",
      "Ringkasan + nomor penting dikirim PDF untuk dibawa berangkat",
    ],
    priceNote: "Rp 100 ribu/jamaah (paket grup 20+ jamaah Rp 60 ribu/orang)",
    priceFrom: 100000,
    faqs: [
      {
        q: "Asuransi bawaan visa cukup atau perlu beli lagi?",
        a: "Untuk jamaah muda sehat, cakupan bawaan umumnya cukup untuk kejadian darurat biasa. Untuk lansia, ibu hamil, atau jamaah dengan penyakit kronis, cakupan bawaan punya batas usia dan pengecualian pre-existing — di titik itu tambahan asuransi dari Indonesia menjadi penting.",
      },
      {
        q: "Bagaimana cara klaim asuransi bawaan visa saat sakit di Saudi?",
        a: "Umumnya: datangi rumah sakit jaringan, tunjukkan nomor visa/polis, dan pihak RS menagih ke penyelenggara asuransi Saudi. Masalah muncul saat RS tidak termasuk jaringan — di situ Anda bayar dulu lalu klaim. Panduan langkah demi langkahnya ada di paket penjelasan ini.",
      },
    ],
    keywords: [
      "asuransi visa umrah",
      "asuransi bawaan nusuk",
      "klaim asuransi umrah",
      "asuransi jamaah saudi",
    ],
  },
  {
    slug: "konsultasi-berkas-dokumen-umrah",
    name: "Konsultasi Berkas Dokumen (Audit Sebelum Berangkat)",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Audit menyeluruh seluruh dokumen perjalanan Anda — paspor, visa, tiket, hotel, vaksin — sehari sebelum berangkat, untuk tidur yang tenang.",
    longDesc:
      "Banyak masalah keberangkatan sebenarnya bisa dideteksi dari rumah: nama di tiket terbalik dengan paspor, tanggal visa vs tanggal terbang tidak sinkron, bukti hotel tidak dicetak, ICC vaksin tidak dibawa fisik. Layanan ini duduk bersama Anda (video call) menyusuri seluruh dokumen satu per satu dengan checklist yang teruji dari ratusan grup keberangkatan.\n\nSesi ini terasa sepele sampai Anda mendengar kisah jamaah yang ditahan di imigrasi karena satu huruf. Untuk keluarga yang berangkat pertama kali, atau jamaah yang menyusun perjalanan sendiri tanpa PPIU, satu jam audit ini adalah asuransi paling murah dari semua dokumen Anda.",
    features: [
      "Video call audit 45–60 menit bersama spesialis",
      "Checklist teruji dari ratusan grup keberangkatan",
      "Koreksi ditemukan dikirim sebagai daftar aksi prioritas",
      "Dua kali sesi: H-30 dan H-1 sebelum keberangkatan",
      "Cocok untuk jamaah mandiri & koordinator komunitas",
    ],
    process: [
      "Kumpulkan scan semua dokumen ke folder bersama",
      "Sesi H-30: audit dokumen inti + rencana perbaikan",
      "Perbaiki temuan bersama tim bila perlu bantuan",
      "Sesi H-1: cek final — dokumen fisik, digital, dan dompet",
    ],
    priceNote: "Rp 250 ribu/keberangkatan (1 keluarga sampai 5 orang); grup komunitas Rp 500 ribu",
    priceFrom: 250000,
    faqs: [
      {
        q: "Saya ikut PPIU, masih perlu audit dokumen sendiri?",
        a: "PPIU yang baik sudah melakukannya untuk Anda — tanyakan dulu ke penyelenggara. Audit ini paling berharga untuk jamaah mandiri, keluarga campuran beberapa PPIU, atau yang berangkat dari kota berbeda dengan rombongan utamanya.",
      },
      {
        q: "Apa yang biasanya ditemukan bermasalah?",
        a: "Tiga besar: nama tiket tidak identik paspor (satu huruf pun bisa bermasalah), ICC vaksin hanya di ponsel saat jaringan mati, dan bukti booking hotel tidak pernah dicetak. Semua mudah diperbaiki dari rumah — mustahil diperbaiki di antrean imigrasi.",
      },
    ],
    keywords: [
      "cek dokumen umrah",
      "checklist dokumen umrah",
      "audit dokumen jamaah",
      "persiapan keberangkatan umrah",
    ],
  },
  {
    slug: "visa-umrah-wni-luar-negeri",
    name: "Visa Umrah untuk WNI di Luar Negeri",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pendampingan visa umrah bagi jamaah WNI yang bekerja/berdomisili di luar negeri — mulai dari memahami aturan negara domisili Anda.",
    longDesc:
      "Jutaan WNI bekerja di Malaysia, Hong Kong, Taiwan, Timur Tengah, dan negara lain — dan banyak di antaranya ingin menunaikan umrah dari negara domisilinya, bukan dari Indonesia. Aturannya berbeda: visa umrah umumnya diajukan lewat kanal resmi di negara tempat paspor Anda terdaftar untuk berpergian, dan beberapa negara punya aturan tambahan untuk pekerja asing.\n\nLayanan ini membantu memetakan situasi Anda: negara domisili, jenis izin tinggal (work permit, dependent, pelajar), dan kanal visa yang tepat. Untuk sebagian negara kami punya mitra lokal yang menjalankan pengurusan penuh; untuk negara lain kami siapkan panduan langkah demi langkah plus pengecekan dokumen sebelum Anda mengajukan sendiri. Yang kami tolak jujur: solusi 'jahit data' yang berisiko visa dicabut di bandara.",
    features: [
      "Pemetaan aturan visa umrah per negara domisili",
      "Mitra lokal terverifikasi di 6 negara utama WNI bekerja",
      "Pengecekan dokumen sebelum pengajuan (pre-flight check)",
      "Koordinasi dengan imigrasi & aturan re-entry izin tinggal",
      "Panduan berangkat kembali ke negara kerja setelah umrah",
    ],
    process: [
      "Konsultasi: negara domisili, izin tinggal, jadwal cuti",
      "Kami petakan kanal visa yang sah untuk situasi Anda",
      "Dokumen diperiksa dan dirapikan sebelum pengajuan",
      "Pengajuan lewat mitra lokal atau panduan mandiri",
      "Visa terbit — panduan perjalanan pulang ke negara kerja",
    ],
    priceNote: "Mulai Rp 2,5 juta (fee pengurusan; biaya lokal menyesuaikan negara domisili)",
    priceFrom: 2500000,
    faqs: [
      {
        q: "Bisa umrah dari Malaysia pakai paspor Indonesia?",
        a: "Bisa. Banyak WNI di Malaysia berumrah lewat kanal resmi Malaysia dengan pendampingan agent lokal berlisensi, dengan syarat izin tinggal (pass) Anda masih berlaku dan izin keluar-masuk negara tersebut tidak bermasalah. Sebagian pekerja perlu surat izin pemberi kerja — kami petakan sesuai jenis pass Anda.",
      },
      {
        q: "Perlu izin majikan untuk berumrah?",
        a: "Tergantung negara dan jenis izin tinggal. Di beberapa negara Teluk, pekerja rumah tangga wajib izin sponsor; di Malaysia sebagian pass memerlukan notifikasi. Jangan mengabaikan aturan ini — risikonya izin tinggal Anda di negara kerja bisa terancam. Konsultasikan sebelum booking apa pun.",
      },
    ],
    keywords: [
      "umrah wni malaysia",
      "umrah dari luar negeri",
      "visa umrah tkw",
      "umrah hong kong",
      "umrah pekerja asing",
    ],
  },
  {
    slug: "pendampingan-dokumen-repatriasi-jenazah",
    name: "Pendampingan Dokumen Repatriasi Jamaah Meninggal",
    categorySlug: "visa-dokumen",
    shortDesc:
      "Pendampingan administrasi dokumen jenazah jamaah — koordinasi KBRI, surat kematian, dan pengurusan pulang — saat keluarga paling membutuhkan ketenangan.",
    longDesc:
      "Sebagian jamaah memang dijemput langsung di Tanah Suci. Saat itu terjadi, keluarga di Indonesia dihadapkan pada proses yang tidak pernah mereka bayangkan: surat kematian Saudi, perizinan pemakaman lokal atau repatriasi, koordinasi KBRI, asuransi, dan biaya yang tidak kecil. Semua ini harus dijalani sambil berduka.\n\nLayanan ini mengambil beban administrasinya. Kami mengoordinasikan dokumen dengan KBRI Jeddah dan otoritas lokal, membantu keputusan pemakaman di Tanah Suci (yang secara syariat sering lebih dianjurkan dan jauh lebih murah) atau repatriasi ke Indonesia, serta memandu klaim asuransi perjalanan. Untuk jamaah yang tergabung PPIU, tanggung jawab utamanya ada pada penyelenggara — layanan ini melengkapi bila keluarga butuh pendamping tambahan yang independen.",
    features: [
      "Koordinasi dokumen dengan KBRI & otoritas Saudi",
      "Pendampingan keputusan pemakaman lokal vs repatriasi",
      "Estimasi biaya transparan sejak awal — tidak ada kejutan",
      "Panduan klaim asuransi perjalanan jamaah",
      "Manajemen komunikasi keluarga lintas zona waktu",
    ],
    process: [
      "Keluarga menghubungi hotline 24 jam dengan data jamaah",
      "Tim menetapkan status dokumen di pihak Saudi & KBRI",
      "Rapat keluarga singkat: pilihan pemakaman & anggaran",
      "Eksekusi administrasi dengan laporan harian ke keluarga",
      "Dokumen final (akta kematian, izin, asuransi) dikemas rapi",
    ],
    priceNote: "Fee administrasi mulai Rp 5 juta (biaya pemakaman/repatriasi terpisah; pemakaman di Saudi jauh lebih hemat)",
    priceFrom: 5000000,
    faqs: [
      {
        q: "Lebih baik memakamkan di Tanah Suci atau pulangkan ke Indonesia?",
        a: "Secara syariat, pemakaman secepat mungkin di tempat wafat banyak dianjurkan para ulama, dan biayanya jauh lebih ringan. Repatriasi memakan waktu dan biaya besar. Keputusan tetap milik keluarga — tugas kami memastikan keputusan itu diambil dengan informasi yang utuh.",
      },
      {
        q: "Asuransi bawaan visa menanggung kejadian ini?",
        a: "Sebagian polis mencakup biaya repatriasi jenazah dengan plafon tertentu. Klaimnya butuh dokumen yang rapi — dan di sinilah pendampingan ini paling berarti, karena keluarga tidak harus belajar prosedur asuransi sambil berduka.",
      },
    ],
    keywords: [
      "jenazah jamaah saudi",
      "repatriasi jenazah umrah",
      "dokumen kematian saudi",
      "kbri jeddah jenazah",
    ],
  },

  // ================= KATEGORI 2: TIKET & PENERBANGAN =================
  {
    slug: "tiket-pesawat-umrah",
    name: "Tiket Pesawat Umrah Ekonomi PP",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Tiket pulang-pergi kelas ekonomi ke Jeddah atau Madinah dengan tanggal yang teruji untuk jamaah — harga jujur, tanpa kursi hantu.",
    longDesc:
      "Tiket pesawat adalah komponen kedua termahal dalam umrah setelah hotel — dan paling penuh jebakan harga. Promo yang tampak murah bisa menyimpan transit 18 jam, perpindahan bandara di kota transit, atau bagasi yang harus dibeli terpisah. Layanan ini menawarkan penerbitan tiket ekonomi ke Jeddah (JED) dan Madinah (MED) dengan kriteria yang kami pegang: transit wajar maksimal satu kota, waktu hub yang masuk akal untuk jamaah, dan bagasi yang jelas jumlahnya di awal.\n\nKami juga memperhitungkan pola khas jamaah: keberangkatan grup membutuhkan kursi yang berdempetan, jamaah lansia butuh waktu hub yang tidak memeras kaki, dan malam keberangkatan pulang biasanya dipenuhi koper berlebih. Pilihan maskapai mencakup full-service dengan bagasi 40–46 kg maupun low-cost dengan strategi beli bagasi yang tepat sejak awal.",
    features: [
      "Rute langsung & transit satu kota dengan hub wajar",
      "Bagasi jelas sejak awal (40–46 kg untuk rute jamaah)",
      "Pilihan kursi berdempetan untuk grup",
      "E-ticket resmi langsung dari sistem maskapai",
      "Dukungan rebooking bila visa/perjalanan bergeser",
      "Tersedia dari Jakarta, Surabaya, Medan, dan 10+ kota",
    ],
    process: [
      "Sebutkan kota asal, tanggal fleksibel, dan jumlah jamaah",
      "Kami kirim 3 opsi rute dengan perbandingan waktu & harga",
      "Pilih dan bayar melalui kanal escrow atau langsung",
      "E-ticket terbit — itinerary & panduan bagasi dikirim",
    ],
    priceNote: "Rp 8–12 juta PP dari Jakarta; kota lain menyesuaikan (musim Ramadhan naik 40–80%)",
    priceFrom: 8000000,
    faqs: [
      {
        q: "Kapan waktu terbaik membeli tiket umrah?",
        a: "Untuk musim reguler, 2–3 bulan sebelum keberangkatan. Untuk Ramadhan akhir dan Desember, beli 4–6 bulan sebelumnya — harga tiket musim puncak naik tajam dan kursi grup cepat habis. Tiket promo terakhir jam menit memang ada, tapi risikonya tanggal tidak pas dengan visa.",
      },
      {
        q: "Mending langsung atau transit?",
        a: "Penerbangan langsung dari Jakarta ke Jeddah/Madinah sekitar 9 jam — untuk lansia dan keluarga dengan anak, ini jauh lebih manusiawi. Rute transit (Kuala Lumpur, Doha) bisa hemat 1–2 juta, tapi hitung juga waktu tunggu dan risiko keterlambatan koneksi.",
      },
    ],
    keywords: [
      "tiket pesawat umrah",
      "tiket jakarta jeddah",
      "tiket umrah murah",
      "tiket madinah",
      "tiket pesawat tanah suci",
    ],
  },
  {
    slug: "tiket-umrah-kelas-bisnis",
    name: "Tiket Umrah Kelas Bisnis",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Kelas bisnis untuk jamaah yang datangnya dengan tenaga penuh — tempat duduk flat-bed, prioritas bagasi, dan lounge dari awal sampai akhir perjalanan.",
    longDesc:
      "Tidak semua jamaah muda kuat — banyak yang justru lansia pejabat, orang tua yang dipayangi anak, atau penderita nyeri punggung yang 9 jam di kursi ekonomi adalah penderitaan sungguhan. Kelas bisnis menjawab itu bukan sekadar gengsi: kursi yang bisa rebah datar, makanan yang bisa diatur waktunya, prioritas boarding dan bagasi yang muncul duluan, serta akses lounge untuk istirahat saat transit.\n\nHarganya memang 2–4 kali kelas ekonomi, jadi kami membantu strategi pembelian: rute dengan selisih bisnis paling wajar, tanggal dengan kursi bisnis tersisa banyak, dan opsi upgrade di bandara bila kelas bisnis belum terjual penuh (sering lebih murah dari beli langsung). Untuk rombongan, kombinasi umum adalah mutawif dan lansia di bisnis, jamaah lain di ekonomi — semua tetap satu penerbangan.",
    features: [
      "Kursi full-flat di maskapai wide-body",
      "Prioritas check-in, boarding, dan bagasi",
      "Akses lounge di bandara asal & transit",
      "Strategi upgrade bandara yang sering lebih murah",
      "Kombinasi grup: lansia di bisnis, rombongan di ekonomi",
    ],
    process: [
      "Konsultasi kenyamanan & anggaran per jamaah",
      "Pilihan rute dan tanggal dengan kursi bisnis tersedia",
      "Penerbitan tiket + reservasi makanan khusus bila perlu",
      "Panduan fasilitas lounge & prioritas di setiap bandara",
    ],
    priceNote: "Rp 28–45 juta PP tergantung maskapai, rute, dan musim",
    priceFrom: 28000000,
    faqs: [
      {
        q: "Apakah kelas bisnis dihitung lebih baik secara ibadah?",
        a: "Tidak ada kaitan langsung dengan keabsahan ibadah — ini soal kesiapan fisik. Jamaah yang tiba dengan tubuh segar biasanya langsung mampu beribadah optimal di hari pertama, sementara yang kelelahan perlu satu-dua hari pemulihan. Untuk perjalanan 9 hari, itu setara 20% dari total waktu.",
      },
      {
        q: "Bisa upgrade sebagian saja untuk rombongan?",
        a: "Bisa dan itu strategi yang kami anjurkan: beri kursi bisnis untuk jamaah paling rentan secara fisik. Upgrade satu arah (pulang saja) juga populer — badan yang lelah setelah ibadah justru paling butuh kenyamanan di penerbangan pulang.",
      },
    ],
    keywords: [
      "tiket bisnis umrah",
      "business class jeddah",
      "upgrade kelas bisnis",
      "umrah lansia nyaman",
    ],
  },
  {
    slug: "charter-grup-umrah-300-kursi",
    name: "Charter Grup Umrah Full Charter 300 Kursi",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Penerbangan charter wide-body eksklusif untuk rombongan besar — jadwal milik sendiri, satu bandara asal, dan seluruh kursi untuk komunitas Anda.",
    longDesc:
      "Full charter adalah penerbangan yang disewa utuh oleh satu penyelenggara: 300 kursi wide-body, bandara asal sesuai permintaan, dan jadwal yang diatur mengikuti jadwal grup — bukan sebaliknya. Format ini dipakai komunitas besar (arisan ibadah, koperasi, rombongan lintas provinsi) yang ingin seluruh jamaah berangkat dan pulang bersamaan dengan konsep perjalanan yang seragam.\n\nTantangan charter adalah komitmen: kursi yang tidak terisi tetap dibayar, jadi kalkulasinya harus jujur sejak awal. Tim kami membantu menyusun proyeksi pengisian kursi, memilih bandara asal yang tepat (CGK, SUB, KNO, UPG dengan slot yang tersedia), serta mengoordinasikan slot bandara Jeddah/Madinah dengan otoritas Saudi. Seluruh proses kontrak, deposit, dan pembayaran bertahap dilindungi escrow.",
    features: [
      "300 kursi wide-body eksklusif satu penyelenggara",
      "Jadwal & bandara asal mengikuti permintaan grup",
      "Pengisian kursi diproyeksikan sebelum komitmen",
      "Slot bandara Saudi dikoordinasikan sejak awal",
      "Kontrak & pembayaran bertahap di bawah escrow",
      "Handling bandara asal & tiba bisa dibundel",
    ],
    process: [
      "Rapat penyelenggara: jumlah jamaah & jendela tanggal",
      "Studi kelayakan slot bandara + proyeksi biaya per kursi",
      "Penandatanganan kontrak charter dengan deposit escrow",
      "Penjualan kursi internal — laporan pengisian berkala",
      "Penerbangan dieksekusi dengan handling terpadu",
    ],
    priceNote: "Rp 11–14 juta/kursi PP tergantung rute & musim (komitmen minimal 90% kursi)",
    priceFrom: 11000000,
    faqs: [
      {
        q: "Berapa minimal pengisian kursi agar charter tidak rugi?",
        a: "Secara ekonomi, charter wide-body butuh pengisian di atas 85–90% agar harga per kursi kompetitif dengan tiket grup reguler. Di bawah itu, setiap kursi kosong diteruskan ke harga seluruh peserta — makanya studi pengisian yang jujur wajib sebelum komitmen.",
      },
      {
        q: "Bisa charter dari kota selain Jakarta?",
        a: "Bisa, dengan catatan slot bandara asal dan kesiapan handling-nya. Surabaya, Medan, dan Makassar punya rekam jejak charter umrah; kota lain dinilai per kasus. Kota dengan kuota slot terbatas biasanya memengaruhi tanggal yang tersedia.",
      },
    ],
    keywords: [
      "charter umrah",
      "full charter 300 kursi",
      "charter grup tanah suci",
      "penerbangan charter jamaah",
      "charter wide body umrah",
    ],
  },
  {
    slug: "charter-regional-120-kursi",
    name: "Charter Regional 120–180 Kursi (Narrow-Body)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Charter narrow-body yang lebih lincah untuk komunitas menengah — cocok dari bandara regional dengan komitmen kursi yang lebih ringan daripada wide-body.",
    longDesc:
      "Tidak setiap komunitas bisa mengumpulkan 300 jamaah untuk full charter — dan justru di ukuran 120–180 kursi banyak komunitas kota menengah menemukan formatnya. Narrow-body (A320/B737 tipe) memungkinkan keberangkatan dari bandara regional seperti Padang, Palembang, Balikpapan, atau Semarang, dengan jarak terbang yang tetap dalam jangkauan tangki bahan bakar pesawat tipe ini.\n\nKomitmen kursi lebih ringan membuat risiko lebih terkendali, dan pengisian bisa didukung dua-tiga komunitas yang berbagi satu pesawat. Jadwalnya tetap eksklusif: berangkat sore, tiba Madinah subuh — pola yang banyak disukai jamaah karena langsung bisa shalat Subuh di Masjid Nabawi.",
    features: [
      "A320/B737 eksklusif 120–180 kursi",
      "Keberangkatan dari bandara regional Indonesia",
      "Komitmen kursi lebih ringan dari wide-body",
      "Bisa berbagi pesawat antar 2–3 komunitas",
      "Pola jadwal populer: berangkat sore, tiba Madinah subuh",
    ],
    process: [
      "Kumpulkan indikasi minat komunitas (loose booking)",
      "Cek kelayakan slot bandara asal & jangkauan rute",
      "Kunci pesawat dengan deposit — buka penjualan kursi",
      "Laporan pengisian mingguan sampai komitmen penuh",
      "Eksekusi penerbangan dengan handling terpadu",
    ],
    priceNote: "Rp 10–13 juta/kursi PP tergantung rute (komitmen minimal 85% kursi)",
    priceFrom: 10000000,
    faqs: [
      {
        q: "Apakah pesawat narrow-body aman untuk 9 jam terbang ke Jeddah?",
        a: "Amat aman — batasannya bukan keselamatan melainkan jangkauan dan kenyamanan. Rute Jakarta–Jeddah dengan narrow-body berada di tepi jangkauan bahan bakar, jadi biasanya dipilih untuk rute lebih pendek (Sumatera, Semarang) atau dengan perhentian teknis. Kenyamanan kursi sedikit di bawah wide-body, tapi jadwal eksklusifnya sering mengalahkan itu semua.",
      },
      {
        q: "Dua komunitas berbagi pesawat, bagaimana koordinasinya?",
        a: "Satu penyelenggara bertindak sebagai pemegang kontrak utama; komunitas kedua menandatangani sub-perjanjian. Handling dibagi berdasarkan blok kursi. Kami memandu struktur ini karena pola berbagi pesawat adalah cara paling realistis komunitas kota menengah mendapat charter.",
      },
    ],
    keywords: [
      "charter narrow body umrah",
      "charter 120 kursi",
      "charter regional umrah",
      "umrah charter kota menengah",
    ],
  },
  {
    slug: "tiket-rute-transit-kuala-lumpur",
    name: "Tiket Rute Transit Kuala Lumpur",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Rute hemat via Kuala Lumpur dengan transit yang terencana — harga lebih rendah, waktu hub yang layak, dan tips transit yang benar-benar berguna.",
    longDesc:
      "Rute Indonesia–Kuala Lumpur–Jeddah adalah salah satu jalur paling matang untuk jamaah hemat: pesawatnya besar, frekuensinya padat, dan KLIA2/KLIA1 terbiasa menerima ribuan jamaah Indonesia setiap minggu. Harganya bisa 1–2 juta lebih murah dari rute langsung — selisih yang berarti untuk keluarga.\n\nKuncinya adalah memilih koneksi yang benar: minimal 3 jam di KL untuk jamaah dengan bagasi banyak, satu terminal yang sama bila memungkinkan, dan jam kedatangan di Jeddah yang tidak membuat grup terlunta-lunta mencari bus. Kami juga menyiapkan panduan transitnya — di mana shalat, di mana isi ulang air, dan bagaimana menghadapi pengecekan bagasi transfer.",
    features: [
      "Pemilihan koneksi minimal 3 jam untuk bagasi jamaah",
      "Opsi transit dalam satu terminal bila tersedia",
      "Panduan transit KL: mushola, makan, koneksi bagasi",
      "Kombinasi dua maskapai dengan proteksi koneksi",
      "Tanggal fleksibel untuk menangkap kursi termurah",
    ],
    process: [
      "Sebutkan kota asal & jendela tanggal Anda",
      "Kami susun 3 kombinasi rute via KL dengan total waktu",
      "Pilih kombinasi, terbitkan seluruh segmen sekaligus",
      "Terima panduan transit yang dikemas siap dibaca",
    ],
    priceNote: "Rp 7–9,5 juta PP dari Jakarta; lebih hemat 1–2 juta dibanding rute langsung",
    priceFrom: 7000000,
    faqs: [
      {
        q: "Apakah bagasi dicek langsung sampai Jeddah?",
        a: "Bila kedua segmen satu tiket/blok satu maskapai partner, bagasi biasanya dicek through sampai Jeddah. Bila dua tiket terpisah, Anda wajib turunkan bagasi, lewat imigrasi transit, dan cek ulang — selisih harganya jadi tidak worth it. Kami selalu sarankan satu blok tiket untuk jamaah.",
      },
      {
        q: "Butuh visa transit Malaysia?",
        a: "Tidak, bila Anda tetap di zona transit dan bagasi dicek through. Visa transit hanya perlu bila Anda keluar bandara atau bagasi harus diterima ulang di tiket terpisah. Ini salah satu alasan pentingnya rancang koneksi dengan benar sejak awal.",
      },
    ],
    keywords: [
      "tiket via kuala lumpur umrah",
      "transit kl jeddah",
      "rute murah umrah",
      "tiket transit malaysia",
    ],
  },
  {
    slug: "tiket-rute-transit-doha",
    name: "Tiket Rute Transit Doha (Hamad)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Rute via Doha dengan bandara transit paling ramah jamaah — hub yang tertata, mushola luas, dan koneksi malam yang pas untuk tiba segar di Tanah Suci.",
    longDesc:
      "Hamad International di Doha sering dijuluki bandara transit paling nyaman untuk jamaah: tempat shalat yang bersih dan luas, penanda yang jelas, dan koneksi antar gerbang yang manusiawi untuk kaki yang sudah lelah. Rute Jakarta–Doha–Jeddah atau Madinah beroperasi setiap hari dengan pesawat besar, dan jam koneksinya banyak pilihan malam — cocok untuk pola jamaah yang ingin tiba pagi.\n\nSelain kenyamanan, rute Doha menawarkan fleksibilitas yang jarang disadari: karena maskapai induknya menjalankan satu blok tiket, keterlambatan segmen pertama otomatis diproteksi ke segmen kedua. Untuk jamaah dengan koper banyak, layanan transfer bagasi antar gerbang di Hamad juga teratur — tinggal jalan, bagasi mengikuti.",
    features: [
      "Koneksi malam yang pas untuk tiba pagi di Tanah Suci",
      "Satu blok tiket dengan proteksi koneksi otomatis",
      "Panduan mushola & area istirahat Hamad",
      "Opsi stopover terorganisir untuk grup yang butuh istirahat",
      "Kombinasi Jeddah masuk, Madinah keluar",
    ],
    process: [
      "Sesuaikan jadwal & kota masuk-keluar Tanah Suci Anda",
      "Kami pilih koneksi dengan hub paling manusiawi",
      "Terbitkan tiket satu blok (proteksi koneksi aktif)",
      "Panduan transit Doha dikirim sebelum keberangkatan",
    ],
    priceNote: "Rp 9–13 juta PP dari Jakarta tergantung musim & kelas",
    priceFrom: 9000000,
    faqs: [
      {
        q: "Berapa lama waktu transit ideal di Doha?",
        a: "2,5–4 jam adalah titik manisnya: cukup untuk turun, berjalan ke gerbang berikutnya, shalat, dan makan ringan tanpa tergesa. Koneksi di bawah 2 jam berisiko saat pesawat pertama delay; di atas 6 jam mending dibuat stopover dengan hotel transit.",
      },
      {
        q: "Bisa keduanya — masuk Jeddah, keluar Madinah?",
        a: "Bisa dan itu pola open-jaw yang sangat umum untuk umrah: tiba di Jeddah langsung ke Makkah, ibadah dulu, lanjut Madinah, pulang dari Madinah. Kami susun tiketnya sebagai satu booking supaya harganya jauh lebih baik daripada dua tiket terpisah.",
      },
    ],
    keywords: [
      "tiket via doha umrah",
      "transit qatar jeddah",
      "rute doha madinah",
      "tiket qatar airways umrah",
    ],
  },
  {
    slug: "tiket-open-jaw-jeddah-madinah",
    name: "Tiket Open-Jaw: Masuk Jeddah, Pulang Madinah",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Struktur tiket paling efisien untuk umrah: tiba di Jeddah menuju Makkah dulu, ibadah, lanjut Madinah, pulang dari Madinah — tanpa memutar jalan.",
    longDesc:
      "Itinerary umrah klasik alurnya: tiba di Jeddah, langsung ihram dan menuju Makkah, tawaf dan sa'i, lanjut Madinah untuk ziarah, lalu pulang dari Madinah. Tiket open-jaw (multi-kota) membeli persis alur itu dalam satu booking — bukan dua tiket pulang-pergi yang memaksa Anda kembali ke Jeddah demi naik pesawat.\n\nDua tiket PP terpisah bisa lebih mahal 2–3 juta dan menambah sehari perjalanan sia-sia. Open-jaw juga mengurangi risiko klasik: keterlambatan satu segmen di tiket terpisah tidak otomatis dilindungi, sementara dalam satu booking maskapai wajib mengamankan koneksi Anda. Untuk grup, struktur ini juga menyelamatkan logistik bus: tidak perlu turun-naik antar dua bandara di hari yang sama.",
    features: [
      "Satu booking: JED masuk, MED keluar (atau sebaliknya)",
      "Hemat 1–3 juta dibanding dua tiket PP terpisah",
      "Proteksi koneksi otomatis dalam satu blok",
      "Alur perjalanan sesuai fiqih umrah tanpa memutar",
      "Fleksibilitas tukar urutan kota masuk-keluar",
    ],
    process: [
      "Tentukan alur: Makkah dulu atau Madinah dulu",
      "Kami kuartikan opsi tanggal kedua bandara",
      "Terbitkan tiket multi-kota satu blok",
      "Panduan imigrasi & izin masuk per bandara dikirim",
    ],
    priceNote: "Rp 8,5–12,5 juta PP tergantung musim dan maskapai",
    priceFrom: 8500000,
    faqs: [
      {
        q: "Kenapa tidak semua travel pakai open-jaw?",
        a: "Sebagian penyelenggara mengunci blok kursi satu bandara demi kesederhanaan logistik, atau menerima selisih harga karena beli jauh hari. Untuk jamaah yang menyusun sendiri, open-jaw hampir selalu lebih efisien — baik waktu, biaya, maupun tenaga.",
      },
      {
        q: "Apakah izin masuk Madinah berbeda dari Jeddah?",
        a: "Tidak — satu visa umrah sah untuk kedua bandara. Yang berbeda hanyalah antrean imigrasinya; Madinah umumnya lebih ringan dari Jeddah, jadi banyak grup sengaja memilih tiba di Madinah untuk memangkas waktu tunggu.",
      },
    ],
    keywords: [
      "tiket open jaw umrah",
      "masuk jeddah pulang madinah",
      "tiket multi kota saudi",
      "tiket makkah madinah",
    ],
  },
  {
    slug: "tiket-domestik-segmen-jeddah-madinah",
    name: "Tiket Domestik Segmen Jeddah–Madinah (Saudi)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Penerbangan domestik Saudi antara Jeddah, Madinah, dan Riyadh untuk jamaah dengan jadwal rapat — satu jam terbang menggantikan 4–5 jam bus.",
    longDesc:
      "Bus adalah pilihan klasik Makkah–Madinah, tapi tidak untuk semua situasi: jamaah lansia yang tubuhnya sudah di ambang batas, grup dengan jadwal rapat, atau perjalanan yang menyisakan hanya satu hari untuk pindah kota. Penerbangan domestik Saudi (Jeddah–Madinah ±55 menit terbang, juga Riyadh dan Dammam) adalah solusinya — dengan catatan perhitungan waktu totalnya tetap jujur: proses bandara menambah 2–3 jam.\n\nLayanan ini menerbitkan tiket domestik segmen Saudi dari sistem maskapai lokal, dengan penjadwalan yang menyesuaikan ritme ibadah Anda (bukan kebalikannya). Untuk grup besar, kami juga menimbangkan jujur kapan bus justru lebih baik — kadang selisih harga 5 kali lipat tidak sebanding untuk jamaah muda yang bisa tidur di bus.",
    features: [
      "Segmen JED–MED, MED–JED, dan koneksi Riyadh/Dammam",
      "Jadwal disesuaikan ritme ibadah grup",
      "Perhitungan total waktu terbuka (bandara + terbang + antar)",
      "Kombinasi dengan tiket internasional open-jaw",
      "Perbandingan jujur bus vs pesawat per kasus",
    ],
    process: [
      "Sampaikan itinerary Tanah Suci Anda hari per hari",
      "Kami tawarkan segmen udara yang benar-benar menghemat",
      "Terbitkan tiket domestik dari sistem maskapai Saudi",
      "Panduan bandara domestik (check-in, bagasi, mushola) dikirim",
    ],
    priceNote: "Rp 1,2–2,5 juta/segmen tergantung maskapai & kedekatan tanggal",
    priceFrom: 1200000,
    faqs: [
      {
        q: "Lebih cepat pesawat atau bus antar Makkah–Madinah?",
        a: "Untuk jarak Makkah–Madinah (±450 km), kereta Haramain sering menang total: 2 jam di rel dengan keberangkatan dari dekat Haram. Pesawat menang untuk rute yang lebih jauh (Riyadh, Dammam) atau bila koneksi internasional Anda lewat bandara. Kami hitungkan waktu pintu-ke-pintu, bukan cuma jam terbangnya.",
      },
      {
        q: "Bagasi umrah saya banyak, apa batas domestiknya?",
        a: "Maskapai domestik Saudi umumnya memberi 23–30 kg plus hand carry, lebih rendah dari tiket internasional jamaah. Hitung bagasi sejak awal — bila rombongan membawa banyak, kombinasi bus untuk bagasi + kereta/pesawat untuk jamaah sering jadi solusi paling elegan.",
      },
    ],
    keywords: [
      "tiket domestik saudi",
      "jeddah madinah pesawat",
      "tiket dalam negeri saudi",
      "segmen saudi jamaah",
    ],
  },
  {
    slug: "upgrade-kelas-ekonomi-bisnis",
    name: "Upgrade Kursi Ekonomi ke Bisnis",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Upgrade dari ekonomi ke bisnis dengan strategi yang benar — bid saat check-in, penawaran di bandara, atau upgrade terjadwal yang jauh lebih murah.",
    longDesc:
      "Kursi bisnis dengan harga ekonomi penuh memang jarang — tapi kursi bisnis dengan harga 30–50% dari daftar ada kalau Anda tahu mekanismenya. Ada tiga jalur: upgrade terjadwal (diproses sebelum terbang saat kursi bisnis belum penuh), bid upgrade di beberapa maskapai (Anda menawar harga, maskapai menerima bila kursi tersisa), dan penawaran di konter saat check-in yang sering mengejutkan murahnya.\n\nLayanan ini memantau pola kursi maskapai untuk penerbangan Anda dan menyarankan jalur upgrade dengan peluang terbaik. Untuk rombongan, kami membantu negosiasi blok upgrade — misalnya lima kursi bisnis untuk jamaah lansia di penerbangan pulang. Yang kami jelaskan jujur sejak awal: upgrade bukan hak, tapi peluang — dan peluang itu bisa ditingkatkan dengan cara membeli yang benar.",
    features: [
      "Analisis pola kursi penerbangan target Anda",
      "Strategi bid, terjadwal, dan penawaran check-in",
      "Negosiasi blok upgrade untuk rombongan",
      "Saran penerbangan dengan peluang upgrade tinggi",
      "Perbandingan biaya upgrade vs beli bisnis sejak awal",
    ],
    process: [
      "Kirim nomor booking & tanggal penerbangan Anda",
      "Tim menganalisis kepadatan kursi & pola maskapai",
      "Strategi upgrade dikirim dengan tingkat peluangnya",
      "Eksekusi bersama — status dikonfirmasi hingga kursi aman",
    ],
    priceNote: "Mulai Rp 4–12 juta/segmen tergantung jalur upgrade & kepadatan kursi",
    priceFrom: 4000000,
    faqs: [
      {
        q: "Kapan waktu terbaik mencoba upgrade?",
        a: "Tiga momen: 1–2 minggu sebelum terbang (maskapai mulai buka penawaran terjadwal), 24 jam sebelum (check-in online, beberapa maskapai tawarkan upgrade diskon), dan di konter check-in (kursi bisnis sisa sering dilepas murah). Peluang terbaik di penerbangan mid-week dan musim sepi.",
      },
      {
        q: "Upgrade dari Jakarta saja atau bolak-balik?",
        a: "Paling banyak dicari adalah upgrade segmen pulang — tubuh yang lelah pasca-ibadah paling diuntungkan kursi rebah. Segmen berangkat dengan kursi ekonomi biasa tetap layak karena semangat keberangkatan menolong kenyamanan.",
      },
    ],
    keywords: [
      "upgrade kelas bisnis",
      "upgrade kursi pesawat",
      "bid upgrade maskapai",
      "bisnis murah umrah",
    ],
  },
  {
    slug: "excess-baggage-prepurchase",
    name: "Prepurchase Bagasi Tambahan (Excess Baggage)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Beli kilo bagasi tambahan sebelum terbang, bukan di konter bandara — hemat 30–60% dari tarif di loket, tanpa tawar-menawar saat panik.",
    longDesc:
      "Hampir semua jamaah pulang membawa lebih banyak daripada saat berangkat: air zamzam 5 liter, kurma bingkisan, dan permintaan keluarga yang tak berhitung. Kekurangan kilo di konter bandara adalah momen paling mahal dalam perjalanan — tarif excess di loket bisa 2–3 kali lipat harga prepurchase per kilo.\n\nLayanan ini menghitung kebutuhan bagasi Anda secara realistis (destinasi, durasi, daftar bawaan yang wajar) lalu menerbitkan pembelian kilo tambahan di sistem maskapai sebelum keberangkatan. Untuk grup, kami menyusun strategi distribusi: bagasi mana yang diisi oleh siapa, supaya kelebihan kilo satu orang tidak dibayar mahal sementara kursi bagasi orang lain masih longgar.",
    features: [
      "Estimasi kebutuhan kilo berdasarkan daftar bawaan",
      "Pembelian kilo tambahan di sistem maskapai sebelum terbang",
      "Strategi distribusi bagasi untuk grup",
      "Panduan barang terlarang (zamzam, kurma, obat) per maskapai",
      "Tersedia untuk 12+ maskapai yang melayani rute Saudi",
    ],
    process: [
      "Kirim itinerary & perkiraan daftar bawaan pulang",
      "Kami hitung kilo yang wajib dibeli sekarang",
      "Penerbitan prepurchase bagasi di sistem maskapai",
      "Kuitansi & panduan pengklaiman kilo dikirim ke Anda",
    ],
    priceNote: "Mulai Rp 180 ribu/5 kg prepurchase (tarif loket bisa 2–3× lipatnya)",
    priceFrom: 180000,
    faqs: [
      {
        q: "Berapa bagasi standar tiket umrah?",
        a: "Maskapai full-service di rute Jeddah umumnya memberi 40–46 kg (2 koper), low-cost 20–30 kg. Zamzam 5 liter biasanya dihitung di luar bagasi bila dibeli kemasan resmi — tapi aturannya per maskapai, jadi konfirmasi sebelum berangkat, bukan di konter.",
      },
      {
        q: "Bisa beli kilo tambahan saat sudah di Saudi?",
        a: "Bisa, lewat kanal online maskapai atau kantor cabangnya di Jeddah/Madinah — dan itu tetap lebih murah dari loket check-in. Yang tidak bisa dibeli sejak awal adalah kilo yang melebihi batas maksimal sistem, makanya hitung dari Indonesia bila rencananya sudah jelas berat.",
      },
    ],
    keywords: [
      "excess baggage umrah",
      "beli kilo tambahan",
      "bagasi tambahan pesawat",
      "tarif kelebihan bagasi",
    ],
  },
  {
    slug: "kursi-legroom-embaring-prioritas",
    name: "Kursi Legroom Ekstra & Embaring Prioritas",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Kursi kaki-lega dan embaring dini untuk kenyamanan yang terjangkau — pilihan pintar untuk jamaah tinggi, lansia, dan ibu dengan anak kecil.",
    longDesc:
      "Selisih kursi legroom ekstra (biasanya baris emergency exit atau depan) dengan kursi standar hanya beberapa ratus ribu — tapi bedanya terasa sungguhan pada perjalanan 9 jam. Kaki yang tidak bengkak, tidur yang lebih utuh, dan turun pesawat tanpa linu. Ditambah embaring prioritas, Anda menempati kabin dengan tenang tanpa antrean yang menumpuk.\n\nKursi ini terbatas dan laku keras — di rute jamaah, baris legroom sering diambil grup yang paham. Layanan ini mengunci kursi pilihan Anda sejak penerbitan tiket, dengan pemetaan baris yang sesuai kebutuhan: dekat toilet untuk lansia yang sering ke kamar kecil, jauh dari toilet untuk yang tidurnya peka, dekat mushola indikasi di beberapa maskapai.",
    features: [
      "Pemetaan baris legroom per tipe pesawat",
      "Preferensi posisi: dekat toilet, jendela, lorong, depan",
      "Embaring prioritas untuk masuk kabin tanpa antre",
      "Penguncian kursi sejak penerbitan tiket",
      "Paket grup: pemetaan kursi seluruh jamaah sekali jalan",
    ],
    process: [
      "Kirim nomor booking Anda",
      "Kami petakan kursi terbaik yang masih tersedia",
      "Anda pilih — kami kunci dan terbitkan tagihannya",
      "Konfirmasi kursi dikirim dengan petanya",
    ],
    priceNote: "Rp 150–600 ribu/kursi/segmen tergantung maskapai & posisi baris",
    priceFrom: 150000,
    faqs: [
      {
        q: "Kursi emergency exit bisa untuk siapa saja?",
        a: "Tidak semua — maskapai menuntut penumpang baris exit mampu membantu pembukaan pintu dalam darurat, jadi lansia paruh baya berat, ibu dengan bayi, dan anak-anak biasanya tidak diizinkan. Untuk kebutuhan kaki-lega jamaah lansia, baris depan kabin adalah pilihan yang sah.",
      },
      {
        q: "Worth it untuk penerbangan transit?",
        a: "Sangat — justru di perjalanan panjang dengan transit, kursi lega menentukan kondisi tubuh saat tiba. Kombinasikan dengan kursi lega di kedua segmen bila anggaran memungkinkan; bila hanya satu, ambil segmen yang lebih panjang.",
      },
    ],
    keywords: [
      "kursi legroom",
      "kursi lega pesawat",
      "embaring prioritas",
      "pilih kursi umrah",
    ],
  },
  {
    slug: "tiket-domestik-penghubung-gateway",
    name: "Tiket Domestik Penghubung ke Kota Keberangkatan",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Tiket dari kota Anda ke pusat keberangkatan umrah (Jakarta/Surabaya/Medan) dengan jaminan koneksi — jadwal yang sengaja berjarak aman dari penerbangan utama.",
    longDesc:
      "Jamaah dari kota tanpa penerbangan langsung ke Saudi harus menjangkau pusat keberangkatan dulu — dan di sinilah kesalahan jadwal paling mahal terjadi. Penerbangan domestik yang delay tiga jam bisa memutus seluruh perjalanan internasional, dan maskapai domestik tidak wajib menanggung tiket internasional yang ketinggalan bila dibeli terpisah.\n\nLayanan ini menyusun koneksi dengan jarak aman yang dihitung: minimal 5–6 jam dari kedatangan domestik ke keberangkatan internasional di bandara besar, dengan rencana cadangan penerbangan berikutnya bila delay terjadi. Untuk grup dari satu kota, kami mengusulkan opsi alternatif yang sering lebih tenang: berangkat sehari sebelumnya dengan transit hotel bandara — biaya tambahnya sering kecil dibanding risikonya.",
    features: [
      "Jadwal dengan jarak aman 5–6 jam ke penerbangan utama",
      "Rencana cadangan: penerbangan berikutnya yang tersedia",
      "Opsi H-1 berangkat + hotel transit bandara",
      "Kombinasi kereta/pesawat untuk jalur yang lebih andal",
      "Paket grup dari satu kota dengan jadwal seragam",
    ],
    process: [
      "Sebutkan kota asal & tanggal penerbangan internasional",
      "Kami susun 2–3 skenario koneksi dengan tingkat risikonya",
      "Terbitkan tiket domestik sesuai skenario pilihan",
      "Panduan hari-H: urutan check-in, bagasi, gerbang",
    ],
    priceNote: "Rp 800 ribu–2 juta PP tergantung kota asal & kedekatan tanggal",
    priceFrom: 800000,
    faqs: [
      {
        q: "Berapa jam jarak aman antar penerbangan?",
        a: "Kami pegang minimum 5 jam di bandara besar (CGK, SUB, KNO) dan 6–7 jam bila penerbangan domestik datang dari rute yang rawan cuaca. Terdengar boros waktu — sampai Anda menghitung biaya tiket internasional yang hangus karena delay 2 jam.",
      },
      {
        q: "Ada proteksi bila penerbangan domestik delay?",
        a: "Bila kedua tiket satu booking (satu maskapai/partner), maskapai wajib mengamankan koneksi. Bila terpisah, tanggung jawabnya ada di Anda — itulah kenapa kami selalu menimbang opsi satu booking dulu sebelum menawarkan yang murah tapi terpisah.",
      },
    ],
    keywords: [
      "tiket koneksi umrah",
      "tiket domestik ke jakarta",
      "transit bandara umrah",
      "dari kota ke jeddah",
    ],
  },
  {
    slug: "tiket-musim-puncak-ramadhan",
    name: "Tiket Musim Puncak Ramadhan",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Kursi penerbangan untuk Ramadhan akhir — musim termahal dan tercepat habisnya. Strategi pembelian dini dengan tanggal yang dijaga fleksibilitasnya.",
    longDesc:
      "Sepuluh malam terakhir Ramadhan adalah puncak tertinggi permintaan penerbangan ke Tanah Suci sepanjang tahun: harga naik 40–80%, kursi grup terjual bertahun sebelumnya, dan yang membeli mendadak tinggal pilihan transit ganda dengan harga penuh. Jamaah yang bercita-cita malam Lailatul Qadar di Masjidil Haram perlu strategi yang jauh lebih awal daripada yang lain.\n\nLayanan ini membuka jendela pembelian dini dengan dua perlindungan: opsi tanggal yang bisa digeser beberapa hari (untuk menyesuaikan hilal & jadwal grup), dan kombinasi kota masuk yang lebih hemat (misalnya masuk Madinah yang antreannya ringan). Kami juga jujur tentang alternatif: bila anggaran tidak memungkinkan puncak Ramadhan, 10 hari pertama Ramadhan atau Syawal menawarkan pengalaman yang jauh lebih murah dengan Haram yang tetap penuh keberkahan.",
    features: [
      "Pembelian dini dengan deposit yang dilindungi",
      "Opsi geser tanggal ±3–5 hari sesuai penentuan awal Ramadhan",
      "Pilihan kota masuk yang antreannya lebih ringan",
      "Alternatif jujur: awal Ramadhan & Syawal yang lebih hemat",
      "Prioritas kursi grup dengan pemetaan duduk serentak",
    ],
    process: [
      "Booking indikatif 6–9 bulan sebelum Ramadhan target",
      "Deposit escrow mengunci kursi di rentang tanggal fleksibel",
      "Konfirmasi final saat awal Ramadhan dipastikan",
      "E-ticket terbit — sisa pembayaran sesuai jadwal kontrak",
    ],
    priceNote: "Rp 12–19 juta PP dari Jakarta saat puncak (reguler Rp 8–12 juta)",
    priceFrom: 12000000,
    faqs: [
      {
        q: "Seberapa awal harus beli tiket Ramadhan?",
        a: "Idealnya 6–9 bulan sebelumnya. Kursi blok untuk grup di 10 malam terakhir biasanya habis jauh sebelum Sya'ban, dan harga per kursi naik nyaris setiap minggu menjelang. Pembelian dini bukan soal kaya — tapi soal mendapatkan tanggal yang Anda inginkan.",
      },
      {
        q: "Apakah lebih murah tiba di Madinah saat Ramadhan?",
        a: "Umumnya ya — permintaan tiba di Jeddah lebih panas, sementara Madinah punya kapasitas lebih longgar. Alur Madinah-dulu juga secara fiqih sah untuk umrah, dan Haram Nabawi di awal Ramadhan adalah pengalaman yang tak kalah bermakna.",
      },
    ],
    keywords: [
      "tiket umrah ramadhan",
      "umrah akhir ramadhan",
      "tiket musim puncak",
      "lailatul qadar makkah",
    ],
  },
  {
    slug: "tiket-multi-kota-umrah-plus",
    name: "Tiket Multi-Kota Umrah Plus (Turki/Dubai/Mesir)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Struktur tiket untuk umrah plus dua negara: Tanah Suci lalu lanjut destinasi tambahan — satu booking, tidak ada segmen yang tumpang tindih.",
    longDesc:
      "Umrah plus berarti satu perjalanan menyentuh dua-tiga negara — dan tiketnya harus dirancang sebagai satu rangkaian, bukan tiga tiket lepas. Struktur yang tepat misalnya: Jakarta–Madinah (masuk), Madinah–Istanbul (segmen plus), Istanbul–Jakarta (pulang). Salah merancang membuat Anda membayar dua kali untuk jarak yang sama, atau lebih buruk: tiba di Istanbul tanpa kepastian segmen pulang.\n\nKami menyusun blok tiket multi-kota lengkap dengan perhatian pada dua hal yang sering luput: kebutuhan visa transit/negara tujuan (Turki, UEA, Mesir punya aturan berbeda) dan berat bagasi yang diizinkan tiap segmen — maskapai regional plus sering lebih ketat dari maskapai internasional utama. Semua diperiksa sebelum Anda bayar, bukan setelahnya.",
    features: [
      "Rancangan segmen: Tanah Suci → negara plus → pulang",
      "Satu booking untuk seluruh rangkaian negara",
      "Pengecekan kebutuhan visa per negara sejak awal",
      "Audit bagasi per segmen (regional lebih ketat)",
      "Kombinasi maskapai yang melindungi koneksi antar negara",
    ],
    process: [
      "Tentukan urutan negara & jumlah hari di tiap negara",
      "Kami susun blok segmen + peringatan visa per negara",
      "Penerbitan tiket lengkap satu booking",
      "Panduan imigrasi tiap negara & checklist transit dikirim",
    ],
    priceNote: "Rp 12–18 juta/jamaah untuk rangkaian lengkap Tanah Suci + satu negara plus",
    priceFrom: 12000000,
    faqs: [
      {
        q: "Visa apa yang dibutuhkan untuk umrah plus Turki?",
        a: "WNI umumnya perlu e-visa atau visa Turki tergantung kebijakan berlaku — statusnya bisa berubah, jadi kami cek saat booking. Segmen via negara lain (misalnya transit UEA) umumnya tanpa visa bila tetap di zona transit dengan bagasi through.",
      },
      {
        q: "Urutan mana yang lebih baik: Tanah Suci dulu atau destinasi plus dulu?",
        a: "Mayoritas memilih Tanah Suci dulu — fisik yang masih segar dipakai untuk ibadah yang paling berat, dan destinasi plus jadi bagian santai di akhir. Alur sebaliknya dipilih saat cuaca destinasi plus lebih baik di akhir rangkaian (misalnya musim salju Turki).",
      },
    ],
    keywords: [
      "tiket umrah plus turki",
      "tiket multi kota",
      "umrah plus dubai tiket",
      "tiket istanbul jeddah",
    ],
  },
  {
    slug: "lounge-bandara-berangkat",
    name: "Lounge Bandara Sebelum Berangkat",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Voucher lounge di bandara keberangkatan — duduk tenang, isi tenaga, dan shalat dengan wudhu yang benar sebelum penerbangan 9 jam dimulai.",
    longDesc:
      "Tiga jam sebelum keberangkatan internasional di bandara penuh jamaah adalah waktu yang mudah habis untuk hal-hal yang melelahkan: antrean, kursi kosong yang sulit dicari, dan makanan yang tidak tepat sebelum terbang lama. Lounge menjawab itu dengan harga yang sekarang jauh lebih terjangkau lewat pembelian voucher — makan ringan yang tepat, colokan untuk ponsel, tempat wudhu yang bersih, dan tempat duduk yang benar-benar bisa untuk beristirahat.\n\nUntuk grup, lounge juga berfungsi sebagai titik kumpul yang jauh lebih teratur daripada lorong umum: koordinator menghitung jamaah di satu ruang, memberi instruksi terakhir, dan semua berangkat ke gerbang bersama. Tersedia di CGK, SUB, KNO, UPG, dan bandara transit utama.",
    features: [
      "Voucher lounge di 5+ bandara Indonesia & transit utama",
      "Titik kumpul grup yang teratur sebelum boarding",
      "Makanan halal & area shalat dengan fasilitas wudhu",
      "Colokan & WiFi penuh untuk kabar terakhir keluarga",
      "Durasi 3–5 jam sesuai kebutuhan grup",
    ],
    process: [
      "Sebutkan bandara, tanggal, dan jumlah orang",
      "Voucher diterbitkan dengan kode QR per jamaah",
      "Datang ke lounge, scan kode — masuk tanpa pembayaran di tempat",
    ],
    priceNote: "Rp 150–350 ribu/orang/kunjungan tergantung bandara & lounge",
    priceFrom: 150000,
    faqs: [
      {
        q: "Berapa lama sebaiknya masuk lounge sebelum boarding?",
        a: "3–4 jam sebelum keberangkatan adalah titik ideal setelah check-in bagasi selesai. Masuk terlalu awal membuat durasi voucher terbuang saat Anda masih antre imigrasi; terlalu akhir membuat Anda buru-buru. Untuk grup, masuk bersama setelah semua bagasi dicheck-in.",
      },
      {
        q: "Apakah anak-anak dikenakan biaya sama?",
        a: "Kebijakan berbeda per lounge — umumnya anak di bawah 2 tahun gratis, dan sebagian lounge memberi tarif anak di bawah 12 tahun. Saat penerbitan voucher, sebutkan komposisi usia grup dan kami hitungkan yang paling hemat.",
      },
    ],
    keywords: [
      "lounge bandara soekarno hatta",
      "voucher lounge",
      "istirahat bandara umrah",
      "lounge jamaah",
    ],
  },
  {
    slug: "tiket-flexi-rebooking-perlindungan-jadwal",
    name: "Tiket Flexi & Perlindungan Jadwal (Rebooking)",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Perlindungan perubahan jadwal: kemampuan geser tanggal tanpa denda besar — asuransi yang paling sering menyelamatkan jamaah yang rencananya berubah.",
    longDesc:
      "Rencana jamaah berubah lebih sering dari yang disangka: visa terlambat terbit, izin kantor bergeser, keluarga sakit, atau grup mundur sebulan. Tiket biasa menghukum perubahan itu dengan denda rebooking plus selisih tarif kelas saat ini — totalnya kadang setengah harga tiket baru. Tiket flexi (atau tambahan perlindungan jadwal) memangkas denda itu secara signifikan dan menyederhanakan prosesnya.\n\nLayanan ini menerbitkan tiket dengan opsi fleksibilitas atau membeli perlindungan rebooking yang tersedia di maskapai Anda, lalu menjelaskan batas-batasnya dengan jujur: berapa kali boleh geser, sampai kapan, dan apa yang tetap dibayar (selisih tarif tetap ada bila kelas tujuan lebih mahal). Untuk jamaah yang jadwalnya masih bersifat rencana, opsi ini hampir selalu layak.",
    features: [
      "Tiket flexi atau perlindungan rebooking maskapai",
      "Penjelasan batas: jumlah perubahan, batas waktu, selisih tarif",
      "Bantuan eksekusi rebooking saat jadwal benar-benar berubah",
      "Kombinasi dengan visa yang masih menunggu kepastian",
      "Laporan perubahan jadwal terdokumentasi rapi",
    ],
    process: [
      "Kirim tanggal rencana & tingkat ketidakpastiannya",
      "Kami tawarkan tiket flexi vs normal + perlindungan",
      "Penerbitan tiket sesuai tingkat fleksibilitas pilihan",
      "Bila perlu geser: tim eksekusi rebooking di hari yang sama",
    ],
    priceNote: "Tambahan mulai Rp 400–900 ribu/tiket untuk perlindungan jadwal",
    priceFrom: 400000,
    faqs: [
      {
        q: "Flexi bisa mengganti tanggal berapa kali?",
        a: "Tergantung produk: umumnya 1–3 kali perubahan sebelum keberangkatan, dengan pemberitahuan minimal 24–72 jam. Selisih tarif tetap berlaku bila kelas tujuan lebih mahal — flexi menghilangkan dendanya, bukan membuat tiket jadi gratis geser tanpa batas.",
      },
      {
        q: "Lebih murah beli tiket flexi atau baru bila jadwal berubah?",
        a: "Hitungan kasar: bila peluang berubah di atas 30–40%, flexi biasanya menang. Di bawah itu, tiket normal dengan menabung selisihnya lebih rasional. Kami bantu hitungkan dengan angka nyata maskapai Anda — bukan dengan kira-kira.",
      },
    ],
    keywords: [
      "tiket flexi umrah",
      "rebooking tiket",
      "tiket tanggal fleksibel",
      "perlindungan jadwal pesawat",
    ],
  },
  {
    slug: "tiket-anak-bayi-umrah",
    name: "Tiket Anak & Bayi (CHD/INF) untuk Umrah Keluarga",
    categorySlug: "tiket-penerbangan",
    shortDesc:
      "Penerbitan tiket anak (2–11 tahun) dan bayi (di bawah 2 tahun) dengan aturan tarif yang benar — banyak keluarga membayar lebih karena salah memahami kelas tarifnya.",
    longDesc:
      "Tarif anak dan bayi sering disalahpahami. Bayi di bawah 2 tahun (INF) tanpa kursi terpisah dikenakan sekitar 10% tarif dewasa — tapi bila orang tua menginginkan kursi kereta bayi (bassinet) atau kursi terpisah, perhitungannya berubah. Anak 2–11 tahun (CHD) membayar 75–100% tarif dewasa tergantung maskapai, dengan bagasi yang bisa lebih rendah dari dewasa di beberapa maskapai.\n\nKesalahan paling mahal adalah menerbitkan anak sebagai dewasa karena 'biar aman' — membuang 25% tarif, atau sebaliknya menerbitkan bayi sebagai anak karena takut ditolak di imigrasi. Layanan ini menerbitkan tiket dengan kelas tarif yang tepat, mengurus permintaan bassinet dan makanan bayi, serta memetakan kursi keluarga: bayi di kursi yang benar, anak di dekat orang tua, lansia dekat lorong.",
    features: [
      "Penerbitan tarif INF/CHD yang tepat per maskapai",
      "Permintaan bassinet & makanan bayi diatur sejak awal",
      "Pemetaan kursi keluarga (bayi-anak-orang tua-lansia)",
      "Panduan dokumentasi usia anak untuk imigrasi",
      "Perhitungan bagasi anak yang jujur per maskapai",
    ],
    process: [
      "Sampaikan usia anak saat tanggal terbang (bukan saat booking)",
      "Kami hitung tarif INF/CHD & tawarkan konfigurasi kursi",
      "Penerbitan tiket seluruh keluarga satu booking",
      "Checklist perlengkapan terbang bayi/anak dikirim",
    ],
    priceNote: "Bayi INF mulai 10% tarif dewasa; anak CHD 75–100% tergantung maskapai",
    priceFrom: 800000,
    faqs: [
      {
        q: "Anak saya berumur 23 bulan saat booking tapi 25 bulan saat terbang — pakai tarif mana?",
        a: "Yang menentukan adalah usia pada tanggal penerbangan, bukan tanggal booking. Bayi yang sudah melewati 2 tahun saat terbang harus diterbitkan sebagai anak. Ini kesalahan klasik yang membuat keluarga harus membeli tiket baru di bandara — jauh lebih mahal.",
      },
      {
        q: "Bayi dapat bagasi?",
        a: "Umumnya ya — 10 kg plus stroller yang dicheck-in gratis di kebanyakan maskapai. Cukup untuk perlengkapan bayi dalam perjalanan. Yang tidak dapat: kursi terpisah (kecuali dibeli sebagai CHD) dan jatah kilo tambahan di luar ketentuan.",
      },
    ],
    keywords: [
      "tiket anak umrah",
      "tiket bayi pesawat",
      "tarif anak maskapai",
      "umrah keluarga bayi",
    ],
  },

  // ================= KATEGORI 3: HOTEL & AKOMODASI =================
  {
    slug: "hotel-makkah-dekat-masjidil-haram",
    name: "Hotel Makkah Dekat Masjidil Haram (<300 m)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Pemesanan hotel Makkah dengan jarak nyata di bawah 300 meter ke Haram — berjalan kaki 3–5 menit untuk setiap shalat, tanpa klaim 'dekat' yang menyesatkan.",
    longDesc:
      "Jarak hotel ke Masjidil Haram adalah faktor harga terbesar di Makkah — dan faktor kenyamanan ibadah yang paling sering dijanjikan berlebihan. Hotel 'dekat Haram' dalam brosur kadang berarti 800 meter lewat jalan yang menanjak, yang untuk kaki lansia bisa terasa seperti kilometer. Layanan ini hanya menawarkan properti dengan jarak terukur di bawah 300 meter dari pintu masuk utama — lengkap dengan nomor gerbang terdekat dan estimasi menit berjalan kaki yang jujur.\n\nAnda memilih berdasarkan kebutuhan: hotel menghadap langsung ke Haram, properti di koridor Ajyad yang lift-nya ramah lansia, atau blok hotel di belakang Clock Tower dengan harga sedikit lebih rendah tapi tetap dalam radius 200 meter. Harga per malam per kamar sangat sensitif terhadap musim — 5 kali lipat di Ramadhan akhir dibanding bulan sepi — dan semua tarif kami tampilkan dalam jendela tanggal yang Anda pilih, bukan harga terendah yang hanya berlaku tiga hari dalam setahun.",
    features: [
      "Hanya properti terukur <300 m dari pintu Haram",
      "Jarak dalam meter + estimasi menit berjalan kaki",
      "Info gerbang Haram terdekat per hotel",
      "Tipe kamar quad/triple/double dengan tarif per jendela tanggal",
      "Check-in grup dengan daftar kunci terorganisir",
      "Opsi sarapan & tanpa sarapan dengan selisih harga jelas",
    ],
    process: [
      "Tentukan tanggal, jumlah kamar, dan tipe kamar",
      "Terima pilihan hotel dengan jarak meter ke Haram",
      "Pilih & booking dengan deposit yang dilindungi escrow",
      "Voucher hotel + panduan check-in dikirim sebelum berangkat",
    ],
    priceNote: "Rp 1,5–8 juta/malam/kamar tergantung musim, jarak, dan tipe kamar",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Kenapa hotel dekat Haram harganya bisa 5 kali lipat?",
        a: "Karena permintaannya juga berlipat: setiap jamaah menghitung menit berjalan kaki, bukan cuma bintang hotel. Di musim puncak, selisih 100 meter bisa mencapai 2 juta rupiah per malam per kamar. Pertimbangkan jujur: bila anggaran ketat, hotel 500–800 meter dengan shuttle bisa jadi kompromi yang sehat.",
      },
      {
        q: "Apakah jarak dihitung dari pintu hotel atau lobi?",
        a: "Kami menghitung dari pintu keluar hotel ke pintu masuk Haram terdekat, mengikuti jalur berjalan nyata (bukan jarak garis lurus di peta). Ini standar yang kami pakai agar angka meter di katalog sama dengan yang Anda alami di lapangan.",
      },
      {
        q: "Kamar quad itu bagaimana bentuknya?",
        a: "Empat orang per kamar dengan dua tempat tidur besar atau satu besar plus dua single — konfigurasi standar hotel Makkah untuk grup. Kenyamanannya wajar untuk tidur, tapi bila rombongan Anda punya jamaah yang tidurnya peka suara, selisih ke kamar double patut dipertimbangkan.",
      },
    ],
    keywords: [
      "hotel makkah dekat haram",
      "hotel dekat masjidil haram",
      "hotel makkah 100 meter",
      "penginapan makkah",
      "hotel makkah murah",
    ],
  },
  {
    slug: "hotel-madinah-dekat-masjid-nabawi",
    name: "Hotel Madinah Dekat Masjid Nabawi",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Hotel di kawasan Central Area Madinah, 50–400 meter dari gerbang Masjid Nabawi — harga lebih bersahabat dari Makkah dengan kualitas yang tak kalah.",
    longDesc:
      "Madinah adalah kota yang jauh lebih ramah pada kaki jamaah: kawasan Central Area di sekitar Nabawi dipenuhi hotel dalam radius 400 meter, jalannya datar, dan harga per malam umumnya 30–50% lebih rendah dari Makkah untuk kualitas yang setara. Banyak grup sengaja mengalokasikan lebih banyak malam di Madinah — shalat di Nabawi, ziarah yang santai, dan istirahat sebelum menuju Makkah.\n\nPilihan kami terbagi dalam tiga profil: hotel menghadap langsung Kubah Hijau dengan tarif tertinggi, properti 100–250 meter dengan nilai terbaik, dan hotel 300–400 meter yang jadi titik manis harga untuk grup besar. Setiap pilihan disertai gerbang Nabawi terdekat — penting karena posisi pintu masuk memengaruhi jarak shalat jamaah perempuan dan antrean Raudhah.",
    features: [
      "Radius 50–400 m dari gerbang Masjid Nabawi",
      "Info gerbang Nabawi terdekat per hotel",
      "Harga 30–50% lebih bersahabat dari Makkah setara",
      "Kamar quad/grup dengan blok kamar berdekatan",
      "Opsi apartemen untuk keluarga yang menginap lama",
      "Koordinasi check-in bersama jadwal ziarah grup",
    ],
    process: [
      "Tentukan jumlah malam di Madinah & komposisi kamar",
      "Terima pilihan hotel dengan gerbang terdekat masing-masing",
      "Booking dengan deposit escrow",
      "Voucher hotel dikirim bersama itinerary ziarah Madinah",
    ],
    priceNote: "Rp 900 ribu–4 juta/malam/kamar tergantung musim & jarak ke Nabawi",
    priceFrom: 900000,
    faqs: [
      {
        q: "Lebih baik di Madinah lama atau Makkah lama?",
        a: "Secara biaya, malam Madinah jauh lebih murah — banyak grup memakai Madinah sebagai base untuk pulih sebelum Makkah yang lebih padat. Secara spiritual keduanya berbeda makna, bukan bertingkat. Untuk lansia, urutan Madinah dulu memang lebih lembut sebagai pembuka.",
      },
      {
        q: "Apakah semua hotel Madinah menyediakan sarapan?",
        a: "Mayoritas hotel dalam radius 400 m menyediakan sarapan, tapi kualitasnya beragam. Bila grup Anda membawa katering sendiri, pilih hotel tanpa paket wajib — kami tandai opsi tanpa sarapan agar tidak bayar dua kali untuk makanan yang tak dimakan.",
      },
    ],
    keywords: [
      "hotel madinah dekat nabawi",
      "hotel central area madinah",
      "penginapan madinah murah",
      "hotel nabawi 100 meter",
    ],
  },
  {
    slug: "hotel-bintang-5-makkah-abraj",
    name: "Hotel Bintang 5 Makkah (Kawasan Abraj & Clock Tower)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Hotel bintang 5 dengan akses langsung ke kompleks Abraj Al-Bait — kenyamanan maksimal, pemandangan Haram, dan jarak nol untuk jamaah yang memprioritaskan istirahat.",
    longDesc:
      "Kawasan Abraj Al-Bait (Clock Tower) menampung hotel bintang 5 yang berdiri persis di depan Masjidil Haram — Fairmont, Swissôtel, Raffles, dan Mövenpick — dengan akses tertutup langsung ke Mas'a dan pilar-pilar pintu Haram. Untuk jamaah yang datang untuk ibadah intensif dengan tubuh yang butuh pemulihan maksimal (lansia premium, rombongan eksekutif, pasangan yang merayakan momen), selisih harga ini membeli sesuatu yang nyata: setiap shalat bisa dikerjakan tanpa berjalan di luar ruangan.\n\nKamar dengan pemandangan Ka'bah adalah kategori tersendiri — harganya bisa dua kali kamar pemandangan kota, dan memang pengalaman menikmati Haram dari jendela kamar tak tergantikan. Kami menyusun pilihan dengan perbandingan tarif jendela tanggal Anda, termasuk paket half-board yang sering lebih masuk akal daripada makan di luar untuk grup yang waktunya padat.",
    features: [
      "Hotel bintang 5 dengan akses tertutup ke Haram",
      "Opsi kamar pemandangan Ka'bah (terbatas, disarankan booking jauh hari)",
      "Paket half-board dengan restoran dalam hotel",
      "Lobi & fasilitas yang ramah grup premium",
      "Kamar besar dengan opsi twin yang nyata",
    ],
    process: [
      "Tentukan jendela tanggal & prioritas (pemandangan vs harga)",
      "Terima perbandingan 3–4 hotel bintang 5 dalam radius Abraj",
      "Booking kamar dengan deposit escrow",
      "Voucher + panduan akses pintu Haram terdekat dikirim",
    ],
    priceNote: "Rp 4–12 juta/malam/kamar; kamar pemandangan Ka'bah 1,5–2× lipat",
    priceFrom: 4000000,
    faqs: [
      {
        q: "Kamar pemandangan Ka'bah layak bayar selisihnya?",
        a: "Jawaban jujurnya: itu keputusan selera dan anggaran, bukan kebutuhan ibadah. Sebagian jamaah merasakan makna yang luar biasa menikmati Haram dari kamar — sebagian lain menyesal membayar dua kali lipat untuk sesuatu yang paling mereka nikmati 30 menit sehari. Bila anggaran ketat, ambil kamar biasa dan habiskan waktunya di Haram sendiri.",
      },
      {
        q: "Apakah hotel bintang 5 di Makkah sama standar dengan hotel bintang 5 di kota besar lain?",
        a: "Fasilitas dasarnya setara, tapi tekanan okupansinya berbeda jauh — Makkah menginap jutaan orang per bulan. Kebersihan dan servis hotel top di kawasan Abraj tetap tinggi, namun saat puncak Ramadhan semua hotel digilas. Bila musimnya puncak, kelola ekspektasi: yang Anda beli adalah lokasi, bukan ketenangan.",
      },
    ],
    keywords: [
      "hotel bintang 5 makkah",
      "fairmont makkah",
      "clock tower hotel",
      "hotel view kaabah",
      "hotel mewah makkah",
    ],
  },
  {
    slug: "hotel-budget-makkah-500-1200m",
    name: "Hotel Budget Makkah (500–1.200 m)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Pilihan hemat dengan jarak yang masih wajar — hotel bersih 500–1.200 meter dari Haram, jalan kaki 8–15 menit, tarif yang menyisakan anggaran ibadah lain.",
    longDesc:
      "Tidak semua keberkahan harus dibayar dengan kamar 5 juta se malam. Zona 500–1.200 meter di Makkah menyimpan properti bersih dan aman dengan tarif yang bisa setengah dari kawasan dekat Haram — dan untuk jamaah muda dengan kaki yang kuat, selisih 12 menit berjalan sering jauh lebih masuk akal daripada selisih 3 juta per malam.\n\nKami menyeleksi properti budget dengan tiga kriteria keras: kebersihan kamar mandi (keluhan nomor satu di segmen ini), keamanan area sekitar, dan kejujuran jarak — bukan 'dekat Haram' yang ternyata 1,5 km. Setiap opsi disertai profil jalur berjalan ke Haram (berorientasi jalan kaki atau perlu shuttle), karena di Makkah, jarak 700 meter di jalur datar berbeda jauh dari 700 meter menanjak.",
    features: [
      "Seleksi ketat kebersihan kamar mandi & lobi",
      "Jarak jujur + profil jalur berjalan ke Haram",
      "Tarif menyisakan anggaran untuk makanan & ziarah",
      "Kamar quad yang hemat untuk grup",
      "Opsi hotel dengan shuttle ke Haram",
    ],
    process: [
      "Sebutkan anggaran per malam & jumlah kamar",
      "Terima pilihan dengan jarak & jalur berjalan dijelaskan",
      "Booking deposit escrow",
      "Voucher + peta jalur ke Haram dikirim sebelum berangkat",
    ],
    priceNote: "Rp 700 ribu–1,5 juta/malam/kamar tergantung musim",
    priceFrom: 700000,
    faqs: [
      {
        q: "Apakah hotel budget di Makkah aman?",
        a: "Area wisatawan Makkah umumnya aman, tapi kualitas properti segmen budget beragam — itulah kenapa kami seleksi berdasarkan laporan penginapan grup nyata, bukan foto promosi. Hindari properti tanpa resepsi 24 jam dan yang lobi-nya bercampur area kurir koper tanpa manajemen.",
      },
      {
        q: "Kalau bersama lansia, boleh ambil hotel jauh begini?",
        a: "Bisa, dengan strategi yang benar: pilih hotel dengan shuttle, hitung shalat berjamaah di hotel (wajar untuk Subuh & Isya), dan sisakan berjalan kaki untuk shalat yang paling bermakna bagi orang tua Anda. Aksesibilitas ada di kategori Keluarga & Lansia bila butuh lebih.",
      },
    ],
    keywords: [
      "hotel murah makkah",
      "hotel budget dekat haram",
      "penginapan makkah hemat",
      "hotel makkah 1 km",
    ],
  },
  {
    slug: "apartemen-jamaah-makkah-aziziyah",
    name: "Apartemen & Residensial Jamaah Makkah",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Apartemen berdapur untuk keluarga dan grup kecil — ruang luas, bisa memasak, tarif per unit lebih hemat daripada tiga kamar hotel.",
    longDesc:
      "Untuk keluarga besar atau grup yang menginap lebih dari sembilan hari, apartemen sering menjadi jawaban yang lebih sehat: ruang tamu bersama, dapur untuk memasak sarapan sederhana, mesin cuci yang menyelamatkan koper penuh, dan tarif per orang yang bisa turun 30–40% dari hotel setara. Kawasan Aziziyah, Kudai, dan Shisha menyediakan banyak residensial jamaah dengan shuttle ke Haram.\n\nKomi-kenya-nyaman yang harus Anda timbang: jaraknya lebih jauh (shuttle wajib, bukan pilihan), dan standar perabotannya sederhana. Untuk grup yang membawa katering sendiri atau jamaah lansia yang perlu ruang untuk pulih, kelebihan apartemen jauh melebihi itu. Kami memverifikasi fungsi dapur dan listrik yang nyata — bukan dapur cantik di foto yang turnoven-nya tidak menyala.",
    features: [
      "Unit 2–4 kamar tidur dengan ruang tamu bersama",
      "Dapur yang benar-benar berfungsi (diverifikasi)",
      "Mesin cuci — penyelamat koper untuk perjalanan panjang",
      "Shuttle terjadwal ke Haram dari kawasan Aziziyah/Kudai",
      "Tarif per orang bisa turun 30–40% dari hotel",
    ],
    process: [
      "Sampaikan komposisi keluarga/grup & durasi menginap",
      "Terima pilihan unit dengan foto terkini & rute shuttle",
      "Booking unit dengan deposit escrow",
      "Panduan dapur, belanja bahan, & jadwal shuttle dikirim",
    ],
    priceNote: "Rp 1,8–4,5 juta/malam/unit (3–8 orang) tergantung musim & kawasan",
    priceFrom: 1800000,
    faqs: [
      {
        q: "Apartemen di Aziziyah masih dalam batas wilayah umrah?",
        a: "Ya, Aziziyah berada dalam wilayah Haram Makkah dan sangat umum dipakai jamaah, apalagi saat musim haji ketika banyak grup menginap di sana. Yang perlu dipahami adalah jaraknya — 3–5 km dari Haram — sehingga shuttle bukan fitur mewah tapi kebutuhan.",
      },
      {
        q: "Bisa memasak sendiri di apartemen?",
        a: "Bisa dan memang itu salah satu alasan utama memilihnya — sarapan nasi tim, masak lauk sederhana, atau menyimpan makanan beku dari katering Indonesia. Pastikan membawa/membeli bumbu dasar; kami sertakan daftar toko bahan makanan Indonesia terdekat untuk setiap kawasan.",
      },
    ],
    keywords: [
      "apartemen makkah jamaah",
      "sewa apartemen aziziyah",
      "penginapan makkah keluarga",
      "apartemen dapur makkah",
    ],
  },
  {
    slug: "kamar-connecting-keluarga-makkah",
    name: "Kamar Connecting untuk Keluarga di Makkah",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Dua kamar berpintu penghubung — orang tua dan anak remaja tetap berdekatan tanpa bercampur satu ruangan, kenyamanan yang jarang dipikirkan sebelum terlambat.",
    longDesc:
      "Keluarga dengan anak remaja atau tiga generasi dalam satu kamar adalah resep tidur yang buruk: jam tidur yang beda, snoring yang saling menular, dan privasi yang hilang total selama sembilan malam. Kamar connecting — dua kamar terpisah dengan pintu penghubung di dalam — menjawabnya dengan elegan: orang tua dan bayi di satu sisi, anak remaja atau nenek-kakek di sisi lain, pintu penghubung dibuka sesuai kebutuhan.\n\nYang perlu Anda ketahui: kamar connecting terbatas jumlahnya di setiap hotel dan tidak bisa dibeli lewat katalog biasa — harus dikonfirmasi langsung dengan properti. Layanan ini memastikan kamar penghubung benar-benar terkunci di reservasi Anda (bukan 'semoga jadi'), dengan pilihan hotel yang memang punya stok connecting yang layak. Untuk keluarga yang berumrah bersama orang tua, konfigurasi ini juga memudahkan menjaga lansia tanpa berbagi kasur.",
    features: [
      "Dua kamar dengan pintu penghubung internal",
      "Konfirmasi eksplisit ke hotel — bukan janji sistem",
      "Konfigurasi fleksibel: keluarga, tiga generasi, perawat+lansia",
      "Pilihan hotel dengan stok connecting yang layak",
      "Opsi adjoining (bersebelahan) bila connecting penuh",
    ],
    process: [
      "Sampaikan komposisi keluarga & kebutuhan privasinya",
      "Kami cari hotel dengan stok connecting di tanggal Anda",
      "Booking dengan konfirmasi tertulis jenis kamar",
      "Voucher mencantumkan jenis kamar connecting secara eksplisit",
    ],
    priceNote: "Rp 2–7 juta/malam untuk pasangan kamar (tergantung musim & hotel)",
    priceFrom: 2000000,
    faqs: [
      {
        q: "Apa beda kamar connecting dan adjoining?",
        a: "Connecting punya pintu internal antar kamar; adjoining hanya bersebelahan (pintu di luar). Untuk menjaga anak kecil atau lansia di malam hari, connecting jauh lebih praktis. Kami selalu konfirmasi jenisnya secara tertulis karena hotel sering menukar istilah ini secara longgar.",
      },
      {
        q: "Kalau kamar connecting habis di tanggal saya?",
        a: "Pilihan realistisnya: geser tanggal, pilih hotel lain dengan stok, atau gunakan dua kamar adjoining di lantai sama dengan remaja di antaranya sebagai 'penghubung manusia'. Untuk bayi, tambah crib di kamar orang tua biasanya jauh lebih mudah dicari.",
      },
    ],
    keywords: [
      "kamar connecting makkah",
      "kamar keluarga umrah",
      "connecting room hotel saudi",
      "umrah tiga generasi",
    ],
  },
  {
    slug: "kamar-double-privasi-pasangan",
    name: "Kamar Double Privasi untuk Pasangan",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Upgrade kamar quad ke double untuk pasangan — tidur yang layak setelah hari ibadah yang panjang, dengan selisih biaya yang dihitung transparan.",
    longDesc:
      "Kamar quad adalah standar ekonomi perjalanan umrah — empat orang, dua kasur besar, dan tidur yang sebetulnya cukup untuk muda yang lelah. Tapi untuk pasangan yang baru menikah, jamaah yang tidurnya ringan, atau yang merayakan tahun pernikahan, kamar double (dua orang, satu kasur besar) mengubah kualitas istirahat secara nyata — dan kualitas istirahat berubah menjadi kualitas ibadah esok harinya.\n\nSelisih biayanya jujur kami tampilkan: di hotel kawasan Haram, upgrade double per orang bisa 2,5–4 juta lebih mahal untuk perjalanan 9 hari. Kami bantu memilih di kota mana upgrade paling berdampak — banyak jamaah memilih double di Makkah (malam lebih padat) dan tetap quad di Madinah (lebih murah, kota lebih tenang). Selisih itu bisa dihemat tanpa kehilangan esensinya.",
    features: [
      "Upgrade dari quad ke double dengan selisih transparan",
      "Strategi campuran: double di Makkah, quad di Madinah",
      "Pilihan kasur king vs twin sesuai kebiasaan pasangan",
      "Lantai tenang & kamar jauh dari lift (bila diminta)",
      "Cocok untuk bulan madu & perayaan anniversary",
    ],
    process: [
      "Tentukan kombinasi tipe kamar per kota",
      "Kami hitung selisih biaya total secara transparan",
      "Booking dengan pembagian tipe kamar tercatat",
      "Voucher per kota mencantumkan tipe kamar yang benar",
    ],
    priceNote: "Selisih upgrade double mulai Rp 2,5–4 juta/jamaah untuk 9 malam",
    priceFrom: 2500000,
    faqs: [
      {
        q: "Berapa selisih upgrade double di Makkah vs Madinah?",
        a: "Makkah lebih mahal dan selisihnya lebih terasa karena harga dasar sudah tinggi. Pola yang banyak dipilih: tetap quad di Madinah yang sifatnya transit ziarah, upgrade double di Makkah yang malam-malamnya lebih berat. Pola ini menghemat 30–50% dari upgrade penuh dua kota.",
      },
      {
        q: "Apakah tipe kamar memengaruhi jarak ke Haram?",
        a: "Dua hal itu berdiri sendiri — Anda bisa punya double yang jauh, atau quad yang dekat. Kami selalu menampilkannya sebagai dua pilihan terpisah supaya Anda mengalokasikan anggaran ke hal yang paling berarti bagi perjalanan Anda.",
      },
    ],
    keywords: [
      "kamar double umrah",
      "upgrade kamar makkah",
      "bulan madu umrah",
      "kamar pasangan saudi",
    ],
  },
  {
    slug: "kamar-quad-grup-ekonomis",
    name: "Kamar Quad untuk Grup (Ekonomis)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Empat orang per kamar sebagai standar hemat grup — blok kamar berdekatan, tarif terendah, dan pengaturan teman sekamar yang rapi sejak awal.",
    longDesc:
      "Kamar quad adalah mesin yang membuat umrah terjangkau bagi jutaan orang: empat orang berbagi biaya kamar, tarif per jamaah turun drastis, dan grup bisa menginap lebih dekat ke Haram dengan anggaran yang sama. Konfigurasi ini bukan tanda murah — hotel-hotel bagus di Makkah dan Madinah menjalankan kamar quad sebagai produk utama mereka untuk grup.\n\nYang menentukan pengalaman quad bukan kamarnya, tapi pengaturannya: siapa sekamar dengan siapa ditentukan sejak pendaftaran (bukan di lobi), blok kamar ditempatkan berdekatan di lantai sama, dan jumlah kasur sesuai (dua king atau king+dua single). Untuk rombongan komunitas, kami menyediakan template pengaturan sekamar yang meminimalkan gesekan klasik: snoring, lampu menyala, dan alarm yang tidak seirama.",
    features: [
      "Tarif terendah per jamaah dengan kamar tetap layak",
      "Blok kamar berdekatan di lantai sama untuk grup",
      "Template pengaturan teman sekamar sejak pendaftaran",
      "Opsi 3 orang per kamar (quad minus) bila ada sisa",
      "Koordinasi check-in grup dengan daftar kunci per kamar",
    ],
    process: [
      "Kumpulkan data grup & preferensi sekamar saat pendaftaran",
      "Kami susun daftar kamar + blok lantai yang berdekatan",
      "Booking blok kamar dengan deposit escrow",
      "Daftar kunci per kamar dibagikan saat check-in",
    ],
    priceNote: "Rp 175–375 ribu/orang/malam (bagi 4) tergantung hotel & musim",
    priceFrom: 175000,
    faqs: [
      {
        q: "Nyaman nggak tidur empat orang dalam satu kamar?",
        a: "Untuk tidur setelah hari penuh ibadah, mayoritas jamaah menyesuaikan dalam satu-dua malam. Yang membantu: earplug (kami sarankan di checklist), kesepakatan lampu mati, dan teman sekamar yang memang ditentukan sejak awal — bukan orang asing yang diacak di lobi.",
      },
      {
        q: "Bisa meminta kamar campuran seperti 3 orang saja?",
        a: "Bisa dengan konsekuensi tarif per orang naik — kamar tetap dibayar penuh, dibagi lebih sedikit. Sebagian grup mengisi sisa slot dengan jamaah yang sengaja memilih quad hemat, lalu menyeimbangkan tarifnya di akhir. Pola ini wajar dan kami bantu atur.",
      },
    ],
    keywords: [
      "kamar quad umrah",
      "kamar 4 orang makkah",
      "tarif grup hotel saudi",
      "umrah murah kamar quad",
    ],
  },
  {
    slug: "hotel-aziziyah-makkah-musim-haji",
    name: "Hotel Kawasan Aziziyah Makkah (Musim Haji)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Akomodasi kawasan Aziziyah untuk periode musim haji — alternatif realistis ketika kawasan Haram penuh dan harganya melonjak tak masuk akal.",
    longDesc:
      "Saat musim haji, kawasan dekat Haram Makkah berubah menjadi kawasan Mashaer — hotel-hotelnya diambil alih untuk program haji resmi, dan yang tersisa untuk umrah melonjak harganya beberapa kali lipat. Kawasan Aziziyah (jarak 3–5 km) menjadi jawaban yang telah dipakai jamaah sejak lama: harga tetap waras, shuttle teratur, dan kawasan yang penuh jamaah Indonesia sehingga makanan Indonesia mudah ditemukan.\n\nLayanan ini menyusun paket menginap Aziziyah dengan komponen shuttle yang jelas — jadwal, titik jemput, dan biayanya dalam harga. Untuk jamaah yang datang saat Dzulhijjah dengan rencana tawaf wada, lokasi ini masih sangat layak dengan perencanaan jam yang benar. Untuk jamaah non-musim-haji yang melihat harga Aziziyah karena anggaran, kami akan jujur menimbang: di musim sepi, hotel 600 meter kadang lebih murah dari Aziziyah plus shuttle.",
    features: [
      "Jaringan hotel & residensial kawasan Aziziyah",
      "Shuttle terjadwal dengan titik & jam jemput yang jelas",
      "Kawasan jamaah Indonesia — makanan mudah dicari",
      "Harga tetap waras saat musim haji",
      "Koordinasi dengan jadwal tawaf wada",
    ],
    process: [
      "Pastikan periode perjalanan Anda (musim haji atau reguler)",
      "Kami tawarkan paket Aziziyah dengan rincian shuttle",
      "Booking + deposit escrow",
      "Jadwal shuttle & peta kawasan dikirim sebelum berangkat",
    ],
    priceNote: "Rp 800 ribu–2 juta/malam/kamar (musim haji); lebih murah di musim reguler",
    priceFrom: 800000,
    faqs: [
      {
        q: "Aziziyah masih bisa jalan kaki ke Haram?",
        a: "3–5 km adalah jarak berjalan 40–60 menit — realistis untuk sebagian jamaah muda di cuaca sejuk, tidak realistis untuk lansia. Anggap Aziziyah sebagai kota kedua dengan shuttle, bukan 'dekat Haram yang agak jauh'. Ekspektasi yang benar membuat pengalaman tetap nyaman.",
      },
      {
        q: "Kenapa harga Makkah melonjak saat musim haji?",
        a: "Karena pemerintah Saudi mengalokasikan hotel kawasan Haram untuk jamaah haji resmi dengan skema khusus, sementara permintaan umrah tetap tinggi. Ini kebijakan yang berulang setiap tahun — makanya perencanaan tanggal di sekitar Dzulhijjah butuh strategi berbeda dari musim lainnya.",
      },
    ],
    keywords: [
      "hotel aziziyah makkah",
      "penginapan musim haji",
      "aziziyah shuttle haram",
      "hotel makkah dzulhijjah",
    ],
  },
  {
    slug: "hotel-pemandangan-kabah-makkah",
    name: "Hotel Makkah dengan Pemandangan Ka'bah",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Kamar dengan jendela menghadap Ka'bah — momen subuh yang tak terlupakan, dengan sisi jujur tentang selisih harganya dan ketersediaan yang terbatas.",
    longDesc:
      "Ada momen yang hanya bisa dimiliki dari jendela kamar: Ka'bah yang menyala di malam hari, tawaf yang terlihat mengalir seperti sungai manusia, dan azan Subuh yang menyapa Anda sebelum alarm. Kamar pemandangan Ka'bah adalah produk hotel paling dicari di Makkah — dan paling cepat habis, karena jumlahnya terbatas pada sisi-sisi tertentu dari beberapa properti.\n\nKami menawarkannya dengan dua kejujuran. Pertama, selisih harganya nyata: 1,5–2 kali lipat kamar pemandangan kota di hotel yang sama. Kedua, pemandangan dijanjikan hotel kadang 'pemandangan sebagian' — satu sudut minaret di antara dua gedung. Kami memverifikasi tipe view per kamar (full Haram view, partial, city) sebelum konfirmasi, karena pengalaman yang Anda bayar harus sesuai yang Anda terima. Untuk momen istimewa — malam pertama, ulang tahun pernikahan — kamar ini layak; untuk sembilan malam penuh, pertimbangkan campuran: dua malam view, sisanya kamar biasa.",
    features: [
      "Verifikasi tipe view per kamar (full/partial/city)",
      "Kamar prioritas: lantai tinggi yang tidak terhalang",
      "Opsi campuran: 2–3 malam view + sisanya kamar standar",
      "Booking jauh hari — stok view habis paling cepat",
      "Foto contoh tipe view dari properti yang sama",
    ],
    process: [
      "Sebutkan tanggal & berapa malam yang ingin ber-view",
      "Kami verifikasi ketersediaan kamar view per properti",
      "Konfirmasi tipe view secara tertulis sebelum bayar",
      "Voucher mencantumkan kategori kamar & view eksplisit",
    ],
    priceNote: "Rp 5–14 juta/malam tergantung hotel & musim; view Ka'bah penuh di kisaran atas",
    priceFrom: 5000000,
    faqs: [
      {
        q: "Semua kamar view sama?",
        a: "Tidak. Full Haram view menghadap langsung Ka'bah tanpa penghalang; partial view melihat sebagian Haram dengan gedung di sisi lain; city view tidak melihat Haram sama sekali. Selisihnya besar dan sering disamarkan penjual — itulah kenapa kami verifikasi dan mencantumkan kategorinya secara eksplisit.",
      },
      {
        q: "Kapan kamar view paling sulit didapat?",
        a: "10 malam terakhir Ramadhan, minggu Desember, dan musim haji — stoknya bisa habis 6–9 bulan sebelumnya. Bila tanggal Anda di periode itu dan view adalah prioritas, booking sejak jendela penjualan dibuka; bila tidak, kamar standar dekat Haram memberi nilai yang sama baiknya.",
      },
    ],
    keywords: [
      "hotel view kaabah",
      "kamar pemandangan kabah",
      "haram view makkah",
      "hotel makkah jendela haram",
    ],
  },
  {
    slug: "hotel-menghadap-kubah-hijau-madinah",
    name: "Hotel Menghadap Kubah Hijau (Depan Nabawi)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Hotel berbaris menghadap halaman utara Masjid Nabawi — azan dari kamar, jalan dua menit ke pintu, dan suasana Madinah yang paling khas.",
    longDesc:
      "Sisi utara dan timur Masjid Nabawi dihuni deretan hotel yang menghadap langsung ke halaman masjid — azan lima waktu terdengar dari kamar, pintu masuk berjarak satu-dua menit, dan suasana malam Madinah dengan jamaah yang santai berjalan menjadi latar setiap hari. Ini pengalaman Madinah yang paling khas, dan harganya masih jauh lebih ramah daripada view Ka'bah di Makkah.\n\nHal yang perlu dipahami tentang 'menghadap Nabawi': beberapa properti menghadap halaman utara yang luas dan terbuka, sebagian menghadap sisi yang dipakai antrean Raudhah — ramai di jam slot. Kami menjelaskan sisi menghadap tiap properti dan mengaitkannya dengan kebutuhan Anda: yang ingin antre Raudhah pagi sebaiknya dekat gerbang slot; yang ingin tenang lebih baik di sisi yang lebih sepi. Untuk keluarga dengan anak, kawasan depan Nabawi juga paling aman bermain setelah Isya.",
    features: [
      "Properti menghadap langsung halaman Masjid Nabawi",
      "Penjelasan sisi menghadap per hotel (utara/timur/selatan)",
      "Relevansi lokasi dengan gerbang slot Raudhah",
      "Jalan 1–3 menit ke pintu masuk",
      "Suasana aman untuk keluarga setelah Isya",
    ],
    process: [
      "Tentukan prioritas: antrean Raudhah, tenang, atau keluarga",
      "Terima pilihan properti dengan sisi menghadap dijelaskan",
      "Booking deposit escrow",
      "Voucher + peta gerbang Nabawi terdekat dikirim",
    ],
    priceNote: "Rp 1,5–5 juta/malam/kamar tergantung musim & sisi menghadap",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Sisi menghadap mana yang paling baik di Nabawi?",
        a: "Tidak ada jawaban tunggal — sisi utara terbuka dan tenang, sisi dekat gerbang Raudhah praktis untuk antrean slot pagi, sisi selatan dekat kawasan belanja. Kami menanyakan dulu apa rencana Anda di Madinah, lalu menyesuaikan rekomendasinya.",
      },
      {
        q: "Apakah semua kamar di hotel itu bisa lihat Nabawi?",
        a: "Tidak — hanya kamar di sisi tertentu dan biasanya lantai tertentu. Saat booking, kami mencantumkan tipe kamar 'Nabawi view' secara eksplisit. Kamar yang dijanjikan 'hotel menghadap Nabawi' tapi ternyata menghadap gedung sebelah adalah keluhan klasik yang bisa dicegah dengan konfirmasi tertulis.",
      },
    ],
    keywords: [
      "hotel depan nabawi",
      "hotel view kubah hijau",
      "hotel madinah nabawi view",
      "penginapan depan masjid nabawi",
    ],
  },
  {
    slug: "apartemen-madinah-bir-uthman",
    name: "Apartemen Madinah Kawasan Bir Uthman",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Apartemen residensial di Bir Uthman untuk keluarga dan grup — ruang luas, dapur lengkap, dan harga per malam yang bisa setengah hotel Central Area.",
    longDesc:
      "Bir Uthman adalah kawasan residensial Madinah sekitar 2–3 km dari Nabawi — kawasan yang hidup seperti kota biasa: minimarket, laundry, dan restoran jamaah. Untuk keluarga yang menginap lama (10+ hari), grup peserta kursi, atau rombongan yang datang saat musim puncak ketika Central Area melambung, apartemen kawasan ini memberi ruang yang jauh lebih manusiawi dengan tarif yang waras.\n\nUnit umumnya 2–3 kamar tidur dengan dapur dan mesin cuci — cocok untuk keluarga yang membawa katering beku atau memasak sarapan sendiri. Bus dan taksi ke Nabawi memakan 5–10 menit. Yang perlu disiapkan mental: ini pilihan yang pragmatis, bukan romantis — Anda menukar 'turun tangga langsung ke Nabawi' dengan ruang hidup yang layak dan anggaran yang bernafas.",
    features: [
      "Unit 2–3 kamar tidur, dapur & mesin cuci",
      "Tarif bisa setengah dari hotel Central Area",
      "Kawasan hidup: minimarket, laundry, restoran jamaah",
      "Akses bus/taksi 5–10 menit ke Nabawi",
      "Cocok untuk menginap 10 hari atau lebih",
    ],
    process: [
      "Sampaikan durasi & komposisi penghuni unit",
      "Terima pilihan unit dengan foto terkini & akses transport",
      "Booking deposit escrow",
      "Panduan kawasan (belanja, laundry, transport) dikirim",
    ],
    priceNote: "Rp 1,2–3 juta/malam/unit (4–8 orang) tergantung musim",
    priceFrom: 1200000,
    faqs: [
      {
        q: "Bir Uthman masih dalam wilayah imarah Madinah?",
        a: "Ya, Bir Uthman adalah distrik resmi Madinah — hanya jaraknya lebih jauh dari kawasan wisatawan. Jamaah umrah sah menginap di sana; transportasi ke Nabawi tinggal mengatur jadwalnya.",
      },
      {
        q: "Untuk lansia, apartemen begini layak atau tidak?",
        a: "Layak dengan syarat transportasi dikoordinasikan rapi — jemput setiap shalat yang ingin didatangi, bukan menebak-nebak taksi. Untuk lansia yang ingin shalat lima waktu di Nabawi, selisih biaya transportasi makan sebagian penghematan apartemen — hitung jujur dua-duanya sebelum memilih.",
      },
    ],
    keywords: [
      "apartemen madinah",
      "bir uthman penginapan",
      "sewa apartemen madinah",
      "penginapan murah madinah",
    ],
  },
  {
    slug: "hotel-dekat-stasiun-haramain",
    name: "Hotel Dekat Stasiun Haramain (Makkah & Madinah)",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Penginapan dengan jarak dekat ke stasiun kereta Haramain — pintu masuk praktis untuk jamaah yang perjalanannya mengandalkan rel cepat.",
    longDesc:
      "Untuk jamaah yang menyusun perjalanan dengan kereta Haramain — masuk Madinah lewat rel, pindah Makkah lewat rel, atau kombinasi keduanya — hotel yang dekat stasiun menghemat perpindahan yang bisa melelahkan dengan koper. Stasiun Haramain Madinah dan Makkah masing-masing punya kawasan hotel sekitar dengan tarif yang sering lebih rendah dari kawasan masjid, karena jarak ke Haram-nya memang lebih jauh.\n\nPola yang paling efisien: malam pertama dan terakhir dekat stasiun (saat koper Anda paling berat), malam-malam ibadah dekat masjid. Kami menyusun kombinasi seperti itu secara eksplisit — dua properti, dua zona, satu alur yang logis. Kombinasi ini juga menyelamatkan jamaah yang tiba larut di Madinah: hotel dekat stasiun berarti istirahat dimulai 20 menit setelah turun dari kereta.",
    features: [
      "Pilihan hotel radius 1 km dari stasiun Haramain",
      "Strategi dua zona: malam transit dekat stasiun, ibadah dekat masjid",
      "Kombinasi dengan tiket kereta Haramain",
      "Tarif kawasan stasiun lebih rendah dari kawasan masjid",
      "Antar-jemput hotel↔stasiun bila hotel menyediakan",
    ],
    process: [
      "Kirim itinerary kereta Anda (jam tiba-di, jam berangkat)",
      "Kami susun kombinasi hotel stasiun + hotel masjid",
      "Booking kedua properti satu paket",
      "Voucher kedua hotel + jadwal perpindahan dikirim",
    ],
    priceNote: "Rp 700 ribu–2 juta/malam/kamar tergantung kota & musim",
    priceFrom: 700000,
    faqs: [
      {
        q: "Berapa jauh stasiun Haramain dari Masjid?",
        a: "Stasiun Madinah sekitar 3–4 km dari Nabawi; stasiun Makkah sekitar 3–5 km dari Haram. Kereta sangat cepat di rel, tapi perpindahan dari stasiun ke masjid menambah 15–30 menit — itulah kenapa strategi hotel dekat stasiun untuk malam transit berdampak nyata.",
      },
      {
        q: "Layak untuk grup besar?",
        a: "Untuk grup besar dengan banyak koper, kombinasi dua zona justru paling tertata: koper tidak naik-turun bus berulang kali. Bila grup Anda lebih dari 40 orang, koordinasikan kedatangan kereta dengan bus antar-jemput yang dipesan sekaligus — kapasitas taksi di stasiun terbatas saat jam ramai.",
      },
    ],
    keywords: [
      "hotel dekat stasiun haramain",
      "hotel makkah stasiun kereta",
      "penginapan madinah haramain",
      "hotel transit madinah",
    ],
  },
  {
    slug: "hotel-makkah-dekat-stasiun-mashaer",
    name: "Hotel Makkah Dekat Akses Stasiun Mashaer",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Akomodasi dengan akses cepat ke stasiun jalur Mashaer — pintu gerbang nyaman menuju Mina, Arafah, dan Muzdalifah saat musim haji.",
    longDesc:
      "Mashar Metro (Al Mashaaer Al Mugaddassah Line) adalah jalur kereta khusus jamaah yang menghubungkan Makkah dengan Mina, Muzdalifah, dan Arafah. Stasiun-stasiunnya berada di sisi selatan Makkah — kawasan yang jauh dari Haram tapi menjadi pintu masuk paling teratur ke Mashaer saat musim haji. Hotel di radius stasiun menjadikan hari-hari terberat haji (8–10 Dzulhijjah) berangkatnya lebih tenang.\n\nLayanan ini relevan untuk dua profil: PIHK yang menyusun program haji khusus dan butuh akomodasi pra-Mashaer yang dekat jalur keberangkatan, serta jamaah haji furoh yang menyusun perjalanan mandiri dengan bantuan operator lokal. Dilengkapi koordinasi jam berangkat — antrean metro saat puncak itu nyata, dan grup yang berangkat terlambat akan menemui ribuan jamaah lain di platform yang sama.",
    features: [
      "Hotel radius stasiun jalur Mashaer (sisi selatan Makkah)",
      "Koordinasi jam keberangkatan grup menghindari puncak antrean",
      "Relevan untuk PIHK & jamaah haji furoh mandiri",
      "Kombinasi dengan layanan kendaraan Mashaer",
      "Harga kawasan lebih rendah dari kawasan Haram",
    ],
    process: [
      "Sampaikan program haji Anda (tanggal masuk Mashaer)",
      "Kami tawarkan hotel dengan akses stasiun terdekat",
      "Booking + koordinasi jam berangkat dengan operator",
      "Panduan jalur Mashaer & jam antrean dikirim",
    ],
    priceNote: "Rp 800 ribu–1,8 juta/malam/kamar (musim haji)",
    priceFrom: 800000,
    faqs: [
      {
        q: "Semua jamaah haji pakai kereta Mashaer?",
        a: "Tidak — program haji resmi Indonesia umumnya menggunakan bus dengan skema penugasan tertentu, sementara kereta Mashaer dipakai bila programnya menyertakannya atau jamaah menyusun perjalanan mandiri. Keduanya sah; yang membedakan adalah kenyamanan antrean dan pengaturan jamnya.",
      },
      {
        q: "Hotel ini untuk umrah biasa juga?",
        a: "Bisa — kawasan stasiun Mashaer punya tarif yang menarik sepanjang tahun. Tapi jujur saja: jaraknya ke Haram jauh (5–8 km), jadi untuk umrah reguler kami lebih sering merekomendasikan kawasan lain. Nilai terbesarnya ada di konteks haji.",
      },
    ],
    keywords: [
      "stasiun mashaer",
      "kereta mina arafah",
      "hotel makkah musim haji",
      "akses mashaer jamaah",
    ],
  },
  {
    slug: "hotel-day-use-transit-jeddah",
    name: "Hotel Day-Use Transit Jeddah",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Kamar untuk beberapa jam di Jeddah — mandi, tidur singkat, dan shalat dengan tenang di antara dua penerbangan atau sebelum keberangkatan pulang.",
    longDesc:
      "Ada celah-celah waktu di perjalanan umrah yang tidak membutuhkan hotel penuh: enam jam menunggu penerbangan pulang, malam transit sebelum charter subuh, atau jeda antara check-out hotel dan jam keberangkatan bus ke bandara. Untuk celah-celah itu, day-use hotel — kamar dibayar per blok 4–8 jam — adalah jawaban yang jauh lebih murah dan lebih bermartabat daripada berpindah-pindah kursi bandara.\n\nJeddah memiliki banyak hotel bandara dan pusat kota yang menyediakan day-use dengan harga separuh tarif normal. Layanan ini menyusun blok jamnya sesuai jadwal Anda, dengan prioritas: tempat wudhu yang layak, tempat shalat yang tenang, dan tempat tidur singkat yang benar-benar bisa dipakai. Untuk keluarga dengan bayi yang harus menunggu penerbangan malam, day-use sering menjadi pembeda antara perjalanan pulang yang lelah dan yang hancur.",
    features: [
      "Blok kamar 4–8 jam sesuai jadwal Anda",
      "Hotel bandara & pusat kota Jeddah",
      "Fasilitas wudhu, shalat, dan istirahat singkat",
      "Cocok untuk jeda check-out ↔ keberangkatan",
      "Opsi kamar keluarga untuk bayi & anak",
    ],
    process: [
      "Kirim jadwal perpindahan Anda di Jeddah",
      "Kami tawarkan blok day-use yang menutup celah waktunya",
      "Booking blok jam dengan konfirmasi jam masuk-keluar",
      "Voucher day-use dikirim dengan alamat & jam resepsi",
    ],
    priceNote: "Rp 400 ribu–1,2 juta/blok 4–8 jam tergantung hotel",
    priceFrom: 400000,
    faqs: [
      {
        q: "Berapa jauh hotel bandara Jeddah ke terminal?",
        a: "Hotel bandara Jeddah berjarak 5–15 menit dari terminal. Untuk penerbangan pulang dengan bagasi banyak, blok day-use di hotel bandara menghilangkan perpindahan kedua — Anda check-in kamar, istirahat, lalu berangkat tepat waktu ke terminal.",
      },
      {
        q: "Day-use bisa lebih dari satu keluarga?",
        a: "Bisa — keluarga besar sering mengambil dua blok kamar bertetangga untuk istirahat bergantian. Bila grup Anda pulang di jam yang sama dan lebih dari 10 orang, tanyakan opsi lounge bandara sebagai pelengkap; kadang kombinasi lounge untuk semua + day-use untuk bayi/lansia adalah yang paling hemat.",
      },
    ],
    keywords: [
      "hotel day use jeddah",
      "hotel transit jeddah",
      "transit bandara jeddah",
      "istirahat singkat jeddah",
    ],
  },
  {
    slug: "late-checkin-early-checkout-jamaah",
    name: "Late Check-in & Early Check-out Jamaah",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Pengaturan jam check-in/out di luar ketentuan standar — menyelamatkan jam berharga ketika penerbangan dan bus Anda datang di jam yang tidak sopan.",
    longDesc:
      "Standar hotel mengharuskan check-in mulai siang dan check-out sebelum tengah hari — tapi perjalanan jamaah jarang mengikuti standar: charter yang tiba Madinah jam empat pagi, bus yang berangkat Makkah jam tiga subuh, atau penerbangan pulang yang mengharuskan kosong dari kamar sejak pagi. Tanpa pengaturan, jamaah berakhir menunggu di lobi atau membayar malam penuh untuk tiga jam.\n\nLayanan ini menegosiasikan jam ekstra sejak saat booking: early check-in dengan tarif partial, late check-out sampai jam berangkat Anda, atau kombinasi keduanya. Untuk grup besar, negosiasi jam ini dilakukan di level kontrak — jauh lebih efektif daripada memohon-mohon di resepsi dengan 40 koper menggelinding. Biayanya jujur kami tampilkan, karena hotel yang baik juga punya hak mengenakan biaya jam ekstra — yang penting itu dihitung di awal, bukan kejutan di akhir.",
    features: [
      "Early check-in untuk kedatangan subuh",
      "Late check-out sampai jam keberangkatan",
      "Negosiasi di level kontrak untuk grup besar",
      "Tarif partial yang dihitung transparan",
      "Kombinasi dengan day-use bila lebih hemat",
    ],
    process: [
      "Kirim jam kedatangan & keberangkatan grup Anda",
      "Kami hitung opsi: jam ekstra vs day-use vs malam penuh",
      "Negosiasi jam ekstra tertulis di saat booking",
      "Konfirmasi jam tertulis dikirim bersama voucher",
    ],
    priceNote: "Rp 200–800 ribu/jam-blok tergantung hotel; sering 30–60% tarif malam",
    priceFrom: 200000,
    faqs: [
      {
        q: "Kenapa hotel menolak early check-in gratis?",
        a: "Karena kamar malam sebelumnya belum dikosongkan — hotel menjual kamarnya penuh, jadi kamar kosong pagi itu adalah kamar yang sudah dibayar seseorang sampai siang. Tarif early check-in adalah kompensasi yang wajar; yang bisa dinegosiasikan adalah besarnya, dan itulah yang kami kerjakan.",
      },
      {
        q: "Grup saya tiba subuh 40 orang, semua butuh kamar?",
        a: "Tidak selalu — pola yang sering dipakai grup: sediakan kamar wudhu & lobi untuk sebagian, buka kamar bertahap saat kosong, dan blok early check-in hanya untuk lansia & bayi. Skema ini memangkas biaya drastis tanpa mengorbankan kenyamanan yang paling dibutuhkan.",
      },
    ],
    keywords: [
      "early check in hotel saudi",
      "late check out makkah",
      "jam check in hotel umrah",
      "hotel tiba subuh",
    ],
  },
  {
    slug: "hotel-paket-plus-turki-dubai",
    name: "Hotel Paket Plus: Turki, Dubai & Mesir",
    categorySlug: "hotel-akomodasi",
    shortDesc:
      "Akomodasi segmen destinasi tambahan — hotel Istanbul, Dubai, dan Kairo dengan standar yang setara Tanah Suci, plus catatan visa dan musimnya.",
    longDesc:
      "Segmen plus dari umrah plus sering diperlakukan sebagai pelengkap murah — padahal di situlah pengalaman wisatanya berlangsung. Hotel di Istanbul (Sultanahmet atau Taksim), Dubai (Deira atau Marina), dan Kairo (tepi Nil) memiliki karakter yang sangat menentukan pengalaman: lokasi yang salah membuat Anda menghabiskan sebagian hari di jalan, bukan di tempat yang Anda bayar untuk dilihat.\n\nKami menyusun akomodasi segmen plus dengan logika yang sama seperti Tanah Suci: lokasi dulu, kenyamanan kedua, harga ketiga. Dilengkapi catatan praktis per negara — visa Turki yang perlu diajukan terpisah, musim terbaik tiap kota, dan standar tip/biaya lokal yang berbeda dari Saudi. Untuk grup, blok kamar di kota asing menuntut konfirmasi yang lebih awal karena okupansinya digilas wisatawan global, bukan hanya jamaah.",
    features: [
      "Pilihan lokasi strategis per kota (Sultanahmet, Deira, tepi Nil)",
      "Kesetaraan standar dengan segmen Tanah Suci",
      "Catatan visa & musim terbaik per negara",
      "Blok kamar grup dengan konfirmasi awal",
      "Kombinasi dengan program tur lokal terverifikasi",
    ],
    process: [
      "Tentukan kota plus & jumlah malam",
      "Terima pilihan hotel dengan alasan lokasinya",
      "Cek kebutuhan visa segmen plus bersama kami",
      "Booking blok kamar + program tur satu paket",
    ],
    priceNote: "Rp 1,2–4 juta/malam/kamar tergantung kota & musim (Turki paling ramah)",
    priceFrom: 1200000,
    faqs: [
      {
        q: "Berapa malam ideal untuk segmen plus?",
        a: "3–4 malam adalah titik manis untuk satu kota — cukup untuk program tur utama tanpa memakan jatah ibadah di Tanah Suci. Melebihi itu, pertimbangkan dua kota (misalnya Istanbul + Bursa) daripada satu kota terlalu lama.",
      },
      {
        q: "Hotel plus harus sekelas Tanah Suci?",
        a: "Sebaiknya setara, karena segmen plus adalah bagian berjalan-jalan yang butuh pulih harian. Yang sering dilakukan grup: hotel plus sedikit di bawah standar Tanah Suci dengan lokasi jauh lebih strategis — lokasi menang atas bintang di kota wisata seperti Istanbul.",
      },
    ],
    keywords: [
      "hotel istanbul umrah plus",
      "hotel dubai paket plus",
      "hotel kairo ziarah",
      "akomodasi umrah plus",
    ],
  },

  // ================= KATEGORI 4: TRANSPORTASI & DARAT =================
  {
    slug: "land-arrangement-umrah",
    name: "Land Arrangement Umrah (Tanpa Tiket)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Paket darat lengkap di Tanah Suci — visa, hotel, bus, makanan, dan mutawif — tanpa tiket pesawat, untuk jamaah yang sudah punya tiket sendiri.",
    longDesc:
      "Land arrangement (LA) adalah paket umrah yang menjual seluruh komponen darat di Tanah Suci — visa, hotel, transportasi, makanan, mutawif, ziarah — sementara tiket pesawat dicari sendiri oleh jamaah. Format ini ideal untuk jamaah yang menemukan tiket lebih murah lewat jalur sendiri (miles, promo, rute tak biasa) atau yang datang dari negara lain sebelum berumrah ke Saudi.\n\nHarga LA wajar untuk 9 hari reguler berada di kisaran Rp 17–19 juta (kamar quad) — kira-kira 55–60% dari paket lengkap. Perhatian terbesar pada format ini adalah sinkronisasi: tanggal LA Anda harus cocok persis dengan penerbangan sendiri, termasuk jam kedatangan dan keberangkatan, karena handling bandara ikut dalam paket dengan jendela jam tertentu. Kami menyelaraskan seluruhnya sebelum kontrak, dan mencantumkan biaya penyesuaian bila jadwal tiket Anda bergeser — supaya hemat tiket tidak habis di denda perubahan darat.",
    features: [
      "Visa + hotel + bus + makan + mutawif + ziarah dalam satu paket",
      "Sinkronisasi penuh dengan tiket pesawat Anda",
      "Handling bandara sesuai jendela jam kedatangan",
      "Rasio mutawif & kualitas bus yang sama dengan paket lengkap",
      "Catatan biaya penyesuaian bila jadwal tiket bergeser",
    ],
    process: [
      "Tunjukkan tiket Anda (jam tiba & pulang) untuk dipetakan",
      "Kami susun itinerary darat yang presisi dengan penerbangan",
      "Kontrak LA dengan pembayaran bertahap escrow",
      "Dokumen lengkap dikirim; koordinator menunggu di bandara",
    ],
    priceNote: "Mulai Rp 17–19 juta/jamaah (9 hari, quad, musim reguler) tanpa tiket",
    priceFrom: 17000000,
    faqs: [
      {
        q: "Apakah LA lebih murah dari paket lengkap?",
        a: "Ya — selisihnya kira-kira biaya tiket group rate ditambah margin tiket penyelenggara, bisa 10–13 juta untuk 9 hari. Tapi hemat itu bergantung pada tiket yang Anda dapat sendiri; bila tiket mandiri Anda ternyata mahal, totalnya bisa menyamai paket lengkap. Hitung dulu sebelum memilih format.",
      },
      {
        q: "Siapa yang bertanggung jawab bila pesawat saya delay?",
        a: "Pengurusan LA mencakup penyesuaian jam kedatangan — koordinator menyesuaikan jemput dalam batas kewajaran (umumnya 4–6 jam). Delay melebihi itu berpotensi menambah biaya malam hotel atau perubahan itinerary, dan itulah kenapa perlindungan jadwal pada tiket Anda sangat disarankan.",
      },
    ],
    keywords: [
      "land arrangement umrah",
      "paket umrah tanpa tiket",
      "LA umrah murah",
      "umrah darat saja",
    ],
  },
  {
    slug: "bus-transport-makkah-madinah",
    name: "Bus Antar Kota Makkah–Madinah (Grup)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Bus AC armada grup untuk perjalanan Makkah–Madinah dan sekitarnya — kursi 40–50, sopir pengantar ziarah, dan jadwal yang mengikuti ritme ibadah Anda.",
    longDesc:
      "Perpindahan antar kota di Tanah Suci adalah saat-saat ketika kualitas bus paling terasa: 4–5 jam Makkah–Madinah atau sebaliknya, dengan koper di bagasi dan jamaah yang campur aduk antara lelah dan antusias. Bus grup yang baik punya AC yang benar-benar dingin, kursi yang jaraknya manusiawi, sopir yang terbiasa jalur jamaah, dan bantuan muat koper yang teratur — hal-hal kecil yang menentukan kondisi tubuh Anda saat tiba.\n\nArmada kami tersedia dalam beberapa kelas: bus standar 49 kursi untuk grup besar, bus 35 kursi dengan jarak kaki lebih lega, dan bus mewah dengan toilet onboard untuk grup premium. Semua sopir terbiasa dengan pola jamaah Indonesia — berhenti mushola saat waktunya shalat, bukan ketika pompa bensin sedang sepi. Untuk rombongan, bus tetap satu unit sepanjang perjalanan supaya koper dan jamaah tidak tercecer di antara grup lain.",
    features: [
      "Kelas bus: standar 49 kursi, lega 35 kursi, mewah toilet onboard",
      "Sopir terbiasa pola shalat & berhenti jamaah Indonesia",
      "Bus tetap satu unit sepanjang perjalanan grup",
      "Muat-muat koper terorganisir dengan penomoran",
      "Ketersediaan armada terverifikasi sebelum konfirmasi",
    ],
    process: [
      "Sampaikan rute, tanggal, dan jumlah jamaah",
      "Kami tawarkan kelas armada dengan foto nyata unitnya",
      "Booking dengan deposit escrow",
      "Info bus (nomor, plat, kontak sopir) dikirim saat H-1",
    ],
    priceNote: "Rp 250–400 ribu/kursi per trip grup (Makkah–Madinah); sewa penuh bus mulai Rp 3.500 ribu/trip",
    priceFrom: 250000,
    faqs: [
      {
        q: "Bus full atau berbagi dengan grup lain?",
        a: "Sewa penuh (bus untuk grup Anda sendiri) memberi kendali penuh jadwal dan kebersihan — tapi harganya per orang lebih tinggi bila grup kecil. Berbagi kursi di bus gabungan lebih murah, dengan konsekuensi jadwal mengikuti penyelenggara gabungan. Untuk grup 25+ orang, sewa penuh hampir selalu menang perhitungannya.",
      },
      {
        q: "Ada toilet di bus?",
        a: "Bus kelas mewah ada toilet onboard; kelas standar umumnya tidak, tapi sopir terbiasa berhenti di area istirahat yang bersih setiap 1,5–2 jam. Untuk jamaah lansia, kelas dengan toilet onboard sangat kami anjurkan pada rute antar kota.",
      },
    ],
    keywords: [
      "bus makkah madinah",
      "bus umrah",
      "sewa bus tanah suci",
      "transportasi jamaah bus",
    ],
  },
  {
    slug: "kereta-haramain-makkah-madinah",
    name: "Tiket Kereta Cepat Haramain",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Perjalanan Makkah–Madinah dalam 2 jam di kereta Haramain — kursi nyata, AC sempurna, dan pemandangan gurun yang menenangkan.",
    longDesc:
      "Haramain High-Speed Railway adalah keajaiban infrastruktur Saudi: 450 km Makkah–Madinah diselesaikan dalam sekitar dua jam dengan kecepatan hingga 300 km/jam. Untuk jamaah, kereta ini mengubah perhitungan perjalanan total: tiba lebih segar, tanpa hentakan jalan raya, dan dengan jendela waktu yang bisa diprediksi tepat — hal yang sulit dijamin bus di jalur yang padat musim puncak.\n\nTiketnya tersedia beberapa kelas dengan tarif yang terjangkau bila dibeli cukup awal; saat musim puncak, kursi kelas ekonomi laku dalam hitungan hari. Stasiunnya juga ramah: bagasi jalan lancar, mushola jelas, dan petugas yang terbiasa jamaah. Untuk grup besar, pembelian blok kursi perlu dikoordinasikan awal — sistem penjualan kereta tidak menyediakan blok otomatis untuk rombongan.",
    features: [
      "2 jam Makkah–Madinah (atau sebaliknya) di 300 km/jam",
      "Kelas ekonomi & bisnis dengan kursi yang semuanya nyaman",
      "Stasiun yang ramah koper & jamaah",
      "Pembelian blok kursi grup dikoordinasikan",
      "Prediksi waktu tiba yang tepat — menguntungkan itinerary rapat",
    ],
    process: [
      "Sampaikan tanggal & arah perpindahan Anda",
      "Kami cek ketersediaan & kelas kursi",
      "Penerbitan tiket (individu atau blok grup)",
      "Panduan stasiun (masuk, mushola, gerbang peron) dikirim",
    ],
    priceNote: "Mulai SAR 130–250/kursi ekonomi per arah (Rp 550 ribu–1 juta) tergantung kelas & tanggal",
    priceFrom: 550000,
    faqs: [
      {
        q: "Stasiun kereta dekat Haram atau jauh?",
        a: "Stasiun Haramain Makkah dan Madinah berada 3–5 km dari masjid masing-masing — perlu bus/taksi lanjutan 15–30 menit. Hitungan yang jujur: kereta menang di rel, bus menang di pintu-ke-pintu bila hotel Anda dekat jalur raya. Untuk lansia, kombinasi kereta + antar-jemput yang dipesan sekaligus adalah yang paling lembut.",
      },
      {
        q: "Kapan kereta lebih unggul dari bus?",
        a: "Tiga situasi: jadwal rapat yang butuh ketepatan waktu, jamaah yang lelah dan butuh perjalanan yang tidak berguncang, dan musim puncak ketika jalanan raya macet oleh arus jamaah. Untuk grup besar dengan banyak koper dan bus tetap, bus tetap masuk akal — kereta lebih berharga untuk grup kecil dan keluarga.",
      },
    ],
    keywords: [
      "kereta haramain",
      "tiket kereta makkah madinah",
      "haramain railway tiket",
      "kereta cepat saudi",
    ],
  },
  {
    slug: "hrv-hiace-grup-kecil",
    name: "HRV/Hiace untuk Grup Kecil & Keluarga",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Van 7–13 kursi dengan sopir untuk keluarga dan grup kecil — fleksibilitas maksimal, jemput dari pintu hotel, jadwal penuh milik Anda.",
    longDesc:
      "Tidak semua perjalanan butuh bus 49 kursi. Keluarga lima orang, grup ustaz-ustazah, atau rombongan VIP 10 orang justru dilayani paling baik oleh Hiace atau GMC 13–15 kursi: berhenti kapan pun dibutuhkan, muat koper tanpa drama, dan sopir yang jadi satu tim dengan mutawif Anda sepanjang perjalanan.\n\nVan sewaan kami datang dengan sopir yang terbiasa mengantar jamaah Indonesia — termasuk kebiasaan yang sering dilupakan operator lain: berhenti di tempat yang punya mushola, menunggu sampai jamaah selesai ziarah tanpa menghitung menit, dan menolong mengangkat koper lansia. Sewa bisa per trip, per hari, atau tetap satu van sepanjang perjalanan — opsi terakhir yang paling banyak dipilih keluarga karena keakraban sopir-menumpangnya.",
    features: [
      "Hiace/GMC 7–15 kursi dengan sopir penuh",
      "Sewa per trip, per hari, atau tetap sepanjang perjalanan",
      "Sopir terbiasa kebutuhan jamaah Indonesia",
      "Cocok untuk keluarga, grup VIP, dan tim kecil",
      "Kombinasi dengan bus grup utama (van pembantu)",
    ],
    process: [
      "Sampaikan jumlah orang & rencana perpindahan",
      "Pilih van & skema sewa (trip/harian/tetap)",
      "Booking dengan deposit escrow",
      "Kontak sopir & titik jemput dikirim saat H-1",
    ],
    priceNote: "Rp 900 ribu–1,8 juta/hari tergantung tipe van & jarak; per trip Makkah–Madinah mulai Rp 1,5 juta",
    priceFrom: 900000,
    faqs: [
      {
        q: "Van 13 kursi cukup untuk 13 orang dengan koper?",
        a: "Muat, tapi pas — bagasi Hiace menampung sekitar 10–12 koper ukuran besar. Untuk grup penuh kursi dengan koper pulang yang membengkak (zamzam, kurma), kami sarankan van 15 kursi atau tambah taksi pembawa koper di hari keberangkatan.",
      },
      {
        q: "Bisa van tetap menunggu di area Haram?",
        a: "Bisa dengan catatan biaya tunggu — area sekitar Haram punya aturan penumpangan ketat, dan sopir biasanya menunggu di titik jemput yang jauh sedikit. Ini praktik normal; yang penting titik jemput disepakati jelas di awal supaya tidak ada saling mencari setelah Isya.",
      },
    ],
    keywords: [
      "sewa hiace makkah",
      "van umrah keluarga",
      "sewa mobil tanah suci",
      "hrv jeddah",
    ],
  },
  {
    slug: "bus-ziarah-harian-makkah",
    name: "Bus Ziarah Harian Makkah",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Tur ziarah satu hari di Makkah — Jabal Rahmah, Padang Arafah, Muzdalifah, Masjid Aisyah, dan miqat — dengan pemandu yang bercerita, bukan sekadar mengantar.",
    longDesc:
      "Ziarah internal Makkah menghubungkan Anda dengan sejarah yang selama ini hanya berjarak satu halaman buku: berdiri di Padang Arafah di luar musim haji, menyentuh batas miqat Qarnul Manazil, atau berdiri di kaki Jabal Rahmah tempat Adam dan Hawa dipertemukan kembali. Selama empat jam, sebuah bus kecil membawa grup melintasi tempat-tempat itu dengan pemandu yang bercerita sejarahnya, bukan sekadar mengantre foto.\n\nProgram ziarah kami membedakan diri pada dua hal: urutan titik yang dirancang menghindari kemacetan arus grup lain, dan pemandu yang menjelaskan dengan konteks fiqih — mana yang sunnah dikerjakan, mana yang sekadar melihat dengan mata hati. Untuk grup yang punya mutawif sendiri, kami menyediakan bus tanpa pemandu; untuk jamaah mandiri, pemandu kami adalah yang mengisi ceritanya.",
    features: [
      "Rute: Jabal Rahmah, Arafah, Muzdalifah, Masjid Aisyah, miqat",
      "Pemandu dengan konteks sejarah & fiqih",
      "Durasi 4–5 jam dengan urutan anti-kemacetan",
      "Opsi bus tanpa pemandu untuk grup ber-mutawif",
      "Air mineral & berhenti mushola terjamin",
    ],
    process: [
      "Pilih tanggal ziarah (idealnya di hari senggang di Makkah)",
      "Terbitkan konfirmasi & jam jemput hotel",
      "Berangkat dengan bus+pemandu; kembali sebelum Asar",
    ],
    priceNote: "Rp 150–250 ribu/kursi (bus grup, pemandu, air); sewa bus penuh mulai Rp 2 juta",
    priceFrom: 150000,
    faqs: [
      {
        q: "Ziarah Makkah ada nilainya secara ibadah?",
        a: "Sebagian titik punya muatan ibadah (Masjid Aisyah sebagai miqat untuk umrah susulan, misalnya), sebagian murni perenungan sejarah. Pemandu kami memisahkan keduanya dengan jelas supaya tidak ada jamaah mengira semua pemberhentian adalah ritual — kejujuran fikih adalah bagian dari layanan.",
      },
      {
        q: "Bisa umrah susulan lewat ziarah ini?",
        a: "Bisa — Masjid Aisyah (Tanim) adalah miqat terdekat untuk umrah ulang dari Makkah. Program ziarah bisa dikombinasikan: jamaah yang ingin umrah susulan diantar ke miqat, berumrah, lalu menyusul bus di titik berikutnya. Konfirmasikan rencananya saat booking.",
      },
    ],
    keywords: [
      "ziarah makkah",
      "jabal rahmah",
      "padang arafah ziarah",
      "masjid aisyah miqat",
      "bus ziarah makkah",
    ],
  },
  {
    slug: "bus-ziarah-harian-madinah",
    name: "Bus Ziarah Harian Madinah",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Ziarah Madinah satu hari — Masjid Quba, Jabal Uhud, Qiblatain, Pasar Kurma — dengan cerita perang dan hijrah yang membuat sejarah terasa dekat.",
    longDesc:
      "Madinah adalah kota yang sejarahnya hidup di seluruh penjuru kota: masjid pertama dalam Islam di Quba, bukit Uhud dengan kisah para syuhada, Masjid Qiblatain tempat arah kiblat dialihkan, dan perkebunan kurma yang masih menampung pohon-pohon berusia ratusan tahun. Bus ziarah satu hari mengantar grup melintasi semuanya dengan pemandu yang tahu kapan berhenti, kapan bercerita, dan kapan mengheningkan diri menghadap makam.\n\nUrutan rute kami dirancang untuk menghindari gelombang grup besar: Quba di awal pagi saat sejuk (dan karena shalat di Quba punya kedudukan khusus), Uhud sebelum terik, kurma pasca-Zuhur. Untuk grup yang membawa lansia, setiap titik berhenti kami pastikan ada akses yang manusiawi — bukan semua situs Madinah ramah kursi roda, dan jujur soal itu adalah bagian dari layanan.",
    features: [
      "Rute: Quba, Uhud, Qiblatain, pasar kurma & titik sejarah lain",
      "Urutan rute anti-gelombang grup besar",
      "Pemandu bercerita dengan konteks sirah",
      "Penilaian aksesibilitas tiap titik untuk lansia",
      "Kombinasi belanja kurma di petani langsung",
    ],
    process: [
      "Pilih tanggal ziarah Madinah Anda",
      "Konfirmasi jam jemput hotel (umumnya pagi)",
      "Berangkat dengan bus+pemandu sepanjang ±5 jam",
      "Berakhir di pasar kurma — kembali ke hotel dengan belanjaan",
    ],
    priceNote: "Rp 150–250 ribu/kursi (bus grup, pemandu, air); sewa bus penuh mulai Rp 1,8 juta",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah shalat di Masjid Quba benar-benar istimewa?",
        a: "Ya — ada riwayat bahwa shalat di Masjid Quba bernilai seperti umrah (sebagian riwayat menyebut satu shalat setara satu umrah, dengan perbedaan pendapat di antara ulama). Karena itu kami menempatkan Quba di awal rute dengan jeda waktu yang cukup untuk shalat dua rakaat dengan tenang, bukan sekadar turun-foto-naik.",
      },
      {
        q: "Beli kurma di ziarah atau di toko kota?",
        a: "Pasar kurma ziarah memberi akses ke penjual kebun dengan harga lebih wajar dan variasi lebih hidup — tapi bukan selalu termurah untuk kuantitas besar. Untuk pembelian kiloan bingkisan, toko grosir kota lebih efisien. Kami jelaskan perbedaannya, Anda yang memilih.",
      },
    ],
    keywords: [
      "ziarah madinah",
      "masjid quba",
      "jabal uhud",
      "bus ziarah madinah",
      "pasar kurma madinah",
    ],
  },
  {
    slug: "antar-jemput-bandara-jeddah",
    name: "Antar-Jemput Bandara Jeddah ↔ Makkah",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Perpindahan pertama dan terakhir Anda: dari bandara Jeddah ke hotel Makkah (dan sebaliknya) dengan bus/van yang menunggu, bukan menunggu Anda menebak.",
    longDesc:
      "Kedatangan pertama di Tanah Suci terasa seperti masuk ke dunia yang berbahasa lain — dan momen itulah ketika kendaraan yang benar-benar menunggu di pintu menjadi berharga. Layanan antar-jemput bandara Jeddah menyambut Anda (atau grup Anda) dengan papan nama, mengurus pemuatan koper, dan mengantar langsung ke hotel Makkah melalui rute yang terbiasa arus jamaah.\n\nJarak Jeddah–Makkah sekitar 90–100 km dan ditempuh 1,5–2 jam tergantung arus. Perhatian khusus: banyak penerbangan jamaah tiba dini hari, dan lalu lintas menuju Makkah saat subuh adalah salah satu yang paling padat sepanjang minggu — jadwal jemput kami memperhitungkan itu, bukan cuma menghitung kilometer. Untuk grup, bus menunggu dengan daftar nama per keluarga supaya tidak ada yang tertinggal di antara dua terminal.",
    features: [
      "Jemput dengan papan nama & daftar nama per keluarga",
      "Perhitungan arus dini hari ke Makkah",
      "Bus 49 kursi, 35 kursi, atau van sesuai ukuran grup",
      "Kombinasi dengan handling bandara (paket grup)",
      "Jemput ulang ke bandara untuk keberangkatan pulang",
    ],
    process: [
      "Kirim jadwal penerbangan (nomor, jam, terminal)",
      "Kami susun jemput dengan buffer arus",
      "Pengemudi & titik temu dikirim saat H-1",
      "Kembali ke bandara dijadwalkan dengan buffer check-in",
    ],
    priceNote: "Rp 350–600 ribu/kursi (bus grup); sewa van penuh mulai Rp 1,6 juta/trip",
    priceFrom: 350000,
    faqs: [
      {
        q: "Bagaimana kalau pesawat saya delay?",
        a: "Pengemudi memantau nomor penerbangan Anda dan menyesuaikan jam jemput dalam batas kewajaran (umumnya 4–6 jam). Delay lebih panjang menambah biaya tunggu — kami sampaikan tarifnya di awal supaya tidak ada negosiasi sambil panik di bandara.",
      },
      {
        q: "Langsung ihram sebelum naik kendaraan?",
        a: "Jamaah yang berihram dari miqat udara (Yalamlam) sudah berihram sejak pesawat — kendaraan hanya membawa Anda lanjut ke hotel. Jamaah yang belum berihram (misalnya tiba untuk bekerja atau sudah dalam wilayah Haram) menuju hotel dulu. Petunjuknya kami sampaikan sesuai rute penerbangan Anda.",
      },
    ],
    keywords: [
      "antar jemput jeddah makkah",
      "jemput bandara jeddah",
      "transfer jeddah makkah",
      "bus bandara jamaah",
    ],
  },
  {
    slug: "antar-jemput-bandara-madinah",
    name: "Antar-Jemput Bandara Madinah ↔ Hotel",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Jemput bandara Pangeran Mohammad bin Abdulaziz Madinah — bandara yang dekat Nabawi, perpindahan tercepat di seluruh Tanah Suci.",
    longDesc:
      "Bandara Madinah adalah hadiah untuk jamaah: hanya 15–25 km dari Masjid Nabawi, jadi kedatangan Anda bisa berubah menjadi shalat di Nabawi dalam satu jam — sesuatu yang mustahil di Jeddah dengan Makkah. Layanan antar-jemput kami di Madinah menyambut grup di terminal dengan papan nama, memuat koper, dan mengantar langsung ke hotel Central Area atau kawasan lain.\n\nPerpindahan balik ke bandara untuk keberangkatan pulang juga paling ringan di Madinah — 30–45 menit dari mayoritas hotel. Untuk grup yang pulang dari Madinah, kami menyarankan jam berangkat ke bandara dengan buffer yang cukup karena terminal pulang jamaah bisa padat saat gelombang grup besar kebagian slot penerbangan yang sama.",
    features: [
      "Jemput terminal dengan papan nama grup",
      "Perpindahan tercepat: 20–40 menit ke Central Area",
      "Cocok untuk pola Madinah-dulu yang tiba subuh",
      "Kembali ke bandara dengan buffer terminal pulang",
      "Kombinasi bus grup & van keluarga",
    ],
    process: [
      "Kirim nomor penerbangan & jam kedatangan",
      "Kami atur jemput dengan buffer antrean imigrasi",
      "Titik temu & kontak pengemudi dikirim H-1",
      "Jemput pulang dijadwalkan sesuai penerbangan balik",
    ],
    priceNote: "Rp 250–450 ribu/kursi (bus grup); van penuh mulai Rp 700 ribu/trip",
    priceFrom: 250000,
    faqs: [
      {
        q: "Tiba Madinah subuh, bisa langsung shalat Subuh di Nabawi?",
        a: "Sangat mungkin — proses imigrasi Madinah biasanya lebih ringan, dan jarak ke hotel pusat hanya 20–40 menit. Dengan jemput yang terjadwal baik, banyak grup menunaikan Subuh pertama mereka di Nabawi. Sampaikan keinginan ini saat booking supaya jam dan hotelnya disiapkan sesuai.",
      },
      {
        q: "Berapa jam sebelum terbang harus berangkat ke bandara Madinah?",
        a: "4 jam untuk penerbangan internasional dengan bagasi grup — 3 jam bila check-in sudah online. Terminal Madinah efisien, tapi gelombang pulang grup bisa menumpuk di jam yang sama; buffer yang cukup adalah murahnya ketenangan.",
      },
    ],
    keywords: [
      "antar jemput bandara madinah",
      "jemput madinah nabawi",
      "transfer bandara madinah",
    ],
  },
  {
    slug: "sewa-mobil-vip-keluarga",
    name: "Sewa Mobil VIP Keluarga (Full Day)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Sedan/SUV premium dengan sopir untuk keluarga — berangkat ke Haram dengan tenang, ziarah dengan jadwal sendiri, tanpa menunggu bus yang penuh.",
    longDesc:
      "Ada keluarga yang datang dengan anggaran yang memungkinkan perjalanan digerakkan sendiri: Camry atau GMC dengan sopir tetap, tersedia 10–12 jam sehari, berangkat ke Haram lima kali sehari sesuai keinginan, dan berhenti di mana pun ziarah menuntutnya. Format ini mengubah karakter perjalanan sepenuhnya — dari mengikuti jadwal grup menjadi perjalanan yang mengikuti keluarga Anda.\n\nSopir VIP kami terverifikasi: paham area Haram dan titik jemput sahnya, terbiasa menunggu lama tanpa mengeluh, dan memahami etika mengantar keluarga Muslim Indonesia. Untuk keluarga dengan lansia atau bayi, mobil pribadi menghilangkan tiga frustasi terbesar: menunggu bus, jalan kaki panjang dari titik turun bus, dan cuaca yang tidak menunggu siapa-siapa.",
    features: [
      "Camry/GMC/SUV premium dengan sopir tetap",
      "Jam operasional fleksibel 10–12 jam/hari",
      "Sopir terverifikasi: titik jemput Haram & etika jamaah",
      "Jadwal penuh milik keluarga Anda",
      "Cocok untuk lansia, bayi, dan program ibadah intensif",
    ],
    process: [
      "Tentukan durasi sewa (harian atau sepanjang perjalanan)",
      "Pilih tipe mobil & konfirmasi ketersediaan",
      "Booking dengan deposit escrow",
      "Kontak sopir & titik jemput dikirim saat H-1",
    ],
    priceNote: "Rp 1,8–3,5 juta/hari tergantung tipe mobil & jam operasional",
    priceFrom: 1800000,
    faqs: [
      {
        q: "Mobil VIP bisa berhenti tepat di depan Haram?",
        a: "Tidak — area sekitar Haram punya zona penumpangan yang ketat, dan semua kendaraan berhenti di titik jemput resmi yang berjarak beberapa ratus meter. Keunggulan mobil pribadi adalah titik itu dipilih yang paling dekat dengan pintu yang Anda tuju, dan sopir menunggu di sana sampai Anda kembali.",
      },
      {
        q: "Berapa jam sopir bekerja dalam sehari?",
        a: "Standar 10–12 jam dengan jam istirahat sopir yang kami jaga — sopir yang lelah adalah risiko keselamatan, bukan fitur hemat. Untuk program subuh–tengah malam, sewa dua shift sopir tersedia dengan tambahan biaya.",
      },
    ],
    keywords: [
      "sewa mobil vip makkah",
      "camry sopir saudi",
      "mobil keluarga umrah",
      "sewa gmc makkah",
    ],
  },
  {
    slug: "bus-double-decker-grup-besar",
    name: "Bus Double-Decker untuk Grup Besar",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Bus lantai dua berkapasitas 70–80 kursi untuk rombongan raksasa — satu kendaraan, satu koordinator, seluruh jamaah dalam satu pandangan mata.",
    longDesc:
      "Rombongan 300–500 orang menghadapi masalah logistik yang spesifik: dua bus berarti dua koordinasi, dua titik kumpul, dan dua kemungkinan jamaah tertinggal. Bus double-decker memotong masalah itu dari akarnya — 70–80 kursi dalam satu unit berarti satu kali hitung, satu papan nama, satu sopir yang sudah hafal wajah-wajah pentingnya.\n\nKendaraan tipe ini tersedia terbatas dan paling laku untuk program komunitas besar serta perusahaan yang mengirim karyawan berumrah bersama. Lantai bawahnya kami anjurkan diisi lansia dan keluarga dengan anak; lantai atas untuk jamaah muda yang menikmati pemandangan dari tempat duduk yang tinggi. Koper grup besar tetap butuh kendaraan bagasi pendamping — struktur itu kami susun sejak kontrak, bukan improvisasi di hari-H.",
    features: [
      "Kapasitas 70–80 kursi dalam satu unit",
      "Satu koordinasi untuk grup raksasa",
      "Pembagian lantai: bawah lansia, atas jamaah muda",
      "Kendaraan bagasi pendamping dikoordinasikan",
      "Terbatas — booking jauh hari untuk musim puncak",
    ],
    process: [
      "Kirim jumlah jamaah & tanggal perjalanan",
      "Kami cek ketersediaan armada double-decker",
      "Kontrak bus + kendaraan bagasi pendamping",
      "Koordinasi titik kumpul & penomoran kursi dikirim",
    ],
    priceNote: "Rp 6–9 juta/trip sewa penuh tergantung rute & musim",
    priceFrom: 6000000,
    faqs: [
      {
        q: "Apakah bus double-decker nyaman untuk perjalanan 4-5 jam?",
        a: "Kelas kursinya setara bus standar — bukan lebih nyaman, hanya lebih banyak. Nilainya ada di konsolidasi logistik, bukan kemewahan kursi. Bila anggaran grup memungkinkan dua bus mewah normal, itu juga pilihan yang sah — keputusannya bergantung pada prioritas: kesederhanaan koordinasi atau kenyamanan kursi.",
      },
      {
        q: "Bagaimana dengan jamaah yang takut ketinggian?",
        a: "Lantai bawah selalu ada kursi tersisa untuk mereka, dan pengaturan kursi kami lakukan sebelum berangkat, bukan saat naik. Untuk jamaah lansia, lantai bawah adalah keharusan karena tangga lantai atas cukup curam.",
      },
    ],
    keywords: [
      "bus double decker umrah",
      "bus 70 kursi",
      "transportasi rombongan besar",
      "bus grup komunitas",
    ],
  },
  {
    slug: "bus-dedikasi-multi-hari-grup",
    name: "Bus Dedikasi Multi-Hari untuk Grup",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Satu bus yang melekat pada grup Anda sepanjang perjalanan — koper tinggal di bagasi, sopir jadi keluarga, dan jadwal berubah tanpa biaya drama.",
    longDesc:
      "Perbedaan antara bus sewa per-trip dan bus dedikasi bukan cuma di kuitansi — tapi di pengalaman perjalanan yang utuh. Bus yang tetap bersama grup dari bandara sampai bandara berarti: koper bisa ditinggal di bagasi saat transit hotel, sopir hafal titik kumpul kesukaan grup, jadwal bisa bergeser saat mutawif memutuskan berhenti lebih lama di Quba, dan tidak ada lagi drama 'bus mana bus kita' di parkiran yang berisi seratus bus serupa.\n\nSewa dedikasi tersedia mulai 4 hari dengan harga per hari yang turun seiring durasinya. Untuk komunitas yang menyusun itinerary sendiri, ini format yang paling menghargai fleksibilitas mereka. Kondisi armada diperiksa sebelum kontrak: AC, kursi, kebersihan, dan sopir pengganti bila terjadi keadaan darurat — semua tertulis, bukan janji.",
    features: [
      "Satu unit tetap dari hari pertama sampai pulang",
      "Koper tinggal di bagasi antar hotel",
      "Perubahan jadwal harian tanpa biaya tambahan",
      "Sopir & asisten tetap yang hafal grup",
      "Cek armada tertulis sebelum kontrak",
    ],
    process: [
      "Kirim itinerary kasar 4+ hari Anda",
      "Kami tawarkan armada dengan foto & spesifikasi",
      "Kontrak sewa dedikasi dengan deposit escrow",
      "Nomor bus & kontak sopir dikirim sebelum kedatangan",
    ],
    priceNote: "Rp 2,2–3,5 juta/hari (turun seiring durasi); minimal 4 hari",
    priceFrom: 2200000,
    faqs: [
      {
        q: "Kalau bus rusak di tengah perjalanan?",
        a: "Kontrak kami memuat kewajiban penyediaan unit pengganti dengan batas waktu respon, dan sopir cadangan jaringan siap dipanggil. Kepemilikan bus rusak sesekali itu nyata — yang membedakan layanan baik adalah bagaimana cepat ia menyelesaikannya tanpa biaya tambahan ke Anda.",
      },
      {
        q: "Bisa kurangi jumlah hari sewa di tengah jalan?",
        a: "Bisa bila perubahan disampaikan minimal 24 jam — tarif hari yang sudah komitmen dihitung, sisa hari dikembalikan sesuai kontrak. Perubahan mendadak di hari-H menanggung tarif hari itu penuh, karena armada sudah disiapkan dan sopir sudah bekerja.",
      },
    ],
    keywords: [
      "sewa bus dedikasi umrah",
      "bus tetap grup saudi",
      "sewa bus harian makkah",
      "bus multi hari jamaah",
    ],
  },
  {
    slug: "tren-mashaer-haji",
    name: "Tiket Tren Mashaer (Mina–Arafah–Muzdalifah)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Kereta khusus jalur Mashaer untuk musim haji — menyeberangi titik-titik terpadat perjalanan haji dalam hitungan menit, bukan jam.",
    longDesc:
      "Hari-hari terberat haji adalah perpindahan antar Mashaer: Mina ke Arafah pada 9 Dzulhijjah dan kembali ke Muzdalifah lalu Mina — jalan yang biasanya digilas dua juta jamaah dan bus yang macet berjam-jam. Kereta Al Mashaaer Al Mugaddassah Line melintasi jalur itu dalam hitungan menit per stasiun, dengan kapasitas ratusan ribu penumpang per hari yang terjadwal ketat.\n\nTiket tren Mashaer disalurkan melalui program haji resmi dan operator berizin — jamaah tidak membelinya bebas seperti tiket Haramain. Layanan kami berdiri di sisi perencanaan: memetakan program haji Anda terhadap jadwal tren, mengkoordinasi stasiun naik-turun dengan kendaraan darat, dan menyiapkan rencana cadangan bila alokasi tren berubah. Untuk PIHK dan komunitas yang menyusun program mandiri, koordinasi ini adalah perbedaan antara haji yang tertata dan haji yang bertahan dengan tenaga.",
    features: [
      "Koordinasi tiket tren lewat kanal resmi/operator berizin",
      "Pemetaan stasiun naik-turun sesuai program haji",
      "Kombinasi kendaraan darat untuk segmen non-tren",
      "Rencana cadangan bila alokasi tren berubah",
      "Panduan antrean & jam puncak jalur Mashaer",
    ],
    process: [
      "Kirim program haji Anda (tanggal & wilayah kampoeng)",
      "Kami petakan kebutuhan perpindahan & opsi tren",
      "Koordinasi alokasi lewat operator resmi",
      "Panduan stasiun & jadwal dikirim sebelum 8 Dzulhijjah",
    ],
    priceNote: "Harga terikat program haji resmi; layanan koordinasi mulai Rp 500 ribu/jamaah",
    priceFrom: 500000,
    faqs: [
      {
        q: "Bisakah membeli tiket tren Mashaer sendiri?",
        a: "Penjualan tren Mashaer tidak terbuka bebas seperti kereta biasa — alokasinya disalurkan lewat program haji resmi dan operator berizin saat musim haji. Jamaah yang mencoba membeli di luar kanal itu berisiko tiket tidak sah. Koordinasi lewat operator resmi adalah jalur yang benar.",
      },
      {
        q: "Tren Mashaer beroperasi sepanjang tahun?",
        a: "Tidak — jalurnya beroperasi khusus di musim haji. Di luar musim itu, jalur fisiknya ada tapi tidak melayani penumpang umum. Jadi layanan ini relevan hanya untuk periode Dzulhijjah dan program haji khusus yang diselenggarakan di sekitarnya.",
      },
    ],
    keywords: [
      "tren mashaer",
      "kereta mina arafah muzdalifah",
      "transportasi haji makkah",
      "al mashaaer line",
    ],
  },
  {
    slug: "taksi-saptco-reguler",
    name: "Tiket Bus SAPTCO Jadwal Reguler",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Bus antar kota reguler SAPTCO untuk jamaah mandiri — jadwal terbit di sistem resmi, harga tetap, dan rute yang mencakup seluruh kota besar Saudi.",
    longDesc:
      "SAPTCO adalah operator bus nasional Saudi dengan jadwal reguler yang mencakup Jeddah, Makkah, Madinah, Riyadh, Dammam, dan kota lainnya. Untuk jamaah mandiri yang perjalanannya tidak butuh bus dedikasi — dua-dua orang yang menyambung keluarga di Riyadh, satu-dua jamaah yang terlambat dari rombongan — SAPTCO adalah pilihan paling rasional: terjadwal, terharga tetap, dan bisa dipesan dari Indonesia sebelum berangkat.\n\nKendalanya adalah pemetaan terminal: SAPTCO berhenti di terminal bus resmi yang jaraknya dari kawasan masjid butuh taksi lanjutan. Kami menerbitkan tiketnya dan menyertakan panduan perpindahan terminal ke hotel — titik naik taksi yang sah, tarif yang wajar, dan jam yang perlu dihindari. Untuk jamaah yang datang di jam malam, opsi taksi resmi bandara disarankan daripada bus malam yang tiba terlalu larut.",
    features: [
      "Jadwal reguler seluruh kota besar Saudi",
      "Penerbitan tiket dari sistem resmi SAPTCO",
      "Panduan terminal → hotel per kota",
      "Kombinasi dengan taksi resmi di titik perpindahan",
      "Harga tetap — tidak berubah dengan kedekatan tanggal",
    ],
    process: [
      "Sampaikan rute & tanggal perjalanan darat Anda",
      "Kami cek jadwal SAPTCO yang paling pas",
      "Terbitkan e-ticket dari sistem resmi",
      "Panduan perpindahan terminal dikirim per kota",
    ],
    priceNote: "SAR 60–160/segmen tergantung jarak (Makkah–Madinah sekitar SAR 80–120)",
    priceFrom: 250000,
    faqs: [
      {
        q: "Bus SAPTCO bagaimana kualitasnya?",
        a: "Standar operator nasional: AC yang berfungsi, kursi yang wajar, keberangkatan yang terjadwal. Bukan kelas bus grup premium, tapi untuk dua-tiga penumpang mandiri, keandalan jadwalnya lebih berharga daripada kemewahan bus sewa penuh.",
      },
      {
        q: "Jam berapa terakhir bus Makkah–Madinah?",
        a: "Jadwalnya meliputi pagi sampai malam dengan frekuensi yang memadai di musim normal, tapi memadat dan terbatas saat puncak. Cek jadwal sebelum menentukan itinerary akhir Anda — jangan merencanakan perpindahan mengandalkan bus terakhir hari itu.",
      },
    ],
    keywords: [
      "bus saptco",
      "tiket bus saudi",
      "bus reguler makkah madinah",
      "transportasi mandiri umrah",
    ],
  },
  {
    slug: "sewa-bus-ziarah-luar-kota",
    name: "Sewa Bus Ziarah Luar Kota (Thaif/Badar/Khaibar)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Kendaraan untuk ziarah jarak jauh — Thaif dari Makkah, Badar dan Khaibar dari Madinah — rute sejarah yang jarang disentuh grup reguler.",
    longDesc:
      "Di luar rute ziarah standar ada rute-rute yang meminta satu hari penuh: Thaif yang sejuk di pegunungan dengan sejarah periode Nabi ﷺ yang paling menyentuh, Badar tempat pertempuran penentu pertama Islam, dan Khaibar dengan benteng-bentengnya. Grup reguler jarang menyentuhnya karena waktunya — tapi bagi komunitas yang punya satu hari senggang dan rasa penasaran yang hidup, rute-rute ini adalah pengalaman yang tidak bisa diganti.\n\nSewa bus untuk rute luar kota menuntut persiapan yang berbeda: jarak tempuh yang lebih jauh (Badar ±150 km dari Madinah, Thaif ±180 km dari Makkah), jam berangkat yang sangat pagi, bekal makan di jalan, dan sopir yang benar-benar hafal rutenya. Kami menyediakan paket kendaraan + pemandu + bekal dalam satu kontrak, dengan jadwal yang dirancang kembali ke hotel sebelum Isya.",
    features: [
      "Rute: Thaif (Makkah), Badar & Khaibar (Madinah)",
      "Paket kendaraan + pemandu sejarah + bekal makan",
      "Jam berangkat dini dengan target kembali sebelum Isya",
      "Sopir hafal rute jarak jauh",
      "Opsi van kecil untuk keluarga & bus untuk grup",
    ],
    process: [
      "Pilih rute & tanggal yang senggang dari ibadah utama",
      "Kami susun paket kendaraan + pemandu + bekal",
      "Booking dengan deposit escrow",
      "Jam jemput & daftar bawaan dikirim H-1",
    ],
    priceNote: "Mulai Rp 2,5 juta/trip bus penuh + pemandu; van keluarga mulai Rp 1,5 juta",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Rute luar kota ini layak untuk perjalanan 9 hari?",
        a: "Jujur: hanya bila jadwal ibadah utama Anda sudah mapan dan ada satu hari yang benar-benar senggang. Thaif adalah yang paling sering dipilih karena sejuk dan dekat relatif dari Makkah. Untuk perjalanan pendek, tahan godaannya — fokus ibadah dulu, sejarah menyusul bila waktunya memungkinkan.",
      },
      {
        q: "Aman berperjalanan ke Badar dan Khaibar?",
        a: "Rute-rute ini adalah jalan raya utama yang dilalui kendaraan reguler setiap hari dan aman untuk perjalanan siang. Yang perlu ditaati adalah pola perjalanan siang hari — berangkat dini, kembali sebelum gelap, dengan sopir yang tidak memaksakan kecepatan.",
      },
    ],
    keywords: [
      "ziarah thaif",
      "perang badar ziarah",
      "khaibar madinah",
      "sewa bus ziarah jauh",
    ],
  },
  {
    slug: "antar-jemput-hotel-stasiun-haramain",
    name: "Antar-Jemput Hotel ↔ Stasiun Haramain",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Perpindahan pendek tapi kritis: hotel ke stasiun kereta Haramain dan sebaliknya — dengan koper, tanpa drama, tepat sebelum kereta berangkat.",
    longDesc:
      "Segmen yang paling sering diremehkan dalam perjalanan berbasis kereta Haramain adalah perpindahan hotel-stasiun: 3–5 km yang terasa panjang dengan dua koper per keluarga, di jam yang tidak bisa salah. Kereta Haramain tidak menunggu — dan taksi yang dipanggil mendadak di jam puncak bisa membuat Anda berlari di stasiun dengan jantung berdebar.\n\nLayanan ini mengunci perpindahan itu sejak awal: kendaraan menunggu di hotel tepat waktu, muat koper, antar ke gerbang stasiun yang tepat (setiap kota punya beberapa pintu), dan sebaliknya saat tiba di kota berikutnya. Untuk grup yang memakai kereta, perpindahan ini disinkronkan dengan jam keberangkatan semua segmen — satu tabel perpindahan yang bisa dibaca koordinator grup.",
    features: [
      "Jemput tepat waktu di hotel & stasiun",
      "Penanganan koper yang tidak ditinggal di jalur",
      "Antar ke gerbang stasiun yang tepat",
      "Sinkronisasi semua segmen kereta dalam satu tabel",
      "Opsi van keluarga & bus grup",
    ],
    process: [
      "Kirim jadwal kereta Anda (semua segmen)",
      "Kami susun tabel perpindahan hotel↔stasiun",
      "Booking perpindahan dengan deposit",
      "Kontak pengemudi per segmen dikirim H-1",
    ],
    priceNote: "Rp 250–450 ribu/trip van keluarga; bus grup mulai Rp 1,2 juta/trip",
    priceFrom: 250000,
    faqs: [
      {
        q: "Berapa menit sebelum kereta harus sampai stasiun?",
        a: "Kami pegang target tiba 60–75 menit sebelum keberangkatan — cukup untuk turun, muat koper, melewati pemeriksaan, dan menemukan peron tanpa tergesa. Kereta Haramain bisa ramai, dan proses masuk stasiunnya menyerupai bandara, bukan terminal bus.",
      },
      {
        q: "Bisa perpindahan mendadak tanpa booking?",
        a: "Bisa lewat taksi resmi stasiun atau aplikasi — kadang berhasil lancar. Tapi di jam puncak musim jamaah, antrean taksi stasiun bisa panjang dan harga meter terbatas. Untuk perpindahan yang menentukan segmen kereta berikutnya, booking yang terkunci adalah pilihan yang lebih bijak.",
      },
    ],
    keywords: [
      "jemput stasiun haramain",
      "hotel ke stasiun kereta",
      "transfer haramain hotel",
    ],
  },
  {
    slug: "jemput-jemput-domisili-door-to-door",
    name: "Jemput-Jemput Domisili (Door-to-Door Indonesia)",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Penjemputan dari rumah ke bandara keberangkatan di Indonesia — keluarga tidak perlu mengantar sampai bandara, dan koper tidak naik-turun mobil berulang.",
    longDesc:
      "Malam keberangkatan umrah adalah malam yang penuh emosi di rumah: keluarga yang mengantar, doa, air mata, dan koper yang memenuhi mobil. Layanan jemput-jemput door-to-door memindahkan sebagian beban itu: mobil dan pengemudi datang ke rumah, mengantar langsung ke bandara keberangkatan, dan keluarga bisa berpamitan dengan tenang tanpa memikirkan parkir, tol, dan jam malam bandara.\n\nLayanan ini paling berharga untuk jamaah yang berangkat dari kota yang jauh dari bandara keberangkatan (Purwokerto ke CGK, Jember ke SUB, Lampung ke CGK lewat pelabuhan) dan untuk grup yang ingin keberangkatan yang seragam — semua jamaah dijemput dengan jadwal bertahap dan tiba bandara dalam jendela yang sama. Tarif dihitung per kendaraan dengan jarak, dan untuk grup bisa jauh lebih murah dari keseluruhan jamaah menyewa mobil sendiri-sendiri.",
    features: [
      "Jemput dari alamat rumah ke bandara keberangkatan",
      "Jadwal bertahap untuk grup agar tiba seragam",
      "Mobil MPV untuk keluarga & bus untuk grup",
      "Koper tidak berpindah-pindah kendaraan",
      "Cakupan seluruh pulau Jawa & kota besar lain",
    ],
    process: [
      "Kirim alamat jemput & jam target di bandara",
      "Kami susun rute & jadwal jemput bertahap",
      "Booking dengan deposit",
      "Nomor pengemudi dikirim H-1; jemput tepat waktu",
    ],
    priceNote: "Mulai Rp 350 ribu/jemputan dalam kota; luar kota dihitung per km",
    priceFrom: 350000,
    faqs: [
      {
        q: "Keluarga boleh ikut mengantar sampai bandara?",
        a: "Boleh selama kapasitas kendaraan memungkinkan — mobil MPV tujuh kursi biasanya muat jamaah + dua pengantar. Untuk bus grup, pengantar biasanya hanya sampai titik tertentu. Sebutkan keinginannya saat booking supaya kendaraannya disesuaikan.",
      },
      {
        q: "Bisa jemput dari kota lain provinsi?",
        a: "Bisa — kami menghitung rute lintas kota dengan tarif per km dan opsi berhenti istirahat untuk perjalanan panjang. Untuk jarak yang menuntut berangkat sehari sebelumnya, kombinasi dengan hotel transit bandara tersedia dalam paket yang sama.",
      },
    ],
    keywords: [
      "jemput rumah ke bandara",
      "door to door umrah",
      "jemput jamaah keberangkatan",
      "antar jamaah bandara",
    ],
  },
  {
    slug: "transfer-overland-riyadh-dammam",
    name: "Transfer Overland Makkah–Riyadh–Dammam",
    categorySlug: "transportasi-darat",
    shortDesc:
      "Perjalanan darat jarak jauh melintasi Saudi — untuk program plus Yordania, transit Riyadh, atau lanjutan ziarah ke timur semenanjung.",
    longDesc:
      "Sebagian program perjalanan menyentuh kota-kota timur Saudi: Riyadh untuk transit menuju Yordania, Dammam untuk pemberangkatan laut atau darat, atau ziarah khusus ke kawasan Al-Ahsa. Rute Makkah–Riyadh menempuh 850–900 km — 8–10 jam bus atau kombinasi kereta Haramain ke Madinah lalu lanjutan ke timur.\n\nLayanan ini menyusun transfer overland dengan perencanaan yang serius: jam berangkat yang meminimalkan perjalanan panas siang, titik istirahat yang layak, dan sinkronisasi dengan segmen berikutnya (penerbangan, kereta, atau penyeberangan). Untuk grup, bus dedikasi dengan dua sopir bergantian adalah standar rute ini. Kami juga jujur menimbang alternatif penerbangan domestik — untuk rute sejauh itu, kadang pesawat menang total dan overland hanya layak bila ada alasan kuat di rutenya.",
    features: [
      "Rute Makkah–Riyadh–Dammam & Al-Ahsa",
      "Bus dedikasi dua sopir bergantian untuk grup",
      "Titik istirahat terjadwal & bekal makan",
      "Sinkronisasi dengan segmen berikutnya",
      "Perbandingan jujur dengan penerbangan domestik",
    ],
    process: [
      "Sampaikan tujuan akhir & tanggal batas Anda",
      "Kami bandingkan opsi darat vs udara dengan angka",
      "Susun rute & jam perjalanan yang aman",
      "Kontrak transfer + daftar bawaan dikirim",
    ],
    priceNote: "Mulai Rp 3,5 juta/kursi bus dedikasi (grup); van penuh mulai Rp 4 juta/trip",
    priceFrom: 3500000,
    faqs: [
      {
        q: "Kenapa tidak semua orang terbang ke Riyadh?",
        a: "Penerbangan domestik Saudi di rute jarak jauh memang sering lebih cepat — tapi bila grup besar, biaya tiket domestik per orang bisa melampaui bus dedikasi, dan ada program yang memang menyentuh titik-titik di jalur darat. Keputusannya murni hitungan konteks, dan kami menampilkan keduanya dengan angka nyata.",
      },
      {
        q: "Seberapa lelah perjalanan 900 km ini?",
        a: "Sangat lelah untuk satu hari — itulah kenapa rute ini kami pecah dengan istirahat dan tidak pernah direncanakan sebagai sprint. Untuk jamaah lansia, rute ini umumnya tidak kami anjurkan kecuali ada kendaraan yang nyaman dan program yang memang menuntutnya.",
      },
    ],
    keywords: [
      "transfer riyadh makkah",
      "overland saudi",
      "bus riyadh dammam",
      "ziarah al ahsa",
    ],
  },
];

