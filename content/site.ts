// ═══════════════════════════════════════════════════════════════════
//  THIS IS YOUR FILE, MANI.
//  Every word of copy, every link, every number on the website lives
//  here. Edit this file, save it, and the site updates. You never
//  need to touch anything in /components or /app.
//
//  RULES BUILT INTO THE SITE:
//  • Any link left as "" (empty) or containing the word "FILL" makes
//    its button DISAPPEAR automatically. No dead links, ever.
//  • Status badges: "Live" renders teal, "In Progress" renders slate.
//
//  CONTENT RULES (from your blueprint — keep them when editing):
//  • No employer dollar figures anywhere on the site. Rates and
//    multiples only. (Olist project figures are fine — public data.)
//  • No Power BI claims anywhere. Tableau carries all BI weight.
//  • No resume on the site. Contact handles tailored resumes.
//  • No em dashes in copy.
//  • Banned words: aspiring, passionate, transitioning, pivoting.
// ═══════════════════════════════════════════════════════════════════

// ─── LINKS YOU STILL NEED TO FILL (search "FILL" to find them) ─────
//  1. tableau project → liveUrl    (Tableau Public dashboard link)
//  2. tableau project → embedUrl   (same link, for the live embed)
//  3. tableau project → githubUrl  (repo not public yet as of build day)
//  4. m5 project → githubUrl       (repo not public yet as of build day)
//  5. contact → tableauPublic      (your Tableau Public PROFILE link)
//  6. siteUrl                      (your real domain after deploying)
// ──────────────────────────────────────────────────────────────────

