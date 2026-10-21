import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero } from "@/components/seo/pkg-ui";
import { getCityFacets, getProvinceFacets } from "@/lib/facets";

/* Indeks faset provinsi — 31 provinsi. */

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const provinces = await getProvinceFacets();
  const total = provinces.reduce((s, p) => s + p.total, 0);
  const title = `Katalog Organisasi Ibadah per Provinsi — ${provinces.length} Provinsi`;
  const description = `Indeks ${provinces.length} provinsi dengan ${total.toLocaleString("id-ID")} organisasi penyelenggara ibadah terdata (PPIU, PIHK, UTO, USP, BPW). Pilih provinsi untuk melihat daftar penyelenggara beserta status izinnya.`;
  return {
    title,
    description,
    alternates: { canonical: "/katalog/provinsi" },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/provinsi`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: "Katalog Organisasi Ibadah per Provinsi",
          kicker: `${provinces.length} Provinsi · ${total.toLocaleString("id-ID")} Organisasi`,
          badge: "Data Resmi",
          sub: "Dari DKI Jakarta hingga Papua — setiap provinsi satu halaman katalog",
          foot: "PPIU · PIHK · UTO · USP · BPW",
        }),
      ],
    },
  };
}

export default async function ProvinsiKatalogIndexPage() {
  const [provinces, cities] = await Promise.all([getProvinceFacets(), getCityFacets()]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${provinces.length} provinsi dengan organisasi penyelenggara ibadah terdata`,
    numberOfItems: provinces.length,
    itemListElement: provinces.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Organisasi Ibadah di ${p.province}`,
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
            { name: "Per Provinsi", url: "/katalog/provinsi" },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: "Per Provinsi", url: "/katalog/provinsi" },
        ]}
        title={`Organisasi Ibadah per Provinsi — ${provinces.length} Provinsi Terdata`}
        lead={`Jelajahi penyelenggara ibadah berdasarkan provinsi: ${provinces.length} provinsi dengan total ${provinces.reduce((s, p) => s + p.total, 0).toLocaleString("id-ID")} organisasi terdata. Setiap halaman provinsi memuat daftar organisasi dan indeks kota di dalamnya.`}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {provinces.map((p) => {
            const kotaProv = cities.filter((c) => c.province === p.province);
            const topKota = kotaProv
              .slice(0, 3)
              .map((c) => c.city)
              .join(", ");
            return (
              <li key={p.slug}>
                <Link
                  href={`/katalog/provinsi/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line-warm bg-white p-4 transition-colors hover:border-brand"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm font-bold text-ink">{p.province}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-muted">
                    <span className="font-extrabold text-brand-deep">
                      {p.total.toLocaleString("id-ID")}
                    </span>{" "}
                    organisasi · {kotaProv.length} kota
                  </p>
                  {topKota && (
                    <p className="mt-1 text-xs text-ink-muted">Kota teratas: {topKota}</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Buka katalog provinsi
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
      </div>
    </>
  );
}
