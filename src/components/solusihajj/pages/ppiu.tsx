"use client";

import { ShieldCheck, MapPin, Users, Clock, CalendarCheck, FileBadge, Landmark, ExternalLink, Building2 } from "lucide-react";
import { ppiuList, getPpiu } from "@/data/ppiu";
import { packagesOfPpiu } from "@/data/packages";
import { reviewsOfPpiu } from "@/data/reviews";
import { formatDate, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link } from "@/lib/solusihajj/router";
import type { Tier } from "@/data/types";
import { TIER_META } from "@/data/types";
import { Breadcrumb } from "../chrome";
import { ShieldBadge, StarRating, PackageCard, SectionHeading, DimensionBars, WaButton } from "../ui-bits";

/* ================= DIREKTORI PPIU ================= */
export function PpiuDirectoryPage() {
  const byTier = (t: Tier) => ppiuList.filter((p) => p.tier === t);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Direktori PPIU" }]} />
      <SectionHeading
        kicker="Direktori"
        title="10 PPIU Founding Partner — Semua Lolos Verifikasi 5 Lapis"
        sub="Tier Platinum, Gold, Silver bukan label iklan: itu hasil penilaian berkelanjutan atas izin, audit kantor, track record, dan rating jamaah. Bisa turun bila performa menurun."
      />
      <div className="mt-8 space-y-10">
        {(["platinum", "gold", "silver"] as Tier[]).map((tier) =>
          byTier(tier).length > 0 ? (
            <section key={tier} aria-label={`PPIU tier ${tier}`}>
              <div className="mb-4 flex items-center gap-3">
                <ShieldBadge tier={tier} size="md" />
                <h2 className="text-xl font-bold text-ink">Tier {TIER_META[tier].label}</h2>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-ink-muted">{TIER_META[tier].description}</span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {byTier(tier).map((ppiu) => {
                  const pkgs = packagesOfPpiu(ppiu.slug);
                  return (
                    <Link
                      key={ppiu.slug}
                      to={`/ppiu/${ppiu.slug}`}
                      className="group flex flex-col rounded-2xl border border-line-warm bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[17px] font-bold leading-snug text-ink group-hover:text-brand">{ppiu.name}</h3>
                          <p className="mt-1 flex items-center gap-1 text-sm text-ink-muted">
                            <MapPin size={13} /> {ppiu.city}, {ppiu.province}
                          </p>
                        </div>
                        <ShieldBadge tier={ppiu.tier} size="sm" showLabel={false} />
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                        <StarRating value={ppiu.rating} />
                        <span>{ppiu.reviewCount} review</span>
                        <span className="inline-flex items-center gap-1"><Users size={12} /> {ppiu.jamaahSent.toLocaleString("id-ID")} jamaah</span>
                        <span className="inline-flex items-center gap-1"><CalendarCheck size={12} /> {ppiu.departureAccuracy}% tepat berangkat</span>
                      </div>
                      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">{ppiu.about}</p>
                      <div className="mt-4 flex items-center justify-between border-t border-line-warm pt-3">
                        <span className="text-sm font-bold text-brand">{pkgs.length} paket aktif</span>
                        <span className="text-sm font-bold text-brand group-hover:underline">Lihat toko →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null
        )}
      </div>
      <div className="mt-10 rounded-2xl bg-brand-soft p-6 text-center">
        <p className="text-[15px] leading-relaxed text-brand-deep">
          Anda pengelola PPIU berizin dan ingin tayang di sini?{" "}
          <a href={waLink(waMessages.ppiuPartner)} target="_blank" rel="noopener noreferrer" className="font-bold underline">
            Ajukan Verifikasi 5 Lapis via WhatsApp
          </a>{" "}
          — proses audit gratis, PPIU membayar hanya saat transaksi berhasil.
        </p>
      </div>
    </div>
  );
}

/* ================= TOKO PPIU (TEMPLATE C) ================= */
export function PpiuStorePage({ slug }: { slug: string }) {
  const ppiu = getPpiu(slug);
  if (!ppiu) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-ink">PPIU tidak ditemukan</h1>
        <Link to="/ppiu" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-bold text-ivory">
          Kembali ke Direktori
        </Link>
      </div>
    );
  }
  const pkgs = packagesOfPpiu(slug);
  const reviews = reviewsOfPpiu(slug);

  return (
    <div>
      {/* HEADER TOKO */}
      <div className="relative bg-brand-deep py-10 md:py-14">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb
            items={[{ label: "Beranda", to: "/" }, { label: "PPIU", to: "/ppiu" }, { label: ppiu.shortName }]}
          />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gold-soft">
                <ShieldBadge tier={ppiu.tier} size="lg" showLabel={false} />
              </div>
              <div>
                <h1 className="text-[26px] font-extrabold text-ivory md:text-[32px]">{ppiu.name}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ivory/75">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {ppiu.city}, {ppiu.province}</span>
                  <StarRating value={ppiu.rating} size={15} />
                  <span>({ppiu.reviewCount} review Saksi Jamaah)</span>
                  <span className="inline-flex items-center gap-1.5"><Users size={14} /> {ppiu.jamaahSent.toLocaleString("id-ID")} jamaah terlayani</span>
                </div>
                <p className="mt-2 text-sm text-ivory/55">
                  Tier {TIER_META[ppiu.tier].label} — {TIER_META[ppiu.tier].description}
                </p>
              </div>
            </div>
            <WaButton href={waLink(waMessages.ppiuStore(ppiu.name))} label={`Tanya ${ppiu.shortName}`} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            {/* PAKET AKTIF */}
            <section aria-label="Paket aktif">
              <h2 className="text-[22px] font-bold text-ink">Paket Aktif ({pkgs.length})</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {pkgs.map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} ppiu={ppiu} />
                ))}
              </div>
            </section>

            {/* REVIEW */}
            <section aria-label="Review">
              <h2 className="text-[22px] font-bold text-ink">Saksi Jamaah ({reviews.length})</h2>
              <div className="mt-4 space-y-4">
                {reviews.map((r) => (
                  <figure key={r.id} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                          {r.name.replace(/^(Hj\. |H\. |Bpk\. |Ibu |Dr\. )/, "").charAt(0)}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{r.name}</p>
                          <p className="text-xs text-ink-muted">{r.city} • Pulang {formatDate(r.returnedAt, "short")}</p>
                        </div>
                      </div>
                      <StarRating value={r.rating} />
                    </div>
                    <blockquote className="text-[15px] leading-relaxed text-ink">{r.text}</blockquote>
                    {r.ppiuReply && (
                      <div className="mt-3 rounded-xl bg-muted p-3.5">
                        <p className="text-xs font-bold text-brand">Balasan {ppiu.shortName}:</p>
                        <p className="mt-1 text-sm text-ink-muted">{r.ppiuReply}</p>
                      </div>
                    )}
                  </figure>
                ))}
                {reviews.length === 0 && (
                  <p className="rounded-2xl border border-dashed border-line-warm p-6 text-center text-sm text-ink-muted">
                    Belum ada review untuk PPIU ini di platform kami.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* SIDEBAR VERIFIKASI */}
          <aside className="space-y-4">
            <div className="rounded-2xl border-2 border-gold/40 bg-gold-soft/40 p-6">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
                <ShieldCheck size={20} className="text-gold-deep" /> Verifikasi 5 Lapis
              </h2>
              <p className="mt-1 text-sm text-ink-muted">Verifikasi terakhir: {formatDate(ppiu.verifiedAt, "long")}</p>
              <ol className="mt-4 space-y-2.5">
                {[
                  "Izin resmi Kemenag — AKTIF ✓",
                  "Audit kantor fisik — LOLOS ✓",
                  "Legalitas PT & rekening perusahaan — LOLOS ✓",
                  "Track record jamaah — LOLOS ✓",
                  "Pemantauan berkala — berjalan",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] font-semibold text-ink">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand" />
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
                <FileBadge size={20} className="text-brand" /> Data Izin
              </h2>
              <dl className="mt-3 space-y-2.5 text-[14px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">No. Izin PPIU</dt>
                  <dd className="tabular text-right font-bold text-ink">{ppiu.licenseNo}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">Terbit</dt>
                  <dd className="text-right font-semibold text-ink">{formatDate(ppiu.licenseIssued, "short")}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">Berlaku s.d.</dt>
                  <dd className="text-right font-semibold text-ink">{formatDate(ppiu.licenseValidUntil, "short")}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">Wilayah kerja</dt>
                  <dd className="text-right font-semibold text-ink">{ppiu.kemenagOffice}</dd>
                </div>
              </dl>
              <a
                href="https://simpu.kemenag.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-brand text-sm font-bold text-brand hover:bg-brand-soft"
              >
                <ExternalLink size={15} /> Lihat Sumber Resmi (SIMPU Kemenag)
              </a>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                Kami mendorong Anda memverifikasi ulang nomor izin ini langsung di kanal resmi — justru itulah tanda travel yang amanah.
              </p>
            </div>

            <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
                <Landmark size={20} className="text-brand" /> Performa
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-muted p-3 text-center">
                  <p className="tabular text-2xl font-extrabold text-brand">{ppiu.departureAccuracy}%</p>
                  <p className="text-xs text-ink-muted">Ketepatan berangkat</p>
                </div>
                <div className="rounded-xl bg-muted p-3 text-center">
                  <p className="tabular text-2xl font-extrabold text-brand">~{ppiu.responseMinutes}m</p>
                  <p className="text-xs text-ink-muted">Respons WhatsApp</p>
                </div>
              </div>
              <div className="mt-4">
                <DimensionBars dimensions={ppiu.dimensions} compact />
              </div>
            </div>

            <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
                <Building2 size={20} className="text-brand" /> Kantor
              </h2>
              <address className="mt-2 text-[14px] not-italic leading-relaxed text-ink-muted">
                {ppiu.address}
                <br />
                Berdiri {ppiu.yearFounded} • {ppiu.highlights.join(" • ")}
              </address>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
