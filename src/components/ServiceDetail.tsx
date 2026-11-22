import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export type ServiceFaq = { q: string; a: string };

export type ServiceDetailContent = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  problems: string[];
  risks: string[];
  solution: string;
  solutionPoints?: string[];
  benefits: { title: string; text: string }[];
  topics?: { title: string; text: string }[];
  faq: ServiceFaq[];
  ctaLabel: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaNote?: string;
};

type Props = {
  content: ServiceDetailContent;
};

export function ServiceDetail({ content }: Props) {
  const {
    eyebrow,
    title,
    lead,
    intro,
    problems,
    risks,
    solution,
    solutionPoints,
    benefits,
    topics,
    faq,
    ctaLabel,
    ctaHref = "/kontakt",
    ctaSecondaryLabel = "Anrufen: 078 836 63 20",
    ctaSecondaryHref = "tel:+41788366320",
    ctaNote = "Persönlich statt Hotline · Antwort in der Regel 1 Werktag · Nordwestschweiz",
  } = content;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="max-w-3xl space-y-4">
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Typische Probleme</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Was KMU im Alltag oft erleben
            </h2>
            <ul className="mt-8 space-y-4">
              {problems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-teal-500/30 pt-4 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Risiken</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Wenn nichts passiert
            </h2>
            <ul className="mt-8 space-y-4">
              {risks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Lösung als Ergebnis</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold text-white sm:text-3xl">
            Was sich für Ihren Betrieb ändert
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{solution}</p>
          {solutionPoints && solutionPoints.length > 0 && (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {solutionPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">Kundennutzen</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Warum sich das für Sie lohnt
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {topics && topics.length > 0 && (
        <section className="border-b border-white/10 bg-navy-800">
          <div className="container-narrow section-pad">
            <p className="eyebrow">Im Fokus</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Themen, die im Alltag zählen
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {topics.map((topic) => (
                <article
                  key={topic.title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-white">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{topic.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-white/10 bg-navy-900">
        <div className="container-narrow section-pad">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Kurze Antworten
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faq.map((item) => (
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
            Nächster Schritt
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Ohne Verkaufsdruck — wir klären den nächsten sinnvollen Schritt für Ihren Betrieb.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
            <a href={ctaSecondaryHref} className="btn-secondary">
              {ctaSecondaryLabel}
            </a>
          </div>
          {ctaNote && <p className="mt-5 text-sm text-slate-500">{ctaNote}</p>}
        </div>
      </section>
    </>
  );
}
