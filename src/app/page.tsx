import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { CtaBand } from "@/components/CtaBand";
import {
  IconBuilding,
  IconDesktop,
  IconGamepad,
  IconGlobe,
  IconHome,
  IconLaptop,
  IconTablet,
} from "@/components/ServiceIcons";

const deviceCards = [
  {
    title: "Gaming-PCs",
    text: "Gaming-PCs nach Mass: Beratung, Zusammenstellung und Support — kein anonymer Shop.",
    href: "/leistungen#gaming-pcs",
    icon: IconGamepad,
  },
  {
    title: "Notebooks",
    text: "Auswahl, Einrichtung und Begleitung für mobiles Arbeiten — persönlich und verständlich.",
    href: "/leistungen#notebooks",
    icon: IconLaptop,
  },
  {
    title: "Tablets",
    text: "Einrichtung, Datensicherheit und Alltagshilfe — damit Apps und Daten zuverlässig laufen.",
    href: "/leistungen#tablets",
    icon: IconTablet,
  },
  {
    title: "PCs & Arbeitsplätze",
    text: "Arbeitsplatz einrichten, Daten übernehmen, Grundschutz — damit Sie produktiv starten.",
    href: "/leistungen#arbeitsplaetze",
    icon: IconDesktop,
  },
];

const leistungen = [
  {
    title: "Privatkunden",
    text: "PC einrichten, Datenübertragung, Diagnose, SSD, Datenrettung und Backup — verständlich und persönlich.",
    href: "/privatkunden",
    icon: IconHome,
  },
  {
    title: "Gaming-PCs",
    text: "Gaming-PCs nach Mass: Beratung, Zusammenstellung und Support — kein anonymer Shop.",
    href: "/leistungen#gaming-pcs",
    icon: IconGamepad,
  },
  {
    title: "KMU",
    text: "Microsoft 365, Backup, Security und laufender IT-Support für Betriebe und Vereine.",
    href: "/kmu",
    icon: IconBuilding,
  },
  {
    title: "Webseiten & Hosting",
    text: "Firmen- und Vereinsseiten mit Hosting, Domain und SSL — plus jemanden, den Sie erreichen.",
    href: "/leistungen#webseiten",
    icon: IconGlobe,
  },
];

const reasons = [
  {
    title: "Persönliche Betreuung",
    text: "Kein Ticket-Chaos, kein Callcenter. Sie sprechen mit jemandem, der Ihre IT kennt.",
  },
  {
    title: "Datensicherung",
    text: "Backups, die im Ernstfall greifen — geprüft, nachvollziehbar, lokal abgestimmt.",
  },
  {
    title: "Sicherheit",
    text: "Schutz vor Cyberangriffen und Fehlbedienung, ohne unnötige Komplexität.",
  },
  {
    title: "Regional",
    text: "Therwil, Basel-Landschaft und Nordwestschweiz: kurze Wege, klare Sprache.",
  },
];

