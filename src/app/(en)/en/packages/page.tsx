import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PiggyBank, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { PackageMiniCard } from "@/components/seo/silo-bits";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { packageList } from "@/data/packages";

/**
 * /en/packages — English gateway to the live package catalog (27 packages).
 * hreflang counterpart: /paket (id). Detail pages open in Indonesian.
 */

const ESCROW_STEPS = [
  {
    step: "40% — documents & check-in",
    body: "The first tranche is released only after your visa and tickets are issued and your Makkah hotel voucher is confirmed at check-in. If the trip never materializes, that money never leaves escrow.",
  },
  {
    step: "40% — while the pilgrimage runs",
    body: "Released in stages during the journey itself: hotel nights occupied, buses delivered, mutawif services rendered. The operator gets paid for what is actually happening — not for promises.",
  },
  {
    step: "20% — after you return",
    body: "The final tranche settles after your group lands home, keeping the operator accountable through the very last day — including the handling and airport transfer you often only notice when it fails.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Packages" });
  const title = "Umrah Packages — Transparent Pricing, Verified Operators";
  const description = t("sub", { count: packageList.length });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/packages`, ...languageAlternates("/paket") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/packages`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Umrah Packages — Transparent Pricing",
          kicker: `${packageList.length} live packages`,
          rating: 4.9,
          badge: "Shariah Escrow 40/40/20",
          sub: "Hotel distance to the Haram in meters · reviews from real pilgrims",
          foot: "SolusiHajj · Your trust, secured.",
        }),
      ],
    },
  };
}

export default async function EnPackagesPage() {
  const t = await getTranslations({ locale: "en", namespace: "Packages" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("title"),
    url: `${SITE}/en/packages`,
    numberOfItems: packageList.length,
    itemListElement: packageList.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pkg.title,
      url: `${SITE}/paket/${pkg.slug}`,
    })),
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/paket`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/packages`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/paket`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Packages", url: `${SITE}/en/packages` },
      ])} />
      <JsonLd data={itemListLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <PiggyBank className="h-4 w-4" aria-hidden="true" /> Live catalog
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: packageList.length })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Every listing names its hotel in Makkah and Madinah with the real walking distance to the
            Haram — in meters, not marketing adjectives — alongside the departure window, airline,
            and a rating built exclusively from pilgrims who completed the trip.
          </p>
        </div>
      </section>

      {/* ALL PACKAGES */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-extrabold text-brand-deep md:text-2xl">
          All {packageList.length} packages
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packageList.map((pkg) => (
            <PackageMiniCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          Cards link to full detail pages in Indonesian — itinerary, cancellation ladder, operator
          profile and reviews.{" "}
          <Link href="/paket" hrefLang="id" className="font-semibold text-brand hover:underline">
            {tc("inIndonesian")}
          </Link>
          .
        </p>
      </section>

      {/* ESCROW BLOCK */}
      <section className="border-y border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-brand-deep md:text-2xl">
            <ShieldCheck className="h-6 w-6 text-brand" aria-hidden="true" />
            How escrow protects your payment
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            On SolusiHajj, your money is never paid upfront into an operator&rsquo;s account. Funds sit
            in a third-party shariah escrow account (AmanahEscrow) and are released on the 40/40/20
            schedule — milestones first, trust earned as the journey actually happens.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ESCROW_STEPS.map((s) => (
              <article key={s.step} className="rounded-2xl border border-line-warm bg-ivory p-6">
                <p className="text-sm font-extrabold text-brand-deep">{s.step}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/en/compare"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Compare packages side by side <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/syarat-ketentuan"
              hrefLang="id"
              className="inline-flex min-h-11 items-center rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:border-brand"
            >
              Read the escrow terms (in Indonesian)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
