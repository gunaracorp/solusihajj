# 🕋 SOLUSIHAJJ — Marketplace Umrah & Haji Terverifikasi Indonesia

**Domain:** solusihajj.com | **Tagline:** "Amanah Anda, Aman." | **Stack:** Next.js (dua panggung: statis → full-stack)

SolusiHajj adalah marketplace dua sisi yang menghubungkan jamaah Indonesia dengan PPIU berizin resmi, dibangun di atas lima tiang kepercayaan:

| Tiang | Nama Sistem | Ringkas |
|---|---|---|
| 1 | **Verifikasi 5 Lapis** | Legalitas → finansial → operasional → track record → performa; badge Silver/Gold/Platinum + tool publik "Cek Izin PPIU" |
| 2 | **AmanahEscrow** | Dana jamaah ditahan rekening amanah bank syariah; rilis bertahap 40/40/20 mengikuti realisasi layanan |
| 3 | **Saksi Jamaah** | Review hanya dari jamaah yang benar-benar pulang; rating 6 dimensi |
| 4 | **Hafizh Track** | E-itinerary offline, tracking opt-in untuk keluarga, check-in "aman", tombol SOS |
| 5 | **NurMatch AI** | Rekomendasi paket berbasis profil (usia, mobilitas, budget) dengan alasan transparan |

**Model bisnis:** komisi transaksi 4–6% + langganan PPIU Rp 500rb–2,5jt/bln + value-added services (asuransi, SIM card, laundry, titip doa, kurir haji).

---

## 🗺️ PETA 39 DOKUMEN (NEXUS PROTOCOL v1.0)

> Cara pakai: baca dokumen relevan, lalu paste ke AI agent mana pun (ChatGPT, Claude, Gemini, chat.z.ai) sebagai konteks — konsistensi terjaga 100% antar sesi dan antar agent.

### FASE 0 — DISCOVERY (Dokumen 1–5)
| File | Isi |
|---|---|
| `docs/00-project-brief.md` | Definisi project, 5 tiang, definisi sukses, prinsip non-negotiable |
| `docs/01-stakeholder-analysis.md` | 11 stakeholder + veto power + risiko + aturan komunikasi |
| `docs/02-business-requirements.md` | FR-100..700 + NFR + KPI (kontrak visi→eksekusi) |
| `docs/03-competitor-analysis.md` | 4 arketipe kompetitor, matriks gap, peta posisi, moat |
| `docs/04-user-personas.md` | 5 persona: Haji Hasan, Ibu Fatimah, Mas Rifqi, Dinda, Pak Ridwan |

### FASE 1 — PLANNING & ARCHITECTURE (Dokumen 6–14)
| File | Isi |
|---|---|
| `docs/05-project-scope.md` | 3 rilis terkunci + gerbang validasi + proses Change Request |
| `docs/06-sitemap.md` | Peta URL lengkap R1/R2, navigasi, legal line kepatuhan |
| `docs/07-user-flows.md` | 7 alur: search→booking→escrow→tracking→review + dispute |
| `docs/08-wireframe-spec.md` | Wireframe tekstual homepage 12 section + 5 template halaman |
| `docs/09-content-strategy.md` | Tone "menemani bukan menjual", 10 varian WA, kata terlarang, roadmap 12 bln |
| `docs/10-seo-strategy.md` | 3 mesin keyword (info/verifikasi/transaksi), schema, tool cek izin |
| `docs/11-tech-stack-decision.md` | Next.js dua panggung + decision matrix + arsitektur R2 |
| `docs/12-database-schema.md` | 22 tabel PostgreSQL/Prisma + privasi by design |
| `docs/13-api-specification.md` | Kontrak REST + webhook payment + integrasi eksternal |

### FASE 2 — DESIGN SYSTEM (Dokumen 15–19)
| File | Isi |
|---|---|
| `docs/14-design-system.md` | Palet Hijau Amanah & Emas Ka'bah, Plus Jakarta Sans + Amiri, alasan psikologis |
| `docs/15-ui-component-spec.md` | Button, kartu paket, shield badge, escrow timeline, form, nav |
| `docs/16-responsive-breakpoints.md` | Mobile-first untuk lansia + anak digitalnya, mode teks besar |
| `docs/17-accessibility-standard.md` | WCAG 2.1 AA + aksesibilitas sebagai kebutuhan bisnis |
| `docs/18-motion-design-spec.md` | Motion tenang 150–500ms, 4 momen khas, anti-polution |

