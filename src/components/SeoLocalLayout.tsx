import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CONTACT_ADDRESS_LINE, CONTACT_REGION } from "@/lib/site";

export type SeoSection = {
  heading: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: SeoSection[];
  related?: { href: string; label: string }[];
};

export function SeoLocalLayout({ eyebrow, title, lead, sections, related = [] }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad max-w-3xl space-y-10">
          <p className="text-sm text-slate-400">
            Vor Ort in {CONTACT_ADDRESS_LINE} · {CONTACT_REGION}
          </p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
          {related.length > 0 && (
            <div>
              <h2 className="font-display text-lg font-semibold text-white">Weiterführend</h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-teal-400 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <CtaBand
        title="Persönliche Einschätzung gefragt?"
        lead="Schreiben Sie kurz, worum es geht — wir melden uns aus Therwil / der Nordwestschweiz."
        primaryLabel="Kontakt aufnehmen"
      />
    </>
  );
}
