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
  getCompaniesFaceted,
  slugifyDb,
  TYPE_META,
  type FacetedCompany,
} from "@/lib/facets";

/* Faset kota: /katalog/kota/{kota} — 335 halaman statis (semua kota, ≥1 organisasi). */

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateStaticParams() {
  const cities = await getCityFacets();
  return cities.map((c) => ({ kota: c.slug }));
}

type Params = { params: Promise<{ kota: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { kota } = await params;
  const cities = await getCityFacets();
  const facet = cities.find((c) => c.slug === kota);
  if (!facet) return {};
  const totalLabel = facet.total.toLocaleString("id-ID");
  const kotaLabel = cityLabel(facet.city);
  const title = `Organisasi Ibadah di ${kotaLabel} — ${totalLabel} Terdata`;
  const description = `${totalLabel} organisasi penyelenggara ibadah (PPIU, PIHK, UTO, USP, BPW) terdata di ${kotaLabel}${facet.province ? `, ${facet.province}` : ""} — rincian per jenis, daftar nama, dan status izin tiap penyelenggara.`;
  return {
    title,
    description,
    alternates: { canonical: `/katalog/kota/${kota}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/kota/${kota}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: `Organisasi Ibadah di ${kotaLabel}`,
          kicker: `${totalLabel} terdata`,
          chip: kotaLabel.slice(0, 40),
          badge: "Data Resmi",
          sub: facet.province
            ? `Rincian per jenis organisasi — ${facet.province}`
            : "Rincian per jenis organisasi penyelenggara ibadah",
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

export default async function KotaKatalogPage({ params }: Params) {
  const { kota } = await params;
  const cities = await getCityFacets();
  const facet = cities.find((c) => c.slug === kota);
  if (!facet) notFound();

  /* Ambil seluruh organisasi di kota ini untuk rincian per jenis (total tetap akurat via count). */
  const all = await getCompaniesFaceted({ city: facet.city, take: 1000 });
  if (all.total === 0) notFound();

  const kotaLabel = cityLabel(facet.city);
  const items = all.items.slice(0, 150);

  /* Rincian jumlah per jenis organisasi di kota ini. */
  const typeCounts = new Map<string, number>();
  for (const c of all.items) {
    typeCounts.set(c.orgType, (typeCounts.get(c.orgType) ?? 0) + 1);
  }
  const typeChips = [...typeCounts.entries()].sort((a, b) => b[1] - a[1]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Organisasi penyelenggara ibadah di ${kotaLabel}`,
    numberOfItems: Math.min(items.length, 30),
    itemListElement: items.slice(0, 30).map((c, i) => ({
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
            { name: "Per Kota", url: "/katalog/kota" },
            { name: kotaLabel, url: `/katalog/kota/${kota}` },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: "Per Kota", url: "/katalog/kota" },
          { name: kotaLabel, url: `/katalog/kota/${kota}` },
        ]}
        title={`Organisasi Ibadah di ${kotaLabel} — ${all.total.toLocaleString("id-ID")} Terdata`}
        lead={`${all.total.toLocaleString("id-ID")} organisasi penyelenggara ibadah terdata di ${kotaLabel}${facet.province ? `, ${facet.province}` : ""} — mencakup PPIU, PIHK, UTO, USP, dan BPW. Data bersumber dari kanal resmi dan diperbarui berkala; setiap nama tertaut ke profil lengkapnya.`}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {/* Rincian per jenis */}
        <section aria-labelledby="rincian-jenis">
          <h2
            id="rincian-jenis"
            className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
          >
            Rincian per Jenis Organisasi
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {typeChips.map(([orgType, count]) => {
              const meta = TYPE_META[orgType];
              const href =
                count >= 2 && meta ? `/katalog/${meta.slug}/${kota}` : null;
              const label = meta?.label ?? orgType;
              return (
                <li key={orgType}>
                  {href ? (
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {label}
                      <span className="text-xs font-extrabold text-brand-deep">{count}</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-ivory px-3 py-1.5 text-sm text-ink-muted">
                      {label}
                      <span className="text-xs font-bold">{count}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          {facet.province && (
            <p className="mt-4 text-sm text-ink-muted">
              {kotaLabel} berada di{" "}
              <Link
                href={`/katalog/provinsi/${slugifyDb(facet.province)}`}
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Provinsi {facet.province}
              </Link>
              .
            </p>
          )}
        </section>

        {/* Daftar organisasi */}
        <section aria-labelledby="daftar-kota">
          <h2
            id="daftar-kota"
            className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
          >
            Daftar Organisasi di {kotaLabel}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            {all.total > items.length
              ? `Menampilkan ${items.length.toLocaleString("id-ID")} dari ${all.total.toLocaleString("id-ID")} entri, diurutkan alfabetis.`
              : "Diurutkan alfabetis; penanda AKTIF berarti izin/registrasi tercatat berlaku saat data ditarik."}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
