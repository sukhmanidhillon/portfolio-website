# Sukhmani Dhillon — Portfolio Website

Single-page portfolio. Next.js 14 (App Router) + Tailwind CSS + Framer Motion. Fully static — no backend.

## The one file you edit
**`content/site.ts`** — every word of copy, every link, every stat, every status badge.
Edit → save → the site updates. Never touch `/components` or `/app`.

Links left empty or containing "FILL" auto-hide their buttons. Paste the real URL and the button appears.

## Content rules baked into the copy (from the blueprint)
- No employer dollar figures — rates and multiples only (Olist public-data figures are fine)
- No Power BI claims — Tableau carries all BI weight
- No resume on the site — Contact offers a tailored resume by email instead
- No em dashes in copy

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Your assets (in /public)
- `headshot.jpg` — ADD THIS (site shows an "SD" monogram until you do)
- `og.png` — social-share preview image (already generated)

## Still to fill in content/site.ts (search "FILL")
1. Tableau dashboard live link (project card 2)
2. Tableau embed link — same URL, shows a live interactive dashboard on desktop
3. Tableau GitHub repo link (card 2)
4. M5 GitHub repo link (card 3)
5. Tableau Public profile link (Contact)
6. `siteUrl` — your real domain after deploying
