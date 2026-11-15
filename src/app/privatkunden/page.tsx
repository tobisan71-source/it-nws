import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privatkunden",
  description:
    "Persönlicher PC-Service, Backup und Sicherheit für Privatkunden in der Nordwestschweiz.",
};

const points = [
  {
    title: "PC & Laptop wieder flott",
    text: "Langsam, voll oder unsicher? Wir richten ein, bereinigen und erklären verständlich.",
  },
  {
    title: "Fotos & Daten sichern",
    text: "Backup, das Sie verstehen — damit Familienfotos und wichtige Dokumente nicht verloren gehen.",
  },
  {
    title: "Sicheres Surfen",
    text: "Grundschutz gegen Betrug, Phishing und riskante Downloads — ohne Technik-Jargon.",
  },
  {
    title: "Persönlich vor Ort / remote",
    text: "Je nach Situation: remote helfen oder in der Region Nordwestschweiz unterstützen.",
  },
];

export default function PrivatkundenPage() {
  return (
    <>
      <PageHero
        eyebrow="Privatkunden"
        title="IT-Hilfe, der Sie vertrauen können"
        lead="Kein PC-Shop-Druck, keine Hotline. Jemand, der Ihre Geräte kennt und Ihre Daten ernst nimmt."
      />

      <section className="bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 md:grid-cols-2">
            {points.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h2 className="font-display text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-display text-2xl font-semibold text-white">
              Persönlich statt Hotline.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">
              Schreiben Sie kurz, was hakt — PC, Backup, E-Mail oder Sicherheit. Wir melden uns.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                Hilfe anfragen
              </Link>
              <Link href="/kontakt#termin" className="btn-secondary">
                Termin anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
