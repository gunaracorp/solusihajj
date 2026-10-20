"use client";

/**
 * MARKET PAGES R1.5 — Tiket Charter Grup, Perbandingan Paket, NurMatch AI.
 * Tiga fitur inti "marketplace engine" yang membuat SolusiHajj 100x umroh.com:
 * allotment grosir, compare side-by-side, dan rekomendasi AI transparan.
 */

import { useEffect, useMemo, useState } from "react";
import {
  Plane,
  PlaneTakeoff,
  Users,
  Luggage,
  MapPin,
  CalendarDays,
  GitCompareArrows,
  X,
  Sparkles,
  BadgeCheck,
  CheckCircle2,
  Trophy,
  ArrowRight,
  LockKeyhole,
  RotateCcw,
} from "lucide-react";
import { flightList } from "@/data/flights";
import { packageList, getPackage } from "@/data/packages";
import { getPpiu, ppiuList, orgOf } from "@/data/ppiu";
import { getCompare, clearCompare, onCompareChange, toggleCompare } from "@/lib/solusihajj/compare";
import { formatRupiah, formatDate, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link } from "@/lib/solusihajj/router";
import type { Pkg } from "@/data/types";
import { PRODUCT_META, TIER_META } from "@/data/types";
import { Breadcrumb } from "../chrome";
import { SectionHeading, ShieldBadge, StarRating, SeatBar, WaButton, OrgBadge } from "../ui-bits";

