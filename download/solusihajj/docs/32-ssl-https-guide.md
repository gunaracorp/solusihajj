# 📄 DOKUMEN 33 — SSL & HTTPS GUIDE
## Kunci Gembok Hijau — Minimal Wajib, Ideal Disetel Rapi

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. KENAPA NON-NEGOTIABLE

Jamaah akan mengisi form yang berujung pembayaran puluhan juta rupiah. Browser Chrome menandai situs tanpa HTTPS "Tidak Aman" tepat di samping nama brand — kepercayaan mati sebelum kalimat pertama dibaca. Plus: CSP/HSTS (dok 24), ranking SEO, dan syarat wajib gateway pembayaran. SSL di SolusiHajj bukan opsional sejak detik pertama.

## 2. PILIHAN SERTIFIKAT

| Kebutuhan | Solusi | Biaya |
|---|---|---|
| R1 shared hosting | AutoSSL/Let's Encrypt via cPanel | Rp 0 |
| R2 VPS | Let's Encrypt via certbot (auto-renew) | Rp 0 |
| R2 via Cloudflare proxy | Sertifikat edge Cloudflare + origin cert VPS | Rp 0 |

Sertifikat berbayar (EV/wildcard) tidak diperlukan pada tahap ini — indikator gembok sudah sama; uang lebih baik disimpan untuk escrow ops.

## 3. INSTALASI R1 (cPanel)

```
1. cPanel → SSL/TLS Status → Run AutoSSL (pilih provider Let's Encrypt)
2. Tunggu ≤ 1 jam; cek gembok di https://solusihajj.com
3. Force HTTPS via .htaccess (sudah ada di dok 32 §3) — uji: buka http:// → harus 301 ke https://
4. cek www → 301 ke non-www
5. Ganti SEMUA asset internal ke path relatif / URL https (tidak ada http:// tersisa)
```

## 4. INSTALASI R2 (VPS + Nginx)

```
1. sudo apt install certbot python3-certbot-nginx
2. sudo certbot --nginx -d solusihajj.com -d www.solusihajj.com
   (+ -d staging.solusihajj.com pada server block staging — DNS only)
3. Auto-renew: sudo certbot renew --dry-run (timer systemd aktif default)
4. Nginx: ssl_protocols TLSv1.2 TLSv1.3; http2 on; HSTS header (dok 24)
5. Cloudflare (jika dipakai): SSL mode = Full (strict) + sertifikat origin di VPS
   ⚠️ JANGAN "Flexible" — menyebabkan redirect loop & trafik tidak terenkripsi ke origin
```

## 5. HSTS & KEKUATAN KONFIGURASI

Header HSTS sudah di .htaccess/Nginx (`max-age=31536000; includeSubDomains`). Preload: kirim ke hstspreload.org HANYA setelah 100% yakin seluruh subdomain akan HTTPS selamanya (staging DNS-only tetap boleh via sertifikat; hafizh/cdn R3 wajib siap SSL). Keamanan diverifikasi: securityheaders.com target **A**, ssllabs.com target **A-** ke atas; ulang setiap rilis mayor + hasil dicatat di changelog.

## 6. MIXED CONTENT — PEBIANG #1

Satu gambar `http://` membuat gembok tercoret. Aturan: semua URL internal relatif (`/assets/...`); gambar PPIU & logo dihosting ulang di domain kita (juga anti-hotlink); iframe hanya Maps + gateway snap yang https. Cek otomatis: Lighthouse "Best Practices" + situs bila ada peringatan mixed content → perbaiki sebelum rilis (Best Practices ≥ 95, dok 29).

## 7. CHECKLIST SSL PER RILIS

□ https membuka tanpa peringatan (Chrome + Safari iOS) □ http→https 301 semua rute □ www→non-www 301 □ tidak ada mixed content (lighthouse BP ≥ 95) □ TLS 1.3 aktif, TLS ≤1.1 mati □ HSTS header terbaca (curl -I) □ sertifikat auto-renew terbukti (catat tanggal expire di kalender 30 hari sebelumnya) □ securityheaders ≥ A □ test di device matrix (dok 27) #1, #4, #8.
