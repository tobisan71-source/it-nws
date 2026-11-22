/**
 * Homepage hero atmosphere: original PCB / CPU illustration (SVG + CSS).
 * Dark navy substrate, teal/cyan traces — professional HD electronic feel.
 */
export function HeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-[#070d18]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#0c1628] to-[#061018]" />
      <div className="absolute -right-20 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-teal-500/20 blur-3xl animate-soft-pulse" />
      <div className="absolute right-[5%] bottom-[-15%] h-96 w-96 rounded-full bg-teal-600/12 blur-3xl" />
      <div className="absolute left-[40%] top-[20%] h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

      {/* Fine technical grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M36 0H0V36"
              fill="none"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1"
            />
          </pattern>
          <pattern id="hero-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(45,212,191,0.25)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
        <rect width="100%" height="100%" fill="url(#hero-dots)" opacity="0.5" />
      </svg>

      {/* Dominant PCB / CPU plane — bias right, full-bleed feel */}
      <div className="absolute inset-y-[-4%] right-[-6%] w-[115%] sm:w-[88%] lg:w-[78%] xl:w-[72%]">
        <svg
          className="absolute inset-0 h-full w-full opacity-90 sm:opacity-95"
          viewBox="0 0 960 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pcb-board" x1="120" y1="40" x2="900" y2="680" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0a1524" />
              <stop offset="0.4" stopColor="#102038" />
              <stop offset="1" stopColor="#0a1422" />
            </linearGradient>
            <linearGradient id="trace-teal" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#14B8A6" stopOpacity="1" />
              <stop offset="1" stopColor="#5EEAD4" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="die-face" x1="430" y1="250" x2="620" y2="440" gradientUnits="userSpaceOnUse">
              <stop stopColor="#16304a" />
              <stop offset="1" stopColor="#0c1a2e" />
            </linearGradient>
            <linearGradient id="copper-pour" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="rgba(20,184,166,0.09)" />
              <stop offset="1" stopColor="rgba(20,184,166,0.03)" />
            </linearGradient>
            <radialGradient id="cpu-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(525 345) rotate(90) scale(240 240)">
              <stop stopColor="#14B8A6" stopOpacity="0.35" />
              <stop offset="0.55" stopColor="#14B8A6" stopOpacity="0.1" />
              <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
            </radialGradient>
            <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M0 0H8" stroke="rgba(45,212,191,0.07)" strokeWidth="1" />
            </pattern>
            <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="525" cy="345" r="240" fill="url(#cpu-glow)" />

          {/* PCB substrate */}
          <path
            d="M150 62H850C874 62 894 82 894 106V614C894 638 874 658 850 658H150C126 658 106 638 106 614V106C106 82 126 62 150 62Z"
            fill="url(#pcb-board)"
            stroke="rgba(45,212,191,0.32)"
            strokeWidth="1.5"
          />
          <path
            d="M150 62H850C874 62 894 82 894 106V614C894 638 874 658 850 658H150C126 658 106 638 106 614V106C106 82 126 62 150 62Z"
            fill="url(#hatch)"
          />
          <path
            d="M172 84H828C846 84 860 98 860 116V604C860 622 846 636 828 636H172C154 636 140 622 140 604V116C140 98 154 84 172 84Z"
            fill="none"
            stroke="rgba(148,163,184,0.16)"
            strokeWidth="1"
          />

          {/* Mounting holes */}
          {[
            [150, 92],
            [850, 92],
            [150, 628],
            [850, 628],
          ].map(([cx, cy], i) => (
            <g key={`mh-${i}`}>
              <circle cx={cx} cy={cy} r="13" fill="#050a12" stroke="rgba(45,212,191,0.45)" strokeWidth="1.75" />
              <circle cx={cx} cy={cy} r="6" fill="#0a1220" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
            </g>
          ))}

          {/* Copper pours */}
          <rect x="188" y="118" width="210" height="92" rx="3" fill="url(#copper-pour)" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
          <rect x="640" y="460" width="170" height="110" rx="3" fill="url(#copper-pour)" stroke="rgba(20,184,166,0.16)" strokeWidth="1" />
          <rect x="188" y="500" width="150" height="80" rx="3" fill="url(#copper-pour)" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
          <rect x="680" y="118" width="140" height="70" rx="3" fill="url(#copper-pour)" stroke="rgba(20,184,166,0.14)" strokeWidth="1" />

          {/* Dense ground-stitch vias in pours */}
          <g fill="rgba(45,212,191,0.35)">
            {Array.from({ length: 5 }).flatMap((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle
                  key={`gp1-${row}-${col}`}
                  cx={205 + col * 24}
                  cy={135 + row * 16}
                  r="1.6"
                />
              )),
            )}
            {Array.from({ length: 5 }).flatMap((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <circle
                  key={`gp2-${row}-${col}`}
                  cx={660 + col * 24}
                  cy={480 + row * 18}
                  r="1.6"
                />
              )),
            )}
          </g>

          {/* Primary traces — thicker, denser */}
          <g stroke="url(#trace-teal)" strokeWidth="2" strokeLinecap="square" fill="none">
            <path d="M200 160H310V240H380" />
            <path d="M200 185H290V265H420" />
            <path d="M215 130V105H330V155" />
            <path d="M245 130V95H450V195" />
            <path d="M188 255H270V335H400" />
            <path d="M178 300H250V395H420" />
            <path d="M205 430H320V495H445" />
            <path d="M188 470H290V555H460" />
            <path d="M225 575H370V515H485" />
            <path d="M640 195H730V125H815" />
            <path d="M655 230H755V155H835" />
            <path d="M670 265H775V205" />
            <path d="M640 445H720V515H815" />
            <path d="M655 480H745V555H825" />
            <path d="M670 515H760V585" />
            <path d="M705 340H835V295" />
            <path d="M705 375H815V420H855" />
            <path d="M555 575H655V605H795" />
            <path d="M400 115H520V175H580" />
            <path d="M590 115H670V150" />
          </g>
          <g stroke="rgba(148,163,184,0.55)" strokeWidth="1.35" strokeLinecap="square" fill="none">
            <path d="M210 215H300V290H385" />
            <path d="M195 345H265V415H400" />
            <path d="M205 515H310V545H450" />
            <path d="M680 295H795V255" />
            <path d="M690 430H775V400" />
            <path d="M560 130H700V170H770" />
            <path d="M530 590H700V610" />
            <path d="M230 400H300V440" />
            <path d="M750 360H830V340" />
          </g>

          {/* Parallel bus into CPU */}
          <g stroke="rgba(45,212,191,0.7)" strokeWidth="1.6" fill="none">
            {[280, 300, 320, 340, 360, 380].map((y) => (
              <path key={`bl-${y}`} d={`M350 ${y}H418`} />
            ))}
            {[280, 300, 320, 340, 360, 380].map((y) => (
              <path key={`br-${y}`} d={`M632 ${y}H700`} />
            ))}
            {[455, 475, 495, 515, 535, 555, 575].map((x) => (
              <path key={`bt-${x}`} d={`M${x} 215V258`} />
            ))}
            {[455, 475, 495, 515, 535, 555, 575].map((x) => (
              <path key={`bb-${x}`} d={`M${x} 432V475`} />
            ))}
          </g>

          {/* Vias / pads */}
          <g>
            {[
              [310, 160],
              [380, 240],
              [290, 265],
              [420, 265],
              [330, 155],
              [450, 195],
              [270, 335],
              [400, 335],
              [250, 395],
              [420, 395],
              [320, 495],
              [445, 495],
              [290, 555],
              [460, 555],
              [370, 575],
              [485, 515],
              [730, 125],
              [815, 125],
              [755, 155],
              [835, 155],
              [775, 205],
              [720, 515],
              [815, 515],
              [745, 555],
              [825, 555],
              [760, 585],
              [835, 295],
              [815, 420],
              [855, 420],
              [655, 605],
              [795, 605],
              [520, 175],
              [580, 175],
              [670, 150],
              [300, 290],
              [385, 290],
              [265, 415],
              [400, 415],
              [770, 170],
              [700, 610],
            ].map(([cx, cy], i) => (
              <g key={`via-${i}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill={i % 4 === 0 ? "#2DD4BF" : "#14B8A6"}
                  fillOpacity={i % 3 === 0 ? 0.95 : 0.65}
                />
                {i % 5 === 0 && (
                  <circle cx={cx} cy={cy} r="7.5" fill="none" stroke="rgba(45,212,191,0.5)" strokeWidth="1.1" />
                )}
              </g>
            ))}
          </g>

          {/* SMD / discrete components */}
          <g>
            <rect x="220" y="168" width="34" height="14" rx="1.5" fill="#1a2740" stroke="rgba(45,212,191,0.55)" strokeWidth="1.1" />
            <rect x="248" y="308" width="42" height="16" rx="1.5" fill="#1a2740" stroke="rgba(148,163,184,0.45)" strokeWidth="1.1" />
            <rect x="235" y="450" width="26" height="12" rx="1" fill="#1a2740" stroke="rgba(45,212,191,0.45)" strokeWidth="1" />
            <rect x="705" y="178" width="48" height="16" rx="1.5" fill="#1a2740" stroke="rgba(45,212,191,0.55)" strokeWidth="1.1" />
            <rect x="725" y="468" width="38" height="14" rx="1.5" fill="#1a2740" stroke="rgba(148,163,184,0.4)" strokeWidth="1.1" />
            <rect x="688" y="318" width="22" height="22" rx="2.5" fill="#0d1728" stroke="rgba(45,212,191,0.65)" strokeWidth="1.35" />
            <rect x="238" y="528" width="22" height="22" rx="2.5" fill="#0d1728" stroke="rgba(45,212,191,0.55)" strokeWidth="1.35" />
            {/* Crystal */}
            <rect x="725" y="328" width="56" height="26" rx="3" fill="#142438" stroke="rgba(45,212,191,0.7)" strokeWidth="1.4" />
            <path d="M738 340H766" stroke="#14B8A6" strokeWidth="1.75" strokeOpacity="0.85" />
            <path d="M738 347H758" stroke="rgba(148,163,184,0.7)" strokeWidth="1.35" />
            {/* Memory / IC blocks */}
            <rect x="200" y="360" width="58" height="28" rx="2" fill="#121e32" stroke="rgba(45,212,191,0.4)" strokeWidth="1.1" />
            <path d="M210 370H248" stroke="rgba(45,212,191,0.45)" strokeWidth="1" />
            <path d="M210 377H238" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
            <rect x="760" y="240" width="58" height="28" rx="2" fill="#121e32" stroke="rgba(45,212,191,0.4)" strokeWidth="1.1" />
            <path d="M770 250H808" stroke="rgba(45,212,191,0.45)" strokeWidth="1" />
            <path d="M770 257H798" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
          </g>

          {/* CPU package */}
          <g filter="url(#soft-glow)">
            <rect
              x="418"
              y="248"
              width="214"
              height="194"
              rx="9"
              fill="#0e1a2d"
              stroke="rgba(45,212,191,0.75)"
              strokeWidth="2"
            />
            {/* Pin rows */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={`pl-${i}`}
                x="398"
                y={262 + i * 14}
                width="20"
                height="8"
                rx="1.2"
                fill="#1e2f48"
                stroke="rgba(45,212,191,0.45)"
                strokeWidth="0.85"
              />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={`pr-${i}`}
                x="632"
                y={262 + i * 14}
                width="20"
                height="8"
                rx="1.2"
                fill="#1e2f48"
                stroke="rgba(45,212,191,0.45)"
                strokeWidth="0.85"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <rect
                key={`pt-${i}`}
                x={438 + i * 16}
                y="228"
                width="8"
                height="20"
                rx="1.2"
                fill="#1e2f48"
                stroke="rgba(45,212,191,0.45)"
                strokeWidth="0.85"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <rect
                key={`pb-${i}`}
                x={438 + i * 16}
                y="442"
                width="8"
                height="20"
                rx="1.2"
                fill="#1e2f48"
                stroke="rgba(45,212,191,0.45)"
                strokeWidth="0.85"
              />
            ))}

            {/* Silicon die */}
            <rect
              x="444"
              y="274"
              width="162"
              height="142"
              rx="5"
              fill="url(#die-face)"
              stroke="rgba(94,234,212,0.75)"
              strokeWidth="1.4"
            />
            <g stroke="rgba(45,212,191,0.28)" strokeWidth="1">
              <path d="M484 274V416" />
              <path d="M525 274V416" />
              <path d="M566 274V416" />
              <path d="M444 309H606" />
              <path d="M444 345H606" />
              <path d="M444 381H606" />
            </g>
            {[
              [452, 282],
              [493, 282],
              [534, 282],
              [575, 282],
              [452, 318],
              [493, 318],
              [534, 318],
              [575, 318],
              [452, 354],
              [493, 354],
              [534, 354],
              [575, 354],
            ].map(([x, y], i) => (
              <rect
                key={`core-${i}`}
                x={x}
                y={y}
                width="30"
                height="28"
                rx="2.5"
                fill={i === 5 || i === 6 ? "rgba(20,184,166,0.22)" : "rgba(20,184,166,0.08)"}
                stroke="rgba(45,212,191,0.45)"
                strokeWidth="1"
              />
            ))}
            <circle cx="525" cy="345" r="12" fill="rgba(20,184,166,0.22)" stroke="#2DD4BF" strokeWidth="1.75" />
            <circle cx="525" cy="345" r="4.5" fill="#5EEAD4" className="animate-soft-pulse" />
            <circle cx="436" cy="266" r="5.5" fill="#050a12" stroke="rgba(45,212,191,0.55)" strokeWidth="1.1" />
          </g>

          {/* Silkscreen marks */}
          <g opacity="0.6">
            <path d="M198 618H290" stroke="rgba(148,163,184,0.5)" strokeWidth="1.1" />
            <path d="M198 626H255" stroke="rgba(45,212,191,0.4)" strokeWidth="1.1" />
            <rect x="768" y="95" width="58" height="22" rx="2" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="1.1" />
          </g>

          {/* Live signal nodes */}
          <g className="animate-soft-pulse">
            <circle cx="380" cy="240" r="5.5" fill="#5EEAD4" fillOpacity="0.95" />
            <circle cx="815" cy="125" r="5" fill="#14B8A6" fillOpacity="0.9" />
            <circle cx="460" cy="555" r="5" fill="#2DD4BF" fillOpacity="0.85" />
            <circle cx="835" cy="295" r="4.5" fill="#14B8A6" fillOpacity="0.85" />
            <circle cx="250" cy="395" r="4" fill="#5EEAD4" fillOpacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Readability veils — left text safe, right PCB visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070d18] via-[#070d18]/80 to-transparent sm:from-[#070d18] sm:via-[#070d18]/55 sm:to-transparent lg:via-[#070d18]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-[#070d18]/45" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070d18] to-transparent" />
      {/* Extra left scrim so H1 stays crisp over dense traces */}
      <div className="absolute inset-y-0 left-0 w-[58%] max-w-2xl bg-gradient-to-r from-[#070d18]/90 via-[#070d18]/35 to-transparent sm:w-[48%] lg:w-[42%]" />
    </div>
  );
}
