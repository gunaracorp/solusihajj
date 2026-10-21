import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Clock,
  ListChecks,
  MapPin,
  MessageCircle,
  PlaneTakeoff,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  JsonLd,
  SITE,
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  serviceJsonLd,
} from "@/components/seo/json-ld";
import {
  BreadcrumbTrail,
  CategoryIcon,
  CheckList,
  FaqAccordion,
  formatJam,
  formatRupiah,
} from "@/components/seo/silo-bits";
import { LeadForm } from "@/components/seo/lead-form";
import { getService, getServiceCategory, relatedServices, serviceList } from "@/data/services";
import { cityList, type CityPage } from "@/data/cities";

/* ============================================================
   MATRIX PROGRAMMATIC SEO — /layanan/[slug]/dari-[kota]
   210 layanan × 45 kota = 9.450 halaman landing long-tail
   ("{layanan} dari {kota}") — Prioritas 1 God Mode Tier Max.
   Konten 100% digenerate dari data services/ + cities.ts,
   unik per kombinasi (nama layanan × konteks kota).
   ============================================================ */

export const revalidate = 86400; // ISR harian — konten data-driven jarang berubah

/** "dari-jakarta" → "jakarta"; null bila format salah. */
function parseKotaParam(kotaParam: string): string | null {
  if (!kotaParam.startsWith("dari-")) return null;
  const slug = kotaParam.slice(5);
  return slug.length > 0 ? slug : null;
}

function getCity(slug: string): CityPage | undefined {
  return cityList.find((c) => c.slug === slug);
}

/** Daftar kota lain (maks. `limit`) untuk silo internal-linking — kota besar lebih dulu. */
function otherCities(currentSlug: string, limit: number): CityPage[] {
  return cityList.filter((c) => c.slug !== currentSlug).slice(0, limit);
}

/** Paragraf intro unik per kombinasi layanan×kota (bukan duplikat boilerplate). */
function buildCityParagraphs(serviceName: string, serviceLong: string, city: CityPage): string[] {
  const transport = city.directCharter
    ? `Keberangkatan dari ${city.name} difasilitasi charter grup langsung ke Jeddah/Madinah pada musim umrah, sehingga perjalanan lebih singkat dan rombongan tetap satu pesawat.`
    : `Sebagian keberangkatan dari ${city.name} melewati satu transit (umumnya Jakarta, Kuala Lumpur, atau Jeddah) — penyelenggara yang baik sudah mencantumkan rincian transit beserta estimasi waktu tunggu.`;

  return [
    `${serviceName} dari ${city.name} menghubungkan jamaah ${city.province} dengan layanan terstandar: mulai dari administrasi keberangkatan, pendampingan manasik, hingga koordinasi bandara. ${city.intro.split(". ")[0]}.`,
    `Secara teknis, jamaah berangkat melalui ${city.airport} (${city.airportCode}) dengan waktu terbang ± ${formatJam(city.flightTimeHours)} ke Jeddah. ${transport}`,
    serviceLong.split("\n\n")[0],
  ];
}

