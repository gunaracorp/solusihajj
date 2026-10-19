"use client";

import { useState } from "react";
import {
  FileSearch,
  Building2,
  Banknote,
  UserRoundCheck,
  Eye,
  Search,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Clock,
  ExternalLink,
  Landmark,
  LockKeyhole,
  Scale,
  Banknote as CashIcon,
  Home,
  PlaneTakeoff,
} from "lucide-react";
import { licenseMaster, ppiuList } from "@/data/ppiu";
import type { LicenseRecord } from "@/data/types";
import { formatDate, waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link } from "@/lib/solusihajj/router";
import { Breadcrumb } from "../chrome";
import { SectionHeading, ShieldBadge, EscrowTimeline, WaButton } from "../ui-bits";
import { cn } from "@/lib/utils";

/* ================= HALAMAN VERIFIKASI 5 LAPIS ================= */
export function VerifyPage() {
  const layers = [
    {
      icon: FileSearch,
      title: "Lapis 1 — Cek Izin Resmi Kemenag",
      detail:
        "Kami memeriksa keabsahan izin PPIU langsung ke basis data Kementerian Agama: status aktif, masa berlaku, wilayah kerja, dan kesesuaian nama badan hukum. Nomor izin kemudian dipublikasikan di halaman toko masing-masing PPIU — Anda bebas mencocokkannya sendiri ke kanal resmi.",
    },
    {
      icon: Building2,
      title: "Lapis 2 — Audit Kantor Fisik",
      detail:
        "Tim kami mengunjungi alamat kantor PPIU tanpa pemberitahuan jadwal pasti. Yang kami periksa: operasional berjalan nyata (bukan kios kosong), staf tetap yang mengenal produk, dokumentasi kontrak jamaah yang rapi, dan kesesuaian alamat dengan dokumen izin.",
    },
    {
      icon: Banknote,
      title: "Lapis 3 — Legalitas & Rekening Perusahaan",
      detail:
        "Badan hukum (PT/CV) dicek ke kembarannya: akta pendirian, pengesahan Kemenkumham, dan NPWP. Rekening penerima dana jamaah harus atas nama badan hukum — transfer ke rekening pribadi adalah red flag terbesar yang kami tolak tegas.",
    },
    {
      icon: UserRoundCheck,
      title: "Lapis 4 — Track Record Jamaah Nyata",
      detail:
        "Kami menuntut minimal 3 angkatan perjalanan yang berjalan. Lalu kami menghubungi jamaah dari angkatan sebelumnya: apakah sesuai brosur? Apakah ada tagihan siluman? Apakah hotel sesuai janji? Jawaban jamaah adalah penentu, bukan brosur.",
    },
    {
      icon: Eye,
      title: "Lapis 5 — Pemantauan Berkelanjutan",
      detail:
        "Verifikasi bukan seremoni sekali jalan. Badge ditinjau tiap kuartal dari keluhan masuk, ketepatan berangkat, dan rating Saksi Jamaah. Satu keluhan serius memicu review ulang; pelanggaran berat menurunkan tier atau mencabut badge — dan itu kami publikasikan.",
    },
  ];

  return (
    <div>
      <div className="relative bg-brand-deep py-12 md:py-16">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Verifikasi" }]} />
          <SectionHeading
            dark
            kicker="Pusat kepercayaan"
            title="Verifikasi 5 Lapis: Cara Kami Menjaga Gerbang"
            sub="Travel nakal selalu punya cerita manis. Kami tidak percaya cerita — kami memeriksa bukti, lima lapis, berulang setiap kuartal."
          />
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <ol className="space-y-6">
          {layers.map((l, i) => (
            <li key={i} className="flex gap-5 rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-ivory">
                <l.icon size={24} />
              </span>
              <div>
                <h2 className="text-[19px] font-bold text-ink">{l.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{l.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl bg-brand-soft p-6 text-center">
          <p className="text-[17px] font-semibold leading-relaxed text-brand-deep">
            Anda bisa mengulangi Lapis 1 sendiri, sekarang juga — tanpa akun, tanpa biaya.
          </p>
          <Link
            to="/verifikasi/cek-izin-ppiu"
            className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-brand px-7 font-bold text-ivory transition-colors hover:bg-brand-deep"
          >
            <ShieldCheck size={18} className="mr-2" /> Cek Izin PPIU
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================= TOOL CEK IZIN PPIU ================= */
export function CheckLicensePage() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<LicenseRecord | null | undefined>(undefined);
  const [searched, setSearched] = useState("");

  const doSearch = (term?: string) => {
    const needle = (term ?? q).trim().toLowerCase();
    if (needle.length < 3) {
      setResult(null);
      setSearched(needle);
      return;
    }
    setSearched(needle);
    const found = licenseMaster.find(
      (r) =>
        r.name.toLowerCase().includes(needle) ||
        r.aliases.some((a) => a.includes(needle)) ||
        (r.licenseNo !== "—" && needle.includes(r.licenseNo.toLowerCase()))
    );
    setResult(found ?? null);
  };

  const statusMeta = {
    aktif: { icon: ShieldCheck, label: "TERDAFTAR AKTIF", color: "#1E7F4F", bg: "#E7F0EC" },
    perpanjangan: { icon: Clock, label: "PERLU PERHATIAN — MASA BERLAKU", color: "#B7791F", bg: "#F5EEDA" },
    nonaktif: { icon: ShieldX, label: "TIDAK DITEMUKAN", color: "#B3372B", bg: "#FBEAE7" },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Verifikasi", to: "/verifikasi" }, { label: "Cek Izin PPIU" }]} />
      <SectionHeading
        center
        kicker="Tool publik — gratis"
        title="Cek Izin PPIU Sebelum Anda Transfer"
        sub="Ketik nama travel atau nomor izinnya. Kami cocokkan dengan basis data verifikasi SolusiHajj, lalu tampilkan statusnya — berserta sumber resmi untuk cek ulang."
      />

      <div className="mt-8 rounded-2xl border border-line-warm bg-card p-5 shadow-green md:p-6">
        <label htmlFor="license-query" className="mb-2 block text-sm font-bold text-ink">
          Nama travel / nomor izin
        </label>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <input
            id="license-query"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && doSearch()}
            placeholder="Contoh: Amanah Barokah atau PPIU-0010202400121"
            className="h-13 min-h-12 flex-1 rounded-xl border border-line-warm bg-white px-4 text-[16px] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            aria-describedby="license-hint"
          />
          <button
            onClick={() => doSearch()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-bold text-ivory transition-colors hover:bg-brand-deep"
          >
            <Search size={18} /> Cek Sekarang
          </button>
        </div>
        <p id="license-hint" className="mt-2 text-xs text-ink-muted">
          Gunakan nama lengkap sesuai dokumen (mis. &ldquo;PT&hellip;&rdquo;), bukan nama panggilan travel.
        </p>

        {/* quick chips */}
        <div className="mt-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-muted">Coba cepat — Founding Partner:</p>
          <div className="flex flex-wrap gap-2">
            {ppiuList.slice(0, 5).map((p) => (
              <button
                key={p.slug}
                onClick={() => { setQ(p.shortName); doSearch(p.shortName); }}
                className="min-h-10 rounded-full border border-line-warm bg-ivory px-3.5 text-sm font-semibold text-ink transition-colors hover:border-brand/50 hover:bg-brand-soft"
              >
                {p.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HASIL */}
      {result !== undefined && (
        <div className="mt-6" aria-live="polite">
          {result === null ? (
            <div className="rounded-2xl border-2 border-dashed border-line-warm bg-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#F5EEDA" }}>
                  <ShieldAlert size={26} className="text-[#B7791F]" />
                </span>
                <div>
                  <h3 className="text-[19px] font-bold text-ink">
                    &ldquo;{searched}&rdquo; tidak ditemukan dalam basis data kami
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                    Basis data kami baru mencakup PPIU yang telah menjalani Verifikasi 5 Lapis SolusiHajj (10 Founding
                    Partner) dan beberapa catatan publik. Tidak ditemukan di sini <strong>belum tentu</strong> tidak
                    berizin — silakan cek langsung ke kanal resmi Kemenag di bawah sebelum memutuskan apa pun.
                  </p>
                  <a
                    href="https://simpu.kemenag.go.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-brand px-4 text-sm font-bold text-brand hover:bg-brand-soft"
                  >
                    <ExternalLink size={15} /> Verifikasi resmi: simpu.kemenag.go.id
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-line-warm bg-card shadow-warm">
              <div className="flex items-center gap-3 px-5 py-4" style={{ backgroundColor: statusMeta[result.status].bg }}>
                {(() => {
                  const Icon = statusMeta[result.status].icon;
                  return <Icon size={24} style={{ color: statusMeta[result.status].color }} />;
                })()}
                <p className="text-[15px] font-extrabold tracking-wide" style={{ color: statusMeta[result.status].color }}>
                  {statusMeta[result.status].label}
                </p>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-extrabold text-ink">{result.name}</h3>
                    <p className="text-sm text-ink-muted">{result.city}</p>
                    <p className="tabular mt-1 text-sm font-semibold text-ink">No. Izin: {result.licenseNo}</p>
                    {result.issuedAt !== "—" && (
                      <p className="text-sm text-ink-muted">
                        Terbit {formatDate(result.issuedAt, "short")} • Berlaku s.d. {formatDate(result.validUntil, "short")}
                      </p>
                    )}
                  </div>
                  {result.tier && <ShieldBadge tier={result.tier} />}
                </div>
                <p className="mt-4 rounded-xl bg-muted p-4 text-[15px] leading-relaxed text-ink">{result.note}</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {result.ppiuSlug ? (
                    <>
                      <Link to={`/ppiu/${result.ppiuSlug}`} className="inline-flex min-h-11 items-center rounded-xl bg-brand px-5 text-sm font-bold text-ivory hover:bg-brand-deep">
                        Lihat Toko & Paketnya →
                      </Link>
                      <a
                        href="https://simpu.kemenag.go.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line-warm px-4 text-sm font-semibold text-ink-muted hover:bg-muted"
                      >
                        <ExternalLink size={14} /> Cek juga di SIMPU Kemenag
                      </a>
                    </>
                  ) : (
                    <a
                      href="https://simpu.kemenag.go.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-brand px-4 text-sm font-bold text-brand hover:bg-brand-soft"
                    >
                      <ExternalLink size={15} /> Verifikasi resmi: simpu.kemenag.go.id
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Catatan keamanan */}
      <div className="mt-8 rounded-2xl border border-[#B7791F]/30 bg-[#F5EEDA]/60 p-5">
        <h3 className="flex items-center gap-2 font-bold text-ink">
          <ShieldAlert size={18} className="text-[#B7791F]" /> Penting dipahami
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-muted">
          <li>• Tool ini versi R1 dengan basis data lokal terbatas — BUKAN pengganti verifikasi hukum resmi Kemenag.</li>
          <li>• Data demo digunakan untuk pengembangan; pada R2 basis data tersinkron berkala dengan kanal resmi.</li>
          <li>• Aturan emas tetap sama: <strong className="text-ink">jangan transfer ke rekening pribadi</strong>, dan minta kontrak tertulis sebelum DP.</li>
        </ul>
      </div>
    </div>
  );
}

/* ================= HALAMAN AMANAHESCROW ================= */
export function EscrowPage() {
  const steps = [
    { icon: CashIcon, t: "Anda Memilih Paket & Setuju Kontrak", d: "Kontrak perjalanan dibuat langsung antara Anda dan PPIU — jelas, tertulis, dengan skema refund di dalamnya." },
    { icon: LockKeyhole, t: "Dana Masuk Rekening Escrow Bank Syariah", d: "Anda membayar ke rekening escrow yang dikelola bank syariah mitra. Rekening ini tidak bisa ditarik PPIU maupun SolusiHajj semaunya." },
    { icon: PlaneTakeoff, t: "Anda Berangkat — Dana Rilis Bertahap", d: "40% cair saat Anda tiba & check-in hotel Makkah; 40% saat ibadah Makkah–Madinah berjalan sesuai itinerary; 20% setelah pulang." },
    { icon: Home, t: "Pulang dengan Aman — Semua Pihak Terlindungi", d: "PPIU dibayar penuh atas layanannya, Anda pulang dengan ibadah yang tertunaikan, dan semua bukti terdokumentasi." },
  ];

  return (
    <div>
      <div className="relative bg-brand-deep py-12 md:py-16">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "AmanahEscrow" }]} />
          <SectionHeading
            dark
            kicker="Perlindungan dana"
            title="AmanahEscrow — Bank Syariah Menungangi Dana Anda"
            sub="Masalah terbesar jamaah bukan harga, melainkan ketidakpastian: 'kalau travel-nya tutup sebelum saya berangkat, bagaimana?' Escrow menghilangkan pertanyaan itu sepenuhnya."
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Alur 4 langkah */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <span className="tabular absolute right-5 top-4 text-4xl font-extrabold text-brand/10">{i + 1}</span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-ivory">
                <s.icon size={22} />
              </span>
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Prinsip + timeline */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-brand-deep p-6 md:p-8">
            <div className="pattern-light rounded-xl p-1">
              <h2 className="text-[22px] font-bold text-ivory">Prinsip yang Tidak Bisa Ditarik Kembali</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Dana jamaah tidak pernah menyentuh rekening SolusiHajj — platform kami bukan pemegang dana.",
                  "Rekening escrow dikelola bank syariah mitra dengan akad wadi'ah — bukan rekening pribadi siapa pun.",
                  "PPIU tidak bisa menarik dana sebelum momen rilis yang disepakati — kecuali Anda berangkat dan terlayani.",
                  "Jika keberangkatan bermasalah dari sisi PPIU, dana kembali 100% sebelum rilis pertama.",
                  "Semua rilis diberi bukti dokumen dan dapat dipantau statusnya dari akun jamaah Anda (R2).",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ivory/85">
                    <Scale size={18} className="mt-0.5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
            <h2 className="text-[22px] font-bold text-ink">Tabel Milestone Rilis 40/40/20</h2>
            <table className="mt-4 w-full text-left text-[15px]">
              <thead>
                <tr className="border-b border-line-warm">
                  <th className="py-3 font-bold text-ink">Tahap</th>
                  <th className="py-3 font-bold text-ink">Momen</th>
                  <th className="py-3 text-right font-bold text-ink">Rilis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Tiba & check-in hotel Makkah terkonfirmasi", "40%"],
                  ["2", "Ibadah Makkah–Madinah sesuai itinerary", "40%"],
                  ["3", "Tiba kembali di tanah air + review terbit", "20%"],
                ].map((r) => (
                  <tr key={r[0]} className="border-b border-line-warm last:border-0">
                    <td className="tabular py-3.5 font-bold text-ink">{r[0]}</td>
                    <td className="py-3.5 text-ink-muted">{r[1]}</td>
                    <td className="tabular py-3.5 text-right text-lg font-extrabold text-brand">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6">
              <EscrowTimeline compact />
            </div>
          </div>
        </div>

        {/* FAQ mini */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Apakah escrow menambah biaya saya?", "Tidak. Biaya operasional escrow dibebankan pada komisi PPIU, bukan pada harga paket yang Anda lihat."],
            ["Bagaimana kalau saya membatalkan?", "Dana di escrow mengikuti skema refund kontrak PPIU (tercantum di setiap halaman paket). Selama belum rilis, dana tetap terlindungi."],
            ["Kapan escrow aktif?", "Penuh pada fase R2 bersama fitur booking online. Pada R1, halaman ini menjadi komitmen publik arsitektur dana kami — dan dasar kerja sama dengan bank syariah mitra yang sedang berjalan."],
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-line-warm bg-card p-5">
              <h3 className="font-bold text-ink">{f[0]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f[1]}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-soft p-6 text-center">
          <p className="text-[16px] font-semibold text-brand-deep">
            Ingin memastikan PPIU pilihan Anda lolos verifikasi sebelum bicara dana?
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Link to="/verifikasi/cek-izin-ppiu" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-6 font-bold text-ivory hover:bg-brand-deep">
              <ShieldCheck size={17} className="mr-2" /> Cek Izin PPIU
            </Link>
            <WaButton href={waLink(waMessages.general)} label="Tanya Soal Escrow" variant="ghost" />
          </div>
        </div>
      </div>
    </div>
  );
}