### FASE 3 — DEVELOPMENT STANDARDS (Dokumen 20–25)
| File | Isi |
|---|---|
| `docs/19-coding-standards.md` | TS strict, naming ID/EN, aturan uang integer & PII |
| `docs/20-git-workflow.md` | Branch strategy, conventional commits, CI/CD, keamanan repo |
| `docs/21-folder-structure.md` | Blueprint App Router lengkap + aturan penempatan |
| `docs/22-environment-config.md` | Matriks .env dev/staging/prod + enkripsi PII terpisah |
| `docs/23-security-protocol.md` | UU PDP, proteksi paspor, dual-control dana, anti-phishing brand |
| `docs/24-performance-budget.md` | LCP<2s, JS<120KB — gerbang QA, bukan target ideal |

### FASE 4 — QUALITY ASSURANCE (Dokumen 26–29)
| File | Isi |
|---|---|
| `docs/25-test-plan.md` | TC-100..500 per fitur, termasuk skenario dana & kuota paralel |
| `docs/26-device-matrix.md` | Android low-end sampai iPhone, jaringan 3G, uji lansia |
| `docs/27-form-integration-test.md` | Uji pipa: form, 10 varian WA, webhook, OTP, 12 email transaksional |
| `docs/28-lighthouse-report.md` | Template bukti skor per rilis + aturan regression guard |

### FASE 5 — DEPLOYMENT (Dokumen 30–34)
| File | Isi |
|---|---|
| `docs/29-deployment-runbook.md` | Runbook A (statis→cPanel), B (VPS), C (emergency) |
| `docs/30-domain-dns-configuration.md` | Record lengkap, subdomain, SPF/DKIM/DMARC, CAA |
| `docs/31-shared-hosting-setup.md` | cPanel, .htaccess lengkap, mailer aman, keterbatasan jujur |
| `docs/32-ssl-https-guide.md` | AutoSSL/certbot, HSTS, mixed content, checklist per rilis |
| `docs/33-backup-recovery-sop.md` | 3-2-1, enkripsi backup, latihan restore kuartalan, RPO/RTO |

### FASE 6 — POST-LAUNCH & BUSINESS (Dokumen 35–39)
| File | Isi |
|---|---|
| `docs/34-analytics-monitoring.md` | NSM "jamaah aman berangkat", event map GA4, dashboard bulanan |
| `docs/35-maintenance-contract.md` | SLA platform + tier partnership PPIU Silver/Gold/Platinum |
| `docs/36-client-handover-manual.md` | SOP harian ops, verifikasi 5 lapis, rilis escrow, protokol krisis |
| `docs/37-changelog-template.md` | Format 3 audiens + ritual "changelog ke pasar" |
| `docs/38-lessons-learned.md` | 6 pelajaran fase perencanaan + format retro |

---

## 🚀 ARSITEKTUR RILIS BERTAHAP

```
RILIS 1.0 — GERBANG KEPERCAYAAN (bln 1–2, shared hosting, statis)
  Katalog PPIU Founding Partner + Cek Izin PPIU + kalkulator haji + funnel WA
  Gerbang: 200 booking intent/bln → lanjut R2
RILIS 2.0 — MESIN MARKETPLACE (bln 3–6, VPS, full-stack)
  Booking online + AmanahEscrow + Saksi Jamaah + console PPIU + admin
  Gerbang: 300 booking/bln, escrow 3 bulan bersih → lanjut R3
RILIS 3.0 — PENDAMPING CERDAS (bln 7–12)
  Aplikasi Hafizh Track + NurMatch AI + VAS + escrow otomatis
```

## 🧭 KAITAN EKOSISTEM GUNARA OS

Anggota klaster umrah: `medina.web.id`, `arofahajj.com`, `solusibaitullah.web.id` — dikelola dengan 15 AI Agent (CEO-Chief, Legal-Eagle, Code-Smith, Content-Alchemist, Research-Sage, dll.) di atas fondasi GUNARA MASTER CONTEXT. AI agent mana pun yang bekerja di repo ini WAJIB membaca dokumen terkait sebelum menulis satu baris apa pun.

*Prak burukeun — segerakan kesadaran. Ulah edan, kudu eling.*
