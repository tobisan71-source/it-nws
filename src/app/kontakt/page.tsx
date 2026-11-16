import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt und Terminanfrage bei IT NWS — persönlicher IT-Partner in der Nordwestschweiz.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Schreiben Sie uns — oder fragen Sie einen Termin an"
        lead="Persönlich statt Hotline. Region Nordwestschweiz. Antwort in der Regel innerhalb eines Werktags."
      />

      <section className="bg-navy-800">
        <div className="container-narrow section-pad grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">Direkt</h2>
              <dl className="mt-4 space-y-3 text-sm text-slate-300">
                <div>
                  <dt className="text-slate-500">Region</dt>
                  <dd>Nordwestschweiz</dd>
                </div>
                <div>
                  <dt className="text-slate-500">E-Mail</dt>
                  <dd>
                    <a href={CONTACT_MAILTO} className="text-teal-400 hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Reaktionszeit</dt>
                  <dd>In der Regel 1 Werktag</dd>
                </div>
              </dl>
            </div>
            <p className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-400">
              Das Formular speichert lokal nur den Success-State — es gibt noch kein Backend.
              Später an echte Zustellung anbinden.
            </p>
          </aside>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
