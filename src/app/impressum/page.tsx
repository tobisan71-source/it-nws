import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von IT NWS — Platzhalter für Firmendaten.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Platzhalterseite. Bitte echte Firmendaten vor dem Go-Live eintragen."
      />
      <section className="bg-navy-800">
        <div className="container-narrow section-pad prose-invert max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-100">
            TODO: Firma, Rechtsform, Adresse, UID, Telefon und ggf. Haftungsausschluss
            mit realen Angaben ersetzen. Kontakt-E-Mail ist gesetzt.
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Angaben gemäss Schweizer Recht</h2>
            <p className="mt-2">
              IT NWS (IT Nordwestschweiz)<br />
              [TODO: Strasse / Nr.]<br />
              [TODO: PLZ Ort]<br />
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
              Telefon: [TODO: Telefon]
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
