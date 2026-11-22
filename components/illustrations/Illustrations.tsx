/**
 * Hand-drawn spot illustrations in the site's sticker style: flat colour,
 * thick ink outlines and a hard offset shadow. All are decorative (the
 * surrounding text carries the meaning), so they are hidden from screen readers.
 */
import type { ReactNode } from "react";

const C = {
  ink: "#1d1a16",
  paper: "#f6efe1",
  mustard: "#f3b53a",
  tomato: "#d9452b",
  teal: "#9cc9c1",
  tealDeep: "#17534d",
  cobalt: "#2346c8",
} as const;

const stroke = {
  stroke: C.ink,
  strokeWidth: 2.5,
  strokeLinejoin: "round",
  strokeLinecap: "round",
} as const;

type Props = { className?: string };

function Frame({ id, viewBox, className, children }: Props & { id: string; viewBox: string; children: ReactNode }) {
  return (
    <svg
      className={className ? `illo ${className}` : "illo"}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={id} x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="3.5" dy="3.5" stdDeviation="0" floodColor={C.ink} floodOpacity="1" />
        </filter>
      </defs>
      {children}
    </svg>
  );
}

/** A four-point sparkle, the site's recurring "aha" mark. */
function Sparkle({ x, y, r, fill }: { x: number; y: number; r: number; fill: string }) {
  return (
    <path
      d={`M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r} Z`}
      fill={fill}
      {...stroke}
      strokeWidth={2}
    />
  );
}

/** The Career Experiment: two signposted paths and a small experiment to try first. */
export function CareerIllustration({ className }: Props) {
  const shadow = "illo-shadow-career";
  return (
    <Frame id={shadow} viewBox="0 0 240 180" className={className}>
      <path d="M22 168 Q120 126 218 168 Z" fill={C.paper} {...stroke} />
      <path d="M120 162 Q92 150 56 156" fill="none" {...stroke} strokeDasharray="4 6" />
      <path d="M120 162 Q150 150 186 156" fill="none" {...stroke} strokeDasharray="4 6" />

      <g filter={`url(#${shadow})`}>
        <rect x="113" y="38" width="14" height="126" rx="2" fill={C.paper} {...stroke} />
        <path d="M127 50 H190 L206 65 L190 80 H127 Z" fill={C.mustard} {...stroke} />
        <path d="M113 92 H52 L36 107 L52 122 H113 Z" fill={C.tomato} {...stroke} />
        <circle cx="120" cy="36" r="9" fill={C.tomato} {...stroke} />

        <g transform="rotate(-8 44 146)">
          <rect x="24" y="128" width="40" height="34" rx="3" fill={C.paper} {...stroke} />
          <path d="M24 138 H64" {...stroke} />
          <path d="M24 131 Q24 128 27 128 H61 Q64 128 64 131 V138 H24 Z" fill={C.cobalt} {...stroke} />
        </g>

        <path
          d="M184 118 V128 L170 156 Q167 163 175 163 H205 Q213 163 210 156 L196 128 V118 Z"
          fill={C.paper}
          {...stroke}
        />
        <rect x="180" y="112" width="20" height="7" rx="2" fill={C.paper} {...stroke} />
      </g>

      <path d="M138 61 H182 M138 69 H168" fill="none" {...stroke} />
      <path d="M62 103 H104 M76 111 H104" fill="none" {...stroke} stroke={C.paper} />
      <g transform="rotate(-8 44 146)" fill={C.ink}>
        <circle cx="34" cy="146" r="2.2" />
        <circle cx="44" cy="146" r="2.2" />
        <circle cx="54" cy="146" r="2.2" />
        <circle cx="34" cy="155" r="2.2" />
        <circle cx="44" cy="155" r="2.2" />
        <circle cx="54" cy="155" r="5" fill="none" stroke={C.tomato} strokeWidth="2.2" />
      </g>
      <path d="M176 146 H204 L209 157 Q210 161 205 161 H175 Q170 161 171 157 Z" fill={C.mustard} />
      <path d="M176 146 H204" fill="none" {...stroke} />
      <circle cx="186" cy="138" r="3" fill="none" {...stroke} strokeWidth={2} />
      <circle cx="194" cy="130" r="2" fill="none" {...stroke} strokeWidth={2} />

      <Sparkle x={62} y={42} r={10} fill={C.mustard} />
      <Sparkle x={212} y={28} r={7} fill={C.paper} />
      <Sparkle x={28} y={74} r={5} fill={C.paper} />
    </Frame>
  );
}

