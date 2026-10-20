# 📄 DOKUMEN 12 — TECH STACK DECISION
## Satu Stack, Dua Panggung: Shared Hosting → VPS Tanpa Rewrite

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Keputusan:** Next.js (App Router) + TypeScript, bertahap

---

## 1. KEPUTUSAN FINAL

| Layer | Rilis 1.0 (Shared Hosting) | Rilis 2.0+ (VPS/Cloud) |
|---|---|---|
| Framework | **Next.js 15+ App Router, `output: 'export'`** (statis) | **Next.js 15+ App Router full-stack** (kode yang sama, fitur aktif bertahap) |
| Styling | Tailwind CSS (compile lokal, BUKAN CDN) | sama |
| Bahasa | TypeScript strict | sama |
| UI | Komponen sendiri sesuai dok 15 (+ Headless UI bila perlu) | sama |
| State/data | File JSON + MDX (git-based) | **PostgreSQL + Prisma ORM** |
| Auth | — | **NextAuth (credentials + WA OTP)** |
| Payment | — | **Midtrans/Xendit (VA, QRIS, e-wallet)** + escrow bank syariah |
| Email/WA | EmailJS / PHP mailer hosting | Resend/Nodemailer + WA Business API (template resmi) |
| Analytics | GA4 + GSC | sama + event server-side |
| Hosting | cPanel shared hosting | VPS 2 vCPU/4GB (Docker + Nginx + PM2) atau Vercel + managed DB |
| Repo | GitHub private, branch main | sama |

## 2. KENAPA NEXT.js DUA PANGGUNG INI JENIUS

Kebanyakan project mati di persimpangan ini: statis dulu lalu rewrite total saat jadi marketplace (buang 3 bulan kerja), atau langsung full-stack tapi tersandung hosting dan biaya. Next.js memungkinkan SATU codebase: R1 build statis (`output: 'export'`) menghasilkan HTML murni yang hidup bahagia di cPanel murah — persis pola terbukti Project-FORTRESS. Saat gerbang validasi R2 lolos, kode yang sama diangkat ke VPS: API routes menyala, Prisma terhubung, halaman katalog berganti dari baca-JSON ke query database **dengan slug URL yang identik** — SEO tidak patah satu rupiah pun. Desain komponen (dok 15) juga tetap 100%.

## 3. DECISION MATRIX (R2 — saat fitur dinamis dibutuhkan)

| Kriteria (bobot) | Next.js | Laravel | WordPress + plugin | PHP native |
|---|:---:|:---:|:---:|:---:|
| Kesesuaian marketplace & ekosistem AI (25%) | 9 | 7 | 4 | 4 |
| Performa & modern UX (20%) | 9 | 7 | 5 | 6 |
| SDM & ekosistem AI agent (15%) | 10 | 7 | 5 | 5 |
| Biaya hosting & ops (15%) | 7 | 8 | 7 | 9 |
| Keamanan attack surface (10%) | 8 | 8 | 4 | 5 |
| Skala & fitur realtime (GPS/AI) (15%) | 9 | 6 | 3 | 3 |
| **TOTAL** | **8.7** | **7.2** | **4.6** | **5.0** |

WordPress kalah karena plugin marketplace umrah tidak ada yang mature, attack surface terbesar dunia, dan sulit diaudit regulator. Laravel layak untuk tim PHP besar — kita bukan. Next.js menang karena satu bahasa untuk UI+API, tipe data ketat (paspor & dana!), dan semua AI agent GUNARA OS paling produktif di ekosistem ini.

## 4. ARSITEKTUR R2 (Diagram Tekstual)

```
Browser/App ──► Nginx (VPS) ──► Next.js (PM2/Docker)
                     │                 │
                     │                 ├── API Routes: /api/auth, /api/booking, /api/escrow, /api/webhook-payment
                     │                 ├── Prisma ──► PostgreSQL (managed / docker)
                     │                 └── Redis (opsional R3: queue, rate limit)
                     └── Static assets → CDN (Cloudflare free)
Pembayaran: Midtrans/Xendit ──webhook──► /api/webhook/payment (signature verify, idempotent)
Escrow: VA → Rekening Amanah Bank Syariah → rilis milestone (admin + bukti; otomatis di R3)
WA: Business API untuk notifikasi transaksional (template terverifikasi)
```

## 5. KAPAN SAATNYA NAIK KELAS / GANTI ALAT?

Trigger migrasi shared hosting → VPS: masuk gerbang R2 (dok 05) — BUKAN karena "pengen canggih". Trigger upgrade VPS: CPU > 70% 3 hari berturut, DB > 5GB, atau traffic > 100k kunjungan/bln. Trigger fitur: hanya via Change Request dok 05. Sampai trigger itu: **SEDERHANA MENANG.**

## 6. KEPUTUSAN YANG TIDAK DIREVISI (Anti-Biksyon)

- Tailwind via CDN ❌ dilarang di production (performa & purging).
- Card payment disimpan di server kita ❌ — SELALU lewat gateway (PCI berpindah ke gateway).
- dana jamaah di rekening operasional ❌ — arsitektur escrow mutlak (dok 03 FR-201).
- Database akses root dari aplikasi ❌ — user DB terbatas + connection pooling.
- Semua keputusan arsitektur baru wajib dicatat di `37-changelog` dengan alasan — arsitektur yang tidak tertulis dianggap tidak ada.
