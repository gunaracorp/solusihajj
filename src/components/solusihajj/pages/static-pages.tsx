"use client";

import { useState } from "react";
import { ShieldCheck, MapPin, Mail, Clock, MessageCircle, Send, Compass, FileText, Scale } from "lucide-react";
import { faqList } from "@/data/faq";
import { waLink, waMessages } from "@/lib/solusihajj/wa";
import { Link, navigate } from "@/lib/solusihajj/router";
import { Breadcrumb } from "../chrome";
import { SectionHeading, WaButton } from "../ui-bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ================= TENTANG ================= */
export function AboutPage() {
  return (
    <div>
      <div className="relative bg-brand-deep py-12 md:py-16">
        <div className="pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Tentang" }]} />
          <SectionHeading
            dark
            kicker="Tentang kami"
            title="Kami Berdiri di Antara Jamaah dan Ketidakpastian"
            sub="SolusiHajj lahir dari pertanyaan sederhana: mengapa memilih travel umrah masih mengandalkan mulut ke mulut, padahal risikonya puluhan juta rupiah?"
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-8">
        <div className="space-y-6 text-[17px] leading-[1.75] text-ink">
          <p>
            Pada 2025, kami mendengar terlalu banyak cerita yang sama dari keluarga sendiri: deposit hangus, hotel yang
            tidak sesuai brosur, orang tua yang tidak terdengar kabar selama sepuluh hari. Bukan karena niat kurang
            tulus — tapi karena pasar umrah Indonesia berjalan tanpa transparansi: izin sulit dicek, harga penuh
            asterisk, dan tidak ada pihak ketiga yang menungangi dana jamaah.
          </p>
          <p>
            SolusiHajj menjawabnya dengan tiga hal yang bisa dibuktikan, bukan sekadar diklaim. Pertama,{" "}
            <strong>Verifikasi 5 Lapis</strong> — setiap PPIU diperiksa izinnya ke Kemenag, kantornya di-audit fisik,
            rekeningnya dicek, jamaah lamanya dihubungi, dan statusnya dipantau tiap kuartal. Kedua,{" "}
            <strong>AmanahEscrow</strong> — dana jamaah ditahan di rekening escrow bank syariah dan baru dirilis 40/40/20
            sesuai progres perjalanan. Ketiga, <strong>Saksi Jamaah</strong> — ulasan yang hanya bisa ditulis oleh
            jamaah yang benar-benar sudah pulang.
          </p>
          <p>
            Posisi kami sengaja jelas: <strong>SolusiHajj bukan penyelenggara perjalanan ibadah</strong>. Kontrak
            perjalanan dibuat langsung antara Anda dan PPIU. Kami adalah lapisan teknologi yang membuat kesepakatan itu
            terlihat jujur: izin yang bisa dicek, harga yang bisa dibedah, dan dana yang tidak bisa lari. Bayaran kami
            berasal dari komisi PPIU atas transaksi yang berhasil — bukan dari menyembunyikan biaya di harga Anda.
          </p>
          <p>
            Untuk keputusan syariah dan kepatuhan, kami berkomitmen pada: pengelolaan dana lewat bank syariah dengan akad
            wadi'ah, penolakan skema bunga, dan kepatuhan penuh pada UU Perlindungan Data Pribadi No. 27/2022 — termasuk
            enkripsi data paspor dan pembatasan penyimpanan data lokasi maksimal 30 hari.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Compass, t: "Misi", d: "Setiap jamaah berangkat dengan kepastian, pulang dengan ibadah yang tertunaikan." },
            { icon: ShieldCheck, t: "Cara", d: "Transparansi yang bisa diverifikasi — bukan janji di brosur." },
            { icon: Scale, t: "Prinsip", d: "Amanah di atas margin. Satu kasus penipuan = satu masalah kami." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-line-warm bg-card p-5 shadow-card">
              <c.icon size={24} className="text-brand" />
              <h3 className="mt-3 font-bold text-ink">{c.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-soft p-6">
          <h2 className="font-bold text-brand-deep">Legalitas & Struktur</h2>
          <ul className="mt-3 space-y-2 text-[15px] text-brand-deep/85">
            <li>• PT Syarikat Solution Haji Indonesia — platform teknologi (bukan PPIU, bukan penyelenggara perjalanan).</li>
            <li>• Dewan Syariah independen memantau akad escrow, komisi, dan mitra pembayaran.</li>
            <li>• Kerja sama rekening escrow dengan bank syariah mitra (proses perjanjian tahap R2).</li>
            <li>• R1 ini adalah rilis pertama: katalog statis dengan data demo yang akan diganti data terverifikasi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= KONTAK ================= */
export function ContactPage() {
  const [form, setForm] = useState({ name: "", wa: "", interest: "paket umrah", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = waMessages.lead(form.name, form.interest) + (form.message ? `\n\nCatatan: ${form.message}` : "");
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Kontak" }]} />
      <SectionHeading
        kicker="Kontak"
        title="Kami Bantu — Respons di Bawah 15 Menit Jam Kerja"
        sub="Pilih cara yang paling nyaman untuk Anda. Konsultasi tidak dipungut biaya, dan kami tidak akan menawarkan paket yang tidak Anda minta."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <form onSubmit={submit} className="rounded-2xl border border-line-warm bg-card p-6 shadow-card md:p-8">
          <h2 className="text-lg font-extrabold text-ink">Form Konsultasi</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Nama</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
                placeholder="Nama panggilan"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Nomor WhatsApp</span>
              <input
                required
                value={form.wa}
                onChange={(e) => setForm({ ...form, wa: e.target.value })}
                className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
                placeholder="08xx-xxxx-xxxx"
                inputMode="tel"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Saya tertarik pada</span>
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="h-12 w-full rounded-xl border border-line-warm bg-white px-3 text-[15px] outline-none focus:border-brand"
            >
              {["paket umrah", "cek izin PPIU", "escrow & keamanan dana", "kalkulator simpanan haji", "kerja sama PPIU", "lainnya"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Pertanyaan singkat (opsional)</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full rounded-xl border border-line-warm bg-white px-3 py-2.5 text-[15px] outline-none focus:border-brand"
              placeholder="Contoh: saya ingin umrah berdua dengan ibu (68 thn), budget Rp 70 juta, hotel dekat Haram…"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand font-bold text-ivory transition-colors hover:bg-brand-deep sm:w-auto sm:px-8"
          >
            <Send size={17} /> Kirim via WhatsApp
          </button>
          {sent && (
            <p className="mt-3 rounded-xl bg-brand-soft p-3 text-sm font-semibold text-brand-deep" role="status">
              ✓ WhatsApp terbuka di tab baru — tinggal tekan kirim. Sampai jumpa di sana!
            </p>
          )}
          <p className="mt-3 text-xs leading-relaxed text-ink-muted">
            Form ini membuka WhatsApp dengan pesan terisi — tidak ada data yang disimpan di server kami pada fase R1
            (selaras Kebijakan Privasi kami).
          </p>
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <h2 className="flex items-center gap-2 font-extrabold text-ink"><MessageCircle size={19} className="text-brand" /> WhatsApp</h2>
            <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xl font-extrabold text-brand hover:underline">
              +62 813-1651-6524
            </a>
            <p className="mt-1 text-sm text-ink-muted">Respons &lt; 15 menit jam kerja</p>
          </div>
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <h2 className="flex items-center gap-2 font-extrabold text-ink"><Mail size={19} className="text-brand" /> Email</h2>
            <a href="mailto:syarikat.haji@gmail.com" className="mt-2 block font-bold text-brand hover:underline">syarikat.haji@gmail.com</a>
            <p className="mt-1 text-sm text-ink-muted">Untuk kerja sama & kepatuhan</p>
          </div>
          <div className="rounded-2xl border border-line-warm bg-card p-6 shadow-card">
            <h2 className="flex items-center gap-2 font-extrabold text-ink"><MapPin size={19} className="text-brand" /> Kantor</h2>
            <address className="mt-2 text-[15px] not-italic leading-relaxed text-ink-muted">
              PT Syarikat Solution Haji Indonesia — Menara Cakrawala Lt. 12 Unit 05A,<br />
              Jl. MH Thamrin Kav. 9, Kebon Sirih, Menteng, Jakarta Pusat 10340<br />
              Kantor operasional: Perumahan Andalusia Garden Cluster Granada No.11, Mangkubumi, Tasikmalaya 46181
            </address>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-muted">
              <Clock size={14} /> Senin–Sabtu 08.00–17.00 WIB
            </p>
          </div>
          <div className="rounded-2xl bg-brand-soft p-5 text-sm leading-relaxed text-brand-deep">
            Pengelola PPIU yang ingin bergabung?{" "}
            <a href={waLink(waMessages.ppiuPartner)} target="_blank" rel="noopener noreferrer" className="font-bold underline">
              Ajukan Verifikasi 5 Lapis →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= FAQ ================= */
export function FaqPage() {
  const categories = ["umum", "verifikasi", "escrow", "pembatalan"] as const;
  const labels: Record<string, string> = { umum: "Pertanyaan Umum", verifikasi: "Verifikasi & Keamanan", escrow: "Escrow & Dana", pembatalan: "Pembatalan & Refund" };
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "FAQ" }]} />
      <SectionHeading
        center
        kicker="FAQ"
        title="Semua yang Biasa Ditanyakan Jamaah"
        sub="Tidak menemukan jawaban Anda? WhatsApp kami terbuka — respons di bawah 15 menit jam kerja."
      />
      {categories.map((cat) => {
        const items = faqList.filter((f) => f.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="mt-10" aria-label={labels[cat]}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-ink">
              {cat === "escrow" ? <FileText size={20} className="text-brand" /> : <ShieldCheck size={20} className="text-brand" />}
              {labels[cat]}
            </h2>
            <Accordion type="single" collapsible>
              {items.map((f, i) => (
                <AccordionItem key={i} value={`${cat}-${i}`} className="border-line-warm">
                  <AccordionTrigger className="text-left text-[16px] font-bold text-ink hover:text-brand hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-ink-muted">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        );
      })}
      <div className="mt-12 rounded-2xl bg-brand-soft p-6 text-center">
        <p className="font-semibold text-brand-deep">Masih ada pertanyaan?</p>
        <WaButton href={waLink(waMessages.general)} label="Tanya Langsung via WhatsApp" className="mt-4" />
      </div>
    </div>
  );
}

/* ================= KEBIJAKAN PRIVASI ================= */
export function PrivacyPage() {
  const sections: [string, string[]][] = [
    ["1. Data yang Kami Kumpulkan", [
      "Data identitas dasar (nama, kontak) yang Anda berikan saat konsultasi atau pembuatan akun (R2).",
      "Data paspor dan dokumen perjalanan yang diperlukan untuk pengajuan visa — hanya pada fase booking, terenkripsi AES-256 saat disimpan, dan dibagikan HANYA kepada PPIU pilihan Anda untuk keperluan visa.",
      "Data lokasi Hafizh Track (R3) — bersifat opt-in, diaktifkan dengan persetujuan eksplisit jamaah, dan disimpan maksimal 30 hari.",
      "Data penggunaan situs (halaman dilihat, sumber kunjungan) dalam bentuk agregat melalui GA4.",
    ]],
    ["2. Dasar Pemrosesan (UU PDP No. 27/2022)", [
      "Persetujuan — untuk pengiriman informasi dan fitur Hafizh Track; Anda dapat menariknya kapan pun.",
      "Pelaksanaan kontrak — untuk memproses booking dan komunikasi antara Anda dan PPIU.",
      "Kepentingan yang sah — untuk keamanan platform, pencegahan penipuan, dan perbaikan layanan.",
    ]],
    ["3. Dengan Siapa Data Dibagikan", [
      "PPIU yang Anda pilih (data perjalanan yang relevan saja).",
      "Bank syariah mitra untuk operasional escrow (data pembayaran).",
      "Tidak pernah: penjualan data ke pihak ketiga untuk iklan — komitmen keras kami.",
    ]],
    ["4. Hak Anda sebagai Subjek Data", [
      "Meminta akses, koreksi, dan penghapusan data pribadi Anda.",
      "Meminta penghentian pemrosesan atau penarikan persetujuan.",
      "Mengajukan keberatan langsung kepada kami atau ke lembaga pengawas perlindungan data.",
      "Permintaan dijawab maksimal 3×24 jam kerja melalui syarikat.haji@gmail.com.",
    ]],
    ["5. Retensi & Keamanan", [
      "Data akun aktif disimpan selama akun berjalan; setelah dihapus, data disanitasi dalam 30 hari.",
      "Data lokasi tracking: maksimal 30 hari sejak perjalanan berakhir (R3).",
      "Data paspor: dihapus setelah visa terbit dan perjalanan selesai, kecuali diwajibkan hukum lain.",
      "Enkripsi saat transit (HTTPS) dan saat disimpan (data sensitif), akses internal berbasis peran (least privilege).",
    ]],
    ["6. Kontak Petugas Pelindungan Data (DPO)", [
      "Email: syarikat.haji@gmail.com — untuk semua permintaan terkait data pribadi Anda.",
      "Kami menugaskan DPO sejak R1 sebagai komitmen kepatuhan, meskipun skala data R1 masih kecil.",
    ]],
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Kebijakan Privasi" }]} />
      <h1 className="text-[30px] font-extrabold text-ink md:text-[36px]">Kebijakan Privasi</h1>
      <p className="mt-2 text-sm text-ink-muted">Berlaku efektif 1 Februari 2026 • Direview terakhir: 14 Februari 2026</p>
      <p className="mt-6 text-[17px] leading-[1.75] text-ink">
        Kami menangani data jamaah dengan standar yang sama dengan yang kami tuntut dari PPIU: jujur dan terbatas pada
        kebutuhan. Kebijakan ini menjelaskan apa yang kami kumpulkan, mengapa, dan hak Anda — selaras dengan Undang-Undang
        Perlindungan Data Pribadi No. 27 Tahun 2022.
      </p>
      {sections.map(([title, items]) => (
        <section key={title} className="mt-8">
          <h2 className="text-[20px] font-bold text-ink">{title}</h2>
          <ul className="mt-3 space-y-2">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                <ShieldCheck size={16} className="mt-1 shrink-0 text-brand" />
                {it}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ================= SYARAT & KETENTUAN ================= */
export function TermsPage() {
  const parts: { title: string; intro: string; points: string[] }[] = [
    {
      title: "A. Relasi SolusiHajj — Jamaah",
      intro: "Ketika Anda menggunakan SolusiHajj sebagai jamaah:",
      points: [
        "SolusiHajj adalah platform pembanding dan fasilitator kepercayaan — BUKAN penyelenggara perjalanan ibadah.",
        "Informasi paket berasal dari PPIU; kami berupaya memverifikasinya, namun kontrak perjalanan tetap antara Anda dan PPIU.",
        "Penggunaan tool Cek Izin PPIU dan Kalkulator bersifat gratis dan as-is; bukan pengganti verifikasi hukum resmi Kemenag.",
        "Anda menyetujui Kebijakan Privasi kami, termasuk praktik data paspor pada fase booking.",
      ],
    },
    {
      title: "B. Relasi SolusiHajj — PPIU",
      intro: "Ketika Anda bergabung sebagai PPIU partner:",
      points: [
        "Anda wajib memiliki izin PPIU aktif dan menyetujui Verifikasi 5 Lapis, termasuk audit kantor dan pengecekan referensi.",
        "Komisi 4–6% dikenakan HANYA atas transaksi yang escrow-nya cair; tidak ada biaya tayang tersembunyi.",
        "Anda bertanggung jawab atas akurasi data paket (harga, hotel, jarak, kuota). Data menyesatkan = penurunan tier atau penghentian kerja sama.",
        "Anda wajib merespons jamaah maksimal 2×24 jam dan menaati standar balasan review Saksi Jamaah (sopan, tanpa data pribadi).",
      ],
    },
    {
      title: "C. Kontrak Perjalanan Jamaah — PPIU",
      intro: "Untuk perjalanan ibadah itu sendiri:",
      points: [
        "Kontrak perjalanan dibuat langsung antara jamaah dan PPIU dengan syarat & skema refund yang tercantum di halaman paket.",
        "AmanahEscrow menahan dan merilis dana sesuai milestone 40/40/20 yang disepakati; sengketa penyelesaiannya mengikuti kontrak dan hukum Indonesia.",
        "SolusiHajj memfasilitasi dokumentasi dan mediasi awal, namun tidak menggantikan mekanisme hukum kontrak antara kedua belah pihak.",
      ],
    },
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
      <Breadcrumb items={[{ label: "Beranda", to: "/" }, { label: "Syarat & Ketentuan" }]} />
      <h1 className="text-[30px] font-extrabold text-ink md:text-[36px]">Syarat & Ketentuan</h1>
      <p className="mt-2 text-sm text-ink-muted">Berlaku efektif 1 Februari 2026 • Versi 1.0</p>
      <p className="mt-6 text-[17px] leading-[1.75] text-ink">
        Dengan menggunakan SolusiHajj, Anda memahami posisi setiap pihak. Kami memisahkan tiga relasi agar tidak ada
        ruang tafsir ganda — prinsip yang sama yang kami tuntut dari PPIU dalam hal harga.
      </p>
      {parts.map((p) => (
        <section key={p.title} className="mt-8">
          <h2 className="text-[20px] font-bold text-ink">{p.title}</h2>
          <p className="mt-2 text-[15px] text-ink-muted">{p.intro}</p>
          <ul className="mt-3 space-y-2">
            {p.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                <Scale size={16} className="mt-1 shrink-0 text-brand" />
                {pt}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <div className="mt-10 rounded-2xl border border-line-warm bg-card p-6 text-[15px] leading-relaxed text-ink-muted">
        Syarat & ketentuan ini tunduk pada hukum Republik Indonesia. Pertanyaan lebih lanjut:{" "}
        <a href="mailto:syarikat.haji@gmail.com" className="font-bold text-brand hover:underline">syarikat.haji@gmail.com</a>.
      </div>
    </div>
  );
}

/* ================= 404 ================= */
export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="font-amiri text-4xl text-brand" aria-hidden="true">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
      <h1 className="mt-6 text-3xl font-extrabold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-muted">
        Seperti kehilangan arah di perjalanan — tidak apa-apa, mari kembali ke jalur yang benar.
      </p>
      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <button
          onClick={() => navigate("/")}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-6 font-bold text-ivory hover:bg-brand-deep"
        >
          Kembali ke Beranda
        </button>
        <Link to="/paket" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand px-6 font-bold text-brand hover:bg-brand-soft">
          Lihat Katalog Paket
        </Link>
      </div>
    </div>
  );
}
