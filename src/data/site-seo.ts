/**
 * SEO ENGINE R1.5 — peta judul & meta description per view + builder JSON-LD.
 * Karena R1 dirender sebagai SPA hash-route, title/description di-update
 * secara dinamis oleh useSeo() (dipanggil di app.tsx). Untuk static export
 * (shared hosting), tiap view dipetakan 1:1 ke route dengan metadata server
 * yang identik — struktur sitemap dok 06 tidak berubah.
 */

export interface SeoEntry {
  title: string;
  description: string;
}

export const SEO_MAP: Record<string, SeoEntry> = {
  "/": {
    title: "SolusiHajj — Marketplace Umrah & Haji Terbesar Asia | Amanah Anda, Aman.",
    description:
      "Bandingkan 30+ paket umrah, tiket charter grup, land arrangement, dan 18 penyelenggara Asia (PPIU, PIHK, BPW, KBIHU) dalam satu gerbang. Dana dilindungi escrow, review dari jamaah nyata, izin bisa dicek publik. Amanah Anda, Aman.",
  },
  "/paket": {
    title: "Katalog Paket Umrah & Land Arrangement Terverifikasi — SolusiHajj",
    description:
      "30+ paket umrah lengkap & land arrangement dari PPIU/PIHK berizin. Harga all-in tanpa asterisk, hotel dengan jarak meter nyata, kuota kursi real-time. Filter kota, budget, dan bulan keberangkatan.",
  },
  "/tiket-grup": {
    title: "Jadwal Penerbangan Charter Grup Umrah — Harga Grosir 10+ Kursi",
    description:
      "10 jadwal penerbangan kelompok ke Jeddah & Madinah dari Jakarta, Surabaya, Medan, Makassar, KL, Singapura, Brunei, dan Bangkok. Harga grosir per kursi, minimum 10 orang, bagasi 40-46 kg.",
  },
  "/bandingkan": {
    title: "Bandingkan Paket Umrah Side-by-Side — SolusiHajj Compare",
    description:
      "Bandingkan hingga 3 paket umrah sekaligus: harga, durasi, hotel, jarak ke Haram, maskapai, tier verifikasi, dan rating Saksi Jamaah dalam satu tabel transparan.",
  },
  "/ppiu": {
    title: "Direktori Penyelenggara Umrah & Haji Asia — PPIU, PIHK, BPW, KBIHU",
    description:
      "18 penyelenggara terverifikasi dari Indonesia, Malaysia, Singapura, Brunei, dan Thailand. Setiap entitas lolos Verifikasi 5 Lapis: izin aktif, audit kantor, legalitas, track record, pemantauan.",
  },
  "/nurmatch": {
    title: "NurMatch AI — Temukan Paket Umrah yang Cocok dalam 1 Menit",
    description:
      "Jawab 5 pertanyaan, NurMatch AI mencocokkan profil ibadah & budget Anda dengan seluruh katalog dan mengusulkan 3 paket terbaik beserta alasan kecocokannya. Transparan, bukan kotak hitam.",
  },
  "/travel-kit": {
    title: "Travel Kit Jamaah — Jadwal Sholat, Arah Kiblat, Konverter & Checklist",
    description:
      "Panduan perjalanan praktis: jadwal sholat Makkah-Madinah, sudut kiblat per kota Indonesia & Asia, konverter IDR-SAR-USD, checklist manasik interaktif, dan countdown musim ibadah.",
  },
  "/glosarium": {
    title: "Glosarium Istilah Haji & Umrah Lengkap A-Z — SolusiHajj",
    description:
      "32 istilah penting seputar umrah dan haji dijelaskan bahasa manusia: ihram, tawaf, miqat, muthawif, PIHK, PPIU, Nusuk, escrow, dan banyak lagi. Rujukan edukasi gratis dari SolusiHajj.",
  },
  "/partner": {
    title: "Untuk Penyelenggara — Tayangkan Paket Anda di SolusiHajj",
    description:
      "PPIU, PIHK, BPW, dan KBIHU: bergabung sebagai partner marketplace umrah terbesar Asia. Gratis tayang, bayar hanya saat transaksi sukses (komisi 4-6%), plus dashboard escrow & review.",
  },
  "/peta-situs": {
    title: "Peta Situs — Semua Halaman SolusiHajj",
    description:
      "Nabigasi lengkap seluruh halaman marketplace SolusiHajj: katalog, penerbangan grup, direktori penyelenggara, tools, edukasi, dan halaman legal.",
  },
  "/verifikasi": {
    title: "Verifikasi 5 Lapis — Standar Kepercayaan SolusiHajj",
    description:
      "Lima lapis verifikasi yang wajib dilalui setiap penyelenggara: izin resmi, audit kantor fisik, legalitas badan usaha, track record jamaah, dan pemantauan berkala. Bisa turun bila performa menurun.",
  },
  "/escrow": {
    title: "AmanahEscrow — Dana Anda Ditahan hingga Anda Berangkat",
    description:
      "Dana paket disimpan di rekening penampungan bank syariah — bukan rekening travel. Rilis bertahap 40/40/20 mengikuti progres ibadah Anda. Simulasikan alurnya langsung di halaman ini.",
  },
  "/kalkulator-haji": {
    title: "Kalkulator Simpanan Haji — Hitung Setoran Bulanan Anda",
    description:
      "Hitung berapa yang harus disisihkan per bulan untuk berangkat haji/umrah, lengkap dengan proyeksi inflasi biaya dan rekomendasi setoran. Kirim hasilnya ke WhatsApp Anda.",
  },
};

/** Fallback untuk view tanpa entri (detail paket/toko/artikel dibangun dinamis) */
export function seoFor(path: string): SeoEntry {
  return SEO_MAP[path] ?? {
    title: "SolusiHajj — Amanah Anda, Aman.",
    description:
      "Marketplace umrah & haji: paket dari penyelenggara terverifikasi, dana dilindungi escrow, review dari jamaah nyata.",
  };
}

/** Judul dinamis untuk detail paket / toko / artikel */
export function seoDetail(kind: string, name: string, extra?: string): SeoEntry {
  const kindLabel: Record<string, string> = {
    paket: "Paket Umrah",
    ppiu: "Profil Penyelenggara",
    artikel: "Artikel",
  };
  return {
    title: `${kindLabel[kind] ?? kind}: ${name} — SolusiHajj`,
    description: extra ?? `Lihat detail ${name} di SolusiHajj — harga transparan, penyelenggara terverifikasi 5 lapis, dana dilindungi escrow.`,
  };
}
