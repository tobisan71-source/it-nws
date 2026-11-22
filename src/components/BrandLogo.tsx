import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Header compact vs Footer slightly larger */
  size?: "header" | "footer";
};

const sizes = {
  header: { width: 200, height: 40, className: "h-9 w-auto sm:h-10" },
  footer: { width: 220, height: 44, className: "h-10 w-auto" },
} as const;

export function BrandLogo({ className = "", size = "header" }: BrandLogoProps) {
  const s = sizes[size];
  return (
    <Image
      src="/it-nws-logo-horizontal.svg"
      alt="Logo IT NWS – IT-Service Nordwestschweiz"
      width={s.width}
      height={s.height}
      priority={size === "header"}
      unoptimized
      className={`${s.className} ${className}`.trim()}
    />
  );
}
