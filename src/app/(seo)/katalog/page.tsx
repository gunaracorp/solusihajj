import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Landmark, MapPin } from "lucide-react";
import { db } from "@/lib/db";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading, MetaChip } from "@/components/seo/pkg-ui";
import { languageAlternates } from "@/lib/i18n-routes";
import {
  cityLabel,
  getCityFacets,
  getProvinceFacets,
  getTypeCounts,
  TYPE_META,
} from "@/lib/facets";

/* Indeks katalog berfaset — Prioritas 5 (v2.1.0).
   Pintu masuk semua faset: jenis organisasi, kota, dan provinsi. */

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const [types, cities, provinces] = await Promise.all([
    getTypeCounts(),
    getCityFacets(),
    getProvinceFacets(),
  ]);
  const total = types.reduce((s, t) => s + t.total, 0);
  const title = `Katalog Berfaset Penyelenggara Ibadah — ${total.toLocaleString("id-ID")} Organisasi per Tipe, Kota & Provinsi`;
  const description = `Jelajahi ${total.toLocaleString("id-ID")} organisasi penyelenggara ibadah (PPIU, PIHK, UTO, USP, BPW) dalam ${cities.length} kota dan ${provinces.length} provinsi — setiap faset punya halaman khusus berisi daftar penyelenggara terdata beserta status izinnya.`;
  return {
    title,
    description,
    alternates: { canonical: "/katalog", ...languageAlternates("/katalog") },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: "Katalog Berfaset Penyelenggara Ibadah",
          kicker: `${total.toLocaleString("id-ID")} Organisasi Terdata`,
          badge: "Data Resmi Kemenag & Nusuk",
          sub: "Telusuri per jenis organisasi, kota, dan provinsi — setiap faset satu halaman",
          foot: "PPIU · PIHK · UTO · USP · BPW",
        }),
      ],
    },
  };
}

export default async function KatalogIndexPage() {
  const [types, cities, provinces, verified] = await Promise.all([
    getTypeCounts(),
    getCityFacets(),
    getProvinceFacets(),
    db.company.count({ where: { verified: true } }),
  ]);

  const total = types.reduce((s, t) => s + t.total, 0);
  const topCities = cities.slice(0, 12);
  const typeFacetCount = types.filter((t) => TYPE_META[t.orgType]).length;

  const typeListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog penyelenggara ibadah per jenis organisasi",
    numberOfItems: types.length,
    itemListElement: types.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: TYPE_META[t.orgType] ? `Direktori ${TYPE_META[t.orgType].label}` : t.orgType,
      url: `${SITE}/katalog/${TYPE_META[t.orgType]?.slug ?? t.orgType.toLowerCase()}`,
    })),
  };

  const provinceListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog penyelenggara ibadah per provinsi",
    numberOfItems: provinces.length,
    itemListElement: provinces.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.province,
      url: `${SITE}/katalog/provinsi/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Katalog", url: "/katalog" },
          ]),
          typeListJsonLd,
          provinceListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
        ]}
        title={`Katalog Berfaset — ${total.toLocaleString("id-ID")} Organisasi Penyelenggara Ibadah`}
        lead="Satu basis data nasional, banyak cara menjelajah. Pilih faset berdasarkan jenis organisasi (PPIU, PIHK, UTO, USP, BPW), kota, atau provinsi — setiap kombinasi punya halaman khusus berisi daftar penyelenggara terdata yang tertaut ke profil lengkapnya."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Building2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {total.toLocaleString("id-ID")} organisasi terdata
          </MetaChip>
          <MetaChip icon={<MapPin className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {cities.length} kota
          </MetaChip>
          <MetaChip icon={<Landmark className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {provinces.length} provinsi
          </MetaChip>
          <MetaChip icon={<BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {verified.toLocaleString("id-ID")} terverifikasi
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-10 md:py-14">
        {/* Faset jenis organisasi */}
        <section aria-labelledby="faset-tipe">
          <SectionHeading
            id="faset-tipe"
            title="Jelajahi per Jenis Organisasi"
            desc={`Lima jenis penyelenggara ibadah dalam basis data — dari PPIU berizin Kemenag hingga UTO/USP terdaftar Nusuk Arab Saudi. ${typeFacetCount} jenis semuanya punya halaman direktori sendiri.`}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => {
              const meta = TYPE_META[t.orgType];
              const label = meta?.label ?? t.orgType;
              return (
                <li key={t.orgType}>
                  <Link
                    href={`/katalog/${meta?.slug ?? t.orgType.toLowerCase()}`}
                    className="group flex h-full flex-col rounded-2xl border border-line-warm bg-white p-4 transition-colors hover:border-brand"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand-deep">
                        {label}
                      </span>
                      <span className="text-xl font-extrabold text-brand-deep">
                        {t.total.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {meta?.blurb ?? "Jenis organisasi penyelenggara ibadah."}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Lihat direktori {label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Faset provinsi */}
        <section aria-labelledby="faset-provinsi">
          <SectionHeading
            id="faset-provinsi"
            title="Jelajahi per Provinsi"
            desc={`${provinces.length} provinsi dengan organisasi penyelenggara ibadah terdata — dari DKI Jakarta yang terpadat hingga provinsi dengan segelintir entri.`}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {provinces.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/katalog/provinsi/${p.slug}`}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-line-warm bg-white p-4 transition-colors hover:border-brand"
                >
                  <span className="text-sm font-semibold text-ink">{p.province}</span>
                  <span className="text-sm font-extrabold text-brand-deep">
                    {p.total.toLocaleString("id-ID")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Faset kota teratas */}
        <section aria-labelledby="faset-kota">
          <SectionHeading
            id="faset-kota"
            title="12 Kota Teratas"
            desc={`Kota dengan organisasi terdata terbanyak. Total ${cities.length} kota bisa dijelajahi lewat indeks kota per provinsi.`}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/katalog/kota/${c.slug}`}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-line-warm bg-white p-4 transition-colors hover:border-brand"
                >
                  <span className="text-sm font-semibold text-ink">{cityLabel(c.city)}</span>
                  <span className="text-sm font-extrabold text-brand-deep">
                    {c.total.toLocaleString("id-ID")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              href="/katalog/kota"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              Lihat semua {cities.length} kota
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* CTA silo */}
        <section aria-labelledby="katalog-cta" className="rounded-3xl bg-gold-soft p-6 md:p-8">
          <h2 id="katalog-cta" className="text-2xl font-extrabold tracking-tight text-brand-deep">
            Butuh pencarian yang lebih lengkap?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink">
            Katalog berfaset memuat daftar per jenis, kota, dan provinsi. Untuk pencarian bebas
            berdasarkan nama, nomor izin, atau status — gunakan Pusat Data Nasional. Tersedia juga
            versi bahasa Inggris untuk mitra internasional.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/direktori"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-deep"
            >
              Pencarian lengkap (Direktori)
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/en/catalog"
              hrefLang="en"
              className="inline-flex min-h-11 items-center rounded-xl border border-brand bg-white px-5 text-sm font-bold text-brand transition-colors hover:bg-brand-soft"
            >
              English catalog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
