import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";

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
    text: "Nordwestschweiz: kurze Wege, klare Sprache, Verantwortung vor Ort.",
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
    q: "Wie schnell reagieren Sie?",
    a: "In der Regel innerhalb eines Werktags — persönlich, nicht über eine Hotline.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <HeroVisual />
        <div className="relative container-narrow flex min-h-[88vh] flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
          <p className="eyebrow animate-fade-up">IT NWS · Nordwestschweiz</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up-delay">
            Cloud mit Sicherheitsnetz.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg animate-fade-up-delay-2">
            Persönliche IT-Lösungen für Privatkunden, Vereine und KMU — damit Ihre Daten
            geschützt bleiben und der Betrieb weiterläuft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/kontakt" className="btn-primary">
              Beratung anfragen
            </Link>
            <Link href="/leistungen" className="btn-secondary">
              Leistungen ansehen
            </Link>
          </div>
          <p className="mt-8 max-w-lg text-sm text-slate-400 animate-fade-up-delay-2">
            Mehr Sicherheit. Mehr Kontrolle. Weniger Abhängigkeit.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
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

      <section className="border-b border-white/10 bg-navy-800">
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
              "Schnelle Hilfe in der Nordwestschweiz",
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

      <section className="bg-navy-800">
        <div className="container-narrow section-pad text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Bereit für mehr Kontrolle?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Persönlich statt Hotline. Schreiben Sie uns oder fragen Sie direkt einen Termin an.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/kontakt" className="btn-primary">
              Kontakt aufnehmen
            </Link>
            <Link href="/kontakt#termin" className="btn-secondary">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
