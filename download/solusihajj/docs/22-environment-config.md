# 📄 DOKUMEN 23 — ENVIRONMENT CONFIGURATION
## Peta Variabel Lingkungan & Disiplin Rahasia

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. PRINSIP

Satu file contoh (`env.example.md`) masuk repo; file `.env*` asli TIDAK PERNAH masuk repo (gitignore dok 21). Rahasia hanya hidup di: GitHub Secrets (CI), panel VPS (R2), cPanel env (R1 — sebatas email). Rotasi kredensial setiap 6 bulan + segera saat ada indikasi bocor. Siapa pun yang keluar tim → semua aksesnya dicabut hari itu juga.

## 2. MATRIKS ENVIRONMENT

| Environment | Tujuan | Data | Kredensial |
|---|---|---|---|
| `development` | Laptop founder + AI agents | Dummy/seed | Sandbox gateway, test WA |
| `staging` (R2) | QA penuh sebelum production | Dummy mirip real | Sandbox gateway, DB terpisah |
| `production` | Jamaah nyata | Data asli — sensitif | Live keys, escrow bank real |

## 3. DAFTAR VARIABEL (R2 — sumber kebenaran)

```bash
# ── CORE ─────────────────────────────────────────────
NODE_ENV=                     # development | production
NEXT_PUBLIC_APP_URL=          # https://solusihajj.com (dipakai canonical & sitemap)
NEXT_PUBLIC_APP_NAME=SolusiHajj

# ── DATABASE (server-only) ───────────────────────────
DATABASE_URL=postgresql://user:pass@host:5432/solusihajj?sslmode=require
# ⚠️ user DB bukan superuser; sslmode wajib

# ── AUTH (NextAuth) ──────────────────────────────────
NEXTAUTH_URL=                 NEXTAUTH_SECRET=
WA_OTP_API_KEY=               # WA Business API token
WA_OTP_SENDER=                # nomor pengirim terverifikasi

# ── PAYMENT GATEWAY (Midtrans/Xendit) ────────────────
PAYMENT_SERVER_KEY=           # server-only, jangan NEXT_PUBLIC!
PAYMENT_CLIENT_KEY=           # satu-satunya yang boleh NEXT_PUBLIC_
PAYMENT_WEBHOOK_TOKEN=        # verifikasi signature webhook
PAYMENT_SNAPSHOT_SECRET=      # Midtrans SHA512 verification (bila Midtrans)

# ── ESCROW BANK (manual-assisted R2) ─────────────────
ESCROW_BANK_NAME=             ESCROW_ACCOUNT_NO=
ESCROW_STATEMENT_API_KEY=     # bila tersedia; else rekonsiliasi manual

# ── EMAIL / WA NOTIF ─────────────────────────────────
RESEND_API_KEY=               NOTIF_FROM_EMAIL=notifikasi@solusihajj.com
SMTP_HOST=  SMTP_USER=  SMTP_PASS=   # fallback shared hosting R1

# ── ENKRIPSI DATA SENSITIF (paspor) ──────────────────
PII_ENC_KEY=                  # 32-byte AES-256-GCM, base64 — TERPISAH dari DB!
PII_ENC_KEY_OLD=              # kunci lama saat rotasi (dekripsi only)

# ── AI (R3, NurMatch) ────────────────────────────────
LLM_API_KEY=  LLM_MODEL=      # hanya menyusun alasan dari data terstruktur
LLM_MONTHLY_BUDGET_USD=25     # hard cap biaya

# ── MONITORING ───────────────────────────────────────
SENTRY_DSN=                   GA4_MEASUREMENT_ID=          # NEXT_PUBLIC boleh
UPTIME_ROBOT_KEY=

# ── R1 SHARED HOSTING (satu-satunya) ─────────────────
MAILER_TO_EMAIL=salam@solusihajj.com   MAILER_SUBJECT_PREFIX=[SHJ-Lead]
```

Aturan prefix: `NEXT_PUBLIC_*` = terekspos ke browser — hanya berisi nilai non-rahasia. Kecurigaan? Anggap bocor: `security:` commit + rotasi (runbook dok 30 §rollback, dok 23).

## 4. ENKRIPSI PII (paspor & data kelahiran)

`PII_ENC_KEY` dipisah dari DATABASE_URL karena ancamannya beda: DB bisa dibaca lewat SQL injection, kunci tidak. Enkripsi via `lib/pii.ts` (AES-256-GCM, AAD = bookingId agar data tak bisa dipindah antar record). Rotasi tahunan: tulis baru dengan `PII_ENC_KEY`, baca lama dengan `PII_ENC_KEY_OLD`, migrasi idle lalu hapus old. Backup DB terenkripsi tetap wajib (dok 33) — tanpa kunci, backup tak bernilai bagi pencuri: itu tujuannya.

## 5. CEK KESEHATAN CONFIG (pre-deploy)

□ `npm run env:check` memvalidasi semua variabel wajib ada & format benar (script sederhana) □ `NEXT_PUBLIC_APP_URL` cocok dengan domain final (canonical & sitemap ikut salah kalau ini salah!) □ kredensial gateway = mode LIVE di production, SAND di staging — cek manual dua kali □ webhook URL terdaftar di dashboard gateway sesuai env □ `PII_ENC_KEY` ada di production SEBELUM migration pertama □ tidak ada satu pun variabel rahasia yang bernilai sama antara staging & production.
