import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { articleList } from "@/data/articles";
import { articleCategories } from "@/data/article-engine";

/**
 * /en/articles — English window on the 112-article knowledge hub.
 * hreflang counterpart: /artikel (id). Full articles are published in Indonesian.
 */

const CATEGORY_EN: Record<string, string> = {
  "keamanan-dan-verifikasi": "Safety & Verification",
  "biaya-dan-keuangan": "Costs & Money",
  "panduan-umrah": "Umrah Planning",
  "manasik-dan-doa": "Manasik & Prayers",
  "visa-dan-dokumen": "Visas & Documents",
  "hotel-dan-transportasi": "Hotels & Transport",
  "keluarga-dan-lansia": "Family & Seniors",
  "musim-dan-waktu-keberangkatan": "Seasons & Timing",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Articles" });
  const title = "Guides & Knowledge Hub — 112 Expert Umrah & Hajj Articles";
  const description = t("sub", { count: articleList.length });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/articles`, ...languageAlternates("/artikel") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/articles`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Guides & Knowledge Hub",
          kicker: `${articleList.length} E-E-A-T articles`,
          badge: "Reviewed by practitioners",
          sub: "Rituals, visas, budgets, hotels and family travel",
          foot: "Full articles in Indonesian",
        }),
      ],
    },
  };
}

export default async function EnArticlesPage() {
  const t = await getTranslations({ locale: "en", namespace: "Articles" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  const categories = articleCategories(articleList).map((cat) => ({
    ...cat,
    label: CATEGORY_EN[cat.slug] ?? cat.name,
    articles: articleList.filter((a) => a.category === cat.name),
  }));

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    url: `${SITE}/en/articles`,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      name: "Knowledge hub articles",
      numberOfItems: articleList.length,
      itemListElement: articleList.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `${SITE}/artikel/${a.slug}`,
      })),
    },
  };

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/artikel`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/articles`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/artikel`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "Guides", url: `${SITE}/en/articles` },
      ])} />
      <JsonLd data={collectionLd} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Knowledge hub
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {t("sub", { count: articleList.length })}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Titles and excerpts below appear in their original language on purpose — these are the
            real articles, not machine translations. Every guide carries a named author, a
            publication date and a last-reviewed date, and the series is anchored to verifiable
            regulation: PMA 21/2020, Nusuk procedures, and realistic 2026 pricing.
          </p>
        </div>
      </section>

      {/* ARTICLES BY CATEGORY */}
      {categories.map((cat) => (
        <section key={cat.slug} aria-labelledby={`h-${cat.slug}`} className="border-b border-line-warm bg-white odd:bg-ivory">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id={`h-${cat.slug}`} className="text-lg font-extrabold text-brand-deep md:text-xl">
                {cat.label}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-ink-muted">Original: {cat.name}</span>
                <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep">
                  {cat.count} article{cat.count === 1 ? "" : "s"}
                </span>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artikel/${a.slug}`}
                  hrefLang="id"
                  className="group flex min-h-11 flex-col rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="text-sm font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand">
                    {a.title}
                  </span>
                  <span className="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-muted">
                    {a.excerpt}
                  </span>
                  <span className="mt-auto pt-3 text-[11px] font-semibold uppercase tracking-wide text-ink-muted/80">
                    {a.author} · {a.readMinutes} min read
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
          <Link href="/artikel" hrefLang="id" className="font-semibold text-brand hover:underline">
            {tc("inIndonesian")}
          </Link>{" "}
          — full articles, category hubs and search are published in Indonesian, where our
          editorial team writes closest to the source.
        </p>
      </section>
    </>
  );
}
