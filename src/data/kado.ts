/**
 * KADO UMRAH (Gift Umrah) — konfigurasi & konten halaman /kado-umrah.
 * Mekanisme mengikuti praktik industri voucher umrah Indonesia:
 * voucher nominal / paket spesifik + kartu kado digital + kode pelacakan
 * + dana disimpan escrow pihak ketiga sampai penerima mengklaim.
 */

export interface GiftOccasion {
  key: string;
  label: string;
  emoji: string;
  tagline: string;
}

export const GIFT_OCCASIONS: GiftOccasion[] = [
  {
    key: "orangtua",
    label: "Kado untuk Orang Tua",
    emoji: "🤲",
    tagline: "Kembalikan bakti: kirami Ayah/Ibu berangkat umrah — kado yang tidak tergantikan.",
  },
  {
    key: "pernikahan",
    label: "Hadiah Pernikahan",
    emoji: "💍",
    tagline: "Hantaran paling berkah: mulai perjalanan baru berdua di Tanah Suci.",
  },
  {
    key: "kelahiran",
    label: "Aqiqah & Kelahiran",
    emoji: "🍼",
    tagline: "Rayakan kelahiran dengan doa di depan Ka'bah.",
  },
  {
    key: "pensiun",
    label: "Penghormatan Pensiun",
    emoji: "🏅",
    tagline: "Appreciation terbaik untuk kolega/karyawan yang pulang dari perjalanan panjang bekerja.",
  },
  {
    key: "wisuda",
    label: "Kado Kelulusan",
    emoji: "🎓",
    tagline: "Wisuda haji/umrah sahabat atau anak — hadiah yang mengubah hidup.",
  },
  {
    key: "ramadhan",
    label: "Ramadhan & Idul Fitri",
    emoji: "🌙",
    tagline: "Umrah Ramadhan = pahala umrah besar. Momen paling dicari setiap tahun.",
  },
  {
    key: "umum",
    label: "Sekadar Sayang",
    emoji: "💚",
    tagline: "Tidak butuh alasan — kabar baik memang layak dirayakan dengan umrah.",
  },
];

export const GIFT_DENOMINATIONS = [5_000_000, 10_000_000, 15_000_000, 25_000_000];

export const GIFT_RELATIONS = ["Ibu", "Ayah", "Pasangan", "Anak", "Saudara", "Sahabat", "Karyawan", "Lainnya"];

/** Status kado → label + warna timeline pelacakan */
export const GIFT_STATUS_META: Record<string, { label: string; desc: string; color: string; bg: string; step: number }> = {
  MENUNGGU_PEMBAYARAN: {
    label: "Menunggu Pembayaran",
    desc: "Pesanan kado dibuat. Selesaikan pembayaran (transfer VA escrow syariah) agar kartu kado aktif.",
    color: "#8A6D14",
    bg: "#F5EEDA",
    step: 1,
  },
  DIBAYAR: {
    label: "Dana Ditahan Escrow",
    desc: "Dana diterima dan disimpan rekening penampungan syariah — BUKAN rekening travel. Kartu kado siap dikirim.",
    color: "#0E6B4E",
    bg: "#E7F2EE",
    step: 2,
  },
  TERKIRIM: {
    label: "Kartu Kado Terkirim",
    desc: "Kartu kado digital sudah terkirim ke penerima via WhatsApp. Penerima bisa mengklaim kapan saja.",
    color: "#0E6B4E",
    bg: "#E7F2EE",
    step: 3,
  },
  DIKLAIM: {
    label: "Diklaim — Pilih Paket",
    desc: "Penerima telah mengklaim voucher dan memilih paket keberangkatan bersama tim SolusiHajj.",
    color: "#0E6B4E",
    bg: "#E7F2EE",
    step: 4,
  },
  DIBERANGKATKAN: {
    label: "Telah Diberangkatkan",
    desc: "Alhamdulillah — penerima kado telah berangkat umrah. Doa terbaik dari kami.",
    color: "#17181D",
    bg: "#EAECEF",
    step: 5,
  },
  DIBATALKAN: {
    label: "Dibatalkan",
    desc: "Pesanan dibatalkan sebelum pembayaran.",
    color: "#7F1D1D",
    bg: "#FDECEC",
    step: 0,
  },
  DANA_KEMBALI: {
    label: "Dana Kembali 100%",
    desc: "Voucher tidak diklaim sampai masa aktif habis — dana dikembalikan penuh ke pengirim, tanpa potongan. (Kepatuhan UU PDP & ketentuan hibah.)",
    color: "#7F1D1D",
    bg: "#FDECEC",
    step: 0,
  },
};

