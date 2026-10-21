/**
 * FASET KATALOG NASIONAL — Prioritas 5 (v2.1.0).
 *
 * Modul data sisi-server untuk katalog berfaset /katalog: setiap getter
 * menjalankan query Prisma kecilnya sendiri (groupBy + _count) tanpa cache
 * modul — halaman memakai ISR (revalidate 86400) sehingga data segar per
 * jendela revalidasi tanpa perlu invalidasi manual.
 *
 * Kontrak URL profil: /direktori/{slugifyDb(name)}--{id}
 */

import { type Prisma } from "@prisma/client";
import { db } from "@/lib/db";

/* ---------- Util slug & label ---------- */

/** Slugify kontrak DB: lowercase, semua non-alphanumeric → "-", trim dash. */
export function slugifyDb(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Label kota untuk tampilan: "Kota JAKARTA SELATAN" → "Kota Jakarta Selatan". */
export function cityLabel(raw: string): string {
  return raw
    .trim()
    .split(/\s+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

/* ---------- Meta jenis organisasi ---------- */

export interface TypeMeta {
  /** Nilai orgType persis seperti di DB. */
  orgType: string;
  /** Slug segmen URL, mis. "ppiu". */
  slug: string;
  /** Label singkat, mis. "PPIU". */
  label: string;
  /** Deskripsi bahasa Indonesia untuk intro halaman. */
  blurb: string;
}

export const TYPE_META: Record<string, TypeMeta> = {
  PPIU: {
    orgType: "PPIU",
    slug: "ppiu",
    label: "PPIU",
    blurb: "Penyelenggara Perjalanan Ibadah Umrah (izin Kemenag RI)",
  },
  PIHK: {
    orgType: "PIHK",
    slug: "pihk",
    label: "PIHK",
    blurb: "Penyelenggara Ibadah Haji Khusus (kuota resmi)",
  },
  UTO: {
    orgType: "UTO",
    slug: "uto",
    label: "UTO",
    blurb: "Umrah Travel Operator (Arab Saudi — Nusuk)",
  },
  USP: {
    orgType: "USP",
    slug: "usp",
    label: "USP",
    blurb: "Umrah Service Provider (Nusuk)",
  },
  BPW: {
    orgType: "BPW",
    slug: "bpw",
    label: "BPW",
    blurb: "Biro Perjalanan Wisata (lisensi negara masing-masing)",
  },
};

const TYPE_BY_SLUG = new Map<string, TypeMeta>(
  Object.values(TYPE_META).map((m) => [m.slug, m])
);

/** Cari meta jenis organisasi dari slug URL. */
export function typeBySlug(slug: string): TypeMeta | undefined {
  return TYPE_BY_SLUG.get(slug);
}

/* ---------- Getter faset ---------- */

export interface TypeCount {
  orgType: string;
  total: number;
}

/** Jumlah organisasi per jenis (orgType), urut total desc. */
export async function getTypeCounts(): Promise<TypeCount[]> {
  const rows = await db.company.groupBy({
    by: ["orgType"],
    _count: { _all: true },
    orderBy: { _count: { orgType: "desc" } },
  });
  return rows.map((r) => ({ orgType: r.orgType, total: r._count._all }));
}

export interface CityFacet {
  city: string;
  slug: string;
  province: string | null;
  total: number;
}

/** Faset kota (≥1 organisasi), urut total desc. Provinsi diambil dari
 *  kelompok kota×provinsi dengan jumlah terbesar. */
export async function getCityFacets(): Promise<CityFacet[]> {
  const rows = await db.company.groupBy({
    by: ["city", "province"],
    _count: { _all: true },
    where: { city: { not: null } },
  });
  const byCity = new Map<string, CityFacet>();
  for (const r of rows) {
    const city = r.city as string;
    const total = r._count._all;
    const prev = byCity.get(city);
    if (!prev) {
      byCity.set(city, { city, slug: slugifyDb(city), province: r.province, total });
    } else if (total > prev.total) {
      prev.province = r.province;
      prev.total = total;
    } else if (!prev.province && r.province) {
      prev.province = r.province;
    }
  }
  return [...byCity.values()].sort((a, b) => b.total - a.total);
}

export interface ProvinceFacet {
  province: string;
  slug: string;
  total: number;
}

/** Faset provinsi (≥1 organisasi), urut total desc. */
export async function getProvinceFacets(): Promise<ProvinceFacet[]> {
  const rows = await db.company.groupBy({
    by: ["province"],
    _count: { _all: true },
    where: { province: { not: null } },
  });
  return rows
    .map((r) => ({
      province: r.province as string,
      slug: slugifyDb(r.province as string),
      total: r._count._all,
    }))
    .sort((a, b) => b.total - a.total);
}

export interface CityTypeCombo {
  orgType: string;
  city: string;
  citySlug: string;
  total: number;
}

/** Kombinasi kota×jenis dengan ≥2 organisasi, urut total desc. */
export async function getCityTypeCombos(): Promise<CityTypeCombo[]> {
  const rows = await db.company.groupBy({
    by: ["city", "orgType"],
    _count: { _all: true },
    where: { city: { not: null } },
  });
  return rows
    .filter((r) => r._count._all >= 2)
    .map((r) => ({
      orgType: r.orgType,
      city: r.city as string,
      citySlug: slugifyDb(r.city as string),
      total: r._count._all,
    }))
    .sort((a, b) => b.total - a.total);
}

export interface ProvinceTypeCombo {
  orgType: string;
  province: string;
  provinceSlug: string;
  total: number;
}

/** Kombinasi provinsi×jenis dengan ≥2 organisasi, urut total desc. */
export async function getProvinceTypeCombos(): Promise<ProvinceTypeCombo[]> {
  const rows = await db.company.groupBy({
    by: ["province", "orgType"],
    _count: { _all: true },
    where: { province: { not: null } },
  });
  return rows
    .filter((r) => r._count._all >= 2)
    .map((r) => ({
      orgType: r.orgType,
      province: r.province as string,
      provinceSlug: slugifyDb(r.province as string),
      total: r._count._all,
    }))
    .sort((a, b) => b.total - a.total);
}

export interface FacetedCompany {
  id: string;
  name: string;
  orgType: string;
  status: string;
  city: string | null;
  province: string | null;
}

/** Daftar organisasi terfaset (urut nama asc) + total hitungan WHERE penuh. */
export async function getCompaniesFaceted(opts: {
  orgType?: string;
  city?: string;
  province?: string;
  take?: number;
}): Promise<{ total: number; items: FacetedCompany[] }> {
  const where: Prisma.CompanyWhereInput = {};
  if (opts.orgType) where.orgType = opts.orgType;
  if (opts.city) where.city = opts.city;
  if (opts.province) where.province = opts.province;

  const [total, rows] = await Promise.all([
    db.company.count({ where }),
    db.company.findMany({
      where,
      orderBy: { name: "asc" },
      take: opts.take ?? 120,
      select: {
        id: true,
        name: true,
        orgType: true,
        status: true,
        city: true,
        province: true,
      },
    }),
  ]);
  return { total, items: rows };
}
