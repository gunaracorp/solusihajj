"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Sparkles, Loader2, CheckCircle2, Send, MapPin, CalendarDays, Users, Wallet,
  ShieldCheck, MessageCircleQuestion, Bot, RotateCcw, CreditCard,
} from "lucide-react";
import { SectionHeading } from "../ui-bits";
import { Link } from "@/lib/solusihajj/router";
import { cn } from "@/lib/utils";

/**
 * R3 — "NurMatch AI Live" — rekomendasi paket & penyelenggara oleh LLM
 * sungguhan (backend z-ai-web-dev-sdk). AI hanya boleh memilih dari
 * kandidat nyata: katalog paket + database nasional penyelenggara.
 */

interface Pick {
  kind: "paket" | "penyelenggara";
  refId: string;
  title: string;
  reason?: string;
}
interface MatchResult {
  sessionId: string;
  verdict: string;
  reasoning: string;
  picks: Pick[];
  advice: string[];
  followUps: string[];
  model: string;
  latencyMs: number;
  candidateCount: { paket: number; operator: number };
}
interface RecentSession {
  id: string;
  verdict: string | null;
  createdAt: string;
  latencyMs: number | null;
}

const CITIES = ["Jakarta", "Surabaya", "Medan", "Bandung", "Makassar", "Palembang", "Kuala Lumpur", "Singapura", "Bangkok"];
const MONTHS = ["Desember 2026", "Januari 2027", "Februari 2027", "Ramadhan 1448", "Maret 2027", "April 2027", "Fleksibel"];
const STYLES = [
  { v: "reguler", l: "Reguler nyaman" },
  { v: "hemat", l: "Hemat & syariah" },
  { v: "vip", l: "VIP / hotel dekat" },
  { v: "keluarga", l: "Keluarga & lansia" },
];
const PRIORITIES = ["Hotel dekat Haram", "Harga paling hemat", "Muthawif berbahasa Indonesia", "Ramah lansia", "Rombongan besar", "Makanan Indonesia"];

/** render markdown mini: **bold**, baris baru, daftar bernomor */
function MiniMarkdown({ text }: { text: string }) {
  const lines = text.split("\n").filter((l) => l.trim());
  return (
    <div className="space-y-1.5 text-[15px] leading-relaxed text-ink dark:text-ivory/90">
      {lines.map((line, i) => {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        const rendered = parts.map((p, j) => (j % 2 === 1 ? <strong key={j} className="font-extrabold text-brand dark:text-gold">{p}</strong> : p));
        const isNum = /^\d+\.\s/.test(line);
        return isNum ? (
          <p key={i} className="pl-2">{rendered}</p>
        ) : (
          <p key={i}>{rendered}</p>
        );
      })}
    </div>
  );
}

