# 📄 DOKUMEN 30 — DEPLOYMENT RUNBOOK
## Resep Deploy yang Bisa Dijalankan Siapa Pun — Termasuk AI Agent Masa Depan

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## RUNBOOK A — RILIS 1.0 (STATIC EXPORT → SHARED HOSTING)

**Prasyarat:** akun cPanel aktif, domain mengarah benar (dok 31), akses GitHub dengan secrets FTP, Node 20 di mesin build.

```
1. git checkout main && git pull
2. npm ci
3. npm run lint && npx tsc --noEmit          # wajib hijau
4. npm run build                             # output: dist/ (static export)
5. QA cepat lokal: npx serve dist → cek 5 halaman inti
6. Deploy:
   a. Otomatis: push tag v1.x → GitHub Actions → FTP-Deploy (secrets: FTP_*) → live
   b. Manual (fallback): zip dist/ → cPanel File Manager → extract ke public_html
7. Smoke test production (10 menit, dok 28 §7):
   □ Homepage, katalog, 1 detail paket, cek izin, kalkulator
   □ Form lead → email masuk   □ 1 link WA per varian   □ HTTPS terpaksa (redirect)
8. Tag release + catat di CHANGELOG + update GA4/GSC bila URL baru
9. Rollback: FTP upload versi dist/ sebelumnya (arsip di /releases/vX.Y.Z/)
```

Estimasi total: 30–45 menit. Jam aman deploy: 09.00–15.00 WIB (bukan Jumat sore, bukan menjelang musim haji).

## RUNBOOK B — RILIS 2.0 (FULL-STACK → VPS)

**Topologi:** VPS 2vCPU/4GB — Docker: `web` (Next.js), `db` (PostgreSQL) atau managed DB, `redis` (opsional R3), Nginx reverse proxy + certbot.

```
1. Staging dulu: push ke branch release/vX → CI deploy staging.solusihajj.com
2. QA penuh di staging: test plan dok 26 (TC inti) + form test dok 28 + budget dok 25
3. Backup pradeploy WAJIB (dok 33): pg_dump + .env snapshot + tag git
4. Migration: npx prisma migrate deploy   # review SQL di PR, tidak pernah blind-run
5. Production deploy:
   a. CI: SSH ke VPS → docker compose pull → docker compose up -d (rolling, health-check)
   b. Health: GET /api/health → 200 + cek 1 booking flow dummy jalur test
6. Smoke: pembayaran sandbox → matikan; VA real uji nominal kecil via jalur admin
7. Monitor 2 jam pertama: Sentry error, respon time, log webhook
8. Rollback: docker compose ke image tag sebelumnya + (bila migration) restore pg_dump
   ⚠️ Migration destruktif (drop/rename kolom) selalu 2 fase: tambah dulu → isi → hapus nanti.
```

## RUNBOOK C — EMERGENCY

| Situasi | Aksi |
|---|---|
| Situs down > 5 menit | Cek uptime alert → VPS/monitoring → statuspage → WA grup internal; komunkasi ke PPIU jika > 30 menit |
| Bug dana (escrow salah rilis) | **Bekukan fitur escrow** (feature flag), rekonsiliasi, rollback deploy, laporkan founder, kaji audit log |
| Data bocor dugaan | Runbook insiden dok 23 §7 — isolasi, rotasi, notifikasi PDP |
| Webhook gateway gagal massal | Aktifkan mode rekonsiliasi manual (import statement), komunikasi ke jamaah yang terdampak |
| Domain/SSL mati | Cek DNS (dok 31) → renew SSL (dok 32) → tidak bisa segera: maintenance page di CDN |

## PRINSIP RUNBOOK

1. **Deploy bukan event menegangkan** — karena semua langkah tertulis dan sudah berlatih.
2. **Selalu ada jalan mundur** — backup pradeploy + tag sebelumnya wajib; deploy tanpa rollback plan dilarang.
3. **Satu perubahan per deploy** — sulit mencari penyebab kalau bawa banyak.
4. **Catat di changelog segera** — waktu, versi, hasil smoke, keputusan (dok 37).
5. **AI agent boleh mengeksekusi runbook** dengan persetujuan founder di langkah yang menyentuh production — log seluruh output ke worklog.
