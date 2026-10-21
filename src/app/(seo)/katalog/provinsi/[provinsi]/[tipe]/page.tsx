import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero } from "@/components/seo/pkg-ui";
import {
  cityLabel,
  getProvinceTypeCombos,
  getCompaniesFaceted,
  slugifyDb,
  typeBySlug,
  TYPE_META,
  type FacetedCompany,
} from "@/lib/facets";

/* Faset provinsi×jenis: /katalog/provinsi/{provinsi}/{tipe} — hanya kombinasi dengan ≥2 organisasi (53 halaman). */

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateStaticParams() {
  const combos = await getProvinceTypeCombos();
  return combos
    .map((c) => {
      const meta = TYPE_META[c.orgType];
      return meta ? { provinsi: c.provinceSlug, tipe: meta.slug } : null;
    })
    .filter((p): p is { provinsi: string; tipe: string } => p !== null);
}

type Params = { params: Promise<{ provinsi: string; tipe: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { provinsi, tipe } = await params;
  const meta = typeBySlug(tipe);
  if (!meta) return {};
  const combos = await getProvinceTypeCombos();
  const combo = combos.find((c) => c.orgType === meta.orgType && c.provinceSlug === provinsi);
  if (!combo) return {};
  const totalLabel = combo.total.toLocaleString("id-ID");
  const title = `${meta.label} di ${combo.province} — ${totalLabel} Organisasi Terdata`;
  const description = `${totalLabel} organisasi ${meta.label} (${meta.blurb}) terdata di ${combo.province}. Lihat daftar lengkap beserta status izin dan profil tiap penyelenggara.`;
  return {
    title,
    description,
    alternates: { canonical: `/katalog/provinsi/${provinsi}/${tipe}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/katalog/provinsi/${provinsi}/${tipe}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: `${meta.label} di ${combo.province}`,
          kicker: `${totalLabel} organisasi terdata`,
          chip: meta.label,
          badge: "Data Resmi",
          sub: `Daftar ${meta.label} di ${combo.province} beserta status izinnya`,
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

export default async function ProvinsiTipePage({ params }: Params) {
  const { provinsi, tipe } = await params;
  const meta = typeBySlug(tipe);
  if (!meta) notFound();

  const combos = await getProvinceTypeCombos();
  const combo = combos.find((c) => c.orgType === meta.orgType && c.provinceSlug === provinsi);
  if (!combo) notFound();

  const result = await getCompaniesFaceted({
    orgType: meta.orgType,
    province: combo.province,
    take: 100,
  });
  if (result.total === 0) notFound();

  const siblings = combos.filter(
    (c) => c.provinceSlug === provinsi && c.orgType !== meta.orgType
  );
  const shown = result.items.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${meta.label} di ${combo.province}`,
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
            { name: combo.province, url: `/katalog/provinsi/${provinsi}` },
            { name: meta.label, url: `/katalog/provinsi/${provinsi}/${tipe}` },
          ]),
          itemListJsonLd,
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: "Per Provinsi", url: "/katalog/provinsi" },
          { name: combo.province, url: `/katalog/provinsi/${provinsi}` },
          { name: meta.label, url: `/katalog/provinsi/${provinsi}/${tipe}` },
        ]}
        title={`${meta.label} di ${combo.province} — ${result.total.toLocaleString("id-ID")} Organisasi Terdata`}
        lead={`${meta.blurb}. Di ${combo.province} terdapat ${result.total.toLocaleString("id-ID")} organisasi ${meta.label} terdata — seluruhnya bersumber dari kanal resmi dan tertaut ke profil lengkap beserta status izinnya.`}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {/* Daftar organisasi */}
        <section aria-labelledby="daftar-prov-tipe">
          <h2
            id="daftar-prov-tipe"
            className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
          >
            Daftar {meta.label} di {combo.province}
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

        {/* Jenis lain di provinsi yang sama */}
        {siblings.length > 0 && (
          <section aria-labelledby="jenis-lain-prov">
            <h2
              id="jenis-lain-prov"
              className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl"
            >
              Jenis Organisasi Lain di {combo.province}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siblings.map((s) => {
                const sMeta = TYPE_META[s.orgType];
                return (
                  <li key={`${s.orgType}-${s.provinceSlug}`}>
                    <Link
                      href={`/katalog/provinsi/${provinsi}/${sMeta?.slug ?? s.orgType.toLowerCase()}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {sMeta?.label ?? s.orgType}
                      <span className="text-xs font-extrabold text-brand-deep">{s.total}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Silo */}
        <section aria-labelledby="silo-prov-tipe" className="rounded-3xl bg-brand-soft/60 p-6 md:p-8">
          <h2 id="silo-prov-tipe" className="text-xl font-extrabold tracking-tight text-brand-deep">
            Jelajahi lebih lanjut
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Lihat seluruh organisasi ibadah di {combo.province}, atau direktori {meta.label} nasional
            yang mencakup semua kota.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/katalog/provinsi/${provinsi}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-5 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Semua organisasi di {combo.province}
            </Link>
            <Link
              href={`/katalog/${meta.slug}`}
              className="inline-flex min-h-11 items-center rounded-xl border border-brand bg-white px-5 text-sm font-bold text-brand transition-colors hover:bg-brand-soft"
            >
              Direktori {meta.label} nasional
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
