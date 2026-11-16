import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_COUNTRY,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von IT NWS — Platzhalter.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        lead="Minimale Musterseite nach Schweizer Praxis. Vor dem Go-Live rechtlich prüfen und anpassen."
      />
      <section className="bg-navy-800">
        <div className="container-narrow section-pad max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-100">
            TODO: Verantwortliche Stelle, Hosting-Anbieter, eingesetzte Tools (Analytics,
            Formular-Backend) und Aufbewahrungsfristen konkretisieren.
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">1. Verantwortliche Stelle</h2>
            <p className="mt-2">
              IT NWS (IT Nordwestschweiz)<br />
              {CONTACT_ADDRESS_LINE}<br />
              {CONTACT_COUNTRY}<br />
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
            <h2 className="font-display text-lg font-semibold text-white">2. Erhobene Daten</h2>
            <p className="mt-2">
              Beim Besuch der Website können technisch notwendige Daten (z. B. IP-Adresse,
              Zeitpunkt, User-Agent) durch den Hosting-Anbieter verarbeitet werden. Das
              Kontaktformular ist derzeit ohne Backend — eingegebene Daten werden nicht
              an einen Server übermittelt.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">3. Zweck & Rechtsgrundlage</h2>
            <p className="mt-2">
              Verarbeitung zur Bereitstellung der Website und, sobald angebunden, zur
              Bearbeitung von Anfragen. Grundlage: berechtigte Interessen bzw. Vertrag /
              vorvertragliche Massnahmen sowie Einwilligung, wo erforderlich (nDSG / DSG).
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">4. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben nach Massgabe des anwendbaren Rechts Anspruch auf Auskunft,
              Berichtigung, Löschung und Einschränkung der Verarbeitung sowie auf
              Beschwerde bei der zuständigen Aufsichtsbehörde (EDÖB).
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">5. Änderungen</h2>
            <p className="mt-2">
              Diese Erklärung wird angepasst, sobald neue Dienste (z. B. Formularversand,
              Analytics) eingesetzt werden.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
