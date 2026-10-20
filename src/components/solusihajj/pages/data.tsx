"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Database, RefreshCw, ExternalLink, Search, ShieldCheck, ShieldX, ShieldAlert,
  Landmark, Building2, Scale, Plane, Globe2, MapPin, BadgeCheck, Clock, CheckCircle2, Loader2,
} from "lucide-react";
import { SectionHeading } from "../ui-bits";
import { Link } from "@/lib/solusihajj/router";
import { cn } from "@/lib/utils";

/**
 * R2 — "Pusat Data Nasional" (Fondasi Data Nasional)
 * Dashboard database riil hasil penarikan dari situs resmi:
 * Kemenag, Kemenhaj, SISKOPATUH, Satu Data, Saudi MOHU,
 * Kemenparekraf, HIMPUH, Kemenag Jatim, situs maskapai.
 */

interface R2Company {
  id: string;
  name: string;
  brandName: string | null;
  orgType: string;
  licenseNo: string | null;
  licenseYear: number | null;
  leader: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  country: string;
  phone: string | null;
  email: string | null;
  status: string;
  verified: boolean;
  sourceRef: string | null;
  dataAsOf: string | null;
  notes: string | null;
  sourceName: string;
  sourceInstitution: string;
  sourceUrl: string | null;
}
interface R2Stats {
  companies: number;
  verified: number;
  byType: { type: string; count: number }[];
  byStatus: { status: string; count: number }[];
  airlines: number;
  routes: number;
  sources: number;
  sanctions: number;
  regulations: number;
  countries: { country: string; count: number }[];
  provinces: { province: string; count: number }[];
  context: { ppiuSiskopatuh: number; pihkSiskopatuh: number; kuotaHajiKhusus2025: number; petugasPer45Jamaah: number };
}
interface R2Source {
  id: string;
  key: string;
  name: string;
  institution: string;
  url: string;
  category: string;
  country: string;
  description: string;
  recordsIndexed: number;
  lastSyncedAt: string | null;
  syncEvents: { id: string; status: string; recordsAffected: number; note: string | null; startedAt: string }[];
}
interface Sanction {
  id: string;
  companyName: string;
  province: string | null;
  authority: string;
  sanctionType: string;
  year: number;
  sourceUrl: string | null;
  note: string | null;
}

const ORG_LABEL: Record<string, string> = { PPIU: "PPIU", PIHK: "PIHK", BPW: "BPW", KBIHU: "KBIHU" };
const CAT_LABEL: Record<string, string> = {
  KEMENTERIAN: "Kementerian", LEMBAGA: "Lembaga Data", ASOSIASI: "Asosiasi", MASKAPAI: "Maskapai", INTERNASIONAL: "Internasional",
};
const fmtDate = (iso: string | null) =>
  iso ? new Date(iso).toLocaleString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—";

function StatusChip({ status }: { status: string }) {
  if (status === "AKTIF")
    return <span className="inline-flex items-center gap-1 rounded-full bg-[#E7F0EC] px-2.5 py-1 text-xs font-bold text-[#1E7F4F]"><ShieldCheck size={12} /> AKTIF</span>;
  if (status === "BARU")
    return <span className="inline-flex items-center gap-1 rounded-full bg-[#F5EEDA] px-2.5 py-1 text-xs font-bold text-[#B7791F]"><BadgeCheck size={12} /> IZIN BARU</span>;
  if (status === "SANKSI")
    return <span className="inline-flex items-center gap-1 rounded-full bg-[#FBEAE7] px-2.5 py-1 text-xs font-bold text-[#B3372B]"><ShieldX size={12} /> SANKSI</span>;
  if (status === "DIBLOKIR")
    return <span className="inline-flex items-center gap-1 rounded-full bg-[#FBEAE7] px-2.5 py-1 text-xs font-bold text-[#B3372B]"><ShieldX size={12} /> DIBLOKIR REGISTRI</span>;
  if (status === "TIDAK AKTIF")
    return <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEDE6] px-2.5 py-1 text-xs font-bold text-[#6B6558]"><ShieldX size={12} /> TIDAK AKTIF</span>;
  return <span className="rounded-full bg-ivory px-2.5 py-1 text-xs font-bold text-ink-muted">{status}</span>;
}