export default function NurMatchAiPage() {
  const [budgetJt, setBudgetJt] = useState(25);
  const [city, setCity] = useState("Jakarta");
  const [month, setMonth] = useState("Fleksibel");
  const [pax, setPax] = useState(2);
  const [hasPassport, setHasPassport] = useState(true);
  const [style, setStyle] = useState("reguler");
  const [priorities, setPriorities] = useState<string[]>(["Hotel dekat Haram"]);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [recent, setRecent] = useState<RecentSession[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const loadRecent = useCallback(() => {
    fetch("/api/r3/ai/match")
      .then((r) => r.json())
      .then((d) => setRecent(d.sessions ?? []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    loadRecent();
  }, [loadRecent]);

  const togglePriority = (p: string) =>
    setPriorities((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const submit = async (extraNotes?: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/r3/ai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          budgetJt,
          city,
          month,
          pax,
          hasPassport,
          style,
          priorities,
          notes: [notes, extraNotes].filter(Boolean).join(" ").slice(0, 400),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "NurMatch AI sibuk — coba lagi sebentar.");
        return;
      }
      setResult(data);
      loadRecent();
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    } catch {
      setError("Koneksi terganggu — silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ivory pb-20 dark:bg-[#0d2b23]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NurMatch AI",
            applicationCategory: "TravelApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
            description:
              "AI penasihat umrah SolusiHajj: mencocokkan profil, anggaran, dan preferensi jamaah dengan paket serta penyelenggara terverifikasi — transparan dan bukan kotak hitam.",
          }),
        }}
      />

      <section className="border-b border-line-warm bg-gradient-to-b from-brand-soft/60 to-ivory py-14 dark:border-white/10 dark:from-white/5 dark:to-transparent">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeading
            kicker="R3 — AI LANGSUNG, BUKAN KOTAK HITAM"
            title="NurMatch AI — Live"
            sub="Ceritakan profil perjalanan Anda: anggaran, kota, bulan, prioritas. NurMatch AI menyaring katalog paket nyata dan database nasional penyelenggara, lalu menjelaskan alasannya — dengan bahasa yang mudah dipahami lansia."
          />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pt-10 md:px-8">
        {/* ================= FORM PROFIL ================= */}
        <div className="rounded-3xl border border-line-warm bg-card p-6 shadow-card md:p-8 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-ink dark:text-ivory" htmlFor="nm-budget">
                <Wallet size={16} className="text-gold-deep dark:text-gold" /> Anggaran per orang: <span className="text-brand dark:text-gold">{budgetJt} juta</span>
              </label>
              <input
                id="nm-budget"
                type="range"
                min={8}
                max={120}
                step={1}
                value={budgetJt}
                onChange={(e) => setBudgetJt(Number(e.target.value))}
                className="mt-3 w-full accent-[#0E6B4E]"
              />
              <div className="flex justify-between text-xs text-ink-muted"><span>8 jt</span><span>120 jt</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="nm-city"><MapPin size={13} /> Kota</label>
                <select
                  id="nm-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-sm dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                >
                  {CITIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="nm-month"><CalendarDays size={13} /> Berangkat</label>
                <select
                  id="nm-month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-sm dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                >
                  {MONTHS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="nm-pax"><Users size={13} /> Jamaah</label>
                <input
                  id="nm-pax"
                  type="number"
                  min={1}
                  max={40}
                  value={pax}
                  onChange={(e) => setPax(Math.max(1, Number(e.target.value)))}
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-sm dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                />
              </div>
              <div>
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted"><CreditCard size={13} /> Paspor siap?</span>
                <button
                  type="button"
                  onClick={() => setHasPassport(!hasPassport)}
                  role="switch"
                  aria-checked={hasPassport}
                  className={cn("mt-1 flex h-[42px] w-full items-center justify-center rounded-xl border text-sm font-bold transition-colors",
                    hasPassport ? "border-brand bg-brand-soft text-brand dark:border-gold/40 dark:text-gold" : "border-line-warm bg-white text-ink-muted dark:border-white/15 dark:bg-white/10 dark:text-ivory")}
                >
                  {hasPassport ? "Sudah aktif" : "Belum / proses"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Gaya perjalanan</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.v}
                  type="button"
                  onClick={() => setStyle(s.v)}
                  aria-pressed={style === s.v}
                  className={cn("min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                    style === s.v ? "border-brand bg-brand text-white dark:border-gold dark:bg-gold dark:text-ink" : "border-line-warm bg-white text-ink hover:bg-brand-soft dark:border-white/15 dark:bg-white/10 dark:text-ivory")}
                >
                  {s.l}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Prioritas (boleh pilih beberapa)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PRIORITIES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => togglePriority(p)}
                  aria-pressed={priorities.includes(p)}
                  className={cn("min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                    priorities.includes(p) ? "border-gold bg-gold/15 text-gold-deep dark:text-gold" : "border-line-warm bg-white text-ink hover:bg-brand-soft dark:border-white/15 dark:bg-white/10 dark:text-ivory")}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="nm-notes">Catatan untuk AI (opsional)</label>
            <textarea
              id="nm-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="mis. Bawa ibu 68 tahun, perlu kursi roda di Haram, kamar 3 orang"
              className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-sm outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
            />
          </div>

          {error && <p className="mt-4 rounded-xl bg-[#FBEAE7] px-4 py-3 text-sm font-semibold text-[#B3372B]">{error}</p>}

          <button
            onClick={() => submit()}
            disabled={loading}
            className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-[#0d5c43] py-4 text-[15px] font-extrabold text-white shadow-warm transition-all hover:opacity-95 disabled:opacity-60"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
            {loading ? "NurMatch AI sedang menganalisis…" : "Minta Rekomendasi NurMatch AI"}
          </button>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="mt-8 rounded-3xl border border-line-warm bg-card p-8 text-center shadow-card dark:border-white/10 dark:bg-white/5">
            <Bot size={32} className="mx-auto animate-pulse text-brand dark:text-gold" />
            <p className="mt-3 font-extrabold text-ink dark:text-ivory">Mencocokkan profil Anda…</p>
            <p className="mt-1 text-sm text-ink-muted">
              Menyaring kandidat paket katalog + database nasional penyelenggara, lalu menyusun rekomendasi beserta alasannya.
            </p>
          </div>
        )}

        {/* ================= HASIL ================= */}
        {result && !loading && (
          <div ref={resultRef} className="mt-8 scroll-mt-24">
            <div className="rounded-3xl border border-brand/25 bg-gradient-to-b from-brand-soft/70 to-card p-6 shadow-warm md:p-8 dark:border-gold/25 dark:from-white/5 dark:to-transparent">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white dark:bg-gold dark:text-ink">
                  <Sparkles size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand dark:text-gold">Kesimpulan NurMatch AI • model {result.model} • {result.latencyMs} ms</p>
                  <p className="mt-1 text-lg font-extrabold leading-snug text-ink dark:text-ivory">{result.verdict}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-card p-5 shadow-card dark:bg-white/5">
                <MiniMarkdown text={result.reasoning} />
              </div>

              <h3 className="mt-6 font-extrabold text-ink dark:text-ivory">Rekomendasi untuk Anda</h3>
              <div className="mt-3 space-y-3">
                {result.picks.map((p, i) => (
                  <div key={`${p.kind}-${p.refId}-${i}`} className="rounded-2xl border border-line-warm bg-card p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-bold text-ink dark:text-ivory">
                        {i + 1}. {p.title}
                      </p>
                      {p.kind === "paket" ? (
                        <Link to={`/paket/${p.refId}`} className="inline-flex h-9 items-center rounded-xl bg-brand px-3 text-xs font-bold text-white hover:bg-brand-deep dark:bg-gold dark:text-ink">
                          Lihat Paket →
                        </Link>
                      ) : (
                        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand dark:text-gold">Database Nasional</span>
                      )}
                    </div>
                    {p.reason && <p className="mt-1 text-sm text-ink-muted">{p.reason}</p>}
                  </div>
                ))}
              </div>

              {result.advice.length > 0 && (
                <>
                  <h3 className="mt-6 flex items-center gap-2 font-extrabold text-ink dark:text-ivory"><ShieldCheck size={17} className="text-gold-deep dark:text-gold" /> Saran NurMatch</h3>
                  <ul className="mt-2 space-y-1.5">
                    {result.advice.map((a, i) => (
                      <li key={i} className="flex gap-2 text-[15px] text-ink dark:text-ivory/90">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand dark:text-gold" /> {a}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {result.followUps.length > 0 && (
                <>
                  <h3 className="mt-6 flex items-center gap-2 font-extrabold text-ink dark:text-ivory"><MessageCircleQuestion size={17} className="text-gold-deep dark:text-gold" /> Tanya lanjutan? Klik untuk memperhalus hasil</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {result.followUps.map((f, i) => (
                      <button
                        key={i}
                        onClick={() => submit(f)}
                        disabled={loading}
                        className="min-h-10 rounded-full border border-brand/30 bg-white px-4 text-sm font-semibold text-brand hover:bg-brand-soft disabled:opacity-60 dark:border-gold/30 dark:bg-transparent dark:text-gold"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <button onClick={() => { setResult(null); setNotes(""); }} className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl border border-line-warm px-4 text-sm font-bold text-ink-muted hover:bg-ivory dark:border-white/15 dark:text-ivory/80">
                <RotateCcw size={15} /> Mulai profil baru
              </button>
            </div>
          </div>
        )}

        {/* ================= RIWAYAT TRANSPARAN ================= */}
        {recent.length > 0 && (
          <section className="mt-12" aria-label="Riwayat rekomendasi NurMatch">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-ink-muted">Transparansi — rekomendasi terakhir di platform</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {recent.slice(0, 4).map((s) => (
                <div key={s.id} className="rounded-2xl border border-line-warm bg-card p-4 text-sm dark:border-white/10 dark:bg-white/5">
                  <p className="line-clamp-2 text-ink dark:text-ivory/90">{s.verdict ?? "—"}</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {new Date(s.createdAt).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                    {s.latencyMs ? ` • ${s.latencyMs} ms` : ""}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Profil tidak menampilkan nama/identitas — sesuai UU PDP 27/2022, data pribadi dienkripsi dan tidak dijual.
            </p>
          </section>
        )}

        <p className="mt-10 text-center text-sm text-ink-muted">
          Ingin membandingkan hasil AI dengan katalog? Buka{" "}
          <Link to="/paket" className="font-bold text-brand underline decoration-gold dark:text-gold">Katalog Paket</Link>{" "}
          atau coba versi kuis singkat{" "}
          <Link to="/nurmatch" className="font-bold text-brand underline decoration-gold dark:text-gold">NurMatch klasik</Link>.
        </p>
      </div>
    </div>
  );
}