/* ================= HALAMAN TIKET CHARTER GRUP ================= */
export function FlightGroupPage() {
  const [fromCity, setFromCity] = useState("");
  const [onlyDirect, setOnlyDirect] = useState(false);

  const cities = [...new Set(flightList.map((f) => f.fromCity))].sort();
  const filtered = flightList.filter((f) => {
    if (fromCity && f.fromCity !== fromCity) return false;
    if (onlyDirect && f.transit !== "Langsung") return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Tiket Charter Grup" }]} />
      <SectionHeading
        kicker="Harga grosir"
        title={`${filtered.length} Jadwal Penerbangan Charter Grup`}
        sub="Kursi pesawat harga kelompok untuk rombongan masjid, komunitas, dan korporat. Minimum 10 kursi per pesanan, bagasi 40–46 kg, ditangani penyelenggara terverifikasi. Cocok untuk yang ingin merakit paket sendiri."
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-ink">
          Keberangkatan dari:
          <select
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="h-12 rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
            aria-label="Filter kota keberangkatan"
          >
            <option value="">Semua kota</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <button
          onClick={() => setOnlyDirect(!onlyDirect)}
          className={`min-h-11 rounded-full border px-4 text-sm font-bold transition-colors ${
            onlyDirect ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink hover:border-brand/40"
          }`}
          aria-pressed={onlyDirect}
        >
          Langsung saja
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {filtered.map((f) => {
          const organizer = getPpiu(f.ppiuSlug);
          return (
            <article key={f.id} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card transition-all hover:shadow-warm md:p-6">
              <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep">
                      <Plane size={12} /> {f.transit}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-ink-muted">Min. {f.minOrder} kursi</span>
                    {organizer && <OrgBadge org={orgOf(organizer)} size="sm" />}
                  </div>
                  <h2 className="mt-3 text-[19px] font-extrabold text-ink">{f.route}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{f.airline}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} /> Berangkat {formatDate(f.depart, "long")}</span>
                    <span className="inline-flex items-center gap-1.5"><Luggage size={15} /> Bagasi {f.baggageKg} kg</span>
                    <span className="inline-flex items-center gap-1.5"><Users size={15} /> Grup s.d. {f.seatsTotal} kursi</span>
                  </div>
                  <p className="mt-3 rounded-xl bg-muted px-3.5 py-2.5 text-[13px] leading-relaxed text-ink-muted">{f.notes}</p>
                </div>
                <div className="flex flex-col justify-between gap-4 rounded-2xl bg-muted/60 p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Harga grosir / kursi</p>
                    <p className="tabular mt-1 text-3xl font-extrabold text-brand">{formatRupiah(f.pricePerPax)}</p>
                    <div className="mt-3 max-w-[220px]">
                      <SeatBar left={f.seatsLeft} total={f.seatsTotal} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {organizer && (
                      <WaButton
                        href={waLink(
                          `Assalamualaikum, saya tertarik menawar ${f.minOrder} kursi charter ${f.airline} (${f.route}) berangkat ${formatDate(f.depart, "short")} yang saya lihat di SolusiHajj. Mohon info syarat & pengurusannya.`
                        )}
                        label="Tawar / Tanya via WA"
                        className="w-full"
                      />
                    )}
                    {organizer && (
                      <Link
                        to={`/ppiu/${organizer.slug}`}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-brand text-sm font-bold text-brand hover:bg-brand-soft"
                      >
                        Profil penyelenggara →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line-warm bg-card p-10 text-center">
            <PlaneTakeoff className="mx-auto mb-3 text-ink-muted" size={36} />
            <p className="font-bold text-ink">Tidak ada jadwal pada filter ini</p>
            <p className="mt-1 text-sm text-ink-muted">Coba longgarkan filter atau hubungi kami — allotment baru terbuka tiap bulan.</p>
          </div>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-gold/40 bg-gold-soft/50 p-6">
        <h2 className="text-[17px] font-extrabold text-ink">Cara memakai jadwal ini untuk rombongan Anda</h2>
        <ol className="mt-3 space-y-2 text-[15px] text-ink-muted">
          <li>1. Tentukan jumlah kursi minimal {flightList[0].minOrder} kursi dan tanggal yang mendekati.</li>
          <li>2. Klik "Tawar via WA" — tim kami menjembatani dengan penyelenggara pemegang allotment.</li>
          <li>3. Jika butuh hotel + visa + handling juga, kami susunkan jadi paket custom — dana tetap lewat escrow.</li>
        </ol>
      </div>
    </div>
  );
}

/* ================= HALAMAN PERBANDINGAN PAKET ================= */
const COMPARE_ROWS: { label: string; get: (p: Pkg) => string }[] = [
  { label: "Harga per orang", get: (p) => formatRupiah(p.basePrice) },
  { label: "Jenis produk", get: (p) => PRODUCT_META[p.product ?? "full"].label },
  { label: "Tipe", get: (p) => ({ reguler: "Reguler", ramadhan: "Ramadhan", "plus-turki": "Plus Turki", "plus-dubai": "Plus Dubai" }[p.type]) },
  { label: "Durasi", get: (p) => `${p.durationDays} hari` },
  { label: "Keberangkatan", get: (p) => p.departCity },
  { label: "Jendela waktu", get: (p) => p.departWindow },
  { label: "Maskapai", get: (p) => p.airline },
  { label: "Hotel Makkah", get: (p) => `${p.hotelMakkah.name} (${p.hotelMakkah.stars}★, ${p.hotelMakkah.distanceToHaram} m)` },
  { label: "Hotel Madinah", get: (p) => `${p.hotelMadinah.name} (${p.hotelMadinah.stars}★, ${p.hotelMadinah.distanceToHaram} m)` },
  { label: "Rating Saksi Jamaah", get: (p) => `${p.rating.toFixed(1)} / 5 (${p.reviewCount} review)` },
  { label: "Termasuk", get: (p) => `${p.includes.length} komponen + asuransi` },
  { label: "Pembatalan H-30", get: (p) => p.cancellation[0]?.refund.slice(0, 60) + "…" },
];

export function ComparePage() {
  const [slugs, setSlugs] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setSlugs(getCompare());
    sync();
    return onCompareChange(sync);
  }, []);
  const pkgs = slugs.map((s) => getPackage(s)).filter(Boolean) as Pkg[];

  if (pkgs.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <GitCompareArrows className="mx-auto text-ink-muted" size={44} />
        <h1 className="mt-4 text-2xl font-extrabold text-ink">Belum Ada Paket yang Dipilih</h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Buka katalog, tekan tombol <strong>Bandingkan</strong> pada 2–3 paket yang menarik, lalu kembali ke sini —
          semuanya akan terbanding sisi-demi-sisi.
        </p>
        <Link to="/paket" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-brand px-7 font-bold text-ivory hover:bg-brand-deep">
          Buka Katalog <ArrowRight size={17} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Bandingkan Paket" }]} />
      <SectionHeading
        kicker="Compare"
        title={`Membandingkan ${pkgs.length} Paket Side-by-Side`}
        sub="Semua angka dari data terverifikasi — bukan klaim marketing. Hapus satu kolom untuk mengganti pilihan."
      />
      <div className="mt-8 overflow-x-auto rounded-2xl border border-line-warm shadow-card">
        <table className="w-full min-w-[720px] text-left text-[15px]">
          <thead>
            <tr className="border-b border-line-warm bg-muted/50">
              <th className="w-44 px-5 py-4 font-bold text-ink">Aspek</th>
              {pkgs.map((p) => (
                <th key={p.slug} className="min-w-[220px] px-5 py-4 align-top">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[15px] font-extrabold leading-snug text-ink">{p.title}</p>
                      <p className="mt-1 text-xs text-ink-muted">{getPpiu(p.ppiuSlug)?.shortName}</p>
                    </div>
                    <button
                      onClick={() => toggleCompare(p.slug)}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line-warm text-ink-muted hover:text-danger-warm"
                      aria-label={`Hapus ${p.title} dari perbandingan`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                <td className="px-5 py-3.5 font-bold text-ink">{row.label}</td>
                {pkgs.map((p) => (
                  <td key={p.slug} className={`px-5 py-3.5 ${row.label === "Harga per orang" ? "tabular text-lg font-extrabold text-brand" : "text-ink-muted"}`}>
                    {row.get(p)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-brand-soft/60">
              <td className="px-5 py-4 font-extrabold text-brand-deep">Booking</td>
              {pkgs.map((p) => (
                <td key={p.slug} className="px-5 py-4">
                  <WaButton
                    href={waLink(waMessages.package(p.title, getPpiu(p.ppiuSlug)?.name ?? "PPIU", formatRupiah(p.basePrice)))}
                    label="Tanya Paket"
                    className="min-h-11 w-full text-sm"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => clearCompare()} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-warm px-4 text-sm font-semibold text-ink-muted hover:bg-muted">
          <RotateCcw size={15} /> Kosongkan semua
        </button>
        <Link to="/paket" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand px-5 text-sm font-bold text-brand hover:bg-brand-soft">
          Tambah paket lain <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

/* ================= NURMATCH AI QUIZ ================= */
interface QuizState {
  budget: string;
  durasi: string;
  waktu: string;
  prioritas: string;
  kebutuhan: string;
}

const QUIZ_STEPS: { key: keyof QuizState; q: string; options: { v: string; l: string; hint?: string }[] }[] = [
  {
    key: "budget",
    q: "Berapa budget Anda per orang?",
    options: [
      { v: "b1", l: "Di bawah Rp 20 jt", hint: "Land Arrangement / ekonomis" },
      { v: "b2", l: "Rp 20 – 35 jt", hint: "Reguler nyaman" },
      { v: "b3", l: "Rp 35 – 50 jt", hint: "Hotel dekat Haram" },
      { v: "b4", l: "Di atas Rp 50 jt", hint: "Premium / plus negara lain" },
    ],
  },
  {
    key: "durasi",
    q: "Berapa lama waktu yang Anda punya?",
    options: [
      { v: "d1", l: "Singkat (≤ 8 hari)", hint: "Sprint, untuk pekerja sibuk" },
      { v: "d2", l: "Standar (9 – 11 hari)", hint: "Paling populer" },
      { v: "d3", l: "Panjang (≥ 12 hari)", hint: "Santai + plus negara lain" },
    ],
  },
  {
    key: "waktu",
    q: "Kapan Anda ingin berangkat?",
    options: [
      { v: "w1", l: "Kapan pun (cari termurah)" },
      { v: "w2", l: "Ramadhan", hint: "Suasana paling luar biasa" },
      { v: "w3", l: "Libur sekolah / akhir tahun", hint: "Bersama anak" },
    ],
  },
  {
    key: "prioritas",
    q: "Apa prioritas utama Anda?",
    options: [
      { v: "p1", l: "Dekat Masjidil Haram", hint: "Praktis untuk lansia" },
      { v: "p2", l: "Harga paling hemat" },
      { v: "p3", l: "Bimbingan ibadah terbaik", hint: "Muthawif & kajian" },
      { v: "p4", l: "Wisata tambahan", hint: "Turki, Dubai, Kairo" },
    ],
  },
  {
    key: "kebutuhan",
    q: "Ada kebutuhan khusus?",
    options: [
      { v: "k1", l: "Bawa orang tua / lansia" },
      { v: "k2", l: "Pergi berkeluarga dengan anak" },
      { v: "k3", l: "Saya sudah punya tiket sendiri", hint: "Butuh LA" },
      { v: "k4", l: "Tidak ada — jamaah normal" },
    ],
  },
];

interface MatchResult {
  pkg: Pkg;
  score: number;
  reasons: string[];
}

export function NurMatchPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizState>>({});
  const [done, setDone] = useState(false);

  const results = useMemo<MatchResult[]>(() => {
    if (!done) return [];
    const scored: MatchResult[] = packageList.map((pkg) => {
      let score = 50;
      const reasons: string[] = [];
      const kind = pkg.product ?? "full";
      const price = pkg.basePrice;

      // Budget
      if (answers.budget === "b1" && price < 20_000_000) { score += 18; reasons.push("harga di bawah Rp 20 jt"); }
      if (answers.budget === "b2" && price >= 20_000_000 && price <= 35_000_000) { score += 16; reasons.push("pas di budget 20–35 jt"); }
      if (answers.budget === "b3" && price > 35_000_000 && price <= 50_000_000) { score += 16; reasons.push("pas di budget 35–50 jt (hotel makin dekat Haram)"); }
      if (answers.budget === "b4" && price > 45_000_000) { score += 16; reasons.push("kelas premium sesuai budget"); }

      // Durasi
      if (answers.durasi === "d1" && pkg.durationDays <= 8) { score += 10; reasons.push("durasi singkat ≤ 8 hari"); }
      if (answers.durasi === "d2" && pkg.durationDays >= 9 && pkg.durationDays <= 11) { score += 10; reasons.push("durasi standar 9–11 hari"); }
      if (answers.durasi === "d3" && pkg.durationDays >= 12) { score += 10; reasons.push("durasi panjang ≥ 12 hari"); }

      // Waktu
      if (answers.waktu === "w2" && pkg.type === "ramadhan") { score += 14; reasons.push("program khusus Ramadhan"); }
      if (answers.waktu === "w1" && pkg.type === "reguler") { score += 8; reasons.push("jadwal reguler fleksibel"); }
      if (answers.waktu === "w3" && (pkg.type === "reguler" || pkg.type === "plus-dubai")) { score += 6; }

      // Prioritas
      if (answers.prioritas === "p1" && pkg.hotelMakkah.distanceToHaram <= 300) { score += 12; reasons.push(`hotel hanya ${pkg.hotelMakkah.distanceToHaram} m dari Haram`); }
      if (answers.prioritas === "p2" && price < 30_000_000) { score += 10; reasons.push("termasuk yang paling hemat"); }
      if (answers.prioritas === "p3") { score += 5; reasons.push("muthawif bersertifikat Kemenag"); }
      if (answers.prioritas === "p4" && (pkg.type === "plus-turki" || pkg.type === "plus-dubai")) { score += 16; reasons.push("ada wisata negara tambahan"); }

      // Kebutuhan khusus
      if (answers.kebutuhan === "k1" && (pkg.highlights.some((h) => /lansia|orang tua|keluarga/i.test(h)) || pkg.hotelMakkah.distanceToHaram <= 300)) { score += 8; reasons.push("ramah lansia"); }
      if (answers.kebutuhan === "k2" && kind === "full") { score += 6; reasons.push("satu paket lengkap untuk keluarga"); }
      if (answers.kebutuhan === "k3" && kind === "land") { score += 22; reasons.push("Land Arrangement — tiket sendiri tetap terpakai"); }

      return { pkg, score: Math.min(97, score), reasons };
    });
    return scored.sort((a, b) => b.score - a.score).slice(0, 3);
  }, [done, answers]);

  const current = QUIZ_STEPS[step];

  const pick = (v: string) => {
    const next = { ...answers, [current.key]: v };
    setAnswers(next);
    if (step === QUIZ_STEPS.length - 1) setDone(true);
    else setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "NurMatch AI" }]} />
      <SectionHeading
        kicker="NurMatch AI"
        title="Temukan Paket yang Paling Cocok — dalam 1 Menit"
        sub="5 pertanyaan, jutaan kombinasi. Kami jelaskan alasannya satu per satu — Anda selalu bisa mengabaikan rekomendasi dan memilih sendiri."
      />

      {!done ? (
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            {QUIZ_STEPS.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < step ? "bg-brand" : i === step ? "bg-gold" : "bg-muted"}`} aria-hidden="true" />
            ))}
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">Pertanyaan {step + 1} dari {QUIZ_STEPS.length}</p>
          <h2 className="mt-2 text-[22px] font-extrabold text-ink md:text-[26px]">{current.q}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {current.options.map((o) => (
              <button
                key={o.v}
                onClick={() => pick(o.v)}
                className="group min-h-14 rounded-2xl border border-line-warm bg-card p-4 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-warm"
              >
                <p className="font-bold text-ink group-hover:text-brand">{o.l}</p>
                {o.hint && <p className="mt-0.5 text-sm text-ink-muted">{o.hint}</p>}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-warm px-4 text-sm font-semibold text-ink-muted hover:bg-muted">
              <RotateCcw size={15} /> Kembali
            </button>
          )}
        </div>
      ) : (
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-gold-soft p-4">
            <Trophy size={22} className="text-gold-deep" />
            <p className="text-[15px] font-bold text-gold-deep">3 rekomendasi teratas untuk profil Anda — diurutkan dari kecocokan tertinggi:</p>
          </div>
          <div className="space-y-4">
            {results.map((r, i) => {
              const ppiu = getPpiu(r.pkg.ppiuSlug);
              return (
                <article key={r.pkg.slug} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className={`tabular inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold ${i === 0 ? "bg-gold text-brand-deep" : "bg-brand-soft text-brand-deep"}`}>
                        {r.score}%
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          {i === 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-extrabold text-gold-deep">
                              <Sparkles size={11} /> Paling cocok
                            </span>
                          )}
                          <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-brand-deep">{PRODUCT_META[r.pkg.product ?? "full"].label}</span>
                        </div>
                        <h3 className="mt-1.5 text-[18px] font-extrabold leading-snug text-ink">
                          <Link to={`/paket/${r.pkg.slug}`} className="hover:text-brand hover:underline">{r.pkg.title}</Link>
                        </h3>
                        <p className="mt-1 text-sm text-ink-muted">
                          {formatRupiah(r.pkg.basePrice)} • {r.pkg.durationDays} hari • {ppiu?.shortName}
                          {ppiu && <ShieldBadge tier={ppiu.tier} size="sm" showLabel={false} />}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/paket/${r.pkg.slug}`}
                        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-bold text-ivory hover:bg-brand-deep"
                      >
                        Lihat Detail <ArrowRight size={15} className="ml-1" />
                      </Link>
                      <WaButton href={waLink(waMessages.package(r.pkg.title, ppiu?.name ?? "PPIU", formatRupiah(r.pkg.basePrice)))} label="Tanya via WA" variant="ghost" className="min-h-11" />
                    </div>
                  </div>
                  <div className="mt-4 border-t border-line-warm pt-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Kenapa cocok untuk Anda:</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {r.reasons.slice(0, 4).map((reason, j) => (
                        <li key={j} className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                          <CheckCircle2 size={12} /> {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={reset} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-line-warm px-5 font-bold text-ink hover:bg-muted">
              <RotateCcw size={16} /> Ulangi Quiz
            </button>
            <Link to="/paket" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-brand px-5 font-bold text-brand hover:bg-brand-soft">
              Jelajahi seluruh katalog <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            <BadgeCheck size={13} className="mr-1 inline text-brand" />
            NurMatch menimbang data objektif (harga, jarak hotel, durasi, tipe program) — bukan iklan berbayar.
            Penyelenggara tidak bisa membeli posisi rekomendasi.
          </p>
        </div>
      )}
    </div>
  );
}
