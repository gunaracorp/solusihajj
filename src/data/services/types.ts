/**
 * Tipe data katalog layanan haji & umrah — modul services (Task 2-a).
 * Kontrak tipe publik untuk seluruh data di folder src/data/services/.
 * Nama properti adalah kontrak antar-agent — JANGAN diubah.
 */

export interface ServiceCategory {
  slug: string;
  name: string;
  tagline: string; // 1 kalimat pemasaran
  description: string; // 2-3 kalimat untuk halaman kategori (SEO)
  icon: string; // nama ikon lucide-react, mis. "FileCheck", "Plane", "BedDouble"
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string; // kebab-case, unik global
  name: string; // nama layanan tampilan
  categorySlug: string; // HARUS salah satu slug di serviceCategoryList
  shortDesc: string; // 120-160 karakter — dipakai meta description
  longDesc: string; // 2-3 paragraf, pisahkan dengan "\n\n" — konten utama halaman
  features: string[]; // 4-6 poin keunggulan / termasuk apa
  process: string[]; // 3-5 langkah cara order/prosesnya
  priceNote: string; // keterangan harga realistis
  priceFrom?: number; // opsional, rupiah
  faqs: ServiceFaq[]; // 2-3 FAQ relevan
  keywords: string[]; // 5-8 kata kunci SEO Indonesia
}