/** French Conversations: a café, a greeting, and an answer in your own words. */
export function FrenchIllustration({ className }: Props) {
  const shadow = "illo-shadow-french";
  return (
    <Frame id={shadow} viewBox="0 0 240 180" className={className}>
      <g filter={`url(#${shadow})`}>
        <path
          d="M36 22 H126 Q140 22 140 36 V66 Q140 80 126 80 H72 L52 98 L56 80 H36 Q22 80 22 66 V36 Q22 22 36 22 Z"
          fill={C.paper}
          {...stroke}
        />
        <path
          d="M124 92 H210 Q224 92 224 106 V132 Q224 146 210 146 H198 L202 164 L182 146 H124 Q110 146 110 132 V106 Q110 92 124 92 Z"
          fill={C.teal}
          {...stroke}
        />
        <ellipse cx="58" cy="161" rx="38" ry="7" fill={C.paper} {...stroke} />
        <path d="M86 124 Q102 124 102 136 Q102 148 84 148" fill="none" {...stroke} strokeWidth={6} />
        <path d="M30 118 H86 V134 Q86 156 58 156 Q30 156 30 134 Z" fill={C.mustard} {...stroke} />
      </g>
      <path d="M86 124 Q102 124 102 136 Q102 148 84 148" fill="none" stroke={C.mustard} strokeWidth={1.5} />

      <text x="81" y="58" textAnchor="middle" fontSize="19" fontWeight="700" fill={C.ink}>
        Bonjour !
      </text>
      <path d="M126 113 q8 -8 16 0 t16 0 t16 0 t16 0" fill="none" {...stroke} />
      <path d="M126 128 q6 -6 12 0 t12 0 t12 0" fill="none" {...stroke} />
      <circle cx="176" cy="128" r="3" fill={C.tomato} />
      <path d="M30 128 H86" fill="none" {...stroke} stroke={C.tomato} strokeWidth={4} />
      <path d="M48 112 q-5 -6 0 -12 M62 112 q-5 -6 0 -12" fill="none" {...stroke} strokeWidth={2} />

      <Sparkle x={186} y={44} r={11} fill={C.mustard} />
      <Sparkle x={214} y={68} r={5} fill={C.paper} />
    </Frame>
  );
}

/** Style DNA: a well-worn jacket on its hanger, a tag, and a thread twisting into a helix. */
export function StyleIllustration({ className }: Props) {
  const shadow = "illo-shadow-style";
  return (
    <Frame id={shadow} viewBox="0 0 240 180" className={className}>
      <path d="M120 38 V30 Q120 24 126 21 Q132 18 132 12 Q132 5 125 5 Q118 5 118 12" fill="none" {...stroke} />

      <path d="M26 44 C 10 60, 42 76, 26 92 S 10 124, 26 140 S 42 164, 26 172" fill="none" {...stroke} stroke={C.tomato} strokeWidth={3} />
      <path d="M26 44 C 42 60, 10 76, 26 92 S 42 124, 26 140" fill="none" {...stroke} stroke={C.paper} strokeWidth={3} />
      <path d="M16 20 L34 40" fill="none" {...stroke} strokeWidth={3.5} />
      <ellipse cx="18" cy="22" rx="3" ry="1.4" transform="rotate(48 18 22)" fill={C.paper} />

      <g filter={`url(#${shadow})`}>
        <path d="M120 38 L56 70 Q50 74 57 76 H183 Q190 74 184 70 Z" fill={C.paper} {...stroke} />
        <path
          d="M92 66 L64 76 L48 140 L66 144 L72 110 V164 H168 V110 L174 144 L192 140 L176 76 L148 66 Q120 84 92 66 Z"
          fill={C.cobalt}
          {...stroke}
        />
        <path d="M92 66 L106 94 L120 82 L134 94 L148 66 Q120 84 92 66 Z" fill={C.teal} {...stroke} />
        <g transform="rotate(14 210 158)">
          <path d="M198 146 H222 V172 H198 L192 159 Z" fill={C.paper} {...stroke} />
        </g>
      </g>

      <path d="M120 84 V164" fill="none" {...stroke} />
      <rect x="82" y="102" width="22" height="15" rx="2" fill="none" {...stroke} />
      <rect x="136" y="102" width="22" height="15" rx="2" fill="none" {...stroke} />
      <path d="M72 155 H168 M84 109 H102 M138 109 H156" fill="none" stroke={C.paper} strokeWidth={1.5} strokeDasharray="3 3" />
      <circle cx="127" cy="104" r="3.2" fill={C.mustard} {...stroke} strokeWidth={1.5} />
      <circle cx="127" cy="124" r="3.2" fill={C.mustard} {...stroke} strokeWidth={1.5} />
      <circle cx="127" cy="144" r="3.2" fill={C.mustard} {...stroke} strokeWidth={1.5} />
      <path d="M190 140 Q194 148 199 150" fill="none" {...stroke} strokeWidth={1.5} />
      <g transform="rotate(14 210 158)">
        <circle cx="198" cy="159" r="2" fill={C.ink} />
        <path d="M211 164 C 203 158 206 151 211 155 C 216 151 219 158 211 164 Z" fill={C.tomato} />
      </g>

      <Sparkle x={212} y={40} r={11} fill={C.paper} />
      <Sparkle x={210} y={92} r={6} fill={C.tomato} />
    </Frame>
  );
}

