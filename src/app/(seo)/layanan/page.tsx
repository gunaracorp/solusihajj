import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbTrail, CategoryIcon, FaqAccordion, ServiceCard } from "@/components/seo/silo-bits";
import { serviceCategoryList, serviceList, servicesByCategory } from "@/data/services";

/* Indeks portal layanan — 200+ layanan dikelompokkan per kategori (14). */

export function generateMetadata(): Metadata {
  const description =
    `Jelajahi ${serviceList.length}+ layanan umrah & haji lengkap A–Z: visa, tiket, hotel, manasik, mutawif, handling, hingga asuransi perjalanan — dari penyelenggara terverifikasi dengan harga transparan di SolusiHajj.`;
  return {
    title: { absolute: `${serviceList.length}+ Layanan Umrah & Haji Lengkap A–Z — SolusiHajj` },
    description,
    alternates: { canonical: "/layanan" },
    openGraph: {
      title: `${serviceList.length}+ Layanan Umrah & Haji Lengkap A–Z — SolusiHajj`,
      description,
      url: `${SITE}/layanan`,
      type: "website",
      siteName: "SolusiHajj",
    },
  };
}

const PORTAL_FAQS = [
  {
    q: "Apa saja layanan umrah dan haji yang tersedia di SolusiHajj?",
    a: "SolusiHajj memuat ratusan layanan lengkap A–Z dalam 14 kategori: pengurusan visa dan dokumen, tiket pesawat, hotel Makkah & Madinah, transportasi bus, manasik, mutawif, handling bandara, katerangan, asuransi, hingga layanan digital pendukung perjalanan ibadah.",
  },
  {
    q: "Apakah penyelenggara layanan di SolusiHajj sudah terverifikasi?",
    a: "Ya. Setiap penyelenggara (PPIU, PIHK, BPW, dan KBIHU) melewati verifikasi lima lapis: izin Kemenag/KBIHU aktif, audit kantor, track record angkatan, rating jamaah, dan kelengkapan dokumen legal. Status verifikasi selalu bisa Anda cek kapan pun.",
  },
  {
    q: "Berapa biaya layanan umrah di SolusiHajj?",
    a: "Setiap halaman layanan menampilkan kisaran harga termurah (mulai dari) secara transparan beserta catatan harga resminya. Anda bisa membandingkan beberapa penyelenggara sebelum memutuskan, tanpa biaya tersembunyi.",
  },
  {
    q: "Bagaimana cara memesan layanan melalui SolusiHajj?",
    a: "Buka halaman layanan yang Anda butuhkan, pelajari cakupan, proses, dan FAQ-nya, lalu klik tombol Konsultasi via WhatsApp. Tim kami menghubungkan Anda dengan penyelenggara terverifikasi yang paling sesuai kebutuhan dan keberangkatan Anda.",
  },
  {
    q: "Apakah dana saya aman saat bertransaksi di SolusiHajj?",
    a: "Aman. Transaksi paket dan layanan dijaga escrow syariah — dana jamaah baru diteruskan ke penyelenggara setelah layanan berjalan sesuai kesepakatan. Sistem ini melindungi Anda dari penyalahgunaan dana.",
  },
];

