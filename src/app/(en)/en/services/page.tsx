import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { CategoryIcon } from "@/components/seo/silo-bits";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { serviceCategoryList, serviceList } from "@/data/services";

/**
 * /en/services — English gateway to the 210-service catalog (14 categories).
 * hreflang counterpart: /layanan (id). Detail pages open in Indonesian.
 */

const CATEGORY_EN: Record<string, string> = {
  "visa-dokumen": "Visa & Travel Documents",
  "tiket-penerbangan": "Flights & Tickets",
  "hotel-akomodasi": "Hotels & Accommodation",
  "transportasi-darat": "Ground Transport",
  "manasik-edukasi": "Manasik & Pilgrim Education",
  "handling-logistik": "Airport Handling & Logistics",
  "makanan-konsumsi": "Food & Catering",
  "kesehatan-asuransi": "Health & Insurance",
  "keuangan-syariah": "Shariah Finance",
  "ziarah-tour": "Ziarah & Side Tours",
  "komunikasi-gadget": "Connectivity & Gadgets",
  "keluarga-lansia": "Family, Seniors & Accessibility",
  "haji-khusus": "Hajj-specific Services",
  "digital-tools": "Digital Tools for Pilgrims",
};

/** Compact IDR for English readers: 2100000 → "Rp 2.1M". */
function idrShort(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `Rp ${m.toLocaleString("en-US", { maximumFractionDigits: 1 })}M`;
  }
  return `Rp ${n.toLocaleString("id-ID")}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Services" });
  const title = "Umrah & Hajj Services A–Z — Visas, Flights, Hotels & More";
  const description = t("sub", { count: serviceList.length, categories: serviceCategoryList.length });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/services`, ...languageAlternates("/layanan") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/services`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Umrah & Hajj Services A–Z",
          kicker: "210 services · 14 categories",
          badge: "5-Layer Verified",
          sub: "Visas, flights, hotels, manasik, handling — transparent pricing",
          foot: "SolusiHajj · Your trust, secured.",
        }),
      ],
    },
  };
}

export default async function EnServicesPage() {
  const t = await getTranslations({ locale: "en", namespace: "Services" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const grouped = serviceCategoryList.map((cat) => ({
    cat,
    services: serviceList.filter((s) => s.categorySlug === cat.slug),
  }));

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    url: `${SITE}/en/services`,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      name: "Service categories",
      numberOfItems: serviceCategoryList.length,
      itemListElement: serviceCategoryList.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: CATEGORY_EN[cat.slug] ?? cat.name,
        url: `${SITE}/layanan/kategori/${cat.slug}`,
      })),
    },
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/layanan`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/services`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/layanan`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Services", url: `${SITE}/en/services` },
      ])} />
      <JsonLd data={collectionLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <Layers className="h-4 w-4" aria-hidden="true" /> Service catalog
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: serviceList.length, categories: serviceCategoryList.length })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Every service below is delivered by a verified provider — PPIU and PIHK license holders,
            audited handling partners and Nusuk-registered agents. Prices shown are honest
            &ldquo;from&rdquo; figures, not bait. Open any service to see scope, process, FAQ and pricing notes.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/#/kontak"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              {t("cta")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-gold-soft px-4 py-2 text-xs font-bold text-gold-deep">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {tc("verifiedBadge")}
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES GROUPED BY CATEGORY */}
      {grouped.map(({ cat, services }) => (
        <section
          key={cat.slug}
          id={cat.slug}
          aria-labelledby={`h-${cat.slug}`}
          className="border-b border-line-warm bg-white odd:bg-ivory"
        >
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id={`h-${cat.slug}`} className="flex items-center gap-2.5 text-lg font-extrabold text-brand-deep md:text-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <CategoryIcon name={cat.icon} className="h-4 w-4" />
                </span>
                {CATEGORY_EN[cat.slug] ?? cat.name}
              </h2>
              <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep">
                {services.length} service{services.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  hrefLang="id"
                  className="group flex min-h-11 flex-col rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="text-sm font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand">
                    {s.name}
                  </span>
                  {typeof s.priceFrom === "number" && s.priceFrom > 0 ? (
                    <span className="mt-1.5 text-xs font-semibold text-gold-deep">
                      From {idrShort(s.priceFrom)}
                    </span>
                  ) : (
                    <span className="mt-1.5 text-xs text-ink-muted">Quoted per group</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CROSS-LINK */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-ink-muted">
          <Link href="/layanan" hrefLang="id" className="font-semibold text-brand hover:underline">
            {tc("inIndonesian")}
          </Link>{" "}
          — all {serviceList.length} service detail pages, category hubs and the
          9,450-page service × city matrix are published in Bahasa Indonesia, the language of
          Indonesia&rsquo;s Umrah market.
        </p>
      </section>
    </>
  );
}
