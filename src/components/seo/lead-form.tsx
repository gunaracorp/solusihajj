"use client";

import { useId, useState } from "react";
import { CheckCircle2, Loader2, MapPin, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cityList } from "@/data/cities";

/**
 * FORM "MINTA PENAWARAN" — lapis lead capture Prioritas 1 (God Mode).
 * Tax: POST /api/leads → tabel ServiceLead. Tanpa biaya, tanpa spam (honeypot + rate limit server).
 */

interface LeadFormProps {
  serviceSlug: string;
  serviceName: string;
  /** Kota terkunci (halaman matrix). Bila kosong → dropdown pilih 45 kota. */
  citySlug?: string;
  cityName?: string;
  pagePath: string;
  compact?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm({ serviceSlug, serviceName, citySlug, cityName, pagePath, compact }: LeadFormProps) {
  const uid = useId();
  const lockedCity = Boolean(citySlug && cityName);
  const [selectedCity, setSelectedCity] = useState(lockedCity ? citySlug! : "");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [honeypot, setHoneypot] = useState(""); // kolom jebakan bot — wajib kosong
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [leadRef, setLeadRef] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    // Validasi ringan sisi klien (server memvalidasi ulang).
    if (fullName.trim().length < 2) {
      setStatus("error");
      setErrorMsg("Mohon isi nama Anda (minimal 2 huruf).");
      return;
    }
    if (!/^(\+?62|0)8\d{7,13}$/.test(phone.replace(/[\s-]/g, ""))) {
      setStatus("error");
      setErrorMsg("Nomor WhatsApp tidak valid — contoh: 0812xxxxxxx.");
      return;
    }
    if (!selectedCity) {
      setStatus("error");
      setErrorMsg("Mohon pilih kota keberangkatan Anda.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          note: note.trim() || undefined,
          serviceSlug,
          citySlug: selectedCity,
          pagePath,
          website: honeypot, // honeypot
        }),
      });
      const json = (await res.json()) as { ok?: boolean; ref?: string; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.message || "Gagal mengirim permintaan. Coba lagi sebentar.");
        return;
      }
      setLeadRef(json.ref ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Koneksi bermasalah. Silakan coba lagi.");
    }
  }

  if (status === "success") {
    const chosenCity = cityList.find((c) => c.slug === selectedCity)?.name ?? cityName ?? "kota Anda";
    return (
      <Card className="border-brand/30 bg-brand-soft">
        <CardContent className="flex flex-col items-start gap-3 p-6">
          <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden="true" />
          <p className="text-lg font-extrabold text-brand-deep">Permintaan terkirim, jazakumullah khairan! 🕋</p>
          <p className="text-sm leading-relaxed text-ink">
            Permintaan penawaran <strong>{serviceName}</strong> keberangkatan dari <strong>{chosenCity}</strong> Anda
            sudah masuk dengan nomor referensi <strong className="font-mono">{leadRef}</strong>. Tim SolusiHajj akan
            menghubungi via WhatsApp maksimal 1×24 jam kerja dengan penawaran dari penyelenggara terverifikasi.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-line-warm bg-white">
      <CardHeader className={compact ? "pb-2" : undefined}>
        <CardTitle className="flex items-center gap-2 text-lg font-extrabold text-brand-deep">
          <MessageCircle className="h-5 w-5 text-brand" aria-hidden="true" />
          Minta penawaran gratis
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed text-ink-muted">
          {serviceName}
          {lockedCity ? ` · keberangkatan ${cityName}` : " · pilih kota keberangkatan Anda"} — dihubungi maks. 1×24
          jam.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="space-y-4" noValidate>
          {/* Honeypot — terlihat bot saja */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor={`${uid}-website`}>Website</Label>
            <Input
              id={`${uid}-website`}
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {!lockedCity ? (
            <div className="space-y-1.5">
              <Label htmlFor={`${uid}-kota`}>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  Kota keberangkatan
                </span>
              </Label>
              <Select value={selectedCity} onValueChange={setSelectedCity} required>
                <SelectTrigger id={`${uid}-kota`} className="w-full">
                  <SelectValue placeholder="Pilih kota (45 pilihan)" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {cityList.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      {c.name} — {c.province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null}

          <div className="space-y-1.5">
            <Label htmlFor={`${uid}-nama`}>Nama lengkap</Label>
            <Input
              id={`${uid}-nama`}
              name="fullName"
              autoComplete="name"
              placeholder="cth. Ahmad Fauzi"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              maxLength={80}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${uid}-wa`}>Nomor WhatsApp</Label>
            <Input
              id={`${uid}-wa`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="0812xxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={20}
              required
            />
          </div>

          {!compact ? (
            <div className="space-y-1.5">
              <Label htmlFor={`${uid}-catatan`}>
                Catatan <span className="font-normal text-ink-muted">(opsional)</span>
              </Label>
              <Textarea
                id={`${uid}-catatan`}
                name="note"
                placeholder="cth. Rencana berangkat Ramadhan, 2 orang, tanya hotel dekat Haram"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={500}
              />
            </div>
          ) : null}

          {status === "error" ? (
            <p role="alert" className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              {errorMsg}
            </p>
          ) : null}

          <Button type="submit" disabled={status === "loading"} className="w-full bg-brand text-white hover:bg-brand-deep">
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Mengirim…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Kirim permintaan penawaran
              </>
            )}
          </Button>

          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-ink-muted">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            Data Anda hanya dipakai untuk penawaran ini — sesuai Kebijakan Privasi &amp; UU PDP 27/2022. Tanpa spam.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
