"use client";

import { GlyphRain } from "@/vendor/canvas-ui/GlyphRain";

// Decorative background layer behind the hero text (spec FR-6, C-8). Text stays in the normal DOM on top,
// so it is always legible and accessible; the rain fades out towards the text column via a mask.
// The library handles prefers-reduced-motion and pauses offscreen; without WebGL2 it draws nothing.
export function HeroRain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent_45%,black_100%)] md:[mask-image:linear-gradient(to_right,transparent_15%,black_75%)]"
    >
      <GlyphRain
        className="h-full w-full"
        cell={16}
        // Blue rain, library-default Japanese katakana glyphs (spec C-8 change, 2026-11-17).
        color={[0.55, 0.68, 1]}
        headColor={[0.17, 0.42, 1]}
        speed={0.12}
        density={0.12}
        trail={0.8}
        glow={0.8}
        layers={2}
        dim={0}
        light={0}
        stir={0}
      >
        <div className="h-full w-full" />
      </GlyphRain>
    </div>
  );
}
