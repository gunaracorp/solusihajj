import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { packageList } from "@/data/packages";

/**
 * /en/compare — static English landing explaining what SolusiHajj compares,
 * with a snapshot table of the 5 top-rated packages.
 * hreflang counterpart: /bandingkan (id) — the interactive comparison tool.
 */

const COMPARE_AXES = [
  {
    title: "Price, with the arithmetic shown",
    body: "Base price per person in the stated room type, plus every date-level delta — so a low headline number cannot hide a high-season surcharge.",
  },
  {
    title: "Duration that respects the ritual",
    body: "Days matter: a 9-day trip and a 12-day trip are not the same product. We put duration next to price so you compare value, not just cost.",
  },
  {
    title: "Hotel distance to the Haram, in meters",
    body: "The single biggest comfort driver in Makkah. Every package names its hotel and the measured walking distance — not 'near', not 'close to'.",
  },
  {
    title: "Ratings from pilgrims who finished the trip",
    body: "Scores come only from completed, escrow-verified journeys, weighted across six dimensions including honesty, mutawif and handling.",
  },
  {
    title: "Escrow protection on every deal",
    body: "Whatever you compare, the 40/40/20 release schedule applies — your money stays protected while you shop between operators.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Compare" });
  const title = "Compare Umrah Packages — Price, Duration, Hotel Distance & Ratings";
  const description = t("sub");
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/compare`, ...languageAlternates("/bandingkan") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/compare`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Compare Umrah Packages Side by Side",
          kicker: "Price · duration · hotel distance · rating",
          rating: 4.9,
          badge: "Escrow 40/40/20",
          sub: "See what actually differs before you book",
          foot: "SolusiHajj",
        }),
      ],
    },
  };
}

export default async function EnComparePage() {
  const t = await getTranslations({ locale: "en", namespace: "Compare" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const top5 = [...packageList].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top-rated Umrah packages",
    url: `${SITE}/en/compare`,
    numberOfItems: top5.length,
    itemListElement: top5.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pkg.title,
      url: `${SITE}/paket/${pkg.slug}`,
    })),
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/bandingkan`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/compare`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/bandingkan`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Compare", url: `${SITE}/en/compare` },
      ])} />
      <JsonLd data={itemListLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <Scale className="h-4 w-4" aria-hidden="true" /> Side by side
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">{t("sub")}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Most Umrah comparisons stop at price. That is how pilgrims end up in a hotel two
            kilometres from the Haram with a bus that never arrives. SolusiHajj compares the five
            things that actually shape your journey — and refuses to normalize marketing claims
            into data points.
          </p>
        </div>
      </section>

      {/* WHAT WE COMPARE */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-extrabold text-brand-deep md:text-2xl">What SolusiHajj compares</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARE_AXES.map((axis) => (
            <article key={axis.title} className="rounded-2xl border border-line-warm bg-white p-5">
              <p className="text-sm font-extrabold text-brand-deep">{axis.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{axis.body}</p>
            </article>
          ))}
          <article className="rounded-2xl border border-line-warm bg-gold-soft/50 p-5">
            <p className="text-sm font-extrabold text-gold-deep">The one thing you never compare</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Trust should not be a tiebreaker — it is the baseline. Every operator in a SolusiHajj
              comparison has already passed 5-layer verification before the first column is drawn.
            </p>
          </article>
        </div>
      </section>

      {/* SNAPSHOT TABLE */}
      <section className="border-y border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl font-extrabold text-brand-deep md:text-2xl">
            Snapshot: the 5 top-rated packages right now
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            A static snapshot of the live catalog, sorted by pilgrim rating. Package names are shown
            in their original language; full itineraries and cancellation terms live on each
            package&rsquo;s detail page in Indonesian.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line-warm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Top 5 Umrah packages by pilgrim rating</caption>
              <thead>
                <tr className="border-b border-line-warm bg-ivory text-xs uppercase tracking-wide text-ink-muted">
                  <th scope="col" className="px-4 py-3 font-bold">Package</th>
                  <th scope="col" className="px-4 py-3 font-bold">Duration</th>
                  <th scope="col" className="px-4 py-3 font-bold">Departs from</th>
                  <th scope="col" className="px-4 py-3 font-bold">Makkah hotel → Haram</th>
                  <th scope="col" className="px-4 py-3 font-bold">Rating</th>
                  <th scope="col" className="px-4 py-3 font-bold">From</th>
                </tr>
              </thead>
              <tbody>
                {top5.map((pkg) => (
                  <tr key={pkg.slug} className="border-b border-line-warm last:border-b-0 hover:bg-ivory/60">
                    <th scope="row" className="max-w-xs px-4 py-4 font-semibold text-brand-deep">
                      <Link href={`/paket/${pkg.slug}`} hrefLang="id" className="inline-flex min-h-11 items-center hover:text-brand hover:underline sm:min-h-0">
                        {pkg.title}
                      </Link>
                    </th>
                    <td className="px-4 py-4 text-ink">{pkg.durationDays} days</td>
                    <td className="px-4 py-4 text-ink">{pkg.departCity}</td>
                    <td className="px-4 py-4 text-ink">
                      {pkg.hotelMakkah.name} — {pkg.hotelMakkah.distanceToHaram} m
                      (± {pkg.hotelMakkah.walkMinutes} min walk)
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2.5 py-1 text-xs font-bold text-gold-deep">
                        <Star className="h-3 w-3" aria-hidden="true" /> {pkg.rating.toFixed(1)}
                        <span className="font-medium text-gold-deep/80">({pkg.reviewCount})</span>
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-brand-deep">
                      Rp {pkg.basePrice.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TOOL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-line-warm bg-white p-6 md:p-8">
          <h2 className="text-lg font-extrabold text-brand-deep md:text-xl">
            Want to pick the columns yourself?
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            The interactive comparison tool lets you select any packages from the live catalog and
            compare them across price, duration, hotel distance, rating and escrow terms — including
            per-date pricing deltas. It is part of the Indonesian portal, where the full catalog
            lives.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/bandingkan"
              hrefLang="id"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Open the comparison tool <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/en/packages"
              className="inline-flex min-h-11 items-center rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:border-brand"
            >
              Browse all packages in English
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/bandingkan" hrefLang="id" className="font-semibold text-brand hover:underline">
              {tc("inIndonesian")}
            </Link>{" "}
            — bandingkan paket secara interaktif dalam Bahasa Indonesia.
          </p>
        </div>
      </section>
    </>
  );
}
