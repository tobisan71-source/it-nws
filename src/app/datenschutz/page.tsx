import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_INTL,
  CONTACT_PHONE_TEL,
  FORM_FROM_EMAIL,
  OWNER_NAME,
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
              {OWNER_NAME}
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
              </a>{" "}
              ({CONTACT_PHONE_INTL})
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">2. Website-Zugriff</h2>
            <p className="mt-2">
              Beim Besuch der Website können technisch notwendige Server-Logs (z. B.
              IP-Adresse, Zeitpunkt, aufgerufene URL, User-Agent) durch den Hosting-
              Anbieter verarbeitet werden. Das dient dem Betrieb, der Sicherheit und der
              Fehleranalyse der Website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">3. Kontaktformular</h2>
            <p className="mt-2">
              Über das Kontaktformular auf{" "}
              <Link href="/kontakt" className="text-teal-400 hover:underline">
                /kontakt
              </Link>{" "}
              können Sie Name, optional Firma/Verein, E-Mail, optional Telefon, Nachricht
              und bei Terminanfragen einen bevorzugten Zeitraum übermitteln. Die Angaben
              werden per SMTP als E-Mail versendet: Absender{" "}
              <span className="text-slate-200">{FORM_FROM_EMAIL}</span>, Empfang{" "}
              <a href={CONTACT_MAILTO} className="text-teal-400 hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Die Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage und
              zur allfälligen Rückmeldung. Es findet keine Weitergabe zu Werbe- oder
              Marketingzwecken statt.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">4. Cookies, Tracking & Analytics</h2>
            <p className="mt-2">
              Wir setzen kein Tracking und keine Analyse-Tools (z. B. Google Analytics,
              Matomo, Pixel) ein. Es gibt keinen Cookie-Banner, weil keine Cookies zu
              Analyse-, Marketing- oder Profiling-Zwecken gesetzt werden. Falls der Browser
              oder der Server technisch notwendige Cookies setzt (z. B. für den sicheren
              Betrieb), dienen diese nur der Funktion der Website und nicht der Auswertung
              Ihres Verhaltens.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">5. Zweck & Rechtsgrundlage</h2>
            <p className="mt-2">
              Verarbeitung zur Bereitstellung der Website und zur Bearbeitung von Anfragen.
              Grundlage: berechtigte Interessen bzw. Vertrag / vorvertragliche Massnahmen
              sowie Einwilligung, wo erforderlich (nDSG / DSG).
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">6. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben nach Massgabe des anwendbaren Rechts Anspruch auf Auskunft,
              Berichtigung, Löschung und Einschränkung der Verarbeitung sowie auf
              Beschwerde bei der zuständigen Aufsichtsbehörde (EDÖB).
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">7. Änderungen</h2>
            <p className="mt-2">
              Diese Erklärung wird angepasst, wenn sich die Bearbeitung personenbezogener
              Daten auf it-nws.ch ändert (z. B. neue Dienste oder Tools).
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
