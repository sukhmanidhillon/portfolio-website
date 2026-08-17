import type { Config } from "tailwindcss";

// ─── DESIGN SYSTEM ───────────────────────────────────────────────
// These colors match Mani's Tableau dashboard + GitHub brand.
// Change them here and the whole site updates.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B2B2B",      // body text
        band: "#F5F6F7",     // alternating section background
        navy: "#1F3B57",     // primary accent — links, buttons, big numbers
        slate: "#5B84A8",    // secondary accent — hovers, "In Progress" badge
        teal: "#1A936F",     // positive metrics, "Live" badge
        line: "#E3E5E8",     // borders / gridlines
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,59,87,0.06), 0 4px 16px rgba(31,59,87,0.07)",
        cardHover: "0 2px 4px rgba(31,59,87,0.08), 0 8px 28px rgba(31,59,87,0.12)",
      },
      maxWidth: { site: "72rem" },
    },
  },
  plugins: [],
};
export default config;
