"use client";

/**
 * RESOURCE PAGES R1.5 — Travel Kit, Glosarium SEO, Partner Center, Peta Situs.
 */

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import {
  Clock,
  Compass,
  Coins,
  ListChecks,
  CalendarClock,
  BookA,
  Search,
  Building2,
  Globe2,
  ShieldCheck,
  LockKeyhole,
  UserRoundCheck,
  TrendingUp,
  BadgeDollarSign,
  Boxes,
  MessageCircle,
  FileSearch,
  Plane,
  BusFront,
  ChevronDown,
  ExternalLink,
  Handshake,
  LayoutDashboard,
  ReceiptText,
} from "lucide-react";
import { Link } from "@/lib/solusihajj/router";
import { waLink, waMessages } from "@/lib/solusihajj/wa";
import { glossaryList, GLOSSARY_CATEGORIES } from "@/data/glossary";
import { packageList } from "@/data/packages";
import { flightList } from "@/data/flights";
import { ppiuList } from "@/data/ppiu";
import { Breadcrumb } from "../chrome";
import { SectionHeading, WaButton } from "../ui-bits";
import { articleList } from "@/data/articles";
import { cn } from "@/lib/utils";

/* ================= TRAVEL KIT ================= */
const PRAYER_MAKKAH = [
  ["Subuh", "05:18"],
  ["Dzuhur", "12:16"],
  ["Ashar", "15:40"],
  ["Maghrib", "18:03"],
  ["Isya", "19:33"],
];
const PRAYER_MADINAH = [
  ["Subuh", "05:26"],
  ["Dzuhur", "12:20"],
  ["Ashar", "15:45"],
  ["Maghrib", "18:07"],
  ["Isya", "20:07"],
];
const QIBLA: [string, number][] = [
  ["Jakarta", 292.5],
  ["Bandung", 291.8],
  ["Surabaya", 290.3],
  ["Medan", 294.9],
  ["Makassar", 288.1],
  ["Kuala Lumpur", 293.0],
  ["Singapura", 291.6],
  ["Bangkok", 292.8],
];
const RATES = { SAR: 4250, USD: 15800 }; // demo statis R1.5

/** Jam kuantisasi per menit — hydration-safe (server snapshot 0 → placeholder) */
function useNowMinutes(): number {
  const subscribe = (cb: () => void) => {
    const t = window.setInterval(cb, 30_000);
    return () => window.clearInterval(t);
  };
  const getSnapshot = () => Math.floor(Date.now() / 60_000);
  const getServer = () => 0;
  return useSyncExternalStore(subscribe, getSnapshot, getServer);
}

function Countdown({ target, label }: { target: string; label: string }) {
  const nowMin = useNowMinutes();
  const hydrated = nowMin > 0;
  const diff = hydrated ? Math.max(0, new Date(target).getTime() - nowMin * 60_000) : 0;
  const days = hydrated ? Math.floor(diff / 86_400_000) : 0;
  return (
    <div className="rounded-2xl border border-line-warm bg-card p-5 text-center shadow-card">
      <p className="text-sm font-bold uppercase tracking-wide text-ink-muted">{label}</p>
      <p className="tabular mt-1 text-4xl font-extrabold text-brand">{hydrated ? days.toLocaleString("id-ID") : "…"}</p>
      <p className="text-sm text-ink-muted">hari lagi (perkiraan hisab — demo)</p>
    </div>
  );
}

const CHECKS_EVT = "shj-checks";
function checksSubscribe(cb: () => void): () => void {
  window.addEventListener(CHECKS_EVT, cb);
  return () => window.removeEventListener(CHECKS_EVT, cb);
}
function checksSnapshot(): string {
  return window.localStorage.getItem("shj_checklist") ?? "[]";
}

