"use client";

import { Link } from "@/lib/solusihajj/router";
import { SectionHeading } from "../ui-bits";
import { cn } from "@/lib/utils";
import {
  Library,
  ShieldCheck,
  BadgeCheck,
  Database,
  Sparkles,
  PlaneTakeoff,
  Wallet,
  Landmark,
  Gift,
  MessageCircle,
  BookOpen,
  Globe2,
  HandCoins,
  ArrowRight,
  ExternalLink,
  Trophy,
  Layers,
  Flag,
  Lightbulb,
  Swords,
  Search,
} from "lucide-react";
import {
  benchmarkList,
  fusionFeatures,
  fusionStats,
  capabilityMatrix,
  BENCHMARK_DATE,
  type BenchmarkSite,
} from "@/data/benchmark";

/**
 * BENCHMARK 20 — "Studi Gabungan 20 Marketplace Haji & Umrah Teratas Dunia"
 * Halaman transparansi riset: 20 platform teratas dunia dibedah — fitur
 * killer-nya, apa yang digabungkan ke SolusiHajj, dan apa pembeda eksklusif
 * kita di atas mereka. Rumusan: (umroh.com + Nusuk + OTA terbaik) ^ escrow.
 */

const FUSION_ICONS: Record<string, React.ElementType> = {
  Library,
  ShieldCheck,
  BadgeCheck,
  Database,
  Sparkles,
  PlaneTakeoff,
  Wallet,
  Landmark,
  Gift,
  MessageCircle,
  BookOpen,
  Globe2,
  HandCoins,
};

const STATUS_META: Record<string, { label: string; cls: string }> = {
  LIVE: { label: "Sudah Live", cls: "bg-brand-soft text-brand border-brand/30" },
  "LIVE (R2)": { label: "Live — R2", cls: "bg-brand-soft text-brand border-brand/30" },
  "LIVE (R3)": { label: "Live — R3", cls: "bg-gold-soft text-gold-deep border-gold/40" },
  "LIVE (R4)": { label: "Live — R4 Baru", cls: "bg-gold-soft text-gold-deep border-gold/40" },
  ROADMAP: { label: "Roadmap", cls: "bg-ivory text-ink-muted border-line-warm" },
};

const CAT_CLS: Record<string, string> = {
  Marketplace: "bg-brand-soft text-brand border-brand/30",
  "Platform Resmi": "bg-[#FAF5E4] text-[#8A6D0B] border-[#C9A227]/40",
  OTA: "bg-[#EAF2EE] text-[#0B5E43] border-[#0E6B4E]/25",
  "Travel Tech": "bg-ivory text-ink-muted border-line-warm",
};

function JsonLd() {
  const BASE = "https://solusihajj.com";
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "20 Marketplace Haji & Umrah Teratas Dunia — Studi Benchmark SolusiHajj",
    description:
      "Hasil riset 20 platform pemesanan haji dan umrah terbaik di dunia (Indonesia, Arab Saudi, UAE, Malaysia, Singapura, Bangladesh, Nigeria, AS, Inggris) beserta fitur terbaik yang digabungkan ke dalam marketplace SolusiHajj.",
    datePublished: "2026-10-20",
    itemListElement: benchmarkList.map((b) => ({
      "@type": "ListItem",
      position: b.rank,
      item: {
        "@type": "WebSite",
        name: b.name,
        url: b.url,
        description: `${b.killer[0]} — ${b.scale}`,
        areaServed: b.country,
      },
    })),
  };
  const study = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Studi Benchmark: Menggabungkan 20 Marketplace Haji & Umrah Teratas ke Satu Platform",
    datePublished: "2026-10-20",
    author: { "@type": "Organization", name: "SolusiHajj", url: BASE },
    about: ["Umrah", "Hajj", "Travel Marketplace", "Benchmark"],
    publisher: { "@type": "Organization", name: "PT Syarikat Solution Haji Indonesia" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(study) }} />
    </>
  );
}

