"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ShieldCheck, Landmark, FileSignature, Unlock, AlertTriangle, RefreshCcw, HandCoins,
  Clock, CheckCircle2, Loader2, Search, ChevronRight, X, History, Wallet, Building2, CalendarDays, Users,
} from "lucide-react";
import { SectionHeading } from "../ui-bits";
import { Link } from "@/lib/solusihajj/router";
import { cn } from "@/lib/utils";

/**
 * R3 — "Pusat AmanahEscrow" (escrow AKTIF, bukan simulasi)
 * Kontrak nyata di database: buat → danai → rilis 40/40/20 (dual-control)
 * → sengketa/refund, lengkap audit trail. Dana direpresentasikan VA escrow
 * pihak ketiga (produksi: integrasi bank syariah — dok 23 security).
 */

interface Milestone {
  id: string;
  seq: number;
  label: string;
  percent: number;
  amount: number;
  status: string;
  trigger: string;
  actedAt: string | null;
  note: string | null;
}
interface EventRow {
  id: string;
  actor: string;
  action: string;
  detail: string;
  createdAt: string;
}
interface CompanyLite {
  id: string;
  name: string;
  orgType: string;
  city: string | null;
  province: string | null;
  status: string;
}
interface Contract {
  id: string;
  ref: string;
  jamaahName: string;
  packageTitle: string;
  departDate: string | null;
  paxCount: number;
  totalAmount: number;
  status: string;
  fundedAmount: number;
  releasedAmount: number;
  depositRef: string | null;
  company: CompanyLite;
  milestones: Milestone[];
  events?: EventRow[];
}
interface Volume {
  totalUnder: number;
  funded: number;
  released: number;
  held: number;
}

const rupiah = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

const STATUS_STYLE: Record<string, { chip: string; label: string }> = {
  DRAFT: { chip: "bg-[#F0EEE6] text-ink-muted", label: "DRAFT — menunggu setoran" },
  FUNDED: { chip: "bg-[#E7F0EC] text-[#1E7F4F]", label: "DANA DITAHAN" },
  PARTIAL_RELEASE: { chip: "bg-[#F5EEDA] text-[#B7791F]", label: "SEBAGIAN CAIR" },
  SETTLED: { chip: "bg-[#E7F0EC] text-[#1E7F4F]", label: "SELESAI" },
  DISPUTED: { chip: "bg-[#FBEAE7] text-[#B3372B]", label: "SENGKETA" },
  REFUNDED: { chip: "bg-[#F0EEE6] text-ink-muted", label: "DANA KEMBALI" },
};
const ACTOR_STYLE: Record<string, string> = {
  JAMAAH: "bg-brand-soft text-brand",
  OPERATOR: "bg-[#F5EEDA] text-[#8a6a1f]",
  PLATFORM: "bg-[#E7F0EC] text-[#1E7F4F]",
  DUAL_CONTROL: "bg-gold/15 text-gold-deep",
};
const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

function StatusChip({ status }: { status: string }) {
  const s = STATUS_STYLE[status] ?? { chip: "bg-ivory text-ink-muted", label: status };
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold", s.chip)}>{s.label}</span>;
}

