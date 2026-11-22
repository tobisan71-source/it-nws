import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von IT NWS: wie wir Kontaktdaten, Website-Zugriffe und Anfragen in der Schweiz verarbeiten und schützen.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        lead="Informationen zur Bearbeitung personenbezogener Daten auf it-nws.ch."
      />
      <section className="bg-navy-800">
        <div className="container-narrow section-pad max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">1. Verantwortliche Stelle</h2>
            <p className="mt-2">
              IT NWS (IT Nordwestschweiz)
              <br />
              {CONTACT_ADDRESS_LINE}
              <br />
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
          <p className="pt-4">
            <Link href="/kontakt" className="btn-primary inline-flex">
              Datenschutz-Anfrage stellen
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
