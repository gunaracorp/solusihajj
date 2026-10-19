"use client";

/**
 * i18n mini R1.5 — ID (default) / EN / AR untuk label navigasi & hero.
 * Versi demo: cakupan UI inti. Terjemahan penuh konten & paket hadir di R2
 * bersama per-data locale (dok 10 multiregional).
 * Hydration-safe: state bahasa via useSyncExternalStore (server = "id").
 */
import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "id" | "en" | "ar";

const DICT: Record<string, Record<Lang, string>> = {
  "nav.packages": { id: "Cari Paket", en: "Find Packages", ar: "ابحث عن الباقة" },
  "nav.full": { id: "Paket Umrah Lengkap", en: "Full Umrah Packages", ar: "باقات كاملة" },
  "nav.land": { id: "Land Arrangement", en: "Land Arrangement", ar: "خدمة أرضية" },
  "nav.flights": { id: "Tiket Charter Grup", en: "Group Charter Flights", ar: "رحلات جماعية" },
  "nav.nurmatch": { id: "NurMatch AI", en: "NurMatch AI", ar: "نور ماتش AI" },
  "nav.nurmatchAi": { id: "NurMatch AI Live (R3)", en: "NurMatch AI Live (R3)", ar: "نور ماتش AI مباشر" },
  "nav.escrowAktif": { id: "Pusat Escrow Aktif (R3)", en: "Active Escrow Hub (R3)", ar: "مركز الضمان النشط" },
  "nav.directory": { id: "Direktori", en: "Directory", ar: "الدليل" },
  "nav.providers": { id: "Penyelenggara Asia", en: "Asian Providers", ar: "منظمو آسيا" },
  "nav.verify": { id: "Verifikasi", en: "Verification", ar: "التحقق" },
  "nav.escrow": { id: "Escrow", en: "Escrow", ar: "الضمان" },
  "nav.guide": { id: "Panduan", en: "Guide", ar: "الدليل" },
  "nav.education": { id: "Edukasi", en: "Education", ar: "تعليم" },
  "nav.glossary": { id: "Glosarium", en: "Glossary", ar: "المعجم" },
  "nav.kit": { id: "Travel Kit", en: "Travel Kit", ar: "حقيبة السفر" },
  "nav.partner": { id: "Untuk Partner", en: "For Partners", ar: "للشركاء" },
  "nav.about": { id: "Tentang", en: "About", ar: "حول" },
  "nav.airlines": { id: "Maskapai Ibadah", en: "Hajj Airlines", ar: "شركات الطيران" },
  "nav.data": { id: "Pusat Data Nasional", en: "National Data Hub", ar: "مركز البيانات" },
  "cta.search": { id: "Cari Sekarang →", en: "Search Now →", ar: "ابحث الآن →" },
};

const LANG_EVT = "shj-lang";
let langCache: string | null = null;

function langSubscribe(cb: () => void): () => void {
  window.addEventListener(LANG_EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(LANG_EVT, cb);
    window.removeEventListener("storage", cb);
  };
}

function langSnapshot(): string {
  const raw = window.localStorage.getItem("shj_lang") ?? "id";
  if (raw !== langCache) langCache = raw;
  return langCache;
}

const langServerSnapshot = "id";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const Ctx = createContext<I18nCtx>({ lang: "id", setLang: () => {}, t: (k) => DICT[k]?.id ?? k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(langSubscribe, langSnapshot, () => langServerSnapshot);
  const lang: Lang = (["id", "en", "ar"].includes(raw) ? raw : "id") as Lang;

  // Sinkronkan lang dokumen (eksternal: DOM) — tanpa setState-in-effect
  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : lang === "en" ? "en" : "ar";
  }, [lang]);

  const setLang = (l: Lang) => {
    try {
      window.localStorage.setItem("shj_lang", l);
    } catch {
      /* noop */
    }
    langCache = l;
    window.dispatchEvent(new Event(LANG_EVT));
  };

  const t = (key: string) => DICT[key]?.[lang] ?? DICT[key]?.id ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
