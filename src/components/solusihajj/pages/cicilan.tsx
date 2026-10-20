"use client";

/**
 * R4 — CICILAN SYARIAH (pembiayaan umrah murabahah)
 * Kalkulator DP/tenor transparan (server-side recompute saat pengajuan),
 * kartu akad murabahah/ijarah/qardh, katalog mitra pembiayaan riil,
 * daftar praktik yang TIDAK ada (bunga/denda majemuk), form pengajuan → lead.
 * API: /api/r4/cicilan (GET mitra + statistik, POST pengajuan)
 */

import { useEffect, useMemo, useState } from "react";
import {
  Calculator, CheckCircle2, HandCoins, Landmark, Loader2, MessageCircle,
  Scale, Send, ShieldCheck, Sparkles, Ban, ArrowRight, CircleDot, Wallet,
} from "lucide-react";
import { Link, scrollToId } from "@/lib/solusihajj/router";
import { waLink, formatRupiah } from "@/lib/solusihajj/wa";
import { packageList } from "@/data/packages";
import {
  FINANCING_PARTNERS, TENOR_OPTIONS, CONTRACT_CARDS, FORBIDDEN_PRACTICES,
  CICILAN_FLOW, CICILAN_FAQ, calcInstallment,
} from "@/data/cicilan";
import { SectionHeading, TrustPill } from "../ui-bits";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Partner {
  key: string; name: string; parent?: string | null; contract: string;
  tenorMax: number; dpMinPct: number; coverage?: string | null; note?: string | null;
}

const formCls = "h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand dark:bg-white/5 dark:text-ivory dark:border-white/15";

