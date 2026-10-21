"use client";

import { useCallback, useEffect, type ReactNode, type MouseEvent } from "react";
import { useSyncExternalStore } from "react";

export interface RouteInfo {
  path: string; // selalu dimulai dengan "/", "" → "/"
  query: URLSearchParams;
}

function parseHash(hash: string): RouteInfo {
  let raw = hash.replace(/^#/, "");
  if (!raw || raw === "/") raw = "/";
  if (!raw.startsWith("/")) raw = "/" + raw;
  const qIndex = raw.indexOf("?");
  let path = raw;
  let query = new URLSearchParams();
  if (qIndex >= 0) {
    path = raw.slice(0, qIndex);
    query = new URLSearchParams(raw.slice(qIndex + 1));
  }
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return { path: path || "/", query };
}

/* ---------- Hash route store (hydration-safe via useSyncExternalStore) ---------- */

const ROOT_ROUTE: RouteInfo = { path: "/", query: new URLSearchParams() };
let lastRaw: string | null = null;
let lastParsed: RouteInfo = ROOT_ROUTE;

function getCachedRoute(): RouteInfo {
  if (typeof window === "undefined") return ROOT_ROUTE;
  const raw = window.location.hash;
  if (raw !== lastRaw) {
    lastRaw = raw;
    lastParsed = parseHash(raw);
  }
  return lastParsed;
}

function subscribeHash(cb: () => void): () => void {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function useHashRoute(): RouteInfo {
  // Server snapshot = "/" → hidrasi selalu cocok; setelah hidrasi React
  // langsung switch ke hash asli tanpa hydration error.
  const route = useSyncExternalStore(subscribeHash, getCachedRoute, () => ROOT_ROUTE);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route.path]);
  return route;
}

export function navigate(to: string) {
  window.location.hash = to;
}

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function Link({ to, children, className, ariaLabel, onClick }: LinkProps) {
  const handle = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      window.location.hash = to;
      onClick?.();
    },
    [to, onClick]
  );
  return (
    <a href={`#${to}`} onClick={handle} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

/** Scroll halus ke section di halaman yang sama (id anchor, bukan hash route) */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
