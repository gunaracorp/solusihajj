import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  PageHero,
  OrgBadge,
  VerifiedBadge,
  TierBadge,
  BackLink,
  slugify,
  negaraLabel,
} from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BadgeCheck,
  Landmark,
  MapPin,
  Phone,
  Mail,
  Globe2,
  Database,
  ExternalLink,
  FileText,
  UserRound,
  CalendarDays,
} from "lucide-react";
import type { Company, DataSource } from "@prisma/client";

/* Detail perusahaan dari DB nasional (3.966 entri) — render on-demand, TANPA
   generateStaticParams. Kontrak slug: `${slugify(name)}--${id}`. */

export const revalidate = 3600;

type CompanyWithSource = Company & { source: DataSource | null };

function parseSlug(slug: string): { prefix: string; id: string } | null {
  const idx = slug.lastIndexOf("--");
  if (idx <= 0 || idx === slug.length - 2) return null;
  return { prefix: slug.slice(0, idx), id: slug.slice(idx + 2) };
}

async function getCompany(slug: string): Promise<CompanyWithSource | null> {
  const parsed = parseSlug(slug);
  if (!parsed) return null;
  const company = await db.company.findUnique({
    where: { id: parsed.id },
    include: { source: true },
  });
  if (!company) return null;
  // Validasi prefix slug sesuai kontrak — cegah duplikat/akses via id mentah.
  if (slugify(company.name) !== parsed.prefix) return null;
  return company;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCompany(slug);
  if (!c) return { title: "Organisasi tidak ditemukan" };
  const lokasi = [c.city, c.province].filter(Boolean).join(", ") || negaraLabel(c.country);
  const description =
    `Profil ${c.name}${c.brandName ? ` (${c.brandName})` : ""} — ${c.orgType} di ${lokasi}. ` +
    `${c.licenseNo ? `Izin ${c.licenseNo}. ` : ""}Status ${c.status}, sumber data resmi ${c.source?.institution ?? "pemerintah"}.`
      .slice(0, 157) + "…";
  return {
    title: `${c.name} — Profil ${c.orgType}${c.city ? ` ${c.city}` : ""}`,
    description,
    alternates: { canonical: `${SITE}/direktori/${slugify(c.name)}--${c.id}` },
    openGraph: {
      title: `${c.name} — Profil ${c.orgType}`,
      description,
      url: `${SITE}/direktori/${slugify(c.name)}--${c.id}`,
      type: "website",
    },
  };
}

const STATUS_STYLE: Record<string, string> = {
  AKTIF: "border-transparent bg-brand-soft text-brand-deep",
  BARU: "border-transparent bg-gold-soft text-gold-deep",
  SANKSI: "border-transparent bg-red-100 text-red-800",
  KURASI: "border-transparent bg-gold-soft text-gold-deep",
};