export function generateStaticParams(): Array<{ slug: string; kota: string }> {
  const params: Array<{ slug: string; kota: string }> = [];
  for (const s of serviceList) {
    for (const c of cityList) {
      params.push({ slug: s.slug, kota: `dari-${c.slug}` });
    }
  }
  return params; // 9.450 kombinasi
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; kota: string }>;
}): Promise<Metadata> {
  const { slug, kota: kotaParam } = await params;
  const service = getService(slug);
  const citySlug = parseKotaParam(kotaParam);
  const city = citySlug ? getCity(citySlug) : undefined;
  if (!service || !city) return { title: "Halaman tidak ditemukan" };

  const harga =
    typeof service.priceFrom === "number" && service.priceFrom > 0
      ? ` mulai ${formatRupiah(service.priceFrom)}`
      : "";
  const title = `${service.name} dari ${city.name} — Harga & Cara Order 2026`;
  const description = `${service.name} dari ${city.name}${harga}. Via ${city.airportCode} ±${city.flightTimeHours} jam. Panduan lengkap, biaya, dan minta penawaran gratis dari penyelenggara terverifikasi.`.slice(
    0,
    300
  );
  const url = `/layanan/${service.slug}/dari-${city.slug}`;
  const ogParams = new URLSearchParams({
    t: `${service.name} dari ${city.name}`,
    chip: `Dari ${city.name}`,
    foot: `${city.airportCode} · Minta penawaran gratis`,
  });
  if (typeof service.priceFrom === "number" && service.priceFrom > 0) {
    ogParams.set("price", `Mulai ${formatRupiah(service.priceFrom)}`);
  }
  ogParams.set("badge", "Terverifikasi 5 Lapis");
  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      `${service.name.toLowerCase()} dari ${city.name.toLowerCase()}`,
      `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `layanan umrah ${city.name.toLowerCase()}`,
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url: `${SITE}${url}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [{ url: `${SITE}/api/og?${ogParams.toString()}`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; kota: string }>;
}) {
  const { slug, kota: kotaParam } = await params;
  const service = getService(slug);
  const citySlug = parseKotaParam(kotaParam);
  const city = citySlug ? getCity(citySlug) : undefined;
  if (!service || !city) notFound();

  const category = getServiceCategory(service.categorySlug);
  const cityParas = buildCityParagraphs(service.name, service.longDesc, city);
  const url = `/layanan/${service.slug}/dari-${city.slug}`;

  // FAQ gabungan: FAQ layanan + FAQ kota (kombinasi unik per halaman matrix).
  const faqs = [...service.faqs, ...city.faqs].slice(0, 8);

  // Silo internal-linking:
  const relatedInCity = relatedServices(service.slug, 6); // layanan lain, kota sama
  const cityLinks = otherCities(city.slug, 12); // kota lain, layanan sama

  return (
    <>
      {/* JSON-LD: Service(areaServed City) + FAQPage + BreadcrumbList + Organization */}
      <JsonLd
        data={serviceJsonLd({
          name: `${service.name} dari ${city.name}`,
          description: service.shortDesc,
          url,
          category: category?.name,
          priceFrom: service.priceFrom,
          areaCity: city.name,
        })}
      />
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: "/" },
          { name: "Layanan", url: "/layanan" },
          { name: category?.name ?? "Kategori", url: `/layanan/kategori/${service.categorySlug}` },
          { name: service.name, url: `/layanan/${service.slug}` },
          { name: `dari ${city.name}`, url },
        ])}
      />
      <JsonLd data={organizationJsonLd()} />

      <BreadcrumbTrail
        items={[
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: category?.name ?? "Kategori", href: `/layanan/kategori/${service.categorySlug}` },
          { name: service.name, href: `/layanan/${service.slug}` },
          { name: `dari ${city.name}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          {category ? (
            <Link
              href={`/layanan/kategori/${category.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-gold transition-colors hover:bg-white/20"
            >
              <CategoryIcon name={category.icon} className="h-3.5 w-3.5" />
              {category.name}
            </Link>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {service.name} dari {city.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{service.shortDesc}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {typeof service.priceFrom === "number" && service.priceFrom > 0 ? (
              <span className="rounded-full bg-gold-soft px-4 py-1.5 text-sm font-bold text-gold-deep">
                Mulai {formatRupiah(service.priceFrom)}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/85">
              <PlaneTakeoff className="h-3.5 w-3.5" aria-hidden="true" />
              {city.airportCode} · ± {formatJam(city.flightTimeHours)}
            </span>
            {city.directCharter ? (
              <span className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white">
                Charter Langsung
              </span>
            ) : (
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/85">
                Via Transit
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Konten utama + sidebar */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0 space-y-10">
            {/* Tentang layanan × kota */}
            <section aria-labelledby="tentang-matrix" className="space-y-4">
              <h2 id="tentang-matrix" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                {service.name} dari {city.name}: yang perlu Anda tahu
              </h2>
              {cityParas.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </section>

            {/* Info keberangkatan kota */}
            <section aria-labelledby="info-berangkat" className="rounded-2xl border border-line-warm bg-white p-6">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="info-berangkat" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Info keberangkatan dari {city.name}
                </h2>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-soft p-4">
                  <p className="text-xs font-bold tracking-wider text-brand-deep uppercase">Bandara</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {city.airport} ({city.airportCode})
                  </p>
                </div>
                <div className="rounded-xl bg-brand-soft p-4">
                  <p className="text-xs font-bold tracking-wider text-brand-deep uppercase">Waktu terbang</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-ink">
                    <Clock className="h-4 w-4 text-brand" aria-hidden="true" />± {formatJam(city.flightTimeHours)} ke
                    Jeddah
                  </p>
                </div>
                <div className="rounded-xl bg-brand-soft p-4">
                  <p className="text-xs font-bold tracking-wider text-brand-deep uppercase">Wilayah</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {city.province} · Pulau {city.island}
                  </p>
                </div>
                <div className="rounded-xl bg-brand-soft p-4">
                  <p className="text-xs font-bold tracking-wider text-brand-deep uppercase">Penerbangan</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {city.directCharter ? "Charter grup langsung tersedia" : "Reguler / via transit"}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold tracking-wider text-ink-muted uppercase">
                  Keunggulan berangkat dari {city.name}
                </p>
                <div className="mt-3">
                  <CheckList items={city.highlights} />
                </div>
              </div>
              <Separator className="my-5 bg-line-warm" />
              <Link
                href={`/kota/${city.slug}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand underline-offset-4 hover:underline"
              >
                Panduan lengkap umrah dari {city.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>

            {/* Termasuk apa saja */}
            <section aria-labelledby="termasuk-matrix" className="rounded-2xl border border-line-warm bg-white p-6">
              <div className="flex items-center gap-2.5">
                <ListChecks className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="termasuk-matrix" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Termasuk apa saja?
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Cakupan standar {service.name.toLowerCase()} untuk jamaah {city.name} melalui penyelenggara
                terverifikasi di SolusiHajj:
              </p>
              <div className="mt-4">
                <CheckList items={service.features} columns={2} />
              </div>
            </section>

            {/* Cara prosesnya */}
            <section aria-labelledby="proses-matrix" className="rounded-2xl border border-line-warm bg-brand-soft p-6">
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="proses-matrix" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Cara prosesnya dari {city.name}
                </h2>
              </div>
              <ol className="mt-4 space-y-4">
                {service.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ gabungan layanan × kota */}
            {faqs.length > 0 ? (
              <section aria-labelledby="faq-matrix" className="space-y-4">
                <h2 id="faq-matrix" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                  Pertanyaan seputar {service.name.toLowerCase()} dari {city.name}
                </h2>
                <FaqAccordion faqs={faqs} />
              </section>
            ) : null}
          </article>

          {/* Sidebar: harga + form lead */}
          <aside id="form-lead" className="h-fit space-y-6 lg:sticky lg:top-24">
            <Card className="border-line-warm">
              <CardHeader>
                <p className="flex items-center gap-2 text-xs font-bold tracking-wider text-gold-deep uppercase">
                  <Wallet className="h-4 w-4" aria-hidden="true" />
                  Estimasi Biaya
                </p>
                {typeof service.priceFrom === "number" && service.priceFrom > 0 ? (
                  <CardTitle className="text-2xl font-extrabold text-brand-deep">
                    Mulai {formatRupiah(service.priceFrom)}
                  </CardTitle>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-ink-muted">{service.priceNote}</p>
                <p className="flex items-start gap-1.5 text-xs leading-relaxed text-ink-muted">
                  <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  Harga akhir untuk keberangkatan {city.name} dikonfirmasi penyelenggara saat penawaran — tergantung
                  jadwal charter &amp; kelas hotel.
                </p>
              </CardContent>
            </Card>

            <LeadForm
              serviceSlug={service.slug}
              serviceName={service.name}
              citySlug={city.slug}
              cityName={city.name}
              pagePath={url}
              compact
            />
          </aside>
        </div>
      </div>

      {/* Silo: layanan lain dari kota sama */}
      {relatedInCity.length > 0 ? (
        <section aria-labelledby="silo-kota" className="border-t border-line-warm bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="silo-kota" className="text-2xl font-extrabold tracking-tight text-brand-deep">
              Layanan lain dari {city.name}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedInCity.map((r) => (
                <Link
                  key={r.slug}
                  href={`/layanan/${r.slug}/dari-${city.slug}`}
                  className="group rounded-2xl border border-line-warm bg-white p-4 transition-all hover:border-brand/40 hover:shadow-md"
                >
                  <p className="font-bold text-brand-deep transition-colors group-hover:text-brand">{r.name}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{r.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Silo: kota lain untuk layanan sama */}
      <section aria-labelledby="silo-layanan" className="border-t border-line-warm bg-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="silo-layanan" className="text-2xl font-extrabold tracking-tight text-brand-deep">
              {service.name} dari kota lain
            </h2>
            <Link href="/kota" className="text-sm font-bold text-brand underline-offset-4 hover:underline">
              Lihat semua 45 kota →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {cityLinks.map((c) => (
              <Link
                key={c.slug}
                href={`/layanan/${service.slug}/dari-${c.slug}`}
                className="rounded-full border border-line-warm bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Badge className="border-transparent bg-gold-soft text-gold-deep hover:bg-gold-soft">
              Tersedia dari 45 kota di seluruh Indonesia
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA akhir */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Siap berangkat {service.name.toLowerCase()} dari {city.name}?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Isi form penawaran — tim SolusiHajj menghubungkan Anda dengan penyelenggara terverifikasi, gratis.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-gold-soft text-gold-deep hover:bg-white">
            <a href="#form-lead">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Minta Penawaran
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
