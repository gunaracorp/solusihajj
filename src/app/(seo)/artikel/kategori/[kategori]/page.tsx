import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleList, articlesByCategory } from "@/data/articles";
import { articleCategories } from "@/data/article-engine";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading, MetaChip, formatTanggal } from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3, Newspaper, GraduationCap, ArrowRight } from "lucide-react";

/* Halaman kategori artikel — 8 kategori statis, silo antar kategori & silo ke /paket. */

export function generateStaticParams() {
  return articleCategories(articleList).map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori: slug } = await params;
  const k = articleCategories(articleList).find((x) => x.slug === slug);
  if (!k) return { title: "Kategori artikel tidak ditemukan" };
  const title = `${k.name} — Artikel & Panduan Umrah Haji`;
  const description = `Kumpulan ${k.count} artikel kategori ${k.name}: panduan praktis, rincian biaya, dan tips jujur dari tim edukasi SolusiHajj — direview berkala agar tetap akurat.`;
  const ogCard = ogImage({
    title: k.name,
    kicker: "Artikel & Panduan Umrah",
    sub: `${k.count} artikel terkurasi — direview berkala tim edukasi`,
    foot: "SolusiHajj · Amanah Anda, Aman",
  });
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/artikel/kategori/${k.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/artikel/kategori/${k.slug}`,
      type: "website",
      images: [ogCard],
    },
    twitter: { card: "summary_large_image", images: [ogCard.url] },
  };
}

export default async function ArtikelKategoriPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori: slug } = await params;
  const semua = articleCategories(articleList);
  const k = semua.find((x) => x.slug === slug);
  if (!k) notFound();

  const daftar = articlesByCategory(k.name);
  const lainnya = semua.filter((x) => x.slug !== k.slug);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Artikel ${k.name}`,
    url: `${SITE}/artikel/kategori/${k.slug}`,
    isPartOf: { "@id": `${SITE}/artikel` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: daftar.length,
      itemListElement: daftar.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `${SITE}/artikel/${a.slug}`,
      })),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Artikel", url: "/artikel" },
            { name: k.name, url: `/artikel/kategori/${k.slug}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Artikel", url: "/artikel" },
          { name: k.name, url: `/artikel/kategori/${k.slug}` },
        ]}
        title={`Artikel ${k.name}`}
        lead={`Seluruh panduan kategori ${k.name} dalam satu halaman — ditulis tim edukasi SolusiHajj, direview berkala, gratis dibaca.`}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Newspaper className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {daftar.length} artikel
          </MetaChip>
          <MetaChip icon={<GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Kategori: {k.name}
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        <section aria-label={`Daftar artikel ${k.name}`}>
          <SectionHeading title={`Semua Artikel ${k.name}`} />
          <ul className="mt-5 grid gap-5 md:grid-cols-2">
            {daftar.map((a) => (
              <li key={a.slug}>
                <Card className="h-full gap-3 border-line-warm transition-shadow hover:shadow-md">
                  <CardHeader className="px-5 pt-5">
                    <Badge className="w-fit border-transparent bg-brand-soft text-brand-deep">
                      {a.category}
                    </Badge>
                    <CardTitle className="text-lg leading-snug">
                      <Link
                        href={`/artikel/${a.slug}`}
                        className="underline-offset-4 hover:text-brand hover:underline"
                      >
                        {a.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 px-5 pb-5">
                    <p className="text-sm leading-relaxed text-ink-muted">{a.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                        {a.readMinutes} menit baca
                      </span>
                      <span>Terbit {formatTanggal(a.publishedAt)}</span>
                      <span>Review terakhir {formatTanggal(a.lastReviewed)}</span>
                    </div>
                    <Button asChild variant="outline" className="min-h-11 border-brand text-brand hover:bg-brand-soft">
                      <Link href={`/artikel/${a.slug}`}>Baca artikel</Link>
                    </Button>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="kategori-lain" className="rounded-3xl border border-line-warm bg-card p-6 md:p-8">
          <h2 id="kategori-lain" className="text-xl font-extrabold tracking-tight text-brand-deep">
            Jelajahi Kategori Lain
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {lainnya.map((x) => (
              <Link
                key={x.slug}
                href={`/artikel/kategori/${x.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line-warm bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {x.name}
                <span className="ml-1.5 rounded-full bg-brand-soft px-2 text-xs font-extrabold text-brand-deep">
                  {x.count}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-brand-deep px-6 py-10 text-center text-white md:py-12" aria-label="Ajakan menjelajah katalog">
          <h2 className="text-2xl font-extrabold tracking-tight">Siap Menerapkan Ilmu Ini?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
            Bandingkan paket umrah langsung di katalog kami — setiap penyelenggara wajib menampilkan izin,
            nama hotel, jarak meter ke Haram, dan tabel pembatalan.
          </p>
          <Button asChild className="mt-6 min-h-11 bg-gold text-ink hover:bg-gold-soft">
            <Link href="/paket">
              Buka Katalog Paket Umrah <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
