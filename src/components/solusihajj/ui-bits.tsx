"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Star, BadgeCheck, Clock, Users, MapPin, Mountain, Moon, Landmark, TreePalm, MessageCircle, Plane, BusFront, GitCompareArrows, Check } from "lucide-react";
import type { Tier, Pkg, Ppiu, DimensionKey, OrgType, ProductKind } from "@/data/types";
import { TIER_META, DIMENSION_LABELS, ORG_META, PRODUCT_META } from "@/data/types";
import { formatRupiah } from "@/lib/solusihajj/wa";
import { Link } from "@/lib/solusihajj/router";
import { toggleCompare, isCompared, onCompareChange } from "@/lib/solusihajj/compare";
import { cn } from "@/lib/utils";

/* ================= SHIELD BADGE — satu bentuk di seluruh platform (dok 14) ================= */
export function ShieldBadge({ tier, size = "md", showLabel = true }: { tier: Tier; size?: "sm" | "md" | "lg"; showLabel?: boolean }) {
  const meta = TIER_META[tier];
  const iconSize = size === "lg" ? 28 : size === "sm" ? 14 : 18;
  const boxSize = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <span className="inline-flex items-center gap-2" title={`Tier verifikasi ${meta.label} — ${meta.description}`}>
      <span
        className={cn("inline-flex items-center justify-center rounded-full", boxSize)}
        style={{ backgroundColor: meta.bg }}
      >
        <ShieldCheck size={iconSize} style={{ color: meta.color }} strokeWidth={2} />
      </span>
      {showLabel && (
        <span className="text-sm font-bold" style={{ color: meta.color }}>
          {meta.label}
        </span>
      )}
    </span>
  );
}

/* ================= RATING ================= */
export function StarRating({ value, size = 14, showValue = true }: { value: number; size?: number; showValue?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1">
      <Star size={size} className="fill-[#C9A227] text-[#C9A227]" />
      {showValue && <span className="tabular text-sm font-semibold text-ink">{value.toFixed(1)}</span>}
    </span>
  );
}

/* ================= SECTION HEADING ================= */
export function SectionHeading({
  kicker,
  title,
  sub,
  dark = false,
  center = false,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {kicker && (
        <p className={cn("mb-3 text-sm font-bold uppercase tracking-widest", dark ? "text-[#C9A227]" : "text-brand")}>
          {kicker}
        </p>
      )}
      <h2 className={cn("text-[26px] font-bold leading-[1.25] md:text-[34px]", dark ? "text-ivory" : "text-ink")}>
        {title}
      </h2>
      {sub && <p className={cn("mt-4 text-[17px] leading-relaxed", dark ? "text-ivory/75" : "text-ink-muted")}>{sub}</p>}
    </div>
  );
}

/* ================= SCENE VISUAL — pengganti foto dengan siluet masjid (jujur visual, tanpa foto stock palsu) ================= */
const VISUALS: Record<string, { grad: string; label: string }> = {
  makkah: { grad: "linear-gradient(135deg,#0A4A36 0%,#0E6B4E 55%,#1E7F4F 100%)", label: "Masjidil Haram" },
  madinah: { grad: "linear-gradient(135deg,#0A4A36 0%,#14654B 60%,#2A7D5B 100%)", label: "Madinah" },
  ramadhan: { grad: "linear-gradient(135deg,#0A4A36 0%,#5C4A0E 120%)", label: "Ramadhan 1447 H" },
  turki: { grad: "linear-gradient(135deg,#134E4A 0%,#0E6B4E 60%,#C9A227 160%)", label: "Umrah Plus Turki" },
  dubai: { grad: "linear-gradient(135deg,#0A4A36 0%,#1E5F49 55%,#C9A227 170%)", label: "Umrah Plus Dubai" },
};

