import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  IconDesktop,
  IconGamepad,
  IconLaptop,
  IconTablet,
} from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "IT-Support, Backup, Cyber Security, Microsoft 365, Geräte und Web — persönliche IT-Betreuung aus Therwil und der Nordwestschweiz.",
};

const deviceCards = [
  {
    id: "gaming-pcs",
    title: "Gaming-PCs",
    text: "Beratung, Zusammenstellung und Support nach Mass — kein anonymer Shop.",
    icon: IconGamepad,
  },
  {
    id: "notebooks",
    title: "Notebooks",
    text: "Auswahl, Einrichtung und Begleitung für mobiles Arbeiten — persönlich und verständlich.",
    icon: IconLaptop,
  },
  {
    id: "tablets",
    title: "Tablets",
    text: "Einrichtung, Datensicherheit und Alltagshilfe — damit Apps und Daten zuverlässig laufen.",
    icon: IconTablet,
  },
  {
    id: "arbeitsplaetze",
    title: "PCs & Arbeitsplätze",
    text: "Arbeitsplatz einrichten, Daten übernehmen, Grundschutz — damit Sie produktiv starten.",
    icon: IconDesktop,
  },
];

const deviceDetails = [
  {
    id: "gaming-pcs",
    eyebrow: "Premium · Beratung",
    title: "Gaming-PCs nach Mass",
    lead: "Kein Shop-Regal, keine Bundle-Nummer. Wir klären Spiele, Budget, Lautstärke und Upgrade-Pfad — und stellen einen Rechner zusammen, der zu Ihnen passt. Danach bleiben Sie erreichbar betreut: aus der Nordwestschweiz.",
    points: [
      "Zusammenstellung nach Bedarf statt Katalog",
      "Transparente Komponenten-Empfehlung",
      "Setup, Treiber und Grundschutz",
      "Persönlicher Support nach der Übergabe",
    ],
    cta: "Gaming-PC besprechen",
  },
  {
    id: "notebooks",
    eyebrow: "Mobil · Beratung",
    title: "Notebooks, die zum Alltag passen",
    lead: "Ob Homeoffice, Studium oder unterwegs: Wir helfen bei der Auswahl, richten ein und erklären verständlich — ohne Verkaufsdruck und ohne Technik-Jargon.",
    points: [
      "Bedarf und Budget gemeinsam klären",
      "Datenübertragung vom alten Gerät",
      "Einrichtung, Updates und Grundschutz",
      "Support, wenn etwas hakt",
    ],
    cta: "Notebook besprechen",
  },
  {
    id: "tablets",
    eyebrow: "Alltag · Einrichtung",
    title: "Tablets sicher und alltagstauglich",
    lead: "Neues Tablet, Familienzugänge oder unsichere Apps? Wir richten ein, sichern Zugänge und zeigen die wichtigsten Schritte — persönlich statt Hotline.",
    points: [
      "Einrichtung und sinnvolle Einstellungen",
      "Konten, Passwörter und Grundschutz",
      "Daten und Fotos sinnvoll sichern",
      "Kurze Einführung für den Alltag",
    ],
    cta: "Tablet besprechen",
  },
  {
    id: "arbeitsplaetze",
    eyebrow: "Büro · Einrichtung",
    title: "PCs & Arbeitsplätze einrichten",
    lead: "Neuer Rechner oder Arbeitsplatz-Wechsel: Wir übernehmen Einrichtung, Daten und Grundschutz — damit Sie fokussiert weiterarbeiten können.",
    points: [
      "Arbeitsplatz und Peripherie einrichten",
      "Daten und Programme gezielt übernehmen",
      "Grundschutz und Backup-Empfehlung",
      "Persönlicher Ansprechpartner danach",
    ],
    cta: "Arbeitsplatz besprechen",
  },
];

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
        lead="Von Support und Backup bis Microsoft 365, Geräte und passende Arbeitsplätze — klar, persönlich und aus Therwil / Basel-Landschaft. Nicht alles möglich, sondern das, was Sie wirklich brauchen."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Geräte & Beratung</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Gaming-PCs, Notebooks, Tablets & Arbeitsplätze
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Wir verkaufen keine Hardware von der Stange. Wir beraten, richten ein und bleiben
            erreichbar — damit Ihr Gerät zuverlässig zum Alltag passt.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {deviceCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/50 hover:bg-white/[0.05]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-teal-500/30 bg-teal-500/10 text-teal-400 transition group-hover:border-teal-400/60">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white group-hover:text-teal-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-teal-400">
                    Mehr erfahren →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {deviceDetails.map((detail, index) => (
        <section
          key={detail.id}
          id={detail.id}
          className={`scroll-mt-24 border-b border-white/10 ${
            index % 2 === 0 ? "bg-navy-900" : "bg-navy-800"
          }`}
        >
          <div className="container-narrow section-pad grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">{detail.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                {detail.title}
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">{detail.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn-primary">
                  {detail.cta}
                </Link>
                <Link href="/kontakt#termin" className="btn-secondary">
                  Termin anfragen
                </Link>
              </div>
            </div>
            <ul className="space-y-4">
              {detail.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

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
