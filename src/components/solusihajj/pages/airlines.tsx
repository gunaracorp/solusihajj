"use client";

import { useEffect, useState } from "react";
import { Plane, Building, Users, CalendarDays, ArrowRight, Loader2, BadgeCheck, Globe2 } from "lucide-react";
import { SectionHeading } from "../ui-bits";
import { Link } from "@/lib/solusihajj/router";
import { cn } from "@/lib/utils";

/**
 * R2 — "Jaringan Maskapai Ibadah"
 * Maskapai & rute riil hasil sinkronisasi situs resmi maskapai +
 * keputusan resmi Kemenag (maskapai haji 2025: Garuda, Lion Group, Saudia).
 */

interface R2Route {
  id: string;
  originCity: string;
  originCode: string;
  destCity: string;
  destCode: string;
  freqText: string | null;
  aircraft: string | null;
  seats: number | null;
  serviceType: string;
  sinceText: string | null;
  notes: string | null;
}
interface R2Airline {
  id: string;
  name: string;
  iata: string;
  icao: string | null;
  country: string;
  category: string;
  hub: string | null;
  notes: string | null;
  routes: R2Route[];
}
interface AirlinesResp {
  total: number;
  routeTotal: number;
  byService: { service: string; count: number }[];
  airlines: R2Airline[];
}

const SERVICE_LABEL: Record<string, { label: string; cls: string }> = {
  PEMERINTAH_HAJI: { label: "Maskapai Resmi Haji", cls: "bg-[#FAF5E4] text-[#8A6D0B] border-[#C9A227]/40" },
  CHARTER_UMRAH: { label: "Charter Umrah", cls: "bg-brand-soft text-brand border-brand/30" },
  REGULER: { label: "Reguler", cls: "bg-ivory text-ink-muted border-line-warm" },
};
const ROUTE_LABEL: Record<string, string> = {
  REGULER: "Reguler",
  CHARTER_UMRAH: "Charter Umrah",
  CHARTER_HAJI: "Charter Haji",
};

