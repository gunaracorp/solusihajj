import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Search } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading } from "@/components/seo/pkg-ui";
import {
  cityLabel,
  getCityTypeCombos,
  getCompaniesFaceted,
  slugifyDb,
  typeBySlug,
  TYPE_META,
  type FacetedCompany,
} from "@/lib/facets";

/* Faset jenis organisasi: /katalog/{ppiu|pihk|uto|usp|bpw} — 5 halaman statis. */

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(TYPE_META).map((m) => ({ tipe: m.slug }));
}

type Params = { params: Promise<{ tipe: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tipe } = await params;
  const meta = typeBySlug(tipe);
  if (!meta) return {};
  const { total } = await getCompaniesFaceted({ orgType: meta.orgType, take: 1 });
  const totalLabel = total.toLocaleString("id-ID");
  const title = `Direktori ${meta.label} — ${totalLabel} ${meta.label} Terdata`;
  const description = `${totalLabel} organisasi ${meta.label} (${meta.blurb}) terdata nasional. Telusuri per kota, lihat status izin tiap penyelenggara, dan buka profil lengkapnya — gratis.`;
  return {
    title,
    description,
    alternates: { canonical: `/katalog/${meta.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/${meta.slug}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: `Direktori ${meta.label}`,
          kicker: `${totalLabel} organisasi terdata`,
          chip: meta.label,
          badge: "Data Resmi",
          sub: meta.blurb,
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

export default async function TipeFacetPage({ params }: Params) {
  const { tipe } = await params;
  const meta = typeBySlug(tipe);
  if (!meta) notFound();

  const [result, combos] = await Promise.all([
    getCompaniesFaceted({ orgType: meta.orgType, take: 120 }),
    getCityTypeCombos(),
  ]);
  if (result.total === 0) notFound();

  const comboTipe = combos.filter((c) => c.orgType === meta.orgType);
  const cityChips = comboTipe.slice(0, 24);
  const shown = result.items.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${meta.label} terdata`,
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
            { name: meta.label, url: `/katalog/${meta.slug}` },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: meta.label, url: `/katalog/${meta.slug}` },
        ]}
        title={`Direktori ${meta.label} — ${result.total.toLocaleString("id-ID")} ${meta.label} Terdata`}
        lead={`${meta.blurb}. Daftar di bawah memuat ${shown.toLocaleString("id-ID")} entri teratas dari total ${result.total.toLocaleString("id-ID")}, diurutkan alfabetis — setiap nama tertaut ke profil lengkap: nomor izin, alamat, kontak, dan sumber datanya.`}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {/* Chip kota */}
        <section aria-labelledby="tipe-kota">
          <SectionHeading
            id="tipe-kota"
            title={`Jelajahi ${meta.label} per Kota`}
            desc={`${meta.label} terdata tersebar di ${comboTipe.length} kota. Mulai dari kota dengan anggota terbanyak:`}
          />
          <ul className="flex flex-wrap gap-2">
            {cityChips.map((c) => (
              <li key={`${c.orgType}-${c.citySlug}`}>
                <Link
                  href={`/katalog/${meta.slug}/${c.citySlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {cityLabel(c.city)}
                  <span className="text-xs font-extrabold text-brand-deep">{c.total}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-muted">
            Indeks kota lainnya tersedia di{" "}
            <Link href="/katalog/kota" className="font-semibold text-brand underline-offset-4 hover:underline">
              katalog per kota
            </Link>
            .
          </p>
        </section>

        {/* Daftar organisasi */}
        <section aria-labelledby="tipe-daftar">
          <SectionHeading
            id="tipe-daftar"
            title={`Daftar ${meta.label} Terdata`}
            desc="Status mengikuti data sumber terbaru; entri AKTIF berarti izin/registrasi tercatat berlaku saat penarikan data."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {result.items.map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </ul>
          {result.total > shown && (
            <div className="mt-6 rounded-2xl border border-line-warm bg-white p-4 text-sm text-ink-muted">
              <p>
                Menampilkan {shown.toLocaleString("id-ID")} dari{" "}
                {result.total.toLocaleString("id-ID")} {meta.label} — diurutkan alfabetis. Untuk
                mencari berdasarkan nama, nomor izin, atau status:
              </p>
              <Link
                href={`/direktori?type=${meta.slug}`}
                className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-4 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Pencarian lengkap {meta.label}
              </Link>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
