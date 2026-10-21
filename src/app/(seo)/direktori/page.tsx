import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import {
  PageHero,
  SectionHeading,
  MetaChip,
  OrgBadge,
  VerifiedBadge,
  slugify,
  negaraLabel,
} from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Building2, Globe2, MapPin, BadgeCheck, Search, Landmark } from "lucide-react";

/* Indeks direktori nasional — server component dengan data live Prisma (SQLite).
   Revalidate 1 jam agar agregat tetap segar tanpa render dinamis penuh. */

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Direktori Penyelenggara Umrah & Haji Nasional (3.966+ Organisasi)",
  description:
    "Database nasional PPIU, PIHK, BPW & UTO berizin: 3.966 organisasi dari data resmi Kemenag, Kemenhaj & SISKOPATUH. Cek izin, alamat, dan sumber data tiap penyelenggara.",
  alternates: { canonical: `${SITE}/direktori` },
  openGraph: {
    title: "Direktori Penyelenggara Umrah & Haji Nasional",
    description:
      "3.966 organisasi penyelenggara ibadah dari data resmi Kemenag, Kemenhaj & SISKOPATUH — lengkap dengan nomor izin, alamat, dan sumber datanya.",
    url: `${SITE}/direktori`,
    type: "website",
    images: [
      ogImage({
        title: "Direktori Penyelenggara Nasional",
        kicker: "3.966+ Organisasi Terdata",
        badge: "Data Resmi Pemerintah",
        sub: "PPIU, PIHK, BPW & UTO — izin, alamat, dan sumber data tiap penyelenggara",
        foot: "Kemenag · Kemenhaj · SISKOPATUH",
      }),
    ],
  },
};