/** Decision Lab: survey numbers, a person under the lens, and what they actually said. */
export function DecisionIllustration({ className }: Props) {
  const shadow = "illo-shadow-decision";
  return (
    <Frame id={shadow} viewBox="0 0 240 180" className={className}>
      <g filter={`url(#${shadow})`}>
        <rect x="38" y="28" width="108" height="142" rx="8" fill={C.mustard} {...stroke} />
        <path
          d="M184 18 H216 Q226 18 226 28 V44 Q226 54 216 54 H202 L190 66 L193 54 H184 Q174 54 174 44 V28 Q174 18 184 18 Z"
          fill={C.paper}
          {...stroke}
        />
      </g>
      <rect x="50" y="44" width="84" height="114" rx="3" fill={C.paper} {...stroke} />
      <rect x="72" y="20" width="40" height="16" rx="4" fill={C.teal} {...stroke} />

      <rect x="60" y="56" width="9" height="9" rx="1.5" fill="none" {...stroke} strokeWidth={2} />
      <path d="M61.5 60 L64 63 L70 54" fill="none" {...stroke} stroke={C.tomato} />
      <rect x="60" y="72" width="9" height="9" rx="1.5" fill="none" {...stroke} strokeWidth={2} />
      <path d="M76 60.5 H122 M76 76.5 H110" fill="none" {...stroke} strokeWidth={2} />
      <rect x="64" y="112" width="12" height="28" fill={C.tomato} {...stroke} strokeWidth={2} />
      <rect x="82" y="100" width="12" height="40" fill={C.cobalt} {...stroke} strokeWidth={2} />
      <rect x="100" y="90" width="12" height="50" fill={C.teal} {...stroke} strokeWidth={2} />
      <path d="M58 140 H124" fill="none" {...stroke} />

      <g filter={`url(#${shadow})`}>
        <path d="M190 126 L212 148" fill="none" {...stroke} strokeWidth={13} />
        <circle cx="168" cy="104" r="30" fill={C.teal} {...stroke} strokeWidth={4} />
      </g>
      <path d="M190 126 L212 148" fill="none" stroke={C.tomato} strokeWidth={7} strokeLinecap="round" />
      <circle cx="168" cy="96" r="8" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M153 122 Q153 108 168 108 Q183 108 183 122" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M148 90 Q152 80 162 77" fill="none" stroke={C.paper} strokeWidth={3} strokeLinecap="round" />
      <text x="200" y="47" textAnchor="middle" fontSize="26" fontWeight="700" fill={C.ink}>
        “ ”
      </text>

      <Sparkle x={22} y={58} r={8} fill={C.paper} />
      <Sparkle x={210} y={84} r={5} fill={C.mustard} />
    </Frame>
  );
}

/** A tangled line that straightens into an arrow: ambiguity becoming focus. */
export function ScribbleArrow({ className }: Props) {
  return (
    <svg
      className={className ? `illo ${className}` : "illo"}
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 72 C 4 30, 62 18, 58 54 C 54 88, 8 84, 22 56 C 36 26, 96 24, 92 62 C 88 94, 40 86, 54 58 C 68 30, 120 36, 124 66 C 128 90, 154 78, 176 70 L 272 62"
        fill="none"
        {...stroke}
        strokeWidth={3.5}
      />
      <path d="M254 46 L274 62 L254 78" fill="none" {...stroke} strokeWidth={3.5} />
      <text className="illo-mono" x="10" y="14" fontSize="12" fontWeight="700" fill={C.ink}>
        MESSY
      </text>
      <text className="illo-mono" x="206" y="44" fontSize="12" fontWeight="700" fill={C.tomato}>
        FOCUSED
      </text>
      <Sparkle x={284} y={96} r={10} fill={C.paper} />
      <Sparkle x={106} y={104} r={6} fill={C.tomato} />
    </svg>
  );
}