const trustFaqs = [
  {
    q: "Ersetzen Sie die Cloud?",
    a: "Nein. Wir machen sie sicherer — mit Backup, Kontrolle und einem Ansprechpartner.",
  },
  {
    q: "Für wen ist IT NWS?",
    a: "Privatkunden, Vereine, Selbständige und KMU, die persönliche IT-Betreuung wollen.",
  },
  {
    q: "Wo sind Sie erreichbar?",
    a: "Standort Therwil (Basel-Landschaft), aktiv in Basel und der Nordwestschweiz.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <HeroVisual />
        <div className="relative container-narrow flex min-h-[88vh] flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
          <p className="eyebrow animate-fade-up">IT NWS · Therwil · Nordwestschweiz</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up-delay">
            Lokale IT. Persönlich erreichbar.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg animate-fade-up-delay-2">
            PC-Service, Datensicherung, Microsoft 365, Webseiten, Hosting und IT-Support —
            mit Sicherheitsnetz für Privatkunden, Vereine und KMU in der Nordwestschweiz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/kontakt" className="btn-primary">
              Beratung anfragen
            </Link>
            <Link href="/#leistungen" className="btn-secondary">
              Leistungen ansehen
            </Link>
          </div>
          <p className="mt-8 max-w-lg text-sm text-slate-400 animate-fade-up-delay-2">
            Mehr Sicherheit. Mehr Kontrolle. Weniger Abhängigkeit.
          </p>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-24 border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Vier klare Wege — wählen Sie, was zu Ihrer Situation passt.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {leistungen.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
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

      <section id="geraete" className="scroll-mt-24 border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Geräte</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Geräte & persönliche Beratung
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Gaming-PCs, Notebooks, Tablets und Arbeitsplätze — Beratung, Einrichtung und Support,
            kein Hardware-Verkauf von der Stange.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {deviceCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
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

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Warum IT NWS</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Hier kümmert sich jemand persönlich um Ihre IT.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Wir verkaufen keine Technik um der Technik willen. Wir schützen Ihre Daten —
            damit Sie bei Ausfällen und Problemen handlungsfähig bleiben.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-mich" className="scroll-mt-24 border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad grid gap-10 lg:grid-cols-[240px_1fr] lg:items-center">
          <div className="relative mx-auto aspect-[5/6] w-48 overflow-hidden rounded-lg border border-white/10 bg-navy-900 sm:w-56 lg:mx-0 lg:w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait-placeholder.svg"
              alt="Platzhalter: Porträt folgt — IT NWS Ansprechpartner"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Über mich</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Wer steckt hinter IT NWS?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              IT NWS ist kein Callcenter und keine anonyme Hotline. Hinter der Marke steht
              eine Person aus Therwil in Basel-Landschaft — mit Fokus auf Datensicherung,
              sichere Cloud-Nutzung und alltagsnahe IT-Hilfe für Privatkunden, Vereine und KMU
              in Basel und der Nordwestschweiz.
            </p>
            <p className="mt-4 text-lg font-medium text-teal-400">
              Sie sprechen direkt mit der Person, die Ihre IT betreut.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Persönlich Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Privatkunden</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Wenn der PC hakt — oder die Daten zählen
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Einrichten, Datenübertragung, Diagnose, SSD-Upgrade, Datenrettung und Backup:
            klare Hilfe für den Alltag in Therwil, Basel und der Region.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "PC & Laptop einrichten",
              "Datenübertragung auf neue Geräte",
              "Diagnose bei Störungen",
              "SSD-Upgrade & Performance",
              "Datenrettung nach Defekt",
              "Backup, das Sie verstehen",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/privatkunden" className="btn-secondary">
              Privatkunden-Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section id="gaming-pcs" className="scroll-mt-24 border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Premium · Beratung</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Gaming-PCs nach Mass
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Kein Shop-Regal, keine Bundle-Nummer. Wir klären Spiele, Budget, Lautstärke und
              Upgrade-Pfad — und stellen einen Rechner zusammen, der zu Ihnen passt. Danach
              bleiben Sie erreichbar betreut: aus Therwil und der Nordwestschweiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">
                Gaming-PC besprechen
              </Link>
              <Link href="/gaming-pcs-nordwestschweiz" className="btn-secondary">
                Mehr erfahren
              </Link>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              "Zusammenstellung nach Bedarf statt Katalog",
              "Transparente Komponenten-Empfehlung",
              "Setup, Treiber und Grundschutz",
              "Persönlicher Support nach der Übergabe",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Cloud-USP</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Wenn die Cloud ausfällt, was dann?
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ausfälle, Datenverlust, Cyberangriffe, Fehlbedienung, Abhängigkeit —
              und niemand, den Sie wirklich erreichen. IT NWS ergänzt die Cloud mit
              lokaler Betreuung, Backup und Security.
            </p>
            <p className="mt-4 text-lg font-medium text-teal-400">
              Wir ersetzen die Cloud nicht. Wir machen sie sicherer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kmu" className="btn-primary">
                Für KMU
              </Link>
              <Link href="/privatkunden" className="btn-secondary">
                Für Privatkunden
              </Link>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              "Backup, das im Ernstfall greift",
              "Persönlicher Ansprechpartner statt Hotline",
              "Kontrolle über Ihre Daten behalten",
              "Schnelle Hilfe in Basel und der Nordwestschweiz",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Kurz & klar</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">Häufige Fragen</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trustFaqs.map((item) => (
              <div key={item.q} className="border-l-2 border-teal-500/50 pl-4">
                <h3 className="font-display text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bereit für mehr Kontrolle?"
        lead="Persönlich statt Hotline — aus Therwil für die Nordwestschweiz. Schreiben Sie uns oder fragen Sie einen Termin an."
        primaryLabel="Kontakt aufnehmen"
        secondaryLabel="Termin anfragen"
      />
    </>
  );
}
