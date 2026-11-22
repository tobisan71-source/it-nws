import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "IT für KMU",
  description:
    "Persönliche IT-Betreuung für KMU in der Nordwestschweiz: Support, Remote-Hilfe, Backup, Cyber Security, Microsoft 365 und passende Arbeitsplätze — damit das Geschäft läuft.",
};

const situations = [
  {
    title: "Wachstum ohne IT-Chaos",
    text: "Mehr Mitarbeitende, mehr Geräte, mehr Zugänge — ohne dass die Geschäftsleitung zur IT-Hotline wird.",
  },
  {
    title: "IT abgeben, Betrieb behalten",
    text: "Sie wollen jemanden, der sich kümmert: Support, Sicherung, Sicherheit und Klarheit im Alltag.",
  },
  {
    title: "Sicherer werden",
    text: "Backup und Schutz, die im Ernstfall greifen — verständlich erklärt, regional betreut.",
  },
];

const services = [
  {
    href: "/leistungen/it-support",
    title: "IT-Support",
    problem: "Störungen landen bei der Geschäftsleitung — und der Betrieb steht.",
    benefit:
      "Persönlicher Ansprechpartner, der Ihre IT kennt: schnellere Hilfe remote oder vor Ort, damit Ihr Team weiterarbeiten kann.",
    cta: "Support im Detail",
  },
  {
    href: "/leistungen/remote-support",
    title: "Remote-Support",
    problem: "Kleine Störungen blockieren den Tag — und auf Anfahrt zu warten kostet unnötig Zeit.",
    benefit:
      "Schnelle Hilfe aus der Ferne mit persönlichem Ansprechpartner: weniger Stillstand, klarer Kontakt statt Hotline — vor Ort, wenn Remote nicht reicht.",
    cta: "Remote-Support im Detail",
  },
  {
    href: "/leistungen/backup-wiederherstellung",
    title: "Backup & Wiederherstellung",
    problem: "«Irgendwie gesichert» — aber niemand weiss, ob eine Wiederherstellung klappt.",
    benefit:
      "Nachvollziehbare Sicherung mit Prüfung: Ruhe bei Defekt, Ransomware oder Fehlbedienung und schnellere Rückkehr in den Betrieb.",
    cta: "Backup im Detail",
  },
  {
    href: "/leistungen/cyber-security",
    title: "Cyber Security",
    problem: "Geteilte Zugänge, Phishing-Unsicherheit und das Gefühl, ungeschützt zu sein.",
    benefit:
      "Praxisnaher Grundschutz mit Prioritäten: weniger Angriffsfläche, geschützte Kundendaten, handlungsfähiges Team.",
    cta: "Security im Detail",
  },
  {
    href: "/leistungen/microsoft-365",
    title: "Microsoft 365",
    problem: "Outlook, Teams und Dateien laufen «irgendwie» — mit Chaos und Risiko.",
    benefit:
      "Kommunikation und Ablagen im Griff: störungsfreieres Arbeiten, klare Rechte, Schutz ohne Überforderung.",
    cta: "M365 im Detail",
  },
  {
    href: "/leistungen/hardware",
    title: "PCs, Notebooks & Peripherie",
    problem: "Geräte passen nicht, Migration bremst, niemand hat Zeit für Einrichtung.",
    benefit:
      "Passende Empfehlung, Beschaffung und Einrichtung — Migration mit weniger Stillstand, damit Arbeitsplätze dem Betrieb dienen.",
    cta: "Hardware im Detail",
  },
];

const trustPoints = [
  {
    title: "Persönlicher Ansprechpartner",
    text: "Kein Callcenter. Ein Gesicht in Therwil / Nordwestschweiz, das Ihre Systeme kennt.",
  },
  {
    title: "Ganze IT fürs Geschäft",
        text: "Support inkl. Remote-Hilfe, Sicherung, Sicherheit, Microsoft 365 und Arbeitsplätze — abgestimmt auf Ihren Alltag.",
  },
  {
    title: "Antwort mit Erwartung",
    text: "In der Regel innerhalb eines Werktags. Klar, erreichbar, ohne Verkaufsdruck.",
  },
];

export default function KmuPage() {
  return (
    <>
      <PageHero
        eyebrow="KMU · Vereine · Selbständige"
        title="IT mit Sicherheitsnetz — für Ihren Betrieb"
        lead="Persönlicher Ansprechpartner und die ganze IT fürs Geschäft: damit Systeme laufen, Daten geschützt bleiben und Sie sich um Aufträge kümmern können."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Für wen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            Wenn IT den Betrieb tragen soll — nicht umgekehrt
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            KMU, Handwerk, Praxen, Treuhänder, Dienstleister und Vereine in Therwil, Basel und
            der Nordwestschweiz: ohne eigene IT-Abteilung, aber mit Anspruch auf Zuverlässigkeit
            und Erreichbarkeit.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {situations.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900" id="dienstleistungen">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Dienstleistungen</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            Problem → Nutzen — nicht nur Stichworte
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            Jede Leistung erklärt, was im Alltag schiefgeht und was sich für Ihren Betrieb
            ändert. Details und FAQ finden Sie auf den jeweiligen Seiten.
          </p>

          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <article
                key={service.href}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      <span className="font-medium text-slate-300">Problem: </span>
                      {service.problem}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      <span className="font-medium text-teal-400">Nutzen: </span>
                      {service.benefit}
                    </p>
                  </div>
                  <Link href={service.href} className="btn-secondary shrink-0 self-start lg:self-end">
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Cloud mit Sicherheitsnetz</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">
                Wir ersetzen die Cloud nicht. Wir machen sie sicherer.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Microsoft 365 und Cloud-Dienste bleiben nutzbar — ergänzt um Backup, Schutz,
                klare Zugänge und jemanden, den Sie in der Region wirklich erreichen.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/kontakt" className="btn-primary">
                Unverbindliches Erstgespräch
              </Link>
              <Link href="/leistungen" className="btn-secondary">
                Alle Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Vertrauen</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">
            Warum KMU mit IT NWS arbeiten
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item.title} className="border-l-2 border-teal-500/50 pl-4">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800">
        <div className="container-narrow section-pad text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Bereit für IT mit Sicherheitsnetz?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Persönlich statt Hotline. Wir klären den nächsten sinnvollen Schritt — ohne
            Verkaufsdruck.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/kontakt" className="btn-primary">
              KMU-Beratung anfragen
            </Link>
            <a href="tel:+41788366320" className="btn-secondary">
              Anrufen: 078 836 63 20
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Persönlich aus Therwil · Antwort in der Regel 1 Werktag · Nordwestschweiz
          </p>
        </div>
      </section>
    </>
  );
}
