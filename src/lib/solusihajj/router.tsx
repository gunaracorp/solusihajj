"use client";

import { useEffect, useState, useCallback, type ReactNode, type MouseEvent } from "react";

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

export function useHashRoute(): RouteInfo {
  const [route, setRoute] = useState<RouteInfo>(() =>
    typeof window === "undefined" ? { path: "/", query: new URLSearchParams() } : parseHash(window.location.hash)
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

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
