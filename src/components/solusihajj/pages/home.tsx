"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Landmark,
  MapPin,
  Search,
  Wallet,
  LockKeyhole,
  PlaneTakeoff,
  Home,
  Star,
  BookOpen,
  Calculator,
  ChevronRight,
  HeartHandshake,
  Radar,
  Siren,
  UserRoundCheck,
  FileSearch,
  Building2,
  Banknote,
  Eye,
  ArrowRight,
  Plane,
  BusFront,
  Globe2,
  Sparkles,
  CalendarClock,
  GitCompareArrows,
  Compass,
} from "lucide-react";
import { Link, scrollToId } from "@/lib/solusihajj/router";
import { waLink, waMessages, formatRupiah, formatDate } from "@/lib/solusihajj/wa";
import { featuredPackages, packageList } from "@/data/packages";
import { ppiuList, orgOf, countryOf } from "@/data/ppiu";
import { flightList } from "@/data/flights";
import { reviewsOfPackage, reviewList } from "@/data/reviews";
import { articleList } from "@/data/articles";
import { homepageFaq } from "@/data/faq";
import { DIMENSION_LABELS } from "@/data/types";
import type { DimensionKey } from "@/data/types";
import { SectionHeading, PackageCard, ShieldBadge, StarRating, EscrowTimeline, TrustPill, WaButton, LiveTicker, SeatBar } from "../ui-bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CITIES = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang", "Medan", "Makassar", "Palembang"];
const ASIA_CHIPS = [
  { label: "Jakarta", to: "/paket?kota=Jakarta", note: "8 paket" },
  { label: "Bandung", to: "/paket?kota=Bandung", note: "3 paket" },
  { label: "Surabaya", to: "/paket?kota=Surabaya", note: "3 paket" },
  { label: "Medan", to: "/paket?kota=Medan", note: "2 paket" },
  { label: "Makassar", to: "/paket?kota=Makassar", note: "2 paket" },
  { label: "Yogyakarta", to: "/paket?kota=Yogyakarta", note: "3 paket" },
  { label: "Kuala Lumpur", to: "/ppiu?negara=Malaysia", note: "BPW" },
  { label: "Singapura", to: "/ppiu?negara=Singapura", note: "BPW" },
  { label: "Brunei", to: "/ppiu?negara=Brunei", note: "BPW" },
  { label: "Bangkok", to: "/ppiu?negara=Thailand", note: "BPW" },
];
const BUDGETS = [
  { value: "lt30", label: "Di bawah Rp 30 jt" },
  { value: "30-40", label: "Rp 30 – 40 jt" },
  { value: "40-50", label: "Rp 40 – 50 jt" },
  { value: "gt50", label: "Di atas Rp 50 jt" },
  { value: "lt20", label: "Land Arrangement (< Rp 20 jt)" },
];