export const site = {
  // ═══ BASICS / SEO ═══════════════════════════════════════════════
  name: "Sukhmani Dhillon",
  nickname: "Mani",
  siteTitle: "Sukhmani Dhillon | Retail & Category Analytics · SQL · Tableau",
  metaDescription:
    "Data analyst specializing in retail and CPG analytics: demand forecasting, promotion measurement, and pricing analysis in SQL and Tableau.",
  siteUrl: "https://sukhmanidhillon.com",

  // ═══ 1. HERO ════════════════════════════════════════════════════
  hero: {
    titleLine: "Data & Category Analytics · SQL · Tableau · Excel · Forecasting",
    valueLine:
      "I turn retail sales, inventory, and promotion data into decisions. Currently running category analytics for 110+ stores at WHSmith North America.",
    locationChip: "",
    primaryCta: { label: "View my work", targetId: "projects" },
    secondaryCta: { label: "Contact me", targetId: "contact" },
    // Put your photo at /public/headshot.jpg — if the file is missing,
    // the site shows a clean navy monogram instead (never a broken image).
    headshot: { src: "/headshot.jpg", alt: "Sukhmani Dhillon" },
  },

  // ═══ 2. PROOF BAR ═══════════════════════════════════════════════
  // Rates and multiples only. No employer dollar figures.
  proofBar: {
    caption: "Results from my category analytics work at WHSmith North America.",
    stats: [
      {
        number: "94%",
        label: "holiday sell-through",
        detail: "up from 78% on a forecast I rebuilt at store and SKU level",
      },
      {
        number: "3.5x",
        label: "vendor program income",
        detail: "year-over-year growth anchored by my ROI models",
      },
      {
        number: "29%",
        label: "multi-unit purchases",
        detail: "up from 18% in a BOGO test vs a matched baseline",
      },
      {
        number: "96.4%",
        label: "in-stock rate, top 100 SKUs",
        detail: "up from 91.2% after flagging chronic out-of-stocks",
      },
    ],
  },

  // ═══ 3. PROJECTS ════════════════════════════════════════════════
  projectsIntro:
    "Public-data projects, written the way I write for executives: findings first, methods after.",
  projects: [
    {
      title: "Retail Vendor & Category Performance Analysis",
      tool: "SQL",
      status: "Live" as const, // "Live" or "In Progress"
      description:
        "I took a public e-commerce dataset (~100K orders, 9 relational tables, SQLite) and asked it the questions a merchandising team actually asks: where revenue concentrates, which sellers matter, and what operational levers move retention. Seven business questions, answered in SQL with CTEs and window functions.",
      findings: [
        "Revenue has a long-tail problem: it takes 533 sellers (~18% of the base) to reach 80% of revenue",
        "Late delivery carries a ~2-star review penalty: 2.27★ vs 4.29★ on-time, a 6.7x higher 1-2 star rate",
        "Only 3.0% of customers ever reorder, but repeat buyers are worth ~2x (~$260 vs ~$138)",
      ],
      tags: ["SQL", "SQLite", "Window Functions", "CTEs"],
      liveUrl: "",
      liveLabel: "Live Dashboard",
      embedUrl: "",
      githubUrl: "https://github.com/sukhmanidhillon/retail-vendor-sql-analysis",
    },
    {
      title: "Retail Performance Dashboard",
      tool: "Tableau",
      status: "Live" as const,
      description:
        "The same dataset, built into the kind of dashboard I build for executives at work: revenue and category KPIs, vendor concentration, regional performance, and the delivery-vs-review relationship in one interactive view, built on a star-schema data model with LOD expressions and table calculations.",
      findings: [
        "$13M+ delivered revenue across ~96K orders visualized across 5 pages",
        "Black Friday spike annotated: ~$988K month, +52% MoM",
        "Star-schema model means every KPI has exactly one definition, the same discipline I use in production reporting",
      ],
      tags: ["Tableau", "LOD Expressions", "Table Calcs", "Star Schema"],
      liveUrl: "https://public.tableau.com/app/profile/sukhmani.dhillon/viz/RetailPerformanceDashboard-Olist/1ExecutiveOverview",
      liveLabel: "Live Dashboard",
      // FILL: paste the SAME Tableau Public link here to show a live
      // interactive embed on desktop (mobile keeps the button — Tableau
      // embeds are miserable on phones). Leave "" for no embed.
      embedUrl: "",
      githubUrl: "", // FILL: tableau repo link when it's public → button appears
    },
    {
      title: "M5 Demand Forecasting Engine",
      tool: "Excel",
      status: "Live" as const, // flip to "In Progress" if you want honesty until it ships
      description:
        "A full demand-forecasting build in Excel on Walmart's M5 dataset: 120 items × 4 California stores × 63 months (30,240-row fact table via Power Query). Five-model forecast ladder with a rolling-origin 4-fold backtest, seasonality indices, demand classification (ABC + Syntetos-Boylan), and error economics translating forecast misses into dollars.",
      findings: [
        "Honest validation: expanding-window backtest across 4 folds, wMAPE/bias scorecard by model and demand class",
        "Forecast Value Added waterfall: every model must beat the naive benchmark",
        "Mirrors the seasonal forecasting I run at WHSmith (holiday sell-through 78% to 94%)",
      ],
      tags: ["Excel", "Power Query", "LAMBDA", "Forecasting", "Backtesting"],
      liveUrl: "",
      liveLabel: "Live Dashboard",
      embedUrl: "",
      githubUrl: "", // FILL: M5 repo link when it's public → button appears
    },
    // To add a 4th project later, copy one of the blocks above, paste it
    // here, and edit the text. The layout adapts automatically.
  ],

  // ═══ 4. EXPERIENCE ══════════════════════════════════════════════
  // Narrative summaries, first person, multiples and rates only.
  // No employer dollar figures on the public site: dollars live on
  // the tailored PDFs and in interviews.
  // NOTE ON TITLES: these follow your blueprint ("Buyer" appears
  // exactly once, in the middle role). Your master resume says
  // "Buyer / Category Analytics Manager" and "Assistant Buyer /
  // Category Analyst" — if you want the site to match the resume
  // titles exactly, just edit the title fields below.
  experience: [
    {
      title: "Buyer / Category Analytics Manager",
      company: "WHSmith North America",
      dates: "Jan 2025 to Present",
      location: "Las Vegas, NV",
      summary:
        "I run end-to-end analytics for the candy category across 110+ airport stores in the US and Canada: demand forecasting, promotion measurement, price testing, and vendor ROI modeling, built on SQL and a Tableau reporting layer I designed and own on Tableau Server. Recent highlights: holiday sell-through up from 78% to 94% on a forecast I rebuilt bottom-up at the store and SKU level, a 3.5x year-over-year increase in vendor program income anchored by my ROI models, and an executive dashboard that retired five manual workbooks and became the CCO's Monday-morning read.",
    },
    {
      title: "Associate Buyer / Category Analyst",
      company: "WHSmith North America",
      dates: "Dec 2023 to Dec 2024",
      location: "Las Vegas, NV",
      summary:
        "I built the department's first vendor ROI models and used them to pilot measured-lift funding on the specialty program, growing its income 13x in one year while program sales grew more than 70%. Along the way, my weekly SQL exception reporting surfaced the velocity decline that became the company's first private-label line, and I automated the reporting cycle itself, turning a six-hour manual Friday build into a 25-minute refresh.",
    },
    {
      title: "Assistant Buyer / Category Analyst",
      company: "Ross Stores",
      dates: "Sep 2022 to Nov 2023",
      location: "New York, NY",
      summary:
        "My first analytics seat: weekly demand forecasts across a 500-SKU assortment, where I built the team's first forecast-accuracy tracking and brought rolling MAPE from 34% to 26%, armed cost renegotiations with landed-cost and sell-through analysis, and proved a packaging-standards change cut damage rates by roughly 40% using an adopter versus non-adopter comparison.",
    },
  ],
  educationLine:
    "B.S. Business Analytics & Marketing, Indiana University, Kelley School of Business, GPA 3.97 · M.S. Computer Science (Machine Learning & AI), WGU, expected Dec 2026",

  // ═══ 5. SKILLS ══════════════════════════════════════════════════
  // Mirrors the master resume's five groups. No Power BI, per blueprint.
  skillGroups: [
    {
      group: "Query & Analysis",
      items:
        "SQL (CTEs, window functions, multi-source joins), Advanced Excel (forecast models, OTB and retail math: sell-through, WOS, inventory turn, GM/AUR, Power Query, pivot models), MS Access",
    },
    {
      group: "BI & Visualization",
      items:
        "Tableau (executive dashboards, calculated fields, star-schema data models, KPI reporting), data visualization, Git/GitHub",
    },
    {
      group: "Forecasting & Planning",
      items:
        "Seasonal demand forecasting, MAPE/bias tracking, store-level allocation, consensus demand reviews with supply chain, replenishment parameters",
    },
    {
      group: "Promotion & Pricing Analytics",
      items:
        "Promo pre/post measurement with matched baselines, trade funding ROI by SKU, price-point testing, basket and transaction-log analysis",
    },
    {
      group: "Retail Systems",
      items: "Aptos Analytics, Merchandising Analytics (MA), Oracle RMS/RDW, Celigo",
    },
  ],

  // ═══ 6. ABOUT ═══════════════════════════════════════════════════
  about: {
    paragraph1:
      "I'm a data analyst who grew up inside retail P&Ls. Today I run category analytics for a North American travel retailer: forecasting, promotion measurement, pricing tests, and the Tableau reporting layer executives actually use. I like problems where the data is messy, the stakes are commercial, and the answer has to survive a negotiation.",
    // Optional: add ONE genuine non-work clause at the end of this
    // paragraph if you want personality (e.g. ", and away from work
    // you'll find me ..."). Your blueprint's advice: skip it if it
    // feels forced. Currently omitted.
    paragraph2:
      "B.S. in Business Analytics from Indiana University's Kelley School of Business (3.97 GPA). Currently completing an M.S. in Computer Science with a Machine Learning & AI concentration at Western Governors University, expected December 2026.",
  },

  // ═══ 7. CONTACT ═════════════════════════════════════════════════
  contact: {
    heading: "Get in touch.",
    line: "",
    email: "manidhillonoffice@gmail.com",
    linkedin: "https://www.linkedin.com/in/sukhmani-dhillon-ksb",
    github: "https://github.com/sukhmanidhillon",
    tableauPublic: "https://public.tableau.com/app/profile/sukhmani.dhillon",
  },

  footer: "© 2026 Sukhmani Dhillon · Built with Next.js",
};

// Helper used by components: hides any button whose link is empty or
// still contains the word "FILL". Don't edit this.
export function isFilled(url?: string): url is string {
  return !!url && url.trim() !== "" && !url.toUpperCase().includes("FILL");
}
