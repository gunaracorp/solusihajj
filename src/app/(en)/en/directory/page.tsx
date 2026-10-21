import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Database, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";

/**
 * /en/directory — English landing for the national operator directory.
 * hreflang counterpart: /direktori (id). Full profiles live in Indonesian.
 * Counts snapshot: indexed Oct 2026 (Kemenag/SIMPU, HIMPUH, SISKOPATUH, Nusuk, MORA).
 */

const ORG_TYPES = [
  {
    code: "PPIU",
    count: "2,670",
    name: "Umrah Travel Organizers (Indonesia)",
    body: "Penyelenggara Perjalanan Ibadah Umrah — Indonesian companies licensed by the Ministry of Religious Affairs (Kemenag) to run Umrah trips. A valid PPIU license is the single most important thing to check before you pay any travel agent.",
  },
  {
    code: "PIHK",
    count: "1,019",
    name: "Special Hajj Organizers",
    body: "Penyelenggara Ibadah Haji Khusus — holders of official Hajj quotas from Kemenag, serving pilgrims who choose the faster, fully-paid special Hajj route instead of the regular government queue.",
  },
  {
    code: "UTO",
    count: "228",
    name: "Umrah Travel Operators (Saudi Arabia)",
    body: "Foreign Umrah operators licensed directly by Saudi Arabia's Ministry of Hajj and Umrah — typically receiving groups from overseas partners or serving non-Indonesian pilgrims.",
  },
  {
    code: "USP",
    count: "47",
    name: "Umrah Service Providers",
    body: "Licensed support companies operating in the Holy Cities: ground transport fleets, catering, accommodation services and group handling that PPIU and UTO subcontract for your trip.",
  },
  {
    code: "BPW",
    count: "2",
    name: "Foreign Travel Bureaus",
    body: "Biro Perjalanan Wisata — travel bureaus licensed in their own country (Malaysia, Singapore, Thailand and beyond) that market Umrah journeys to pilgrims outside Indonesia.",
  },
  {
    code: "Verified",
    count: "3,619",
    name: "Organizations with active status",
    body: "Of the full index, 3,619 organizations carry an active-status proof across our 9+ official sources at the time of indexing. The remainder are listed for completeness with their last known status — always shown.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Directory" });
  const title = "National Operator Directory — 3,966 Organizations, Provenance Included";
  const description = t("sub", { count: "3,966" });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/directory`, ...languageAlternates("/direktori") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/directory`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "National Operator Directory",
          kicker: "3,966 organizations · 9+ official sources",
          badge: "Indexed Oct 2026",
          sub: "PPIU 2,670 · PIHK 1,019 · UTO 228 · USP 47 · BPW 2",
          foot: "Every row carries its provenance",
        }),
      ],
    },
  };
}

export default async function EnDirectoryPage() {
  const t = await getTranslations({ locale: "en", namespace: "Directory" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    url: `${SITE}/en/directory`,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE}/#organization` },
    about: "Indexed registry of Hajj & Umrah operators and service providers in Indonesia and across Asia",
    mainEntity: {
      "@type": "ItemList",
      name: t("byType"),
      numberOfItems: ORG_TYPES.length,
      itemListElement: ORG_TYPES.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${o.code} — ${o.name} (${o.count})`,
        url: `${SITE}/direktori`,
      })),
    },
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/direktori`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/directory`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/direktori`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Directory", url: `${SITE}/en/directory` },
      ])} />
      <JsonLd data={collectionLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <Database className="h-4 w-4" aria-hidden="true" /> Indexed Oct 2026
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: "3,966" })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            The directory is a research artifact, not a booking list: every row names its source
            (Kemenag/SIMPU, HIMPUH, SISKOPATUH, Nusuk, MORA Pakistan and more), the license number,
            and the date the record was last confirmed. If we cannot prove it, we do not print it.
          </p>
        </div>
      </section>

      {/* ORG-TYPE BREAKDOWN */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-extrabold text-brand-deep md:text-2xl">{t("byType")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ORG_TYPES.map((o) => (
            <article key={o.code} className="flex flex-col rounded-2xl border border-line-warm bg-white p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-extrabold text-brand-deep">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" /> {o.code}
                </span>
                <span className="text-xl font-extrabold text-brand-deep">{o.count}</span>
              </div>
              <p className="mt-3 text-sm font-bold text-brand-deep">{o.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GO DEEPER */}
      <section className="border-y border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-brand-deep md:text-2xl">
            <ShieldCheck className="h-6 w-6 text-brand" aria-hidden="true" />
            Search the full directory
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Full profiles — office addresses, license numbers and validity, provincial coverage,
            official source links and last-confirmed dates — are served from our live database in
            Indonesian. The faceted catalog lets you slice the same dataset by organization type,
            province and city.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/direktori"
              hrefLang="id"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Open the directory (Indonesian) <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/en/catalog"
              className="inline-flex min-h-11 items-center rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:border-brand"
            >
              Browse the faceted catalog
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/direktori" hrefLang="id" className="font-semibold text-brand hover:underline">
              {tc("inIndonesian")}
            </Link>{" "}
            — the full directory with all 3,966 profiles is maintained in Bahasa Indonesia,
            matching the language of the underlying government records.
          </p>
        </div>
      </section>
    </>
  );
}
