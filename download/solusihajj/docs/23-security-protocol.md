# 📄 DOKUMEN 24 — SECURITY PROTOCOL
## Melindungi Tiga Harta: Dana Jamaah, Data Paspor, Reputasi

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Dasar hukum:** UU No. 27/2022 (PDP)

---

## 1. MODEL ANCAMAN (Kita Dihancurkan Oleh Apa?)

1. **Pencurian data paspor** — jamaah mengunggah paspor; bocor = identitas ribuan orang + hukum PDP + kematian reputasi "terpercaya".
2. **Manipulasi dana/escrow** — injeksi booking, replika webhook, perubahan milestone tanpa hak.
3. **Defacement/spam** — form lead dibomb spam, halaman diinjeksi, SEO kena manual action.
4. **Kesalahan internal** — seed ke DB production, `.env` ter-commit, akses tidak dicabut.
5. **Phishing atas nama brand** — oknum memakai nama SolusiHajj menjual "paket murah" di luar platform (ancaman khas pasar umrah!).

## 2. LAYER 1 — APLIKASI

- Input: semua via Zod; output: escaping otomatis React (dilarang `dangerouslySetInnerHTML` kecuali sanitasi DOMPurify untuk konten MDX).
- SQL: Prisma parameterized — dilarang raw query tanpa alasan + review.
- Auth: NextAuth; password argon2id; OTP WA berlaku 5 menit, max 5 percobaan; sesi admin 30 menit idle timeout; role middleware di route group `(admin)` dan `(ppiu)`.
- Rate limit: global 60/menit/IP; auth 5/menit; cek-izin 10/menit; form lead 3/10 menit; SOS dibebaskan.
- Upload: whitelist MIME, max 5MB, nama UUID, simpan di storage non-webroot, eksekusi dilarang.
- IDOR: setiap endpoint cek kepemilikan (`booking.userId === session.id`) — booking ID tidak boleh diakses menebak-nebak.
- Webhook payment: verifikasi signature + idempotency (gatewayRef UPSERT) + status hanya maju (state machine — tidak bisa mundur dari CAIR ke TERTAHAN).

## 3. LAYER 2 — DATA (UU PDP 27/2022)

Data dipetakan 3 kelas: **Publik** (katalog), **Pribadi biasa** (nama, WA, email), **Sensitif** (paspor, kondisi fisik, lokasi tracking, dokumen KYC PPIU). Sensitif: enkripsi AES-256-GCM aplikasi-level (dok 22 §4), akses via fungsi khusus + AuditLog wajib per akses, minimisasi (jangan minta yang tak dipakai), retensi: tracking point 30 hari, paspor dihapus/anonimisasi 12 bulan pasca-trip kecuali kewajiban pajak/hukum. Hak subjek PDP: akses, koreksi, hapus (anonimisasi), penarikan persetujuan — mekanisme via dashboard + email DPO; respons ≤ 14 hari. Consent management: banner sederhana (GA4 & tracking), log persetujuan (siapa, kapan, versi teks). PII tidak pernah masuk log/error-report — helper `redact()`.

## 4. LAYER 3 — INFRASTRUKTUR

- **Headers** (R1 via .htaccess, R2 via Nginx/next): CSP ketat (`default-src 'self'`; script self + gtag; frame-src maps/gateway), HSTS 1 tahun + preload, X-Content-Type-Options nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy minimal.
- VPS: SSH key-only, password login mati, fail2ban, auto security update, firewall hanya 80/443/SSH, user DB aplikasi terbatas (bukan superuser), DB tidak boleh akses publik.
- Shared hosting R1: force HTTPS, `Options -Indexes`, permission 755/644, PHP mailer sanitasi ketat (email injection guard).
- Secret: dok 22; GitHub secret scanning on; rotasi 6 bulan.

## 5. LAYER 4 — DANA (khas marketplace umrah)

Pemisahan mutlak: dana jamaah → rekening amanah bank syariah; rekening operasional platform terpisah; tidak ada jalur kode/manusia yang bisa memindah dana ke rekening pribadi. Rilis milestone: dual-control (PPIU unggah bukti → admin lain verifikasi → rilis; admin yang memverifikasi ≠ admin yang membuat rilis). Semua mutasi dana → AuditLog immutable + rekonsiliasi harian (statement bank vs DB — selisih apapun = alarm P0). Payout hanya ke rekening PPIU atas nama badan usaha yang cocok dengan KYC — bukan rekening pribadi siapapun.

## 6. ANTI-PHISHING BRAND

Domain resmi HANYA: solusihajj.com + subdomain (dok 30). Halaman "Awas Penipuan Atas Nama SolusiHajj" di edukasi: cara verifikasi (badge, WA resmi, escrow), pelaporan. Monitor bulanan nama brand di pencarian & sosial; claim DMCA/laporkan akun palsu. Semua WA resmi dari SATU nomor terverifikasi (dok 22) — jika ada "CS SolusiHajj" nomor lain, itu scam; diinformasikan di FAQ.

## 7. RESPONS INSIDEN (playbook ringkas — detail operasi dok 36)

Deteksi (Sentry/Uptime/log) → **jam 0-1:** isolasi (matikan fitur terkait), founder tahu, catat timeline → **jam 1-24:** asesmen dampak, patch, reset kredensial terdampak → **PDP:** kebocoran data pribadi = WAJIB notifikasi subjek & (bila kategori tertentu) regulator sesuai UU 27/2022, tanpa menunggu → pasca: post-mortem tanpa saling menyalahkan → masuk lessons learned (dok 38). Latihan tabletop 1x/kuartal: "webhook replika menyuntik 50 booking" & "DB dump bocor".

## 8. CHECKLIST SECURITY PER RILIS

□ lint + tsc hijau □ dependency audit (npm audit; Dependabot on) □ headers lengkap (securityheaders.com ≥ A) □ rate limit teruji □ webhook signature teruji (positif & negatif) □ role gate teruji (jamaah tak bisa akses admin) □ PII tidak ada di log □ backup terverifikasi restore (dok 33) □ rekonsiliasi escrow hari pertama nol selisih.
