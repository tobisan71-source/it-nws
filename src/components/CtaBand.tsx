import Link from "next/link";

type Props = {
  title: string;
  lead: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  lead,
  primaryHref = "/kontakt",
  primaryLabel = "Beratung anfragen",
  secondaryHref = "/kontakt#termin",
  secondaryLabel = "Termin anfragen",
}: Props) {
  return (
    <section className="bg-navy-800">
      <div className="container-narrow section-pad text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">{lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
