import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_CITY,
  CONTACT_COUNTRY,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_STREET,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von IT NWS — Kontaktdaten und Angaben gemäss Schweizer Recht.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Angaben zu IT NWS in Therwil. UID/Rechtsform bei Bedarf noch ergänzen."
      />
      <section className="bg-navy-800">
        <div className="container-narrow section-pad prose-invert max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-100">
            TODO: Firma/Rechtsform, UID und ggf. Haftungsausschluss bei Bedarf noch ergänzen.
            Adresse, Telefon und E-Mail sind gesetzt.
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Angaben gemäss Schweizer Recht</h2>
            <p className="mt-2">
              IT NWS (IT Nordwestschweiz)<br />
              {CONTACT_STREET}<br />
              {CONTACT_CITY}<br />
              {CONTACT_COUNTRY}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a href={CONTACT_MAILTO} className="text-teal-400 hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              Telefon:{" "}
              <a href={CONTACT_PHONE_TEL} className="text-teal-400 hover:underline">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">UID / Handelsregister</h2>
            <p className="mt-2">[TODO: CHE-xxx.xxx.xxx] — sofern eingetragen.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Haftung für Inhalte</h2>
            <p className="mt-2">
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit,
              Vollständigkeit und Aktualität wird keine Gewähr übernommen. Verbindliche
              Auskünfte erfolgen im direkten Kundenkontakt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
