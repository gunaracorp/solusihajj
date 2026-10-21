# 📄 DOKUMEN 14 — API SPECIFICATION
## Kontrak API Internal + Integrasi Pihak Ketiga

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Basis:** Next.js Route Handlers (`app/api/*`), JSON, REST

---

## 1. KONVENSI UMUM

Semua response dibungkus: `{ ok: true, data }` atau `{ ok: false, error: { code, message, field? } }`. Error code: `VALIDATION_ERROR`, `AUTH_REQUIRED`, `FORBIDDEN`, `NOT_FOUND`, `QUOTA_EMPTY`, `PAYMENT_FAILED`, `RATE_LIMITED`. Autentikasi via session cookie NextAuth (web) + Bearer token (app R3). Semua endpoint mutasi wajib: validasi Zod, rate limit, AuditLog. Semua nominal = integer rupiah. Timestamp = ISO 8601 UTC.

## 2. API PUBLIK (Tanpa login)

### 2.1 Katalog & Pencarian
```
GET  /api/packages?q=&kota=&tanggal=&budgetMax=&jarakMax=&bintang=&badge=&sort=&cursor=
  → data: { items: PackageListItem[], nextCursor }  (limit 12)
GET  /api/packages/[slug]
  → data: { package, ppiu: {nama, badge, ratingAvg}, dates[], reviewsSummary }
GET  /api/ppiu?kota=&badge=&cursor=      GET /api/ppiu/[slug]
GET  /api/verifikasi/cek?nama=[query]
  → data: { ditemukan: bool, ppiu?: { namaTampil, noIzinPpiu, badge, badgeValidUntil,
             lapis: {legal, finansial, operasional, trackrecord, performa}, sumberResmi: url } }
  ⚠️ Rate limit ketat (10 req/menit/IP): tool publik anti-scraping.
POST /api/lead   { nama, wa, sumber, konteks }  → data: { leadId }
  Validasi WA: regex ^(\+?62|0)8[0-9]{7,12}$ + honeypot `website` (harus kosong).
GET  /api/faq  GET /api/articles  GET /api/articles/[slug]
```

## 3. API JAMAAH (Login)

```
POST /api/auth/register  { nama, phone, email?, password? }  → OTP WA
POST /api/auth/otp-verify  { phone, kode }
GET  /api/me/bookings                          → daftar + status escrow ringkas
GET  /api/bookings/[id]                        → detail + dokumen + timeline
POST /api/bookings   { packageDateId, jamaahDetail[], tipeKamar }
  → validasi sisaKuota (transaction + lock), buat DRAFT, kembalikan { bookingId, totalNominal }
POST /api/bookings/[id]/kontrak  { setujuPasal: [1..7], tandaTanganNama }
  → simpan hash kontrak; status → KONTRAK_DITANDATANGANI; buat instrumen VA
POST /api/bookings/[id]/batal  { alasan }  → hitung refund per syarat paket
GET  /api/bookings/[id]/escrow                 → milestone + bukti per tahap
POST /api/reviews  { bookingId, hotel..value, teks, fotoUrls[] }
  → server cek Booking.status = PULANG (gating mutlak); status PENDING moderasi
POST /api/tracking/[sessionId]/consent  { followers[] }   GET /api/tracking/points/:sessionId
POST /api/sos  { sessionId, lat, lng }  → notifikasi mutawif+panitia+followers (antrian prioritas)
POST /api/match-profile  { usia, mobilitas, budgetMin, budgetMax, ... }
POST /api/ai/recommend  { matchProfileId }  → data: { items: [{packageId, skor, alasan[] }] }
  ⚠️ NurMatch WAJIB menjawab dari data platform (packages + reviews) — LLM hanya menyusun alasan, bukan mengarang harga.
```

## 4. API PPIU (Console)

```
GET/POST /api/ppiu/paket  GET/PATCH /api/ppiu/paket/[id]  (DRAFT→PUBLISHED via admin)
POST /api/ppiu/paket/[id]/dates  { tglBerangkat, tglPulang, kuota, harga? }
GET  /api/ppiu/bookings?status=  POST /api/ppiu/bookings/[id]/konfirmasi
POST /api/ppiu/bookings/[id]/dokumen  { jenis, file }  (visa, tiket, manifest)
GET  /api/ppiu/payout  → jadwal rilis escrow + bukti
POST /api/ppiu/reviews/[id]/balas  { teks }  (sekali per review)
```

## 5. API ADMIN

```
POST /api/admin/ppiu/[id]/verifikasi  { lapis, hasil, catatan }  → badge update + audit
GET  /api/admin/escrow?status=  POST /api/admin/escrow/[id]/rilis  { milestone, buktiUrl }
POST /api/admin/disputes/[id]/keputusan  { hasil, refundNominal? }
GET  /api/admin/moderasi/reviews  POST /api/admin/reviews/[id]/keputusan
```

## 6. WEBHOOK PIHAK KETIGA

```
POST /api/webhook/payment   (Midtrans/Xendit)
  1. Verifikasi signature (shared secret)  2. Idempotensi via gatewayRef (UPSERT)
  3. paid → Payment.verified, Booking.status=TERBAYAR, Escrow TERTAHAN
  4. Trigger notifikasi jamaah + PPIU; response 200 segera (< 5s), kerja berat via queue.
POST /api/webhook/insurance (VAS R3)
```

## 7. INTEGRASI EKSTERNAL (Registry)

| Layanan | Tujuan | Kredensial di | Catatan |
|---|---|---|---|
| Midtrans/Xendit | VA, QRIS, e-wallet | env server-only | webhook signature WAJIB diverifikasi |
| Bank Syariah (escrow) | rekening amanah + mutasi | manual + statement API jika tersedia | rekonsiliasi harian |
| WA Business API | OTP & notifikasi | env | template harus terverifikasi meta |
| Resend/SMTP | email transaksional | env | fallback WA bila email gagal |
| LLM (NurMatch R3) | susun alasan rekomendasi | env | prompt dibatasi data terstruktur |
| Maps/Geocoding | jarak hotel-Haram | env | dihitung saat kurasi (statis), bukan runtime |
| Sentry | error monitoring | env (R2) | alert ke founder |

## 8. KEAMANAN API (Ringkas — detail dok 23)

Rate limit global (60/menit/IP) + ketat di auth & cek-izin; semua input via Zod; output sanitize; CORS ketat (same-origin); idempotency key untuk POST pembayaran; file upload: whitelist MIME, max 5MB, rename UUID, simpan di luar webroot/public storage; SEMUA perubahan dana/wilayah sensitif → AuditLog. Tidak ada API key apa pun di kode klien — semua rahasia di server env (dok 22).
