/**
 * HELPER OG IMAGE TERPUSAT — Prioritas 2 God Mode.
 *
 * Satu sumber kebenaran untuk membangun URL kartu share dinamis (/api/og)
 * di seluruh halaman SEO: paket, ppiu, kota, layanan, matrix kota×layanan,
 * artikel, glosarium, maskapai, direktori, halaman indeks & legal.
 *
 * Selalu menghasilkan URL absolut (aman untuk sitemap & meta crawler).
 */
/** Base URL situs — sumber kebenaran tunggal (json-ld.tsx re-export konstanta ini). */
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://solusihajj.web.id").replace(
  /\/+$/,
  ""
);

export interface OgCardOptions {
  /** Judul utama kartu. */
  title: string;
  /** Kicker kecil uppercase di atas judul (mis. "Paket Umrah · 9 Hari"). */
  kicker?: string;
  /** Pill kanan-atas (mis. kode bandara "CGK"). */
  chip?: string;
  /** Pill harga emas (mis. "Mulai Rp 2.850.000"). */
  price?: string;
  /** Rating angka (mis. 4.8) — dirender ★ 4.8. */
  rating?: number | string;
  /** Jumlah review — dirender "· 96 review". */
  reviews?: number | string;
  /** Pill outline verifikasi (mis. "Terverifikasi 5 Lapis"). */
  badge?: string;
  /** Subjudul 1–2 baris di bawah judul. */
  sub?: string;
  /** Teks footer kiri kartu. */
  foot?: string;
  /** Alt text gambar (default: judul). */
  alt?: string;
}

/** Bangun URL absolut kartu OG dari opsi terstruktur. */
export function ogImageUrl(opts: OgCardOptions): string {
  const sp = new URLSearchParams();
  sp.set("t", opts.title.slice(0, 120));
  if (opts.kicker) sp.set("k", opts.kicker.slice(0, 56));
  if (opts.chip) sp.set("chip", opts.chip.slice(0, 40));
  if (opts.price) sp.set("price", opts.price.slice(0, 30));
  if (opts.rating !== undefined) sp.set("rating", String(opts.rating).slice(0, 4));
  if (opts.reviews !== undefined) sp.set("reviews", String(opts.reviews).slice(0, 7));
  if (opts.badge) sp.set("badge", opts.badge.slice(0, 36));
  if (opts.sub) sp.set("sub", opts.sub.slice(0, 110));
  if (opts.foot) sp.set("foot", opts.foot.slice(0, 70));
  return `${SITE}/api/og?${sp.toString()}`;
}

/** Objek `images[]` siap dipakai di openGraph / twitter metadata. */
export function ogImage(opts: OgCardOptions): {
  url: string;
  width: number;
  height: number;
  alt: string;
} {
  return {
    url: ogImageUrl(opts),
    width: 1200,
    height: 630,
    alt: opts.alt ?? opts.title,
  };
}