export default function CicilanPage() {
  /* ---------- Kalkulator ---------- */
  const [price, setPrice] = useState(packageList[0]?.basePrice ?? 32_500_000);
  const [pkgSlug, setPkgSlug] = useState("custom");
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(12);
  const [partnerKey, setPartnerKey] = useState("");

  /* ---------- Mitra dari DB (fallback statis) ---------- */
  const [partners, setPartners] = useState<Partner[]>(FINANCING_PARTNERS as Partner[]);
  const [simCount, setSimCount] = useState<number | null>(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch("/api/r4/cicilan").then((x) => x.json());
        if (!alive) return;
        if (r.partners?.length) setPartners(r.partners as Partner[]);
        if (r.stats) setSimCount((r.stats as { simulatedVolume: number }).simulatedVolume ?? null);
      } catch { /* fallback statis tetap tampil */ }
    })();
    return () => { alive = false; };
  }, []);

  /* ---------- Pengajuan ---------- */
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ref, setRef] = useState<string | null>(null);

  const dp = useMemo(() => Math.round((dpPct / 100) * price), [dpPct, price]);
  const calc = useMemo(() => calcInstallment(price, dp, tenor), [price, dp, tenor]);
  const selectedPartner = partners.find((p) => p.key === partnerKey);

  const pickPackage = (slug: string) => {
    setPkgSlug(slug);
    if (slug !== "custom") {
      const pkg = packageList.find((p) => p.slug === slug);
      if (pkg) setPrice(pkg.basePrice);
    }
  };

  const tenorFeasible = !selectedPartner || tenor <= selectedPartner.tenorMax;
  const dpFeasible = !selectedPartner || dpPct >= selectedPartner.dpMinPct;

  const submit = async () => {
    setError(null);
    setSubmitting(true);
    try {
      const pkg = packageList.find((p) => p.slug === pkgSlug);
      const res = await fetch("/api/r4/cicilan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName, phone, email, city, note,
          packageSlug: pkgSlug !== "custom" ? pkgSlug : null,
          packageName: pkg?.title ?? "Paket custom",
          packagePrice: price,
          downPayment: dp,
          tenorMonths: tenor,
          partnerKey: partnerKey || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Gagal menyimpan pengajuan");
        return;
      }
      setRef((data.lead as { ref: string }).ref);
      const r = await fetch("/api/r4/cicilan").then((x) => x.json());
      if (r.stats) setSimCount((r.stats as { simulatedVolume: number }).simulatedVolume ?? null);
      scrollToId("hasil-ajukan");
    } catch {
      setError("Koneksi bermasalah. Coba lagi atau hubungi kami via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const jsonLd = useMemo(() => {
    const base = { "@context": "https://schema.org" };
    return [
      {
        ...base,
        "@type": "Service",
        serviceType: "Cicilan Umrah Syariah (Pembiayaan Murabahah)",
        name: "Cicilan Syariah Umrah — Tanpa Bunga, Akad Murabahah | SolusiHajj",
        description: "Simulasi & pengajuan cicilan umrah syariah bersama mitra pembiayaan (ALULAA/BTPN Syariah, sharE Mega Syariah, BSI, Pegadaian Syariah, Bank Muamalat): tanpa bunga, tanpa denda majemuk, denda sosial untuk infaq, dana paket tetap dilindungi escrow 40/40/20.",
        provider: { "@type": "Organization", name: "SolusiHajj" },
        areaServed: "ID",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          lowPrice: 1_000_000,
          highPrice: 120_000_000,
          availability: "https://schema.org/InStock",
        },
      },
      {
        ...base,
        "@type": "HowTo",
        name: "Cara Mengajukan Cicilan Umrah Syariah di SolusiHajj",
        description: "Lima langkah: simulasi, ajukan, dihubungi mitra, akad murabahah, berangkat dengan dana terlindungi escrow.",
        step: CICILAN_FLOW.map((s) => ({ "@type": "HowToStep", position: s.n, name: s.title, text: s.text })),
      },
      {
        ...base,
        "@type": "FAQPage",
        mainEntity: CICILAN_FAQ.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-deep" aria-label="Cicilan syariah umrah">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:px-8 md:py-24">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm">
            <HandCoins size={16} className="text-gold" /> Fitur baru — Cicilan Syariah
          </div>
          <h1 className="fade-up fade-up-2 mx-auto mt-6 max-w-3xl text-[34px] font-extrabold leading-[1.18] text-ivory md:text-[52px]">
            Umrah Dulu, Bayar Bertahap. <span className="text-gold">Tanpa Bunga, Sesuai Syariah.</span>
          </h1>
          <p className="fade-up fade-up-3 mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ivory/80">
            Akad murabahah bersama mitra pembiayaan syariah: harga & angsuran dikunci di awal,
            tidak ada bunga yang bergulir, tidak ada denda majemuk. Dana paket tetap dilindungi
            escrow 40/40/20 SolusiHajj — dua lapis proteksi dalam satu pengajuan.
          </p>
          <div className="fade-up fade-up-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => scrollToId("kalkulator")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-7 font-bold text-[#1F1805] transition-transform hover:scale-[1.02]"
            >
              <Calculator size={18} /> Hitung Cicilan Anda
            </button>
            <Link
              to="/paket"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-ivory/30 px-7 font-bold text-ivory transition-colors hover:bg-white/10"
            >
              Lihat Paket yang Bisa Dicicil
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <TrustPill icon={Ban}>0% bunga — margin akad transparan</TrustPill>
            <TrustPill icon={ShieldCheck}>Denda sosial → infaq, bukan laba</TrustPill>
            <TrustPill icon={Landmark}>Mitra: ALULAA, sharE, BSI, Pegadaian Syariah</TrustPill>
          </div>
        </div>
      </section>

      {/* ================= KALKULATOR ================= */}
      <section id="kalkulator" className="mx-auto mt-16 max-w-7xl px-4 md:px-8" aria-label="Kalkulator cicilan syariah">
        <SectionHeading
          kicker="Langkah 1 — Simulasikan"
          title="Kalkulator Cicilan Transparan"
          sub="Geser DP dan pilih tenor — angsuran per bulan langsung terhitung. Angka yang sama inilah yang dipakai server saat Anda mengajukan (bukan angka rekayasa)."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* KONTROL */}
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <div className="space-y-5">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Pilih paket</span>
                <select value={pkgSlug} onChange={(e) => pickPackage(e.target.value)} className={formCls}>
                  <option value="custom">Nominal sendiri</option>
                  {packageList.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title} — {formatRupiah(p.basePrice, { compact: true })}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-ink dark:text-ivory">
                  Harga paket (Rp)
                  {pkgSlug === "custom" && <span className="text-xs font-normal text-ink-muted">bisa diedit</span>}
                </span>
                <input
                  type="number" min={1_000_000} step={500_000} value={price}
                  onChange={(e) => setPrice(Math.max(1_000_000, Number(e.target.value) || 1_000_000))}
                  disabled={pkgSlug !== "custom"}
                  className={cn(formCls, pkgSlug !== "custom" && "opacity-60")}
                />
              </label>

              <div>
                <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-ink dark:text-ivory">
                  Uang muka (DP)
                  <span className="font-extrabold text-brand">{dpPct}% — {formatRupiah(dp)}</span>
                </span>
                <input
                  type="range" min={0} max={50} step={5} value={dpPct}
                  onChange={(e) => setDpPct(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#0E6B4E]"
                  aria-label="Persentase uang muka"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-muted">
                  <span>0%</span><span>25%</span><span>50%</span>
                </div>
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Tenor</span>
                <div className="flex flex-wrap gap-2">
                  {TENOR_OPTIONS.map((t) => {
                    const blocked = selectedPartner ? t > selectedPartner.tenorMax : false;
                    return (
                      <button
                        key={t}
                        onClick={() => setTenor(t)}
                        disabled={blocked}
                        className={cn(
                          "min-h-11 rounded-xl border px-4 text-sm font-bold transition-colors",
                          tenor === t
                            ? "border-brand bg-brand text-ivory"
                            : "border-line-warm bg-white text-ink hover:border-brand/50 dark:bg-white/5 dark:text-ivory dark:border-white/15",
                          blocked && "cursor-not-allowed opacity-35 line-through"
                        )}
                        aria-pressed={tenor === t}
                        title={blocked ? `Melebihi tenor maksimal ${selectedPartner?.name} (${selectedPartner?.tenorMax} bln)` : undefined}
                      >
                        {t} bln
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Mitra pembiayaan (opsional)</span>
                <select value={partnerKey} onChange={(e) => setPartnerKey(e.target.value)} className={formCls}>
                  <option value="">Belum menentukan / bandingkan semua</option>
                  {partners.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.name} — {p.contract}, maks {p.tenorMax} bln, DP min {p.dpMinPct}%
                    </option>
                  ))}
                </select>
                {selectedPartner && !dpFeasible && (
                  <span className="mt-1.5 block text-xs font-bold text-[#B7791F]">
                    ⚠ {selectedPartner.name} mensyaratkan DP minimal {selectedPartner.dpMinPct}% — naikkan DP atau pilih mitra lain.
                  </span>
                )}
                {selectedPartner && (
                  <span className="mt-1 block text-xs text-ink-muted">{selectedPartner.note}</span>
                )}
              </label>
            </div>
          </div>

          {/* HASIL */}
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl shadow-warm">
              <div className="bg-gradient-to-br from-[#0A4A36] via-[#0E6B4E] to-[#1E7F4F] p-6 text-ivory md:p-8">
                <p className="text-sm uppercase tracking-widest text-ivory/60">Angsuran per bulan</p>
                <p className="mt-2 text-4xl font-extrabold text-gold md:text-5xl" data-testid="angsuran-bulanan">
                  {formatRupiah(calc.monthly)}
                </p>
                <p className="mt-2 text-sm text-ivory/75">
                  selama {tenor} bulan • angsuran terakhir {formatRupiah(calc.lastMonth)}
                </p>
                <div className="mt-6 space-y-2.5 border-t border-white/15 pt-4 text-[15px]">
                  <div className="flex justify-between">
                    <span className="text-ivory/70">Harga paket</span>
                    <b>{formatRupiah(price)}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ivory/70">DP ({dpPct}%)</span>
                    <b>{formatRupiah(dp)}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ivory/70">Pokok dibiayakan</span>
                    <b>{formatRupiah(calc.financed)}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ivory/70">Bunga</span>
                    <b className="text-gold">Rp 0 — murabahah</b>
                  </div>
                  <div className="flex justify-between border-t border-white/15 pt-2.5">
                    <span className="text-ivory/70">Total dibayar</span>
                    <b>{formatRupiah(calc.totalPaid)}</b>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 bg-[#17181D] px-5 py-3 text-xs font-semibold text-ivory/80">
                <span className="inline-flex items-center gap-1"><Ban size={13} className="text-gold" /> Tanpa bunga</span>
                <span className="inline-flex items-center gap-1"><Ban size={13} className="text-gold" /> Tanpa denda majemuk</span>
                <span className="inline-flex items-center gap-1"><ShieldCheck size={13} className="text-gold" /> Dana di escrow 40/40/20</span>
              </div>
            </div>

            {/* Tabel semua tenor */}
            <div className="overflow-hidden rounded-2xl border border-line-warm bg-card shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line-warm bg-brand-soft/40 text-left dark:bg-white/5">
                    <th className="px-4 py-2.5 font-bold text-ink dark:text-ivory">Tenor</th>
                    <th className="px-4 py-2.5 font-bold text-ink dark:text-ivory">Angsuran/bln</th>
                    <th className="px-4 py-2.5 font-bold text-ink dark:text-ivory">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {TENOR_OPTIONS.filter((t) => !selectedPartner || t <= selectedPartner.tenorMax).map((t) => {
                    const c = calcInstallment(price, dp, t);
                    return (
                      <tr
                        key={t}
                        onClick={() => setTenor(t)}
                        className={cn(
                          "cursor-pointer border-b border-line-warm/60 transition-colors last:border-0 hover:bg-brand-soft/40 dark:hover:bg-white/5",
                          tenor === t && "bg-brand-soft/60 dark:bg-white/10"
                        )}
                      >
                        <td className="px-4 py-2.5 font-bold text-ink dark:text-ivory">{t} bulan</td>
                        <td className="px-4 py-2.5 font-semibold text-brand">{formatRupiah(c.monthly)}</td>
                        <td className="px-4 py-2.5 text-ink-muted">{formatRupiah(c.totalPaid, { compact: true })}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================= YANG TIDAK ADA ================= */}
      <section className="mt-20 bg-white py-16 md:py-20" aria-label="Praktik yang tidak ada di cicilan syariah">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            center
            kicker="Pembeda dari kredit konvensional"
            title="Empat Praktik yang TIDAK Ada di Cicilan Kami"
            sub="Bandingkan dengan kartu kredit atau KPR konvensional — inilah garis meras syariah yang kami pegang bersama mitra."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FORBIDDEN_PRACTICES.map((p) => (
              <div key={p.title} className="rounded-2xl border border-red-100 bg-red-50/40 p-6 md:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-100">
                  <Ban size={22} className="text-red-700" />
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink dark:text-ivory">Tanpa {p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AKAD ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Jenis akad syariah">
        <SectionHeading
          center
          kicker="Dasar fikihnya"
          title="Tiga Akad yang Kami Pakai — Semuanya Bebas Riba"
          sub="Akad menentukan cara dana mengalir. Semua mitra di katalog di bawah menggunakan satu dari tiga akad ini, sesuai fatwa DSN-MUI."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CONTRACT_CARDS.map((c) => (
            <div key={c.key} className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <Scale size={24} className="text-brand" />
                <p className="font-amiri text-2xl text-gold-deep">{c.arabic}</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-ink dark:text-ivory">{c.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed text-brand-deep dark:text-gold">{c.oneLiner}</p>
              <ul className="mt-3 space-y-2">
                {c.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-[14px] leading-snug text-ink-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MITRA ================= */}
      <section className="mt-20 bg-white py-16 md:py-20" aria-label="Mitra pembiayaan syariah">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            kicker="Mitra pembiayaan"
            title="Institusi Riil di Balik Setiap Pengajuan"
            sub="Pengajuan Anda hanya diteruskan ke SATU mitra yang Anda pilih — tidak disebar ke banyak institusi. Data dilindungi UU PDP 27/2022."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.key}
                className={cn(
                  "rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm",
                  partnerKey === p.key ? "border-brand ring-2 ring-brand/25" : "border-line-warm"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <Landmark size={26} className="text-brand" />
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand">
                    {p.contract}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-ink dark:text-ivory">{p.name}</h3>
                {p.parent && <p className="text-xs text-ink-muted">{p.parent}</p>}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-gold-soft px-2 py-0.5 text-xs font-bold text-gold-deep">s/d {p.tenorMax} bln</span>
                  <span className="rounded-md bg-gold-soft px-2 py-0.5 text-xs font-bold text-gold-deep">DP {p.dpMinPct}%</span>
                  {p.coverage && <span className="rounded-md bg-line-warm px-2 py-0.5 text-xs font-bold text-ink-muted">{p.coverage}</span>}
                </div>
                {p.note && <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{p.note}</p>}
                <button
                  onClick={() => { setPartnerKey(p.key); scrollToId("ajukan"); }}
                  className="mt-4 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-brand hover:underline dark:text-gold"
                >
                  Ajukan lewat {p.name} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
          {simCount !== null && simCount > 0 && (
            <p className="mt-6 text-center text-sm text-ink-muted">
              <b className="text-brand">{simCount} pengajuan</b> telah disimulasikan melalui kalkulator ini.
            </p>
          )}
        </div>
      </section>

      {/* ================= ALUR + PENGAJUAN ================= */}
      <section id="ajukan" className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Alur pengajuan cicilan">
        <SectionHeading center kicker="Langkah berikutnya" title="Lima Langkah dari Simulasi hingga Berangkat" />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {CICILAN_FLOW.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold-soft text-base font-extrabold text-gold-deep">
                {s.n}
              </span>
              <h3 className="mt-2.5 font-bold text-ink dark:text-ivory">{s.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-snug text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>

        {/* FORM PENGAJUAN */}
        <div id="hasil-ajukan" className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-ink dark:text-ivory">
              <Send size={19} className="text-brand" /> Ajukan Cicilan Anda
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Ringkasan simulasi: <b className="text-brand">{formatRupiah(calc.monthly)}/bln</b> • {tenor} bln • DP {formatRupiah(dp)}
              {selectedPartner ? ` • ${selectedPartner.name}` : ""}
            </p>
            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Nama lengkap *</span>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="sesuai KTP" className={formCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Nomor WhatsApp *</span>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08xxxxxxxxxx" inputMode="tel" className={formCls} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Email</span>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" type="email" className={formCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Kota domisili</span>
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="cth: Jakarta" className={formCls} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Catatan untuk mitra (opsional)</span>
                <textarea
                  value={note} rows={2} maxLength={500}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="cth: saya wirausaha, mohon skema tanpa slip gaji / ingin akad ijarah emas Pegadaian"
                  className="w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-[15px] outline-none focus:border-brand dark:bg-white/5 dark:text-ivory dark:border-white/15"
                />
              </label>

              {!tenorFeasible && (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
                  Tenor {tenor} bulan melebihi batas {selectedPartner?.name} ({selectedPartner?.tenorMax} bulan). Pilih tenor lebih pendek atau ganti mitra.
                </p>
              )}
              {error && (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
                  {error}
                </p>
              )}

              <button
                onClick={submit} disabled={submitting || !tenorFeasible}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 text-[16px] font-bold text-ivory transition-colors hover:bg-brand-deep disabled:opacity-60"
              >
                {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {submitting ? "Mengirim pengajuan…" : `Kirim Pengajuan — ${formatRupiah(calc.monthly)}/bln`}
              </button>
              <p className="text-xs leading-relaxed text-ink-muted">
                Dengan mengirim, Anda setuju data diproses sesuai Kebijakan Privasi (UU PDP 27/2022) dan hanya
                diteruskan ke mitra yang Anda pilih. Pengajuan bukan kewajiban berakad.
              </p>
            </div>
          </div>

          {/* Sukses / ringkasan */}
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {ref ? (
              <div className="rounded-2xl border-2 border-brand/40 bg-brand-soft/50 p-6 shadow-card" data-testid="cicilan-sukses">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={24} className="text-brand" />
                  <h3 className="text-lg font-extrabold text-brand-deep">Pengajuan tercatat!</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Nomor referensi Anda <b className="text-brand">{ref}</b>. Tim mitra{" "}
                  <b>{selectedPartner?.name ?? "pembiayaan syariah"}</b> akan menghubungi
                  nomor {phone} (biasanya &lt; 1 hari kerja) untuk kelengkapan dokumen.
                </p>
                <div className="mt-4 grid gap-2">
                  <a
                    href={waLink(`Assalamualaikum, saya ${fullName} baru mengajukan cicilan umrah syariah ${ref} (${formatRupiah(calc.monthly)}/bln × ${tenor} bln, DP ${formatRupiah(dp)}). Mohon info proses selanjutnya.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#1E7F4F] px-4 font-bold text-white"
                  >
                    <MessageCircle size={17} /> Tanya Proses via WA
                  </a>
                  <Link
                    to="/kado-umrah"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand px-4 font-bold text-brand hover:bg-brand-soft"
                  >
                    <Sparkles size={16} /> Ubah jadi Kado untuk Orang Tersayang
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-extrabold text-ink dark:text-ivory">
                  <Wallet size={18} className="text-brand" /> Kenapa cicilan di sini tenang?
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-muted">
                  {[
                    "Harga akad & angsuran dikunci sejak tanda tangan — tidak naik walau tenor panjang.",
                    "Dana paket mengalir ke escrow pihak ketiga (bukan rekening travel), rilis 40/40/20.",
                    "Denda keterlambatan flat dan disalurkan penuh ke infaq sosial.",
                    "Boleh lunas lebih cepat tanpa penalti apa pun — bayar sisa pokoknya saja.",
                    "Pengajuan hanya ke satu mitra pilihan Anda; bukan borongan data ke banyak institusi.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <CircleDot size={16} className="mt-1 shrink-0 text-gold-deep" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto mt-20 max-w-4xl px-4 pb-20 md:mt-28 md:px-8" aria-label="FAQ cicilan syariah">
        <SectionHeading center kicker="Pertanyaan umum" title="Pertanyaan yang Paling Sering Diajukan" />
        <Accordion type="single" collapsible className="mt-8">
          {CICILAN_FAQ.map((f, i) => (
            <AccordionItem key={i} value={`cic-${i}`}>
              <AccordionTrigger className="text-left text-[16px] font-bold text-ink dark:text-ivory">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-ink-muted">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </div>
  );
}
