"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Gentle fade-in on scroll. Respects prefers-reduced-motion. */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Tiny navy bar-chart motif — the site's one signature mark.
    Ties the whole page to Mani's analytics identity. Decorative only. */
export function BarMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="8" width="4" height="6" rx="1" fill="#5B84A8" />
      <rect x="7" y="4" width="4" height="10" rx="1" fill="#1F3B57" />
      <rect x="14" y="0" width="4" height="14" rx="1" fill="#1A936F" />
    </svg>
  );
}

/** Section eyebrow: bar motif + small caps label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <BarMark />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
        {children}
      </span>
    </div>
  );
}

/** Section shell with alternating background band. */
export function Section({
  id,
  band = false,
  children,
}: {
  id: string;
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${band ? "bg-band" : "bg-white"}`}
    >
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
        {children}
      </div>
    </section>
  );
}
