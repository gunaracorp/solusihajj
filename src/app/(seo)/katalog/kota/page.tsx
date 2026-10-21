import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero } from "@/components/seo/pkg-ui";
import { cityLabel, getCityFacets, getProvinceFacets, type CityFacet } from "@/lib/facets";

/* Indeks faset kota — 335 kota dikelompokkan per provinsi. */

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const [cities, provinces] = await Promise.all([getCityFacets(), getProvinceFacets()]);
  const title = `Katalog Organisasi Ibadah per Kota — ${cities.length} Kota di ${provinces.length} Provinsi`;
  const description = `Indeks ${cities.length} kota dengan organisasi penyelenggara ibadah terdata (PPIU, PIHK, UTO, USP, BPW), dikelompokkan per ${provinces.length} provinsi. Pilih kota untuk melihat daftar penyelenggara beserta status izinnya.`;
  return {
    title,
    description,
    alternates: { canonical: "/katalog/kota" },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/kota`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: "Katalog Organisasi Ibadah per Kota",
          kicker: `${cities.length} Kota · ${provinces.length} Provinsi`,
          badge: "Data Resmi",
          sub: "Dikelompokkan per provinsi — setiap kota satu halaman katalog",
          foot: "PPIU · PIHK · UTO · USP · BPW",
        }),
      ],
    },
  };
}

export default async function KotaKatalogIndexPage() {
  const [cities, provinces] = await Promise.all([getCityFacets(), getProvinceFacets()]);

  /* Kelompokkan kota per provinsi — urutan provinsi mengikuti total organisasi desc. */
  const groups: Array<{ province: string; slug: string | null; cities: CityFacet[] }> = [];
  for (const p of provinces) {
    groups.push({
      province: p.province,
      slug: p.slug,
      cities: cities.filter((c) => c.province === p.province),
    });
  }
  const ungrouped = cities.filter((c) => !c.province);
  if (ungrouped.length > 0) {
    groups.push({ province: "Provinsi tidak tercatat", slug: null, cities: ungrouped });
  }
  const withCities = groups.filter((g) => g.cities.length > 0);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${cities.length} kota dengan organisasi penyelenggara ibadah terdata`,
    numberOfItems: cities.length,
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Organisasi Ibadah di ${cityLabel(c.city)}`,
      url: `${SITE}/katalog/kota/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Katalog", url: "/katalog" },
            { name: "Per Kota", url: "/katalog/kota" },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: "Per Kota", url: "/katalog/kota" },
        ]}
        title={`Organisasi Ibadah per Kota — ${cities.length} Kota Terdata`}
        lead={`Indeks seluruh kota dengan penyelenggara ibadah terdata: ${cities.length} kota di ${provinces.length} provinsi. Setiap halaman kota memuat rincian per jenis organisasi dan daftar penyelenggara beserta status izinnya.`}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {withCities.map((g, idx) => (
          <section key={g.province} aria-labelledby={`prov-kota-${idx}`}>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2
                id={`prov-kota-${idx}`}
                className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
              >
                {g.province}
                <span className="ml-3 align-middle text-sm font-semibold text-ink-muted">
                  {g.cities.length} kota
                </span>
              </h2>
            </div>
            {g.slug && (
              <p className="mt-2 text-sm text-ink-muted">
                Lihat{" "}
                <Link
                  href={`/katalog/provinsi/${g.slug}`}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  katalog provinsi {g.province}
                </Link>
              </p>
            )}
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/katalog/kota/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    {cityLabel(c.city)}
                    <span className="text-xs font-extrabold text-brand-deep">{c.total}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
