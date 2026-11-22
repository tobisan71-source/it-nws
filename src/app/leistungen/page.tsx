import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "IT-Support, Backup, Cyber Security, Microsoft 365, Arbeitsplätze und Web — persönliche IT-Betreuung aus der Nordwestschweiz.",
};

const kmuServices = [
  {
    href: "/leistungen/it-support",
    title: "IT-Support",
    points: [
      "Störungen ohne lange Wartezeiten",
      "Remote oder vor Ort in der Region",
      "Damit Ihr Team weiterarbeiten kann",
    ],
  },
  {
    href: "/leistungen/remote-support",
    title: "Remote-Support",
    points: [
      "Schnelle Hilfe aus der Ferne",
      "Persönlicher Ansprechpartner statt Hotline",
      "Weniger Stillstand im Betrieb",
    ],
  },
  {
    href: "/leistungen/backup-wiederherstellung",
    title: "Backup & Wiederherstellung",
    points: ["Sicherung, die greift", "Prüfung der Wiederherstellung", "Weiterarbeiten nach Zwischenfällen"],
  },
  {
    href: "/leistungen/cyber-security",
    title: "Cyber Security",
    points: ["Grundschutz mit Prioritäten", "Sichere Zugänge", "Sensibilisierung ohne Angstmache"],
  },
  {
    href: "/leistungen/microsoft-365",
    title: "Microsoft 365",
    points: ["E-Mail & Teams zuverlässig", "Rechte und Ablagen im Griff", "Schutz ohne Überforderung"],
  },
  {
    href: "/leistungen/hardware",
    title: "PCs, Notebooks & Peripherie",
    points: [
      "Passende Empfehlung statt Fehlkauf",
      "Einrichtung & Migration mit weniger Stillstand",
      "Arbeitsplätze, die dem Betrieb dienen",
    ],
  },
];

const otherServices = [
  {
    title: "PC-Service",
    points: ["Reparatur & Wartung", "Setup neuer Geräte", "Performance & Updates"],
  },
  {
    title: "Gaming-PCs",
    points: ["Zusammenstellung", "Optimierung", "Support bei Problemen"],
  },
  {
    title: "Webseiten & Hosting",
    points: ["Einfache Firmen-/Vereinsseiten", "Wartung", "Sicheres Hosting"],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="IT-Lösungen, die den Betrieb schützen"
        lead="Von Support und Backup bis Microsoft 365 und passende Arbeitsplätze — klar, persönlich und aus der Nordwestschweiz. Nicht alles möglich, sondern das, was Sie wirklich brauchen."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Für KMU</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Dienstleistungen mit Problem → Nutzen
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            Ausführliche Seiten mit typischen Problemen, Risiken, Nutzen und FAQ — damit Sie
            in Ruhe vergleichen können.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {kmuServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/40"
              >
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-teal-400">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-teal-400">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Weitere Angebote</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Privat, Gaming & Web
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
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
        </div>
      </section>

      <section className="bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="rounded-lg border border-teal-500/30 bg-teal-500/5 p-8 text-center sm:p-10">
            <p className="font-display text-2xl font-semibold text-white">
              Unsicher, was Sie brauchen?
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
              Kurzes Gespräch reicht oft. Wir klären Risiko, Priorität und nächsten Schritt —
              ohne Verkaufsdruck.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                Beratung anfragen
              </Link>
              <Link href="/kmu" className="btn-secondary">
                Für KMU ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
