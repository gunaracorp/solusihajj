import type { Metadata } from "next";
import Link from "next/link";
import { glossaryList, GLOSSARY_CATEGORIES } from "@/data/glossary";
import { slugify } from "@/components/seo/pkg-ui";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { PageHero, MetaChip } from "@/components/seo/pkg-ui";
import { BookMarked, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* Indeks glosarium istilah haji & umrah — grouped by kategori + anchor jump. */

export const metadata: Metadata = {
  title: "Glosarium Istilah Haji & Umrah A–Z (Arti + Penjelasan)",
  description:
    "Daftar istilah haji dan umrah beserta artinya: ihram, tawaf, sa'i, miqat, muthawif, PIHK, Nusuk, dan puluhan istilah lain. Jawaban ringkas untuk pencarian 'apa itu X'.",
  alternates: { canonical: `${SITE}/glosarium`, ...languageAlternates("/glosarium") },
  openGraph: {
    title: "Glosarium Istilah Haji & Umrah A–Z",
    description:
      "Arti istilah haji & umrah: ihram, tawaf, miqat, muthawif, PIHK, Nusuk, dan puluhan lainnya — ringkas, jujur, mudah dipahami jamaah awam.",
    url: `${SITE}/glosarium`,
    type: "website",
    images: [
      ogImage({
        title: "Glosarium Istilah Haji & Umrah A–Z",
        kicker: "Kamus Jamaah",
        sub: "Ihram, tawaf, miqat, muthawif, PIHK, Nusuk — arti & penjelasan ringkas",
        foot: "Jawaban untuk pencarian “apa itu X”",
      }),
    ],
  },
};

export default function GlosariumIndexPage() {
  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glosarium Istilah Haji & Umrah SolusiHajj",
    description:
      "Kumpulan istilah ibadah haji dan umrah beserta definisi ringkas untuk jamaah Indonesia.",
    url: `${SITE}/glosarium`,
    numberOfItems: glossaryList.length,
    hasDefinedTerm: glossaryList.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.short,
      url: `${SITE}/glosarium/${slugify(t.term)}`,
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Istilah Haji & Umrah",
    numberOfItems: glossaryList.length,
    itemListElement: glossaryList.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.term,
      url: `${SITE}/glosarium/${slugify(t.term)}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          definedTermSetJsonLd,
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Glosarium", url: "/glosarium" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Glosarium", url: "/glosarium" },
        ]}
        title="Glosarium Istilah Haji & Umrah"
        lead="Semua istilah yang akan Anda dengar sebelum dan selama berangkat — dijelaskan satu per satu tanpa jargon berputar. Klik istilah untuk membaca penjelasan lengkapnya."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<BookMarked className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {glossaryList.length} istilah
          </MetaChip>
          <MetaChip icon={<Languages className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {GLOSSARY_CATEGORIES.length} kategori
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Anchor jump kategori */}
        <nav aria-label="Kategori glosarium" className="mb-10 flex flex-wrap gap-2">
          {GLOSSARY_CATEGORIES.map((c) => (
            <a
              key={c.key}
              href={`#kat-${c.key}`}
              className="inline-flex min-h-11 items-center rounded-xl border border-line-warm bg-white px-4 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-soft"
            >
              {c.label}
              <span className="ml-1.5 text-xs font-normal text-ink-muted">
                ({glossaryList.filter((t) => t.category === c.key).length})
              </span>
            </a>
          ))}
        </nav>

        {GLOSSARY_CATEGORIES.map((c) => {
          const terms = glossaryList.filter((t) => t.category === c.key);
          return (
            <section key={c.key} id={`kat-${c.key}`} className="mb-12 scroll-mt-24" aria-labelledby={`judul-${c.key}`}>
              <h2 id={`judul-${c.key}`} className="mb-5 text-2xl font-extrabold tracking-tight text-brand-deep">
                {c.label}
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {terms.map((t) => (
                  <li key={t.term} id={`istilah-${slugify(t.term)}`} className="scroll-mt-24">
                    <article className="h-full rounded-2xl border border-line-warm bg-white p-5 transition-shadow hover:shadow-md">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-extrabold text-ink">
                          <Link
                            href={`/glosarium/${slugify(t.term)}`}
                            className="underline-offset-4 hover:text-brand hover:underline"
                          >
                            {t.term}
                          </Link>
                        </h3>
                        {t.arabic && (
                          <span lang="ar" dir="rtl" className="font-amiri text-lg text-brand-deep">
                            {t.arabic}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.short}</p>
                      <Badge variant="outline" className="mt-3 border-line-warm font-normal text-ink-muted">
                        {c.label}
                      </Badge>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