export function TravelKitPage() {
  const [amount, setAmount] = useState(1_000_000);
  const [dir, setDir] = useState<"idr2sar" | "sar2idr">("idr2sar");
  const [city, setCity] = useState("Jakarta");
  // Checklist persist — hydration-safe via external store (server = kosong)
  const checksRaw = useSyncExternalStore(checksSubscribe, checksSnapshot, () => "[]");
  const checks = useMemo<string[]>(() => {
    try {
      const arr = JSON.parse(checksRaw);
      return Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : [];
    } catch {
      return [];
    }
  }, [checksRaw]);

  const CHECKLIST = [
    "Paspor aktif minimal 6 bulan",
    "Vaksin meningitis (ICV) terbit",
    "KTP & KK sesuai alamat",
    "Buku manasik & buku doa",
    "Kain ihram / mukena + serbaguna",
    "Sandal jalan anti-selip",
    "Obat pribadi + vitamin",
    "SIM card / eSIM Saudi aktif",
    "Foto dokumen di cloud + cetak",
    "Amanah: transfer dana via escrow, bukan rekening pribadi",
  ];

  const toggleCheck = (item: string) => {
    const next = checks.includes(item) ? checks.filter((c) => c !== item) : [...checks, item];
    try {
      window.localStorage.setItem("shj_checklist", JSON.stringify(next));
    } catch {
      /* noop */
    }
    window.dispatchEvent(new Event(CHECKS_EVT));
  };

  const converted = dir === "idr2sar" ? amount / RATES.SAR : amount * RATES.SAR;
  const qiblaDeg = QIBLA.find(([c]) => c === city)?.[1] ?? 292.5;
  const pct = Math.round((checks.length / CHECKLIST.length) * 100);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Travel Kit" }]} />
      <SectionHeading
        kicker="Panduan perjalanan"
        title="Travel Kit Jamaah — Semua Angka Penting dalam Satu Halaman"
        sub="Jadwal sholat Tanah Suci, arah kiblat dari kota Anda, konverter mata uang, checklist manasik yang tersimpan otomatis, dan countdown musim ibadah."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Countdown target="2027-02-08" label="Menuju Ramadhan 1448 H" />
        <Countdown target="2027-05-15" label="Menuju Musim Haji 1448 H" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* JADWAL SHOLAT */}
        <section className="rounded-2xl border border-line-warm bg-card p-6 shadow-card" aria-label="Jadwal sholat">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
            <Clock size={19} className="text-brand" /> Jadwal Sholat (demo)
          </h2>
          <p className="mt-1 text-xs text-ink-muted">Pembanding waktu ibadah saat di Tanah Suci — ±5 menit mengikuti Ummul Qura.</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[
              { city: "Makkah", rows: PRAYER_MAKKAH },
              { city: "Madinah", rows: PRAYER_MADINAH },
            ].map((t) => (
              <div key={t.city}>
                <p className="mb-2 rounded-lg bg-brand-soft px-2.5 py-1 text-center text-xs font-extrabold text-brand-deep">{t.city}</p>
                <ul className="space-y-1.5">
                  {t.rows.map(([name, time]) => (
                    <li key={name} className="flex items-center justify-between text-sm">
                      <span className="text-ink-muted">{name}</span>
                      <span className="tabular font-bold text-ink">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* KIBLAT */}
        <section className="rounded-2xl border border-line-warm bg-card p-6 shadow-card" aria-label="Arah kiblat">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
            <Compass size={19} className="text-brand" /> Arah Kiblat dari Kota Anda
          </h2>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-4 h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
            aria-label="Pilih kota"
          >
            {QIBLA.map(([c]) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="mt-5 flex items-center justify-center gap-6">
            <div className="relative inline-flex h-36 w-36 items-center justify-center rounded-full border-4 border-brand/25 bg-brand-soft/40">
              <span className="absolute top-1.5 text-xs font-bold text-ink-muted">U</span>
              <span className="absolute right-1.5 text-xs font-bold text-ink-muted">T</span>
              <span className="absolute bottom-1.5 text-xs font-bold text-ink-muted">S</span>
              <span className="absolute left-1.5 text-xs font-bold text-ink-muted">B</span>
              <div className="absolute inset-0" style={{ transform: `rotate(${qiblaDeg}deg)` }}>
                <div className="absolute left-1/2 top-1/2 h-16 w-1 -translate-x-1/2 -translate-y-full rounded bg-gold shadow-warm" style={{ transformOrigin: "bottom center" }} />
              </div>
              <span className="z-10 rounded-full bg-brand px-2.5 py-1 text-xs font-extrabold text-ivory shadow-green">🕋 {qiblaDeg.toFixed(1)}°</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand">{qiblaDeg.toFixed(1)}°</p>
              <p className="text-sm text-ink-muted">dari Utara sejati — sudut {city} ke Ka'bah.</p>
              <p className="mt-2 text-xs text-ink-muted">Gunakan kompas HP dengan kalibrasi angka 8 di atasnya.</p>
            </div>
          </div>
        </section>

        {/* KONVERTER */}
        <section className="rounded-2xl border border-line-warm bg-card p-6 shadow-card" aria-label="Konverter mata uang">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
            <Coins size={19} className="text-brand" /> Konverter IDR ⇄ SAR
          </h2>
          <p className="mt-1 text-xs text-ink-muted">Kurs demo R1.5: 1 SAR = Rp 4.250 • 1 USD = Rp 15.800. Kurs riil mengikuti pasar saat go-live.</p>
          <div className="mt-4 flex gap-2">
            {[
              { v: "idr2sar", l: "IDR → SAR" },
              { v: "sar2idr", l: "SAR → IDR" },
            ].map((b) => (
              <button
                key={b.v}
                onClick={() => setDir(b.v as "idr2sar" | "sar2idr")}
                className={`min-h-10 flex-1 rounded-xl border text-sm font-bold transition-colors ${dir === b.v ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink"}`}
              >
                {b.l}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={0}
            value={dir === "idr2sar" ? amount : amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
            className="tabular mt-4 h-14 w-full rounded-xl border border-line-warm bg-white px-4 text-lg font-bold outline-none focus:border-brand"
            aria-label={dir === "idr2sar" ? "Jumlah rupiah" : "Jumlah riyal"}
          />
          <div className="mt-4 rounded-xl bg-brand-soft p-4 text-center">
            <p className="tabular text-2xl font-extrabold text-brand-deep">
              {dir === "idr2sar"
                ? converted.toLocaleString("id-ID", { maximumFractionDigits: 0 }) + " SAR"
                : converted.toLocaleString("id-ID", { maximumFractionDigits: 0 }) + " IDR"}
            </p>
            <p className="mt-1 text-xs text-ink-muted">
              ≈ {dir === "idr2sar"
                ? `Rp ${Math.round(amount / RATES.USD).toLocaleString("id-ID")} USD`
                : `Rp ${Math.round(amount * RATES.USD).toLocaleString("id-ID")} USD`}{" "}
              sebagai pembanding
            </p>
          </div>
        </section>
      </div>

      {/* CHECKLIST */}
      <section className="mt-8 rounded-2xl border border-line-warm bg-card p-6 shadow-card" aria-label="Checklist manasik">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
            <ListChecks size={19} className="text-brand" /> Checklist Pra-Keberangkatan
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-40 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="tabular text-sm font-extrabold text-brand">{pct}%</span>
          </div>
        </div>
        <p className="mt-1 text-xs text-ink-muted">Tersimpan otomatis di perangkat Anda — centang satu per satu, alhamdulillah.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {CHECKLIST.map((item) => {
            const on = checks.includes(item);
            return (
              <label
                key={item}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 text-[15px] transition-colors",
                  on ? "border-brand/50 bg-brand-soft font-semibold text-brand-deep" : "border-line-warm bg-white text-ink hover:border-brand/30"
                )}
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggleCheck(item)}
                  className="h-5 w-5 rounded accent-[#0e6b4e]"
                />
                {item}
              </label>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ================= GLOSARIUM ================= */
export function GlossaryPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = glossaryList.filter((t) => {
    if (cat && t.category !== cat) return false;
    if (q && !(t.term + t.short + t.detail).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const grouped = GLOSSARY_CATEGORIES.map((c) => ({
    ...c,
    items: filtered.filter((t) => t.category === c.key),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Glosarium" }]} />
      <SectionHeading
        kicker="Kamus ibadah"
        title={`Glosarium Istilah Haji & Umrah — ${glossaryList.length} Istilah Penting`}
        sub="Bahasa manusia, bukan bahasa brosur. Dari ihram sampai escrow — rujukan gratis untuk jamaah pertama maupun yang sudah sering berangkat."
      />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <label className="relative flex-1">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari istilah… (mis. tawaf, PIHK, escrow)"
            className="h-12 w-full rounded-xl border border-line-warm bg-white pl-11 pr-4 text-[15px] outline-none focus:border-brand"
            aria-label="Cari istilah"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setCat("")} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${cat === "" ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink"}`}>
            Semua
          </button>
          {GLOSSARY_CATEGORIES.map((c) => (
            <button key={c.key} onClick={() => setCat(c.key)} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${cat === c.key ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink"}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-10">
        {grouped.map((g) => (
          <section key={g.key} aria-label={g.label}>
            <h2 className="mb-4 text-xl font-extrabold text-ink">{g.label}</h2>
            <div className="space-y-3">
              {g.items.map((t) => {
                const isOpen = open === t.term;
                return (
                  <article key={t.term} className="overflow-hidden rounded-2xl border border-line-warm bg-card shadow-card">
                    <button
                      onClick={() => setOpen(isOpen ? null : t.term)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        {t.arabic && <span className="font-amiri text-xl text-brand">{t.arabic}</span>}
                        <span className="font-extrabold text-ink">{t.term}</span>
                      </div>
                      <span className="flex items-center gap-3">
                        <span className="hidden text-sm text-ink-muted md:inline">{t.short}</span>
                        <ChevronDown size={17} className={cn("shrink-0 text-ink-muted transition-transform", isOpen && "rotate-180")} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-line-warm bg-muted/40 px-5 py-4">
                        <p className="text-[15px] leading-relaxed text-ink">{t.detail}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
        {grouped.length === 0 && (
          <p className="rounded-2xl border border-dashed border-line-warm p-10 text-center text-ink-muted">
            Tidak ada istilah yang cocok. Coba kata kunci lain.
          </p>
        )}
      </div>
    </div>
  );
}

/* ================= PARTNER CENTER ================= */
export function PartnerPage() {
  const benefits = [
    {
      icon: Boxes,
      t: "Gratis tayang, bayar dari hasil",
      d: "Tidak ada biaya listing. Komisi 4–6% hanya saat transaksi jamaah berhasil — sejalan dengan kepentingan Anda.",
    },
    {
      icon: LockKeyhole,
      t: "Escrow membuat Anda dipercaya",
      d: "AmanahEscrow adalah alasan jamaah berani memilih travel baru. Anda fokus ibadah layanan, kami jaga kepercayaan dananya.",
    },
    {
      icon: UserRoundCheck,
      t: "Review yang tidak bisa dimanipulasi",
      d: "Saksi Jamaah: hanya jamaah booking selesai yang bisa menulis. Rating baik Anda terlindungi dari review palsu.",
    },
    {
      icon: Globe2,
      t: "Pasar lintas negara",
      d: "Jamaah dari Indonesia, Malaysia, Singapura, Brunei, dan Thailand menemukan toko Anda di satu direktori.",
    },
    {
      icon: LayoutDashboard,
      t: "Dashboard toko & kuota",
      d: "Kelola paket, tanggal, kuota kursi, dan balasan review dari satu dasbor (penuh di R2).",
    },
    {
      icon: TrendingUp,
      t: "NurMatch AI mempromosikan Anda secara adil",
      d: "Rekomendasi berbasis data — tidak ada posisi berbayar. Reputasi Anda bekerja untuk Anda.",
    },
  ];

  return (
    <div>
      <section className="relative bg-brand-deep py-14 md:py-20">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Untuk Partner" }]} />
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-sm font-bold text-gold">
              <Handshake size={16} /> Untuk PPIU · PIHK · BPW · KBIHU
            </p>
            <h1 className="text-[30px] font-extrabold leading-tight text-ivory md:text-[44px]">
              Jamaah Cari Anda. Biar Mereka Menemukan Anda di SolusiHajj.
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ivory/80">
              Marketplace umrah & haji terbesar Asia terus mencari penyelenggara yang jujur. Lolos Verifikasi 5 Lapis,
              dan toko Anda langsung tayang di samping tool Cek Izin yang dipakai ribuan jamaah setiap bulan.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WaButton href={waLink(waMessages.ppiuPartner)} label="Ajukan Verifikasi via WA" />
              <Link
                to="/verifikasi"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-ivory/40 px-6 font-bold text-ivory hover:bg-white/10"
              >
                Pelajari Verifikasi 5 Lapis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeading
          center
          kicker="Kenapa bergabung"
          title="Enam Alasan Penyelenggara Memilih Kami"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft">
                <b.icon size={24} className="text-brand" />
              </span>
              <h3 className="mt-4 text-[18px] font-bold text-ink">{b.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-ink">
              <ReceiptText size={20} className="text-brand" /> Model Komersial yang Jujur
            </h2>
            <table className="mt-4 w-full text-left text-[15px]">
              <tbody>
                {[
                  ["Listing paket", "Gratis, tanpa batas paket aktif"],
                  ["Komisi transaksi", "4–6% dari nilai paket — hanya saat jamaah berangkat"],
                  ["Subscription opsional", "Rp 500 rb – 2,5 jt/bulan: badge prioritas dashboard & analitik"],
                  ["Iklan / ranking berbayar", "Tidak ada. Positif: tidak pernah kami jual."],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-line-warm last:border-0">
                    <td className="py-3 font-bold text-ink">{row[0]}</td>
                    <td className="py-3 text-ink-muted">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-ink">
              <FileSearch size={20} className="text-brand" /> Alur Onboarding 4 Langkah
            </h2>
            <ol className="mt-4 space-y-3.5">
              {[
                "Kirim profil & izin via WhatsApp — kami cek awal 1×24 jam.",
                "Verifikasi 5 Lapis: izin, audit kantor, legalitas, track record, pemantauan.",
                "Tanda tangan perjanjian marketplace + skema escrow bank syariah mitra.",
                "Toko tayang: paket, kuota, review aktif — jamaah mulai menemukan Anda.",
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="tabular inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-ivory">{i + 1}</span>
                  <p className="text-[15px] leading-relaxed text-ink">{s}</p>
                </li>
              ))}
            </ol>
            <WaButton href={waLink(waMessages.ppiuPartner)} label="Mulai Langkah 1 Sekarang" className="mt-6 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= PETA SITUS (HTML sitemap — SEO crawl aid) ================= */
export function SitemapPage() {
  const groups: { title: string; links: { to: string; label: string }[] }[] = [
    {
      title: "Marketplace",
      links: [
        { to: "/paket", label: `Katalog Paket (${packageList.length})` },
        { to: "/paket?produk=full", label: "Paket Umrah Lengkap" },
        { to: "/paket?produk=land", label: "Land Arrangement" },
        { to: "/paket?type=ramadhan", label: "Paket Ramadhan" },
        { to: "/paket?type=plus-turki", label: "Umrah Plus Turki" },
        { to: "/tiket-grup", label: `Tiket Charter Grup (${flightList.length} jadwal)` },
        { to: "/maskapai", label: "Jaringan Maskapai Ibadah (data riil)" },
        { to: "/bandingkan", label: "Bandingkan Paket" },
        { to: "/nurmatch", label: "NurMatch AI" },
        { to: "/nurmatch-ai", label: "NurMatch AI Live (R3 — AI LLM nyata)" },
      ],
    },
    {
      title: "Direktori Penyelenggara",
      links: [
        { to: "/ppiu", label: `Semua Penyelenggara (${ppiuList.length})` },
        { to: "/pusat-data", label: "Pusat Data Nasional (database riil PPIU/PIHK)" },
        ...[...new Set(ppiuList.map((p) => p.country ?? "Indonesia"))].map((c) => ({
          to: `/ppiu?negara=${encodeURIComponent(c)}`,
          label: `Penyelenggara ${c}`,
        })),
        { to: "/verifikasi", label: "Verifikasi 5 Lapis" },
        { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU (tool publik)" },
        { to: "/escrow", label: "AmanahEscrow" },
        { to: "/escrow-aktif", label: "Pusat AmanahEscrow Aktif (R3 — kontrak 40/40/20)" },
      ],
    },
    {
      title: "Panduan & Tools",
      links: [
        { to: "/travel-kit", label: "Travel Kit (sholat, kiblat, konverter)" },
        { to: "/kalkulator-haji", label: "Kalkulator Simpanan Haji" },
        { to: "/glosarium", label: "Glosarium Istilah" },
        ...articleList.map((a) => ({ to: `/edukasi/${a.slug}`, label: `Artikel: ${a.title}` })),
      ],
    },
    {
      title: "Informasi & Legal",
      links: [
        { to: "/tentang", label: "Tentang SolusiHajj" },
        { to: "/partner", label: "Untuk Penyelenggara (Partner)" },
        { to: "/faq", label: "FAQ" },
        { to: "/kontak", label: "Kontak" },
        { to: "/kebijakan-privasi", label: "Kebijakan Privasi (UU PDP)" },
        { to: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Peta Situs" }]} />
      <SectionHeading
        kicker="Navigasi"
        title="Peta Situs SolusiHajj"
        sub="Semua halaman marketplace dalam satu tempat — untuk Anda yang suka rapi, dan untuk mesin pencari yang suka struktur."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title} className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-ink">
              <FileSearch size={18} className="text-brand" /> {g.title}
            </h2>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-[15px] text-ink-muted transition-colors hover:text-brand hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
}