function SiteCard({ site }: { site: BenchmarkSite }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line-warm bg-card p-5 shadow-card transition-shadow hover:shadow-warm dark:border-white/10 dark:bg-[#12332a]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[15px] font-extrabold",
              site.rank <= 3 ? "bg-gold-soft text-gold-deep border border-gold/40" : "bg-brand-soft text-brand border border-brand/20"
            )}
            title={`Peringkat ${site.rank} dari 20`}
          >
            {site.rank}
          </span>
          <div>
            <h3 className="flex items-center gap-2 text-[17px] font-extrabold leading-tight text-ink dark:text-ivory">
              <span aria-hidden>{site.flag}</span> {site.name}
            </h3>
            <p className="mt-0.5 text-[13px] font-medium text-ink-muted">{site.domain}</p>
          </div>
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line-warm text-ink-muted transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-ivory/60"
          aria-label={`Kunjungi ${site.name}`}
        >
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className={cn("rounded-full border px-2.5 py-0.5 text-[12px] font-bold", CAT_CLS[site.category])}>
          {site.category}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-line-warm bg-ivory px-2.5 py-0.5 text-[12px] font-semibold text-ink-muted dark:border-white/10 dark:bg-white/5 dark:text-ivory/60">
          <Flag size={11} /> {site.country}
        </span>
      </div>

      <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">{site.scale}</p>

      <div className="mt-4">
        <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-gold-deep dark:text-gold">
          <Trophy size={12} /> Fitur terbaiknya
        </p>
        <ul className="space-y-1.5">
          {site.killer.map((k) => (
            <li key={k} className="flex gap-2 text-[14px] leading-snug text-ink dark:text-ivory/85">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              {k}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-xl border border-brand/20 bg-brand-soft/60 p-3.5 dark:border-brand/30 dark:bg-brand/10">
        <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-brand dark:text-gold">
          <Layers size={12} /> Digabung ke SolusiHajj
        </p>
        <ul className="space-y-1.5">
          {site.adopted.map((a) => (
            <li key={a} className="flex gap-2 text-[13.5px] leading-snug text-ink dark:text-ivory/85">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-gold" aria-hidden />
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 flex gap-2 rounded-xl border border-gold/30 bg-gold-soft/50 p-3.5 dark:border-gold/25 dark:bg-gold/10">
        <Swords size={15} className="mt-0.5 shrink-0 text-gold-deep dark:text-gold" />
        <p className="text-[13px] leading-snug text-ink dark:text-ivory/85">
          <span className="font-bold text-gold-deep dark:text-gold">Lebih dari {site.name}: </span>
          {site.exclusive}
        </p>
      </div>
    </article>
  );
}

export default function BenchmarkPage() {
  return (
    <div>
      <JsonLd />

      {/* ============ HERO ============ */}
      <section className="border-b border-line-warm bg-gradient-to-b from-brand-soft/60 to-transparent dark:border-white/10 dark:from-brand/15">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[13px] font-bold text-gold-deep dark:border-gold/30 dark:bg-gold/10 dark:text-gold">
            <Lightbulb size={14} /> Riset transparansi — diperbarui {BENCHMARK_DATE}
          </p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-[44px] dark:text-ivory">
            20 Marketplace Haji &amp; Umrah Teratas Dunia —{" "}
            <span className="text-gold-deep dark:text-gold">digabungkan menjadi satu di sini.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-ink-muted">
            Kami membedah 20 platform pemesanan haji &amp; umrah terbaik dari 12 negara &amp; kawasan — dari agregator terbesar
            Indonesia sampai kanal resmi Kementerian Haji &amp; Umrah Saudi. Setiap fitur terbaik mereka
            diidentifikasi, digabungkan, lalu ditingkatkan di atasnya dengan hal-hal yang{" "}
            <strong className="text-ink dark:text-ivory">tidak satu pun dari mereka miliki</strong>: escrow syariah,
            review jamaah nyata, dan database penyelenggara ter-audit.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { v: String(fusionStats.platforms), l: "Platform dibedah" },
              { v: String(fusionStats.countries), l: "Negara asal" },
              { v: `${fusionStats.featuresAdopted}`, l: "Fitur digabungkan" },
              { v: "4", l: "Fitur eksklusif SolusiHajj" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-line-warm bg-card p-4 text-center shadow-card dark:border-white/10 dark:bg-[#12332a]">
                <p className="text-2xl font-extrabold text-brand dark:text-gold md:text-3xl">{s.v}</p>
                <p className="mt-1 text-[13px] font-semibold text-ink-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RUMUS GABUNGAN ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <SectionHeading
          kicker="Rumus Gabungan"
          title="Dari 20 platform menjadi satu SolusiHajj"
          sub="Kami tidak menyalin satu situs — kami mengambil DNA terbaik tiap kategori lalu memfusikannya dengan lapisan perlindungan yang belum ada di satu pun dari mereka."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Model Marketplace",
              desc: "Wadah netral multi-travel: katalog besar, platform tidak menjual paket sendiri.",
              src: "umroh.com • pengenumroh • BookMyUmrahTrip",
            },
            {
              step: "2",
              title: "Kepatuhan Resmi",
              desc: "Hanya penyelenggara berizin yang tayang, klasifikasi paket standar kementerian.",
              src: "Nusuk Hajj • Direct Umrah • Nusuk Umrah",
            },
            {
              step: "3",
              title: "Kemudahan OTA",
              desc: "Meta-search, multi-bahasa, pembayaran lokal, konsultasi instan, mobile-first.",
              src: "Wego • Traveloka • Almatar • ShareTrip",
            },
            {
              step: "4",
              title: "Lapisan Amanah",
              desc: "Escrow 40/40/20, Saksi Jamaah, sanksi publik — yang tidak ada di 0/20 platform.",
              src: "Eksklusif SolusiHajj",
            },
          ].map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-line-warm bg-card p-5 shadow-card dark:border-white/10 dark:bg-[#12332a]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-[15px] font-extrabold text-ivory">
                {s.step}
              </span>
              <h3 className="mt-3 text-[16.5px] font-extrabold text-ink dark:text-ivory">{s.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{s.desc}</p>
              <p className="mt-3 border-t border-line-warm pt-2.5 text-[12px] font-semibold text-gold-deep dark:border-white/10 dark:text-gold">
                {s.src}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 20 KARTU ============ */}
      <section id="daftar" className="border-y border-line-warm bg-ivory/60 py-12 md:py-16 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            kicker="Daftar Lengkap"
            title="20 teratas, diperiksa satu per satu"
            sub="Peringkat berdasarkan skala operasi, kepemimpinan pasar, dan kekuatan fitur per kategori. Klik kartu untuk mengunjungi situs aslinya."
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benchmarkList.map((site) => (
              <SiteCard key={site.rank} site={site} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FITUR GABUNGAN ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <SectionHeading
          kicker="Hasil Penggabungan"
          title="12 fitur gabungan — dan statusnya hari ini"
          sub="Bukan wacana: mayoritas fitur hasil penggabungan sudah hidup di platform ini. Ini peta lengkapnya, dari mana asalnya, dan apa yang sudah jalan."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fusionFeatures.map((f) => {
            const Icon = FUSION_ICONS[f.icon] ?? Sparkles;
            const st = STATUS_META[f.status] ?? STATUS_META.LIVE;
            return (
              <div key={f.title} className="flex flex-col rounded-2xl border border-line-warm bg-card p-5 shadow-card dark:border-white/10 dark:bg-[#12332a]">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand dark:bg-brand/20 dark:text-gold">
                    <Icon size={20} />
                  </span>
                  <span className={cn("rounded-full border px-2.5 py-1 text-[11.5px] font-extrabold", st.cls)}>{st.label}</span>
                </div>
                <h3 className="mt-3.5 text-[16.5px] font-extrabold text-ink dark:text-ivory">{f.title}</h3>
                <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-muted">{f.desc}</p>
                <p className="mt-3.5 border-t border-line-warm pt-2.5 text-[12px] font-semibold text-ink-muted dark:border-white/10">
                  Diadopsi dari: <span className="text-gold-deep dark:text-gold">{f.from.join(" • ")}</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ MATRIKS KEMAMPUAN ============ */}
      <section className="border-y border-line-warm bg-brand-deep py-12 text-ivory md:py-16 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="pattern-light">
            <SectionHeading
              dark
              kicker="Uji Nyata"
              title="SolusiHajj vs rata-rata 20 benchmark"
              sub="Kami menghitung berapa dari 20 platform yang benar-benar menyediakan tiap kemampuan — lalu membandingkannya dengan yang sudah hidup di sini."
            />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-white/15 bg-white/5">
              <table className="w-full min-w-[760px] text-left text-[14.5px]">
                <thead>
                  <tr className="border-b border-white/15 text-[12.5px] uppercase tracking-wider text-gold">
                    <th className="px-5 py-4 font-extrabold">Kemampuan</th>
                    <th className="px-5 py-4 font-extrabold">20 benchmark teratas</th>
                    <th className="px-5 py-4 font-extrabold">SolusiHajj</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityMatrix.map((m) => (
                    <tr key={m.capability} className="border-b border-white/10 last:border-0">
                      <td className="px-5 py-4 font-bold text-ivory">{m.capability}</td>
                      <td className="px-5 py-4 text-ivory/70">{m.benchmark}</td>
                      <td className="px-5 py-4 font-semibold text-gold">{m.solusihajj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] text-ivory/60">
              Metodologi: penelusuran situs resmi tiap platform, rilis pers Kementerian Haji &amp; Umrah Saudi
              (Direct Umrah, September 2026), dan dokumentasi fitur publik per {BENCHMARK_DATE}. Jumlah "x/20" =
              banyaknya platform dengan kemampuan tersebut terverifikasi saat riset.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-gold/30 bg-gold-soft/40 p-8 md:flex-row md:items-center dark:border-gold/20 dark:bg-gold/10">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-deep dark:text-ivory">
              Hasil penggabungan 20 platform — siap Anda coba.
            </h2>
            <p className="mt-2 max-w-2xl text-[15.5px] text-ink-muted">
              Semua fitur terbaik umroh.com, Nusuk, Wego, International Hajj, dan 16 platform lain kini ada dalam
              satu gerbang — plus escrow syariah yang tidak ada di satu pun dari mereka.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/paket"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-bold text-ivory transition-colors hover:bg-brand-deep"
            >
              Jelajahi Katalog <ArrowRight size={17} />
            </Link>
            <Link
              to="/pusat-data"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand/40 px-6 font-bold text-brand transition-colors hover:bg-brand-soft dark:text-gold"
            >
              <Search size={16} /> Lihat Data 3.966 Penyelenggara
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
