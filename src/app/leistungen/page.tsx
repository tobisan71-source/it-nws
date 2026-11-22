import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "IT-Support, Backup, Cyber Security, Microsoft 365, Arbeitsplätze und Web — persönliche IT-Betreuung aus Therwil und der Nordwestschweiz.",
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
    id: "pc-service",
    title: "PC-Service",
    points: [
      "Reparieren statt wegwerfen",
      "Setup neuer Geräte",
      "Performance & Updates",
    ],
  },
  {
    id: "gaming",
    title: "Gaming-PCs",
    points: ["Zusammenstellung nach Mass", "Optimierung", "Support bei Problemen"],
  },
  {
    id: "webseiten",
    title: "Webseiten & Hosting",
    points: [
      "Firmen-, Vereins- und Privatseiten",
      "Wartung",
      "Sicheres Hosting & SSL",
      "Sichere E-Mails",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen · Nordwestschweiz"
        title="IT-Lösungen, die den Betrieb schützen"
        lead="Von Support und Backup bis Microsoft 365 und passende Arbeitsplätze — klar, persönlich und aus Therwil / Basel-Landschaft. Nicht alles möglich, sondern das, was Sie wirklich brauchen."
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
                id={service.id}
                key={service.title}
                className="scroll-mt-28 rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/40"
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