export function SceneVisual({ visual, title, className }: { visual: string; title?: string; className?: string }) {
  const v = VISUALS[visual] ?? VISUALS.makkah;
  return (
    <div className={cn("relative overflow-hidden", className)} style={{ background: v.grad }} aria-hidden="true">
      <div className="pattern-light absolute inset-0" />
      {/* siluet masjid */}
      <svg viewBox="0 0 400 120" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 left-0 h-[55%] w-full opacity-90">
        <g fill="#FAF7F2" fillOpacity="0.14">
          {/* masjid utama: kubah + 2 menara */}
          <rect x="176" y="10" width="8" height="110" rx="2" />
          <circle cx="180" cy="10" r="5" />
          <rect x="216" y="10" width="8" height="110" rx="2" />
          <circle cx="220" cy="10" r="5" />
          <rect x="150" y="52" width="100" height="68" rx="4" />
          <path d="M200 22 C178 34 168 46 168 58 H232 C232 46 222 34 200 22 Z" />
          <rect x="188" y="42" width="24" height="16" rx="8" />
        </g>
        <g fill="#FAF7F2" fillOpacity="0.08">
          <rect x="96" y="72" width="46" height="48" rx="3" />
          <path d="M119 56 C108 64 102 70 102 78 H136 C136 70 130 64 119 56 Z" />
          <rect x="262" y="72" width="46" height="48" rx="3" />
          <path d="M285 56 C274 64 268 70 268 78 H302 C302 70 296 64 285 56 Z" />
        </g>
      </svg>
      <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ivory backdrop-blur-sm">
        {v.label}
      </span>
      {title && (
        <span className="absolute bottom-3 left-4 right-4 truncate text-sm font-semibold text-ivory/90">{title}</span>
      )}
    </div>
  );
}

