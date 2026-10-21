import type { Metadata } from "next";
import Link from "next/link";
import { faqList } from "@/data/faq";
import { JsonLd, SITE, breadcrumbJsonLd, faqJsonLd, organizationJsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/pkg-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* Halaman FAQ publik — data dari sumber tunggal src/data/faq.ts. */

const KATEGORI_LABEL: Record<string, string> = {
  umum: "Pertanyaan Umum",
  escrow: "AmanahEscrow & Dana",
  verifikasi: "Verifikasi & Keamanan",
  pembatalan: "Pembatalan & Refund",
};

const KATEGORI_URUT = ["umum", "verifikasi", "escrow", "pembatalan"] as const;

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan yang Sering Diajukan Jamaah",
  description:
    "Jawaban resmi SolusiHajj: apakah platform ini menyelenggarakan umrah, cara kerja escrow 40/40/20, verifikasi 5 lapis PPIU, review Saksi Jamaah, hingga pembatalan dan refund dana.",
  alternates: { canonical: `${SITE}/faq` },
  openGraph: {
    title: "FAQ — Pertanyaan yang Sering Diajukan Jamaah | SolusiHajj",
    description:
      "Semua yang perlu Anda tahu sebelum bertransaksi: peran SolusiHajj, perlindungan dana escrow, verifikasi penyelenggara, dan jalur pembatalan.",
    url: `${SITE}/faq`,
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <div>
      <PageHero
        breadcrumbs={[{ name: "Beranda", url: "/" }, { name: "FAQ", url: "/faq" }]}
        title="Pertanyaan yang Sering Diajukan"
        lead="Jawaban lugas tentang peran SolusiHajj, perlindungan dana, dan cara memastikan keberangkatan Anda aman."
      />

      <div className="mx-auto max-w-4xl px-4 py-10">
        {KATEGORI_URUT.map((kat) => {
          const items = faqList.filter((f) => f.category === kat);
          if (!items.length) return null;
          return (
            <section key={kat} className="mb-10" aria-labelledby={`faq-${kat}`}>
              <h2 id={`faq-${kat}`} className="mb-4 text-xl font-extrabold text-brand-deep">
                {KATEGORI_LABEL[kat]}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {items.map((f, i) => (
                  <AccordionItem key={i} value={`${kat}-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-ink">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          );
        })}

        <section className="rounded-2xl border border-line-warm bg-brand-soft p-6">
          <h2 className="text-lg font-extrabold text-brand-deep">Masih ada pertanyaan?</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Tim kami siap membantu pukul 08.00–21.00 WIB. Anda juga bisa langsung memeriksa izin
            penyelenggara lewat tool publik kami — gratis, tanpa perlu mendaftar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/#/verifikasi/cek-izin-ppiu"
              className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Cek Izin PPIU — Gratis
            </Link>
            <Link
              href="/#/kontak"
              className="rounded-xl border border-brand px-5 py-3 text-sm font-bold text-brand-deep transition-colors hover:bg-brand-soft"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          faqJsonLd(faqList.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbJsonLd([
            { name: "Beranda", url: SITE },
            { name: "FAQ", url: `${SITE}/faq` },
          ]),
          organizationJsonLd(),
        ]}
      />
    </div>
  );
}
