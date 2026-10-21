# 📄 DOKUMEN 13 — DATABASE SCHEMA
## PostgreSQL + Prisma — 22 Tabel Jantung SolusiHajj

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Berlaku mulai R2** (R1 = JSON, struktur data identik)

---

## 1. PRINSIP

Dana, paspor, dan lokasi = data paling sensitif. Prinsip: (1) SEMUA tabel punya `id` UUID, `created_at`, `updated_at`; (2) uang disimpan integer rupiah (tanpa float!); (3) status pakai enum Prisma agar tidak ada string liar; (4) setiap aksi penting masuk `audit_logs`; (5) soft-delete untuk booking & review (jangan pernah hilang bukti). R1 menyimpan katalog sebagai JSON dengan bentuk field yang sama — migrasi R2 nyaris otomatis.

## 2. SKEMA INTI (Ringkas)

```prisma
enum Role { JAMAAH PPIU ADMIN SUPPORT }
enum BadgeTier { SILVER GOLD PLATINUM SUSPENDED }
enum BookingStatus { DRAFT KONTRAK_DITANDATANGANI MENUNGGU_BAYAR TERBAYAR
  VISA_PROSES SIAP_BERANGKAT BERANGKAT PULANG SELESAI DIBATALKAN }
enum EscrowStatus { TERTAHAN RILIS_40 RILIS_80 CAIR REFUND DISPUTE }
enum PaymentMethod { VA QRIS EWALLET TRANSFER }
enum ReviewStatus { PENDING PUBLISHED REJECTED }
enum VasType { ASURANSI SIMCARD LAUNDRY TITIP_DOA KURIR_HAJI }
enum SosStatus { AKTIF DITANGANI SELESAI_PALSU }

model User { id String @id @default(uuid()) role Role @default(JAMAAH)
  nama String phone String @unique email String? @unique
  phoneVerifiedAt DateTime? passwordHash String?
  locale String @default("id") createdAt DateTime @default(now()) }

model Ppiu { id String @id @default(uuid()) ownerUserId String slug String @unique
  namaLegal String namaTampil String noIzinPpiu String tglIzin DateTime
  siujukNo String? npwp String kota String alamat String
  badge BadgeTier @default(SILVER) badgeValidUntil DateTime
  deskripsi String? logoUrl String? fotoUrl String?
  depositTerverifikasi Int @default(0) aktifSejak DateTime
  meta Json?  // hasil verifikasi 5 lapis per lapis + tanggal + verifikator }

model Package { id String @id @default(uuid()) ppiuId String slug String @unique
  nama String durasiHari Int kotaBerangkat String maskapai String?
  hotelMakkah String hotelMadinah String jarakMakkahM Int jarakMadinahM Int
  bintangHotel Int @default(4) itineraryJson Json fotoUrls String[]
  hargaQuad Int hargaTriple Int hargaDouble Int  // integer rupiah
  includeJson Json excludeJson Json syaratPembatalanJson Json
  ratingAvg Decimal? @db.Decimal(3,2) ratingCount Int @default(0)
  status { DRAFT PUBLISHED ARCHIVED } }

model PackageDate { id String @id @default(uuid()) packageId String
  tglBerangkat DateTime tglPulang DateTime kuota Int sisaKuota Int
  hargaOverride Int? status { BUKA PENUH TUTUP } }

model Booking { id String @id @default(uuid()) kode String @unique  // SHJ-2026-00001
  packageDateId String ppiuId String jamaahUserId String
  jamaahDetailJson Json  // array: nama paspor, ttl, hubungan keluarga, kondisi fisik
  tipeKamar { QUAD TRIPLE DOUBLE } jumlahJamaah Int totalNominal Int
  status BookingStatus @default(DRAFT) kontrakDitandatanganiAt DateTime?
  kontrakHash String? catatan String? deletedAt DateTime? }

model Payment { id String @id @default(uuid()) bookingId String
  method PaymentMethod vaNumber String? amountPaid Int
  gatewayRef String? paidAt DateTime? webhookPayloadJson Json? statusVerified Boolean @default(false) }

model EscrowTransaction { id String @id @default(uuid()) bookingId String @unique
  status EscrowStatus @default(TERTAHAN) nominalTertahan Int
  rilisVisa Int @default(0) rilisBerangkat Int @default(0) rilisAkhir Int @default(0)
  buktiVisaUrl String? buktiManifestUrl String? adminVerifikatorId String?
  noRekAmanah String bankNama String  // rekening amanah bank syariah
  disputeId String? }

model EscrowMilestone { id String @id @default(uuid()) escrowId String
  urutan Int nama String persen Int triggerKondisi String
  releasedAt DateTime? buktiUrl String? adminId String? }

model Review { id String @id @default(uuid()) bookingId String @unique
  ppiuId String packageId String userId String
  hotel Int mutawif Int makanan Int bus Int itineraryAkurasi Int value Int  // 1..5
  teks String fotoUrls String[] status ReviewStatus @default(PENDING)
  ppiuReply String? ppiuReplyAt DateTime? verifiedTrip Boolean @default(true) }

model TrackingSession { id String @id @default(uuid()) bookingId String
  aktif Boolean @default(false) consentJson Json  // siapa share ke siapa + waktu consent
  berakhirOtomatisAt DateTime? }
model TrackingPoint { id String @id @default(uuid()) sessionId String
  lat Decimal @db.Decimal(10,7) lng Decimal @db.Decimal(10,7) akurasiM Int
  sumber { GPS MANUAL CHECKIN } diHapus Boolean @default(false) }
model SosEvent { id String @id @default(uuid()) sessionId String
  status SosStatus @default(AKTIF) lat Decimal? lng Decimal? ditanganiOlehId String? }
model MatchProfile { id String @id @default(uuid()) userId String @unique
  usia Int mobilitas { SPRINT MARCH STROLL } prioritas String budgetMin Int budgetMax Int
  musimFavorit String? aiConsent Boolean @default(false) }
model VasProduct { id String @id @default(uuid()) tipe VasType nama String
  mitra String harga Int detailJson Json aktif Boolean @default(true) }
model VasOrder { id String @id @default(uuid()) bookingId String productId String nominal Int status String }
model Dispute { id String @id @default(uuid()) bookingId String pelaporUserId String
  kategori String kronologiJson Json status { BARU MEDIASI SELESAI_ESCROW SELESAI_MEDIASI } }
model PayoutLog { id String @id @default(uuid()) escrowId String ppiuId String
  urutan Int nominal Int tanggal DateTime buktiTransferUrl String adminId String }
model KycDocument { id String @id @default(uuid()) ppiuId String jenis String
  url String terverifikasi Boolean adminId String? catatan String? }
model NotificationLog { id String @id @default(uuid()) userId String kanal { EMAIL WA PUSH }
  template String payloadJson Json terkirim Boolean error String? }
model AuditLog { id String @id @default(uuid()) actorId String? aksi String
  entitas String entitasId String diffJson Json ip String? createdAt DateTime @default(now()) }
```

