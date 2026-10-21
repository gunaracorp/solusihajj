"use client";

/**
 * R4 — KADO UMRAH (Gift Umrah)
 * Halaman pemberian umrah sebagai kado: voucher nominal atau paket spesifik,
 * kartu kado digital dengan kode pelacakan publik, dana ditahan escrow syariah.
 * API: /api/r4/gift (GET lacak & daftar, POST buat kado)
 */

import { useEffect, useMemo, useState } from "react";
import {
  Gift, MessageCircle, Copy, CheckCircle2, Building2, Users, HeartHandshake,
  Package, Wallet, Sparkles, ArrowRight, SearchCheck, Loader2, ShieldCheck,
  LockKeyhole, Send, CircleDot,
} from "lucide-react";
import { Link, scrollToId } from "@/lib/solusihajj/router";
import { waLink, formatRupiah } from "@/lib/solusihajj/wa";
import { packageList } from "@/data/packages";
import {
  GIFT_OCCASIONS, GIFT_DENOMINATIONS, GIFT_RELATIONS, GIFT_STATUS_META,
  KADO_STEPS, KADO_FAQ,
} from "@/data/kado";
import { SectionHeading, TrustPill } from "../ui-bits";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/* ---------- Types ---------- */

interface GiftEvent { id: string; action: string; detail: string; createdAt: string }
interface GiftData {
  id: string; code: string; kind: string; occasion: string;
  senderName: string; recipientName: string; relation?: string | null;
  message?: string | null; amount: number; paymentMode: string;
  deliveryChannel: string; status: string; validUntil?: string | null;
  packageSlug?: string | null; events: GiftEvent[]; createdAt: string;
}

const formCls = "h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand dark:bg-white/5 dark:text-ivory dark:border-white/15";

