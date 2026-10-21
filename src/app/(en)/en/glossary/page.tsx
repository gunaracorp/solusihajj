import type { Metadata } from "next";
import Link from "next/link";
import { BookMarked } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { slugify } from "@/components/seo/pkg-ui";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { glossaryList } from "@/data/glossary";

/**
 * /en/glossary — A–Z English glossary of 34 Hajj & Umrah terms.
 * hreflang counterpart: /glosarium (id). Full definitions open in Indonesian.
 */

/** English one-line glosses written for this page, keyed by the original term. */
const GLOSS_EN: Record<string, string> = {
  AmanahEscrow: "SolusiHajj's shariah escrow scheme — pilgrim funds held in a shariah-bank holding account and released 40/40/20 as trip milestones are met.",
  Baytullah: "Another name for the Ka'bah — the House of Allah at the heart of the Grand Mosque.",
  BPW: "Biro Perjalanan Wisata — a foreign-licensed travel bureau serving pilgrims from outside Indonesia.",
  "Bukit Marwah": "Marwah Hill — the endpoint of the sa'i walk, now inside the Grand Mosque complex.",
  "Bukit Shafa": "Safa Hill — the starting point of the sa'i, connected to the air-conditioned Mas'aa corridor.",
  Handling: "The airport teams that process documents, immigration and luggage for pilgrim groups — often the difference between a calm arrival and hours in queues.",
  "Hafizh Track": "A digital tracking feature that lets family back home follow the group's journey and reach a coordinator in an emergency.",
  "Haji Furoh": "Off-season Hajj — the same Hajj rites performed outside the Dhul-Hijjah peak, usually cheaper with shorter queues.",
  "Haji Khusus": "Special Hajj through an official PIHK quota — no years-long government wait, paid at full cost.",
  Ihram: "The state of consecration entered at the miqat with the intention and talbiyah — for men, two unstitched white cloths.",
  "Istilam Hajar": "Kissing — or, in crowds, gesturing toward — the Black Stone at the start of each tawaf circuit.",
  Jamarat: "The three stone-throwing pillars at Mina, symbolic of rejecting temptation — a Hajj-only ritual.",
  "Jamiatul Falah": "The standard gathering complex for Indonesian pilgrim groups in Madinah, right across from the Prophet's Mosque.",
  KBIHU: "Hajj & Umrah bureau consultants who handle paperwork and manasik training — they advise, but may not operate tours.",
  "Kubah Hijau": "The Green Dome of the Prophet's Mosque, marking the Rawdah and the tomb of the Prophet ﷺ.",
  "Lorong Mas'aa": "The ±450-metre sa'i corridor between Safa and Marwah — four air-conditioned floors built for thousands per hour.",
  "Maqam Ibrahim": "The Station of Ibrahim — the glass enclosure where the two-rakaat prayer after tawaf is offered.",
  Miqat: "The fixed boundary past which no pilgrim may proceed without being in ihram.",
  Misk: "The Nusuk-issued entry card that grants Haram access during peak hours, one per visa holder.",
  Muhassab: "The valley between Mina and Makkah (also called Al-Abtah), a traditional rest point after the Mina rites.",
  Muthawif: "The certified ritual guide who walks your group through every rite — the single biggest factor in how your pilgrimage feels.",
  "NurMatch AI": "SolusiHajj's recommendation engine that matches your budget, city and priorities to real packages — and shows its reasoning.",
  Nusuk: "Saudi Arabia's official Hajj & Umrah platform — where every Umrah visa, Raudhah permit and entry slot is issued.",
  "Paket Plus": "Umrah-plus packages that add leisure stops such as Türkiye, Dubai or Cairo to the Holy Cities itinerary.",
  "Pembatas Area": "Madinah's central hotel district, roughly 100–400 m from the Prophet's Mosque gates.",
  PIHK: "Penyelenggara Ibadah Haji Khusus — operators holding official special-Hajj quotas from Kemenag.",
  PPIU: "Penyelenggara Perjalanan Ibadah Umrah — Kemenag-licensed Umrah travel organizers; the license to check before you pay anyone.",
  Raudhah: "The area in the Prophet's Mosque between the pulpit and the Prophet's ﷺ home — revered as a garden of paradise, entered by Nusuk slot.",
  "Saksi Jamaah": "SolusiHajj's review system — only pilgrims who completed a booked trip through escrow can write a review.",
  Talbiyah: "The pilgrim's invocation — 'Labbayk Allahumma labbayk' — repeated from the miqat throughout ihram.",
  Tahallul: "Shaving or trimming the hair at the end of Umrah, which lifts the ihram restrictions.",
  Tawaf: "Seven counter-clockwise circuits around the Ka'bah, begun and ended level with the Black Stone.",
  Zamzam: "The sacred water from the well inside the Grand Mosque — freely given, never sold around the Haram.",
  Ziarah: "Guided visits to the Islamic historical sites of Makkah and Madinah outside the obligatory rites.",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Glossary" });
  const title = "Hajj & Umrah Glossary A–Z — PPIU, Miqat, Tawaf & Escrow Explained";
  const description = t("sub", { count: glossaryList.length });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/glossary`, ...languageAlternates("/glosarium") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/glossary`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Hajj & Umrah Glossary A–Z",
          kicker: `${glossaryList.length} essential terms`,
          badge: "Plain language",
          sub: "PPIU, miqat, tawaf, escrow — defined without jargon",
          foot: "SolusiHajj",
        }),
      ],
    },
  };
}

