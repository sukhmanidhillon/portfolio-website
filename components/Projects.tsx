import { site, isFilled } from "@/content/site";
import { FadeIn, Eyebrow } from "./ui";

function StatusBadge({ status }: { status: "Live" | "In Progress" }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        live ? "bg-teal/10 text-teal" : "bg-slate/10 text-slate"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-teal" : "bg-slate"}`}
      />
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <FadeIn>
          <Eyebrow>Projects</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Portfolio
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/85 sm:text-lg">
            {site.projectsIntro}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {site.projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">
                    {p.tool}
                  </p>
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {p.findings.map((f) => (
                    <li key={f} className="flex gap-2 text-sm leading-snug text-ink/85">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-band px-2 py-0.5 text-xs font-medium text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons: only render when the link is actually filled */}
                {(isFilled(p.liveUrl) || isFilled(p.githubUrl)) && (
                  <div className="mt-5 flex flex-wrap gap-2.5 border-t border-line pt-4">
                    {isFilled(p.liveUrl) && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate"
                      >
                        {p.liveLabel}
                      </a>
                    )}
                    {isFilled(p.githubUrl) && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-navy px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-slate hover:text-slate"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Live Tableau embed: appears only when embedUrl is filled in
            content/site.ts. Desktop only — on mobile the card's
            [Live Dashboard] button opens Tableau Public instead. */}
        {site.projects.filter((p) => isFilled(p.embedUrl)).map((p) => (
          <FadeIn key={p.title + "-embed"}>
            <div className="mt-10 hidden md:block">
              <p className="mb-3 text-sm font-semibold text-ink">
                {p.title}: live preview
              </p>
              <div className="overflow-hidden rounded-lg border border-line shadow-card">
                <iframe
                  src={p.embedUrl}
                  title={`${p.title} interactive dashboard`}
                  loading="lazy"
                  className="h-[720px] w-full"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