const loopArrows = [
  { x: 220.7, y: 64.1, angle: 35.8 },
  { x: 220.7, y: 165.9, angle: 144.2 },
  { x: 79.3, y: 165.9, angle: -144.2 },
  { x: 79.3, y: 64.1, angle: -35.8 },
];

const loopBadges = [
  { x: 172, y: 24, label: "01" },
  { x: 272, y: 96, label: "02" },
  { x: 172, y: 168, label: "03" },
  { x: 72, y: 96, label: "04" },
];

/** How I work: people, focus, market and iteration as one loop that keeps going. */
export function MethodLoop({ className }: Props) {
  const shadow = "illo-shadow-method";
  return (
    <Frame id={shadow} viewBox="0 0 300 230" className={className}>
      <ellipse cx="150" cy="115" rx="100" ry="72" fill="none" {...stroke} strokeDasharray="5 7" />
      {loopArrows.map(({ x, y, angle }) => (
        <path
          key={`${x}-${y}`}
          d="M-7 -6 L3 0 L-7 6"
          transform={`translate(${x} ${y}) rotate(${angle})`}
          fill="none"
          {...stroke}
          strokeWidth={3}
        />
      ))}

      <g filter={`url(#${shadow})`}>
        <circle cx="150" cy="43" r="27" fill={C.paper} {...stroke} />
        <circle cx="250" cy="115" r="27" fill={C.paper} {...stroke} />
        <circle cx="150" cy="187" r="27" fill={C.paper} {...stroke} />
        <circle cx="50" cy="115" r="27" fill={C.paper} {...stroke} />
      </g>

      {/* 01 People */}
      <circle cx="150" cy="36" r="7" fill={C.mustard} {...stroke} strokeWidth={2} />
      <path d="M136 59 Q136 46 150 46 Q164 46 164 59" fill={C.mustard} {...stroke} strokeWidth={2} />

      {/* 02 Focus */}
      <circle cx="250" cy="115" r="16" fill={C.tomato} {...stroke} strokeWidth={2} />
      <circle cx="250" cy="115" r="10" fill={C.paper} {...stroke} strokeWidth={2} />
      <circle cx="250" cy="115" r="4" fill={C.tomato} />
      <path d="M266 99 L253 112 M266 99 H260 M266 99 V105" fill="none" {...stroke} strokeWidth={2} />

      {/* 03 Market */}
      <rect x="137" y="184" width="26" height="16" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M133 184 L137 173 H163 L167 184 Z" fill={C.teal} {...stroke} strokeWidth={2} />
      <path d="M146 173 L144 184 M154 173 L156 184" fill="none" {...stroke} strokeWidth={2} />
      <rect x="145" y="190" width="10" height="10" fill={C.mustard} {...stroke} strokeWidth={1.5} />

      {/* 04 Iterate */}
      <path d="M45 100 V108 L37 124 Q35 130 41 130 H59 Q65 130 63 124 L55 108 V100 Z" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M40 120 H60 L62.5 125 Q63.5 128 60 128 H40 Q36.5 128 37.5 125 Z" fill={C.tomato} />
      <path d="M42 100 H58" fill="none" {...stroke} strokeWidth={2} />

      {loopBadges.map(({ x, y, label }) => (
        <g key={label}>
          <circle cx={x} cy={y} r="11" fill={C.tomato} {...stroke} strokeWidth={2} />
          <text className="illo-mono" x={x} y={y + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill={C.paper}>
            {label}
          </text>
        </g>
      ))}

      <Sparkle x={150} y={112} r={16} fill={C.mustard} />
    </Frame>
  );
}

const bySlug: Record<string, (props: Props) => ReactNode> = {
  "career-experiment": CareerIllustration,
  "french-conversations": FrenchIllustration,
  "style-dna": StyleIllustration,
  "decision-lab": DecisionIllustration,
};

/** The spot illustration for a case study, looked up by its slug. */
export function ProjectIllustration({ slug, className }: Props & { slug: string }) {
  const Illustration = bySlug[slug];
  return Illustration ? <Illustration className={className} /> : null;
}

/** A case study's illustration on a framed, coloured plate. */
export function CaseIllustration({
  slug,
  tone,
  className,
}: Props & { slug: string; tone: "teal" | "tomato" | "mustard" | "cobalt" }) {
  return (
    <figure className={className ? `case-illo ${className}` : "case-illo"} data-tone={tone} aria-hidden="true">
      <ProjectIllustration slug={slug} />
    </figure>
  );
}
