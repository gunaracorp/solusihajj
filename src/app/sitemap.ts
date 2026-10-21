/**
 * SITEMAP MEGA — agregasi seluruh URL terindeks Google.
 *
 * Sumber URL:
 *  - Halaman inti (/, /layanan, /paket, /direktori, dst)
 *  - 210 halaman layanan + 14 kategori layanan
 *  - 45 halaman kota keberangkatan
 *  - MATRIX programmatic SEO: 210 layanan × 45 kota = 9.450 halaman
 *    "/layanan/[slug]/dari-[kota]" (Prioritas 1 — God Mode Tier Max)
 *  - 27 paket + 4 artikel + 34 glosarium + 76 maskapai + 18 PPIU
 *  - Direktori nasional (DB): 3.966 profil perusahaan
 *
 * Total ± 14.000 URL — masih di bawah batas 50.000 URL/sitemap.
 */
import type { MetadataRoute } from "next";
import { PrismaClient } from "@prisma/client";
import { serviceList, serviceCategoryList } from "@/data/services";
import { cityList } from "@/data/cities";
import { packageList } from "@/data/packages";
import { articleList } from "@/data/articles";
import { glossaryList } from "@/data/glossary";
import { ppiuList, orgOf } from "@/data/ppiu";
import { ORG_META } from "@/data/types";
import { AIRLINES_ALL } from "@/lib/airlines";
import { ogImageUrl } from "@/lib/og";
import { formatRupiah } from "@/components/seo/pkg-ui";

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
  opts: {
    priority?: number;
    freq?: "daily" | "weekly" | "monthly" | "yearly";
    lastmod?: Date;
    images?: string[];
  } = {}
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: opts.lastmod ?? new Date(),
    changeFrequency: opts.freq ?? "weekly",
    priority: opts.priority ?? 0.7,
    ...(opts.images?.length ? { images: opts.images } : {}),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ---------- Halaman inti ----------
  const core: MetadataRoute.Sitemap = [
    entry("/", {
      priority: 1,
      freq: "daily",
      images: [
        ogImageUrl({
          title: "Marketplace Umrah & Haji Terbesar Asia",
          kicker: "SolusiHajj · Amanah Anda, Aman",
          badge: "Escrow Syariah 40/40/20",
          sub: "27+ paket · 200+ layanan · 3.966 organisasi terdata — review dari jamaah nyata",
          foot: "PPIU · PIHK · BPW · KBIHU di 5 negara",
        }),
      ],
    }),
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
    ...serviceList.map((s) => {
      const catName = serviceCategoryList.find((c) => c.slug === s.categorySlug)?.name;
      const og = ogImageUrl({
        title: s.name,
        ...(catName ? { chip: catName } : {}),
        badge: "Terverifikasi 5 Lapis",
        ...(typeof s.priceFrom === "number" && s.priceFrom > 0
          ? { price: `Mulai ${formatRupiah(s.priceFrom)}` }
          : {}),
      });
      return entry(`/layanan/${s.slug}`, { priority: 0.75, freq: "monthly", images: [og] });
    }),
  ];

  // ---------- Kota (45) ----------
  const kota: MetadataRoute.Sitemap = cityList.map((c) =>
    entry(`/kota/${c.slug}`, {
      priority: 0.8,
      freq: "monthly",
      images: [
        ogImageUrl({
          title: `Umrah dari ${c.name}`,
          kicker: "Kota Keberangkatan",
          chip: c.airportCode,
          ...(c.directCharter ? { badge: "Charter Langsung Tersedia" } : {}),
          sub: `Bandara ${c.airport} · ± ${c.flightTimeHours} jam ke Tanah Suci`,
          foot: `${c.province} · Indonesia`,
        }),
      ],
    })
  );

  // ---------- Matrix layanan × kota (210 × 45 = 9.450 halaman) ----------
  const matrix: MetadataRoute.Sitemap = [];
  for (const s of serviceList) {
    for (const c of cityList) {
      const og = ogImageUrl({
        title: `${s.name} dari ${c.name}`,
        chip: `Dari ${c.name}`,
        foot: `${c.airportCode} · Minta penawaran gratis`,
        badge: "Terverifikasi 5 Lapis",
        ...(typeof s.priceFrom === "number" && s.priceFrom > 0
          ? { price: `Mulai ${formatRupiah(s.priceFrom)}` }
          : {}),
      });
      matrix.push(
        entry(`/layanan/${s.slug}/dari-${c.slug}`, { priority: 0.7, freq: "monthly", images: [og] })
      );
    }
  }

  // ---------- Paket / Artikel / Glosarium / PPIU / Maskapai ----------
  const katalog: MetadataRoute.Sitemap = [
    ...packageList.map((p) =>
      entry(`/paket/${p.slug}`, {
        priority: 0.85,
        freq: "weekly",
        images: [
          ogImageUrl({
            title: p.title,
            kicker: `Paket Umrah · ${p.durationDays} Hari`,
            price: `Mulai ${formatRupiah(p.basePrice)}`,
            rating: p.rating,
            reviews: p.reviewCount,
            badge: "Terverifikasi 5 Lapis",
            sub: `Hotel ${p.hotelMakkah.name} · ${p.hotelMakkah.distanceToHaram} m ke Haram · dari ${p.departCity}`,
            foot: "Review Saksi Jamaah terverifikasi",
          }),
        ],
      })
    ),
    ...articleList.map((a) =>
      entry(`/artikel/${a.slug}`, {
        priority: 0.75,
        freq: "monthly",
        lastmod: a.lastReviewed ? new Date(a.lastReviewed) : now,
        images: [
          ogImageUrl({
            title: a.title,
            kicker: "Artikel & Panduan Umrah",
            sub: a.excerpt,
            foot: `${a.author} · ${a.publishedAt}`,
          }),
        ],
      })
    ),
    ...glossaryList.map((g) =>
      entry(`/glosarium/${slugify(g.term)}`, {
        priority: 0.65,
        freq: "monthly",
        images: [
          ogImageUrl({
            title: `Apa Itu ${g.term}? Arti & Penjelasan Lengkap`,
            kicker: "Glosarium Haji & Umrah",
            sub: g.short,
            foot: "Kamus istilah ibadah A–Z",
          }),
        ],
      })
    ),
    ...ppiuList.map((p) =>
      entry(`/ppiu/${p.slug}`, {
        priority: 0.8,
        images: [
          ogImageUrl({
            title: p.name,
            kicker: `${ORG_META[orgOf(p)].label} · Tier ${p.tier}`,
            rating: p.rating,
            reviews: p.reviewCount,
            badge: "Terverifikasi 5 Lapis",
            sub: `${p.city} · ${p.jamaahSent.toLocaleString("id-ID")} jamaah terlayani`,
            foot: "Verifikasi 5 Lapis · Izin resmi terdata",
          }),
        ],
      })
    ),
    ...AIRLINES_ALL.map((a) =>
      entry(`/maskapai/${slugify(a.name)}`, {
        priority: 0.65,
        freq: "monthly",
        images: [
          ogImageUrl({
            title: a.name,
            kicker: "Maskapai Penerbangan Jamaah",
            chip: a.code,
            sub: "Rute riil ke Jeddah & Madinah · jadwal charter grup",
            foot: "Database nasional rute penerbangan",
          }),
        ],
      })
    ),
  ];

  // ---------- Direktori nasional dari DB (± 3.966 profil) ----------
  const direktori: MetadataRoute.Sitemap = [];
  try {
    const db = new PrismaClient();
    const companies = await db.company.findMany({
      select: {
        id: true,
        name: true,
        orgType: true,
        status: true,
        city: true,
        province: true,
        country: true,
        updatedAt: true,
      },
      orderBy: { name: "asc" },
    });
    for (const c of companies) {
      const lokasi = [c.city, c.province].filter(Boolean).join(", ");
      const og = ogImageUrl({
        title: c.name,
        kicker: `Profil ${c.orgType}`,
        ...(c.status === "AKTIF" ? { badge: "Status Aktif" } : {}),
        ...(lokasi ? { sub: `Lokasi: ${lokasi}` } : {}),
      });
      direktori.push(
        entry(`/direktori/${slugify(c.name)}--${c.id}`, {
          priority: 0.55,
          freq: "monthly",
          lastmod: c.updatedAt,
          images: [og],
        })
      );
    }
    await db.$disconnect();
  } catch {
    // Bila DB tidak tersedia, sitemap tetap memuat URL non-DB.
  }

  return [...core, ...layanan, ...kota, ...matrix, ...katalog, ...direktori];
}
