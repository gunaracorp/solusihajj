import type { Metadata } from "next";
import Link from "next/link";
import { ppiuList, orgOf, countryOf } from "@/data/ppiu";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import {
  PageHero,
  SectionHeading,
  MetaChip,
  TierBadge,
  OrgBadge,
  RatingStars,
  LocationChip,
} from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Globe2, Users, Star, ShieldCheck } from "lucide-react";

/* Indeks penyelenggara — 18 PPIU/PIHK/BPW/KBIHU grouped by negara. */

export const metadata: Metadata = {
  title: "Daftar PPIU & Penyelenggara Umrah Terverifikasi (18 Organisasi, 5 Negara)",
  description:
    "Profil penyelenggara terverifikasi Verifikasi 5 Lapis: PPIU & PIHK Indonesia, BPW Malaysia, Singapura, Brunei, dan Thailand. Rating Saksi Jamaah, izin, dan statistik jamaah.",
  alternates: { canonical: `${SITE}/ppiu` },
  openGraph: {
    title: "Daftar PPIU & Penyelenggara Umrah Terverifikasi",
    description:
      "18 penyelenggara terverifikasi di 5 negara Asia: rating per 6 dimensi, nomor izin, statistik jamaah, dan paket milik masing-masing penyelenggara.",
    url: `${SITE}/ppiu`,
    type: "website",
    images: [
      ogImage({
        title: "Penyelenggara Umrah Terverifikasi",
        kicker: "18 Organisasi · 5 Negara",
        badge: "Verifikasi 5 Lapis",
        sub: "PPIU & PIHK Indonesia, BPW Malaysia, Singapura, Brunei, Thailand",
        foot: "Rating per 6 dimensi · izin · statistik jamaah",
      }),
    ],
  },
};

export default function PpiuIndexPage() {
  const negaraGrup = [...new Set(ppiuList.map(countryOf))].sort((a, b) => a.localeCompare(b, "id"));
  const totalJamaah = ppiuList.reduce((s, p) => s + p.jamaahSent, 0);
  const totalReview = ppiuList.reduce((s, p) => s + p.reviewCount, 0);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Penyelenggara Terverifikasi SolusiHajj",
    numberOfItems: ppiuList.length,
    itemListElement: ppiuList.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE}/ppiu/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Penyelenggara", url: "/ppiu" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Penyelenggara", url: "/ppiu" },
        ]}
        title="Penyelenggara Terverifikasi — PPIU, PIHK, BPW & KBIHU"
        lead="Seluruh penyelenggara di halaman ini lolos Verifikasi 5 Lapis: izin resmi, audit kantor, legalitas rekening, track record jamaah, dan pemantauan kuartalan. Kontrak perjalanan dibuat langsung dengan mereka."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Building2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {ppiuList.length} organisasi
          </MetaChip>
          <MetaChip icon={<Globe2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {negaraGrup.length} negara
          </MetaChip>
          <MetaChip icon={<Users className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {totalJamaah.toLocaleString("id-ID")} jamaah terlayani
          </MetaChip>
          <MetaChip icon={<Star className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {totalReview.toLocaleString("id-ID")} review Saksi Jamaah
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {negaraGrup.map((negara) => {
          const daftar = ppiuList.filter((p) => countryOf(p) === negara);
          return (
            <section key={negara} aria-labelledby={`negara-${negara.replace(/\W+/g, "-")}`}>
              <SectionHeading
                id={`negara-${negara.replace(/\W+/g, "-")}`}
                title={negara}
                desc={`${daftar.length} penyelenggara terverifikasi berdomisili di ${negara}.`}
              />
              <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {daftar.map((p) => {
                  const org = orgOf(p);
                  return (
                    <li key={p.slug}>
                      <Card className="h-full gap-3 border-line-warm py-5 transition-shadow hover:shadow-md">
                        <CardHeader className="gap-2 px-5 pt-5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <OrgBadge orgType={org} />
                            <TierBadge tier={p.tier} />
                          </div>
                          <CardTitle className="text-base leading-snug">
                            <Link
                              href={`/ppiu/${p.slug}`}
                              className="underline-offset-4 hover:text-brand hover:underline"
                            >
                              {p.name}
                            </Link>
                          </CardTitle>
                          <LocationChip>
                            {p.city}
                            {p.province && p.province !== p.city ? `, ${p.province}` : ""}
                          </LocationChip>
                        </CardHeader>
                        <CardContent className="space-y-3 px-5 pb-5">
                          <RatingStars rating={p.rating} count={p.reviewCount} />
                          <ul className="space-y-1 text-xs text-ink-muted">
                            <li>
                              <strong className="text-ink">{p.jamaahSent.toLocaleString("id-ID")}</strong> jamaah
                              terlayani sejak {p.yearFounded}
                            </li>
                            <li className="flex items-start gap-1">
                              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                              Izin {p.licenseNo} · {p.kemenagOffice}
                            </li>
                          </ul>
                          <Button asChild variant="outline" className="min-h-11 w-full border-brand text-brand hover:bg-brand-soft">
                            <Link href={`/ppiu/${p.slug}`}>Lihat profil</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
