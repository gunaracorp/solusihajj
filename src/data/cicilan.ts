/**
 * CICILAN SYARIAH — konfigurasi & konten halaman /cicilan-syariah.
 * Mekanisme mengikuti praktik pembiayaan umrah syariah di Indonesia
 * (murabahah / ijarah / qardh — tanpa bunga, denda sosial bukan pendapatan):
 * ALULAA (BTPN Syariah), sharE (Mega Syariah), BSI, Pegadaian Syariah,
 * Bank Muamalat — katalog mitra, tenor, DP, dan kalkulator transparan.
 */

export interface FinancingPartner {
  key: string;
  name: string;
  parent?: string;
  contract: "MURABAHAH" | "IJARAH" | "QARDH";
  tenorMax: number;
  dpMinPct: number;
  coverage: string;
  note: string;
}

/** Mitra pembiayaan syariah — institusi riil di Indonesia */
export const FINANCING_PARTNERS: FinancingPartner[] = [
  {
    key: "alulaa",
    name: "ALULAA",
    parent: "PT Alulaa Multi Finance (grup BTPN Syariah)",
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 0,
    coverage: "Umrah & Haji",
    note: "Paylater pembiayaan perjalanan ibadah: tanpa agunan, akad murabahah, tenor hingga 24 bulan. Khusus pelunasan ibadah, bukan konsumsi umum.",
  },
  {
    key: "share",
    name: "sharE Paylater",
    parent: "PT Mega Mitra Syariah (Mega Syariah)",
    contract: "MURABAHAH",
    tenorMax: 12,
    dpMinPct: 10,
    coverage: "Umrah",
    note: "Paylater syariah berbasis dana masyarakat (kolektif), akad wakalah bil wakalah & murabahah. Cocok untuk paket di bawah Rp 40 juta.",
  },
  {
    key: "bsi",
    name: "Bank Syariah Indonesia (BSI)",
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 10,
    coverage: "Umrah, Haji & Haji Furoh",
    note: "Pembiayaan perjalanan ibadah dengan jaminan sertifikat/deposito BSI atau KPR take-over. Limit besar, tenor panjang, bingkai akad lengkap.",
  },
  {
    key: "pegadaian-syariah",
    name: "Pegadaian Syariah",
    parent: "PT Pegadaian (BUMN)",
    contract: "IJARAH",
    tenorMax: 18,
    dpMinPct: 0,
    coverage: "Umrah",
    note: "Skema Gadai Emas Syariah & ujrah: simpan emas sebagai keamanan, biaya perawatan (ujrah) tetap. Populer untuk DP atau pelunasan penuh.",
  },
  {
    key: "muamalat",
    name: "Bank Muamalat",
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 15,
    coverage: "Umrah & Haji Khusus",
    note: "Pembiayaan umrah/haji khusus dengan akad murabahah untuk nasabah gaji/instansi. Proses via kantor cabang, disertai surat rekomendasi PPIU.",
  },
];

export const TENOR_OPTIONS = [3, 6, 9, 12, 18, 24];

export const CONTRACT_CARDS = [
  {
    key: "MURABAHAH",
    title: "Murabahah",
    arabic: "مرابحة",
    oneLiner: "Bank membeli paket, menjualnya kepada Anda dengan margin yang disepakati di awal.",
    points: [
      "Harga jual & angsuran dikunci sejak hari pertama — tidak naik meski tenor panjang",
      "Margin bukan bunga: ini keuntungan perdagangan yang halal & transparan",
      "Paling umum dipakai untuk pembiayaan paket umrah lengkap",
    ],
  },
  {
    key: "IJARAH",
    title: "Ijarah",
    arabic: "إجارة",
    oneLiner: "Sewa manfaat: Anda menyewa layanan (misal jasa perjalanan) dengan ujrah yang jelas.",
    points: [
      "Ujrah (biaya sewa) tetap selama masa sewa",
      "Bisa disertai hibah kepemilikan (ijarah muntahiyah bittamlik)",
      "Dipakai skema berbasis emas Pegadaian Syariah (gadai emas, ujrah perawatan)",
    ],
  },
  {
    key: "QARDH",
    title: "Qardh",
    arabic: "قرض",
    oneLiner: "Pinjaman kebajikan: hanya pokok yang wajib dikembalikan, tanpa tambahan apa pun.",
    points: [
      "Tanpa margin, tanpa bunga — murni ta'awun (saling menolong)",
      "Biasanya untuk pencairan cepat nominal kecil atau dana talangan haji",
      "Pengembalian sesuai jadwal; denda keterlambatan disalurkan ke infaq sosial",
    ],
  },
];