export default function NationalDataPage() {
  const [stats, setStats] = useState<R2Stats | null>(null);
  const [sources, setSources] = useState<R2Source[]>([]);
  const [sanctions, setSanctions] = useState<Sanction[]>([]);
  const [companies, setCompanies] = useState<R2Company[]>([]);
  const [facets, setFacets] = useState<{ byType: { type: string; count: number }[]; byProvince: { province: string; count: number }[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState<string | null>(null);
  const [syncMsg, setSyncMsg] = useState<string | null>(null);

  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [province, setProvince] = useState("");
  const [searching, setSearching] = useState(false);

  const loadCompanies = useCallback(async (params: { q?: string; type?: string; status?: string; province?: string }) => {
    setSearching(true);
    const usp = new URLSearchParams();
    if (params.q) usp.set("q", params.q);
    if (params.type) usp.set("type", params.type);
    if (params.status) usp.set("status", params.status);
    if (params.province) usp.set("province", params.province);
    usp.set("limit", "120");
    const r = await fetch(`/api/r2/companies?${usp.toString()}`).then((r) => r.json());
    setCompanies(r.companies ?? []);
    setFacets(r.facets ?? null);
    setSearching(false);
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [r1, r2, r3, r4] = await Promise.all([
        fetch("/api/r2/stats").then((r) => r.json()),
        fetch("/api/r2/sources").then((r) => r.json()),
        fetch("/api/r2/companies?limit=120").then((r) => r.json()),
        fetch("/api/r2/companies?status=SANKSI&limit=50").then((r) => r.json()),
      ]);
      if (!alive) return;
      setStats(r1 as R2Stats);
      setSources(((r2 as { sources?: R2Source[] }).sources ?? []) as R2Source[]);
      setCompanies(((r3 as { companies?: R2Company[] }).companies ?? []) as R2Company[]);
      setFacets((r3 as { facets?: typeof facets }).facets ?? null);
      setSanctions(
        ((r4 as { companies?: R2Company[] }).companies ?? []).map((c) => ({
          id: c.id, companyName: c.name, province: c.province, authority: "Kemenag Jawa Timur",
          sanctionType: "Teguran/Sanksi", year: 2025, sourceUrl: c.sourceRef, note: c.notes,
        }))
      );
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const doSync = async (s: R2Source) => {
    setSyncing(s.id);
    setSyncMsg(null);
    try {
      const res = await fetch("/api/r2/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sourceId: s.id }),
      }).then((r) => r.json());
      if (res.ok) {
        setSyncMsg(`✓ ${s.institution}: ${res.recordsIndexed} record tervalidasi unik — audit trail dicatat.`);
        // refresh panel sumber & statistik setelah sinkronisasi
        const [r1, r2] = await Promise.all([
          fetch("/api/r2/stats").then((r) => r.json()),
          fetch("/api/r2/sources").then((r) => r.json()),
        ]);
        setStats(r1 as R2Stats);
        setSources(((r2 as { sources?: R2Source[] }).sources ?? []) as R2Source[]);
      } else {
        setSyncMsg(`✗ ${res.error ?? "Sinkronisasi gagal"}`);
      }
    } catch {
      setSyncMsg("✗ Jaringan bermasalah — coba lagi.");
    }
    setSyncing(null);
  };

  const filtered = useMemo(() => companies, [companies]);

  const typeCount = (t: string) => stats?.byType.find((x) => x.type === t)?.count ?? 0;
  const statusCount = (s: string) => stats?.byStatus.find((x) => x.status === s)?.count ?? 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      {/* JSON-LD Dataset — SEO terlengkap: data nasional bisa diindeks sebagai dataset */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "Fondasi Data Nasional Penyelenggara Ibadah — SolusiHajj R2",
            description:
              "Basis data riil PPIU, PIHK, BPW, dan KBIHU hasil sinkronisasi dari situs resmi Kemenag, Kementerian Haji dan Umrah (SISKOPATUH), Satu Data Kemenag, Saudi MOHU, Kemenparekraf, HIMPUH, serta situs resmi maskapai haji & umrah.",
            url: "https://solusihajj.com/#/pusat-data",
            keywords: ["PPIU", "PIHK", "BPW", "KBIHU", "izin umrah", "haji khusus", "Kemenag", "Kemenhaj", "SISKOPATUH", "HIMPUH"],
            creator: { "@type": "Organization", name: "SolusiHajj", url: "https://solusihajj.com" },
            isAccessibleForFree: true,
            spatialCoverage: ["Indonesia", "Arab Saudi", "Asia"],
            temporalCoverage: "2017/2025",
          }),
        }}
      />

      {/* HERO */}
      <SectionHeading
        kicker="Rilis R2 — Fondasi Data Nasional"
        title="Database Riil Penyelenggara Ibadah, Ditarik Langsung dari Sumber Resmi"
        sub="SolusiHajj R2 mensinkronkan data PPIU, PIHK, BPW, dan KBIHU dari situs resmi Kementerian Agama, Kementerian Haji dan Umrah (SISKOPATUH), Kementerian Pariwisata, Saudi MOHU, HIMPUH, hingga jaringan maskapai ibadah — semua dengan jejak sumber (provenance) yang bisa Anda audit sendiri."
      />

      {/* STAT CARDS */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {[
          { icon: Building2, label: "Penyelenggara terindeks", value: stats?.companies ?? "…", sub: `${stats?.verified ?? "…"} terverifikasi sumber` },
          { icon: Landmark, label: "Sumber data resmi", value: stats?.sources ?? "…", sub: "Kementerian, asosiasi, maskapai" },
          { icon: Plane, label: "Maskapai ibadah", value: stats?.airlines ?? "…", sub: `${stats?.routes ?? "…"} rute riil` },
          { icon: ShieldX, label: "Catatan sanksi publik", value: stats?.sanctions ?? "…", sub: "Transparansi kepercayaan" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-line-warm bg-card p-4 shadow-green md:p-5">
            <s.icon size={22} className="text-brand" />
            <p className="mt-2 tabular text-2xl font-bold text-ink md:text-3xl">{typeof s.value === "number" ? s.value.toLocaleString("id-ID") : s.value}</p>
            <p className="text-sm font-bold text-ink">{s.label}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* KONTEKS INDUSTRI RIIL */}
      {stats && (
        <div className="mt-4 rounded-2xl border border-[#C9A227]/30 bg-[#FAF5E4] p-4 md:p-5">
          <p className="text-sm font-bold text-ink">Konteks industri nasional (riset 2025–2026):</p>
          <ul className="mt-2 grid gap-1.5 text-[15px] text-ink md:grid-cols-3">
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" /> <span><b className="tabular">{stats.context.ppiuSiskopatuh.toLocaleString("id-ID")}</b> PPIU + <b className="tabular">{stats.context.pihkSiskopatuh.toLocaleString("id-ID")}</b> PIHK di registri SISKOPATUH (Kemenhaj) — <b>seluruhnya telah tersinkron ke database kita</b></span></li>
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" /> <span>Kuota haji khusus 2025: <b className="tabular">{stats.context.kuotaHajiKhusus2025.toLocaleString("id-ID")}</b> jamaah</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" /> <span>PIHK wajib <b>{stats.context.petugasPer45Jamaah}</b> petugas per 45 jamaah</span></li>
          </ul>
        </div>
      )}

      {/* PUSAT SUMBER & SINKRONISASI */}
      <div className="mt-12">
        <SectionHeading
          kicker="Pipeline sinkronisasi"
          title="Sumber Data yang Dipantau Platform"
          sub="Setiap sumber punya jejak audit: kapan terakhir disinkronkan, berapa record yang terindeks, dan tautan aslinya. Tekan 'Sinkronkan' untuk menjalankan ulang validasi pipeline R2."
        />
        {syncMsg && (
          <div className="mt-4 rounded-xl border border-brand/30 bg-brand-soft px-4 py-3 text-sm font-semibold text-ink" role="status">{syncMsg}</div>
        )}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading && <p className="text-ink-muted">Memuat sumber…</p>}
          {sources.map((s) => (
            <div key={s.id} className="flex flex-col rounded-2xl border border-line-warm bg-card p-5 shadow-green">
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
                  {CAT_LABEL[s.category] ?? s.category}
                </span>
                {s.country !== "ID" && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ink-muted"><Globe2 size={12} /> {s.country}</span>
                )}
              </div>
              <h3 className="mt-3 font-bold leading-snug text-ink">{s.name}</h3>
              <p className="mt-1 text-xs font-semibold text-brand">{s.institution}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.description}</p>
              <div className="mt-3 flex items-center gap-3 border-t border-line-warm pt-3 text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1"><Database size={12} /> <b className="tabular text-ink">{s.recordsIndexed}</b> record</span>
                <span className="inline-flex items-center gap-1"><Clock size={12} /> {fmtDate(s.lastSyncedAt)}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => doSync(s)}
                  disabled={syncing === s.id}
                  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-3 text-sm font-bold text-ivory transition-colors hover:bg-brand-deep disabled:opacity-60"
                >
                  {syncing === s.id ? <Loader2 size={15} className="animate-spin" /> : <RefreshCw size={15} />}
                  {syncing === s.id ? "Menyinkronkan…" : "Sinkronkan"}
                </button>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-line-warm px-3 text-sm font-bold text-ink transition-colors hover:border-brand/50"
                  aria-label={`Buka situs ${s.institution}`}
                >
                  <ExternalLink size={14} /> Sumber
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIREKTORI NASIONAL DB-BACKED */}
      <div className="mt-12">
        <SectionHeading
          kicker="Direktori nasional — live dari database"
          title={`Telusuri ${stats?.companies?.toLocaleString("id-ID") ?? ""} Penyelenggara Tersinkron`}
          sub="Data riil dengan nomor izin, alamat kantor, pimpinan, dan sumber rujukan. Filter berdasarkan jenis penyelenggara, provinsi, dan status izin."
        />

        {/* filter bar */}
        <div className="mt-6 rounded-2xl border border-line-warm bg-card p-4 shadow-green md:p-5">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && loadCompanies({ q, type, status, province })}
                placeholder="Cari nama, merek dagang, nomor KMA, atau kota…"
                aria-label="Cari penyelenggara"
                className="h-12 w-full rounded-xl border border-line-warm bg-white pl-10 pr-4 text-[16px] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button
              onClick={() => loadCompanies({ q, type, status, province })}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-bold text-ivory transition-colors hover:bg-brand-deep"
            >
              {searching ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />} Cari
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => { setType(""); loadCompanies({ q, status, province }); }}
              className={cn("min-h-10 rounded-full border px-3.5 text-sm font-semibold transition-colors", !type ? "border-brand bg-brand text-ivory" : "border-line-warm bg-ivory text-ink hover:border-brand/50")}
            >
              Semua ({stats?.companies ?? 0})
            </button>
            {["PPIU", "PIHK"].map((t) => (
              <button
                key={t}
                onClick={() => { setType(t); loadCompanies({ q, type: t, status, province }); }}
                className={cn("min-h-10 rounded-full border px-3.5 text-sm font-semibold transition-colors", type === t ? "border-brand bg-brand text-ivory" : "border-line-warm bg-ivory text-ink hover:border-brand/50")}
              >
                {ORG_LABEL[t]} ({typeCount(t)})
              </button>
            ))}
            <button
              onClick={() => { setStatus(status === "DIBLOKIR" ? "" : "DIBLOKIR"); loadCompanies({ q, type, status: status === "DIBLOKIR" ? "" : "DIBLOKIR", province }); }}
              className={cn("min-h-10 rounded-full border px-3.5 text-sm font-semibold transition-colors", status === "DIBLOKIR" ? "border-[#B3372B] bg-[#B3372B] text-white" : "border-line-warm bg-ivory text-ink hover:border-brand/50")}
            >
              Diblokir ({statusCount("DIBLOKIR")})
            </button>
            <button
              onClick={() => { setStatus(status === "SANKSI" ? "" : "SANKSI"); loadCompanies({ q, type, status: status === "SANKSI" ? "" : "SANKSI", province }); }}
              className={cn("min-h-10 rounded-full border px-3.5 text-sm font-semibold transition-colors", status === "SANKSI" ? "border-[#B3372B] bg-[#B3372B] text-white" : "border-line-warm bg-ivory text-ink hover:border-brand/50")}
            >
              Sanksi ({statusCount("SANKSI")})
            </button>
            <button
              onClick={() => { setStatus(status === "BARU" ? "" : "BARU"); loadCompanies({ q, type, status: status === "BARU" ? "" : "BARU", province }); }}
              className={cn("min-h-10 rounded-full border px-3.5 text-sm font-semibold transition-colors", status === "BARU" ? "border-[#B7791F] bg-[#B7791F] text-white" : "border-line-warm bg-ivory text-ink hover:border-brand/50")}
            >
              Izin Baru 2025 ({statusCount("BARU")})
            </button>
          </div>
          {facets && facets.byProvince.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink-muted"><MapPin size={12} /> Provinsi:</span>
              {facets.byProvince.slice(0, 10).map((p) => (
                <button
                  key={p.province}
                  onClick={() => { setProvince(province === p.province ? "" : p.province); loadCompanies({ q, type, status, province: province === p.province ? "" : p.province }); }}
                  className={cn("min-h-9 rounded-full border px-3 text-xs font-semibold transition-colors", province === p.province ? "border-brand bg-brand-soft text-brand" : "border-line-warm bg-ivory text-ink-muted hover:border-brand/40")}
                >
                  {p.province} ({p.count})
                </button>
              ))}
            </div>
          )}
        </div>

        {/* hasil tabel */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-line-warm bg-card shadow-green">
          {searching ? (
            <div className="flex items-center justify-center gap-3 p-12 text-ink-muted"><Loader2 size={20} className="animate-spin" /> Memuat data nasional…</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-ink-muted">Tidak ada penyelenggara yang cocok. Coba kata kunci lain — atau verifikasi manual di SIMPU Kemenag.</div>
          ) : (
            <div className="max-h-[32rem] overflow-y-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="sticky top-0 bg-brand text-ivory">
                  <tr>
                    <th className="px-4 py-3 font-bold">Penyelenggara</th>
                    <th className="px-4 py-3 font-bold">Jenis</th>
                    <th className="px-4 py-3 font-bold">Izin / Status</th>
                    <th className="px-4 py-3 font-bold">Lokasi</th>
                    <th className="px-4 py-3 font-bold">Sumber</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.id} className="border-t border-line-warm align-top hover:bg-brand-soft/40">
                      <td className="px-4 py-3">
                        <p className="font-bold text-ink">{c.name}</p>
                        {c.brandName && c.brandName !== c.name && <p className="text-xs text-ink-muted">Merek: {c.brandName}</p>}
                        {c.leader && <p className="text-xs text-ink-muted">Pimpinan: {c.leader}</p>}
                        {c.phone && <p className="text-xs text-ink-muted">{c.phone}</p>}
                      </td>
                      <td className="px-4 py-3"><span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{ORG_LABEL[c.orgType] ?? c.orgType}</span></td>
                      <td className="px-4 py-3">
                        <StatusChip status={c.status} />
                        {c.licenseNo && <p className="mt-1 text-xs text-ink-muted">{c.licenseNo}</p>}
                        {c.dataAsOf && <p className="text-[11px] text-ink-muted">Data per: {c.dataAsOf}</p>}
                      </td>
                      <td className="px-4 py-3 text-xs text-ink">
                        <p className="font-semibold">{c.city ?? "—"}</p>
                        <p className="text-ink-muted">{c.province ?? c.country}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-ink">{c.sourceInstitution}</p>
                        {c.sourceRef && (
                          <a href={c.sourceRef} target="_blank" rel="noopener noreferrer" className="mt-0.5 inline-flex items-center gap-1 text-xs text-brand hover:underline">
                            <ExternalLink size={11} /> Verifikasi asli
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="border-t border-line-warm bg-ivory px-4 py-3 text-xs text-ink-muted">
            Menampilkan {filtered.length} dari {stats?.companies ?? 0} record database riil. Jejak sumber dijamin: setiap baris berasal dari dokumen/situs resmi yang tertaut.
          </div>
        </div>
      </div>

      {/* SANKSI */}
      <div className="mt-12">
        <SectionHeading
          kicker="Transparansi kepercayaan"
          title="Daftar Sanksi & Teguran Publik"
          sub="Bagian dari janji SolusiHajj: kami menampilkan juga yang bermasalah. Sebelum transaksi, periksa catatan sanksi dari otoritas resmi."
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {sanctions.map((s) => (
            <div key={s.id} className="flex items-start gap-3 rounded-2xl border border-[#B3372B]/30 bg-[#FBEAE7] p-4">
              <ShieldAlert size={22} className="mt-0.5 shrink-0 text-[#B3372B]" />
              <div>
                <p className="font-bold text-ink">{s.companyName}</p>
                <p className="text-sm text-ink-muted">{s.authority} · {s.sanctionType} · {s.year} · {s.province}</p>
                {s.note && <p className="mt-1 text-xs leading-relaxed text-ink-muted">{s.note}</p>}
                {s.sourceUrl && (
                  <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#B3372B] hover:underline">
                    <ExternalLink size={11} /> Lihat pengumuman resmi
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-brand p-6 text-center md:p-10">
        <h3 className="text-xl font-bold text-ivory md:text-2xl">Ingin memastikan travel impian Anda aman?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-[17px] text-ivory/80">
          Gunakan tool publik kami untuk cek izin, atau langsung jelajahi paket dari penyelenggara terverifikasi dengan perlindungan escrow.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link to="/verifikasi/cek-izin-ppiu" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-ivory px-6 font-bold text-brand transition-colors hover:bg-white">
            <ShieldCheck size={18} /> Cek Izin PPIU
          </Link>
          <Link to="/ppiu" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-ivory/40 px-6 font-bold text-ivory transition-colors hover:bg-ivory/10">
            <Building2 size={18} /> Direktori Asia
          </Link>
        </div>
      </div>
    </div>
  );
}
