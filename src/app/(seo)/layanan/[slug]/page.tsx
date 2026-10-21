import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, ListChecks, MessageCircle, Wallet } from "lucide-react";
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
  formatRupiah,
  ServiceCard,
} from "@/components/seo/silo-bits";
import { getService, getServiceCategory, relatedServices, serviceList } from "@/data/services";
import { cityList } from "@/data/cities";
import { LeadForm } from "@/components/seo/lead-form";

/* Detail layanan — inti ratusan halaman SEO /layanan/[slug]. */

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Layanan tidak ditemukan" };

  const title = `${service.name} — Panduan & Harga 2026`;
  const url = `/layanan/${service.slug}`;
  const category = getServiceCategory(service.categorySlug);
  const ogParams = new URLSearchParams({ t: service.name, chip: category?.name ?? "Layanan Terverifikasi" });
  if (typeof service.priceFrom === "number" && service.priceFrom > 0) {
    ogParams.set("price", `Mulai ${formatRupiah(service.priceFrom)}`);
  }
  return {
    title,
    description: service.shortDesc,
    keywords: service.keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.shortDesc,
      url: `${SITE}${url}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [{ url: `${SITE}/api/og?${ogParams.toString()}`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = getServiceCategory(service.categorySlug);
  const related = relatedServices(service.slug, 6);
  const paragraphs = service.longDesc.split("\n\n").filter(Boolean);
  const url = `/layanan/${service.slug}`;

  return (
    <>
      {/* JSON-LD: Service + FAQPage + BreadcrumbList + Organization */}
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.shortDesc,
          url,
          category: category?.name,
          priceFrom: service.priceFrom,
        })}
      />
      {service.faqs.length > 0 ? <JsonLd data={faqJsonLd(service.faqs)} /> : null}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: "/" },
          { name: "Layanan", url: "/layanan" },
          { name: category?.name ?? "Kategori", url: `/layanan/kategori/${service.categorySlug}` },
          { name: service.name, url },
        ])}
      />
      <JsonLd data={organizationJsonLd()} />

      <BreadcrumbTrail
        items={[
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: category?.name ?? "Kategori", href: `/layanan/kategori/${service.categorySlug}` },
          { name: service.name },
        ]}
      />

      {/* Header halaman */}
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
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{service.shortDesc}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {typeof service.priceFrom === "number" && service.priceFrom > 0 ? (
              <span className="rounded-full bg-gold-soft px-4 py-1.5 text-sm font-bold text-gold-deep">
                Mulai {formatRupiah(service.priceFrom)}
              </span>
            ) : null}
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/85">
              Panduan lengkap &amp; FAQ
            </span>
          </div>
        </div>
      </section>

      {/* Konten utama + sidebar */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0 space-y-10">
            {/* Deskripsi panjang */}
            <section aria-labelledby="tentang-layanan" className="space-y-4">
              <h2 id="tentang-layanan" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                Tentang {service.name}
              </h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </section>

            {/* Features */}
            <section aria-labelledby="termasuk-layanan" className="rounded-2xl border border-line-warm bg-white p-6">
              <div className="flex items-center gap-2.5">
                <ListChecks className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="termasuk-layanan" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Termasuk apa saja?
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Cakupan standar {service.name.toLowerCase()} yang Anda dapatkan melalui penyelenggara terverifikasi di
                SolusiHajj:
              </p>
              <div className="mt-4">
                <CheckList items={service.features} columns={2} />
              </div>
            </section>

            {/* Proses */}
            <section aria-labelledby="proses-layanan" className="rounded-2xl border border-line-warm bg-brand-soft p-6">
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 id="proses-layanan" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  Cara prosesnya
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

            {/* FAQ */}
            {service.faqs.length > 0 ? (
              <section aria-labelledby="faq-layanan" className="space-y-4">
                <h2 id="faq-layanan" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                  Pertanyaan yang sering diajukan
                </h2>
                <FaqAccordion faqs={service.faqs} />
              </section>
            ) : null}

            {/* Silo kota keberangkatan — matrix /layanan/[slug]/dari-[kota] */}
            <section aria-labelledby="kota-layanan" className="rounded-2xl border border-line-warm bg-brand-soft p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 id="kota-layanan" className="text-xl font-extrabold tracking-tight text-brand-deep">
                  {service.name} dari kota keberangkatan
                </h2>
                <Link href="/kota" className="text-sm font-bold text-brand underline-offset-4 hover:underline">
                  Semua 45 kota →
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Layanan ini tersedia untuk jamaah dari 45 kota di seluruh Indonesia — pilih kota Anda untuk panduan
                spesifik (bandara, waktu terbang, charter):
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cityList.slice(0, 12).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/layanan/${service.slug}/dari-${c.slug}`}
                    className="rounded-full border border-line-warm bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar harga & CTA */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
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
                <Separator className="bg-line-warm" />
                <LeadForm
                  serviceSlug={service.slug}
                  serviceName={service.name}
                  pagePath={url}
                  compact
                />
                <Button asChild className="w-full bg-brand text-white hover:bg-brand-deep">
                  <Link href="/#/kontak">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Konsultasi via WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {category ? (
              <Card className="border-line-warm bg-gold-soft">
                <CardContent className="space-y-2">
                  <p className="text-xs font-bold tracking-wider text-gold-deep uppercase">Kategori</p>
                  <Link
                    href={`/layanan/kategori/${category.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-brand-deep underline-offset-4 hover:underline"
                  >
                    <CategoryIcon name={category.icon} className="h-4 w-4 text-brand" />
                    {category.name}
                  </Link>
                  <p className="text-sm leading-relaxed text-ink-muted">{category.tagline}</p>
                </CardContent>
              </Card>
            ) : null}
          </aside>
        </div>
      </div>

      {/* Layanan terkait */}
      {related.length > 0 ? (
        <section aria-labelledby="layanan-terkait" className="border-t border-line-warm bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="layanan-terkait" className="text-2xl font-extrabold tracking-tight text-brand-deep">
                Layanan terkait
              </h2>
              <Link
                href="/layanan"
                className="text-sm font-bold text-brand underline-offset-4 hover:underline"
              >
                Lihat semua layanan →
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ServiceCard key={r.slug} service={r} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA akhir */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Siap memesan {service.name.toLowerCase()}?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Tim SolusiHajj menghubungkan Anda dengan penyelenggara terverifikasi — gratis, tanpa biaya perantara.
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