/** Yang TIDAK ada di cicilan syariah — pembeda vs KPR/kartu kredit konvensional */
export const FORBIDDEN_PRACTICES = [
  {
    title: "Bunga berbunga (kompounding)",
    text: "Sisa angsuran tidak pernah 'berbunga' atas sisa pokok. Angsuran bulan berikutnya dihitung dari harga akad yang sama, bukan dari saldo menurun yang diinjak bunga.",
  },
  {
    title: "Denda majemuk",
    text: "Telat bayar? Ada satu denda tetap flat per kejadian — bukan persentase yang bertambah setiap bulan. Dan seluruh dendanya disalurkan ke infaq sosial, bukan pendapatan pemberi pembiayaan.",
  },
  {
    title: "Penalti pelunasan cepat",
    text: "Rezeki datang tiba-tiba dan ingin lunas lebih awal? Bayar sisa pokoknya saja. Tidak ada penalti 'break fee' seperti kredit konvensional.",
  },
  {
    title: "Dana menginap di rekening travel",
    text: "Hasil akad pembelian paket tetap mengalir ke escrow pihak ketiga (skema 40/40/20) — bukan langsung ke rekening penyelenggara. Dua lapis proteksi: akad syariah + escrow.",
  },
];

export const CICILAN_FLOW = [
  {
    n: 1,
    title: "Simulasikan",
    text: "Gunakan kalkulator: pilih paket, DP, dan tenor. Angsuran per bulan langsung tampil dengan rincian margin yang transparan.",
  },
  {
    n: 2,
    title: "Ajukan",
    text: "Isi data pengajuan. Kami teruskan ke mitra pembiayaan pilihan Anda — terjadi dalam 1 menit, data dilindungi UU PDP 27/2022.",
  },
  {
    n: 3,
    title: "Dihubungi mitra",
    text: "Tim mitra menghubungi Anda (biasanya < 1 hari kerja) untuk kelengkapan dokumen: KTP, penghasilan, dan pilihan akad.",
  },
  {
    n: 4,
    title: "Akad murabahah",
    text: "Akad ditandatangani — harga jual & angsuran dikunci. Dana pembelian paket langsung mengalir ke escrow SolusiHajj.",
  },
  {
    n: 5,
    title: "Berangkat tenang",
    text: "Anda fokus beribadah; angsuran berjalan otomatis. Dana di escrow tetap rilis 40/40/20 mengikuti progres perjalanan.",
  },
];

