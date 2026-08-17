import { site } from "@/content/site";
import { FadeIn } from "./ui";

export default function ProofBar() {
  return (
    <section aria-label="Key results" className="bg-band">
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {site.proofBar.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-line bg-white p-5 shadow-card">
                <p className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  {s.number}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                <p className="mt-1.5 text-sm leading-snug text-ink/70">
                  {s.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-ink/60">
          {site.proofBar.caption}
        </p>
      </div>
    </section>
  );
}
