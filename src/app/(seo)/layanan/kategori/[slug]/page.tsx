import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbTrail, CategoryIcon, ServiceCard } from "@/components/seo/silo-bits";
import {
  getServiceCategory,
  serviceCategoryList,
  servicesByCategory,
} from "@/data/services";

/* Halaman kategori layanan — 14 halaman di bawah /layanan/kategori/[slug]. */

export function generateStaticParams() {
  return serviceCategoryList.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) return { title: "Kategori layanan tidak ditemukan" };

  const services = servicesByCategory(category.slug);
  const title = `${category.name} — ${services.length} Layanan Umrah Terverifikasi`;
  const description =
    `${category.tagline}. ${category.description}`.slice(0, 157).trim() + "…";
  const url = `/layanan/kategori/${category.slug}`;
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
    },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) notFound();

  const services = servicesByCategory(category.slug);
  const otherCategories = serviceCategoryList.filter((c) => c.slug !== category.slug);
  const url = `/layanan/kategori/${category.slug}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${services.length} layanan kategori ${category.name}`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE}/layanan/${s.slug}`,
    })),
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    url: `${SITE}${url}`,
    description: category.description,
    isPartOf: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: "/" },
          { name: "Layanan", url: "/layanan" },
          { name: category.name, url },
        ])}
      />
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <BreadcrumbTrail
        items={[
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: category.name },
        ]}
      />

      {/* Header kategori */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3.5 py-2 text-gold">
            <CategoryIcon name={category.icon} className="h-5 w-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Kategori Layanan</span>
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">{category.name}</h1>
          <p className="mt-2 text-sm font-semibold text-gold">{category.tagline}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">{category.description}</p>
          <p className="mt-5 inline-flex rounded-full bg-gold-soft px-4 py-1.5 text-sm font-bold text-gold-deep">
            {services.length} layanan tersedia
          </p>
        </div>
      </section>

      {/* Grid layanan kategori */}
      <section aria-labelledby="daftar-layanan-kategori" className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="daftar-layanan-kategori" className="text-2xl font-extrabold tracking-tight text-brand-deep">
            Semua layanan {category.name.toLowerCase()}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Pilih layanan untuk melihat cakupan lengkap, langkah proses, estimasi biaya, dan pertanyaan yang sering
            diajukan jamaah.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Kategori lain */}
      <section aria-labelledby="kategori-lain" className="border-t border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="kategori-lain" className="text-2xl font-extrabold tracking-tight text-brand-deep">
            Jelajahi kategori layanan lainnya
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/layanan/kategori/${c.slug}`}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-line-warm bg-ivory px-4 py-3 transition-colors hover:border-brand/40 hover:bg-brand-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-white">
                    <CategoryIcon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-brand-deep">{c.name}</span>
                    <span className="block truncate text-xs text-ink-muted">{c.tagline}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/layanan"
            className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-brand underline-offset-4 hover:underline"
          >
            ← Kembali ke semua layanan
          </Link>
        </div>
      </section>
    </>
  );
}
