import { site } from "@/content/site";
import { FadeIn, Eyebrow } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <FadeIn>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Toolkit
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.skillGroups.map((g, i) => (
            <FadeIn key={g.group} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-lg border border-line bg-white p-5 shadow-card">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-navy">
                  {g.group}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/85">
                  {g.items}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
