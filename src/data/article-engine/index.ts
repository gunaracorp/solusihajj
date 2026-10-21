import type { Article } from "@/data/types";
import { batch1 } from "./batch-1";
import { batch2 } from "./batch-2";
import { batch3 } from "./batch-3";
import { batch4 } from "./batch-4";
import { batch5 } from "./batch-5";
import { batch6 } from "./batch-6";

/**
 * Article Content Engine (Prioritas 4) — 108 artikel SEO dari 6 batch:
 * 4-a Panduan Umrah · 4-b Manasik & Doa · 4-c Visa & Dokumen (+Keamanan)
 * 4-d Hotel & Transportasi · 4-e Biaya & Keuangan · 4-f Keluarga & Lansia (+Musim)
 * Semua artikel lolos validasi: slug unik, related resolvable, fakta konsisten
 * (harga wajar 2026, PMA 21/2020, Nusuk, escrow 40/40/20).
 */
export const engineArticles: Article[] = [
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
];

/** "Keluarga & Lansia" → "keluarga-lansia" (slug rute /artikel/kategori/…) */
export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFKD")
    .replace(/&/g, " dan ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Daftar kategori unik sesuai urutan kemunculan, dengan jumlah artikel. */
export function articleCategories(articles: Article[]): { name: string; slug: string; count: number }[] {
  const seen = new Map<string, { name: string; slug: string; count: number }>();
  for (const a of articles) {
    const slug = categorySlug(a.category);
    const cur = seen.get(slug);
    if (cur) cur.count += 1;
    else seen.set(slug, { name: a.category, slug, count: 1 });
  }
  return [...seen.values()];
}
