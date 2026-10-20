# 📄 DOKUMEN 31 — DOMAIN & DNS CONFIGURATION
## solusihajj.com — Peta Record, Email, dan Ketahanan

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Registrar rekomendasi:** terpisah dari hosting (portabilitas!)

---

## 1. ARSITEKTUR DOMAIN

```
solusihajj.com           → aplikasi utama (katalog + marketplace)
www.solusihajj.com       → 301 ke root
staging.solusihajj.com   → lingkungan QA (R2)
api.solusihajj.com       → opsional R3 (pemisahan API/app)
hafizh.solusihajj.com    → web pengikut tracking keluarga (R3)
cdn.solusihajj.com       → Cloudflare (aset statis, R2)
status.solusihajj.com    → halaman status uptime (R2)
docs.solusihajj.com      → opsional: portal dokumen publik/partner
```

Domain cadangan yang diaktifkan redirect 301 (membela typo & jahat): `solusihajj.id`, `solusihajj.co.id`, `solusiumroh.com` — renew tahunan dicatat di kalender (dok 33). ⚠️ TIDAK memakai subdomain `umroh.` atau `haji.` pada domain lain milik ekosistem agar otoritas SEO fokus.

## 2. DNS RECORD (R1 — shared hosting)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | [IP cPanel hosting] | 3600 |
| CNAME | www | solusihajj.com | 3600 |
| MX | @ | [sesuai provider email — Zoho/Google Workspace] | 3600 |
| TXT | @ | `v=spf1 include:[provider] -all` | 3600 |
| TXT | [selector]._domainkey | [kunci DKIM dari provider email] | 3600 |
| TXT | _dmarc | `v=DMARC1; p=quarantine; rua=mailto:dpo@solusihajj.com; adkim=s` | 3600 |
| CAA | @ | `0 issue "letsencrypt.org"` (+ CA hosting bila beda) | 3600 |

Catatan CAA: mengunci siapa yang boleh menerbitkan sertifikat — pengaman murah yang jarang dipakai. DMARC naik bertahap: `p=none` (2 minggu awal, pantau laporan) → `p=quarantine` → `p=reject` setelah deliverability stabil.

## 3. DNS RECORD (R2 — VPS + Cloudflare)

| Type | Name | Value |
|---|---|---|
| A | @ | [IP VPS] — proxied (Cloudflare, oranye) |
| A | staging | [IP VPS] — **DNS only** (abu, agar certbot mudah) |
| CNAME | cdn | [Cloudflare/asset path] |
| TXT/CAA/MX/DKIM/DMARC | | sama seperti R1 |
| (opsional) A | api | [IP VPS] — DNS only di R3 bila dipisah |

Cloudflare mode: Proxy untuk publik (menyembunyikan IP origin, DDoS protection gratis), selalu HTTPS, "Always Use HTTPS" ON, Brotli ON, cache rule: `/img/*` 1 bulan. Origin antara CF→VPS tetap pakai sertifikat origin.

## 4. EMAIL DOMAIN (Deliverability = Kepercayaan)

Sender transaksional: `notifikasi@solusihajj.com`; manusia: `salam@`, `partner@` (PPIU), `dpo@` (PDP, dok 24). Wajib: SPF + DKIM + DMARC tervalidasi; mail-tester ≥ 9/10 sebelum rilis; tidak pernah kirim dari domain pribadi founder. Reply-to `salam@` agar jawaban jamaah masuk kotak yang dijaga.

## 5. PROSEDUR PERUBAHAN DNS

1. Catat perubahan rencana di changelog (record lama→baru + alasan + waktu).
2. Turunkan TTL ke 300 setengah hari sebelum perubahan besar (migrasi IP).
3. Ubah → verifikasi: `dig +short`, whatsmydns.net (propagasi global), https + SMTP test.
4. Kembalikan TTL normal setelah stabil.
5. Tangkapan layar record final disimpan di `docs/dns-snapshot-YYYYMMDD.png` — aturan "2 pagi": dokumen ini ada supaya jam 2 pagi tidak panik menebak.

## 6. KEAMANAN DOMAIN

Registrar: 2FA wajib, transfer lock ON, kontak WHOIS akurat (bisa pakai privacy). Pemilik akun registrar & DNS = PT/founder (BUKAN vendor/relawan) — akses vendor dibuat sebagai delegasi yang bisa dicabut. Domain auto-renew + kartu cadangan + reminder 30 hari (kalender GUNARA OS). Email pemulihan registrar: akun founder yang di-2FA.
