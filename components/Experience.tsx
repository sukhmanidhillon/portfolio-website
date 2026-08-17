import { site } from "@/content/site";
import { FadeIn, Eyebrow } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-band">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <FadeIn>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Where the numbers come from
          </h2>
        </FadeIn>

        <ol className="mt-10 max-w-3xl space-y-0 border-l-2 border-line pl-6">
          {site.experience.map((job, i) => (
            <li key={job.title + job.dates} className="relative pb-10 last:pb-0">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-navy shadow-card"
              />
              <FadeIn delay={i * 0.08}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-ink">{job.title}</h3>
                  <span className="text-sm font-semibold text-navy">
                    {job.company}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-ink/60">
                  {job.dates} · {job.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                  {job.summary}
                </p>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn>
          <div className="mt-10 max-w-3xl border-t border-line pt-6">
            <p className="text-sm leading-relaxed text-ink/85">
              {site.educationLine}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
