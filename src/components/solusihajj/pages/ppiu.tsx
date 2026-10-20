"use client";

import { useState } from "react";
import { ShieldCheck, MapPin, Users, Clock, CalendarCheck, FileBadge, Landmark, ExternalLink, Building2, Globe2 } from "lucide-react";
import { ppiuList, getPpiu, orgOf, countryOf, COUNTRY_LIST } from "@/data/ppiu";
import { packagesOfPpiu as pkgsOf } from "@/data/packages";
import { flightsOfPpiu } from "@/data/flights";
import { reviewsOfPpiu } from "@/data/reviews";
import { formatDate, formatRupiah, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link } from "@/lib/solusihajj/router";
import type { Tier, OrgType } from "@/data/types";
import { TIER_META, ORG_META } from "@/data/types";
import { Breadcrumb } from "../chrome";
import { ShieldBadge, StarRating, PackageCard, SectionHeading, DimensionBars, WaButton, OrgBadge, SeatBar } from "../ui-bits";

/* ================= DIREKTORI PENYELENGGARA ASIA ================= */
export function PpiuDirectoryPage({ query }: { query: URLSearchParams }) {
  const [negara, setNegara] = useState(query.get("negara") ?? "");
  const [org, setOrg] = useState(query.get("org") ?? "");

  const filtered = ppiuList.filter((p) => {
    if (negara && countryOf(p) !== negara) return false;
    if (org && orgOf(p) !== org) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Direktori Penyelenggara" }]} />
      <SectionHeading
        kicker="Direktori Asia"
        title={`${filtered.length} Penyelenggara Terverifikasi di ${new Set(ppiuList.map(countryOf)).size} Negara`}
        sub="PPIU & PIHK Indonesia, BPW Malaysia–Singapura–Brunei–Thailand, KBIHU pendamping — semua lolos Verifikasi 5 Lapis versi negaranya masing-masing. Tier bisa turun bila performa menurun."
      />

      {/* FILTER NEGARA + ORG */}
      <div className="mt-8 space-y-4 rounded-2xl border border-line-warm bg-card p-5 shadow-card">
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-muted">
            <Globe2 size={13} /> Negara
          </p>
          <div className="flex flex-wrap gap-2">
            {[{ v: "", l: "Semua" }, ...COUNTRY_LIST.map((c) => ({ v: c, l: c }))].map((c) => (
              <button
                key={c.v}
                onClick={() => setNegara(c.v)}
                className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors ${
                  negara === c.v ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink hover:border-brand/40"
                }`}
              >
                {c.l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Jenis Organisasi</p>
          <div className="flex flex-wrap gap-2">
            {[{ v: "", l: "Semua" }, ...(Object.keys(ORG_META) as OrgType[]).map((o) => ({ v: o, l: `${o} — ${ORG_META[o].full}` }))].map((o) => (
              <button
                key={o.v}
                onClick={() => setOrg(o.v)}
                title={o.v ? ORG_META[o.v as OrgType].note : undefined}
                className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors ${
                  org === o.v ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink hover:border-brand/40"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((ppiu) => {
          const pkgs = pkgsOf(ppiu.slug);
          return (
            <Link
              key={ppiu.slug}
              to={`/ppiu/${ppiu.slug}`}
              className="group flex flex-col rounded-2xl border border-line-warm bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                    <OrgBadge org={orgOf(ppiu)} size="sm" />
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-ink-muted">{countryOf(ppiu)}</span>
                  </div>
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
                <span className="text-sm font-bold text-brand">
                  {orgOf(ppiu) === "KBIHU" ? "Layanan konsultasi" : `${pkgs.length} paket aktif`}
                </span>
                <span className="text-sm font-bold text-brand group-hover:underline">Lihat toko →</span>
              </div>
            </Link>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 rounded-2xl border border-dashed border-line-warm p-10 text-center text-ink-muted">
          Belum ada penyelenggara pada kombinasi filter ini — jaringan kami bertambah tiap bulan.
        </p>
      )}

      <div className="mt-10 rounded-2xl bg-brand-soft p-6 text-center">
        <p className="text-[15px] leading-relaxed text-brand-deep">
          Anda pengelola PPIU/PIHK/BPW/KBIHU dan ingin tayang di sini?{" "}
          <Link to="/partner" className="font-bold underline">
            Lihat manfaat kemitraan
          </Link>{" "}
          atau{" "}
          <a href={waLink(waMessages.ppiuPartner)} target="_blank" rel="noopener noreferrer" className="font-bold underline">
            ajukan Verifikasi 5 Lapis via WhatsApp
          </a>{" "}
          — proses audit gratis, bayar hanya saat transaksi berhasil.
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
  const pkgs = pkgsOf(slug);
  const reviews = reviewsOfPpiu(slug);
  const flights = flightsOfPpiu(slug);

  return (
    <div>
      {/* HEADER TOKO */}
      <div className="relative bg-brand-deep py-10 md:py-14">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb
            items={[{ label: "Beranda", to: "/" }, { label: "Penyelenggara", to: "/ppiu" }, { label: ppiu.shortName }]}
          />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gold-soft">
                <ShieldBadge tier={ppiu.tier} size="lg" showLabel={false} />
              </div>
              <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <OrgBadge org={orgOf(ppiu)} />
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold text-ivory">{countryOf(ppiu)}</span>
                </div>
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
              <h2 className="text-[22px] font-bold text-ink">
                {orgOf(ppiu) === "KBIHU" ? "Layanan & Paket Pendampingan" : "Paket Aktif"} ({pkgs.length})
              </h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {pkgs.map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} ppiu={ppiu} />
                ))}
              </div>
              {pkgs.length === 0 && (
                <p className="mt-4 rounded-2xl border border-dashed border-line-warm p-6 text-center text-sm text-ink-muted">
                  Toko ini belum memasang paket di katalog — hubungi langsung untuk permintaan khusus.
                </p>
              )}
            </section>

            {/* JADWAL CHARTER YANG DITANGANI */}
            {flights.length > 0 && (
              <section aria-label="Jadwal penerbangan yang ditangani">
                <h2 className="text-[22px] font-bold text-ink">Jadwal Charter yang Ditangani ({flights.length})</h2>
                <div className="mt-4 space-y-3">
                  {flights.map((f) => (
                    <div key={f.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line-warm bg-card p-4 shadow-card">
                      <div>
                        <p className="font-bold text-ink">{f.route}</p>
                        <p className="text-xs text-ink-muted">{f.airline} • {formatDate(f.depart, "short")} • {f.transit}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-28">
                          <SeatBar left={f.seatsLeft} total={f.seatsTotal} />
                        </div>
                        <p className="tabular text-lg font-extrabold text-brand">{formatRupiah(f.pricePerPax)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

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
