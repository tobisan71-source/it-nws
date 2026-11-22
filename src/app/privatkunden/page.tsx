import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Privatkunden",
  description:
    "PC einrichten, Datenübertragung, Diagnose, SSD, Datenrettung und Backup für Privatkunden in Therwil, Basel und der Nordwestschweiz.",
};

const points = [
  {
    title: "PC, Notebook & Tablet wieder flott",
    text: "Langsam, voll oder unsicher? Wir richten ein, bereinigen und erklären verständlich.",
  },
  {
    title: "Datenübertragung",
    text: "Fotos, Dokumente und Programme vom alten auf den neuen Rechner — nachvollziehbar und ohne Datenchaos.",
  },
  {
    title: "Diagnose bei Störungen",
    text: "Langsam, abstürzend oder unsicher? Wir finden die Ursache und priorisieren den nächsten sinnvollen Schritt.",
  },
  {
    title: "SSD-Upgrade & Tempo",
    text: "Wenn der Rechner noch taugt: Speicher und Performance gezielt verbessern statt unnötig neu kaufen.",
  },
  {
    title: "Datenrettung",
    text: "Nach Defekt oder Fehlbedienung retten, was noch rettbar ist — ehrlich zur Erfolgsaussicht.",
  },
  {
    title: "Backup, das greift",
    text: "Sicherung, die Sie verstehen und im Ernstfall wiederherstellen können — ergänzend zur Cloud.",
  },
];

export default function PrivatkundenPage() {
  return (
    <>
      <PageHero
        eyebrow="Privatkunden · Therwil · Basel"
        title="IT-Hilfe, der Sie vertrauen können"
        lead="Kein PC-Shop-Druck, keine Hotline. Einrichten, Datenübertragung, Diagnose, SSD, Datenrettung und Backup — persönlich in der Nordwestschweiz."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 md:grid-cols-2">
            {points.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h2 className="font-display text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.03] p-8">
            <p className="eyebrow">Lokal</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">
              Persönlich in Therwil und der Region Basel
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              Ob remote oder vor Ort in Basel-Landschaft und der Nordwestschweiz: Sie sprechen
              direkt mit der Person, die Ihre IT betreut.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pc-reparatur-therwil" className="btn-secondary">
                PC-Reparatur Therwil
              </Link>
              <Link href="/pc-reparatur-basel" className="btn-secondary">
                PC-Reparatur Basel
              </Link>
              <Link href="/datensicherung-basel" className="btn-secondary">
                Datensicherung Basel
              </Link>
              <Link href="/leistungen#notebooks" className="btn-secondary">
                Geräte-Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Persönlich statt Hotline."
        lead="Schreiben Sie kurz, was hakt — PC, Backup, E-Mail oder Sicherheit. Wir melden uns aus Therwil."
        primaryLabel="Hilfe anfragen"
        secondaryLabel="Termin anfragen"
      />
    </>
  );
}
