"use client";

import { FormEvent, useEffect, useState } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export type ContactMode = "kontakt" | "termin";

type Errors = Partial<Record<"name" | "email" | "message" | "phone", string>>;

type Props = {
  initialMode?: ContactMode;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ initialMode = "kontakt" }: Props) {
  const [mode, setMode] = useState<ContactMode>(initialMode);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    const applyHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#termin") setMode("termin");
      if (window.location.hash === "#kontakt") setMode("kontakt");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Bitte Namen angeben.";
    if (!email.trim()) next.email = "Bitte E-Mail angeben.";
    else if (!isValidEmail(email.trim())) next.email = "Bitte gültige E-Mail angeben.";
    if (!message.trim()) {
      next.message =
        mode === "termin"
          ? "Kurz beschreiben, worum es beim Termin gehen soll."
          : "Bitte Nachricht eingeben.";
    }
    if (mode === "termin" && !phone.trim()) {
      next.phone = "Für Termine bitte Telefonnummer angeben.";
    }
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-teal-500/40 bg-teal-500/10 p-8 text-center"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-white">
          {mode === "termin" ? "Terminanfrage erhalten" : "Nachricht erhalten"}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Danke, {name.trim()}. Dies ist eine Demo ohne Backend — Ihre Angaben wurden
          nicht übermittelt. Später wird hier die echte Zustellung an{" "}
          <a href={CONTACT_MAILTO} className="text-teal-400 hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          angebunden.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setMessage("");
            setPreferredSlot("");
            setErrors({});
          }}
        >
          Neue Anfrage
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Anfrageart">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "kontakt"}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
            mode === "kontakt"
              ? "bg-teal-500 text-navy-900"
              : "border border-white/15 text-slate-300 hover:bg-white/5"
          }`}
          onClick={() => {
            setMode("kontakt");
            setErrors({});
          }}
        >
          Nachricht senden
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "termin"}
          id="termin"
          className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
            mode === "termin"
              ? "bg-teal-500 text-navy-900"
              : "border border-white/15 text-slate-300 hover:bg-white/5"
          }`}
          onClick={() => {
            setMode("termin");
            setErrors({});
          }}
        >
          Termin anfragen
        </button>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-5" id="kontakt">
        <p className="text-sm text-slate-400">
          {mode === "termin"
            ? "Kurz Terminwunsch schildern — wir melden uns persönlich aus der Nordwestschweiz."
            : "Schreiben Sie uns Ihr Anliegen. Antwort in der Regel innerhalb von 1 Werktag."}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label-field">
              Name *
            </label>
            <input
              id="name"
              name="name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="company" className="label-field">
              Firma / Verein
            </label>
            <input
              id="company"
              name="company"
              className="input-field"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="label-field">
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="label-field">
              Telefon{mode === "termin" ? " *" : ""}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>
        </div>

        {mode === "termin" && (
          <div>
            <label htmlFor="slot" className="label-field">
              Bevorzugter Zeitraum
            </label>
            <input
              id="slot"
              name="slot"
              className="input-field"
              placeholder="z. B. Dienstagvormittag oder nächste Woche"
              value={preferredSlot}
              onChange={(e) => setPreferredSlot(e.target.value)}
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="label-field">
            {mode === "termin" ? "Worum soll es gehen? *" : "Nachricht *"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="input-field resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-primary w-full sm:w-auto">
          {mode === "termin" ? "Termin anfragen" : "Nachricht senden"}
        </button>
      </form>
    </div>
  );
}
