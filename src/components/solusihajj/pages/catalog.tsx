"use client";

import { useMemo, useState } from "react";
import {
  MapPin,
  CalendarDays,
  Mountain,
  Plane,
  Hotel,
  Utensils,
  Bus,
  UserRound,
  ShieldCheck,
  LockKeyhole,
  X,
  SlidersHorizontal,
  ArrowRight,
  PackageCheck,
  PackageX,
} from "lucide-react";
import { packageList, getPackage, packagesOfPpiu } from "@/data/packages";
import { getPpiu, ppiuList } from "@/data/ppiu";
import { reviewsOfPackage } from "@/data/reviews";
import type { Pkg } from "@/data/types";
import { formatRupiah, formatDate, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link, navigate, scrollToId } from "@/lib/solusihajj/router";
import { Breadcrumb } from "../chrome";
import { PackageCard, ShieldBadge, StarRating, SceneVisual, SectionHeading, DimensionBars, WaButton } from "../ui-bits";

/* ================= BUDGET FILTER HELPERS ================= */
function budgetMatch(price: number, budget: string | null): boolean {
  switch (budget) {
    case "lt30": return price < 30_000_000;
    case "30-40": return price >= 30_000_000 && price <= 40_000_000;
    case "40-50": return price > 40_000_000 && price <= 50_000_000;
    case "gt50": return price > 50_000_000;
    default: return true;
  }
}

const TYPE_LABELS: Record<string, string> = {
  reguler: "Reguler",
  ramadhan: "Ramadhan",
  "plus-turki": "Plus Turki",
  "plus-dubai": "Plus Dubai",
};

