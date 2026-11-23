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

/** Portrait colours for the home hero, taken from Quyen's photo. */
const P = {
  skin: "#f3cdb0",
  apron: "#e8c3ad",
  navy: "#1e2b5c",
} as const;

/** Thin pale stripes on the red backdrop, as in the photo. */
const backdropStripes = Array.from({ length: 22 }, (_, index) => 10 + index * 14);

/**
 * Home hero: a round portrait of Quyen drawn from her profile photo: long dark
 * side-parted hair, red lips, white collar, navy neckerchief with small white
 * diamonds, and a beige apron, against a red pinstriped backdrop.
 */
export function HeroIllustration({ className }: Props) {
  const clip = "illo-clip-hero";
  return (
    <svg
      className={className ? `illo ${className}` : "illo"}
      viewBox="0 0 332 332"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="160" cy="160" r="146" />
        </clipPath>
      </defs>

      {/* Hard shadow, then the white ring */}
      <circle cx="169" cy="169" r="156" fill={C.ink} />
      <circle cx="160" cy="160" r="156" fill={C.paper} {...stroke} strokeWidth={3} />

      <g clipPath={`url(#${clip})`}>
        {/* Backdrop: red with pale pinstripes and a warm gold shape on the right */}
        <rect x="0" y="0" width="332" height="332" fill={C.tomato} />
        <path
          d={backdropStripes.map((x) => `M${x} 0 V332`).join(" ")}
          fill="none"
          stroke={C.paper}
          strokeOpacity="0.35"
          strokeWidth={1.4}
        />
        <path d="M262 40 Q230 110 282 170 Q314 132 320 40 Z" fill={C.mustard} {...stroke} strokeWidth={2} />
        <path d="M250 210 Q296 190 320 240 L320 300 Q280 270 250 210 Z" fill={C.mustard} {...stroke} strokeWidth={2} />

        <g transform="translate(160 205) scale(1.45) translate(-122 -165)">
          {/* Long, full, wavy hair behind everything else; the head tilts slightly */}
          <g transform="rotate(6 122 165)">
            <path
              d="M84 118 Q76 62 120 60 Q172 60 170 116 Q170 150 178 182 Q186 210 180 236 Q164 250 150 236 L98 236 Q82 250 64 236 Q60 206 72 180 Q84 152 84 118 Z"
              fill={C.ink}
              {...stroke}
            />
          </g>

          {/* Shirt, apron, neck */}
          <path d="M44 330 Q50 204 96 184 Q122 174 148 184 Q194 204 200 330 Z" fill={C.paper} {...stroke} />
          <path d="M100 222 H146 L152 330 H94 Z" fill={P.apron} {...stroke} />
          <path d="M100 222 L94 188 M146 222 L152 188" fill="none" {...stroke} />
          <circle cx="105" cy="229" r="3" fill={C.paper} {...stroke} strokeWidth={1.5} />
          <circle cx="141" cy="229" r="3" fill={C.paper} {...stroke} strokeWidth={1.5} />
          <rect x="111" y="146" width="22" height="30" fill={P.skin} {...stroke} />

          <g transform="rotate(6 122 165)">
            {/* Face: a soft oval narrowing to the chin */}
            <path
              d="M92 112 Q92 78 122 78 Q152 78 152 112 Q152 140 137 152 Q122 161 107 152 Q92 140 92 112 Z"
              fill={P.skin}
              {...stroke}
            />
            <circle cx="103" cy="133" r="5.5" fill={C.tomato} fillOpacity="0.18" />
            <circle cx="141" cy="133" r="5.5" fill={C.tomato} fillOpacity="0.18" />

            {/* Fine, softly arched brows */}
            <path
              d="M99 106 Q107 101 116 104 M128 104 Q137 101 145 106"
              fill="none"
              stroke="#2b211b"
              strokeWidth={2.2}
              strokeLinecap="round"
            />

            {/* Open almond eyes, a little narrowed by the smile */}
            <path d="M100 119 Q108 112 116 119 Q108 123 100 119 Z M128 119 Q136 112 144 119 Q136 123 128 119 Z" fill="#ffffff" />
            <circle cx="108" cy="118.5" r="3.6" fill={C.ink} />
            <circle cx="136" cy="118.5" r="3.6" fill={C.ink} />
            <circle cx="109.2" cy="117.3" r="1" fill="#ffffff" />
            <circle cx="137.2" cy="117.3" r="1" fill="#ffffff" />
            <path d="M99 119 Q108 110 117 118 M127 118 Q136 110 145 119" fill="none" {...stroke} strokeWidth={2.4} />
            <path
              d="M102 122 Q108 124 114 122 M130 122 Q136 124 142 122"
              fill="none"
              stroke="#2b211b"
              strokeWidth={1.2}
              strokeLinecap="round"
            />

            {/* Small nose and a closed red smile, lifted a little more on one side */}
            <path d="M123 122 q-1 8 -5 11 q3 2 7 0" fill="none" {...stroke} strokeWidth={1.6} />
            <path d="M110 140 Q117 137 122 139 Q127 136 135 137 Q126 149 110 140 Z" fill={C.tomato} {...stroke} strokeWidth={1.5} />

            {/* No fringe: a side part, with the hair swept over and down the far side */}
            <path
              d="M110 72 Q148 62 166 94 Q176 124 162 172 Q158 142 152 120 Q146 98 126 90 Q114 87 110 72 Z"
              fill={C.ink}
              {...stroke}
              strokeWidth={1.5}
            />
            <path d="M110 72 Q88 74 86 108 Q84 140 96 172 Q93 140 95 116 Q98 90 110 72 Z" fill={C.ink} {...stroke} strokeWidth={1.5} />
            <path
              d="M74 196 q7 -9 1 -19 M68 222 q8 -8 3 -18 M172 196 q-7 -9 -1 -19 M176 222 q-8 -8 -3 -18 M150 104 q6 10 6 24"
              fill="none"
              stroke="#5a5048"
              strokeWidth={2}
              strokeLinecap="round"
            />

            {/* Drop earring on the far side */}
            <path d="M153 135 V144" fill="none" {...stroke} strokeWidth={1.5} />
            <circle cx="153" cy="147.5" r="3.4" fill={C.paper} {...stroke} strokeWidth={1.5} />
          </g>

          {/* Collar, and the navy neckerchief with small white diamonds, knotted and draped to one side */}
          <path d="M104 178 L122 198 L109 206 Z M140 178 L122 198 L135 206 Z" fill={C.paper} {...stroke} />
          <path d="M100 172 Q122 190 144 172 L140 187 Q122 200 104 187 Z" fill={P.navy} {...stroke} />
          <path d="M118 192 L152 232 L138 246 L110 198 Z" fill={P.navy} {...stroke} />
          <path d="M121 197 L148 230 L139 239" fill="none" stroke={C.paper} strokeWidth={1.4} strokeLinejoin="round" />
          <g fill={C.paper}>
            {[
              [110, 182],
              [122, 188],
              [134, 182],
              [124, 208],
              [132, 220],
              [140, 232],
            ].map(([x, y]) => (
              <path key={`${x}-${y}`} d={`M${x} ${y - 2.6} L${x + 2.2} ${y} L${x} ${y + 2.6} L${x - 2.2} ${y} Z`} />
            ))}
          </g>
        </g>
      </g>

      {/* Inner edge of the white ring */}
      <circle cx="160" cy="160" r="146" fill="none" {...stroke} />
    </svg>
  );
}

