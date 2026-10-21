import type { ServiceCategory } from "./types";

/**
 * 14 kategori layanan haji & umrah — Task 2-a.
 * Slug kategori adalah kontrak: setiap Service.categorySlug wajib ada di daftar ini.
 */
export const serviceCategoryList: ServiceCategory[] = [
  {
    slug: "visa-dokumen",
    name: "Visa & Dokumen Perjalanan",
    tagline: "Semua persyaratan keberangkatan dirapikan sejak hari pertama.",
    description:
      "Pengurusan visa umrah lewat platform Nusuk, paspor, vaksinasi wajib, hingga pelengkap dokumen seperti legalisir dan surat kuasa. Tahap dokumen adalah bagian yang paling sering mengganggu jadwal keberangkatan bila disiapkan mendadak. Seluruh layanan di kategori ini ditangani partner terverifikasi yang paham alur Kemenag dan Nusuk.",
    icon: "FileCheck",
  },
  {
    slug: "tiket-penerbangan",
    name: "Tiket & Penerbangan",
    tagline: "Kursi pesawat ke Tanah Suci — dari tiket reguler sampai charter grup.",
    description:
      "Tiket ekonomi, kelas bisnis, charter rombongan, rute transit, hingga perlindungan jadwal penerbangan untuk jamaah umrah dan haji. Penerbangan ke Jeddah dan Madinah sangat sensitif terhadap musim, jadi strategi membeli tiket yang tepat bisa menghemat jutaan rupiah. Semua penerbit tiket di sini terhubung dengan kuota resmi maskapai partner.",
    icon: "Plane",
  },
  {
    slug: "hotel-akomodasi",
    name: "Hotel & Akomodasi",
    tagline: "Tempat istirahat yang jaraknya dihitung meter, bukan klaim.",
    description:
      "Hotel Makkah dan Madinah dari bintang 5 di depan Haram sampai pilihan hemat untuk grup besar, apartemen jamaah, dan kamar khusus keluarga. Jarak hotel ke Masjidil Haram atau Masjid Nabawi adalah faktor harga terbesar setelah musim — di SolusiHajj jaraknya dicantumkan dalam meter. Cocok untuk PPIU yang mengisi paket maupun keluarga yang menyusun perjalanan sendiri.",
    icon: "BedDouble",
  },
  {
    slug: "transportasi-darat",
    name: "Transportasi & Darat",
    tagline: "Bus, kereta, dan mobil yang menggerakkan seluruh perjalanan Anda.",
    description:
      "Bus antar kota Makkah–Madinah, kereta Haramain, HRV untuk grup kecil, bus ziarah harian, hingga land arrangement lengkap di Tanah Suci. Kualitas transportasi darat menentukan kenyamanan perpindahan — bus tua tanpa AC dan pengemudi yang mengantuk adalah keluhan paling umum. Semua armada partner melalui pengecekan usia kendaraan dan rekam jejak pengemudi.",
    icon: "Bus",
  },
  {
    slug: "manasik-edukasi",
    name: "Manasik & Edukasi",
    tagline: "Berangkat sudah paham ilmunya, pulang membawa makna ibadahnya.",
    description:
      "Paket manasik umrah dan haji, kelas online, buku panduan, simulasi tawaf, hingga pelatihan sertifikasi mutawif. Jamaah yang mengikuti manasik secara utuh terbukti lebih tenang di lapangan karena tahu apa yang sedang dikerjakannya di setiap tahap. Materi disusun lintas madzhab dengan rujukan fikih yang jelas dan bahasa yang mudah dicerna.",
    icon: "GraduationCap",
  },
  {
    slug: "handling-logistik",
    name: "Handling & Logistik",
    tagline: "Dari pintu bandara Indonesia sampai koper kembali ke rumah.",
    description:
      "Handling bandara Jeddah dan Madinah, konsinyasi bagasi grup, pengiriman koper cargo, terminal khusus haji SIMONA dan MPU, hingga pendampingan bagasi tercicier. Handling buruk adalah sumber keluhan jamaah paling klasik: antre berjam-jam dan koper tercecer. Partner handling di sini bekerja dengan sistem antrean resmi dan pelaporan waktu yang transparan.",
    icon: "PackageCheck",
  },
  {
    slug: "makanan-konsumsi",
    name: "Makanan & Konsumsi",
    tagline: "Lidah tetap Indonesia, energi ibadah tetap terjaga.",
    description:
      "Catering masakan Indonesia untuk grup, voucher buffet hotel, paket lauk kupon, kurma Ajwa dan Safawi, air zamzam kemasan resmi, hingga menu khusus jamaah dengan batasan diet. Makanan adalah penentu stamina ibadah — menu yang salah membuat jamaah lemas di tengah padatnya jadwal. Semua mitra dapur memenuhi standar kebersihan dan bersertifikat keamanan pangan Saudi.",
    icon: "UtensilsCrossed",
  },
  {
    slug: "kesehatan-asuransi",
    name: "Kesehatan & Asuransi",
    tagline: "Proteksi yang membuat keluarga di rumah ikut tenang.",
    description:
      "Asuransi perjalanan umrah, medical assistance 24 jam di Saudi, pendamping medis untuk lansia, sewa kursi roda, trip kit obat-obatan, hingga layanan dialisis terjadwal. Biaya pengobatan di Arab Saudi bisa sangat mahal tanpa proteksi yang tepat. Pastikan setiap jamaah berangkat dengan perlindungan kesehatan yang cakupannya terbaca jelas.",
    icon: "HeartPulse",
  },
  {
    slug: "keuangan-syariah",
    name: "Keuangan Syariah",
    tagline: "Dana Anda ditahan pihak ketiga — baru dirilis sesuai progres ibadah.",
    description:
      "Escrow dana umrah, cicilan syariah tanpa riba, tabungan haji dan umrah, money changer Riyal, kartu prabayar multi-mata uang, hingga sedekah dan wakaf terverifikasi. Keuangan adalah sisi paling rawan dalam perjalanan ibadah — skema yang buruk berubah menjadi kasus travel mangkir. Skema AmanahEscrow memutus rantai gagal bayar dengan rilis dana bertahap 40/40/20.",
    icon: "Landmark",
  },
  {
    slug: "ziarah-tour",
    name: "Ziarah & Tour Tambahan",
    tagline: "Memperluas makna perjalanan — dari Madinah sampai Andalusia.",
    description:
      "Ziarah internal Makkah dan Madinah, umrah plus Turki, Dubai, Mesir, Yordania, hingga ziarah Al-Quds dan Spanyol. Program plus menambah biaya tetap banyak dipilih untuk memperkaya pengalaman sejarah Islam dalam satu perjalanan. Perhatikan bahwa destinasi tambahan umumnya butuh visa tersendiri — selalu cek apakah tiket segmen tambahan sudah termasuk harga.",
    icon: "MapPinned",
  },
  {
    slug: "komunikasi-gadget",
    name: "Komunikasi & Gadget",
    tagline: "Tetap terhubung dengan keluarga — dan tetap fokus pada ibadah.",
    description:
      "SIM card dan eSIM Saudi, router WiFi grup, headset whisper untuk mengikuti penjelasan mutawif, power bank, adapter, koper khusus jamaah, hingga GPS tracker anak dan lansia. Konektivitas bukan kemewahan lagi: keluarga di rumah butuh kabar, dan grup butuh koordinasi. Semua perangkat disesuaikan dengan aturan bea cukai Saudi sebagai pertimbangan utama.",
    icon: "Smartphone",
  },
  {
    slug: "keluarga-lansia",
    name: "Keluarga, Lansia & Aksesibilitas",
    tagline: "Semua usia dan kemampuan berhak merasakan Baitullah.",
    description:
      "Paket umrah keluarga, pendampingan lansia 24 jam, umrah difabel dengan bus lift kursi roda, kamar dekat lift, sewa stroller, hingga pendampingan jamaah tunanetra dan jamaah demensia. Ibadah bersama orang tua adalah momen yang tidak bisa ditunda terlalu lama — kuncinya persiapan aksesibilitas yang serius. Layanan di kategori ini dirancang bersama praktisi pendampingan jamaah berkebutuhan khusus.",
    icon: "Users",
  },
  {
    slug: "haji-khusus",
    name: "Layanan Khusus Haji",
    tagline: "Haji furoh, haji plus, dan fasilitas Mashaer yang lebih manusiawi.",
    description:
      "Paket haji furoh, haji khusus premium dengan hotel dekat Haram, kampoeng Mina premium, kendaraan Mashaer, katering Mina–Arafah, hingga pendampingan registrasi SISKOPATUH dan kuota PIHK. Haji khusus diselenggarakan PIHK pemegang kuota resmi Kemenag dengan harga jauh di atas haji reguler. Verifikasi izin PIHK adalah langkah pertama sebelum apa pun — selalu cek sebelum transfer.",
    icon: "Moon",
  },
  {
    slug: "digital-tools",
    name: "Alat Digital Jamaah",
    tagline: "Teknologi yang merapikan persiapan — dari Nusuk sampai checklist.",
    description:
      "Registrasi akun Nusuk, aktivasi smart card, itinerary digital grup, peta Masjidil Haram, live streaming ibadah untuk keluarga, hingga dasbor AmanahEscrow dan NurMatch AI. Sebagian besar masalah jamaah kini lahir dari ketidaktahuan mengoperasikan platform digital resmi. Kategori ini merangkum alat dan pendampingan teknisnya dalam satu tempat.",
    icon: "Laptop",
  },
];