export default function HomePage() {
  const [qProduk, setQProduk] = useState("");
  const [qKota, setQKota] = useState("");
  const [qBulan, setQBulan] = useState("");
  const [qBudget, setQBudget] = useState("");

  const doSearch = () => {
    if (qProduk === "charter") {
      window.location.hash = "/tiket-grup";
      return;
    }
    const p = new URLSearchParams();
    if (qProduk === "land") p.set("produk", "land");
    if (qKota) p.set("kota", qKota);
    if (qBulan) p.set("bulan", qBulan);
    if (qBudget) p.set("budget", qBudget);
    const qs = p.toString();
    window.location.hash = "/paket" + (qs ? "?" + qs : "");
  };

  const heroReviews = [reviewList[0], reviewList[4], reviewList[2]];
  const agg = (key: DimensionKey) => {
    const vals = reviewList.map((r) => r.dimensions[key]);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  };

  return (
    <div>
      {/* ================= S1 HERO ================= */}
      <section className="relative overflow-hidden bg-brand-deep" aria-label="Perkenalan SolusiHajj">
        <div className="pattern-light absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:px-8">
          <p className="font-amiri mb-6 text-3xl text-gold fade-up" aria-hidden="true">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <div className="fade-up fade-up-1 mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm">
            <Globe2 size={16} className="text-gold" />
            Marketplace umrah & haji terbesar Asia • PPIU · PIHK · BPW · KBIHU
          </div>
          <h1 className="fade-up fade-up-2 max-w-4xl text-[38px] font-extrabold leading-[1.15] text-ivory md:text-[58px]">
            Satu Gerbang untuk Ibadah Anda. <span className="text-gold">Amanah Anda, Aman.</span>
          </h1>
          <p className="fade-up fade-up-3 mt-6 max-w-2xl text-[17px] leading-relaxed text-ivory/80 md:text-lg">
            Bandingkan 30+ paket umrah, land arrangement, dan tiket charter grup dari 18 penyelenggara terverifikasi di
            5 negara Asia. Dana Anda dijaga escrow syariah, ulasan hanya dari jamaah yang benar-benar berangkat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/paket"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gold px-7 text-[16px] font-extrabold text-brand-deep shadow-warm transition-all hover:bg-[#D9B544]"
            >
              Cari Paket Umrah <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/verifikasi/cek-izin-ppiu"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-ivory/40 px-7 text-[16px] font-bold text-ivory backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <ShieldCheck size={18} className="mr-2" /> Cek Izin PPIU
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <TrustPill icon={LockKeyhole}>Dana di escrow syariah</TrustPill>
            <TrustPill icon={UserRoundCheck}>Review jamaah nyata</TrustPill>
            <TrustPill icon={Globe2}>18 penyelenggara • 5 negara</TrustPill>
            <TrustPill icon={ShieldCheck}>Verifikasi 5 lapis</TrustPill>
          </div>
          <div className="fade-up fade-up-3 mt-8 w-full max-w-xl">
            <LiveTicker />
          </div>
        </div>
      </section>

      {/* ================= S2 SMART SEARCH UNIVERSAL ================= */}
      <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 md:px-8" aria-label="Pencarian paket">
        <div className="rounded-2xl border border-line-warm bg-card p-4 shadow-green md:p-5">
          <div className="grid gap-3 md:grid-cols-5">
            <label className="block md:col-span-2">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-muted">Apa yang Anda Cari?</span>
              <select
                value={qProduk}
                onChange={(e) => setQProduk(e.target.value)}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                aria-label="Pilih jenis produk"
              >
                <option value="">Semua produk</option>
                <option value="full">Paket Umrah Lengkap (dengan tiket)</option>
                <option value="land">Land Arrangement (tanpa tiket)</option>
                <option value="charter">Tiket Charter Grup (grosir)</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-muted">Kota Berangkat</span>
              <select
                value={qKota}
                onChange={(e) => setQKota(e.target.value)}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                aria-label="Pilih kota keberangkatan"
              >
                <option value="">Semua kota</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-muted">Budget</span>
              <select
                value={qBudget}
                onChange={(e) => setQBudget(e.target.value)}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                aria-label="Pilih rentang budget"
              >
                <option value="">Semua budget</option>
                {BUDGETS.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </label>
            <div className="flex items-end">
              <button
                onClick={doSearch}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 font-bold text-ivory transition-colors hover:bg-brand-deep"
              >
                <Search size={18} /> Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= S2B TIGA VERTIKAL PRODUK ================= */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8" aria-label="Jenis produk marketplace">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Plane,
              to: "/paket?produk=full",
              t: "Paket Umrah Lengkap",
              n: `${packageList.filter((p) => (p.product ?? "full") === "full").length} paket aktif`,
              d: "Tiket + visa + hotel + muthawif satu harga all-in. Paling praktis untuk jamaah pertama dan keluarga.",
            },
            {
              icon: BusFront,
              to: "/paket?produk=land",
              t: "Land Arrangement",
              n: `${packageList.filter((p) => p.product === "land").length} paket darat`,
              d: "Sudah punya tiket sendiri? Hotel, bus, visa, dan muthawif kami siapkan sejak Anda tiba di Jeddah.",
            },
            {
              icon: PlaneTakeoff,
              to: "/tiket-grup",
              t: "Tiket Charter Grup",
              n: `${flightList.length} jadwal aktif`,
              d: "Harga grosir kursi pesawat untuk rombongan masjid & komunitas — minimal 10 kursi per pesanan.",
            },
          ].map((v, i) => (
            <Link
              key={i}
              to={v.to}
              className="group rounded-2xl border border-line-warm bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft">
                  <v.icon size={24} className="text-brand" />
                </span>
                <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-deep">{v.n}</span>
              </div>
              <h3 className="mt-4 text-[19px] font-bold text-ink group-hover:text-brand">{v.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{v.d}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
                Jelajahi <ChevronRight size={15} />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= S3 TRUST BAR ================= */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8" aria-label="Statistik kepercayaan">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: Globe2, num: "18", label: "Penyelenggara lolos Verifikasi 5 Lapis di 5 negara Asia" },
            { icon: Landmark, num: `${packageList.length}`, label: "Paket aktif dengan harga all-in transparan" },
            { icon: UserRoundCheck, num: "100%", label: "Review berasal dari booking selesai (Saksi Jamaah)" },
            { icon: LockKeyhole, num: "0", label: "Biaya tersembunyi — kami bedah semua rincian" },
          ].map((s, i) => (
            <div key={i} className="count-fade rounded-2xl border border-line-warm bg-card p-5 text-center shadow-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <s.icon className="mx-auto mb-2 text-brand" size={24} />
              <p className="tabular text-3xl font-extrabold text-brand">{s.num}</p>
              <p className="mt-1 text-sm leading-snug text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
        {/* CITY & ASIA CHIPS — landing SEO per kota */}
        <div className="mt-8 rounded-2xl border border-line-warm bg-card p-5 shadow-card">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
            <Compass size={16} className="text-brand" /> Paling dicari di kota Anda:
          </p>
          <div className="flex flex-wrap gap-2">
            {ASIA_CHIPS.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line-warm bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-brand/50 hover:bg-brand-soft"
              >
                {c.label}
                <span className="text-xs font-bold text-gold-deep">{c.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= S4 KENAPA PERLU KAMI ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Masalah yang kami jawab">
        <SectionHeading
          center
          kicker="Kenapa perlu kami"
          title="Niat Ibadah Anda Sudah Benar. Yang Belum Ada adalah yang Menjaga."
          sub="Tiga cerita yang terlalu sering terjadi — mungkin Anda pernah mendengarnya dari keluarga sendiri."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Wallet,
              title: "Deposit hangus karena travel nakal",
              text: "Rp 15–30 juta ditransfer, travel tutup, nomor tidak aktif. Nyaris semua kasus penipuan umrah bermula dari transfer ke rekening pribadi tanpa jaminan apa pun.",
            },
            {
              icon: MapPin,
              title: "'Dekat Haram', ternyata 40 menit jalan",
              text: "Foto hotel di brosur terlihat megah. Realitanya 2 bintang, lebih dari 1 km dari Masjidil Haram, dan tidak ada jalan tolak bantuan setelah tiba.",
            },
            {
              icon: Radar,
              title: "Tidak ada kabar dari orang tua selama 10 hari",
              text: "Keluarga di rumah menunggu tanpa kepastian: sudah tiba atau belum? Hotelnya di mana? Bagaimana kalau terjadi sesuatu di sana?",
            },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft">
                <c.icon size={24} className="text-gold-deep" />
              </span>
              <h3 className="mt-4 text-[19px] font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-[20px] font-semibold leading-relaxed text-brand-deep md:text-2xl">
          Masalahnya bukan niat ibadah Anda. Masalahnya tidak ada yang menjaga.
          <span className="mt-1 block text-brand">Di sinilah kami berdiri.</span>
        </p>
      </section>

      {/* ================= S5 KATALOG UNGGULAN ================= */}
      <section id="paket" className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Katalog paket unggulan">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Katalog unggulan"
            title="Paket Pilihan dari Penyelenggara Terverifikasi"
            sub="Harga all-in yang Anda lihat adalah yang Anda bayar — nama hotel, jarak meter ke Haram, dan rincian biaya tercantum terbuka. Gunakan tombol Bandingkan untuk membandingkan hingga 3 paket."
          />
          <Link to="/paket" className="inline-flex h-12 items-center rounded-xl border border-brand px-5 font-bold text-brand transition-colors hover:bg-brand-soft">
            Lihat semua {packageList.length} paket <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPackages.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} ppiu={ppiuList.find((p) => p.slug === pkg.ppiuSlug)} />
          ))}
        </div>
      </section>

      {/* ================= S5B JADWAL PENERBANGAN GRUP ================= */}
      <section className="mt-20 bg-white py-16 md:py-20" aria-label="Jadwal penerbangan grup">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Vertikal tiket grup"
              title="Jadwal Penerbangan Charter Grup — Harga Grosir"
              sub="Untuk rombongan masjid, komunitas, dan komunitas: kursi pesawat dengan harga kursi grup, minimal 10 kursi. Seluruh jadwal ditangani penyelenggara terverifikasi."
            />
            <Link to="/tiket-grup" className="inline-flex h-12 items-center rounded-xl border border-brand px-5 font-bold text-brand transition-colors hover:bg-brand-soft">
              Semua {flightList.length} jadwal <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line-warm shadow-card">
            <table className="w-full min-w-[820px] text-left text-[15px]">
              <thead>
                <tr className="border-b border-line-warm bg-muted/50">
                  <th className="px-5 py-3.5 font-bold text-ink">Rute</th>
                  <th className="px-5 py-3.5 font-bold text-ink">Maskapai</th>
                  <th className="px-5 py-3.5 font-bold text-ink">Berangkat</th>
                  <th className="px-5 py-3.5 font-bold text-ink">Kursi</th>
                  <th className="px-5 py-3.5 text-right font-bold text-ink">Harga / Kursi</th>
                </tr>
              </thead>
              <tbody>
                {flightList.slice(0, 5).map((f) => {
                  const organizer = ppiuList.find((p) => p.slug === f.ppiuSlug);
                  return (
                    <tr key={f.id} className="border-b border-line-warm last:border-0">
                      <td className="px-5 py-4">
                        <p className="font-bold text-ink">{f.route}</p>
                        <p className="text-xs text-ink-muted">{f.transit} • oleh {organizer?.shortName ?? "—"}</p>
                      </td>
                      <td className="px-5 py-4 text-ink-muted">{f.airline}</td>
                      <td className="tabular px-5 py-4 text-ink-muted">{formatDate(f.depart, "short")}</td>
                      <td className="px-5 py-4">
                        <div className="w-32">
                          <SeatBar left={f.seatsLeft} total={f.seatsTotal} />
                        </div>
                      </td>
                      <td className="tabular px-5 py-4 text-right font-extrabold text-brand">{formatRupiah(f.pricePerPax)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= S5C NURMATCH TEASER ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8" aria-label="NurMatch AI">
        <div className="relative overflow-hidden rounded-3xl bg-brand-deep p-8 shadow-green md:p-12">
          <div className="pattern-light absolute inset-0" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold">
                <Sparkles size={16} /> Fitur NurMatch AI
              </p>
              <h2 className="text-[26px] font-extrabold leading-tight text-ivory md:text-[34px]">
                Bingung Pilih Paket? Biarkan NurMatch Mencocokkan untuk Anda.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/75">
                Jawab 5 pertanyaan tentang budget, durasi, dan prioritas ibadah Anda. NurMatch menimbang seluruh katalog
                lalu mengusulkan 3 paket paling cocok — lengkap dengan alasan dan persentase kecocokan. Transparan,
                tanpa kotak hitam, tanpa sponsor terselubung.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/nurmatch"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gold px-7 font-extrabold text-brand-deep transition-colors hover:bg-[#D9B544]"
                >
                  Mulai Quiz 1 Menit <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/bandingkan"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-ivory/40 px-6 font-bold text-ivory transition-colors hover:bg-white/10"
                >
                  <GitCompareArrows size={17} className="mr-2" /> Atau bandingkan manual
                </Link>
              </div>
            </div>
            <div className="space-y-3" aria-hidden="true">
              {[
                ["94%", "Umrah 9 Hari — Hotel 300 m", "cocok: budget mid, prioritas dekat Haram"],
                ["88%", "LA 8 Hari — Join Jeddah", "cocok: sudah punya tiket sendiri"],
                ["81%", "Umrah Plus Turki 13 Hari", "cocok: suka perjalanan panjang"],
              ].map((row, i) => (
                <div key={i} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] font-bold text-ivory">{row[1]}</p>
                    <span className="tabular rounded-lg bg-gold/25 px-2.5 py-1 text-sm font-extrabold text-gold">{row[0]}</span>
                  </div>
                  <p className="mt-1 text-xs text-ivory/60">{row[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= S6 VERIFIKASI 5 LAPIS ================= */}
      <section className="mt-20 bg-white py-16 md:mt-28 md:py-24" aria-label="Verifikasi 5 lapis">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            center
            kicker="Kepercayaan kami"
            title="Setiap PPIU Melewati Verifikasi 5 Lapis"
            sub="Bukan sekadar 'sudah dicek'. Lima lapis pemeriksaan yang bisa Anda baca, dan izinnya bisa Anda cek sendiri kapan pun."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: FileSearch, n: "1", t: "Cek Izin Resmi Kemenag", d: "Legalitas PPIU dicek ke basis data Kemenag; nomor izin dipublikasikan di setiap toko." },
              { icon: Building2, n: "2", t: "Audit Kantor Fisik", d: "Tim kami mengunjungi kantor: operasional nyata, staf tetap, bukan kios kosong." },
              { icon: Banknote, n: "3", t: "Legalitas & Rekening", d: "Badan hukum terdaftar, rekening perusahaan (bukan pribadi), tanpa catatan penipuan." },
              { icon: UserRoundCheck, n: "4", t: "Track Record Jamaah", d: "Minimal 3 angkatan beroperasi; jamaah sebelumnya kami hubungi sebagai referensi." },
              { icon: Eye, n: "5", t: "Pemantauan Berkelanjutan", d: "Badge dievaluasi tiap kuartal; keluhan serius memicu review ulang — pelanggaran = turun tier." },
            ].map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-line-warm bg-ivory p-5">
                <span className="tabular absolute right-4 top-3 text-4xl font-extrabold text-brand/10">{s.n}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-ivory">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-3 text-[16px] font-bold leading-snug text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/verifikasi/cek-izin-ppiu"
              className="inline-flex min-h-12 items-center rounded-xl bg-brand px-7 font-bold text-ivory transition-colors hover:bg-brand-deep"
            >
              <ShieldCheck size={18} className="mr-2" /> Cek Izin PPIU Anda sendiri →
            </Link>
            <p className="mt-3 text-sm text-ink-muted">Gratis, tanpa daftar akun — hanya butuh nama travel.</p>
          </div>
        </div>
      </section>

      {/* ================= S7 AMANAHESCROW ================= */}
      <section className="relative bg-brand-deep py-16 md:py-24" aria-label="AmanahEscrow">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            dark
            kicker="Perlindungan dana"
            title="AmanahEscrow: Dana Anda Tidak Menyentuh Rekening Siapa Pun"
            sub="Prinsipnya sederhana: PPIU baru menerima pembayaran setelah Anda benar-benar berangkat dan terlayani. Sebelum itu, dana Anda diamankan di rekening escrow bank syariah mitra."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 md:p-8">
              <EscrowTimeline />
            </div>
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <table className="w-full text-left text-[15px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-4 font-bold text-gold">Tahap</th>
                    <th className="px-5 py-4 font-bold text-gold">Momen Rilis</th>
                    <th className="px-5 py-4 text-right font-bold text-gold">Rilis ke PPIU</th>
                  </tr>
                </thead>
                <tbody className="text-ivory/85">
                  {[
                    ["1", "Jamaah tiba & check-in hotel Makkah (terkonfirmasi)", "40%"],
                    ["2", "Ibadah Makkah–Madinah berjalan sesuai itinerary", "40%"],
                    ["3", "Jamaah tiba kembali di tanah air + review terbit", "20%"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-white/5 last:border-0">
                      <td className="tabular px-5 py-4 font-bold">{row[0]}</td>
                      <td className="px-5 py-4 leading-snug">{row[1]}</td>
                      <td className="tabular px-5 py-4 text-right text-lg font-extrabold text-gold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t border-white/10 p-5">
                <p className="text-sm leading-relaxed text-ivory/70">
                  Jika perjalanan bermasalah sebelum keberangkatan, dana kembali <strong className="text-gold">100%</strong> sesuai
                  skema refund kontrak. Dikelola bersama bank syariah mitra — bukan rekening pribadi siapa pun.
                </p>
                <Link
                  to="/escrow"
                  className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-gold px-6 font-extrabold text-brand-deep transition-colors hover:bg-[#D9B544]"
                >
                  Lihat Cara Kerja Escrow <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= S8 SAKSI JAMAAH ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Review jamaah">
        <SectionHeading
          center
          kicker="Saksi Jamaah"
          title="Ulasan yang Tidak Bisa Dibeli"
          sub="Review hanya bisa ditulis oleh jamaah dengan booking berstatus selesai. Setiap ulasan mencantumkan nama, paket, dan tanggal pulang."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {heroReviews.map((r) => {
            const pkg = featuredPackages.find((p) => p.slug === r.packageSlug);
            return (
              <figure key={r.id} className="flex flex-col rounded-2xl border border-line-warm bg-card p-6 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <StarRating value={r.rating} size={16} />
                  <span className="text-xs text-ink-muted">Pulang {formatDate(r.returnedAt, "short")}</span>
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
                  &ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-line-warm pt-4">
                  <p className="font-bold text-ink">{r.name}</p>
                  <p className="text-sm text-ink-muted">
                    {r.city} • {pkg ? pkg.title.slice(0, 38) + "…" : "Paket umrah"}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-[19px] font-bold text-ink">Agregat rating 6 dimensi (seluruh review Saksi Jamaah)</h3>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-sm font-bold text-brand">
              <ShieldCheck size={15} /> Review-gated: hanya booking selesai
            </span>
          </div>
          <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {(Object.keys(DIMENSION_LABELS) as DimensionKey[]).map((key) => {
              const val = agg(key);
              return (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-44 shrink-0 text-sm text-ink-muted">{DIMENSION_LABELS[key]}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${(val / 5) * 100}%` }} />
                  </div>
                  <span className="tabular w-8 text-right text-sm font-bold">{val.toFixed(1)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= S9 HAFIZH TRACK TEASER ================= */}
      <section className="mt-20 bg-white py-16 md:mt-28 md:py-24" aria-label="Hafizh Track">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Segera hadir"
              title="Hafizh Track: Keluarga Ikat Kaki, Hati Ikat Lepas"
              sub="Bagi jamaah, perjalanan itu ibadah. Bagi keluarga di rumah, 10 hari tanpa kabar adalah 10 hari khawatir. Hafizh Track menjembatani keduanya — dengan izin jamaah, tanpa melanggar privasi."
            />
            <ul className="mt-6 space-y-3.5">
              {[
                { icon: BookOpen, t: "E-itinerary offline", d: "Jadwal, hotel, dan kontak koordinator — tersedia tanpa internet." },
                { icon: UserRoundCheck, t: "Check-in aman otomatis", d: "Notifikasi 'Aman tiba' terkirim di titik penting perjalanan." },
                { icon: Siren, t: "Tombol SOS 24 jam", d: "Terhubung ke koordinator PPIU & tim darurat SolusiHajj." },
                { icon: HeartHandshake, t: "Undangan keluarga", d: "Cukup link undangan — keluarga tidak perlu install aplikasi." },
              ].map((f, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                    <f.icon size={20} className="text-brand" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{f.t}</p>
                    <p className="text-[15px] text-ink-muted">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WaButton href={waLink(waMessages.waitlist)} label="Gabung Waitlist" />
              <span className="text-sm text-ink-muted">Rilis penuh di fase R3 2026 • versi R1: waitlist</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-brand-deep p-8 md:p-10" aria-hidden="true">
            <div className="pattern-light absolute inset-0" />
            <div className="relative">
              <p className="font-amiri text-2xl text-gold">لِلْحَافِظِينَ</p>
              <h3 className="mt-3 text-2xl font-extrabold text-ivory">"Kepada para penjaga"</h3>
              <div className="mt-8 space-y-4">
                {[
                  ["06:12", "Bapak Anton tiba di hotel Makkah — Aman ✓"],
                  ["11:40", "Umrah pertama selesai bersama mutawif"],
                  ["19:05", "Foto grup di depan Masjidil Haram"],
                  ["21:30", "Update posisi: masih di area Haram (opt-in)"],
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="tabular rounded-lg bg-gold/20 px-2.5 py-1 text-sm font-bold text-gold">{row[0]}</span>
                    <span className="text-[15px] text-ivory/90">{row[1]}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ivory/50">
                Simulasi tampilan notifikasi keluarga. Tracking bersifat opt-in, data lokasi disimpan maksimal 30 hari
                sesuai UU PDP No. 27/2022.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= S10 EDUKASI TERBARU ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28 md:px-8" aria-label="Artikel edukasi">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Edukasi"
            title="Paham Sebelum Berangkat"
            sub="Kami menulis panduan yang jujur dan praktis — termasuk yang jarang ditulis travel: cara cek izin, biaya wajar, dan persiapan 30 hari."
          />
          <Link to="/edukasi" className="inline-flex h-12 items-center rounded-xl border border-brand px-5 font-bold text-brand transition-colors hover:bg-brand-soft">
            Semua artikel <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articleList.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              to={`/edukasi/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-line-warm bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-warm"
            >
              <span className="mb-3 w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">{a.category}</span>
              <h3 className="text-[17px] font-bold leading-snug text-ink group-hover:text-brand">{a.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">{a.excerpt}</p>
              <p className="mt-4 text-xs text-ink-muted">{a.readMinutes} menit baca • Direview {formatDate(a.lastReviewed, "short")}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/kalkulator-haji"
          className="group mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-deep p-6 shadow-green transition-all hover:-translate-y-0.5 md:flex-row md:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20">
              <Calculator size={28} className="text-gold" />
            </span>
            <div>
              <h3 className="text-[19px] font-bold text-ivory">Kalkulator Simpanan Haji</h3>
              <p className="text-[15px] text-ivory/70">
                Hitung sendiri: kapan dana Anda cukup untuk berangkat? Gratis, tanpa daftar akun.
              </p>
            </div>
          </div>
          <span className="inline-flex min-h-12 items-center rounded-xl bg-gold px-6 font-extrabold text-brand-deep transition-colors group-hover:bg-[#D9B544]">
            Hitung Sekarang <ChevronRight size={16} className="ml-1" />
          </span>
        </Link>
      </section>

      {/* ================= S11 FAQ TEASER ================= */}
      <section className="mx-auto mt-20 max-w-4xl px-4 md:mt-28 md:px-8" aria-label="Pertanyaan umum">
        <SectionHeading
          center
          kicker="FAQ"
          title="Pertanyaan yang Paling Sering Ditanyakan"
        />
        <Accordion type="single" collapsible className="mt-8">
          {homepageFaq.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-line-warm">
              <AccordionTrigger className="text-left text-[16px] font-bold text-ink hover:text-brand hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-ink-muted">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 text-center">
          <Link to="/faq" className="font-bold text-brand hover:underline">
            Lihat semua 10 pertanyaan →
          </Link>
        </div>
      </section>

      {/* ================= S11B PERBANDINGAN PLATFORM ================= */}
      <section className="mt-20 bg-white py-16 md:py-20" aria-label="Perbandingan dengan cara lain">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading
            center
            kicker="Posisi kami"
            title="Kenapa Berbeda dari OTA Umum dan Booking Langsung?"
            sub="Kami bukan travel, bukan OTA yang sekadar menampilkan iklan. Kami lapisan perlindungan di atas marketplace — dan kami buka bedanya secara jujur."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line-warm shadow-card">
            <table className="w-full min-w-[720px] text-left text-[15px]">
              <thead>
                <tr className="border-b border-line-warm bg-brand-deep text-ivory">
                  <th className="px-5 py-4 font-bold">Aspek</th>
                  <th className="px-5 py-4 font-bold text-gold">SolusiHajj</th>
                  <th className="px-5 py-4 font-bold text-ivory/80">OTA umum</th>
                  <th className="px-5 py-4 font-bold text-ivory/80">Booking langsung ke travel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Perlindungan dana", "Escrow syariah 40/40/20 — rilis setelah Anda terlayani", "Terutang ke travel; OTA hanya perantara", "Langsung ke rekening travel — risiko penuh di Anda"],
                  ["Kualitas penyelenggara", "Verifikasi 5 lapis + audit kantor fisik + tier berkala", "Registrasi dokumen saja", "Tergantung kejujuran pihak travel"],
                  ["Review", "Hanya dari booking selesai (Saksi Jamaah), 6 dimensi", "Bisa ditulis siapa pun / sulit diverifikasi", "Testimoni kurasi sendiri"],
                  ["Ketika ada masalah", "Mediasi + dana masih di escrow", "Anda berurusan sendiri dengan travel", "Tidak ada pihak ketiga"],
                  ["Jangkauan", "PPIU, PIHK, BPW & KBIHU dari 5 negara Asia", "Sebagian besar satu negara", "Satu travel, satu katalog"],
                  ["Model bisnis", "Komisi 4-6% saat transaksi sukses — selaras kepentingan", "Iklan & ranking berbayar", "Marjin travel sendiri"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-line-warm last:border-0">
                    <td className="px-5 py-4 font-bold text-ink">{row[0]}</td>
                    <td className="bg-brand-soft/60 px-5 py-4 font-semibold text-brand-deep">{row[1]}</td>
                    <td className="px-5 py-4 text-ink-muted">{row[2]}</td>
                    <td className="px-5 py-4 text-ink-muted">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= S11C PARTNER STRIP ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8" aria-label="Ajakan untuk penyelenggara">
        <div className="grid items-center gap-8 rounded-3xl border-2 border-gold/40 bg-gold-soft/50 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-gold-deep">
              <Building2 size={15} /> Untuk PPIU · PIHK · BPW · KBIHU
            </p>
            <h2 className="text-[24px] font-extrabold leading-tight text-ink md:text-[30px]">
              Anda Menyelenggarakan Ibadah? Tayangkan Paket Anda di Marketplace Terbesar Asia.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-muted">
              Gratis tayang, bayar hanya saat transaksi berhasil (komisi 4–6%). Kami yang berikan: jamaah, escrow
              yang membuat Anda dipercaya, review terkunci, dashboard toko, dan akses pasar lintas negara.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/partner"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-6 font-bold text-ivory transition-colors hover:bg-brand-deep"
            >
              Pelajari Kemitraan <ChevronRight size={16} className="ml-1" />
            </Link>
            <WaButton href={waLink(waMessages.ppiuPartner)} variant="ghost" label="Hubungi Tim Partner" />
          </div>
        </div>
      </section>

      {/* ================= S12 FINAL CTA ================= */}
      <section className="mx-auto mt-20 max-w-7xl px-4 pb-20 md:mt-28 md:px-8 md:pb-24" aria-label="Ajakan akhir">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-deep p-8 text-center shadow-green md:p-14">
          <div className="pattern-light absolute inset-0" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[30px] font-extrabold leading-tight text-ivory md:text-[40px]">
              Mulai Perjalanan yang Aman Hari Ini.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-ivory/80">
              Bandingkan paket, cek izin travel-nya sendiri, dan biarkan dana Anda ditungangi escrow sampai Anda
              berangkat. Konsultasi tidak dipungut biaya.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/paket"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gold px-7 font-extrabold text-brand-deep transition-colors hover:bg-[#D9B544]"
              >
                Cari Paket Umrah
              </Link>
              <WaButton href={waLink(waMessages.general)} variant="ghost" label="Tanya WhatsApp" className="border-ivory/40 bg-transparent text-ivory hover:bg-white/10" />
            </div>
            <p className="mt-5 text-sm text-ivory/60">Respons &lt; 15 menit jam kerja • Konsultasi gratis</p>
          </div>
        </div>
      </section>
    </div>
  );
}
