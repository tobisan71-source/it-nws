import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_STREET,
  CONTACT_ZIP_CITY,
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
        lead="Angaben zur Betreiberin bzw. zum Betreiber der Website it-nws.ch."
      />
      <section className="bg-navy-800">
        <div className="container-narrow section-pad prose-invert max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">
              Angaben gemäss Schweizer Recht
            </h2>
            <p className="mt-2">
              IT NWS (IT Nordwestschweiz)
              <br />
              {CONTACT_STREET}
              <br />
              {CONTACT_ZIP_CITY}
              <br />
              Schweiz
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
              <br />
              Adresse: {CONTACT_ADDRESS_LINE}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">UID / Handelsregister</h2>
            <p className="mt-2">
              UID wird ergänzt, sobald die Eintragung vorliegt bzw. bekanntgegeben wird.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Haftung für Inhalte</h2>
            <p className="mt-2">
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit,
              Vollständigkeit und Aktualität wird keine Gewähr übernommen. Verbindliche
              Auskünfte erfolgen im direkten Kundenkontakt.
            </p>
          </div>
          <p className="pt-4">
            <Link href="/kontakt" className="btn-primary inline-flex">
              Kontakt aufnehmen
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