/* ================= PRODUCT CARD (dok 15: kartu paket reusable) ================= */
export function PackageCard({ pkg, ppiu }: { pkg: Pkg; ppiu?: Ppiu }) {
  const kind: ProductKind = pkg.product ?? "full";
  return (
    <Link
      to={`/paket/${pkg.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-line-warm bg-card shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-warm"
      ariaLabel={`Lihat detail ${pkg.title}`}
    >
      <SceneVisual visual={pkg.visual} className="h-40" />
      <div className="flex h-[calc(100%-10rem)] flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand-deep">
            {pkg.durationDays} Hari
          </span>
          {kind === "land" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2.5 py-1 text-xs font-bold text-gold-deep">
              <BusFront size={11} /> LA
            </span>
          )}
          {ppiu && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
              <ShieldBadge tier={ppiu.tier} size="sm" showLabel={false} />
              <span className="max-w-[150px] truncate">{ppiu.shortName}</span>
            </span>
          )}
        </div>
        <h3 className="mb-1 line-clamp-2 text-[17px] font-bold leading-snug text-ink group-hover:text-brand">
          {pkg.title}
        </h3>
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} /> {pkg.departCity}
          </span>
          <span className="inline-flex items-center gap-1">
            <Mountain size={12} /> {pkg.hotelMakkah.distanceToHaram} m ke Haram
          </span>
          <StarRating value={pkg.rating} />
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-line-warm pt-3">
          <div>
            <p className="text-xs text-ink-muted">Mulai dari</p>
            <p className="tabular text-xl font-extrabold text-brand">{formatRupiah(pkg.basePrice)}</p>
            <p className="text-[11px] text-ink-muted">per orang • {kind === "land" ? "darat saja" : "all-in"}</p>
          </div>
          <span className="inline-flex h-10 items-center rounded-xl bg-brand px-4 text-sm font-bold text-ivory transition-colors group-hover:bg-brand-deep">
            Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ================= PRODUCT BADGE ================= */
export function ProductBadge({ kind }: { kind: ProductKind }) {
  const meta = PRODUCT_META[kind];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep" title={meta.tagline}>
      {kind === "full" ? <Plane size={12} /> : <BusFront size={12} />}
      {meta.label}
    </span>
  );
}

/* ================= ORG BADGE (jenis organisasi Asia) ================= */
const ORG_COLORS: Record<OrgType, { bg: string; fg: string }> = {
  PPIU: { bg: "#E7F0EC", fg: "#0A4A36" },
  PIHK: { bg: "#F5EEDA", fg: "#8A6D14" },
  BPW: { bg: "#EDE9F7", fg: "#4A3D8F" },
  KBIHU: { bg: "#E7F0F5", fg: "#1F5F73" },
};
export function OrgBadge({ org, size = "md" }: { org: OrgType; size?: "sm" | "md" }) {
  const c = ORG_COLORS[org];
  return (
    <span
      className={cn("inline-flex items-center rounded-full font-extrabold tracking-wide", size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs")}
      style={{ backgroundColor: c.bg, color: c.fg }}
      title={ORG_META[org].full + " — " + ORG_META[org].note}
    >
      {org}
    </span>
  );
}

/* ================= SEAT URGENCY BAR ================= */
export function SeatBar({ left, total, label }: { left: number; total: number; label?: string }) {
  const pct = Math.max(4, Math.round((left / total) * 100));
  const urgent = left <= Math.max(5, Math.round(total * 0.2));
  return (
    <div aria-label={`${left} dari ${total} kursi tersisa`}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full", urgent ? "bg-danger-warm" : "bg-brand")} style={{ width: `${pct}%` }} />
      </div>
      <p className={cn("mt-1 text-[11px] font-bold", urgent ? "text-danger-warm" : "text-ink-muted")}>
        {urgent ? `Hanya sisa ${left} kursi!` : `${left}/${total} kursi tersisa`}
        {label && <span className="font-normal"> • {label}</span>}
      </p>
    </div>
  );
}

/* ================= COMPARE BUTTON ================= */
export function CompareButton({ slug, className, label }: { slug: string; className?: string; label?: string }) {
  const [on, setOn] = useState(false);
  const [full, setFull] = useState(false);
  useEffect(() => {
    const sync = () => setOn(isCompared(slug));
    sync();
    return onCompareChange(sync);
  }, [slug]);
  const click = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const res = toggleCompare(slug);
    if (res === null) {
      setFull(true);
      window.setTimeout(() => setFull(false), 2200);
      return;
    }
    setFull(false);
  };
  return (
    <button
      onClick={click}
      className={cn(
        "inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-3 text-xs font-bold transition-colors",
        on ? "border-gold bg-gold-soft text-gold-deep" : "border-line-warm bg-white text-ink-muted hover:border-brand/40 hover:text-brand",
        className
      )}
      aria-pressed={on}
      aria-label={on ? "Keluarkan dari perbandingan" : "Tambahkan ke perbandingan"}
      title={full ? "Maksimal 3 paket — hapus satu dulu" : "Bandingkan paket"}
    >
      {on ? <Check size={13} /> : <GitCompareArrows size={13} />}
      {full ? "Maksimal 3!" : label ?? (on ? "Dipilih" : "Bandingkan")}
    </button>
  );
}

/* ================= LIVE ACTIVITY TICKER (bukti sosial) ================= */
const TICKER_ITEMS = [
  "Hj. Sumiati dari Surabaya baru mengamankan kursi Umrah 9 Hari — escrow aktif ✓",
  "Grup Masjid Al-Ikhlas Bandung (23 jamaah) charter Garuda 16 Feb — seat terkunci",
  "Ibu Ratna dari Medan baru memakai Kalkulator Simpanan Haji",
  "Bpk. Famuji dari Yogyakarta menyelesaikan quiz NurMatch — match 94%",
  "Safa Marwa MY baru terverifikasi ulang — Tier Gold dipertahankan",
  "Keluarga H. Syamsul (5 orang) memilih Land Arrangement 8 Hari",
  "Review Saksi Jamaah baru: 4,9 untuk mutawif Safar Suci",
  "Cek Izin PPIU dipakai 1.240× bulan ini — tool publik gratis",
];

export function LiveTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setIdx((i) => (i + 1) % TICKER_ITEMS.length), 4200);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="flex h-9 items-center gap-2.5 overflow-hidden rounded-full border border-gold/40 bg-gold-soft/60 px-4" aria-live="polite">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
      </span>
      <p key={idx} className="count-fade truncate text-[13px] font-semibold text-gold-deep">
        {TICKER_ITEMS[idx]}
      </p>
    </div>
  );
}

/* ================= DIMENSION BARS — Review Meter 6 Dimensi (dok 14) ================= */
export function DimensionBars({ dimensions, compact = false }: { dimensions: Record<DimensionKey, number>; compact?: boolean }) {
  return (
    <div className={cn("space-y-2.5", compact && "space-y-2")}>
      {(Object.keys(DIMENSION_LABELS) as DimensionKey[]).map((key) => {
        const val = dimensions[key];
        return (
          <div key={key} className="flex items-center gap-3">
            <span className={cn("shrink-0 text-ink-muted", compact ? "w-36 text-xs" : "w-44 text-sm")}>
              {DIMENSION_LABELS[key]}
            </span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-brand transition-all"
                style={{ width: `${(val / 5) * 100}%` }}
                role="meter"
                aria-valuenow={val}
                aria-valuemin={1}
                aria-valuemax={5}
                aria-label={DIMENSION_LABELS[key]}
              />
            </div>
            <span className="tabular w-8 text-right text-sm font-bold text-ink">{val.toFixed(1)}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ================= ESCROW TIMELINE (dok 14: garis vertikal 4 node) ================= */
export function EscrowTimeline({ compact = false }: { compact?: boolean }) {
  const steps = [
    { title: "Anda Bayar", desc: "Dana masuk rekening escrow di bank syariah mitra — BUKAN rekening PPIU atau SolusiHajj.", state: "done" },
    { title: "Dana Ditahan", desc: "Dana diamankan hingga Anda benar-benar berangkat. PPIU tidak bisa menariknya sewaktu-waktu.", state: "done" },
    { title: "Rilis Bertahap 40/40/20", desc: "40% saat tiba & check-in Makkah, 40% selama ibadah berjalan sesuai itinerary, 20% setelah pulang.", state: "active" },
    { title: "Pulang Aman, PPIU Terbayar", desc: "Sisa dana cair setelah Anda tiba kembali di tanah air dan review terbit.", state: "todo" },
  ];
  return (
    <ol className="relative space-y-6 border-l-2 border-[#C9A227]/30 pl-6">
      {steps.map((s, i) => (
        <li key={i} className="relative">
          <span
            className={cn(
              "absolute -left-[31px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full",
              s.state === "done" && "bg-brand",
              s.state === "active" && "pulse-gold bg-gold",
              s.state === "todo" && "border-2 border-gold/50 bg-transparent"
            )}
            aria-hidden="true"
          />
          <h4 className={cn("font-bold", compact ? "text-[15px]" : "text-[17px]", s.state === "todo" ? "text-ivory/60" : "text-ivory")}>
            {i + 1}. {s.title}
          </h4>
          <p className={cn("mt-1 leading-relaxed", compact ? "text-sm" : "text-[15px]", s.state === "todo" ? "text-ivory/45" : "text-ivory/70")}>
            {s.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ================= TRUST PILL ================= */
export function TrustPill({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-ivory backdrop-blur-sm">
      <Icon size={16} className="text-[#C9A227]" />
      {children}
    </span>
  );
}

/* ================= WA BUTTON ================= */
export function WaButton({ href, label = "Tanya via WhatsApp", className, variant = "solid" }: { href: string; label?: string; className?: string; variant?: "solid" | "ghost" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-bold transition-colors",
        variant === "solid"
          ? "bg-[#1E7F4F] text-white hover:bg-[#176B41]"
          : "border border-[#1E7F4F]/40 bg-white text-[#1E7F4F] hover:bg-[#1E7F4F]/5",
        className
      )}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}

/* ================= SMALL ICON HELPERS ================= */
export { BadgeCheck, Clock, Users, TreePalm, Landmark, Moon };
