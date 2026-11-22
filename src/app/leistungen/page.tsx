import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "PC-Service, Backup, Cyber Security, Webseiten, Hosting und KMU-Betreuung aus der Nordwestschweiz.",
};

const services = [
  {
    title: "PC-Service",
    points: [
      "Reparieren statt wegwerfen",
      "Setup neuer Geräte",
      "Performance & Updates",
    ],
  },
  {
    title: "Gaming-PCs",
    points: ["Zusammenstellung", "Optimierung", "Support bei Problemen"],
  },
  {
    title: "Datenrettung & Backup",
    points: ["Sicherungskonzepte", "Wiederherstellung", "Regelmässige Prüfung"],
  },
  {
    title: "Cyber Security",
    points: ["Grundschutz", "Passwort & Zugang", "Sensibilisierung"],
  },
  {
    title: "Webseiten & Hosting",
    points: [
      "Firmen-, Vereins- und Privatseiten",
      "Wartung",
      "Sicheres Hosting & SSL",
      "Sichere E-Mails",
    ],
  },
  {
    title: "KMU-Betreuung",
    points: ["Laufende IT-Begleitung", "Cloud mit Sicherheitsnetz", "Persönlicher Ansprechpartner"],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="IT-Lösungen, die den Betrieb schützen"
        lead="Von PC-Service bis Backup und Security — klar, persönlich und aus der Nordwestschweiz. Nicht alles möglich, sondern das, was Sie wirklich brauchen."
      />

      <section className="bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/40"
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

          <div className="mt-16 rounded-lg border border-teal-500/30 bg-teal-500/5 p-8 text-center sm:p-10">
            <p className="font-display text-2xl font-semibold text-white">
              Unsicher, was Sie brauchen?
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
              Kurzes Gespräch reicht oft. Wir klären Risiko, Priorität und nächsten Schritt —
              ohne Verkaufsdruck.
            </p>
            <Link href="/kontakt" className="btn-primary mt-6 inline-flex">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
