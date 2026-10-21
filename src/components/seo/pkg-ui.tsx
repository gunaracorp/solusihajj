import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock3 } from "lucide-react";
import type { Tier, OrgType } from "@/data/types";
import { TIER_META } from "@/data/types";

/* Komponen & util presentasi bersama untuk seluruh halaman SEO (Task 2-b).
   Tanpa hook — aman dipakai server component maupun client component. */

/* ---------- Util format ---------- */

export function formatRupiah(n: number): string {
  return "Rp " + new Intl.NumberFormat("id-ID").format(n);
}

const BULAN_SINGKAT = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/** Format ISO date "2026-02-16" → "16 Feb 2026" (deterministik, tanpa ICU). */
export function formatTanggal(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const hari = String(parseInt(m[3], 10));
  const bulan = BULAN_SINGKAT[parseInt(m[2], 10) - 1] ?? m[2];
  return `${hari} ${bulan} ${m[1]}`;
}

/** Slugify lokal proyek: lowercase, non-alphanumeric → "-", trim dash. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const NEGARA_ISO: Record<string, string> = {
  ID: "Indonesia",
  MY: "Malaysia",
  SG: "Singapura",
  BN: "Brunei Darussalam",
  TH: "Thailand",
  PK: "Pakistan",
  SA: "Arab Saudi",
};

export function negaraLabel(iso: string): string {
  return NEGARA_ISO[iso] ?? iso;
}

/* ---------- Badge ---------- */

export function TierBadge({ tier }: { tier: Tier }) {
  const meta = TIER_META[tier];
  if (!meta) return null;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold"
      style={{ backgroundColor: meta.bg, color: meta.color }}
    >
      ★ {meta.label}
    </span>
  );
}

const ORG_LABEL: Record<OrgType, { label: string; cls: string }> = {
  PPIU: { label: "PPIU", cls: "bg-brand-soft text-brand-deep" },
  PIHK: { label: "PIHK", cls: "bg-gold-soft text-gold-deep" },
  BPW: { label: "BPW", cls: "bg-gold-soft text-gold-deep" },
  KBIHU: { label: "KBIHU", cls: "bg-brand-soft text-brand-deep" },
};

export function OrgBadge({ orgType, className }: { orgType: string; className?: string }) {
  const meta = ORG_LABEL[orgType as OrgType];
  if (!meta) {
    return (
      <Badge variant="outline" className={className}>
        {orgType}
      </Badge>
    );
  }
  return (
    <Badge className={`${meta.cls} border-transparent ${className ?? ""}`}>{meta.label}</Badge>
  );
}

export function VerifiedBadge({ label = "Terverifikasi" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand-deep">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 1.5l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-1 2.6 1 2.6-2.2 1.6-.9 2.6-2.7-.2L10 18.5l-2.2-1.6-2.7.2-.9-2.6L2 12.9l1-2.6-1-2.6 2.2-1.6.9-2.6 2.7.2L10 1.5zm3.7 6.2a.9.9 0 00-1.3-1.2L9 10l-1.4-1.4A.9.9 0 006.3 9.9l2 2c.4.4 1 .4 1.3 0l4.1-4.2z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </span>
  );
}

export function RatingStars({ rating, count }: { rating: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
      <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
      {rating.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
      <span className="sr-only">dari 5</span>
      {typeof count === "number" && (
        <span className="font-normal text-ink-muted">({count} review)</span>
      )}
    </span>
  );
}

/* ---------- Layout bersama ---------- */

export interface Crumb {
  name: string;
  url: string;
}

export function PageHero({
  breadcrumbs,
  title,
  lead,
  children,
}: {
  breadcrumbs: Crumb[];
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            {breadcrumbs.map((b, i) => (
              <li key={b.url} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/40">
                    /
                  </span>
                )}
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="font-semibold text-white">
                    {b.name}
                  </span>
                ) : (
                  <Link
                    href={b.url}
                    className="rounded underline-offset-4 hover:text-white hover:underline"
                  >
                    {b.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
        {lead && <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  desc,
}: {
  id?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      <h2 id={id} className="text-2xl font-extrabold tracking-tight text-brand-deep">
        {title}
      </h2>
      {desc && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">{desc}</p>}
    </div>
  );
}

export function MetaChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90">
      {icon}
      {children}
    </span>
  );
}

export function LocationChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-ink-muted">
      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {children}
    </span>
  );
}

export function DurationChip({ days }: { days: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-ink-muted">
      <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {days} hari
    </span>
  );
}

/** CTA menuju form kontak di SPA (hash-route). */
export function CtaKontak({
  label = "Konsultasi & Pesan via Kontak",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href="/#/kontak"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-deep ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline"
    >
      <span aria-hidden="true">←</span> {label}
    </Link>
  );
}