export const CICILAN_FAQ: { q: string; a: string }[] = [
  {
    q: "Apakah cicilan syariah ini benar-benar tanpa bunga?",
    a: "Ya — tidak ada bunga (riba) sama sekali. Mekanismenya akad murabahah: pembiayaan membeli paket dari penyelenggara atas permintaan Anda, lalu menjualnya kembali kepada Anda dengan harga pokok + margin keuntungan yang disepakati di awal akad. Angsuran bulan berikutnya dihitung dari harga akad yang sama — bukan dari sisa pokok yang berbunga seperti kartu kredit atau KPR konvensional.",
  },
  {
    q: "Kalau telat bayar angsuran, apa yang terjadi?",
    a: "Ada satu denda tetap flat per kejadian keterlambatan — bukan persentase berbunga atau denda majemuk. Dan ini yang terpenting: 100% denda disalurkan ke program infaq sosial sesuai fatwa DSN-MUI, tidak menjadi pendapatan pembiayaan. Denda adalah pengekang, bukan sumber untung.",
  },
  {
    q: "Berapa minimal DP dan tenor terpanjang?",
    a: "Tergantung mitra: ALULAA mulai 0% DP hingga 24 bulan; sharE mulai 10% DP hingga 12 bulan; BSI & Muamalat umumnya 10–15% DP hingga 24 bulan dengan jaminan. Gunakan kalkulator di halaman ini — setiap opsi menampilkan angsuran eksak sebelum Anda mengajukan, tanpa biaya tersembunyi.",
  },
  {
    q: "Apakah bisa mengajukan tanpa slip gaji (wirausaha/IBU rumah tangga)?",
    a: "Bisa. Mitra menerima alternatif: laporan usaha/mutasi rekening 3 bulan, surat keterangan usaha, jaminan sertifikat/deposito (BSI/Muamalat), atau skema gadai emas syariah (Pegadaian) yang tidak menuntut penghasilan tetap. Petunjuk lengkap diberikan saat tim mitra menghubungi Anda.",
  },
  {
    q: "Dana cicilan langsung masuk ke travel?",
    a: "Tidak. Inilah pembeda dua lapis SolusiHajj: setelah akad cair, dana pembelian paket masuk rekening escrow pihak ketiga (bukan rekening penyelenggara). Dana baru dialihkan bertahap 40/40/20 — setelah visa & tiket terbit, setelah jamaah tiba di Tanah Suci, dan setelah program selesai tanpa sengketa. Akad syariah + escrow = proteksi maksimal.",
  },
  {
    q: "Apakah umrah yang dibayar cicilan tetap sah menurut syariah?",
    a: "Sah. Para ulama menetapkan boleh berumrah dengan utang selama (1) yakin mampu mengangsur tanpa kesulitan, (2) tidak menunda utang yang sudah jatuh tempo, dan (3) utangnya sendiri tidak berbunga. Cicilan murabahah tanpa bunga memenuhi semua itu — yang dilarang adalah berutang dengan bunga atau berangkat dengan utang yang jelas tidak mampu dibayar.",
  },
  {
    q: "Apa perbedaan murabahah, ijarah, dan qardh di halaman ini?",
    a: "Murabahah: pembiayaan membeli-kan paket lalu menjualnya kepada Anda dengan margin tetap (paling umum). Ijarah: sewa manfaat/layanan dengan ujrah tetap — dipakai skema emas Pegadaian Syariah. Qardh: pinjaman kebajikan tanpa tambahan — untuk talangan kecil. Ketiganya bebas riba; pilih sesuai situasi yang ditawarkan mitra.",
  },
  {
    q: "Data pribadi saya diamanahkan?",
    a: "Ya. Pengajuan hanya diteruskan ke SATU mitra yang Anda pilih — bukan disebar ke banyak institusi. Data disimpan terenkripsi (AES) sesuai UU PDP 27/2022, dipakai hanya untuk proses pembiayaan ini, dan bisa diminta dihapus kapan pun melalui syarikat.haji@gmail.com.",
  },
];

/* ---------- Kalkulator ---------- */

export interface InstallmentResult {
  financed: number; // pokok yang dibiayakan (harga - DP)
  monthly: number; // angsuran per bulan (pembulatan ke bawah)
  lastMonth: number; // angsuran terakhir (penyeimbang pembulatan)
  totalPaid: number; // DP + seluruh angsuran = harga akad
}

/**
 * Kalkulator cicilan murabahah 0% markup display:
 * platform demo menampilkan pembagian bersih (margin murabahah dianggap
 * sudah di dalam harga partner — dicatat di kebijakan halaman).
 */
export function calcInstallment(price: number, downPayment: number, tenorMonths: number): InstallmentResult {
  const financed = Math.max(price - downPayment, 0);
  if (financed === 0 || tenorMonths <= 0) {
    return { financed, monthly: 0, lastMonth: 0, totalPaid: downPayment };
  }
  const monthly = Math.floor(financed / tenorMonths);
  const remainder = financed - monthly * tenorMonths;
  const lastMonth = monthly + remainder;
  const totalPaid = downPayment + monthly * (tenorMonths - 1) + lastMonth;
  return { financed, monthly, lastMonth, totalPaid };
}
