// Tailwind needs literal class names to detect them at build time, so this maps
// each project's brand color (from constants/projects.js) to a fixed set of
// companion utility classes rather than constructing them at runtime (e.g.
// `${accent.border}/25` would never be picked up by Tailwind's scanner).
const ACCENT_MAP = {
  "bg-blue-400": {
    text: "text-blue-500",
    borderLight: "border-blue-400/25",
    borderMed: "border-blue-400/40",
  },
  "bg-orange-500": {
    text: "text-orange-500",
    borderLight: "border-orange-500/25",
    borderMed: "border-orange-500/40",
  },
  "bg-teal-500": {
    text: "text-teal-600",
    borderLight: "border-teal-500/25",
    borderMed: "border-teal-500/40",
  },
  "bg-blue-600": {
    text: "text-blue-600",
    borderLight: "border-blue-600/25",
    borderMed: "border-blue-600/40",
  },
  "bg-black": {
    text: "text-neutral-900",
    borderLight: "border-neutral-900/15",
    borderMed: "border-neutral-900/30",
  },
  "bg-green-500": {
    text: "text-green-600",
    borderLight: "border-green-500/25",
    borderMed: "border-green-500/40",
  },
};

const DEFAULT_ACCENT = {
  text: "text-emerald-600",
  borderLight: "border-emerald-600/25",
  borderMed: "border-emerald-600/40",
};

export const getAccent = (colorClass) => ACCENT_MAP[colorClass] || DEFAULT_ACCENT;
