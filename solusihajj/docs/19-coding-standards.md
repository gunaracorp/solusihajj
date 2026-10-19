# 📄 DOKUMEN 20 — CODING STANDARDS
## Kode yang Bisa Dibaca Manusia, AI, dan Auditor

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. PRINSIP DASAR

SolusiHajj menangani dana jamaah dan data paspor — kode yang tidak rapi di sini bukan masalah estetika, melainkan risiko keamanan. Tiga prinsip: (1) **TypeScript strict selalu** — `strict: true`, tanpa `any` kecuali boundary eksternal terdokumentasi; (2) **bahasa ganda terkendali** — identifier & komentar kode dalam Bahasa Inggris, string UI & copy dalam Bahasa Indonesia (via konstanta, bukan hardcode liar); (3) **AI pun menulis kode** — karena itu standar harus bisa ditegakkan mesin: ESLint + Prettier + `tsc --noEmit` wajib hijau sebelum merge (Git workflow dok 21).

## 2. NAMING CONVENTION

| Objek | Konvensi | Contoh |
|---|---|---|
| File komponen | PascalCase | `PackageCard.tsx`, `EscrowTimeline.tsx` |
| Hook/util/lib | camelCase | `useBooking.ts`, `formatRupiah.ts` |
| Route handler | kebab-case sesuai path | `app/api/webhook/payment/route.ts` |
| Tipe/Interface | PascalCase + suffix | `BookingInput`, `EscrowStatus`, `PackageListItem` |
| Konstanta | SCREAMING_SNAKE | `MAX_FILE_SIZE_MB`, `ESCROW_SPLIT = {40,40,20}` |
| Variabel DB enum | SCREAMING_SNAKE nilai | `KONTRAK_DITANDATANGANI` |
| CSS (tailwind) | token dok 14 | `bg-primary`, `text-ink` |

Hindari singkatan kecuali mapan: `ppiU` salah — pakai `ppiu`; `amt` → `nominal`; `u` → `user`. Nama harus menyatakan maksud: `sisaKuota`, bukan `sisa` atau `qty2`.

## 3. STRUKTUR KOMPONEN & LOGIKA

Server Component default; `"use client"` hanya bila perlu interaksi/hook — halaman katalog & artikel harus tetap server-rendered untuk SEO. Aturan ukuran: komponen ≤ 200 baris; fungsi ≤ 50 baris; satu tanggung jawab per modul. State: server state via fetch/Prisma; client state minimal (useState + context kecil); TANPA Redux/Zustand sampai kebutuhan nyata terbukti (anti over-engineering, dok 12). Data fetching: server `prisma.*` langsung; client memakai API dok 14 — tidak pernah import prisma di client. Mutasi: API route + validasi Zod di server (validasi client hanya UX, bukan keamanan).

## 4. FORMAT & LINT

Prettier: 2 spasi, single quote, trailing comma, width 100. ESLint: `next/core-web-vitals` + `@typescript-eslint` recommended + aturan tambahan: `no-console` (kecuali warn/error), `no-explicit-any` (warn → error), `no-unused-vars`, `react-hooks/exhaustive-deps`. Git hook (husky + lint-staged): pre-commit lint+format file yang berubah; pre-push `tsc --noEmit`. Nilai magis dilarang: angka & string kunci masuk konstanta/konfigurasi (contoh: split escrow 40/40/20, retensi tracking 30 hari).

## 5. ATURAN KHUSUS SOLUSIHAJJ

1. **Uang = integer rupiah.** Dilarang float untuk nominal; format tampil via `formatRupiah()` tunggal.
2. **Tanggal = UTC di DB**, tampil via `formatTanggalID()` (Asia/Jakarta) — kebingungan zona = booking salah tanggal = krisis.
3. **No secrets di kode.** Semua kredensial via env (dok 22); dilarang commit `.env*`.
4. **Pii minim.** Jangan log paspor/nominal penuh; helper `redact()` wajib di log.
5. **Idempoten untuk mutasi berbahaya** (webhook payment, rilis escrow) — retry aman wajib.
6. **Status enum, bukan string liar** — tambah nilai enum lewat migration + review.
7. **Komentar menjelaskan MENGAPA**, bukan apa; komentar regulasi dicantumkan (`// UU PDP 27/2022 §…`).

## 6. TESTING MINIMUM

Unit: fungsi uang, tanggal, refund calculator, verifikasi WA — Jest/Vitest. Integrasi: API booking & escrow (happy + gagal) — Playwright API. E2E: 5 alur inti dok 25. Coverage target praktis: ≥ 70% pada `lib/` (logika dana), tidak mengejar 100% kosmetik.

## 7. CODE REVIEW GATE

Reviewer (founder atau Code-Smith agent + audit DeepSeek untuk logika dana) menolak jika: melanggar token desain dok 14; ada `any`; ada string UI liar; ada mutasi dana tanpa AuditLog; ada query N+1 jelas; ada komponen > 300 baris tanpa alasan. Setiap PR: deskripsi, screenshot (UI), catatan dampak performa. Merge: squash commit, judul sesuai conventional commits (dok 21).
