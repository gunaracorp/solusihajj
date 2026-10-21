import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ppiuList, getPpiu, orgOf, countryOf } from "@/data/ppiu";
import { packagesOfPpiu } from "@/data/packages";
import { reviewsOfPpiu } from "@/data/reviews";
import { flightsOfPpiu } from "@/data/flights";
import { DIMENSION_LABELS, ORG_META, TIER_META, type DimensionKey } from "@/data/types";
import { formatRupiah, formatTanggal } from "@/components/seo/pkg-ui";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  PageHero,
  SectionHeading,
  MetaChip,
  TierBadge,
  OrgBadge,
  RatingStars,
  CtaKontak,
  VerifiedBadge,
} from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ShieldCheck,
  FileText,
  Landmark,
  Users,
  TrendingUp,
  Timer,
  CalendarCheck,
  Plane,
  Star,
} from "lucide-react";

/* Profil lengkap penyelenggara — 18 halaman statis dari ppiuList. */

export function generateStaticParams() {
  return ppiuList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ppiu = getPpiu(slug);
  if (!ppiu) return { title: "Penyelenggara tidak ditemukan" };
  const description =
    `Profil ${ppiu.name} (${ppiu.shortName}) — ${ORG_META[orgOf(ppiu)].label} ${ppiu.tier} di ${ppiu.city}. ` +
    `Rating ${ppiu.rating.toLocaleString("id-ID")}/5 dari ${ppiu.reviewCount} review Saksi Jamaah, ${ppiu.jamaahSent.toLocaleString("id-ID")} jamaah terlayani.`;
  return {
    title: `${ppiu.name} — Profil, Izin & Review Saksi Jamaah`,
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE}/ppiu/${ppiu.slug}` },
    openGraph: {
      title: `${ppiu.name} — Profil, Izin & Review Saksi Jamaah`,
      description: description.slice(0, 160),
      url: `${SITE}/ppiu/${ppiu.slug}`,
      type: "website",
    },
  };
}

const LAPIS_VERIFIKASI = [
  "Cek izin resmi (Kemenag / otoritas negara domisili)",
  "Audit kantor fisik oleh tim lapangan",
  "Verifikasi legalitas badan hukum & rekening penampungan",
  "Pengecekan track record jamaah sebelumnya",
  "Pemantauan berkelanjutan tiap kuartal",
];

export default async function PpiuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ppiu = getPpiu(slug);
  if (!ppiu) notFound();

  const org = orgOf(ppiu);
  const negara = countryOf(ppiu);
  const paket = packagesOfPpiu(ppiu.slug);
  const reviews = reviewsOfPpiu(ppiu.slug);
  const flights = flightsOfPpiu(ppiu.slug);
  const tierMeta = TIER_META[ppiu.tier];

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: ppiu.name,
    alternateName: ppiu.shortName,
    description: ppiu.about,
    url: `${SITE}/ppiu/${ppiu.slug}`,
    telephone: `+${ppiu.waPhone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ppiu.address,
      addressLocality: ppiu.city,
      addressRegion: ppiu.province,
      addressCountry: "ID",
    },
    foundingDate: String(ppiu.yearFounded),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ppiu.rating,
      reviewCount: ppiu.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          travelAgencyJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Penyelenggara", url: "/ppiu" },
            { name: ppiu.name, url: `/ppiu/${ppiu.slug}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Penyelenggara", url: "/ppiu" },
          { name: ppiu.name, url: `/ppiu/${ppiu.slug}` },
        ]}
        title={ppiu.name}
        lead={ppiu.about}
      >
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold"
            style={{ backgroundColor: tierMeta.bg, color: tierMeta.color }}
          >
            ★ Tier {tierMeta.label}
          </span>
          <OrgBadge orgType={org} className="bg-white/15 px-2.5 py-1 text-xs text-white" />
          <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
            {ppiu.rating.toLocaleString("id-ID", { minimumFractionDigits: 1 })} / 5 · {ppiu.reviewCount} review
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
          <MetaChip icon={<Landmark className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {ppiu.city}, {negara}
          </MetaChip>
          <MetaChip icon={<Users className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {ppiu.jamaahSent.toLocaleString("id-ID")} jamaah terlayani
          </MetaChip>
          <MetaChip icon={<Timer className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Respons ±{ppiu.responseMinutes} menit
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Kolom utama */}
          <div className="space-y-12">
            {/* Verifikasi & izin */}
            <section aria-labelledby="verifikasi">
              <SectionHeading
                id="verifikasi"
                title="Verifikasi 5 Lapis & Izin Resmi"
                desc="Status verifikasi dan legalitas di bawah diperiksa langsung oleh tim SolusiHajj — bukan klaim penyelenggara."
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="gap-3 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-base text-brand-deep">
                      <ShieldCheck className="h-5 w-5 text-brand" aria-hidden="true" />
                      Verifikasi 5 Lapis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-5">
                    <VerifiedBadge label={`Lolos verifikasi ${formatTanggal(ppiu.verifiedAt)}`} />
                    <ol className="list-decimal space-y-1.5 pl-5 text-sm text-ink-muted">
                      {LAPIS_VERIFIKASI.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
                <Card className="gap-3 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-base text-brand-deep">
                      <FileText className="h-5 w-5 text-brand" aria-hidden="true" />
                      Data Izin
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <dl className="space-y-2.5 text-sm">
                      <div className="flex justify-between gap-3">
                        <dt className="text-ink-muted">Nomor izin</dt>
                        <dd className="text-right font-bold text-ink">{ppiu.licenseNo}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-ink-muted">Terbit</dt>
                        <dd className="font-bold text-ink">{formatTanggal(ppiu.licenseIssued)}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-ink-muted">Berlaku hingga</dt>
                        <dd className="font-bold text-ink">{formatTanggal(ppiu.licenseValidUntil)}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-ink-muted">Kantor pengawas</dt>
                        <dd className="text-right font-bold text-ink">{ppiu.kemenagOffice}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-ink-muted">Jenis organisasi</dt>
                        <dd className="font-bold text-ink">{ORG_META[org].full}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Statistik & rating per dimensi */}
            <section aria-labelledby="statistik">
              <SectionHeading
                id="statistik"
                title="Statistik & Rating per Dimensi"
                desc="Rating berasal dari Saksi Jamaah — hanya booking selesai yang bisa menulis review. Skala 1–5 per dimensi."
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="gap-2 border-line-warm py-5">
                  <CardContent className="px-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <TrendingUp className="h-4 w-4 text-brand" aria-hidden="true" /> Ketepatan Berangkat
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-brand-deep">{ppiu.departureAccuracy}%</p>
                  </CardContent>
                </Card>
                <Card className="gap-2 border-line-warm py-5">
                  <CardContent className="px-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <CalendarCheck className="h-4 w-4 text-brand" aria-hidden="true" /> Berdiri Sejak
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-brand-deep">{ppiu.yearFounded}</p>
                  </CardContent>
                </Card>
                <Card className="gap-2 border-line-warm py-5">
                  <CardContent className="px-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <Users className="h-4 w-4 text-brand" aria-hidden="true" /> Jamaah Terlayani
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-brand-deep">
                      {ppiu.jamaahSent.toLocaleString("id-ID")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-4 gap-4 border-line-warm py-5">
                <CardHeader className="px-5">
                  <CardTitle className="flex items-center gap-2 text-base text-brand-deep">
                    <Star className="h-5 w-5 text-gold" aria-hidden="true" />
                    Rating 6 Dimensi Layanan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 px-5">
                  {(Object.keys(ppiu.dimensions) as DimensionKey[]).map((k) => (
                    <div key={k}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-medium text-ink">{DIMENSION_LABELS[k]}</span>
                        <span className="font-bold text-brand-deep">
                          {ppiu.dimensions[k].toLocaleString("id-ID", { minimumFractionDigits: 1 })}
                        </span>
                      </div>
                      <Progress value={(ppiu.dimensions[k] / 5) * 100} aria-label={`Rating ${DIMENSION_LABELS[k]}`} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <ul className="mt-4 flex flex-wrap gap-2">
                {ppiu.highlights.map((h) => (
                  <li key={h}>
                    <Badge className="border-transparent bg-gold-soft text-gold-deep">{h}</Badge>
                  </li>
                ))}
              </ul>
            </section>

            {/* Review */}
            {reviews.length > 0 && (
              <section aria-labelledby="review">
                <SectionHeading
                  id="review"
                  title="Saksi Jamaah"
                  desc="Review hanya terbuka untuk jamaah dengan booking selesai lewat escrow — dengan tanggal pulang yang tercantum."
                />
                <ul className="space-y-4">
                  {reviews.map((r) => (
                    <li key={r.id}>
                      <Card className="gap-3 border-line-warm py-5">
                        <CardHeader className="px-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <CardTitle className="text-sm font-bold text-ink">
                              {r.name} · {r.city}
                            </CardTitle>
                            <RatingStars rating={r.rating} />
                          </div>
                          <p className="text-xs text-ink-muted">Pulang {r.returnedAt}</p>
                        </CardHeader>
                        <CardContent className="space-y-3 px-5">
                          <blockquote className="text-sm leading-relaxed text-ink-muted">{r.text}</blockquote>
                          <div className="grid gap-1.5 sm:grid-cols-3">
                            {(Object.keys(r.dimensions) as DimensionKey[]).map((k) => (
                              <p key={k} className="flex items-center justify-between gap-2 text-xs text-ink-muted">
                                <span>{DIMENSION_LABELS[k]}</span>
                                <span className="font-bold text-ink">
                                  {r.dimensions[k].toLocaleString("id-ID", { minimumFractionDigits: 1 })}
                                </span>
                              </p>
                            ))}
                          </div>
                          {r.ppiuReply && (
                            <div className="rounded-xl bg-brand-soft/60 p-3 text-sm text-brand-deep">
                              <strong className="font-bold">Balasan penyelenggara:</strong> {r.ppiuReply}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Paket */}
            <section aria-labelledby="paket">
              <SectionHeading
                id="paket"
                title={`Paket Umrah dari ${ppiu.shortName}`}
                desc="Semua paket berikut menyertakan nama hotel, jarak meter ke Haram, itinerary harian, dan tabel pembatalan."
              />
              {paket.length > 0 ? (
                <ul className="grid gap-4 sm:grid-cols-2">
                  {paket.map((p) => (
                    <li key={p.slug}>
                      <Card className="h-full gap-2 border-line-warm py-5">
                        <CardHeader className="px-5 pt-5">
                          <CardTitle className="text-sm leading-snug">
                            <Link
                              href={`/paket/${p.slug}`}
                              className="underline-offset-4 hover:text-brand hover:underline"
                            >
                              {p.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1 px-5 pb-5">
                          <p className="text-base font-extrabold text-brand-deep">{formatRupiah(p.basePrice)}</p>
                          <p className="text-xs text-ink-muted">
                            {p.durationDays} hari · dari {p.departCity} · {p.airline}
                          </p>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-2xl border border-dashed border-line-warm bg-white p-6 text-sm text-ink-muted">
                  {ppiu.shortName} belum membuka paket di katalog — hubungi langsung untuk ketersediaan jadwal.
                </p>
              )}
            </section>

            {/* Charter */}
            {flights.length > 0 && (
              <section aria-labelledby="charter">
                <SectionHeading
                  id="charter"
                  title="Jadwal Charter yang Ditangani"
                  desc="Penerbangan kelompok grosir yang di-handling penyelenggara ini — tersedia untuk rombongan masjid & komunitas."
                />
                <div className="overflow-x-auto rounded-2xl border border-line-warm bg-white">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-brand-soft/60">
                        <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Rute</TableHead>
                        <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Keberangkatan</TableHead>
                        <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Sisa Kursi</TableHead>
                        <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Harga/Kursi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {flights.map((f) => (
                        <TableRow key={f.id}>
                          <TableCell className="font-semibold text-ink">
                            {f.route}
                            <span className="block text-xs font-normal text-ink-muted">
                              {f.airline} · {f.transit}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-ink-muted">
                            {formatTanggal(f.depart)}
                            <span className="block text-xs">Bagasi {f.baggageKg} kg</span>
                          </TableCell>
                          <TableCell className="text-sm text-ink-muted">
                            {f.seatsLeft} / {f.seatsTotal}
                          </TableCell>
                          <TableCell className="text-sm font-bold text-brand-deep">
                            {formatRupiah(f.pricePerPax)}
                            <span className="block text-xs font-normal text-ink-muted">min. {f.minOrder} kursi</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start" aria-label="Kontak dan alamat">
            <Card className="gap-4 border-line-warm shadow-md">
              <CardHeader className="px-5 pt-5">
                <CardTitle className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                  Kontak & Alamat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-5 pb-5">
                <div className="text-sm leading-relaxed text-ink">
                  <p className="font-bold">{ppiu.name}</p>
                  <p className="mt-1 text-ink-muted">{ppiu.address}</p>
                  <p className="text-ink-muted">
                    {ppiu.city}, {ppiu.province} — {negara}
                  </p>
                </div>
                <CtaKontak label="Hubungi via SolusiHajj" className="w-full" />
                <p className="text-center text-xs text-ink-muted">
                  Pastikan selalu bertransaksi melalui kanal terverifikasi dan escrow — bukan transfer ke
                  rekening pribadi.
                </p>
              </CardContent>
            </Card>

            {paket.length > 0 && (
              <Card className="gap-3 border-line-warm py-5">
                <CardHeader className="px-5 pt-5">
                  <CardTitle className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-muted">
                    <Plane className="h-4 w-4 text-brand" aria-hidden="true" /> Paket Termurah
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  {(() => {
                    const termurah = [...paket].sort((a, b) => a.basePrice - b.basePrice)[0];
                    return (
                      <>
                        <p className="text-sm font-bold leading-snug text-ink">{termurah.title}</p>
                        <p className="mt-1 text-lg font-extrabold text-brand-deep">
                          {formatRupiah(termurah.basePrice)}
                        </p>
                        <Button asChild variant="outline" className="mt-3 min-h-11 w-full border-brand text-brand hover:bg-brand-soft">
                          <Link href={`/paket/${termurah.slug}`}>Lihat detail paket</Link>
                        </Button>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
