import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, MessageCircle, Plane, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd, SITE, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import {
  BreadcrumbTrail,
  CheckList,
  CityCard,
  FaqAccordion,
  formatJam,
  formatRupiah,
  PackageMiniCard,
} from "@/components/seo/silo-bits";
import { citiesByIsland, cityList, getCity } from "@/data/cities";
import { packageList } from "@/data/packages";
import { serviceList } from "@/data/services";
import { LeadForm } from "@/components/seo/lead-form";

/* Landing kota keberangkatan — 45 halaman "Umrah dari {kota}". */

export function generateStaticParams() {
  return cityList.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "Kota tidak ditemukan" };

  const title = `Umrah dari ${city.name} 2026 — Paket, Harga & Jadwal`;
  const description =
    city.intro.length > 158 ? `${city.intro.slice(0, 155).trim()}…` : city.intro;
  const url = `/kota/${city.slug}`;
  const ogCard = ogImage({
    title: `Umrah dari ${city.name}`,
    kicker: "Kota Keberangkatan",
    chip: city.airportCode,
    badge: city.directCharter ? "Charter Langsung Tersedia" : undefined,
    sub: `Bandara ${city.airport} · ± ${city.flightTimeHours} jam ke Tanah Suci`,
    foot: `${city.province} · Indonesia`,
  });
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url: `${SITE}${url}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [ogCard],
    },
    twitter: { card: "summary_large_image", images: [ogCard.url] },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const key = city.name.toLowerCase();
  const cityPackages = packageList.filter((p) => p.departCity.toLowerCase().includes(key));
  const featured = packageList.filter((p) => p.featured).slice(0, 3);
  const shownPackages = cityPackages.length > 0 ? cityPackages : featured;
  const minPrice =
    cityPackages.length > 0 ? Math.min(...cityPackages.map((p) => p.basePrice)) : undefined;

  const sameIsland = citiesByIsland(city.island).filter((c) => c.slug !== city.slug);
  const url = `/kota/${city.slug}`;

  return (
    <>
      {/* JSON-LD: Breadcrumb + FAQPage + Service (provider = organization) */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: "/" },
          { name: "Umrah per Kota", url: "/kota" },
          { name: city.name, url },
        ])}
      />
      {city.faqs.length > 0 ? <JsonLd data={faqJsonLd(city.faqs)} /> : null}
      <JsonLd
        data={serviceJsonLd({
          name: `Umrah dari ${city.name}`,
          description: city.intro,
          url,
          category: `Umrah dari ${city.name}`,
          priceFrom: minPrice,
        })}
      />

      <BreadcrumbTrail
        items={[
          { name: "Beranda", href: "/" },
          { name: "Umrah per Kota", href: "/kota" },
          { name: city.name },
        ]}
      />

      {/* Hero kota */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <p className="text-sm font-semibold tracking-wider text-gold uppercase">
            {city.island} · {city.province}
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Umrah dari {city.name} — {city.province}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{city.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-10">
            {/* Info keberangkatan */}
            <section aria-labelledby="info-keberangkatan" className="grid gap-4 sm:grid-cols-2">
              <Card className="border-line-warm">
                <CardContent className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <PlaneTakeoff className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-deep">Bandara Keberangkatan</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {city.airport} ({city.airportCode})
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-line-warm">
                <CardContent className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-deep">Waktu Terbang ke Jeddah</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      Perkiraan ± {formatJam(city.flightTimeHours)} penerbangan
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-line-warm sm:col-span-2">
                <CardContent className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Plane className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-brand-deep">Rute Penerbangan</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {city.directCharter
                        ? "Tersedia charter langsung dari bandara ini menuju Jeddah/Madinah pada musim ramai — tanpa transit."
                        : "Keberangkatan umumnya via transit di hub besar (Jakarta, Surabaya, atau Jeddah) sesuai jadwal maskapai."}
                    </p>
                  </div>
                  {city.directCharter ? (
                    <Badge className="border-transparent bg-brand text-white hover:bg-brand">
                      Charter Langsung Tersedia
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-line-warm text-ink-muted">
                      Via Transit
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </section>

            {/* Highlights */}
            <section aria-labelledby="keunggulan-kota" className="rounded-2xl border border-line-warm bg-white p-6">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="keunggulan-kota" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Kenapa berangkat umrah dari {city.name}?
                </h2>
              </div>
              <div className="mt-4">
                <CheckList items={city.highlights} />
              </div>
            </section>

            {/* Paket dari kota ini */}
            <section aria-labelledby="paket-kota">
              <h2 id="paket-kota" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                Paket umrah dari {city.name}
              </h2>
              {cityPackages.length > 0 ? (
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {cityPackages.length} paket dengan titik keberangkatan {city.name} — harga mulai{" "}
                  <strong className="text-brand-deep">{formatRupiah(minPrice ?? 0)}</strong>.
                </p>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Belum ada paket dengan keberangkatan langsung dari {city.name} pada jadwal terdekat. Berikut 3 paket
                  unggulan dari kota besar terdekat yang populer di kalangan jamaah {city.name} — hubungi kami untuk
                  opsi gabungan bus/penerbangan domestik menuju titik keberangkatan.
                </p>
              )}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {shownPackages.map((p) => (
                  <PackageMiniCard key={p.slug} pkg={p} />
                ))}
              </div>
              <Link
                href="/#/paket"
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand underline-offset-4 hover:underline"
              >
                Lihat semua paket umrah →
              </Link>
            </section>

            {/* FAQ kota */}
            {city.faqs.length > 0 ? (
              <section aria-labelledby="faq-kota" className="space-y-4">
                <h2 id="faq-kota" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                  Pertanyaan umum umrah dari {city.name}
                </h2>
                <FaqAccordion faqs={city.faqs} />
              </section>
            ) : null}

            {/* Silo layanan × kota — matrix /layanan/[slug]/dari-[kota] */}
            <section aria-labelledby="layanan-kota" className="rounded-2xl border border-line-warm bg-brand-soft p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 id="layanan-kota" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Layanan populer dari {city.name}
                </h2>
                <Link href="/layanan" className="text-sm font-bold text-brand underline-offset-4 hover:underline">
                  Semua 210 layanan →
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Setiap layanan tersedia untuk jamaah {city.name} — klik untuk panduan harga &amp; cara order spesifik
                keberangkatan {city.airportCode}:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceList.slice(0, 10).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/layanan/${s.slug}/dari-${city.slug}`}
                    className="rounded-full border border-line-warm bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <Card className="border-line-warm">
              <CardHeader>
                <p className="flex items-center gap-2 text-xs font-bold tracking-wider text-gold-deep uppercase">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ringkasan
                </p>
                <CardTitle className="text-lg font-extrabold text-brand-deep">
                  Umrah dari {city.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-ink-muted">
                <p className="flex items-start gap-2">
                  <PlaneTakeoff className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {city.airport} ({city.airportCode})
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  ± {formatJam(city.flightTimeHours)} ke Jeddah
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {city.province} · {city.island}
                </p>
                <Button asChild className="w-full bg-brand text-white hover:bg-brand-deep">
                  <Link href="/#/kontak">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Konsultasi via WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <LeadForm
              serviceSlug={serviceList[0]?.slug ?? "pengurusan-visa-umrah"}
              serviceName="Umrah & layanan perjalanan"
              citySlug={city.slug}
              cityName={city.name}
              pagePath={url}
              compact
            />
          </aside>
        </div>
      </div>

      {/* Kota se-island */}
      {sameIsland.length > 0 ? (
        <section aria-labelledby="kota-seisland" className="border-t border-line-warm bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="kota-seisland" className="text-2xl font-extrabold tracking-tight text-brand-deep">
              Kota lain di {city.island}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sameIsland.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/kota/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-ivory px-3.5 py-1.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-soft"
                  >
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* CTA akhir */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Siap berangkat umrah dari {city.name}?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Konsultasikan jadwal, hotel, dan anggaran Anda — gratis, bersama penyelenggara terverifikasi.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-gold-soft text-gold-deep hover:bg-white">
            <Link href="/#/kontak">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Konsultasi via WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