export const KADO_STEPS = [
  {
    n: 1,
    title: "Rancang kadonya",
    text: "Pilih voucher nominal (mulai Rp 5 juta) atau paket spesifik dari katalog. Tulis pesan personal untuk penerima.",
  },
  {
    n: 2,
    title: "Bayar aman via escrow",
    text: "Dana masuk rekening penampungan bank syariah pihak ketiga — bukan rekening travel. Bisa lunas atau dicicil syariah tanpa bunga.",
  },
  {
    n: 3,
    title: "Kartu kado terkirim",
    text: "Kartu digital eksklusif dikirim via WhatsApp/email penerima: desain emas-zamrud, pesan Anda, dan kode pelacakan unik.",
  },
  {
    n: 4,
    title: "Penerima memilih momennya",
    text: "Penerima mengklaim kode, berbincang dengan tim kurasi, lalu memilih paket & tanggal yang cocok. Masa aktif voucher 24 bulan.",
  },
];

export const KADO_FAQ: { q: string; a: string }[] = [
  {
    q: "Apa bedanya Kado Umrah dengan langsung bayar paket untuk orang tua?",
    a: "Kado Umrah memberi keleluasaan. Penerima tidak terikat tanggal yang Anda tentukan: dia bisa memilih paket, hotel, dan musim keberangkatan sendiri melalui tim kurasi kami — sementara dana tetap aman di escrow pihak ketiga sejak hari pertama. Cocok ketika Anda ingin memberi 'hak berangkat umrah' tanpa memaksakan jadwal.",
  },
  {
    q: "Bagaimana dana kado dijaga agar tidak hilang?",
    a: "Prinsipnya sama dengan seluruh transaksi SolusiHajj: dana disimpan di rekening penampungan bank syariah pihak ketiga (AmanahEscrow), bukan rekening penyelenggara. Dana baru dialihkan ke penyelenggara bertahap (skema 40/40/20) setelah visa & tiket terbit, jamaah tiba di Tanah Suci, dan program selesai tanpa sengketa.",
  },
  {
    q: "Kalau penerima belum bisa berangkat atau berubah pikiran, apakah dana hangus?",
    a: "Tidak. Masa aktif voucher 24 bulan dan dapat diperpanjang satu kali. Bila voucher tidak diklaim hingga masa aktif berakhir, 100% dana dikembalikan ke pengirim tanpa potongan — sesuai ketentuan hibah dan aturan OJK tentang dana nasabah.",
  },
  {
    q: "Bisakah beberapa orang menggabungkan dana untuk satu kado (misal saudara sepakat umrahi Ibu bersama)?",
    a: "Bisa. Buat kado dengan nominal target (misal Rp 35 juta), lalu setiap saudara menyetor bagiannya dengan kode pesanan yang sama. Sistem mencatat setiap setoran di timeline pelacakan sehingga semua penyumbang melihat progresnya — transparan seperti dana masjid.",
  },
  {
    q: "Bisakah kado dibayar cicilan?",
    a: "Ya — pilih 'Cicilan Syariah' di halaman kado. Kami arahkan ke mitra pembiayaan syariah (murabahah, tanpa bunga, tanpa denda majemuk) yang sama dengan halaman Cicilan Syariah. Setelah akad cair, dana langsung masuk escrow dan kartu kado aktif.",
  },
  {
    q: "Apakah cocok untuk kado korporat (perusahaan ke karyawan)?",
    a: "Sangat cocok. Banyak perusahaan memilih voucher umrah sebagai bonus pensiun, insentif kinerja, atau doorprize syariah event. Kami sediakan faktur perusahaan (non-PPN sesuai ketentuan penyelenggara ibadah), invoice pembayaran bertahap, dan kode multi-penerima untuk undian besar.",
  },
  {
    q: "Bagaimana penerima mengklaim kartu kado?",
    a: "Penerima cukup membalas WhatsApp pengiriman kartu, atau membuka halaman Lacak Kado dan memasukkan kode kado. Tim kurasi SolusiHajj akan menghubungi untuk memandu pemilihan paket dari katalog penyelenggara terverifikasi — semua izin bisa dicek publik di tool Cek Izin PPIU.",
  },
  {
    q: "Apakah Kado Umrah sesuai syariah?",
    a: "Ya. Kado adalah hibah (tuhfah) — diberikan dengan sukarela tanpa mengharapkan imbalan transaksi. Tidak ada unsur riba, gharar, atau maysir: harga voucher tidak berubah, dana tidak diinvestasikan untuk spekulasi, dan setiap rupiah tercatat di audit trail yang dapat dilihat pengirim dan penerima.",
  },
];
