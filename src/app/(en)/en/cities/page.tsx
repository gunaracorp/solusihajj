import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, PlaneTakeoff } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { cityList } from "@/data/cities";

/**
 * /en/cities — all 45 departure cities grouped by island.
 * hreflang counterpart: /kota (id). City landing pages open in Indonesian.
 */

const ISLAND_ORDER = ["Jawa", "Sumatera", "Kalimantan", "Sulawesi", "Bali & Nusa Tenggara", "Papua & Maluku"];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Cities" });
  const title = "Departure Cities — Umrah from 45 Indonesian Airports";
  const description = t("sub", { count: cityList.length });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/cities`, ...languageAlternates("/kota") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/cities`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "45 Departure Cities Across Indonesia",
          kicker: "Airports · flight times · charters",
          chip: "CGK",
          badge: "Direct charters available",
          sub: "From Jakarta to Jayapura — find your nearest Umrah gateway",
          foot: "SolusiHajj",
        }),
      ],
    },
  };
}

export default async function EnCitiesPage() {
  const t = await getTranslations({ locale: "en", namespace: "Cities" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const islands = ISLAND_ORDER.map((island) => ({
    island,
    cities: cityList.filter((c) => c.island === island),
  })).filter((g) => g.cities.length > 0);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("title"),
    url: `${SITE}/en/cities`,
    numberOfItems: cityList.length,
    itemListElement: cityList.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${c.name} (${c.airportCode})`,
      url: `${SITE}/kota/${c.slug}`,
    })),
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/kota`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/cities`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/kota`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Departure cities", url: `${SITE}/en/cities` },
      ])} />
      <JsonLd data={itemListLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Nationwide coverage
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: cityList.length })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            For each city we list the international airport, the typical flight time to Saudi Arabia,
            and whether group charter flights operate directly from that city. Jakarta, Surabaya,
            Medan and Makassar carry regular charters; most other cities connect through transit —
            every card tells you which one applies before you commit to a departure date.
          </p>
        </div>
      </section>

      {/* CITIES BY ISLAND */}
      {islands.map(({ island, cities }) => (
        <section key={island} aria-labelledby={`h-${cities[0]?.slug ?? island}`} className="border-b border-line-warm bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id={`h-${cities[0]?.slug ?? island}`} className="text-lg font-extrabold text-brand-deep md:text-xl">
                {island}
              </h2>
              <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep">
                {cities.length} cit{cities.length === 1 ? "y" : "ies"}
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/kota/${city.slug}`}
                  hrefLang="id"
                  className="group flex min-h-11 flex-col rounded-2xl border border-line-warm bg-ivory p-5 transition-all hover:border-brand/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="text-base font-bold text-brand-deep transition-colors group-hover:text-brand">
                      {city.name}
                    </span>
                    <span className="shrink-0 rounded-md border border-line-warm bg-white px-2 py-0.5 text-[11px] font-extrabold tracking-wide text-ink-muted">
                      {city.airportCode}
                    </span>
                  </span>
                  <span className="mt-0.5 text-xs text-ink-muted">{city.province}</span>
                  <span className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
                    <PlaneTakeoff className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="truncate">{city.airport}</span>
                  </span>
                  <span className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
                    <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>± {city.flightTimeHours.toLocaleString("en-US", { maximumFractionDigits: 1 })} h flight to Jeddah</span>
                  </span>
                  <span className="mt-3">
                    {city.directCharter ? (
                      <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                        Direct charter available
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-line-warm bg-white px-3 py-1 text-xs font-semibold text-ink-muted">
                        Via transit
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CROSS-LINK */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-ink-muted">
          <Link href="/kota" hrefLang="id" className="font-semibold text-brand hover:underline">
            {tc("inIndonesian")}
          </Link>{" "}
          — every city landing page (local prices, charter schedules, FAQ) is published in
          Bahasa Indonesia.
        </p>
      </section>
    </>
  );
}
