# 📄 DOKUMEN 22 — FOLDER STRUCTURE
## Blueprint Struktur Folder Next.js App Router

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. STRUKTUR LENGKAP

```
solusihajj/
├── docs/                          # 39 dokumen NEXUS (dok 00–38)
├── src/
│   ├── app/
│   │   ├── (marketing)/           # Route group publik — tanpa auth
│   │   │   ├── page.tsx           # Homepage (12 section dok 09)
│   │   │   ├── paket/
│   │   │   │   ├── page.tsx       # Katalog + filter
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── ppiu/[slug]/page.tsx
│   │   │   ├── verifikasi/page.tsx
│   │   │   │   └── cek-izin-ppiu/page.tsx
│   │   │   ├── escrow/page.tsx
│   │   │   ├── edukasi/{page.tsx, [slug]/page.tsx}
│   │   │   ├── kalkulator-haji/page.tsx
│   │   │   ├── tentang/page.tsx
│   │   │   ├── kontak/page.tsx
│   │   │   └── faq/page.tsx
│   │   ├── (auth)/                # masuk, daftar (R2)
│   │   ├── (jamaah)/              # /akun — layout auth + bottom-nav
│   │   │   └── akun/{page.tsx, booking/[id]/page.tsx, escrow/[id]/page.tsx}
│   │   ├── (ppiu)/                # /ppiu/dashboard — layout console
│   │   ├── (admin)/               # /admin — layout admin, role-gated
│   │   ├── api/                   # Route handlers (kontrak dok 14)
│   │   │   ├── packages/ ppiu/ verifikasi/ lead/
│   │   │   ├── bookings/ escrow/ reviews/ tracking/ sos/ ai/
│   │   │   ├── webhook/{payment, insurance}/
│   │   │   └── health/route.ts
│   │   ├── layout.tsx  ├── not-found.tsx  ├── error.tsx  ├── sitemap.ts  ├── robots.ts
│   ├── components/
│   │   ├── ui/                    # Primitif (Button, Input, Badge, Modal…) dok 15
│   │   ├── packages/              # PackageCard, DateTable, ItineraryTimeline
│   │   ├── escrow/                # EscrowTimeline, EscrowExplainer
│   │   ├── ppiu/                  # ShieldBadge, PpiuProfileCard
│   │   ├── layout/                # Navbar, Footer, WaFloating, Breadcrumb
│   │   └── forms/                 # LeadForm, BookingSteps, JamaahRepeater
│   ├── lib/                       # Logika murni (tanpa React)
│   │   ├── money.ts               # formatRupiah, kalkulasi refund, split escrow
│   │   ├── date.ts  ├── validation.ts (Zod schemas)  ├── escrow.ts
│   │   ├── auth.ts  ├── wa.ts (link generator WA-01..10)  ├── seo.ts
│   │   └── db.ts (Prisma client singleton)
│   ├── hooks/                     # useLeadForm, useTrackingConsent…
│   ├── styles/  │   │   └── globals.css  # @tailwind + token dok 14
│   ├── content/                   # R1: data JSON + MDX artikel
│   │   ├── packages.json  ├── ppiu.json  └── edukasi/*.mdx
│   └── types/                     # Tipe global & enum mirror Prisma
├── prisma/
│   ├── schema.prisma              # Skema dok 12
│   └── migrations/
├── public/
│   ├── img/{paket, ppiu, hero, pattern}/   # WebP, ≤ 200KB per gambar
│   └── icons/                     # favicon, apple-touch, og-image
├── scripts/                       # One-off: seed, migrate-data-r1-to-db
├── .github/workflows/{build.yml, deploy.yml}
├── tailwind.config.ts  ├── tsconfig.json  ├── next.config.mjs
├── CHANGELOG.md  ├── README.md  ├── LICENSE  ├── .gitignore  └── backlog.md
```

## 2. ATURAN PENEMPATAN

1. **Route group memisahkan dunia:** `(marketing)` tanpa auth & full SEO; `(jamaah)/(ppiu)/(admin)` punya layout middleware sendiri — tidak ada halaman admin bocor ke sitemap.
2. **`lib/` bebas React** — semua logika uang/tanggal/escrow murni & teruji; komponen hanya memanggil.
3. **`content/` hanya R1** — saat R2, `scripts/migrate-data-r1-to-db.ts` memindahkan JSON ke Prisma dengan bentuk field identik (dok 12); file JSON lalu menjadi arsip.
4. **Tidak ada folder liar** — komponen baru masuk kelompok yang ada; jika perlu kelompok baru, update dokumen ini dulu (commit `docs:`).
5. **Gambar:** nama kebab-case deskriptif (`paket-umrah-ramadhan-hotel-makkah.webp`), disimpan sesuai kategori, maksimal 200KB sebelum commit.

## 3. KONVENSI NAMA FILE & ROUTE

Route: folder kebab-case (`cek-izin-ppiu`) = URL final (dok 07). Komponen: PascalCase satu-nama-jelas. Route handler: `route.ts` di folder path API. Tidak ada `utils2.ts`, `final.jsx`, `baru-fix.jsx`. File yang dibuat AI tetap tunduk pada konvensi ini — reviewer menolak nama yang tidak menjelaskan isi.

## 4. ENVIRONMENT SEPARATION

R1: satu branch build → `dist/` statis (output export) diupload ke cPanel (dok 31). R2: staging (`staging.solusihajj.com`, DB terpisah, data dummy) dan production (`solusihajj.com` + `app` di subdomain bila perlu). Database production TIDAK PERNAH disentuh script eksperimen — hanya migration yang tereview. Seed data dummy JANGAN pernah dijalankan ke DB production (guard `NODE_ENV` wajib di script seed).

## 5. DISIPLIN STRUKTUR

Struktur ini bukan saran — ia kontrak. Alasannya: 15 AI agent GUNARA OS bekerja bergantian di repo ini; folder yang konsisten berarti agent mana pun menemukan tempat yang benar tanpa bertanya. Pelanggaran struktur = PR ditolak meskipun kodenya bagus. Ketika struktur perlu berubah (pertumbuhan sah), perubahan lewat commit `docs: update folder structure — alasan: …` agar semua agent sinkron pada iterasi berikutnya.
