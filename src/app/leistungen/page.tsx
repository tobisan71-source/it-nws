import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "PC-Service, Gaming-PCs, Backup, Cyber Security, Webseiten, Hosting und KMU-Betreuung aus Therwil und der Nordwestschweiz.",
};

const services = [
  {
    id: "pc-service",
    title: "PC-Service",
    points: ["Reparatur & Wartung", "Setup neuer Geräte", "Performance & Updates"],
  },
  {
    id: "gaming",
    title: "Gaming-PCs",
    points: ["Zusammenstellung nach Mass", "Optimierung", "Support bei Problemen"],
  },
  {
    id: "backup",
    title: "Datenrettung & Backup",
    points: ["Sicherungskonzepte", "Wiederherstellung", "Regelmässige Prüfung"],
  },
  {
    id: "security",
    title: "Cyber Security",
    points: ["Grundschutz", "Passwort & Zugang", "Sensibilisierung"],
  },
  {
    id: "webseiten",
    title: "Webseiten & Hosting",
    points: ["Einfache Firmen-/Vereinsseiten", "Wartung", "Sicheres Hosting & SSL"],
  },
  {
    id: "kmu",
    title: "KMU-Betreuung",
    points: ["Laufende IT-Begleitung", "Cloud mit Sicherheitsnetz", "Persönlicher Ansprechpartner"],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen · Nordwestschweiz"
        title="IT-Lösungen, die den Betrieb schützen"
        lead="Von PC-Service bis Backup und Security — klar, persönlich und aus Therwil / Basel-Landschaft. Nicht alles möglich, sondern das, was Sie wirklich brauchen."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                id={service.id}
                key={service.title}
                className="scroll-mt-28 rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/40"
              >
                <h2 className="font-display text-xl font-semibold text-white">{service.title}</h2>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-sm font-semibold text-white">Lokale Themen (SEO-Vorbereitung)</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
              <li>
                <Link href="/pc-reparatur-therwil" className="text-teal-400 hover:underline">
                  PC-Reparatur Therwil
                </Link>
              </li>
              <li>
                <Link href="/gaming-pcs-nordwestschweiz" className="text-teal-400 hover:underline">
                  Gaming-PCs NWS
                </Link>
              </li>
              <li>
                <Link href="/synology-nas-basel" className="text-teal-400 hover:underline">
                  Synology NAS Basel
                </Link>
              </li>
              <li>
                <Link href="/microsoft-365-support-basel" className="text-teal-400 hover:underline">
                  M365 Support Basel
                </Link>
              </li>
              <li>
                <Link href="/webseiten-kmu-basel" className="text-teal-400 hover:underline">
                  Webseiten KMU Basel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Unsicher, was Sie brauchen?"
        lead="Kurzes Gespräch reicht oft. Wir klären Risiko, Priorität und nächsten Schritt — ohne Verkaufsdruck."
        primaryLabel="Beratung anfragen"
      />
    </>
  );
}
