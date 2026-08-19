import { site, isFilled } from "@/content/site";
import { FadeIn, Eyebrow } from "./ui";

const icon = {
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23H8V8z" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.56-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  tableau: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 2h2v4h4v2h-4v4h-2V8H7V6h4V2zM3 10h2v3h3v2H5v3H3v-3H0v-2h3v-3zm16 0h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm-8 6h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z" />
    </svg>
  ),
};

export default function Contact() {
  const c = site.contact;
  const linkClass =
    "inline-flex items-center gap-2 rounded-md border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-slate hover:text-slate";

  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-site px-5 py-16 text-center sm:px-8 md:py-24">
        <FadeIn>
          <div className="flex justify-center">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {c.heading}
          </h2>
          {c.line && (
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
              {c.line}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${c.email}`} className={linkClass}>
              {icon.email} Email
            </a>
            <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {icon.linkedin} LinkedIn
            </a>
            <a href={c.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {icon.github} GitHub
            </a>
            {isFilled(c.tableauPublic) && (
              <a href={c.tableauPublic} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {icon.tableau} Tableau Public
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