export default async function EnGlossaryPage() {
  const t = await getTranslations({ locale: "en", namespace: "Glossary" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const letters = [...new Set(glossaryList.map((g) => g.term.charAt(0).toUpperCase()))].sort();
  const groups = letters.map((letter) => ({
    letter,
    terms: glossaryList.filter((g) => g.term.charAt(0).toUpperCase() === letter),
  }));

  const definedTermSetLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: t("title"),
    url: `${SITE}/en/glossary`,
    inLanguage: "en",
    itemListElement: glossaryList.map((g, i) => ({
      "@type": "DefinedTerm",
      position: i + 1,
      name: g.term,
      url: `${SITE}/glosarium/${slugify(g.term)}`,
    })),
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/glosarium`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/glossary`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/glosarium`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Glossary", url: `${SITE}/en/glossary` },
      ])} />
      <JsonLd data={definedTermSetLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <BookMarked className="h-4 w-4" aria-hidden="true" /> A–Z reference
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: glossaryList.length })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            The vocabulary of Umrah and Hajj is mostly Indonesian-Arabic — PPIU, manasik, mutawif,
            escrow with an Islamic contract structure. These one-line glosses give you the meaning
            fast; the linked term pages carry the full definition in Indonesian.
          </p>
          <nav aria-label="Alphabet" className="mt-5 flex flex-wrap gap-1.5">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-lg border border-line-warm bg-white px-2 text-sm font-bold text-brand-deep transition-colors hover:border-brand hover:text-brand"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* TERMS A–Z */}
      {groups.map(({ letter, terms }) => (
        <section key={letter} id={`letter-${letter}`} aria-labelledby={`h-letter-${letter}`} className="border-b border-line-warm bg-white odd:bg-ivory">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <h2 id={`h-letter-${letter}`} className="text-lg font-extrabold text-brand-deep">
              {letter}
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {terms.map((g) => (
                <div key={g.term} className="rounded-2xl border border-line-warm bg-white p-4">
                  <dt className="text-sm font-bold text-brand-deep">
                    {g.arabic ? <span className="mr-2 text-base" lang="ar">{g.arabic}</span> : null}
                    {g.term}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {GLOSS_EN[g.term] ?? g.short}
                    <a
                      href={`/glosarium/${slugify(g.term)}`}
                      hrefLang="id"
                      className="ml-1.5 inline-flex min-h-11 items-center font-semibold text-brand hover:underline sm:min-h-0"
                    >
                      Full definition →
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      {/* CROSS-LINK */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-ink-muted">
          <Link href="/glosarium" hrefLang="id" className="font-semibold text-brand hover:underline">
            {tc("inIndonesian")}
          </Link>{" "}
          — the complete glossary with categories, Arabic script and multi-paragraph detail
          pages lives in Bahasa Indonesia.
        </p>
      </section>
    </>
  );
}
