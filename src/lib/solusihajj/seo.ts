"use client";

import { useEffect } from "react";
import { seoFor, seoDetail } from "@/data/site-seo";

/**
 * useSeo — update document.title & meta description secara dinamis per view SPA.
 * (Static export: nilai sama dipakai sebagai metadata server per route.)
 *
 * Catatan React 19: saat deep-link (mis. /#/kado-umrah dimuat langsung),
 * hidrasi Next.js dapat meng-klaim ulang elemen <title> milik layout SETELAH
 * efek pasif berjalan — sehingga title ter-reset ke nilai layout meski meta
 * description tetap. Solusinya: tegaskan ulang nilai pada macrotask berikutnya
 * setelah commit hidrasi selesai (idempoten, tanpa loop).
 */
function applySeo(title: string, description: string) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
  // Re-assert setelah commit React selesai (fix reset title deep-link React 19)
  const t1 = setTimeout(() => {
    if (document.title !== title) document.title = title;
  }, 0);
  const t2 = setTimeout(() => {
    if (document.title !== title) document.title = title;
  }, 350);
  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };
}

export function useSeo(path: string) {
  useEffect(() => {
    const { title, description } = seoFor(path);
    return applySeo(title, description);
  }, [path]);
}

export function useSeoDetail(kind: string, name: string, extra?: string) {
  useEffect(() => {
    if (!name) return; // bukan view detail — biarkan useSeo(path) yang mengatur
    const { title, description } = seoDetail(kind, name, extra);
    return applySeo(title, description);
  }, [kind, name, extra]);
}