/* The four working principles, each drawn around (0, 0) to sit inside a 27-unit circle. */

function PeopleIcon() {
  return (
    <>
      <circle cx="0" cy="-7" r="7" fill={C.mustard} {...stroke} strokeWidth={2} />
      <path d="M-14 16 Q-14 3 0 3 Q14 3 14 16" fill={C.mustard} {...stroke} strokeWidth={2} />
    </>
  );
}

function FocusIcon() {
  return (
    <>
      <circle cx="0" cy="0" r="16" fill={C.tomato} {...stroke} strokeWidth={2} />
      <circle cx="0" cy="0" r="10" fill={C.paper} {...stroke} strokeWidth={2} />
      <circle cx="0" cy="0" r="4" fill={C.tomato} />
      <path d="M16 -16 L3 -3 M16 -16 H10 M16 -16 V-10" fill="none" {...stroke} strokeWidth={2} />
    </>
  );
}

function MarketIcon() {
  return (
    <>
      <rect x="-13" y="-3" width="26" height="16" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M-17 -3 L-13 -14 H13 L17 -3 Z" fill={C.teal} {...stroke} strokeWidth={2} />
      <path d="M-4 -14 L-6 -3 M4 -14 L6 -3" fill="none" {...stroke} strokeWidth={2} />
      <rect x="-5" y="3" width="10" height="10" fill={C.mustard} {...stroke} strokeWidth={1.5} />
    </>
  );
}