export default function AirlinesPage() {
  const [data, setData] = useState<AirlinesResp | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/r2/airlines")
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setLoading(false);
      });
  }, []);

  const airlines = (data?.airlines ?? []).filter((a) => !filter || a.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Jaringan Maskapai Ibadah Haji & Umrah Indonesia",
            description:
              "Maskapai dan rute penerbangan jamaah haji & umrah Indonesia hasil sinkronisasi rilis resmi: Garuda Indonesia, Saudia, Lion Air, Citilink, Super Air Jet, EgyptAir, Turkish Airlines.",
            itemListElement: (data?.airlines ?? []).map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Airline",
                name: a.name,
                iataCode: a.iata,
                numberOfRoutes: a.routes.length,
              },
            })),
          }),
        }}
      />

      <SectionHeading
        kicker="R2 — Jaringan transportasi ibadah"
        title="Maskapai & Rute Ibadah, Ditarik dari Rilis Resmi"
        sub="Dari keputusan Kemenag (6 Januari 2025) yang menetapkan Garuda Indonesia, Lion Group, dan Saudia sebagai maskapai haji 2025, hingga charter umrah Citilink dari 9 kota — semua data rute di bawah memiliki sumber rujukan resmi."
      />

      {/* ringkasan */}
      <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
        {[
          { icon: Plane, v: data?.total ?? "…", l: "Maskapai aktif" },
          { icon: ArrowRight, v: data?.routeTotal ?? "…", l: "Rute tercatat" },
          { icon: Building, v: (data?.byService ?? []).find((s) => s.service === "CHARTER_UMRAH")?.count ?? "…", l: "Rute charter umrah" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-line-warm bg-card p-4 text-center shadow-green md:p-6">
            <s.icon size={22} className="mx-auto text-brand" />
            <p className="mt-2 tabular text-2xl font-bold text-ink md:text-4xl">{typeof s.v === "number" ? s.v.toLocaleString("id-ID") : s.v}</p>
            <p className="text-sm font-bold text-ink">{s.l}</p>
          </div>
        ))}
      </div>

      {/* filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[["", "Semua Maskapai"], ["PEMERINTAH_HAJI", "Maskapai Resmi Haji"], ["CHARTER_UMRAH", "Charter Umrah"], ["REGULER", "Reguler"]].map(([k, l]) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={cn(
              "min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
              filter === k ? "border-brand bg-brand text-ivory" : "border-line-warm bg-ivory text-ink hover:border-brand/50"
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {/* daftar maskapai */}
      {loading ? (
        <div className="mt-10 flex items-center justify-center gap-3 text-ink-muted"><Loader2 size={20} className="animate-spin" /> Memuat jaringan maskapai…</div>
      ) : (
        <div className="mt-6 space-y-5">
          {airlines.map((a) => {
            const cat = SERVICE_LABEL[a.category] ?? SERVICE_LABEL.REGULER;
            return (
              <article key={a.id} className="overflow-hidden rounded-2xl border border-line-warm bg-card shadow-green">
                <div className="flex flex-col gap-3 border-b border-line-warm bg-ivory/60 p-5 md:flex-row md:items-center md:justify-between md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-black text-ivory" aria-hidden>
                      {a.iata}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{a.name}</h3>
                      <p className="text-sm text-ink-muted">{a.hub}</p>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold", cat.cls)}>
                          {a.category === "PEMERINTAH_HAJI" && <BadgeCheck size={12} />}
                          {cat.label}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-line-warm bg-ivory px-2.5 py-0.5 text-xs font-semibold text-ink-muted">
                          <Globe2 size={12} /> {a.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-ink-muted md:max-w-sm">{a.notes}</p>
                </div>

                {/* rute */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-brand-soft/60 text-ink">
                      <tr>
                        <th className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide">Rute</th>
                        <th className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide">Frekuensi</th>
                        <th className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide">Pesawat</th>
                        <th className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide">Layanan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {a.routes.map((r) => (
                        <tr key={r.id} className="border-t border-line-warm">
                          <td className="px-5 py-3">
                            <span className="font-bold text-ink">{r.originCode}</span>
                            <span className="mx-1.5 text-ink-muted">{r.originCity}</span>
                            <ArrowRight size={13} className="inline text-brand" />
                            <span className="ml-1.5 font-bold text-ink">{r.destCode}</span>
                            <span className="ml-1.5 text-ink-muted">{r.destCity}</span>
                            {r.sinceText && (
                              <span className="ml-2 inline-flex items-center gap-1 text-[11px] text-ink-muted"><CalendarDays size={10} /> sejak {r.sinceText}</span>
                            )}
                            {r.seats && (
                              <span className="ml-2 inline-flex items-center gap-1 text-[11px] text-ink-muted"><Users size={10} /> {r.seats} kursi</span>
                            )}
                          </td>
                          <td className="px-5 py-3 text-ink">{r.freqText}</td>
                          <td className="px-5 py-3 text-ink-muted">{r.aircraft}</td>
                          <td className="px-5 py-3">
                            <span className={cn("rounded-full px-2.5 py-1 text-xs font-bold", r.serviceType === "CHARTER_UMRAH" ? "bg-brand-soft text-brand" : "bg-ivory text-ink-muted border border-line-warm")}>
                              {ROUTE_LABEL[r.serviceType] ?? r.serviceType}
                            </span>
                            {r.notes && <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">{r.notes}</p>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-brand p-6 text-center md:p-10">
        <h3 className="text-xl font-bold text-ivory md:text-2xl">Butuh kursi charter untuk grup 10+ jamaah?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-[17px] text-ivory/80">
          Nikmati harga grosir per kursi dengan bagasi 40–46 kg di vertikal Tiket Charter Grup — jadwal dari 8 bandara Asia, langsung ke Jeddah & Madinah.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link to="/tiket-grup" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-ivory px-6 font-bold text-brand transition-colors hover:bg-white">
            <Plane size={18} /> Lihat Jadwal Charter Grup
          </Link>
          <Link to="/pusat-data" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-ivory/40 px-6 font-bold text-ivory transition-colors hover:bg-ivory/10">
            Pusat Data Nasional
          </Link>
        </div>
      </div>
    </div>
  );
}
