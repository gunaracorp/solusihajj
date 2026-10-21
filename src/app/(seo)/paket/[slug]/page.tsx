import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packageList, getPackage, packagesOfPpiu } from "@/data/packages";
import { getPpiu, orgOf } from "@/data/ppiu";
import { reviewsOfPackage } from "@/data/reviews";
import { DIMENSION_LABELS, ORG_META, PRODUCT_META, type DimensionKey } from "@/data/types";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  PageHero,
  MetaChip,
  SectionHeading,
  TierBadge,
  RatingStars,
  CtaKontak,
  LocationChip,
  formatRupiah,
} from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  Clock3,
  MapPin,
  Plane,
  BedDouble,
  Check,
  X,
  Star,
  CalendarRange,
  ShieldCheck,
  Wallet,
} from "lucide-react";

/* Detail paket — 27 halaman statis (generateStaticParams dari packageList). */

export function generateStaticParams() {
  return packageList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return { title: "Paket tidak ditemukan" };
  const ppiu = getPpiu(pkg.ppiuSlug);
  const harga = formatRupiah(pkg.basePrice);
  const description =
    `${pkg.title} — ${pkg.durationDays} hari mulai ${harga}/jamaah dari ${pkg.departCity}. ` +
    `Hotel ${pkg.hotelMakkah.name} (${pkg.hotelMakkah.distanceToHaram} m ke Haram) oleh ${ppiu?.shortName ?? "penyelenggara terverifikasi"}.`;
  return {
    title: `${pkg.title} — ${pkg.durationDays} Hari`,
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE}/paket/${pkg.slug}` },
    openGraph: {
      title: pkg.title,
      description: description.slice(0, 160),
      url: `${SITE}/paket/${pkg.slug}`,
      type: "website",
    },
  };
}

const LOC_LABEL: Record<string, string> = {
  JKT: "Indonesia",
  JEDA: "Jeddah",
  MK: "Makkah",
  MD: "Madinah",
  PLUS: "Negara Tambahan",
};

const TYPE_LABEL: Record<string, string> = {
  reguler: "Umrah Reguler",
  ramadhan: "Umrah Ramadhan",
  "plus-turki": "Umrah Plus Turki",
  "plus-dubai": "Umrah Plus Dubai",
};

export default async function PaketDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const ppiu = getPpiu(pkg.ppiuSlug);
  const org = ppiu ? orgOf(ppiu) : undefined;
  const reviews = reviewsOfPackage(pkg.slug);
  const terkait = packagesOfPpiu(pkg.ppiuSlug).filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const product = PRODUCT_META[pkg.product ?? "full"];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: `${pkg.title} — paket ${product.label} ${pkg.durationDays} hari dari ${pkg.departCity}, diselenggarakan oleh ${ppiu?.name ?? pkg.ppiuSlug}.`,
    category: "Paket Perjalanan Umrah",
    brand: { "@type": "Brand", name: ppiu?.name ?? "SolusiHajj" },
    url: `${SITE}/paket/${pkg.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: pkg.basePrice,
      availability: "https://schema.org/InStock",
      url: `${SITE}/paket/${pkg.slug}`,
      validFrom: new Date().toISOString().slice(0, 10),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pkg.rating,
      reviewCount: pkg.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          productJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Paket Umrah", url: "/paket" },
            { name: pkg.title, url: `/paket/${pkg.slug}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Paket Umrah", url: "/paket" },
          { name: pkg.title, url: `/paket/${pkg.slug}` },
        ]}
        title={pkg.title}
        lead={`${product.tagline} Diselenggarakan oleh ${ppiu?.name ?? pkg.ppiuSlug}${org ? ` (${ORG_META[org].label})` : ""} — terverifikasi Verifikasi 5 Lapis.`}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {pkg.durationDays} hari
          </MetaChip>
          <MetaChip icon={<Wallet className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Mulai {formatRupiah(pkg.basePrice)}
          </MetaChip>
          <MetaChip icon={<MapPin className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {pkg.departCity}
          </MetaChip>
          <MetaChip icon={<Star className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {pkg.rating.toLocaleString("id-ID", { minimumFractionDigits: 1 })} ({pkg.reviewCount} review)
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Kolom utama */}
          <div className="space-y-12">
            {/* Ringkasan harga & keberangkatan */}
            <section aria-labelledby="ringkasan">
              <SectionHeading
                id="ringkasan"
                title="Harga & Jadwal Keberangkatan"
                desc={`Harga dasar di bawah adalah per jamaah kamar quad. Jendela keberangkatan: ${pkg.departWindow}.`}
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="gap-2 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <Wallet className="h-4 w-4 text-brand" aria-hidden="true" /> Harga Mulai
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <p className="text-xl font-extrabold text-brand-deep">{formatRupiah(pkg.basePrice)}</p>
                    <p className="text-xs text-ink-muted">per jamaah · kamar quad</p>
                  </CardContent>
                </Card>
                <Card className="gap-2 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <CalendarRange className="h-4 w-4 text-brand" aria-hidden="true" /> Jendela Keberangkatan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <p className="text-sm font-bold text-ink">{pkg.departWindow}</p>
                    <p className="text-xs text-ink-muted">Grup baru dibuka tiap periode</p>
                  </CardContent>
                </Card>
                <Card className="gap-2 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-muted">
                      <Plane className="h-4 w-4 text-brand" aria-hidden="true" /> Maskapai
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <p className="text-sm font-bold text-ink">{pkg.airline}</p>
                    <p className="text-xs text-ink-muted">Bagasi rata-rata 2×23 kg</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Hotel */}
            <section aria-labelledby="hotel">
              <SectionHeading
                id="hotel"
                title="Hotel di Tanah Suci & Jarak Nyata ke Haram"
                desc="Jarak ditulis dalam meter berjalan kaki — bukan klaim marketing. Inilah standar transparansi semua paket di katalog kami."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Hotel Makkah", hotel: pkg.hotelMakkah, target: "Masjidil Haram" },
                  { label: "Hotel Madinah", hotel: pkg.hotelMadinah, target: "Masjid Nabawi" },
                ].map(({ label, hotel, target }) => (
                  <Card key={label} className="gap-3 border-line-warm py-5">
                    <CardHeader className="px-5">
                      <Badge className="w-fit border-transparent bg-brand-soft text-brand-deep">{label}</Badge>
                      <CardTitle className="text-base">{hotel.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 px-5">
                      <p className="flex items-center gap-1 text-sm">
                        <span aria-hidden="true" className="text-gold-deep">
                          {"★".repeat(hotel.stars)}
                          <span className="text-line-warm">{"★".repeat(5 - hotel.stars)}</span>
                        </span>
                        <span className="font-semibold text-ink">{hotel.stars} bintang</span>
                      </p>
                      <p className="text-sm font-semibold text-brand-deep">
                        {hotel.distanceToHaram} meter ke {target} · ±{hotel.walkMinutes} menit jalan kaki
                      </p>
                      <ul className="flex flex-wrap gap-1.5 pt-1">
                        {hotel.facilities.map((f) => (
                          <li key={f}>
                            <Badge variant="outline" className="border-line-warm font-normal text-ink-muted">
                              {f}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section aria-labelledby="itinerary">
              <SectionHeading
                id="itinerary"
                title={`Itinerary Harian — ${pkg.durationDays} Hari`}
                desc="Rundown yang Anda terima saat booking sama dengan daftar ini. Perubahan hanya berlaku dengan persetujuan jamaah."
              />
              <ol className="relative space-y-6 border-l-2 border-brand-soft pl-6">
                {pkg.itinerary.map((d) => (
                  <li key={d.day} className="relative">
                    <span
                      className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white"
                      aria-hidden="true"
                    >
                      {d.day}
                    </span>
                    <div className="rounded-2xl border border-line-warm bg-white p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-ink">
                          Hari {d.day}: {d.title}
                        </h3>
                        <Badge variant="outline" className="border-line-warm text-xs text-ink-muted">
                          {LOC_LABEL[d.location] ?? d.location}
                        </Badge>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Includes / excludes */}
            <section aria-labelledby="inklusi">
              <SectionHeading id="inklusi" title="Yang Termasuk & Tidak Termasuk" />
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="gap-3 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-base text-brand-deep">
                      <Check className="h-5 w-5 text-brand" aria-hidden="true" /> Termasuk dalam harga
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <ul className="space-y-2 text-sm text-ink-muted">
                      {pkg.includes.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="gap-3 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="flex items-center gap-2 text-base text-ink">
                      <X className="h-5 w-5 text-gold-deep" aria-hidden="true" /> Tidak termasuk
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <ul className="space-y-2 text-sm text-ink-muted">
                      {pkg.excludes.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Pembatalan */}
            <section aria-labelledby="pembatalan">
              <SectionHeading
                id="pembatalan"
                title="Tabel Pembatalan & Refund"
                desc="Berlaku transparan untuk semua jamaah. Selama dana belum dirilis dari escrow, klaim refund tetap terlindungi."
              />
              <div className="overflow-hidden rounded-2xl border border-line-warm bg-white">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-brand-soft/60">
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">
                        Momen Pembatalan
                      </TableHead>
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">
                        Ketentuan Refund
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pkg.cancellation.map((c) => (
                      <TableRow key={c.moment}>
                        <TableCell className="w-1/3 font-semibold text-ink">{c.moment}</TableCell>
                        <TableCell className="text-sm text-ink-muted">{c.refund}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* Review */}
            {reviews.length > 0 && (
              <section aria-labelledby="review">
                <SectionHeading
                  id="review"
                  title="Saksi Jamaah — Review dari Perjalanan Nyata"
                  desc="Hanya jamaah dengan booking selesai (sudah pulang) yang bisa menulis review di platform ini."
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
                          <div className="grid gap-1.5 sm:grid-cols-2">
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

            {/* Profil PPIU */}
            {ppiu && (
              <section aria-labelledby="ppiu">
                <SectionHeading
                  id="ppiu"
                  title="Profil Penyelenggara"
                  desc="Kontrak perjalanan Anda dibuat langsung dengan penyelenggara berikut — SolusiHajj menjaga verifikasi, escrow, dan dokumentasi review."
                />
                <Card className="gap-4 border-line-warm py-5">
                  <CardHeader className="px-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-transparent bg-brand-soft text-brand-deep">
                        {ORG_META[org ?? "PPIU"].full}
                      </Badge>
                      <TierBadge tier={ppiu.tier} />
                    </div>
                    <CardTitle className="text-lg">{ppiu.name}</CardTitle>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
                      <LocationChip>
                        {ppiu.city}, {ppiu.province}
                      </LocationChip>
                      <RatingStars rating={ppiu.rating} count={ppiu.reviewCount} />
                      <span>{ppiu.jamaahSent.toLocaleString("id-ID")} jamaah terlayani</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 px-5">
                    <p className="text-sm leading-relaxed text-ink-muted">{ppiu.about}</p>
                    <Separator className="bg-line-warm" />
                    <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                      <div className="flex justify-between gap-3 sm:block">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Nomor Izin</dt>
                        <dd className="font-bold text-ink">{ppiu.licenseNo}</dd>
                      </div>
                      <div className="flex justify-between gap-3 sm:block">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Kantor Kemenag</dt>
                        <dd className="font-bold text-ink">{ppiu.kemenagOffice}</dd>
                      </div>
                    </dl>
                    <Button asChild variant="outline" className="min-h-11 border-brand text-brand hover:bg-brand-soft">
                      <Link href={`/ppiu/${ppiu.slug}`}>Lihat profil lengkap penyelenggara</Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Paket terkait */}
            {terkait.length > 0 && (
              <section aria-labelledby="terkait">
                <SectionHeading
                  id="terkait"
                  title="Paket Lain dari Penyelenggara yang Sama"
                />
                <ul className="grid gap-4 sm:grid-cols-3">
                  {terkait.map((p) => (
                    <li key={p.slug}>
                      <Card className="h-full gap-2 border-line-warm py-5">
                        <CardHeader className="px-5">
                          <CardTitle className="text-sm leading-snug">
                            <Link href={`/paket/${p.slug}`} className="underline-offset-4 hover:text-brand hover:underline">
                              {p.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-5">
                          <p className="text-sm font-extrabold text-brand-deep">{formatRupiah(p.basePrice)}</p>
                          <p className="text-xs text-ink-muted">
                            {p.durationDays} hari · dari {p.departCity}
                          </p>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar sticky */}
          <aside className="lg:sticky lg:top-20 lg:self-start" aria-label="Aksi booking">
            <Card className="gap-4 border-line-warm shadow-md">
              <CardHeader className="px-5 pt-5">
                <CardTitle className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                  Harga mulai dari
                </CardTitle>
                <p className="text-2xl font-extrabold text-brand-deep">{formatRupiah(pkg.basePrice)}</p>
                <p className="text-xs text-ink-muted">
                  per jamaah · {pkg.durationDays} hari · {TYPE_LABEL[pkg.type] ?? pkg.type}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 px-5 pb-5">
                <CtaKontak label="Tanya Paket Ini via WhatsApp" className="w-full" />
                <p className="text-center text-xs text-ink-muted">
                  Konsultasi gratis — tanpa biaya, tanpa tekanan. Booking resmi berjalan via SPA SolusiHajj dengan
                  AmanahEscrow.
                </p>
                <Separator className="bg-line-warm" />
                <ul className="space-y-2 text-sm text-ink-muted">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Separator className="bg-line-warm" />
                <p className="text-xs leading-relaxed text-ink-muted">
                  <strong className="text-ink">Jaminan harga:</strong> harga tercantum adalah harga final all-in
                  sesuai daftar termasuk. Tidak ada biaya yang muncul mendadak setelah Anda booking.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
