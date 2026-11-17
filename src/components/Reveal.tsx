"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Two authored motion moments only (craft floor: one moment, not an entrance on every section):
// - "hero": staggered entrance of [data-reveal] children on load. Pre-hidden by the `.js` CSS rule in
//   globals.css so there is no flash; that rule has a timed fallback and is off under reduced motion.
// - "cards": staggered rise of [data-reveal] children when scrolled into view. Without JS they simply show.
// Motion only runs under prefers-reduced-motion: no-preference (spec C-7).
export function Reveal({
  variant,
  className,
  children,
}: {
  variant: "hero" | "cards";
  className?: string;
  children: ReactNode;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (variant === "hero") {
          gsap.fromTo(
            "[data-reveal]",
            { opacity: 0, y: 24, filter: "blur(6px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "expo.out", stagger: 0.09, delay: 0.1, clearProps: "filter,transform" },
          );
        } else {
          gsap.from("[data-reveal]", {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.08,
            clearProps: "transform",
            scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
          });
        }
      });
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
