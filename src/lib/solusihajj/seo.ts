"use client";

import { useEffect } from "react";
import { seoFor, seoDetail } from "@/data/site-seo";

/**
 * useSeo — update document.title & meta description secara dinamis per view SPA.
 * (Static export: nilai sama dipakai sebagai metadata server per route.)
 */
export function useSeo(path: string) {
  useEffect(() => {
    const { title, description } = seoFor(path);
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [path]);
}

export function useSeoDetail(kind: string, name: string, extra?: string) {
  useEffect(() => {
    if (!name) return; // bukan view detail — biarkan useSeo(path) yang mengatur
    const { title, description } = seoDetail(kind, name, extra);
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [kind, name, extra]);
}
