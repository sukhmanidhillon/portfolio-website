"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import { FadeIn } from "./ui";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:py-24">
        <FadeIn>
          {site.hero.locationChip && (
            <p className="mb-4 inline-flex items-center rounded-full border border-line bg-band px-3.5 py-1.5 text-xs font-medium text-ink/80">
              {site.hero.locationChip}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {site.name}{" "}
            <span className="font-normal text-ink/50">({site.nickname})</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-navy sm:text-xl">
            {site.hero.titleLine}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg">
            {site.hero.valueLine}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`#${site.hero.primaryCta.targetId}`}
              className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate"
            >
              {site.hero.primaryCta.label}
            </a>
            <a
              href={`#${site.hero.secondaryCta.targetId}`}
              className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-slate hover:text-slate"
            >
              {site.hero.secondaryCta.label}
            </a>
          </div>
        </FadeIn>

        {/* Headshot — order-first on mobile, right side on desktop.
            If /public/headshot.jpg is missing, a clean monogram shows instead. */}
        <FadeIn delay={0.1} className="order-first md:order-last">
          {imgOk ? (
            <Image
              src={site.hero.headshot.src}
              alt={site.hero.headshot.alt}
              width={224}
              height={224}
              priority
              onError={() => setImgOk(false)}
              className="mx-auto h-40 w-40 rounded-full border border-line object-cover shadow-card md:h-56 md:w-56"
            />
          ) : (
            <div
              aria-hidden="true"
              className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-navy text-5xl font-bold text-white shadow-card md:h-56 md:w-56"
            >
              SD
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
