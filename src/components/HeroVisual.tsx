export function HeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-[#0a1628]" />
      <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl animate-soft-pulse" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-600/10 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 h-[70%] w-[70%] max-w-3xl translate-x-8 translate-y-8 opacity-40 sm:opacity-55"
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 360C160 280 220 250 320 250C420 250 480 280 560 360"
          stroke="#14B8A6"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <path
          d="M100 320C180 250 240 220 320 220C400 220 460 250 540 320"
          stroke="#94A3B8"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <circle cx="320" cy="180" r="54" stroke="#14B8A6" strokeWidth="2" fill="rgba(20,184,166,0.08)" />
        <circle cx="320" cy="180" r="18" fill="#14B8A6" fillOpacity="0.85" />
        <circle cx="180" cy="260" r="10" fill="#2DD4BF" />
        <circle cx="460" cy="260" r="10" fill="#2DD4BF" />
        <circle cx="140" cy="340" r="7" fill="#64748B" />
        <circle cx="500" cy="340" r="7" fill="#64748B" />
        <path d="M320 234V300" stroke="#14B8A6" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M206 250L290 200" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.55" />
        <path d="M434 250L350 200" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.55" />
        <rect
          x="250"
          y="310"
          width="140"
          height="56"
          rx="10"
          stroke="#14B8A6"
          strokeOpacity="0.55"
          fill="rgba(15,23,42,0.55)"
        />
        <path d="M270 338h100" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
        <path d="M270 352h64" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40" />
    </div>
  );
}
