import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryList, GLOSSARY_CATEGORIES } from "@/data/glossary";
import { slugify } from "@/components/seo/pkg-ui";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { PageHero, BackLink } from "@/components/seo/pkg-ui";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

/* Detail istilah glosarium — slug = slugify(term). 35 halaman statis. */

function getTermBySlug(slug: string) {
  return glossaryList.find((t) => slugify(t.term) === slug);
}

export function generateStaticParams() {
  return glossaryList.map((t) => ({ slug: slugify(t.term) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return { title: "Istilah tidak ditemukan" };
  const description = `${term.short} ${term.detail}`.slice(0, 157) + "…";
  return {
    title: `Apa Itu ${term.term}? Arti & Penjelasan Lengkap`,
    description,
    alternates: { canonical: `${SITE}/glosarium/${slugify(term.term)}` },
    openGraph: {
      title: `Apa Itu ${term.term}? Arti & Penjelasan Lengkap`,
      description,
      url: `${SITE}/glosarium/${slugify(term.term)}`,
      type: "website",
    },
  };
}

export default async function GlosariumDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const kategori = GLOSSARY_CATEGORIES.find((c) => c.key === term.category);
  const terkait = glossaryList
    .filter((t) => t.category === term.category && t.term !== term.term)
    .slice(0, 8);

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    alternateName: term.arabic,
    description: term.detail,
    inLanguage: "id-ID",
    url: `${SITE}/glosarium/${slugify(term.term)}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glosarium Istilah Haji & Umrah SolusiHajj",
      url: `${SITE}/glosarium`,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          definedTermJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Glosarium", url: "/glosarium" },
            { name: term.term, url: `/glosarium/${slugify(term.term)}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Glosarium", url: "/glosarium" },
          { name: term.term, url: `/glosarium/${slugify(term.term)}` },
        ]}
        title={term.term}
        lead={term.short}
      >
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {kategori && (
            <Badge className="border-transparent bg-gold-soft text-gold-deep">{kategori.label}</Badge>
          )}
          {term.arabic && (
            <span lang="ar" dir="rtl" className="font-amiri text-2xl leading-snug text-white">
              {term.arabic}
            </span>
          )}
        </div>
      </PageHero>

      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <BackLink href="/glosarium" label="Kembali ke Glosarium" />

        <article className="mt-6 space-y-6">
          <div className="rounded-2xl border border-line-warm bg-white p-6 md:p-8">
            <h2 className="text-lg font-extrabold text-brand-deep">
              Arti {term.term}
              {term.arabic ? ` (${term.arabic})` : ""}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted md:text-base">{term.detail}</p>
          </div>

          <div className="rounded-2xl bg-brand-soft/70 p-5 text-sm leading-relaxed text-brand-deep">
            <strong className="font-bold">Ringkasnya:</strong> {term.short}
          </div>
        </article>

        {terkait.length > 0 && kategori && (
          <section className="mt-10" aria-labelledby="istilah-terkait">
            <h2 id="istilah-terkait" className="text-xl font-extrabold tracking-tight text-brand-deep">
              Istilah Lain dalam Kategori {kategori.label}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {terkait.map((t) => (
                <li key={t.term}>
                  <Link
                    href={`/glosarium/${slugify(t.term)}`}
                    className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-line-warm bg-white px-4 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft hover:text-brand-deep"
                  >
                    {t.term}
                    <ArrowRight className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10 rounded-3xl bg-brand-deep p-6 text-center text-white md:p-8">
          <h2 className="text-xl font-extrabold tracking-tight">Paham Istilahnya, Kenali Penyelenggaranya</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
            Gunakan pemahaman istilah ini saat menilai paket: jarak hotel, mutawif, handling — semua wajib
            tertulis rinci di katalog kami.
          </p>
          <Link
            href="/paket"
            className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-gold px-5 text-sm font-bold text-ink transition-colors hover:bg-gold-soft"
          >
            Buka Katalog Paket Umrah
          </Link>
        </section>
      </div>
    </>
  );
}