export default async function DirektoriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = await getCompany(slug);
  if (!c) notFound();

  const lokasi = [c.city, c.province].filter(Boolean).join(", ") || negaraLabel(c.country);
  const sumberUrl = c.sourceRef || c.source?.url || null;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.name,
    ...(c.brandName ? { alternateName: c.brandName } : {}),
    description: `Penyelenggara perjalanan ibadah (${c.orgType}) di ${lokasi}.`,
    url: `${SITE}/direktori/${slugify(c.name)}--${c.id}`,
    ...(c.phone ? { telephone: c.phone } : {}),
    ...(c.email ? { email: c.email } : {}),
    ...(c.website ? { sameAs: [c.website] } : {}),
    address: {
      "@type": "PostalAddress",
      ...(c.address ? { streetAddress: c.address } : {}),
      ...(c.city ? { addressLocality: c.city } : {}),
      ...(c.province ? { addressRegion: c.province } : {}),
      addressCountry: c.country,
    },
    ...(c.leader ? { founder: { "@type": "Person", name: c.leader } } : {}),
  };

  return (
    <>
      <JsonLd
        data={[
          orgJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Direktori", url: "/direktori" },
            { name: c.name, url: `/direktori/${slugify(c.name)}--${c.id}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Direktori", url: "/direktori" },
          { name: c.name, url: `/direktori/${slugify(c.name)}--${c.id}` },
        ]}
        title={c.name}
        lead={`${c.brandName ? `${c.brandName} — ` : ""}Organisasi jenis ${c.orgType} terdaftar di ${lokasi}. Data ditarik dari kanal resmi pemerintah; selalu verifikasi ulang sebelum bertransaksi.`}
      >
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <OrgBadge orgType={c.orgType} className="px-3 py-1 text-sm" />
          <Badge className={`border-transparent px-3 py-1 text-sm ${STATUS_STYLE[c.status] ?? "bg-white text-ink"}`}>
            Status: {c.status}
          </Badge>
          {c.verified && <VerifiedBadge label="Terverifikasi SolusiHajj" />}
          {c.tier && <TierBadge tier={c.tier.toLowerCase() as "platinum" | "gold" | "silver"} />}
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <BackLink href="/direktori" label="Kembali ke Direktori" />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Data utama */}
          <Card className="gap-5 border-line-warm py-6">
            <CardHeader className="px-6">
              <CardTitle className="text-lg text-brand-deep">Data Resmi Organisasi</CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div className="flex items-start gap-3 sm:col-span-2">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Nomor Izin
                    </dt>
                    <dd className="text-sm font-bold text-ink">{c.licenseNo ?? "Tidak tercatat"}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Tahun Izin
                    </dt>
                    <dd className="text-sm font-bold text-ink">{c.licenseYear ?? "—"}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Status</dt>
                    <dd className="text-sm font-bold text-ink">{c.status}</dd>
                  </div>
                </div>
                {c.leader && (
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        Pemimpin / Penanggung Jawab
                      </dt>
                      <dd className="text-sm font-bold text-ink">{c.leader}</dd>
                    </div>
                  </div>
                )}
                {c.address && (
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        Alamat Terdaftar
                      </dt>
                      <dd className="text-sm leading-relaxed text-ink">{c.address}</dd>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Kota / Provinsi
                    </dt>
                    <dd className="text-sm font-bold text-ink">{lokasi}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Negara</dt>
                    <dd className="text-sm font-bold text-ink">{negaraLabel(c.country)}</dd>
                  </div>
                </div>
                {c.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Telepon</dt>
                      <dd className="text-sm font-bold text-ink">
                        <a href={`tel:${c.phone.replace(/[^+\d]/g, "")}`} className="underline-offset-4 hover:underline">
                          {c.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
                {c.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Email</dt>
                      <dd className="text-sm font-bold text-ink">
                        <a href={`mailto:${c.email}`} className="underline-offset-4 hover:underline">
                          {c.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
                {c.website && (
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Situs Web</dt>
                      <dd className="text-sm font-bold text-brand">
                        <a
                          href={c.website}
                          target="_blank"
                          rel="nofollow noopener"
                          className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                        >
                          {c.website.replace(/^https?:\/\//, "")}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
              </dl>

              {c.notes && (
                <>
                  <Separator className="my-5 bg-line-warm" />
                  <div className="rounded-2xl bg-brand-soft/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-deep">Catatan Verifikasi</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-deep/90">{c.notes}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Sidebar sumber data */}
          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start" aria-label="Sumber data dan aksi">
            <Card className="gap-4 border-line-warm py-5">
              <CardHeader className="px-5 pt-5">
                <CardTitle className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-muted">
                  <Database className="h-4 w-4 text-brand" aria-hidden="true" /> Sumber Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-5 pb-5">
                <p className="text-sm font-bold text-ink">{c.source?.name ?? "Kanal resmi pemerintah"}</p>
                <p className="text-xs text-ink-muted">
                  Institusi: <span className="font-semibold text-ink">{c.source?.institution ?? "—"}</span>
                </p>
                <p className="text-xs text-ink-muted">
                  Kebaruan data (dataAsOf): <span className="font-semibold text-ink">{c.dataAsOf ?? "—"}</span>
                </p>
                {sumberUrl && (
                  <a
                    href={sumberUrl}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    Buka sumber resmi <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <Separator className="bg-line-warm" />
                <p className="text-xs leading-relaxed text-ink-muted">
                  Data publik pemerintah ditampilkan apa adanya. Sebelum bertransaksi, cocokkan nomor izin ke
                  kanal resmi terbaru dan gunakan escrow untuk melindungi dana Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-3 border-line-warm py-5">
              <CardContent className="space-y-3 px-5 pb-5 pt-5">
                <Button asChild className="min-h-11 w-full bg-brand hover:bg-brand-deep">
                  <Link href="/#/verifikasi/cek-izin-ppiu">Cek Status Izin Organisasi Ini</Link>
                </Button>
                <Button asChild variant="outline" className="min-h-11 w-full border-line-warm">
                  <Link href="/#/pusat-data">Bandingkan di Pusat Data</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