/* ================= KATALOG PAKET ================= */
export function CatalogPage({ query }: { query: URLSearchParams }) {
  const [kota, setKota] = useState(query.get("kota") ?? "");
  const [tipe, setTipe] = useState(query.get("type") ?? "");
  const [budget, setBudget] = useState(query.get("budget") ?? "");
  const [bulan, setBulan] = useState(query.get("bulan") ?? "");
  const [sort, setSort] = useState("harga-naik");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = packageList.filter((p) => {
      if (kota && p.departCity !== kota) return false;
      if (tipe && p.type !== tipe) return false;
      if (!budgetMatch(p.basePrice, budget)) return false;
      if (bulan && !p.departWindow.toLowerCase().includes(bulan.toLowerCase())) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      switch (sort) {
        case "harga-naik": return a.basePrice - b.basePrice;
        case "harga-turun": return b.basePrice - a.basePrice;
        case "rating": return b.rating - a.rating;
        case "durasi": return a.durationDays - b.durationDays;
        default: return 0;
      }
    });
    return list;
  }, [kota, tipe, budget, bulan, sort]);

  const activeFilters = [kota, tipe, budget, bulan].filter(Boolean).length;

  const filterBody = (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Tipe Paket</p>
        <div className="flex flex-wrap gap-2">
          {["", "reguler", "ramadhan", "plus-turki", "plus-dubai"].map((t) => (
            <button
              key={t}
              onClick={() => setTipe(t)}
              className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors ${
                tipe === t ? "border-brand bg-brand text-ivory" : "border-line-warm bg-white text-ink hover:border-brand/40"
              }`}
            >
              {t === "" ? "Semua" : TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Kota Keberangkatan</p>
        <select value={kota} onChange={(e) => setKota(e.target.value)} className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand" aria-label="Filter kota">
          <option value="">Semua kota</option>
          {[...new Set(packageList.map((p) => p.departCity))].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Budget / Orang</p>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand" aria-label="Filter budget">
          <option value="">Semua budget</option>
          <option value="lt30">&lt; Rp 30 jt</option>
          <option value="30-40">Rp 30 – 40 jt</option>
          <option value="40-50">Rp 40 – 50 jt</option>
          <option value="gt50">&gt; Rp 50 jt</option>
        </select>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Bulan Keberangkatan</p>
        <select value={bulan} onChange={(e) => setBulan(e.target.value)} className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand" aria-label="Filter bulan">
          <option value="">Kapan pun</option>
          {["Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Desember"].map((m) => (
            <option key={m} value={m}>{m} 2026</option>
          ))}
        </select>
      </div>
      {activeFilters > 0 && (
        <button
          onClick={() => { setKota(""); setTipe(""); setBudget(""); setBulan(""); }}
          className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-line-warm text-sm font-semibold text-ink-muted hover:bg-muted"
        >
          <X size={14} /> Reset {activeFilters} filter
        </button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Paket Umrah" }]} />
      <SectionHeading
        kicker="Katalog"
        title={`${filtered.length} Paket Umrah Terverifikasi`}
        sub="Semua harga adalah harga all-in per orang (quad share). Nama hotel dan jarak meter ke Haram tercantum apa adanya — bukan klaim."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar filter desktop */}
        <aside className="hidden h-fit rounded-2xl border border-line-warm bg-card p-5 shadow-card lg:block" aria-label="Filter paket">
          {filterBody}
        </aside>
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand px-4 font-bold text-brand lg:hidden"
              aria-expanded={filtersOpen}
            >
              <SlidersHorizontal size={16} /> Filter {activeFilters > 0 && `(${activeFilters})`}
            </button>
            <label className="flex items-center gap-2 text-sm text-ink-muted">
              Urutkan:
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 rounded-xl border border-line-warm bg-white px-3 text-[15px] font-semibold text-ink outline-none focus:border-brand" aria-label="Urutkan hasil">
                <option value="harga-naik">Harga terendah</option>
                <option value="harga-turun">Harga tertinggi</option>
                <option value="rating">Rating tertinggi</option>
                <option value="durasi">Durasi tersingkat</option>
              </select>
            </label>
          </div>
          {filtersOpen && (
            <div className="mb-4 rounded-2xl border border-line-warm bg-card p-5 shadow-card lg:hidden">{filterBody}</div>
          )}
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line-warm bg-card p-10 text-center">
              <PackageX className="mx-auto mb-3 text-ink-muted" size={36} />
              <p className="font-bold text-ink">Tidak ada paket yang cocok</p>
              <p className="mt-1 text-sm text-ink-muted">Coba longgarkan filter — atau tanyakan via WhatsApp, kami carikan yang paling mendekati.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} ppiu={getPpiu(pkg.ppiuSlug)} />
              ))}
            </div>
          )}
          <div className="mt-8 rounded-2xl bg-brand-soft p-5 text-center">
            <p className="text-[15px] text-brand-deep">
              Tidak menemukan tanggal yang pas? <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="font-bold underline">Tanyakan via WhatsApp</a> — kami bantu cari dari 10 PPIU partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= DETAIL PAKET (TEMPLATE B) ================= */
export function PackageDetailPage({ slug }: { slug: string }) {
  const pkg = getPackage(slug);
  if (!pkg) return <NotFoundPackage slug={slug} />;

  const ppiu = getPpiu(pkg.ppiuSlug)!;
  const reviews = reviewsOfPackage(slug);
  const priceDetail: [string, string][] = [
    ["Tiket pesawat PP ekonomi + bagasi", formatRupiah(Math.round(pkg.basePrice * 0.32))],
    ["Visa umrah & administrasi Kemenag", formatRupiah(Math.round(pkg.basePrice * 0.07))],
    ["Hotel Makkah: " + pkg.hotelMakkah.name, formatRupiah(Math.round(pkg.basePrice * 0.26))],
    ["Hotel Madinah: " + pkg.hotelMadinah.name, formatRupiah(Math.round(pkg.basePrice * 0.13))],
    ["Makan 3× sehari buffet Indonesia", formatRupiah(Math.round(pkg.basePrice * 0.09))],
    ["Bus AC, mutawif, handling & ziarah", formatRupiah(Math.round(pkg.basePrice * 0.1))],
    ["Perlengkapan & asuransi perjalanan", formatRupiah(Math.round(pkg.basePrice * 0.03))],
  ];

  return (
    <div className="pb-24 md:pb-0">
      {/* S1 HERO */}
      <div className="relative bg-brand-deep">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-8">
          <Breadcrumb
            items={[
              { label: "Beranda", to: "/" },
              { label: "Paket", to: "/paket" },
              { label: TYPE_LABELS[pkg.type], to: "/paket?type=" + pkg.type },
              { label: pkg.title },
            ]}
          />
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SceneVisual visual={pkg.visual} title={pkg.title} className="h-52 rounded-2xl md:h-64" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep">{TYPE_LABELS[pkg.type]}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-ivory">{pkg.durationDays} Hari</span>
                <StarRating value={pkg.rating} size={15} />
                <span className="text-xs text-ivory/60">({pkg.reviewCount} review)</span>
              </div>
              <h1 className="text-[26px] font-extrabold leading-tight text-ivory md:text-[32px]">{pkg.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ivory/75">
                <span className="inline-flex items-center gap-1.5"><MapPin size={15} /> {pkg.departCity}</span>
                <span className="inline-flex items-center gap-1.5"><Plane size={15} /> {pkg.airline}</span>
                <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} /> {pkg.departWindow}</span>
              </div>
              <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-ivory/60">Harga all-in per orang (quad)</p>
                <p className="tabular mt-1 text-3xl font-extrabold text-gold">{formatRupiah(pkg.basePrice)}</p>
                <p className="mt-1 text-xs text-ivory/60">Tanpa biaya tersembunyi — rincian lengkap di bawah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* S2 PITA KEPERCAYAAN */}
      <div className="border-b border-line-warm bg-gold-soft">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldBadge tier={ppiu.tier} />
            <span className="text-sm font-semibold text-ink">
              Diselenggarakan oleh{" "}
              <Link to={`/ppiu/${ppiu.slug}`} className="font-bold text-brand underline-offset-2 hover:underline">
                {ppiu.name}
              </Link>
            </span>
          </div>
          <Link to="/escrow" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
            <LockKeyhole size={15} /> Dana Anda dilindungi escrow <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Kolom utama */}
          <div className="space-y-10">
            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-line-warm bg-card px-4 py-3">
                  <PackageCheck size={18} className="shrink-0 text-brand" />
                  <span className="text-[15px] font-semibold text-ink">{h}</span>
                </div>
              ))}
            </div>

            {/* S4 TABEL TANGGAL & KUOTA */}
            <section aria-label="Tanggal dan kuota">
              <h2 className="text-[22px] font-bold text-ink">Tanggal Keberangkatan & Kuota</h2>
              <p className="mt-1 text-sm text-ink-muted">Kuota tampil real-time dari PPIU. Upgrade kamar tersedia sebagai varian harga.</p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-line-warm bg-card shadow-card">
                <table className="w-full min-w-[640px] text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-line-warm bg-muted/50">
                      <th className="px-5 py-3.5 font-bold text-ink">Berangkat</th>
                      <th className="px-5 py-3.5 font-bold text-ink">Pulang</th>
                      <th className="px-5 py-3.5 font-bold text-ink">Tipe Kamar</th>
                      <th className="px-5 py-3.5 font-bold text-ink">Kuota</th>
                      <th className="px-5 py-3.5 text-right font-bold text-ink">Harga / Orang</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { depart: pkg.departWindow.split("–")[0]?.trim() || "Februari 2026", delta: 0, quota: 45, remaining: 12, room: "quad" },
                      { depart: pkg.departWindow.split("–")[1]?.trim() || "April 2026", delta: 1_500_000, quota: 45, remaining: 20, room: "quad" },
                      { depart: pkg.departWindow.split("–")[0]?.trim() || "Februari 2026", delta: 3_000_000, quota: 12, remaining: 5, room: "double" },
                    ].map((d, i) => (
                      <tr key={i} className="border-b border-line-warm last:border-0">
                        <td className="px-5 py-4 font-semibold text-ink">{d.depart}</td>
                        <td className="px-5 py-4 text-ink-muted">{d.room === "quad" ? `+${pkg.durationDays - 1} hari` : "sesuai itinerary"}</td>
                        <td className="px-5 py-4 capitalize text-ink">{d.room} room</td>
                        <td className="px-5 py-4">
                          {d.remaining <= 6 ? (
                            <span className="rounded-full bg-[#B3372B]/10 px-2.5 py-1 text-xs font-bold text-[#B3372B]">Sisa {d.remaining} kursi!</span>
                          ) : (
                            <span className="tabular text-ink-muted">{d.remaining}/{d.quota} tersisa</span>
                          )}
                        </td>
                        <td className="tabular px-5 py-4 text-right font-extrabold text-brand">{formatRupiah(pkg.basePrice + d.delta)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* S5 ITINERARY */}
            <section aria-label="Itinerary harian">
              <h2 className="text-[22px] font-bold text-ink">Itinerary Harian</h2>
              <ol className="mt-5 space-y-0 border-l-2 border-brand/20 pl-6">
                {pkg.itinerary.map((day) => (
                  <li key={day.day} className="relative pb-6 last:pb-0">
                    <span className="absolute -left-[31px] top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand bg-ivory" aria-hidden="true" />
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">Hari {day.day}</p>
                    <h3 className="mt-0.5 text-[17px] font-bold text-ink">{day.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{day.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* S6 HOTEL */}
            <section aria-label="Hotel">
              <h2 className="text-[22px] font-bold text-ink">Hotel — Jarak Nyata ke Haram</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { h: pkg.hotelMakkah, city: "Makkah", icon: Mountain },
                  { h: pkg.hotelMadinah, city: "Madinah", icon: Hotel },
                ].map((row, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-line-warm bg-card shadow-card">
                    <SceneVisual visual={row.city === "Makkah" ? "makkah" : "madinah"} className="h-28" />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">{row.city}</p>
                          <h3 className="text-[17px] font-bold text-ink">{row.h.name}</h3>
                        </div>
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: row.h.stars }).map((_, s) => (
                            <span key={s} className="text-xs text-gold">★</span>
                          ))}
                        </span>
                      </div>
                      <p className="tabular mt-2 rounded-xl bg-brand-soft px-3 py-2 text-sm font-bold text-brand-deep">
                        {row.h.distanceToHaram} meter • ± {row.h.walkMinutes} menit jalan kaki
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {row.h.facilities.map((f, j) => (
                          <li key={j} className="rounded-full bg-muted px-2.5 py-1 text-xs text-ink-muted">{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* S7 HARGA ALL-IN */}
            <section aria-label="Rincian harga">
              <h2 className="text-[22px] font-bold text-ink">Rincian Harga All-in — Tidak Ada Asterisk</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line-warm bg-card shadow-card">
                <table className="w-full text-left text-[15px]">
                  <tbody>
                    {priceDetail.map((row, i) => (
                      <tr key={i} className="border-b border-line-warm last:border-0">
                        <td className="px-5 py-3.5 text-ink">{row[0]}</td>
                        <td className="tabular px-5 py-3.5 text-right font-semibold text-ink">{row[1]}</td>
                      </tr>
                    ))}
                    <tr className="bg-brand-soft">
                      <td className="px-5 py-4 font-extrabold text-brand-deep">Total per orang (quad share)</td>
                      <td className="tabular px-5 py-4 text-right text-lg font-extrabold text-brand-deep">{formatRupiah(pkg.basePrice)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* S8 TIDAK TERMASUK */}
            <section aria-label="Biaya yang tidak termasuk">
              <h2 className="text-[22px] font-bold text-ink">Yang Tidak Termasuk — Jujur dari Awal</h2>
              <ul className="mt-4 space-y-2">
                {pkg.excludes.map((e, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-ink-muted">
                    <PackageX size={17} className="mt-0.5 shrink-0 text-[#B7791F]" />
                    {e}
                  </li>
                ))}
              </ul>
            </section>

            {/* S10 SYARAT & PEMBATALAN */}
            <section aria-label="Skema pembatalan">
              <h2 className="text-[22px] font-bold text-ink">Syarat & Skema Pembatalan</h2>
              <p className="mt-1 text-sm text-ink-muted">Selama dana berada di escrow dan belum dirilis, klaim refund Anda tetap terlindungi.</p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-line-warm bg-card shadow-card">
                <table className="w-full min-w-[520px] text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-line-warm bg-muted/50">
                      <th className="px-5 py-3.5 font-bold text-ink">Momen Pembatalan</th>
                      <th className="px-5 py-3.5 font-bold text-ink">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.cancellation.map((c, i) => (
                      <tr key={i} className="border-b border-line-warm last:border-0">
                        <td className="px-5 py-3.5 font-semibold text-ink">{c.moment}</td>
                        <td className="px-5 py-3.5 text-ink-muted">{c.refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* S9 PPIU PROFILE CARD */}
            <section aria-label="Profil penyelenggara" className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <ShieldBadge tier={ppiu.tier} size="lg" />
                    <div>
                      <Link to={`/ppiu/${ppiu.slug}`} className="text-[19px] font-bold text-ink hover:text-brand">{ppiu.name}</Link>
                      <p className="text-sm text-ink-muted">{ppiu.city} • Sejak {ppiu.yearFounded} • {ppiu.jamaahSent.toLocaleString("id-ID")} jamaah terlayani</p>
                    </div>
                  </div>
                  <p className="tabular mt-3 text-sm text-ink-muted">
                    No. Izin PPIU: <span className="font-bold text-ink">{ppiu.licenseNo}</span> • Berlaku s.d. {formatDate(ppiu.licenseValidUntil, "short")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <WaButton href={waLink(waMessages.ppiuStore(ppiu.name))} label="Tanya PPIU" className="min-h-11" />
                  <Link to={`/ppiu/${ppiu.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-brand px-5 text-sm font-bold text-brand hover:bg-brand-soft">
                    Profil Lengkap →
                  </Link>
                </div>
              </div>
              <div className="mt-5 border-t border-line-warm pt-5">
                <DimensionBars dimensions={ppiu.dimensions} compact />
              </div>
            </section>

            {/* S11 REVIEW */}
            <section aria-label="Review jamaah">
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-bold text-ink">Review Saksi Jamaah ({reviews.length})</h2>
                <StarRating value={pkg.rating} size={16} />
              </div>
              <div className="mt-4 space-y-4">
                {reviews.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-line-warm p-6 text-center text-sm text-ink-muted">
                    Belum ada review khusus untuk paket ini. Lihat review di halaman PPIU-nya — semua review datang dari booking selesai.
                  </p>
                ) : (
                  reviews.map((r) => (
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
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Sidebar sticky desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-green">
                <p className="text-sm text-ink-muted">Mulai dari (quad, per orang)</p>
                <p className="tabular mt-1 text-3xl font-extrabold text-brand">{formatRupiah(pkg.basePrice)}</p>
                <div className="mt-4 space-y-2.5">
                  <WaButton href={waLink(waMessages.package(pkg.title, ppiu.name, formatRupiah(pkg.basePrice)))} label="Booking / Tanya via WA" className="w-full" />
                  <Link to={`/ppiu/${ppiu.slug}`} className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-brand font-bold text-brand hover:bg-brand-soft">
                    Lihat Profil PPIU
                  </Link>
                  <Link to="/escrow" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-line-warm font-semibold text-ink-muted hover:bg-muted">
                    <LockKeyhole size={16} className="mr-2" /> Bagaimana dana saya dijaga?
                  </Link>
                </div>
                <ul className="mt-4 space-y-2 border-t border-line-warm pt-4 text-sm text-ink-muted">
                  <li className="flex items-center gap-2"><ShieldCheck size={15} className="text-brand" /> PPIU lolos Verifikasi 5 Lapis</li>
                  <li className="flex items-center gap-2"><LockKeyhole size={15} className="text-brand" /> Dana ditahan escrow 40/40/20</li>
                  <li className="flex items-center gap-2"><UserRound size={15} className="text-brand" /> Review hanya dari jamaah nyata</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* S3 STICKY BUY BAR (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-warm bg-card/95 p-3 shadow-warm backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-ink-muted">Mulai dari</p>
            <p className="tabular text-lg font-extrabold leading-tight text-brand">{formatRupiah(pkg.basePrice)}</p>
          </div>
          <div className="flex gap-2">
            <WaButton href={waLink(waMessages.package(pkg.title, ppiu.name, formatRupiah(pkg.basePrice)))} label="Booking" className="min-h-11 px-4" />
            <WaButton href={waLink(waMessages.package(pkg.title, ppiu.name, formatRupiah(pkg.basePrice)))} label="Tanya" variant="ghost" className="min-h-11 px-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NotFoundPackage({ slug }: { slug: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-6xl">🧭</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Paket tidak ditemukan</h1>
      <p className="mt-2 text-ink-muted">Paket &ldquo;{slug}&rdquo; tidak ada atau sudah ditutup.</p>
      <Link to="/paket" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-bold text-ivory hover:bg-brand-deep">
        Kembali ke Katalog
      </Link>
    </div>
  );
}
