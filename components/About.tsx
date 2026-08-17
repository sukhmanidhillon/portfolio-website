import { site } from "@/content/site";
import { FadeIn, Eyebrow } from "./ui";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-band">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        <FadeIn>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            A category manager who runs on analysis
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85 sm:text-lg">
            <p>{site.about.paragraph1}</p>
            <p>{site.about.paragraph2}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
