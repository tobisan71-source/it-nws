type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent" aria-hidden />
      <div className="container-narrow section-pad !py-16 lg:!py-20">
        {eyebrow && <p className="eyebrow animate-fade-up">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl animate-fade-up-delay">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg animate-fade-up-delay-2">
          {lead}
        </p>
      </div>
    </section>
  );
}