export default function LayananIndexPage() {
  const totalServices = serviceList.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${totalServices}+ Layanan Umrah & Haji Lengkap A–Z`,
    numberOfItems: totalServices,
    itemListElement: serviceList.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE}/layanan/${s.slug}`,
    })),
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Layanan Umrah & Haji Lengkap A–Z",
    url: `${SITE}/layanan`,
    description: `Portal ${totalServices}+ layanan umrah & haji dalam ${serviceCategoryList.length} kategori dari penyelenggara terverifikasi.`,
    hasPart: serviceCategoryList.map((c) => ({
      "@type": "CollectionPage",
      name: c.name,
      url: `${SITE}/layanan/kategori/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Beranda", url: "/" }, { name: "Layanan", url: "/layanan" }])} />
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <BreadcrumbTrail items={[{ name: "Beranda", href: "/" }, { name: "Layanan" }]} />

      {/* Hero */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-sm font-semibold tracking-wider text-gold uppercase">Portal Layanan</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {totalServices}+ Layanan Umrah &amp; Haji Lengkap A–Z
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Satu gerbang untuk seluruh kebutuhan perjalanan ibadah: dari pengurusan visa, tiket, hotel dekat Haram,
            manasik, hingga mutawif pendamping. Setiap layanan disajikan dengan cakupan, proses, harga, dan FAQ yang
            transparan.
          </p>
          <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Total Layanan</dt>
              <dd className="text-2xl font-extrabold text-white">{totalServices}+</dd>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Kategori</dt>
              <dd className="text-2xl font-extrabold text-white">{serviceCategoryList.length}</dd>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Penyelenggara</dt>
              <dd className="text-2xl font-extrabold text-white">Terverifikasi</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Navigasi cepat kategori */}
      <section aria-label="Navigasi cepat kategori layanan" className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <ul className="flex flex-wrap gap-2">
            {serviceCategoryList.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/layanan/kategori/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-ivory px-3.5 py-1.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-soft"
                >
                  <CategoryIcon name={c.icon} className="h-4 w-4 text-brand" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section per kategori */}
      {serviceCategoryList.map((cat, idx) => {
        const services = servicesByCategory(cat.slug);
        return (
          <section
            key={cat.slug}
            aria-labelledby={`cat-${cat.slug}`}
            className={idx % 2 === 0 ? "bg-ivory" : "bg-white"}
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <CategoryIcon name={cat.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 id={`cat-${cat.slug}`} className="text-2xl font-extrabold tracking-tight text-brand-deep">
                    {cat.name}
                    <span className="ml-3 align-middle text-sm font-semibold text-ink-muted">
                      {services.length} layanan
                    </span>
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-gold-deep">{cat.tagline}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">{cat.description}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
              <Link
                href={`/layanan/kategori/${cat.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand underline-offset-4 hover:underline"
              >
                Lihat halaman kategori {cat.name} →
              </Link>
            </div>
          </section>
        );
      })}

      {/* Keunggulan singkat */}
      <section aria-labelledby="keunggulan-layanan" className="bg-gold-soft">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="keunggulan-layanan" className="text-2xl font-extrabold tracking-tight text-brand-deep">
            Kenapa memesan layanan lewat SolusiHajj?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <ShieldCheck className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold text-brand-deep">Penyelenggara Terverifikasi 5 Lapis</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                Izin aktif, audit kantor, track record angkatan, rating jamaah, dan legalitas dokumen — semua lolos
                kurasi sebelum tampil.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Sparkles className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold text-brand-deep">Harga Transparan A–Z</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                Setiap layanan mencantumkan kisaran harga mulai-dari dan catatan komponen biaya, sehingga Anda bisa
                membandingkan tanpa tebak-tebakan.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <BadgeCheck className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold text-brand-deep">Dana Dijaga Escrow Syariah</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                Untuk transaksi paket lengkap, dana jamaah ditahan escrow dan baru diteruskan saat layanan berjalan
                sesuai kesepakatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ portal */}
      <section aria-labelledby="faq-portal-layanan" className="bg-ivory">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-14">
          <div className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-brand" aria-hidden="true" />
            <h2 id="faq-portal-layanan" className="text-2xl font-extrabold tracking-tight text-brand-deep">
              Pertanyaan Umum Portal Layanan
            </h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Belum menemukan layanan yang tepat? Pelajari dulu cara kerja portal di bawah ini, atau langsung
            konsultasi gratis bersama tim kami.
          </p>
          <div className="mt-6">
            <FaqAccordion faqs={PORTAL_FAQS} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-brand text-white hover:bg-brand-deep">
              <Link href="/#/kontak">Konsultasi via WhatsApp</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-brand bg-transparent text-brand hover:bg-brand-soft hover:text-brand-deep"
            >
              <Link href="/#/paket">Lihat Paket Umrah</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