export default async function DirektoriIndexPage() {
  const [byOrgType, byCountry, byProvince, total, verified, contoh] = await Promise.all([
    db.company.groupBy({ by: ["orgType"], _count: { _all: true }, orderBy: { _count: { orgType: "desc" } } }),
    db.company.groupBy({ by: ["country"], _count: { _all: true }, orderBy: { _count: { country: "desc" } } }),
    db.company.groupBy({
      by: ["province"],
      _count: { _all: true },
      where: { province: { not: null } },
      orderBy: { _count: { province: "desc" } },
      take: 10,
    }),
    db.company.count(),
    db.company.count({ where: { verified: true } }),
    db.company.findMany({
      where: { verified: true },
      orderBy: { updatedAt: "desc" },
      take: 12,
      include: { source: true },
    }),
  ]);

  const searchJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SolusiHajj — Pusat Data Nasional Penyelenggara Ibadah",
    url: SITE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/#/pusat-data?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Contoh Penyelenggara Terverifikasi Terbaru",
    numberOfItems: contoh.length,
    itemListElement: contoh.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE}/direktori/${slugify(c.name)}--${c.id}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          searchJsonLd,
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Direktori", url: "/direktori" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Direktori", url: "/direktori" },
        ]}
        title="Direktori Penyelenggara Ibadah Nasional"
        lead="Basis data terbesar penyelenggara umrah & haji di Asia — ditarik otomatis dari kanal resmi: Kemenag RI, Kemenhaj Saudi, SISKOPATUH, Satu Data Kemenag, dan asosiasi industri. Setiap entris menampilkan sumber dan kebaruan datanya."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Building2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {total.toLocaleString("id-ID")} organisasi terindeks
          </MetaChip>
          <MetaChip icon={<BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {verified.toLocaleString("id-ID")} terverifikasi
          </MetaChip>
          <MetaChip icon={<Globe2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {byCountry.length} negara
          </MetaChip>
          <MetaChip icon={<Landmark className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {byOrgType.length} jenis organisasi
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-10 md:py-14">
        {/* Form pencarian → SPA */}
        <section aria-labelledby="cari-data">
          <SectionHeading
            id="cari-data"
            title="Cari Penyelenggara Berdasarkan Nama atau Nomor Izin"
            desc="Pencarian lengkap (nama, izin, kota, status) tersedia di Pusat Data Nasional — termasuk filter provinsi, jenis organisasi, dan riwayat sanksi."
          />
          <div className="rounded-3xl border border-line-warm bg-white p-5 shadow-sm md:p-6">
            {/* GET form: query diserialisasi ke URL lalu fragment #/pusat-data
                dipertahankan → pengguna mendarat di view Pusat Data SPA. */}
            <form
              action="/#/pusat-data"
              method="get"
              className="flex flex-col gap-3 sm:flex-row"
              role="search"
              aria-label="Cari penyelenggara di Pusat Data Nasional"
            >
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  name="q"
                  placeholder="cth. nama travel, nomor izin, kota…"
                  aria-label="Kata kunci pencarian penyelenggara"
                  className="min-h-11 w-full rounded-xl border border-line-warm bg-ivory pl-9 pr-4 text-sm text-ink outline-none focus:border-brand"
                />
              </div>
              <Button type="submit" className="min-h-11 bg-brand hover:bg-brand-deep">
                Cari di Pusat Data
              </Button>
            </form>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
              Pusat Data Nasional menampilkan seluruh {total.toLocaleString("id-ID")} entri dengan filter lengkap —
              gratis, tanpa perlu akun.
            </p>
          </div>
        </section>

        {/* Statistik agregat */}
        <section aria-labelledby="statistik">
          <SectionHeading
            id="statistik"
            title="Statistik Direktori"
            desc="Agregat langsung dari basis data nasional — diperbarui setiap kali pipeline sinkronisasi menarik data dari sumber resmi."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="gap-3 border-line-warm py-5">
              <CardHeader className="px-5">
                <CardTitle className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                  Per Jenis Organisasi
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5">
                <ul className="space-y-2">
                  {byOrgType.map((g) => (
                    <li key={g.orgType} className="flex items-center justify-between gap-3 text-sm">
                      <OrgBadge orgType={g.orgType} />
                      <span className="font-extrabold text-brand-deep">
                        {g._count._all.toLocaleString("id-ID")}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="gap-3 border-line-warm py-5">
              <CardHeader className="px-5">
                <CardTitle className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                  Per Negara
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5">
                <ul className="space-y-2">
                  {byCountry.map((g) => (
                    <li key={g.country} className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-ink">{negaraLabel(g.country)}</span>
                      <span className="font-extrabold text-brand-deep">
                        {g._count._all.toLocaleString("id-ID")}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="gap-3 border-line-warm py-5">
              <CardHeader className="px-5">
                <CardTitle className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                  10 Provinsi Teratas
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5">
                <ul className="space-y-2">
                  {byProvince.map((g) => (
                    <li key={g.province ?? "-"} className="flex items-center justify-between gap-3 text-sm">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                        <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        {g.province}
                      </span>
                      <span className="font-extrabold text-brand-deep">
                        {g._count._all.toLocaleString("id-ID")}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contoh terbaru */}
        <section aria-labelledby="terbaru">
          <SectionHeading
            id="terbaru"
            title="12 Penyelenggara Terverifikasi Terbaru"
            desc="Entri yang baru diperbarui pipeline data. Klik untuk melihat profil lengkap: izin, pemimpin, kontak, dan sumber resminya."
          />
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contoh.map((c) => (
              <li key={c.id}>
                <Card className="h-full gap-3 border-line-warm py-5 transition-shadow hover:shadow-md">
                  <CardHeader className="gap-2 px-5 pt-5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <OrgBadge orgType={c.orgType} />
                      {c.verified && <VerifiedBadge />}
                    </div>
                    <CardTitle className="text-sm leading-snug">
                      <Link
                        href={`/direktori/${slugify(c.name)}--${c.id}`}
                        className="underline-offset-4 hover:text-brand hover:underline"
                      >
                        {c.name}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-5 pb-5">
                    <p className="text-xs text-ink-muted">
                      {[c.city, c.province].filter(Boolean).join(", ") || negaraLabel(c.country)}
                    </p>
                    {c.licenseNo && (
                      <p className="text-xs text-ink-muted">
                        Izin: <span className="font-semibold text-ink">{c.licenseNo}</span>
                      </p>
                    )}
                    <p className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
                      <Database className="h-3 w-3 shrink-0 text-brand" aria-hidden="true" />
                      Sumber: {c.source?.institution ?? "Data resmi"} · {c.dataAsOf ?? "—"}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* Sumber data */}
        <section className="rounded-3xl bg-brand-soft/60 p-6 md:p-8" aria-labelledby="transparansi">
          <h2 id="transparansi" className="text-xl font-extrabold tracking-tight text-brand-deep">
            Transparansi Sumber Data
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Seluruh entri direktori berasal dari dokumen dan kanal publik pemerintah (daftar izin Kemenag,
            data Kemenhaj Saudi, SISKOPATUH, dan sumber asosiasi). Halaman detail setiap organisasi
            menampilkan institusi sumber, URL resmi, dan stempel waktu kebaruan data — sehingga Anda bisa
            memverifikasi ulang sendiri kapan pun.
          </p>
          <Badge className="mt-4 border-transparent bg-white text-brand-deep">
            Prinsip Amanah: tunjukkan sumbernya, bukan hanya klaimnya.
          </Badge>
        </section>
      </div>
    </>
  );
}
