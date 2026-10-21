/**
 * SolusiHajj i18n routing — v2.1.0 "Sinyal Global".
 *
 * `localePrefix: "as-needed"` = locale default (id) TANPA prefiks URL,
 * locale en dengan prefiks /en. Seluruh 13.984 URL Indonesia yang sudah
 * terindeks TETAP valid; halaman Inggris hidup di bawah /en/*.
 */
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "as-needed",
});