function IterateIcon() {
  return (
    <>
      <path d="M-5 -15 V-7 L-13 9 Q-15 15 -9 15 H9 Q15 15 13 9 L5 -7 V-15 Z" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M-10 5 H10 L12.5 10 Q13.5 13 10 13 H-10 Q-13.5 13 -12.5 10 Z" fill={C.tomato} />
      <path d="M-8 -15 H8" fill="none" {...stroke} strokeWidth={2} />
    </>
  );
}

const principleIcons = [PeopleIcon, FocusIcon, MarketIcon, IterateIcon];

const stations = [
  { x: 150, y: 43, Icon: PeopleIcon },
  { x: 250, y: 115, Icon: FocusIcon },
  { x: 150, y: 187, Icon: MarketIcon },
  { x: 50, y: 115, Icon: IterateIcon },
];

/** One working principle (0–3: people, focus, market, iterate) as a round badge. */
export function PrincipleBadge({ index, className }: Props & { index: number }) {
  const Icon = principleIcons[index];
  if (!Icon) return null;
  const shadow = `illo-shadow-principle-${index}`;
  return (
    <Frame id={shadow} viewBox="0 0 68 68" className={className}>
      <circle cx="32" cy="32" r="27" fill={C.paper} {...stroke} filter={`url(#${shadow})`} />
      <g transform="translate(32 32)">
        <Icon />
      </g>
    </Frame>
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

      {stations.map(({ x, y, Icon }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <Icon />
        </g>
      ))}

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

type Tone = "teal" | "tomato" | "mustard" | "cobalt";

/** Any illustration on a framed, coloured plate. */
export function IllustrationPlate({ tone, className, children }: Props & { tone: Tone; children: ReactNode }) {
  return (
    <figure className={className ? `case-illo ${className}` : "case-illo"} data-tone={tone} aria-hidden="true">
      {children}
    </figure>
  );
}

/** A case study's illustration on a framed, coloured plate. */
export function CaseIllustration({ slug, tone, className }: Props & { slug: string; tone: Tone }) {
  return (
    <IllustrationPlate tone={tone} className={className}>
      <ProjectIllustration slug={slug} />
    </IllustrationPlate>
  );
}

/* About page ----------------------------------------------------------------- */

/** About hero: from home in Vietnam, by plane to UBC, and on towards product work. */
export function JourneyIllustration({ className }: Props) {
  const shadow = "illo-shadow-journey";
  return (
    <Frame id={shadow} viewBox="0 0 320 240" className={className}>
      <path d="M58 170 C 62 128, 92 112, 116 108" fill="none" {...stroke} strokeDasharray="5 7" />
      <path d="M188 106 C 222 108, 248 116, 258 132" fill="none" {...stroke} strokeDasharray="5 7" />

      {/* Home: a nón lá */}
      <g transform="translate(58 185) scale(1.3) translate(-58 -185)">
        <path d="M22 196 L58 160 L94 196 Q58 206 22 196 Z" fill={C.paper} {...stroke} filter={`url(#${shadow})`} />
        <path d="M34 184 Q58 190 82 184 M44 174 Q58 178 72 174" fill="none" {...stroke} strokeWidth={1.6} />
        <path d="M30 199 Q58 210 86 199" fill="none" {...stroke} stroke={C.tomato} strokeWidth={3} />
      </g>

      {/* UBC: mountains and a mortarboard */}
      <g transform="translate(156 100) scale(1.25) translate(-156 -100)">
        <g filter={`url(#${shadow})`}>
          <path d="M108 128 L136 96 L150 110 L170 88 L204 128 Z" fill={C.teal} {...stroke} />
          <path d="M122 72 L154 56 L186 72 L154 88 Z" fill={C.cobalt} {...stroke} />
        </g>
        <path d="M136 96 L130 103 L136 101 L141 105 Z M170 88 L163 96 L170 94 L176 97 Z" fill={C.paper} {...stroke} strokeWidth={1.5} />
        <path d="M136 79 V92 Q154 101 172 92 V79" fill={C.cobalt} {...stroke} />
        <path d="M154 72 L180 76 V92" fill="none" {...stroke} stroke={C.tomato} strokeWidth={3} />
        <circle cx="180" cy="94" r="3" fill={C.tomato} />
      </g>

      {/* Product: a phone */}
      <g transform="translate(262 174) scale(1.2) translate(-262 -174)">
        <rect x="240" y="138" width="44" height="72" rx="8" fill={C.paper} {...stroke} filter={`url(#${shadow})`} />
        <rect x="247" y="148" width="30" height="46" rx="3" fill={C.teal} {...stroke} strokeWidth={2} />
        <path d="M254 158 H270 M254 165 H264" fill="none" {...stroke} strokeWidth={2} />
        <circle cx="262" cy="182" r="6" fill={C.mustard} {...stroke} strokeWidth={2} />
        <path d="M258 202 H266" fill="none" {...stroke} strokeWidth={2} />
      </g>

      {/* The plane on its way */}
      <g transform="translate(74 130) rotate(-38) scale(1.15)">
        <path d="M0 0 L32 11 L0 22 L7 11 Z" fill={C.paper} {...stroke} filter={`url(#${shadow})`} />
        <path d="M7 11 H32" fill="none" {...stroke} strokeWidth={2} />
      </g>

      <g className="illo-mono" fontSize="12" fontWeight="700" fill={C.ink} textAnchor="middle">
        <text x="58" y="228">HOME</text>
        <text x="156" y="154">UBC</text>
        <text x="262" y="236">PRODUCT</text>
      </g>

      <Sparkle x={290} y={44} r={11} fill={C.paper} />
      <Sparkle x={220} y={58} r={6} fill={C.tomato} />
      <Sparkle x={44} y={74} r={7} fill={C.paper} />
    </Frame>
  );
}

/** About story: an open door, and several ways forward beyond it. */
export function DoorIllustration({ className }: Props) {
  const shadow = "illo-shadow-door";
  return (
    <Frame id={shadow} viewBox="0 0 240 240" className={className}>
      <path d="M78 202 H162 L206 228 H34 Z" fill={C.paper} fillOpacity="0.7" />
      <path d="M16 228 H224" fill="none" {...stroke} />

      <g filter={`url(#${shadow})`}>
        <rect x="70" y="28" width="100" height="174" rx="3" fill={C.ink} {...stroke} />
        <rect x="78" y="36" width="84" height="166" fill={C.mustard} {...stroke} />
        <path d="M78 36 L44 52 V216 L78 202 Z" fill={C.tomato} {...stroke} />
      </g>

      <path d="M78 122 H162" fill="none" {...stroke} strokeWidth={2} />
      <circle cx="138" cy="80" r="11" fill={C.paper} {...stroke} strokeWidth={2} />
      <path d="M120 202 L92 124 M120 202 L120 124 M120 202 L150 124" fill="none" {...stroke} strokeDasharray="4 5" />
      <circle cx="92" cy="124" r="3.5" fill={C.cobalt} {...stroke} strokeWidth={1.5} />
      <circle cx="120" cy="124" r="3.5" fill={C.cobalt} {...stroke} strokeWidth={1.5} />
      <circle cx="150" cy="124" r="3.5" fill={C.cobalt} {...stroke} strokeWidth={1.5} />
      <text x="104" y="104" textAnchor="middle" fontSize="26" fontWeight="700" fill={C.ink}>
        ?
      </text>
      <path d="M52 70 L70 64 V200 L52 206 Z" fill="none" stroke={C.ink} strokeOpacity="0.25" strokeWidth={2} />
      <circle cx="66" cy="132" r="3.5" fill={C.mustard} {...stroke} strokeWidth={1.5} />

      <g fill={C.ink}>
        <ellipse cx="104" cy="216" rx="4" ry="6" transform="rotate(-20 104 216)" />
        <ellipse cx="122" cy="224" rx="4" ry="6" transform="rotate(-20 122 224)" />
      </g>

      <Sparkle x={200} y={52} r={11} fill={C.paper} />
      <Sparkle x={196} y={150} r={6} fill={C.mustard} />
      <Sparkle x={26} y={40} r={7} fill={C.paper} />
    </Frame>
  );
}

/** "Research and analysis": a report, its chart, and a closer look. */
export function ResearchIcon({ className }: Props) {
  const shadow = "illo-shadow-research";
  return (
    <Frame id={shadow} viewBox="0 0 88 80" className={className}>
      <rect x="8" y="8" width="46" height="58" rx="3" fill={C.paper} {...stroke} filter={`url(#${shadow})`} />
      <path d="M16 18 H44 M16 25 H36" fill="none" {...stroke} strokeWidth={2} />
      <rect x="16" y="44" width="7" height="14" fill={C.tomato} {...stroke} strokeWidth={1.8} />
      <rect x="27" y="36" width="7" height="22" fill={C.cobalt} {...stroke} strokeWidth={1.8} />
      <path d="M14 58 H46" fill="none" {...stroke} strokeWidth={2} />
      <path d="M66 58 L80 72" fill="none" {...stroke} strokeWidth={8} />
      <path d="M66 58 L80 72" fill="none" stroke={C.mustard} strokeWidth={3.5} strokeLinecap="round" />
      <circle cx="56" cy="48" r="15" fill={C.teal} {...stroke} strokeWidth={3} filter={`url(#${shadow})`} />
      <path d="M48 44 Q50 38 56 36" fill="none" stroke={C.paper} strokeWidth={2.5} strokeLinecap="round" />
    </Frame>
  );
}

/** "Behaviour and learning": what people say, and what they feel. */
export function BehaviourIcon({ className }: Props) {
  const shadow = "illo-shadow-behaviour";
  return (
    <Frame id={shadow} viewBox="0 0 88 80" className={className}>
      <g filter={`url(#${shadow})`}>
        <path
          d="M14 8 H54 Q62 8 62 16 V36 Q62 44 54 44 H30 L18 56 L20 44 H14 Q6 44 6 36 V16 Q6 8 14 8 Z"
          fill={C.paper}
          {...stroke}
        />
        <path d="M64 74 C 44 62 44 44 56 44 C 60 44 63 47 64 50 C 65 47 68 44 72 44 C 84 44 84 62 64 74 Z" fill={C.tomato} {...stroke} />
      </g>
      <circle cx="22" cy="26" r="3" fill={C.ink} />
      <circle cx="34" cy="26" r="3" fill={C.ink} />
      <circle cx="46" cy="26" r="3" fill={C.ink} />
      <path d="M52 54 Q52 49 56 48" fill="none" stroke={C.paper} strokeWidth={2.5} strokeLinecap="round" />
    </Frame>
  );
}

/** "Delivery with people": two teammates and the flag they're working towards. */
export function DeliveryIcon({ className }: Props) {
  const shadow = "illo-shadow-delivery";
  return (
    <Frame id={shadow} viewBox="0 0 88 80" className={className}>
      <path d="M62 8 V48" fill="none" {...stroke} />
      <path d="M62 9 H84 L78 17 L84 25 H62 Z" fill={C.tomato} {...stroke} />
      <g filter={`url(#${shadow})`}>
        <circle cx="24" cy="32" r="9" fill={C.mustard} {...stroke} />
        <path d="M8 66 Q8 46 24 46 Q40 46 40 66 Z" fill={C.mustard} {...stroke} />
        <circle cx="52" cy="40" r="9" fill={C.teal} {...stroke} />
        <path d="M36 72 Q36 54 52 54 Q68 54 68 72 Z" fill={C.teal} {...stroke} />
      </g>
    </Frame>
  );
}

/** About call to action: a paper plane looping off to say hello. */
export function PaperPlaneIllustration({ className }: Props) {
  const shadow = "illo-shadow-plane";
  return (
    <Frame id={shadow} viewBox="0 0 260 170" className={className}>
      <path
        d="M14 150 C 54 156, 86 120, 70 98 C 56 80, 30 102, 50 118 C 72 136, 116 110, 150 84"
        fill="none"
        {...stroke}
        strokeDasharray="5 7"
      />
      <g filter={`url(#${shadow})`}>
        <path d="M244 26 L152 66 L188 76 Z" fill={C.paper} {...stroke} />
        <path d="M244 26 L188 76 L202 114 Z" fill={C.teal} {...stroke} />
        <path d="M188 76 L202 114 L180 92 Z" fill={C.cobalt} {...stroke} />
      </g>
      <Sparkle x={130} y={30} r={11} fill={C.mustard} />
      <Sparkle x={232} y={130} r={7} fill={C.tomato} />
      <Sparkle x={100} y={150} r={5} fill={C.mustard} />
    </Frame>
  );
}
