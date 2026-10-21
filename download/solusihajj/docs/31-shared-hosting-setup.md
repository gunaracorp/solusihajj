# 📄 DOKUMEN 32 — SHARED HOSTING SETUP
## Panduan cPanel untuk Rilis 1.0 — Murah, Rapi, Aman

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Cakupan:** R1 statis saja — marketplace R2 TIDAK di shared hosting

---

## 1. REQUIREMENTS HOSTING (checklist saat memilih/menilai provider)

□ PHP 8.1+ aktif (untuk mailer fallback) □ SSL gratis Let's Encrypt/AutoSSL □ cPanel + File Manager + FTP □ SSD + bandwidth cukup (target R1: < 20GB/minggu) □ Backup otomatis mingguan (tambahan, bukan pengganti dok 33) □ Uptime ≥ 99,5% □ Support responsif WA/ticket □ `AllowOverride` .htaccess aktif □ Tidak memblokir outgoing SMTP.

## 2. STRUKTUR `public_html` (hasil build statis)

```
public_html/
├── index.html                 # homepage hasil export
├── paket/  ppiu/  verifikasi/  escrow/  edukasi/  kalkulator-haji/
├── tentang/  kontak/  faq/  kebijakan-privasi/  syarat-ketentuan/
├── 404.html
├── assets/{css, js, img, fonts}/
├── sitemap.xml  robots.txt
├── mailer/                    # SATU file PHP: kirim lead → email (fallback form)
│   └── send.php
└── .htaccess
```

Rute bersih pakai folder/index.html (tanpa .html di akhir) — konsisten dengan dok 07 dan tidak berubah saat migrasi R2.

## 3. `.htaccess` LENGKAP (salin utuh)

```apache
# ── HTTPS wajib ─────────────────────────────────────
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ── www → non-www (SATU pilihan canonical, dok 07) ──
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^(.*)$ https://solusihajj.com/$1 [L,R=301]

# ── Keamanan ────────────────────────────────────────
Options -Indexes
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), camera=(), microphone=()"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  # CSP R1 (katalog statis):
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'"
</IfModule>

# ── Cache & kompresi ────────────────────────────────
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript image/svg+xml
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# ── Error page ──────────────────────────────────────
ErrorDocument 404 /404.html

# ── Blokir file sensitif ────────────────────────────
<FilesMatch "\.(env|md|log|json)$">
  Require all denied
</FilesMatch>
```

## 4. MAILER FALLBACK (`mailer/send.php`) — ATURAN KEAMANAN

Satu file PHP menerima POST: `nama`, `wa`, `konteks`, honeypot `website`. Wajib: (1) hanya terima dari origin sendiri (cek `HTTP_REFERER` + CSRF token sederhana dari form); (2) sanitasi semua input (`filter_var`, strip tags) — anti email-injection (header tidak boleh mengandung \n); (3) rate limit sederhana via file/session (3 submit/10 menit); (4) honeypot silent reject; (5) TIDAK menyimpan data ke server — langsung kirim ke `MAILER_TO_EMAIL` lalu respon JSON; (6) tidak menampilkan pesan error internal hosting. Uji penuh sesuai FIT-101..107 (dok 28).

## 5. PROSEDUR UPLOAD (manual fallback)

```
1. Build lokal: npm run build → dist/
2. Zip dist/ (isinya, bukan foldernya)
3. cPanel → File Manager → public_html → upload zip → extract
4. Verifikasi index.html di root; permission: folder 755, file 644
5. Aktifkan SSL (dok 33) → cek redirect https
6. Smoke test (dok 30 Runbook A langkah 7)
```

Preferensi utama tetap GitHub Actions FTP-Deploy (push = live) — manual hanya saat internet/CI bermasalah.

## 6. KETERBATASAN YANG DIKETAHUI (jujur & diterima)

Tidak ada Node → semua interaksi nyata (booking, akun) TIDAK ADA di R1 — funnel ke WA/form. Cron terbatas → sitemap.xml di-update saat build, bukan otomatis. Mail () bisa masuk spam → validasi deliverability (dok 28 §6) dan pertimbangkan SMTP relay (Zoho) sejak awal. Bandwidth dibatasi → gambar kompres ketat (dok 25). Semua keterbatasan ini dirancang TIDAK menyakitkan karena R1 memang statis; saat fitur dinamis dibutuhkan, itu tanda gerbang R2 sudah lolos — pindah VPS (dok 12), bukan paksakan shared hosting.
