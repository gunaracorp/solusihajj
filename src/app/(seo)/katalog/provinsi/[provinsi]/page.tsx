import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero } from "@/components/seo/pkg-ui";
import {
  cityLabel,
  getCityFacets,
  getProvinceFacets,
  getProvinceTypeCombos,
  getCompaniesFaceted,
  slugifyDb,
  TYPE_META,
  type FacetedCompany,
} from "@/lib/facets";

/* Faset provinsi: /katalog/provinsi/{provinsi} — 31 halaman statis. */

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateStaticParams() {
  const provinces = await getProvinceFacets();
  return provinces.map((p) => ({ provinsi: p.slug }));
}

type Params = { params: Promise<{ provinsi: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { provinsi } = await params;
  const provinces = await getProvinceFacets();
  const facet = provinces.find((p) => p.slug === provinsi);
  if (!facet) return {};
  const totalLabel = facet.total.toLocaleString("id-ID");
  const title = `Direktori Ibadah di ${facet.province} — ${totalLabel} Organisasi Terdata`;
  const description = `${totalLabel} organisasi penyelenggara ibadah (PPIU, PIHK, UTO, USP, BPW) terdata di ${facet.province}. Telusuri per kota atau jenis organisasi, lihat status izin, dan buka profil tiap penyelenggara.`;
  return {
    title,
    description,
    alternates: { canonical: `/katalog/provinsi/${provinsi}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/provinsi/${provinsi}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: `Organisasi Ibadah di ${facet.province}`,
          kicker: `${totalLabel} organisasi terdata`,
          chip: facet.province.slice(0, 40),
          badge: "Data Resmi",
          sub: `PPIU, PIHK, UTO, USP, BPW — daftar per kota di ${facet.province}`,
          foot: "Kemenag RI · Kemenhaj · Nusuk",
        }),
      ],
    },
  };
}

function StatusBadge({ status }: { status: string }) {
  if (status === "AKTIF") {
    return (
      <span className="rounded-md bg-gold-soft px-2 py-0.5 text-[11px] font-bold text-gold-deep">
        AKTIF
      </span>
    );
  }
  return (
    <span className="rounded-md border border-line-warm bg-ivory px-2 py-0.5 text-[11px] font-semibold text-ink-muted">
      {status}
    </span>
  );
}

function CompanyCard({ c }: { c: FacetedCompany }) {
  const lokasi = [c.city ? cityLabel(c.city) : null, c.province].filter(Boolean).join(", ");
  return (
    <li className="rounded-2xl border border-line-warm bg-white p-4">
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[11px] font-bold text-brand-deep">
          {c.orgType}
        </span>
        <StatusBadge status={c.status} />
      </div>
      <h3 className="mt-2 text-sm font-bold leading-snug text-ink">
        <Link
          href={`/direktori/${slugifyDb(c.name)}--${c.id}`}
          className="text-brand underline-offset-4 hover:underline"
        >
          {c.name}
        </Link>
      </h3>
      {lokasi && (
        <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-muted">
          <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
          {lokasi}
        </p>
      )}
    </li>
  );
}

export default async function ProvinsiKatalogPage({ params }: Params) {
  const { provinsi } = await params;
  const provinces = await getProvinceFacets();
  const facet = provinces.find((p) => p.slug === provinsi);
  if (!facet) notFound();

  const [result, cities, provTypeCombos] = await Promise.all([
    getCompaniesFaceted({ province: facet.province, take: 150 }),
    getCityFacets(),
    getProvinceTypeCombos(),
  ]);
  if (result.total === 0) notFound();

  const cityChips = cities.filter((c) => c.province === facet.province);
  const typeChips = provTypeCombos.filter((c) => c.provinceSlug === provinsi);
  const shown = result.items.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Organisasi penyelenggara ibadah di ${facet.province}`,
    numberOfItems: Math.min(shown, 30),
    itemListElement: result.items.slice(0, 30).map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE}/direktori/${slugifyDb(c.name)}--${c.id}`,
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
            { name: facet.province, url: `/katalog/provinsi/${provinsi}` },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: "Per Provinsi", url: "/katalog/provinsi" },
          { name: facet.province, url: `/katalog/provinsi/${provinsi}` },
        ]}
        title={`Direktori Ibadah di ${facet.province} — ${result.total.toLocaleString("id-ID")} Organisasi Terdata`}
        lead={`Terdapat ${result.total.toLocaleString("id-ID")} organisasi penyelenggara ibadah terdata di ${facet.province}, mencakup PPIU, PIHK, UTO, USP, dan BPW dari kanal resmi. Jelajahi per kota atau per jenis organisasi di bawah, atau langsung buka profil tiap penyelenggara.`}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {/* Jenis organisasi di provinsi ini */}
        {typeChips.length > 0 && (
          <section aria-labelledby="jenis-provinsi">
            <h2
              id="jenis-provinsi"
              className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
            >
              Jenis Organisasi di {facet.province}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {typeChips.map((t) => {
                const meta = TYPE_META[t.orgType];
                if (!meta) return null;
                return (
                  <li key={`${t.orgType}-${t.provinceSlug}`}>
                    <Link
                      href={`/katalog/provinsi/${provinsi}/${meta.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {meta.label}
                      <span className="text-xs font-extrabold text-brand-deep">{t.total}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Kota di provinsi ini */}
        {cityChips.length > 0 && (
          <section aria-labelledby="kota-provinsi">
            <h2
              id="kota-provinsi"
              className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
            >
              Kota di {facet.province}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
              {cityChips.length} kota dengan organisasi terdata — jumlah menunjukkan total
              organisasi di kota tersebut.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cityChips.map((c) => (
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
        )}

        {/* Daftar organisasi */}
        <section aria-labelledby="daftar-provinsi">
          <h2
            id="daftar-provinsi"
            className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
          >
            Daftar Organisasi di {facet.province}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            {result.total > shown
              ? `Menampilkan ${shown.toLocaleString("id-ID")} dari ${result.total.toLocaleString("id-ID")} entri, diurutkan alfabetis.`
              : "Diurutkan alfabetis; penanda AKTIF berarti izin/registrasi tercatat berlaku saat data ditarik."}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {result.items.map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
