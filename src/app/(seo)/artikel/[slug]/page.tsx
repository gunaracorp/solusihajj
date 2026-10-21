import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleList, getArticle } from "@/data/articles";
import type { ArticleBlock } from "@/data/types";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading, formatTanggal, CtaKontak } from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3, CalendarCheck, UserRound, ShieldCheck } from "lucide-react";

/* Detail artikel — 4 halaman statis dengan renderer ArticleBlock. */

export function generateStaticParams() {
  return articleList.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const art = getArticle(slug);
  if (!art) return { title: "Artikel tidak ditemukan" };
  const description = art.excerpt.length > 157 ? art.excerpt.slice(0, 157) + "…" : art.excerpt;
  const ogCard = ogImage({
    title: art.title,
    kicker: "Artikel & Panduan Umrah",
    sub: art.excerpt,
    foot: `${art.author} · ${art.publishedAt}`,
  });
  return {
    title: art.title,
    description,
    alternates: { canonical: `${SITE}/artikel/${art.slug}` },
    openGraph: {
      title: art.title,
      description,
      url: `${SITE}/artikel/${art.slug}`,
      type: "article",
      publishedTime: art.publishedAt,
      modifiedTime: art.lastReviewed,
      authors: [art.author],
      images: [ogCard],
    },
    twitter: { card: "summary_large_image", images: [ogCard.url] },
  };
}

/** ctaTo callout: "/paket" adalah rute SEO asli; lainnya adalah view SPA hash-route. */
function calloutHref(ctaTo: string): string {
  return ctaTo === "/paket" ? "/paket" : `/#${ctaTo}`;
}

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[15px] leading-relaxed text-ink-muted md:text-base">{block.text}</p>;
    case "h2":
      return <h2 className="pt-4 text-2xl font-extrabold tracking-tight text-brand-deep">{block.text}</h2>;
    case "h3":
      return <h3 className="pt-2 text-lg font-bold text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-muted md:text-base">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-ink-muted md:text-base">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "arabic":
      return (
        <figure className="rounded-2xl border border-line-warm bg-gold-soft/40 p-5 text-center">
          <p lang="ar" dir="rtl" className="font-amiri text-2xl leading-loose text-ink md:text-3xl">
            {block.text}
          </p>
          <figcaption className="mt-3 text-sm italic leading-relaxed text-ink-muted">
            {block.translation}
          </figcaption>
        </figure>
      );
    case "callout":
      return (
        <aside className="rounded-2xl border border-brand/25 bg-brand-soft/70 p-5">
          <p className="flex items-center gap-2 font-bold text-brand-deep">
            <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
            {block.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{block.text}</p>
          <Link
            href={calloutHref(block.ctaTo)}
            className="mt-3 inline-flex min-h-11 items-center rounded-xl bg-brand px-4 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
          >
            {block.ctaLabel}
          </Link>
        </aside>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-line-warm">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-brand-soft/60 text-left">
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-brand-deep">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line-warm bg-white">
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold text-ink" : "text-ink-muted"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const art = getArticle(slug);
  if (!art) notFound();

  const related = art.related
    .map((r) => getArticle(r))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: art.title,
    description: art.excerpt,
    datePublished: art.publishedAt,
    dateModified: art.lastReviewed,
    author: { "@type": "Organization", name: art.author },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: `${SITE}/artikel/${art.slug}`,
    articleSection: art.category,
    inLanguage: "id-ID",
  };

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Artikel", url: "/artikel" },
            { name: art.title, url: `/artikel/${art.slug}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Artikel", url: "/artikel" },
          { name: art.title, url: `/artikel/${art.slug}` },
        ]}
        title={art.title}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="h-4 w-4 text-gold" aria-hidden="true" />
            {art.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarCheck className="h-4 w-4 text-gold" aria-hidden="true" />
            Terbit {formatTanggal(art.publishedAt)} · Review terakhir {formatTanggal(art.lastReviewed)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />
            {art.readMinutes} menit baca
          </span>
          <Badge className="border-transparent bg-gold-soft text-gold-deep">{art.category}</Badge>
        </div>
      </PageHero>

      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <article className="space-y-5">
          <p className="text-lg font-medium leading-relaxed text-ink">{art.excerpt}</p>
          {art.blocks.map((b, i) => (
            <BlockRenderer key={i} block={b} />
          ))}
        </article>

        <div className="mt-10 rounded-3xl bg-brand-deep p-6 text-center text-white md:p-8">
          <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
            Siap Melangkah? Bandingkan Paket dengan Standar Transparansi Ini
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
            Katalog SolusiHajj memaksa setiap penyelenggara menampilkan izin, hotel, jarak meter, dan tabel
            pembatalan — persis seperti yang Anda pelajari di artikel ini.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild className="min-h-11 bg-gold text-ink hover:bg-gold-soft">
              <Link href="/paket">Lihat Katalog Paket</Link>
            </Button>
            <CtaKontak label="Tanya Tim Kami" className="border border-white/30 bg-transparent hover:bg-white/10" />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-12" aria-labelledby="artikel-terkait">
            <SectionHeading id="artikel-terkait" title="Artikel Terkait" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Card className="h-full gap-2 border-line-warm py-5">
                    <CardHeader className="px-5">
                      <Badge className="w-fit border-transparent bg-brand-soft text-brand-deep">{r.category}</Badge>
                      <CardTitle className="text-sm leading-snug">
                        <Link
                          href={`/artikel/${r.slug}`}
                          className="underline-offset-4 hover:text-brand hover:underline"
                        >
                          {r.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-5">
                      <p className="text-xs text-ink-muted">
                        {r.readMinutes} menit baca · review {formatTanggal(r.lastReviewed)}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