export default function EscrowLivePage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [volume, setVolume] = useState<Volume | null>(null);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState<CompanyLite[]>([]);
  const [opQuery, setOpQuery] = useState("");
  const [opPick, setOpPick] = useState<CompanyLite | null>(null);
  const [opOpen, setOpOpen] = useState(false);

  const [form, setForm] = useState({ jamaahName: "", packageTitle: "", totalAmount: "", paxCount: "2", departDate: "" });
  const [submitting, setSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState<string | null>(null);

  const [detail, setDetail] = useState<Contract | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [acting, setActing] = useState<string | null>(null);
  const [actionMsg, setActionMsg] = useState<string | null>(null);
  const [disputeNote, setDisputeNote] = useState("");
  const [showDispute, setShowDispute] = useState(false);
  const aliveRef = useRef(true);
  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const loadList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/r3/escrow?limit=50");
      const data = await res.json();
      if (!aliveRef.current) return;
      setContracts(data.contracts ?? []);
      setVolume(data.volume ?? null);
    } finally {
      if (aliveRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadList();
    // muat penyelenggara untuk dropdown kontrak
    fetch("/api/r2/companies?limit=500")
      .then((r) => r.json())
      .then((d) => {
        if (aliveRef.current) setCompanies(d.companies ?? []);
      })
      .catch(() => {});
  }, [loadList]);

  const openDetail = async (id: string) => {
    setDetailLoading(true);
    setActionMsg(null);
    setShowDispute(false);
    setDisputeNote("");
    try {
      const res = await fetch(`/api/r3/escrow/${id}`);
      const data = await res.json();
      if (aliveRef.current) setDetail(data.contract ?? null);
    } finally {
      if (aliveRef.current) setDetailLoading(false);
    }
  };

  const act = async (action: string, extra: Record<string, unknown> = {}) => {
    if (!detail) return;
    setActing(action + (extra.seq ?? ""));
    setActionMsg(null);
    try {
      const res = await fetch(`/api/r3/escrow/${detail.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...extra }),
      });
      const data = await res.json();
      if (!res.ok) {
        setActionMsg(data.error ?? "Aksi gagal");
        return;
      }
      setDetail(data.contract);
      setActionMsg("OK — tercatat di audit trail.");
      loadList();
    } finally {
      setActing(null);
    }
  };

  const submitContract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!opPick) {
      setFormMsg("Pilih penyelenggara dari daftar dulu, ya.");
      return;
    }
    setSubmitting(true);
    setFormMsg(null);
    try {
      const res = await fetch("/api/r3/escrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jamaahName: form.jamaahName,
          companyId: opPick.id,
          packageTitle: form.packageTitle,
          totalAmount: Number(form.totalAmount.replace(/[^\d]/g, "")),
          paxCount: Number(form.paxCount),
          departDate: form.departDate || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormMsg(data.error ?? "Gagal membuat kontrak");
        return;
      }
      setFormMsg(`Kontrak ${data.contract.ref} dibuat — langkah berikutnya: setor dana ke VA escrow.`);
      setForm({ jamaahName: "", packageTitle: "", totalAmount: "", paxCount: "2", departDate: "" });
      setOpPick(null);
      setOpQuery("");
      loadList();
    } finally {
      setSubmitting(false);
    }
  };

  const filteredOps = opQuery
    ? companies
        .filter(
          (c) =>
            (c.orgType === "PPIU" || c.orgType === "PIHK") &&
            c.name.toLowerCase().includes(opQuery.toLowerCase())
        )
        .slice(0, 8)
    : [];

  const releasedPct = (c: Contract) =>
    c.totalAmount > 0 ? Math.round((c.releasedAmount / c.totalAmount) * 100) : 0;

  return (
    <div className="bg-ivory pb-20 dark:bg-[#0d2b23]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AmanahEscrow R3 — Escrow Pembayaran Umrah Aktif",
            serviceType: "Escrow pembayaran paket ibadah",
            provider: { "@type": "Organization", name: "SolusiHajj", url: "https://solusihajj.com" },
            description:
              "Dana paket umrah ditahan rekening escrow pihak ketiga dan cair bertahap 40/40/20 mengikuti progres perjalanan, dengan dual-control dan audit trail penuh.",
            areaServed: "Asia",
          }),
        }}
      />

      {/* HERO */}
      <section className="border-b border-line-warm bg-gradient-to-b from-brand-soft/60 to-ivory py-14 dark:border-white/10 dark:from-white/5 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            kicker="R3 — SUDAH AKTIF, BUKAN SIMULASI"
            title="Pusat AmanahEscrow"
            sub="Dana jamaah ditahan rekening escrow pihak ketiga — bukan rekening travel. Cair bertahap 40/40/20 mengikuti progres ibadah: visa & tiket terbit, keberangkatan, lalu settlement pasca pulang. Setiap aksi lewat dual-control dan tercatat permanen."
          />
          {volume && (
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Dana di bawah kontrak", value: rupiah(volume.totalUnder), icon: FileSignature },
                { label: "Sedang ditahan escrow", value: rupiah(volume.held), icon: Landmark, strong: true },
                { label: "Sudah cair ke operator", value: rupiah(volume.released), icon: HandCoins },
                { label: "Kontrak aktif", value: String(contracts.length), icon: Wallet },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-line-warm bg-card p-4 shadow-card dark:border-white/10 dark:bg-white/5">
                  <s.icon size={18} className="text-gold-deep dark:text-gold" />
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-ink-muted">{s.label}</p>
                  <p className={cn("mt-1 text-sm font-extrabold leading-tight", s.strong ? "text-brand dark:text-gold" : "text-ink")}>{s.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* ================= FORM BUKA KONTRAK ================= */}
          <aside className="h-fit rounded-3xl border border-line-warm bg-card p-6 shadow-card lg:sticky lg:top-24 dark:border-white/10 dark:bg-white/5">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink dark:text-ivory">
              <FileSignature size={20} className="text-gold-deep dark:text-gold" /> Buka Kontrak Baru
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Jamaah & penyelenggara sepakat → dana masuk VA escrow → rilis otomatis 40/40/20.
            </p>
            <form onSubmit={submitContract} className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-jamaah">Nama Jamaah</label>
                <input
                  id="esc-jamaah"
                  value={form.jamaahName}
                  onChange={(e) => setForm({ ...form, jamaahName: e.target.value })}
                  placeholder="mis. H. Ahmad Fauzi"
                  required
                  minLength={3}
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-[15px] outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                />
              </div>

              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-op">Penyelenggara (database nasional)</label>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-line-warm bg-white px-4 py-3 dark:border-white/15 dark:bg-white/10">
                  <Search size={16} className="shrink-0 text-ink-muted" />
                  <input
                    id="esc-op"
                    value={opPick ? opPick.name : opQuery}
                    onChange={(e) => {
                      setOpPick(null);
                      setOpQuery(e.target.value);
                      setOpOpen(true);
                    }}
                    onFocus={() => setOpOpen(true)}
                    placeholder="Cari PPIU/PIHK…"
                    className="w-full bg-transparent text-[15px] outline-none dark:text-ivory"
                  />
                  {opPick && (
                    <button type="button" onClick={() => { setOpPick(null); setOpQuery(""); }} aria-label="Reset pilihan">
                      <X size={16} className="text-ink-muted" />
                    </button>
                  )}
                </div>
                {opOpen && !opPick && filteredOps.length > 0 && (
                  <div className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-line-warm bg-white shadow-warm dark:border-white/15 dark:bg-[#12332a]">
                    {filteredOps.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => { setOpPick(c); setOpOpen(false); }}
                        className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/10"
                      >
                        <span className="font-semibold">{c.name}</span>
                        <span className="shrink-0 text-xs text-ink-muted">{c.orgType} • {c.status}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-pkg">Judul Paket</label>
                <input
                  id="esc-pkg"
                  value={form.packageTitle}
                  onChange={(e) => setForm({ ...form, packageTitle: e.target.value })}
                  placeholder="mis. Umrah Reguler 9 Hari — Madinah First"
                  required
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-[15px] outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-amount">Total Harga (Rp)</label>
                  <input
                    id="esc-amount"
                    inputMode="numeric"
                    value={form.totalAmount}
                    onChange={(e) => setForm({ ...form, totalAmount: e.target.value.replace(/[^\d]/g, "") })}
                    placeholder="32500000"
                    required
                    className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-[15px] outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-pax">Jumlah Jamaah</label>
                  <input
                    id="esc-pax"
                    type="number"
                    min={1}
                    max={40}
                    value={form.paxCount}
                    onChange={(e) => setForm({ ...form, paxCount: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-[15px] outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-ink-muted" htmlFor="esc-date">Rencana Keberangkatan</label>
                <input
                  id="esc-date"
                  type="date"
                  value={form.departDate}
                  onChange={(e) => setForm({ ...form, departDate: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-line-warm bg-white px-4 py-3 text-[15px] outline-none focus:border-brand dark:border-white/15 dark:bg-white/10 dark:text-ivory"
                />
              </div>

              {formMsg && (
                <p className={cn("rounded-xl px-4 py-3 text-sm font-semibold", formMsg.startsWith("Kontrak") ? "bg-[#E7F0EC] text-[#1E7F4F]" : "bg-[#FBEAE7] text-[#B3372B]")}>
                  {formMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-[15px] font-bold text-white transition-colors hover:bg-brand-deep disabled:opacity-60"
              >
                {submitting ? <Loader2 size={18} className="animate-spin" /> : <FileSignature size={18} />}
                {submitting ? "Memproses…" : "Buat Kontrak Escrow"}
              </button>
              <p className="text-center text-xs text-ink-muted">
                Pratinjau rilis: <b>40%</b> saat visa+tiket • <b>40%</b> saat berangkat • <b>20%</b> pasca pulang
              </p>
            </form>
          </aside>

          {/* ================= DAFTAR KONTRAK ================= */}
          <section aria-label="Daftar kontrak escrow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-ink dark:text-ivory">Kontrak Terdaftar</h2>
              <button onClick={loadList} className="inline-flex h-10 items-center gap-2 rounded-xl border border-line-warm px-4 text-sm font-bold text-brand hover:bg-brand-soft dark:border-white/15 dark:text-gold" disabled={loading}>
                {loading ? <Loader2 size={15} className="animate-spin" /> : <RefreshCcw size={15} />} Muat ulang
              </button>
            </div>

            {!loading && contracts.length === 0 && (
              <div className="rounded-2xl border border-dashed border-line-warm p-10 text-center text-ink-muted dark:border-white/15">
                Belum ada kontrak. Buka kontrak pertama lewat formulir di samping.
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {contracts.map((c) => (
                <article key={c.id} className="flex flex-col rounded-2xl border border-line-warm bg-card p-5 shadow-card transition-shadow hover:shadow-warm dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold tracking-wide text-ink-muted">{c.ref}</p>
                      <h3 className="mt-0.5 font-extrabold leading-snug text-ink dark:text-ivory">{c.packageTitle}</h3>
                    </div>
                    <StatusChip status={c.status} />
                  </div>
                  <dl className="mt-3 space-y-1 text-sm text-ink-muted">
                    <div className="flex items-center gap-2"><Users size={14} /> {c.jamaahName} • {c.paxCount} jamaah</div>
                    <div className="flex items-center gap-2"><Building2 size={14} /> {c.company.name}</div>
                    {c.departDate && <div className="flex items-center gap-2"><CalendarDays size={14} /> Rencana berangkat {c.departDate}</div>}
                  </dl>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-ink-muted">Rilis {releasedPct(c)}%</span>
                      <span className="text-ink">{rupiah(c.releasedAmount)} / {rupiah(c.totalAmount)}</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ivory dark:bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand to-gold transition-all" style={{ width: `${Math.max(releasedPct(c), 2)}%` }} />
                    </div>
                  </div>
                  <button
                    onClick={() => openDetail(c.id)}
                    className="mt-4 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-brand/30 bg-brand-soft text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white dark:border-gold/40 dark:text-gold dark:hover:bg-gold dark:hover:text-ink"
                  >
                    Kelola & Lihat Audit Trail <ChevronRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ================= PANEL DETAIL (dialog) ================= */}
      {(detailLoading || detail) && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setDetail(null)} role="dialog" aria-modal="true" aria-label="Detail kontrak escrow">
          {detailLoading && (
            <div className="flex h-40 w-full max-w-2xl items-center justify-center rounded-t-3xl bg-card sm:rounded-3xl">
              <Loader2 size={28} className="animate-spin text-brand" />
            </div>
          )}
          {!detailLoading && detail && (
            <div
              className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-card p-6 shadow-warm sm:rounded-3xl dark:bg-[#12332a]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-wide text-ink-muted">{detail.ref}</p>
                  <h3 className="text-xl font-extrabold text-ink dark:text-ivory">{detail.packageTitle}</h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {detail.jamaahName} • {detail.paxCount} jamaah • {detail.company.name}
                    {detail.departDate ? ` • berangkat ${detail.departDate}` : ""}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusChip status={detail.status} />
                  <button onClick={() => setDetail(null)} aria-label="Tutup" className="rounded-full p-2 hover:bg-ivory dark:hover:bg-white/10"><X size={18} /></button>
                </div>
              </div>

              {detail.depositRef && (
                <p className="mt-3 rounded-xl bg-ivory px-4 py-2 text-xs font-semibold text-ink-muted dark:bg-white/5">
                  VA Escrow: {detail.depositRef} • Dana ditahan {rupiah(detail.fundedAmount)} • Cair {rupiah(detail.releasedAmount)}
                </p>
              )}

              {/* MILESTONE 40/40/20 */}
              <ol className="mt-5 space-y-3">
                {detail.milestones.map((m) => (
                  <li key={m.id} className={cn("rounded-2xl border p-4", m.status === "RELEASED" ? "border-brand/30 bg-[#E7F0EC]/60" : m.status === "DISPUTED" ? "border-[#B3372B]/30 bg-[#FBEAE7]/60" : m.status === "REFUNDED" ? "border-line-warm bg-ivory" : "border-line-warm bg-ivory dark:border-white/10 dark:bg-white/5")}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-bold text-ink dark:text-ivory">{m.seq}. {m.label} <span className="text-gold-deep dark:text-gold">({m.percent}%)</span></p>
                      <span className="text-sm font-extrabold text-ink dark:text-ivory">{rupiah(m.amount)}</span>
                    </div>
                    <p className="mt-1 text-xs text-ink-muted">{m.trigger}</p>
                    {m.note && <p className="mt-1 text-xs italic text-ink-muted">Catatan: {m.note}</p>}
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold",
                        m.status === "RELEASED" ? "bg-[#1E7F4F] text-white" : m.status === "DISPUTED" ? "bg-[#B3372B] text-white" : "bg-white text-ink-muted dark:bg-white/10 dark:text-ivory")}>
                        {m.status === "RELEASED" && <CheckCircle2 size={12} />}
                        {m.status === "HELD" && <LockIcon />}
                        {m.status === "DISPUTED" && <AlertTriangle size={12} />}
                        {m.status === "REFUNDED" && <HandCoins size={12} />}
                        {m.status}
                        {m.actedAt ? ` • ${fmtDate(m.actedAt)}` : ""}
                      </span>
                      {m.status === "HELD" && ["FUNDED", "PARTIAL_RELEASE"].includes(detail.status) && (
                        <button
                          onClick={() => act("RELEASE", { seq: m.seq })}
                          disabled={acting !== null}
                          className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-brand px-3 text-xs font-bold text-white hover:bg-brand-deep disabled:opacity-60"
                        >
                          {acting === "RELEASE" + m.seq ? <Loader2 size={13} className="animate-spin" /> : <Unlock size={13} />}
                          Ajukan Rilis (dual-control)
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              {/* AKSI UTAMA */}
              <div className="mt-5 flex flex-wrap gap-2">
                {detail.status === "DRAFT" && (
                  <button onClick={() => act("FUND")} disabled={acting !== null} className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand px-4 text-sm font-bold text-white hover:bg-brand-deep disabled:opacity-60">
                    {acting === "FUND" ? <Loader2 size={15} className="animate-spin" /> : <Landmark size={15} />}
                    Setor Dana Penuh ke Escrow
                  </button>
                )}
                {["FUNDED", "PARTIAL_RELEASE"].includes(detail.status) && !showDispute && (
                  <button onClick={() => setShowDispute(true)} className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#B3372B]/40 px-4 text-sm font-bold text-[#B3372B] hover:bg-[#FBEAE7]">
                    <AlertTriangle size={15} /> Ajukan Sengketa
                  </button>
                )}
                {detail.status === "DISPUTED" && (
                  <button onClick={() => act("RESOLVE", { note: disputeNote || "Kedua pihak sepakat melanjutkan kontrak tanpa klaim" })} disabled={acting !== null} className="inline-flex h-11 items-center gap-2 rounded-xl border border-brand/40 px-4 text-sm font-bold text-brand hover:bg-brand-soft disabled:opacity-60">
                    <RefreshCcw size={15} /> {acting === "RESOLVE" ? "Memproses…" : "Tandai Sepakat (Resolusi)"}
                  </button>
                )}
                {["FUNDED", "PARTIAL_RELEASE", "DISPUTED"].includes(detail.status) && (
                  <button onClick={() => act("REFUND", { note: "Refund atas permintaan jamaah" })} disabled={acting !== null} className="inline-flex h-11 items-center gap-2 rounded-xl border border-line-warm px-4 text-sm font-bold text-ink-muted hover:bg-ivory dark:border-white/15 dark:text-ivory/80 disabled:opacity-60">
                    <HandCoins size={15} /> {acting === "REFUND" ? "Memproses…" : "Refund Sisa Dana"}
                  </button>
                )}
              </div>

              {showDispute && (
                <div className="mt-3 rounded-2xl border border-[#B3372B]/30 bg-[#FBEAE7]/50 p-4">
                  <label className="text-xs font-bold uppercase tracking-wide text-[#B3372B]" htmlFor="esc-dispute">Jelaskan masalahnya (min. 10 karakter)</label>
                  <textarea
                    id="esc-dispute"
                    value={disputeNote}
                    onChange={(e) => setDisputeNote(e.target.value)}
                    rows={2}
                    placeholder="mis. Hotel tidak sesuai kontrak, diganti jauh dari Haram"
                    className="mt-1 w-full rounded-xl border border-[#B3372B]/30 bg-white px-4 py-3 text-sm outline-none"
                  />
                  <div className="mt-2 flex gap-2">
                    <button onClick={() => { act("DISPUTE", { note: disputeNote }); setShowDispute(false); }} disabled={acting !== null || disputeNote.trim().length < 10} className="h-10 rounded-xl bg-[#B3372B] px-4 text-sm font-bold text-white disabled:opacity-60">
                      Kirim Sengketa
                    </button>
                    <button onClick={() => setShowDispute(false)} className="h-10 rounded-xl border border-line-warm px-4 text-sm font-bold text-ink-muted">Batal</button>
                  </div>
                </div>
              )}

              {actionMsg && <p className="mt-3 rounded-xl bg-[#E7F0EC] px-4 py-2 text-sm font-semibold text-[#1E7F4F]">{actionMsg}</p>}

              {/* AUDIT TRAIL */}
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-ink-muted"><History size={15} /> Audit Trail — Saksi Jamaah</h4>
                <ol className="mt-3 space-y-2.5 border-l-2 border-line-warm pl-4 dark:border-white/15">
                  {[...(detail.events ?? [])].reverse().map((ev) => (
                    <li key={ev.id} className="relative">
                      <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold", ACTOR_STYLE[ev.actor] ?? "bg-ivory text-ink-muted")}>{ev.actor}</span>
                        <span className="text-xs font-bold text-ink dark:text-ivory">{ev.action}</span>
                        <span className="text-[11px] text-ink-muted">{fmtDate(ev.createdAt)}</span>
                      </div>
                      <p className="mt-0.5 text-sm text-ink-muted">{ev.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mt-6 rounded-2xl bg-brand-soft px-4 py-3 text-xs leading-relaxed text-brand dark:bg-white/5 dark:text-ivory/80">
                <ShieldCheck size={13} className="mr-1 inline" />
                Prinsip Amanah: operator <b>tidak pernah</b> menyentuh dana sebelum syarat rilis terpenuhi. Produksi penuh: VA bank syariah + penyelesaian sengketa berbasis bukti (dok 23 Security & Protocol).
              </p>
            </div>
          )}
        </div>
      )}

      {/* EDUKASI BAWAH */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Landmark, t: "Rekening penampungan pihak ketiga", d: "Dana masuk rekening escrow bank syariah atas nama platform — bukan rekening travel. Travel tidak bisa menarik sewenang-wenang." },
            { icon: Unlock, t: "Dual-control 40/40/20", d: "Rilis butuh dua kunci: permintaan operator + persetujuan platform. Jamaah melihat setiap langkah secara real-time." },
            { icon: Clock, t: "Settlement & Saksi Jamaah", d: "20% terakhir hanya cair setelah jamaah pulang dan masa review 7 hari berlalu tanpa sengketa — insentif layanan terbaik." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card dark:border-white/10 dark:bg-white/5">
              <x.icon size={20} className="text-gold-deep dark:text-gold" />
              <h3 className="mt-2 font-extrabold text-ink dark:text-ivory">{x.t}</h3>
              <p className="mt-1 text-sm text-ink-muted">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">
          Baru tahu istilah escrow? Baca penjelasannya di{" "}
          <Link to="/glosarium" className="font-bold text-brand underline decoration-gold dark:text-gold">Glosarium</Link>{" "}
          atau lihat alur lengkapnya di halaman{" "}
          <Link to="/escrow" className="font-bold text-brand underline decoration-gold dark:text-gold">AmanahEscrow</Link>.
        </p>
      </section>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    </svg>
  );
}
