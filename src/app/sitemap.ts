/**
 * SITEMAP MEGA — agregasi seluruh URL terindeks Google.
 *
 * Sumber URL:
 *  - Halaman inti (/, /layanan, /paket, /direktori, dst)
 *  - 210 halaman layanan + 14 kategori layanan
 *  - 45 halaman kota keberangkatan
 *  - 27 paket + 4 artikel + 34 glosarium + 76 maskapai + 18 PPIU
 *  - Direktori nasional (DB): 3.966 profil perusahaan
 *
 * Total ± 4.500 URL — masih di bawah batas 50.000 URL/sitemap.
 */
import type { MetadataRoute } from "next";
import { PrismaClient } from "@prisma/client";
import { serviceList, serviceCategoryList } from "@/data/services";
import { cityList } from "@/data/cities";
import { packageList } from "@/data/packages";
import { articleList } from "@/data/articles";
import { glossaryList } from "@/data/glossary";
import { ppiuList } from "@/data/ppiu";
import { AIRLINES_ALL } from "@/lib/airlines";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://solusihajj.com").replace(/\/+$/, "");

/** slugify konsisten dengan kontrak /direktori/[slug] (slugify(name)--id). */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function entry(
  path: string,
  opts: { priority?: number; freq?: "daily" | "weekly" | "monthly" | "yearly"; lastmod?: Date } = {}
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: opts.lastmod ?? new Date(),
    changeFrequency: opts.freq ?? "weekly",
    priority: opts.priority ?? 0.7,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ---------- Halaman inti ----------
  const core: MetadataRoute.Sitemap = [
    entry("/", { priority: 1, freq: "daily" }),
    entry("/layanan", { priority: 0.95 }),
    entry("/paket", { priority: 0.95 }),
    entry("/direktori", { priority: 0.9 }),
    entry("/kota", { priority: 0.9 }),
    entry("/maskapai", { priority: 0.8 }),
    entry("/ppiu", { priority: 0.85 }),
    entry("/artikel", { priority: 0.85 }),
    entry("/glosarium", { priority: 0.8 }),
    entry("/faq", { priority: 0.7 }),
    entry("/kebijakan-privasi", { priority: 0.3, freq: "yearly" }),
    entry("/syarat-ketentuan", { priority: 0.3, freq: "yearly" }),
    // View utama SPA hash-route (tetap terindeks sebagai satu URL root kanonik)
    entry("/#/pusat-data", { priority: 0.7 }),
    entry("/#/verifikasi/cek-izin-ppiu", { priority: 0.7 }),
    entry("/#/kalkulator-haji", { priority: 0.7 }),
    entry("/#/nurmatch", { priority: 0.7 }),
    entry("/#/escrow-aktif", { priority: 0.7 }),
    entry("/#/bandingkan", { priority: 0.6 }),
    entry("/#/tiket-grup", { priority: 0.6 }),
    entry("/#/travel-kit", { priority: 0.6 }),
    entry("/#/partner", { priority: 0.6 }),
    entry("/#/kado-umrah", { priority: 0.6 }),
    entry("/#/cicilan-syariah", { priority: 0.6 }),
    entry("/#/benchmark", { priority: 0.5 }),
  ];

  // ---------- Layanan (210 halaman + 14 kategori) ----------
  const layanan: MetadataRoute.Sitemap = [
    ...serviceCategoryList.map((c) => entry(`/layanan/kategori/${c.slug}`, { priority: 0.8 })),
    ...serviceList.map((s) => entry(`/layanan/${s.slug}`, { priority: 0.75, freq: "monthly" })),
  ];

  // ---------- Kota (45) ----------
  const kota: MetadataRoute.Sitemap = cityList.map((c) =>
    entry(`/kota/${c.slug}`, { priority: 0.8, freq: "monthly" })
  );

  // ---------- Paket / Artikel / Glosarium / PPIU / Maskapai ----------
  const katalog: MetadataRoute.Sitemap = [
    ...packageList.map((p) => entry(`/paket/${p.slug}`, { priority: 0.85, freq: "weekly" })),
    ...articleList.map((a) =>
      entry(`/artikel/${a.slug}`, { priority: 0.75, freq: "monthly", lastmod: a.lastReviewed ? new Date(a.lastReviewed) : now })
    ),
    ...glossaryList.map((g) => entry(`/glosarium/${slugify(g.term)}`, { priority: 0.65, freq: "monthly" })),
    ...ppiuList.map((p) => entry(`/ppiu/${p.slug}`, { priority: 0.8 })),
    ...AIRLINES_ALL.map((a) => entry(`/maskapai/${slugify(a.name)}`, { priority: 0.65, freq: "monthly" })),
  ];

  // ---------- Direktori nasional dari DB (± 3.966 profil) ----------
  const direktori: MetadataRoute.Sitemap = [];
  try {
    const db = new PrismaClient();
    const companies = await db.company.findMany({
      select: { id: true, name: true, updatedAt: true },
      orderBy: { name: "asc" },
    });
    for (const c of companies) {
      direktori.push(entry(`/direktori/${slugify(c.name)}--${c.id}`, { priority: 0.55, freq: "monthly", lastmod: c.updatedAt }));
    }
    await db.$disconnect();
  } catch {
    // Bila DB tidak tersedia, sitemap tetap memuat URL non-DB.
  }

  return [...core, ...layanan, ...kota, ...katalog, ...direktori];
}
