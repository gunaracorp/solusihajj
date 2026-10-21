import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, BadgeCheck, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { JsonLd, organizationJsonLd, SITE } from "@/components/seo/json-ld";
import { PackageMiniCard } from "@/components/seo/silo-bits";
import { packageList } from "@/data/packages";
import { serviceList } from "@/data/services";
import { articleList } from "@/data/articles";
import { languageAlternates } from "@/lib/i18n-routes";

/**
 * /en — homepage bahasa Inggris (v2.1.0 "Sinyal Global").
 * Padanan hreflang dari "/" (id). Konten asli berbahasa Inggris, data dari
 * katalog yang sama — bukan hasil mesin terjemahan.
 */

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Home" });
  const title = "Hajj & Umrah Marketplace — Verified Operators Across Asia";
  const description = t("sub");
  return {
    title,
    description,
    alternates: { canonical: "/en", ...languageAlternates("/") },
    openGraph: {
      title: `SolusiHajj — ${title}`,
      description,
      url: `${SITE}/en`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
    },
  };
}

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Shariah escrow on every deal",
    body: "Funds sit in a third-party escrow account and are released 40/40/20 — visa & tickets, departure, then final settlement — never handed to the operator upfront.",
  },
  {
    icon: BadgeCheck,
    title: "Five-layer verification",
    body: "Government licenses, association rosters, Nusuk provider lists, sanctions screening and live status checks — before an operator ever appears in your results.",
  },
  {
    icon: Landmark,
    title: "Real national data",
    body: "3,966 organizations indexed from 9+ official sources (Kemenag, HIMPUH, SISKOPATUH, Nusuk, MORA Pakistan) — every row carries its provenance.",
  },
  {
    icon: Sparkles,
    title: "AI that shows its reasoning",
    body: "NurMatch recommends only from the real catalog and database, cites its sources, and falls back to a transparent deterministic scorer when the LLM is offline.",
  },
];

const EN_INDEXES = [
  { href: "/en/services", label: "Services", desc: "210 services across 14 categories" },
  { href: "/en/packages", label: "Packages", desc: "27 live packages, transparent pricing" },
  { href: "/en/directory", label: "Directory", desc: "3,966 organizations, provenance-audited" },
  { href: "/en/cities", label: "Departure cities", desc: "45 Indonesian cities & airports" },
  { href: "/en/articles", label: "Guides & articles", desc: "112 E-E-A-T articles" },
  { href: "/en/glossary", label: "Glossary", desc: "Hajj & Umrah terms A–Z" },
  { href: "/en/compare", label: "Compare", desc: "Side-by-side package comparison" },
  { href: "/en/faq", label: "FAQ", desc: "Licenses, escrow, verification" },
  { href: "/en/catalog", label: "Faceted catalog", desc: "Browse by type, province, city" },
];

export default async function EnHomePage() {
  const t = await getTranslations({ locale: "en", namespace: "Home" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const featured = packageList.slice(0, 6);

  const stats = [
    { value: "3,966", label: t("statsOrgs") },
    { value: String(packageList.length), label: t("statsPackages") },
    { value: String(serviceList.length), label: t("statsServices") },
    { value: String(articleList.length), label: t("statsArticles") },
  ];

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SolusiHajj",
          url: `${SITE}/en`,
          inLanguage: "en",
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE}/direktori?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            {t("kicker")}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {t("sub")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/en/packages"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-deep"
            >
              {tc("explorePackages")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/en/directory"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:border-brand"
            >
              {tc("browseDirectory")}
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-4 py-2 text-xs font-bold text-gold-deep">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" /> {tc("escrowBadge")}
            </span>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line-warm bg-ivory p-5">
                <dt className="order-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {s.label}
                </dt>
                <dd className="text-2xl font-extrabold text-brand-deep md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl">
          Why pilgrims trust SolusiHajj
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <article key={p.title} className="rounded-2xl border border-line-warm bg-white p-6">
              <p.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="border-y border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl">
              Featured Umrah packages
            </h2>
            <Link
              href="/en/packages"
              className="hidden items-center gap-1 text-sm font-bold text-brand hover:underline sm:inline-flex"
            >
              All {packageList.length} packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((pkg) => (
              <PackageMiniCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Detail pages are available in Indonesian —{" "}
            <Link href="/" hrefLang="id" className="font-semibold text-brand hover:underline">
              {tc("inIndonesian")}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* EN SECTION INDEX */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-deep md:text-3xl">
          Explore in English
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EN_INDEXES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
            >
              <p className="flex items-center gap-1.5 text-base font-bold text-brand-deep group-hover:text-brand">
                {item.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </p>
              <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
