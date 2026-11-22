import Image from "next/image";

type TobiasPortraitProps = {
  className?: string;
  /** Homepage-Spalte vs. kompakte Kontakt-Aside */
  size?: "about" | "contact";
  priority?: boolean;
};

const sizes = {
  about: {
    width: 480,
    height: 640,
    sizes: "(max-width: 1024px) 224px, 240px",
    frame: "aspect-[5/6] w-48 sm:w-56 lg:w-full",
  },
  contact: {
    width: 320,
    height: 427,
    sizes: "(max-width: 1024px) 160px, 180px",
    frame: "aspect-[5/6] w-40 sm:w-44",
  },
} as const;

export function TobiasPortrait({
  className = "",
  size = "about",
  priority = false,
}: TobiasPortraitProps) {
  const s = sizes[size];
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-lg border border-white/10 bg-navy-900 lg:mx-0 ${s.frame} ${className}`.trim()}
    >
      <Image
        src="/images/tobias-portrait.jpg"
        alt="Tobias Leiss, IT NWS — persönlicher Ansprechpartner in Therwil"
        width={s.width}
        height={s.height}
        sizes={s.sizes}
        priority={priority}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
