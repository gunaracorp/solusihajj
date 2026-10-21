"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp, PiggyBank, CalendarClock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { articleList, getArticle } from "@/data/articles";
import type { ArticleBlock } from "@/data/types";
import { formatRupiah, formatDate, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link, navigate } from "@/lib/solusihajj/router";
import { Breadcrumb } from "../chrome";
import { SectionHeading, WaButton } from "../ui-bits";
import { cn } from "@/lib/utils";

/* ================= KALKULATOR SIMPANAN HAJI (lead magnet) ================= */
export function CalculatorPage() {
  const [targetYear, setTargetYear] = useState(2030);
  const [people, setPeople] = useState(2);
  const [savings, setSavings] = useState(10_000_000);
  const [monthly, setMonthly] = useState(2_500_000);
  const [costPerPax, setCostPerPax] = useState(32_500_000);
  const [inflation, setInflation] = useState(8);
  const [name, setName] = useState("");

  const years = targetYear - 2026;

  const result = useMemo(() => {
    const futureCost = costPerPax * Math.pow(1 + inflation / 100, years);
    const totalNeeded = futureCost * people;
    let balance = savings;
    let months = 0;
    const monthlyGrowth = monthly;
    while (balance < totalNeeded && months < years * 12 + 120) {
      balance += monthlyGrowth;
      months++;
    }
    const reachableInYears = months / 12;
    const neededMonthly = years > 0 ? Math.max(0, (totalNeeded - savings) / (years * 12)) : totalNeeded;
    const onTrack = monthly >= neededMonthly;
    return { futureCost, totalNeeded, months, reachableInYears, neededMonthly, onTrack, balance };
  }, [costPerPax, people, savings, monthly, inflation, years]);

  const waResult = waLink(waMessages.calculator(String(targetYear), formatRupiah(Math.round(result.totalNeeded)), formatRupiah(Math.round(result.neededMonthly))));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Kalkulator Simpanan Haji" }]} />
      <SectionHeading
        kicker="Perencanaan dana — gratis"
        title="Kalkulator Simpanan Haji & Umrah"
        sub="Dana ibadah paling sering rusak karena dua hal: harga naik lebih cepat dari niat menabung, dan setoran terlalu kecil tanpa kita sadari. Hitung keduanya sekarang — tanpa daftar akun."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* INPUT */}
        <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
            <Calculator size={20} className="text-brand" /> Data Anda
          </h2>
          <div className="mt-5 space-y-5">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Target tahun berangkat</span>
              <select
                value={targetYear}
                onChange={(e) => setTargetYear(Number(e.target.value))}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
              >
                {Array.from({ length: 10 }, (_, i) => 2026 + i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Jumlah calon jamaah</span>
              <input
                type="number" min={1} max={10} value={people}
                onChange={(e) => setPeople(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Tabungan yang sudah tersedia (Rp)</span>
              <input
                type="number" min={0} step={500_000} value={savings}
                onChange={(e) => setSavings(Math.max(0, Number(e.target.value) || 0))}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Setoran per bulan (Rp)</span>
              <input
                type="number" min={0} step={250_000} value={monthly}
                onChange={(e) => setMonthly(Math.max(0, Number(e.target.value) || 0))}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Estimasi biaya / orang saat ini</span>
                <input
                  type="number" min={10_000_000} step={1_000_000} value={costPerPax}
                  onChange={(e) => setCostPerPax(Math.max(10_000_000, Number(e.target.value) || 0))}
                  className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
                />
                <span className="mt-1 block text-xs text-ink-muted">Default: umrah reguler 9 hari Rp 32,5 jt</span>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Asumsi kenaikan biaya / tahun</span>
                <input
                  type="number" min={0} max={20} step={1} value={inflation}
                  onChange={(e) => setInflation(Math.max(0, Math.min(20, Number(e.target.value) || 0)))}
                  className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
                />
                <span className="mt-1 block text-xs text-ink-muted">Default 8% — historis biaya umrah 2019–2025</span>
              </label>
            </div>
          </div>
        </div>

        {/* HASIL */}
        <div className="space-y-4">
          <div className={cn("rounded-2xl border-2 p-6 shadow-card", result.onTrack ? "border-brand/40 bg-brand-soft/50" : "border-warn/40 bg-[#F5EEDA]/60")}>
            <div className="flex items-center gap-2.5">
              {result.onTrack ? (
                <CheckCircle2 size={24} className="text-brand" />
              ) : (
                <AlertTriangle size={24} className="text-[#B7791F]" />
              )}
              <h2 className={cn("text-lg font-extrabold", result.onTrack ? "text-brand-deep" : "text-[#8A6D14]")}>
                {result.onTrack ? "Alhamdulillah — target Anda tercapai" : "Perlu penyesuaian setoran"}
              </h2>
            </div>
            <div className="mt-5 space-y-3.5 text-[15px]">
              <div className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-4 py-3">
                <span className="flex items-center gap-2 text-ink-muted"><TrendingUp size={16} className="text-brand" /> Estimasi biaya {targetYear} / orang</span>
                <strong className="tabular text-ink">{formatRupiah(Math.round(result.futureCost))}</strong>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-4 py-3">
                <span className="flex items-center gap-2 text-ink-muted"><PiggyBank size={16} className="text-brand" /> Total untuk {people} jamaah</span>
                <strong className="tabular text-ink">{formatRupiah(Math.round(result.totalNeeded))}</strong>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-4 py-3">
                <span className="flex items-center gap-2 text-ink-muted"><CalendarClock size={16} className="text-brand" /> Dana cukup dalam</span>
                <strong className="tabular text-ink">
                  {result.months >= years * 12 + 120 ? "lebih dari " + (years + 10) + " tahun" : `${result.reachableInYears.toFixed(1)} tahun`}
                </strong>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl bg-brand px-4 py-3 text-ivory">
                <span className="font-semibold">Rekomendasi setoran minimal</span>
                <strong className="tabular text-lg">{formatRupiah(Math.round(result.neededMonthly / 50_000) * 50_000)}/bln</strong>
              </div>
            </div>
            {!result.onTrack && (
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Dengan setoran saat ini ({formatRupiah(monthly)}/bulan), dana baru cukup di{" "}
                <strong className="text-ink">{2026 + Math.ceil(result.reachableInYears)}</strong> — atau tingkatkan setoran
                menjadi <strong className="text-brand-deep">{formatRupiah(Math.round(result.neededMonthly / 50_000) * 50_000)}/bulan</strong>{" "}
                agar tepat sasaran {targetYear}.
              </p>
            )}
          </div>

          {/* Lead capture */}
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <h3 className="font-bold text-ink">Kirim hasil ini ke WhatsApp Anda</h3>
            <p className="mt-1 text-sm text-ink-muted">
              Tim kami siap bantu rancang skema tabungan ibadah — termasuk opsi cicilan tanpa bunga (murabahah) dari PPIU tertentu. Gratis, tanpa paksaan.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama panggilan Anda (opsional)"
              className="mt-3 h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
            />
            <WaButton href={waResult} label="Kirim Hasil via WhatsApp" className="mt-3 w-full" />
          </div>

          <div className="rounded-2xl bg-brand-soft p-5 text-[14px] leading-relaxed text-brand-deep">
            <strong>Catatan:</strong> perhitungan ini proyeksi sederhana (tanpa bunga/return investasi, sesuai prinsip
            syariah). Biaya aktual bergantung kota keberangkatan, hotel, dan kebijakan visa. Gunakan sebagai kompas, bukan kepastian.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= EDUKASI INDEX ================= */
export function EducationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Edukasi" }]} />
      <SectionHeading
        kicker="Edukasi"
        title="Panduan Jujur Sebelum Berangkat"
        sub="Kami menulis artikel seperti berbicara dengan keluarga sendiri: apa yang perlu disiapkan, berapa biaya yang wajar, dan bagaimana mengenali jebakan. Setiap artikel regulasi dicantumkan tanggal review-nya."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {articleList.map((a) => (
          <Link
            key={a.slug}
            to={`/edukasi/${a.slug}`}
            className="group flex flex-col rounded-2xl border border-line-warm bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm"
          >
            <span className="mb-3 w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">{a.category}</span>
            <h2 className="text-[19px] font-bold leading-snug text-ink group-hover:text-brand">{a.title}</h2>
            <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink-muted">{a.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-line-warm pt-3 text-xs text-ink-muted">
              <span>{a.readMinutes} menit baca • {formatDate(a.publishedAt, "short")}</span>
              <span className="font-bold text-brand group-hover:underline">Baca →</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/kalkulator-haji"
        className="group mt-8 flex items-center justify-between rounded-2xl bg-brand-deep p-6 shadow-green md:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20">
            <Calculator size={28} className="text-gold" />
          </span>
          <div>
            <h2 className="text-[19px] font-bold text-ivory">Kalkulator Simpanan Haji</h2>
            <p className="text-[15px] text-ivory/70">Kapan dana Anda cukup? Hitung gratis dalam 30 detik.</p>
          </div>
        </div>
        <ArrowRight size={24} className="shrink-0 text-gold transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

/* ================= ARTIKEL DETAIL ================= */
function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[17px] leading-[1.75] text-ink">{block.text}</p>;
    case "h2":
      return <h2 className="mt-10 text-[24px] font-bold text-ink">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-6 text-[19px] font-bold text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[16px] leading-relaxed text-ink">
              <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink">
              <span className="tabular mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-ivory">{i + 1}</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "arabic":
      return (
        <div className="rounded-2xl border border-gold/30 bg-gold-soft/40 p-6 text-center">
          <p className="font-amiri text-3xl leading-[2] text-ink" dir="rtl" lang="ar">{block.text}</p>
          <p className="mt-3 text-sm italic text-ink-muted">{block.translation}</p>
        </div>
      );
    case "callout":
      return (
        <div className="rounded-2xl border border-brand/25 bg-brand-soft p-6">
          <h3 className="text-[17px] font-extrabold text-brand-deep">{block.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-deep/85">{block.text}</p>
          <button
            onClick={() => navigate(block.ctaTo)}
            className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-brand px-5 text-sm font-bold text-ivory transition-colors hover:bg-brand-deep"
          >
            {block.ctaLabel} <ArrowRight size={15} className="ml-1.5" />
          </button>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-line-warm">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line-warm bg-muted/60">
                {block.head.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold text-ink">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-line-warm last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className={cn("px-4 py-3", j === 0 ? "font-semibold text-ink" : "text-ink-muted", cell.match(/^Rp|\d+%/i) && "tabular")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = getArticle(slug);
  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-ink">Artikel tidak ditemukan</h1>
        <Link to="/edukasi" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-bold text-ivory">
          Semua Artikel
        </Link>
      </div>
    );
  }
  const related = article.related.map((r) => getArticle(r)).filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Edukasi", to: "/edukasi" }, { label: article.category }]} />
      <span className="mb-3 inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">{article.category}</span>
      <h1 className="text-[30px] font-extrabold leading-tight text-ink md:text-[36px]">{article.title}</h1>
      <p className="mt-3 text-[13px] text-ink-muted">
        Oleh {article.author} • {formatDate(article.publishedAt)} • {article.readMinutes} menit baca
        <span className="ml-1 rounded-full bg-gold-soft px-2 py-0.5 text-[11px] font-bold text-gold-deep">Direview terakhir: {formatDate(article.lastReviewed, "short")}</span>
      </p>
      <article className="mt-8 space-y-5">
        {article.blocks.map((b, i) => (
          <BlockRenderer key={i} block={b} />
        ))}
      </article>
      {/* Butuh bantuan */}
      <div className="mt-12 rounded-2xl bg-brand-deep p-6 md:p-8">
        <h2 className="text-[20px] font-bold text-ivory">Butuh Bantuan?</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ivory/75">
          Tim kami menjawab WhatsApp dalam 15 menit pada jam kerja — konsultasi gratis, tidak ada penawaran paksa.
        </p>
        <WaButton href={waLink(waMessages.general)} label="Tanya via WhatsApp" className="mt-4" />
      </div>
      {/* Artikel terkait */}
      <div className="mt-10">
        <h2 className="text-[20px] font-bold text-ink">Artikel Terkait</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {related.map((r) => (
            <Link key={r!.slug} to={`/edukasi/${r!.slug}`} className="group rounded-2xl border border-line-warm bg-card p-5 shadow-card transition-all hover:shadow-warm">
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand">{r!.category}</p>
              <h3 className="mt-1 text-[15px] font-bold leading-snug text-ink group-hover:text-brand">{r!.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
