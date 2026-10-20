# 📄 DOKUMEN 21 — GIT WORKFLOW
## GitHub sebagai Memori Project — Semua Tercatat, Semua Bisa Ditarik Kembali

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Repo:** github.com/[owner]/solusihajj (private)

---

## 1. STRATEGI BRANCH

```
main      → kode production. Selalu deployable. Dilindungi (protected branch).
dev       → integrasi fitur. Testing stabil sebelum naik ke main.
feature/* → satu fitur per branch. Dibuat dari dev.  → contoh: feature/escrow-milestone-ui
hotfix/*  → perbaikan darurat production. Dibuat dari main, merge balik ke main + dev.
release/* → persiapan rilis (final QA, bump versi, changelog).
```

Aturan: tidak ada commit langsung ke `main` kecuali hotfix kecil yang disetujui; PR wajib minimal 1 review (Code-Smith agent + founder); `main` di-merge hanya via squash dengan judul yang rapi. Untuk R1 (solo + AI), `dev` boleh dilewati — `feature/*` langsung ke `main` dengan PR; aturan ini mengendur seiring tim bertambah di R2.

## 2. CONVENTIONAL COMMITS (wajib, semua bahasa judul campuran OK)

```
feat: tambah filter jarak hotel di katalog paket
fix: perbaiki validasi nomor WA format 62 di form lead
docs: update skema escrow milestone 40/40/20
style: sesuaikan shadow kartu paket ke token md
refactor: pisahkan logika refund ke lib/refund.ts
perf: lazy-load galeri foto itinerary (LCP -300ms)
test: tambah skenario webhook payment idempoten
chore: bump next 15.2, upgrade prisma
security: batasi rate limit endpoint cek-izin
scope: [CHANGE REQUEST] pindahkan VAS ke rilis 3.0
```

Judul ≤ 72 karakter, imperative ("tambah", bukan "menambahkan"). Body menjelaskan MENGAPA bila non-trivial. Commit yang mengubah keputusan dokumen wajib menyebut dokumennya (`docs: ... dok 12`).

## 3. ALUR PR STANDAR

1. Branch dari dev/main dengan nama deskriptif.
2. Commit kecil-kecil yang jujur (bukan sekali besar "wip final beneran").
3. PR: judul = judul squash; deskripsi berisi: konteks (link FR dok 03), screenshot UI, catatan testing, checklist definisi-of-done (lint hijau, tsc hijau, a11y dasar, token desain).
4. Review: Code-Smith agent auto-review pertama → founder approve.
5. Merge squash → hapus branch → CI deploy preview (R2) / build lokal (R1).

## 4. CI/CD (GitHub Actions)

**R1:** workflow `build.yml` — push → install, lint, `tsc`, build static export → artifact; release → FTP-Deploy ke hosting (secrets: FTP_SERVER, FTP_USER, FTP_PASSWORD) sesuai NEXUS PROTOCOL: **push ke main = live**.
**R2:** workflow menambah: migrasi Prisma di staging, deploy VPS via SSH (Docker compose pull + restart) atau Vercel; health-check post-deploy (GET /api/health → 200) — gagal = auto-rollback (runbook dok 30).
**Proteksi:** secrets HANYA di GitHub Secrets/Actions, tidak pernah di kode; environment `production` butuh manual approval founder untuk deploy main.

## 5. TAGGING & VERSI

SemVer: `v1.0.0` (R1 live), `v2.0.0` (R2), `v3.0.0` (R3); patch untuk fix, minor untuk fitur dalam satu rilis. Tag dibuat saat release dengan changelog (dok 37) menyertai. `CHANGELOG.md` di root repo di-update setiap PR yang ter-merge (keep-a-changelog format).

## 6. FILE WAJIB ROOT REPO

| File | Isi |
|---|---|
| `README.md` | Ringkasan project, stack, cara setup, index ke docs/ |
| `.gitignore` | node_modules, .env*, .next, dist, uploads, DS_Store |
| `LICENSE` | Proprietary — milik PT founder, dilarang disebarluaskan |
| `CONTRIBUTING.md` | Aturan kontribusi (termasuk aturan AI agent coding) |
| `docs/` | 39 dokumen ini — bagian dari repo, di-versioning bersama kode |

## 7. KEAMANAN REPO

Dilarang keras commit: password hosting/DB, API key, file `.env`, dump data jamaah, foto dokumen KYC. Jika terlanjur: anggap bocor — rotasi semua kredensial segera + purge dari history (git filter-repo) + catat di changelog security. GitHub secret scanning diaktifkan. Backup repo: GitHub + clone mingguan ke drive founder (backup SOP dok 33).

## 8. DISIPLIN "GIT ADALAH MEMORI"

Setiap keputusan penting (scope, arsitektur, regulasi) yang tidak ada di commit/dokumen = tidak pernah terjadi. Kebiasaan mingguan founder: baca commit log 5 menit setiap Senin bersama CEO-Chief agent — ini cara paling murah menjaga konsistensi antara yang direncanakan (docs) dan yang dibangun (kode).
