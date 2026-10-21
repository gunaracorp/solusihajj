"use client";

/**
 * Compare Store — bandingkan hingga 3 paket.
 * Persist di localStorage + event "compare-change" agar semua komponen sinkron.
 */

const KEY = "shj_compare_v1";
export const MAX_COMPARE = 3;
const EVT = "compare-change";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((x) => typeof x === "string").slice(0, MAX_COMPARE) : [];
  } catch {
    return [];
  }
}

function write(slugs: string[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(slugs.slice(0, MAX_COMPARE)));
  } catch {
    /* storage penuh / private mode — abaikan */
  }
  window.dispatchEvent(new Event(EVT));
}

export function getCompare(): string[] {
  return read();
}

export function isCompared(slug: string): boolean {
  return read().includes(slug);
}

/** Toggle; return list terbaru. Jika penuh dan slug baru → tolak (return null). */
export function toggleCompare(slug: string): string[] | null {
  const cur = read();
  if (cur.includes(slug)) {
    const next = cur.filter((s) => s !== slug);
    write(next);
    return next;
  }
  if (cur.length >= MAX_COMPARE) return null; // penuh
  const next = [...cur, slug];
  write(next);
  return next;
}

export function clearCompare() {
  write([]);
}

export function onCompareChange(cb: () => void): () => void {
  window.addEventListener(EVT, cb);
  return () => window.removeEventListener(EVT, cb);
}
