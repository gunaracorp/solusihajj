import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import {
  TYPE_META,
  getCityFacets,
  getProvinceFacets,
  getTypeCounts,
} from "@/lib/facets";

/**
 * /en/catalog — English landing for the faceted national catalog (v2.1.0).
 * Padanan hreflang dari /katalog (id). Data faset live dari DB (Prisma).
 */

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Catalog" });
  const title = "Faceted Catalog — Browse 3,966 Operators by Type, Province & City";
  const description = t("sub", { count: 3966 });
  return {
    title,
    description,
    alternates: { canonical: "/en/catalog", ...languageAlternates("/katalog") },
    openGraph: {
      title: `SolusiHajj — ${title}`,
      description,
      url: `${SITE}/en/catalog`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Faceted National Catalog",
          kicker: "3,966 organizations · 335 cities · 31 provinces",
          badge: "5-Layer Verified",
          sub: "Browse licensed operators by type, province and city",
          foot: "PPIU · PIHK · UTO · USP · BPW",
        }),
      ],
    },
  };
}

export default async function EnCatalogPage() {
  const t = await getTranslations({ locale: "en", namespace: "Catalog" });
  const [types, provinces, cities] = await Promise.all([
    getTypeCounts(),
    getProvinceFacets(),
    getCityFacets(),
  ]);

  const totalOrgs = types.reduce((sum, x) => sum + x.total, 0);
  const topCities = cities.slice(0, 12);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE}/en` },
          { name: "Faceted Catalog", url: `${SITE}/en/catalog` },
        ])}
      />

      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            National directory
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: totalOrgs })}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/katalog"
              hrefLang="id"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Version in Indonesian <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/en/directory"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:border-brand"
            >
              Full directory search
            </Link>
          </div>
        </div>
      </section>

      {/* BY TYPE */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-deep">By organization type</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(TYPE_META).map((meta) => {
            const total = types.find((x) => x.orgType === meta.orgType)?.total ?? 0;
            if (total === 0) return null;
            return (
              <Link
                key={meta.slug}
                href={`/katalog/${meta.slug}`}
                hrefLang="id"
                className="group rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
              >
                <p className="flex items-center gap-2 text-base font-bold text-brand-deep group-hover:text-brand">
                  <Building2 className="h-4 w-4" aria-hidden="true" /> {meta.label}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{meta.blurb}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gold-deep">
                  {total.toLocaleString("en-US")} organizations
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TOP PROVINCES + CITIES */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-brand-deep">Top provinces</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {provinces.slice(0, 10).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/katalog/provinsi/${p.slug}`}
                    hrefLang="id"
                    className="flex items-center justify-between gap-2 rounded-xl border border-line-warm px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <span className="truncate">{p.province}</span>
                    <span className="shrink-0 text-xs font-bold text-ink-muted">
                      {p.total.toLocaleString("en-US")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-muted">
              All 31 provinces are listed on the{" "}
              <Link href="/katalog/provinsi" hrefLang="id" className="font-semibold text-brand hover:underline">
                Indonesian province index
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-brand-deep">Top cities</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/katalog/kota/${c.slug}`}
                    hrefLang="id"
                    className="flex items-center justify-between gap-2 rounded-xl border border-line-warm px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <span className="flex min-w-0 items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                      <span className="truncate">{c.city}</span>
                    </span>
                    <span className="shrink-0 text-xs font-bold text-ink-muted">
                      {c.total.toLocaleString("en-US")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-muted">
              All 335 cities are indexed on the{" "}
              <Link href="/katalog/kota" hrefLang="id" className="font-semibold text-brand hover:underline">
                Indonesian city index
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
