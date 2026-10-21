import type { Metadata } from "next";
import Link from "next/link";
import { articleList } from "@/data/articles";
import { articleCategories } from "@/data/article-engine";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading, MetaChip, formatTanggal } from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock3, Newspaper, GraduationCap } from "lucide-react";

/* Indeks artikel edukasi — grouped by category. */

export const metadata: Metadata = {
  title: "Artikel & Panduan Umrah Haji — Edukasi Bebas Penipuan",
  description:
    "Kumpulan panduan umrah terkurasi: cara cek izin PPIU, rincian biaya 2026, persiapan 30 hari sebelum berangkat, hingga kumpulan doa & ziarah. Ditulis tim edukasi dan direview berkala.",
  alternates: { canonical: `${SITE}/artikel` },
  openGraph: {
    title: "Artikel & Panduan Umrah Haji — Edukasi Bebas Penipuan",
    description:
      "Panduan umrah terkurasi: cek izin PPIU, rincian biaya 2026, persiapan 30 hari, dan kumpulan doa & ziarah — direview berkala oleh tim edukasi SolusiHajj.",
    url: `${SITE}/artikel`,
    type: "website",
    images: [
      ogImage({
        title: "Artikel & Panduan Umrah Haji",
        kicker: "Edukasi Bebas Penipuan",
        sub: "Cek izin PPIU, biaya 2026, persiapan 30 hari, doa & ziarah",
        foot: "Direview berkala tim edukasi",
      }),
    ],
  },
};

export default function ArtikelIndexPage() {
  const kategori = articleCategories(articleList);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Artikel & Panduan SolusiHajj",
    description:
      "Edukasi umrah & haji: verifikasi izin, perencanaan biaya, persiapan keberangkatan, doa dan ziarah.",
    url: `${SITE}/artikel`,
    publisher: { "@id": `${SITE}/#organization` },
    blogPost: articleList.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE}/artikel/${a.slug}`,
      datePublished: a.publishedAt,
      dateModified: a.lastReviewed,
      author: { "@type": "Organization", name: a.author },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Artikel Umrah & Haji",
    numberOfItems: articleList.length,
    itemListElement: articleList.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `${SITE}/artikel/${a.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          blogJsonLd,
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Artikel", url: "/artikel" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Artikel", url: "/artikel" },
        ]}
        title="Artikel & Panduan Umrah Haji"
        lead="Edukasi yang jujur sebelum Anda menyerahkan amanah: verifikasi penyelenggara, perencanaan biaya, persiapan fisik dan hati — semuanya gratis dibaca."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Newspaper className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {articleList.length} artikel terkurasi
          </MetaChip>
          <MetaChip icon={<GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {kategori.length} kategori
          </MetaChip>
        </div>
        {/* Chips kategori — anchor jump ke tiap section (silo internal) */}
        <nav aria-label="Kategori artikel" className="mt-5 flex flex-wrap gap-2">
          {kategori.map((k) => (
            <a
              key={k.slug}
              href={`#kat-${k.slug}`}
              className="inline-flex min-h-10 items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {k.name}
              <span className="ml-1.5 rounded-full bg-gold px-2 text-xs font-extrabold text-ink">{k.count}</span>
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {kategori.map((k) => {
          const daftar = articleList.filter((a) => a.category === k.name);
          const pratinjau = daftar.slice(0, 6);
          return (
            <section key={k.slug} aria-labelledby={`kat-${k.slug}`} className="scroll-mt-24">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <SectionHeading id={`kat-${k.slug}`} title={k.name} />
                {daftar.length > 6 && (
                  <Link
                    href={`/artikel/kategori/${k.slug}`}
                    className="inline-flex min-h-10 items-center rounded-xl border border-brand px-4 text-sm font-bold text-brand transition-colors hover:bg-brand-soft"
                  >
                    Lihat semua {daftar.length} artikel →
                  </Link>
                )}
              </div>
              <ul className="mt-5 grid gap-5 md:grid-cols-2">
                {pratinjau.map((a) => (
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
          );
        })}

        <section className="rounded-3xl bg-brand-deep px-6 py-10 text-center text-white md:py-12" aria-label="Ajakan menjelajah katalog">
          <BookOpen className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Sudah Paham Aturannya? Waktunya Bandingkan Paket</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
            Terapkan ilmu dari artikel ini langsung di katalog kami: semua paket mencantumkan nomor izin
            penyelenggara, nama hotel, jarak meter ke Haram, dan tabel pembatalan.
          </p>
          <Button asChild className="mt-6 min-h-11 bg-gold text-ink hover:bg-gold-soft">
            <Link href="/paket">Buka Katalog Paket Umrah</Link>
          </Button>
        </section>
      </div>
    </>
  );
}