## 3. RELASI KUNCI & INTEGRITAS

Booking → satu Payment (atau lebih bila cicilan R3) → satu EscrowTransaction → banyak EscrowMilestone → PayoutLog per rilis. Review 1:1 Booking (satu perjalanan satu review) dengan `verifiedTrip` yang HANYA bisa true jika `Booking.status = PULANG`. TrackingSession hidup hanya di rentang tanggal trip + 30 hari (cron menghapus TrackingPoint). Ppiu.meta menyimpan hasil 5 lapis verifikasi dengan timestamp — badge naik/turun dari data ini.

## 4. INDEKS & KINERJA

`Package(ppiuId, status)`, `PackageDate(tglBerangkat, status)`, `Booking(jamaahUserId)`, `Booking(ppiuId, status)`, `Review(ppiuId)`, `TrackingPoint(sessionId, createdAt)`, `AuditLog(entitas, entitasId)`. Pencarian katalog R2 pakai kombinasi filter + cursor pagination; full-text search teks baru saat kebutuhan nyata muncul.

## 5. PRIVASI BY DESIGN (UU PDP 27/2022)

Data paspor & kelahiran di `jamaahDetailJson` = data sensitif: kolom dienkripsi level aplikasi (AES-256-GCM, kunci di env terpisah), akses via fungsi khusus dengan AuditLog wajib. TrackingPoint auto-expire. Hak hapus jamaah: anonimisasi (bukan delete) agar bukti finansial tetap utuh — prosedur di dok 23 & 36.