export default function KadoPage() {
  /* ---------- Form state ---------- */
  const [mode, setMode] = useState<"VOUCHER" | "PACKAGE">("VOUCHER");
  const [occasion, setOccasion] = useState("orangtua");
  const [denom, setDenom] = useState<number>(10_000_000);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [pkgSlug, setPkgSlug] = useState(packageList[0]?.slug ?? "");
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [relation, setRelation] = useState("Ibu");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMode, setPaymentMode] = useState<"LUNAS" | "CICILAN_SYARIAH">("LUNAS");
  const [deliveryChannel, setDeliveryChannel] = useState<"WA" | "EMAIL">("WA");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [created, setCreated] = useState<GiftData | null>(null);
  const [copied, setCopied] = useState(false);

  /* ---------- Track state ---------- */
  const [trackCode, setTrackCode] = useState("");
  const [tracking, setTracking] = useState(false);
  const [trackResult, setTrackResult] = useState<GiftData | null>(null);
  const [trackError, setTrackError] = useState<string | null>(null);

  /* ---------- Social proof (feed & stats) ---------- */
  const [recent, setRecent] = useState<GiftData[]>([]);
  const [stats, setStats] = useState<{ total: number; volumeKado: number; claimed: number } | null>(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch("/api/r4/gift?limit=6").then((x) => x.json());
        if (!alive) return;
        setRecent((r.gifts ?? []) as GiftData[]);
        setStats((r.stats ?? null) as { total: number; volumeKado: number; claimed: number } | null);
      } catch { /* biarkan strip kosong */ }
    })();
    return () => { alive = false; };
  }, []);

  const amount = useMemo(() => {
    if (mode === "PACKAGE") {
      const pkg = packageList.find((p) => p.slug === pkgSlug);
      return pkg?.basePrice ?? 0;
    }
    return denom === 0 ? customAmount : denom;
  }, [mode, denom, customAmount, pkgSlug]);

  const occasionMeta = GIFT_OCCASIONS.find((o) => o.key === occasion) ?? GIFT_OCCASIONS[0];

  const submit = async () => {
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/r4/gift", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: mode,
          occasion,
          senderName, senderPhone,
          recipientName, relation, recipientPhone,
          message,
          amount,
          packageSlug: mode === "PACKAGE" ? pkgSlug : null,
          paymentMode, deliveryChannel,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Gagal membuat kado");
        return;
      }
      setCreated(data.gift as GiftData);
      setTrackCode(data.gift.code);
      // refresh social proof
      const r = await fetch("/api/r4/gift?limit=6").then((x) => x.json());
      setRecent((r.gifts ?? []) as GiftData[]);
      setStats((r.stats ?? null) as { total: number; volumeKado: number; claimed: number } | null);
      scrollToId("hasil-kado");
    } catch {
      setError("Koneksi bermasalah. Coba lagi atau hubungi kami via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const track = async (codeArg?: string) => {
    const code = (codeArg ?? trackCode).trim();
    if (!code) {
      setTrackError("Masukkan kode kado terlebih dahulu");
      return;
    }
    setTrackError(null);
    setTracking(true);
    try {
      const res = await fetch(`/api/r4/gift?code=${encodeURIComponent(code)}`);
      const data = await res.json();
      if (!res.ok) {
        setTrackResult(null);
        setTrackError(data.error ?? "Kode tidak ditemukan");
        return;
      }
      setTrackResult(data.gift as GiftData);
    } catch {
      setTrackError("Koneksi bermasalah. Coba lagi.");
    } finally {
      setTracking(false);
    }
  };

  const copyCode = () => {
    if (!created) return;
    navigator.clipboard?.writeText(created.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jsonLd = useMemo(() => {
    const base = {
      "@context": "https://schema.org",
    };
    return [
      {
        ...base,
        "@type": "Product",
        name: "Kado Umrah — Voucher & Paket Umrah sebagai Hadiah (Gift Umrah)",
        description: "Beri umrah sebagai hadiah untuk orang tua, pasangan, atau karyawan: voucher nominal mulai Rp 5 juta atau paket spesifik, kartu kado digital dengan kode pelacakan, dana aman di escrow syariah, masa aktif 24 bulan, dana kembali 100% bila tidak diklaim.",
        brand: { "@type": "Brand", name: "SolusiHajj" },
        category: "Travel > Religious Travel > Umrah Gift",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          lowPrice: 5_000_000,
          highPrice: 120_000_000,
          offerCount: GIFT_DENOMINATIONS.length + packageList.length,
          availability: "https://schema.org/InStock",
        },
      },
      {
        ...base,
        "@type": "HowTo",
        name: "Cara Memberi Umrah sebagai Kado (Gift Umrah) di SolusiHajj",
        description: "Empat langkah memberi kado umrah: rancang kado, bayar via escrow syariah, kartu kado digital terkirim, penerima memilih paketnya sendiri.",
        step: KADO_STEPS.map((s) => ({
          "@type": "HowToStep", position: s.n, name: s.title, text: s.text,
        })),
      },
      {
        ...base,
        "@type": "FAQPage",
        mainEntity: KADO_FAQ.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-deep" aria-label="Kado Umrah">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:px-8 md:py-24">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm">
            <Gift size={16} className="text-gold" /> Fitur baru — Kado Umrah (Gift Umrah)
          </div>
          <h1 className="fade-up fade-up-2 mx-auto mt-6 max-w-3xl text-[34px] font-extrabold leading-[1.18] text-ivory md:text-[52px]">
            Kado Paling Bermakna: <span className="text-gold">Umrah untuk Orang Tersayang</span>
          </h1>
          <p className="fade-up fade-up-3 mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ivory/80">
            Kirami Ayah/Ibu, pasangan, atau sahabat berangkat umrah — tanpa tekanan jadwal.
            Voucher mulai Rp 5 juta, kartu kado digital berkode unik, dana aman di escrow syariah,
            dan kembali 100% bila tidak diklaim dalam 24 bulan.
          </p>
          <div className="fade-up fade-up-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => scrollToId("rancang-kado")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-7 font-bold text-[#1F1805] transition-transform hover:scale-[1.02]"
            >
              <Sparkles size={18} /> Rancang Kado Sekarang
            </button>
            <button
              onClick={() => scrollToId("lacak")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-ivory/30 px-7 font-bold text-ivory transition-colors hover:bg-white/10"
            >
              <SearchCheck size={18} /> Lacak Kode Kado
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <TrustPill icon={LockKeyhole}>Dana di escrow syariah sejak hari pertama</TrustPill>
            <TrustPill icon={ShieldCheck}>Masa aktif 24 bulan • refund 100%</TrustPill>
            <TrustPill icon={Users}>Bisa digabung dana se-saudara</TrustPill>
          </div>
        </div>
      </section>

      {/* ================= MOMEN KADO ================= */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8" aria-label="Momen memberi kado umrah">
        <SectionHeading
          center
          kicker="Untuk momen apa saja"
          title="Setiap Momen Punya Alasan untuk Di-umrahkan"
          sub="Pilih momen saat merancang kado — kartunya menyesuaikan. Yang paling sering diberikan: kado untuk orang tua dan hadiah pernikahan."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GIFT_OCCASIONS.map((o) => (
            <button
              key={o.key}
              onClick={() => { setOccasion(o.key); scrollToId("rancang-kado"); }}
              className={cn(
                "rounded-2xl border bg-card p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm",
                occasion === o.key ? "border-brand ring-2 ring-brand/25" : "border-line-warm"
              )}
              aria-pressed={occasion === o.key}
            >
              <span className="text-3xl" aria-hidden="true">{o.emoji}</span>
              <h3 className="mt-2 font-bold text-ink">{o.label}</h3>
              <p className="mt-1 text-sm leading-snug text-ink-muted">{o.tagline}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ================= RANCANG KADO (FORM + PREVIEW) ================= */}
      <section id="rancang-kado" className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Rancang kado umrah">
        <SectionHeading
          kicker="Langkah 1 — Rancang"
          title="Rancang Kadonya, Pratinjau Langsung"
          sub="Semua perubahan tampil di pratinjau kartu di sebelah kanan. Kartu terkirim sebagai gambar + teks via WhatsApp/email penerima, lengkap dengan kode pelacakan."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            {/* Mode */}
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-brand-soft p-1.5 dark:bg-white/5">
              {([
                { v: "VOUCHER", label: "Voucher Nominal", icon: Wallet },
                { v: "PACKAGE", label: "Paket Spesifik", icon: Package },
              ] as const).map((m) => (
                <button
                  key={m.v}
                  onClick={() => setMode(m.v)}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-[15px] font-bold transition-colors",
                    mode === m.v ? "bg-brand text-ivory shadow-card" : "text-ink-muted hover:text-brand dark:text-ivory/70"
                  )}
                  aria-pressed={mode === m.v}
                >
                  <m.icon size={17} /> {m.label}
                </button>
              ))}
            </div>

            <div className="mt-5 space-y-4">
              {mode === "VOUCHER" ? (
                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Nominal voucher</span>
                  <div className="flex flex-wrap gap-2">
                    {GIFT_DENOMINATIONS.map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDenom(d); setCustomAmount(0); }}
                        className={cn(
                          "min-h-11 rounded-xl border px-4 text-sm font-bold transition-colors",
                          denom === d && customAmount === 0
                            ? "border-brand bg-brand text-ivory"
                            : "border-line-warm bg-white text-ink hover:border-brand/50 dark:bg-white/5 dark:text-ivory dark:border-white/15"
                        )}
                        aria-pressed={denom === d && customAmount === 0}
                      >
                        {formatRupiah(d, { compact: true })}
                      </button>
                    ))}
                    <label className={cn(
                      "inline-flex min-h-11 items-center rounded-xl border px-3 text-sm font-bold",
                      customAmount > 0 ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink dark:bg-white/5 dark:text-ivory dark:border-white/15"
                    )}>
                      Rp <input
                        type="number" min={5_000_000} step={1_000_000} placeholder="lainnya"
                        value={customAmount || ""}
                        onChange={(e) => { setCustomAmount(Math.max(0, Number(e.target.value) || 0)); setDenom(0); }}
                        className="ml-1 w-24 bg-transparent text-sm outline-none placeholder:text-current/50"
                        aria-label="Nominal lainnya (Rp)"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Pilih paket dari katalog</span>
                  <select value={pkgSlug} onChange={(e) => setPkgSlug(e.target.value)} className={formCls}>
                    {packageList.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title} — {formatRupiah(p.basePrice, { compact: true })} ({p.durationDays} hari)
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Momen kado</span>
                  <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className={formCls}>
                    {GIFT_OCCASIONS.map((o) => (
                      <option key={o.key} value={o.key}>{o.emoji} {o.label}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Hubungan dengan penerima</span>
                  <select value={relation} onChange={(e) => setRelation(e.target.value)} className={formCls}>
                    {GIFT_RELATIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Nama pengirim (Anda) *</span>
                  <input value={senderName} onChange={(e) => setSenderName(e.target.value)} placeholder="cth: H. Ahmad Fauzi" className={formCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">WA pengirim *</span>
                  <input value={senderPhone} onChange={(e) => setSenderPhone(e.target.value)} placeholder="08xxxxxxxxxx" inputMode="tel" className={formCls} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Nama penerima kado *</span>
                  <input value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="cth: Hj. Aminah" className={formCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">WA penerima (opsional)</span>
                  <input value={recipientPhone} onChange={(e) => setRecipientPhone(e.target.value)} placeholder="08xxxxxxxxxx" inputMode="tel" className={formCls} />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-ink dark:text-ivory">
                  Pesan untuk kartu kado
                  <span className="text-xs font-normal text-ink-muted">{message.length}/300</span>
                </span>
                <textarea
                  value={message} maxLength={300} rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="cth: Ibu, doa anak-anak agar Ibu berangkat ke Rumah Allah dalam keadaan sehat. Semoga ini awal dari perjalanan bakti kami kepadamu."
                  className="w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-[15px] outline-none focus:border-brand dark:bg-white/5 dark:text-ivory dark:border-white/15"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Cara bayar</span>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      { v: "LUNAS", label: "Lunas" },
                      { v: "CICILAN_SYARIAH", label: "Cicilan 0%" },
                    ] as const).map((p) => (
                      <button
                        key={p.v}
                        onClick={() => setPaymentMode(p.v)}
                        className={cn(
                          "min-h-11 rounded-xl border px-3 text-sm font-bold transition-colors",
                          paymentMode === p.v
                            ? "border-brand bg-brand text-ivory"
                            : "border-line-warm bg-white text-ink dark:bg-white/5 dark:text-ivory dark:border-white/15"
                        )}
                        aria-pressed={paymentMode === p.v}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                  {paymentMode === "CICILAN_SYARIAH" && (
                    <Link to="/cicilan-syariah" className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline dark:text-gold">
                      Lihat simulasi cicilan syariah <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-ivory">Kirim kartu via</span>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      { v: "WA", label: "WhatsApp" },
                      { v: "EMAIL", label: "Email" },
                    ] as const).map((p) => (
                      <button
                        key={p.v}
                        onClick={() => setDeliveryChannel(p.v)}
                        className={cn(
                          "min-h-11 rounded-xl border px-3 text-sm font-bold transition-colors",
                          deliveryChannel === p.v
                            ? "border-brand bg-brand text-ivory"
                            : "border-line-warm bg-white text-ink dark:bg-white/5 dark:text-ivory dark:border-white/15"
                        )}
                        aria-pressed={deliveryChannel === p.v}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {error && (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                  {error}
                </p>
              )}

              <button
                onClick={submit} disabled={submitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-[16px] font-bold text-ivory transition-colors hover:bg-brand-deep disabled:opacity-60"
              >
                {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {submitting ? "Menyimpan pesanan…" : `Buat Kado — ${formatRupiah(amount)}`}
              </button>
              <p className="text-center text-xs text-ink-muted">
                Tidak ada biaya platform. Dana baru ditahan escrow setelah Anda menyelesaikan pembayaran.
              </p>
            </div>
          </div>

          {/* PREVIEW KARTU + HASIL */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start" id="hasil-kado">
            {/* Kartu pratinjau */}
            <div className="overflow-hidden rounded-3xl shadow-warm">
              <div className="relative bg-gradient-to-br from-[#0A4A36] via-[#0E6B4E] to-[#1E7F4F] p-6 text-ivory md:p-8">
                <div className="pattern-light absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="font-amiri text-2xl text-gold">هِبَة</p>
                    <span className="rounded-full border border-gold/40 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                      Kado Umrah
                    </span>
                  </div>
                  <p className="mt-6 text-sm text-ivory/70">Untuk yang tersayang,</p>
                  <h3 className="mt-1 text-2xl font-extrabold">
                    {recipientName || "Nama Penerima"}
                    {relation && <span className="ml-2 align-middle text-sm font-semibold text-gold">({relation})</span>}
                  </h3>
                  <p className="mt-3 min-h-16 text-[15px] leading-relaxed text-ivory/85">
                    {message || "Pesan Anda akan tertera di sini — tuliskan doa terbaikmu."}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/15 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ivory/60">Kado dari</p>
                      <p className="font-bold">{senderName || "Nama Anda"}</p>
                      <p className="mt-1 text-sm text-gold">{occasionMeta.emoji} {occasionMeta.label}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-ivory/60">
                        {mode === "VOUCHER" ? "Nominal voucher" : "Paket"}
                      </p>
                      <p className="text-xl font-extrabold text-gold">
                        {mode === "PACKAGE" ? packageList.find((p) => p.slug === pkgSlug)?.title.slice(0, 22) ?? "—" : formatRupiah(amount)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#17181D] px-5 py-3 text-ivory">
                <span className="text-xs uppercase tracking-widest text-ivory/60">Masa aktif 24 bulan</span>
                <span className="font-mono text-sm font-bold text-gold">SH-KADO-•••••-•••••</span>
              </div>
            </div>

            {/* Hasil sukses */}
            {created && (
              <div className="rounded-2xl border-2 border-brand/40 bg-brand-soft/50 p-6 shadow-card" data-testid="kado-sukses">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={24} className="text-brand" />
                  <h3 className="text-lg font-extrabold text-brand-deep">Kado berhasil dibuat — Alhamdulillah!</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Simpan kode ini. Setelah pembayaran selesai (VA escrow syariah akan dikirim ke WA Anda),
                  kartu kado otomatis terkirim ke penerima {deliveryChannel === "EMAIL" ? "via email" : "via WhatsApp"}.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-brand/30 bg-white px-4 py-3 dark:bg-white/5">
                  <code className="text-lg font-extrabold tracking-wide text-brand">{created.code}</code>
                  <button onClick={copyCode} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-line-warm px-3 text-sm font-bold text-ink hover:bg-brand-soft dark:text-ivory dark:border-white/15">
                    {copied ? <CheckCircle2 size={15} /> : <Copy size={15} />} {copied ? "Tersalin" : "Salin"}
                  </button>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <a
                    href={waLink(`Assalamualaikum, saya ${created.senderName} baru membuat Kado Umrah ${created.code} (${formatRupiah(created.amount)}) untuk ${created.recipientName}. Mohon instruksi pembayaran VA escrow-nya.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#1E7F4F] px-4 font-bold text-white transition-transform hover:scale-[1.01]"
                  >
                    <MessageCircle size={17} /> Bayar via WA
                  </a>
                  <button
                    onClick={() => { setTrackCode(created.code); scrollToId("lacak"); track(created.code); }}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand px-4 font-bold text-brand hover:bg-brand-soft"
                  >
                    <SearchCheck size={17} /> Lacak Kado
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= LACAK ================= */}
      <section id="lacak" className="mt-20 bg-white py-16 md:mt-28" aria-label="Lacak kado umrah">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeading
            center
            kicker="Transparan sejak awal"
            title="Lacak Kado dengan Kode Unik"
            sub="Pengirim, penerima, dan seluruh saudara yang ikut menyumbang bisa melihat status dana kapan saja — sama terbukanya seperti dana masjid."
          />
          <div className="mt-8 flex gap-2">
            <input
              value={trackCode}
              onChange={(e) => setTrackCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && track()}
              placeholder="SH-KADO-2026-00001"
              className={cn(formCls, "font-mono")}
              aria-label="Kode kado"
            />
            <button
              onClick={() => track()} disabled={tracking}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 font-bold text-ivory hover:bg-brand-deep disabled:opacity-60"
            >
              {tracking ? <Loader2 size={17} className="animate-spin" /> : <SearchCheck size={17} />} Lacak
            </button>
          </div>
          {trackError && (
            <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
              {trackError}
            </p>
          )}

          {trackResult && (() => {
            const meta = GIFT_STATUS_META[trackResult.status] ?? GIFT_STATUS_META.MENUNGGU_PEMBAYARAN;
            return (
              <div className="mt-8 rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8" data-testid="hasil-lacak">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">Kode kado</p>
                    <p className="font-mono text-xl font-extrabold text-brand">{trackResult.code}</p>
                    <p className="mt-1 text-[15px] text-ink">
                      Dari <b>{trackResult.senderName}</b> untuk{" "}
                      <b>{trackResult.recipientName}</b>
                      {trackResult.relation ? ` (${trackResult.relation})` : ""}
                    </p>
                  </div>
                  <span
                    className="rounded-full px-4 py-2 text-sm font-extrabold"
                    style={{ color: meta.color, background: meta.bg }}
                  >
                    {meta.label}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{meta.desc}</p>

                {/* Progress 5 langkah */}
                {meta.step > 0 && (
                  <div className="mt-6 flex items-center gap-1" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={cn("h-2 flex-1 rounded-full", s <= meta.step ? "bg-brand" : "bg-line-warm dark:bg-white/10")}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                  <div className="rounded-xl bg-brand-soft/50 p-4">
                    <p className="font-bold text-ink">Nilai kado</p>
                    <p className="mt-1 text-lg font-extrabold text-brand">{formatRupiah(trackResult.amount)}</p>
                    <p className="text-xs text-ink-muted">{trackResult.kind === "PACKAGE" ? "Paket spesifik" : "Voucher nominal"}</p>
                  </div>
                  <div className="rounded-xl bg-brand-soft/50 p-4">
                    <p className="font-bold text-ink">Cara bayar</p>
                    <p className="mt-1 font-semibold text-ink">{trackResult.paymentMode === "CICILAN_SYARIAH" ? "Cicilan Syariah" : "Lunas"}</p>
                    <p className="text-xs text-ink-muted">{trackResult.deliveryChannel === "EMAIL" ? "Kirim via email" : "Kirim via WA"}</p>
                  </div>
                  <div className="rounded-xl bg-brand-soft/50 p-4">
                    <p className="font-bold text-ink">Masa aktif s/d</p>
                    <p className="mt-1 font-semibold text-ink">{trackResult.validUntil ?? "—"}</p>
                    <p className="text-xs text-ink-muted">Refund 100% bila tak diklaim</p>
                  </div>
                </div>

                {/* Audit trail */}
                <div className="mt-6">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
                    <CircleDot size={15} className="text-gold-deep" /> Jejak audit (Saksi Jamaah)
                  </p>
                  <ol className="space-y-3 border-l-2 border-line-warm pl-5">
                    {trackResult.events.map((ev) => (
                      <li key={ev.id} className="relative">
                        <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-ivory bg-gold" aria-hidden="true" />
                        <p className="text-sm font-semibold text-ink">{ev.detail}</p>
                        <p className="text-xs text-ink-muted">
                          {new Date(ev.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ================= CARA KERJA ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Cara kerja kado umrah">
        <SectionHeading
          center
          kicker="Alur sederhana"
          title="Empat Langkah, Lalu Berangkatlah Ia"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {KADO_STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-lg font-extrabold text-gold-deep">
                {s.n}
              </span>
              <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        {stats && stats.total > 0 && (
          <div className="mt-8 rounded-2xl border border-line-warm bg-card p-5 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-sm font-bold text-ink">
                <Gift size={16} className="text-brand" /> Kado terbaru di SolusiHajj
              </p>
              <p className="text-sm font-bold text-brand">
                {stats.total} kado • volume {formatRupiah(stats.volumeKado, { compact: true })} • {stats.claimed} telah diklaim
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {recent.map((g) => {
                const occ = GIFT_OCCASIONS.find((o) => o.key === g.occasion);
                return (
                  <span key={g.id} className="inline-flex items-center gap-1.5 rounded-full border border-line-warm bg-white px-3 py-1.5 text-xs font-semibold text-ink dark:bg-white/5 dark:border-white/10 dark:text-ivory/80">
                    {occ?.emoji} {g.senderName} → {g.recipientName}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* ================= KORPORAT ================= */}
      <section className="mt-20 bg-brand-deep py-16 md:py-20" aria-label="Kado korporat">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            dark
            kicker="Untuk perusahaan & institusi"
            title="Umrah sebagai Insentif Terbaik yang Pernah Anda Berikan"
            sub="Bonus pensiun, doorprize syariah event, insentif kinerja, atau hadiah mitra bisnis — tanpa unsur riba, tanpa undian yang mengandung gharar."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Building2, t: "Faktur & invoice resmi",
                d: "Pembayaran perusahaan via transfer korporat dengan faktur — sesuai ketentuan penyelenggara ibadah yang tidak dikenakan PPN.",
              },
              {
                icon: Users, t: "Kode multi-penerima",
                d: "Undian 50 karyawan? Kami terbitkan kode per penerima dari satu pool dana, semua terlacak mandiri oleh masing-masing pemenang.",
              },
              {
                icon: HeartHandshake, t: "Kurasi & laporan",
                d: "Tim kurasi mendampingi setiap penerima memilih paket, plus laporan ringkas distribusi untuk tim HR/panitia Anda.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <c.icon size={26} className="text-gold" />
                <h3 className="mt-3 text-lg font-bold text-ivory">{c.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/75">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={waLink("Assalamualaikum, kami dari tim perusahaan ingin mengadakan program Kado Umrah korporat (insentif karyawan/doorprize). Mohon info skema kode multi-penerima dan faktur korporatnya.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-gold px-7 font-bold text-[#1F1805] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={18} /> Konsultasi Kado Korporat
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto mt-20 max-w-4xl px-4 pb-20 md:mt-28 md:px-8" aria-label="FAQ kado umrah">
        <SectionHeading center kicker="Pertanyaan umum" title="Semua yang Ingin Anda Tanya tentang Kado Umrah" />
        <Accordion type="single" collapsible className="mt-8">
          {KADO_FAQ.map((f, i) => (
            <AccordionItem key={i} value={`kado-${i}`}>
              <AccordionTrigger className="text-left text-[16px] font-bold text-ink dark:text-ivory">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-ink-muted">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Cross-sell cicilan */}
        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold-soft/40 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold text-ink dark:text-ivory">Kadonya bagus, budget-nya mepet?</h3>
              <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                Kado Umrah bisa dibayar dengan cicilan syariah — murabahah tanpa bunga, tanpa denda majemuk.
              </p>
            </div>
            <Link
              to="/cicilan-syariah"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 font-bold text-ivory hover:bg-brand-deep"
            >
              Coba Kalkulator Cicilan <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD: Product + HowTo + FAQPage */}
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </div>
  );
}
