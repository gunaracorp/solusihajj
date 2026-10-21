/**
 * GunaraCorp Release System — sumber kebenaran versi runtime.
 *
 * SOP rilis (wajib urut, lihat WORKLOG.md §SOP Rilis):
 *   1. Naikkan APP_VERSION di file ini (SemVer: MAJOR.MINOR.PATCH).
 *   2. Perbarui APP_CODENAME & APP_BUILD_DATE.
 *   3. Sinkronkan: VERSION (root), package.json "version", CHANGELOG.md
 *      (entri baru, format Keep a Changelog), lalu commit + tag git `v<APP_VERSION>`.
 *   4. Verifikasi: `curl /api/version` harus mengembalikan versi baru.
 *
 * Jangan hardcode versi di tempat lain — selalu import dari file ini.
 */

/** Versi aplikasi aktif (SemVer 2.0.0). */
export const APP_VERSION = "2.0.0";

/** Nama kode rilis aktif. */
export const APP_CODENAME = "Nexus Governance";

/** Tanggal build rilis aktif (Asia/Jakarta, format ISO ringkas). */
export const APP_BUILD_DATE = "2026-10-22";

/** Label rilis resmi, contoh: "GunaraCorp v2.0.0". */
export const RELEASE_LABEL = `GunaraCorp v${APP_VERSION}`;

/** Baris rilis lengkap untuk stempel footer/dokumen. */
export const RELEASE_LINE = `${RELEASE_LABEL} — "${APP_CODENAME}" · build ${APP_BUILD_DATE}`;

/** Otoritas release engineering. */
export const RELEASE_AUTHORITY = "GunaraCorp Release System";
