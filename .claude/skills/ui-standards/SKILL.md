---
name: ui-standards
description: Apply the portfolio's UI/visual standards. Use when designing or building any page, section, or component in src/, or when writing the design part of a spec.
---
# UI standards (v1.0, owner: Owner as Designer — approved 2026-11-17)

Reference look: the Blink "Hika Deme" portfolio (see spec.md §3). Copy the style and layout only —
never its text, images, logo, or other assets.

## How this combines with the other installed skills
- This file is the project brief. impeccable says "the brief wins": honor this palette, type, and layout
  over impeccable's own taste. Use impeccable for `critique`, `audit`, and `polish` passes (mode: Experience).
- make-interfaces-feel-better: apply its details (concentric radius, optical alignment, shadows vs borders,
  tabular numbers, interruptible transitions) on every component.
- gsap-react / gsap-scrolltrigger / gsap-performance: the only animation tooling. Progressive enhancement:
  content fully visible without JS; all motion off under prefers-reduced-motion; transform/opacity only.

## Palette (monochrome zinc, light only)
- Tokens only, defined in src/app/globals.css — no raw hex in components.
- background #ffffff, foreground #09090b, muted #71717a, border #e4e4e7, secondary #f4f4f5.
- No accent colour: the black pill button is the only emphasis. Alternate sections use secondary/30 + subtle grain.
- Single exception (owner, 2026-11-17): the hero Glyph Rain is green with Japanese katakana glyphs. Green stays
  confined to that decorative layer — never use it for text, buttons, or other UI.

## Typography
- Geist for text, Geist Mono for logo, small labels, dates, tags, and section eyebrows (uppercase, tracked).
- Headings bold with tight tracking (h1 ≈ -0.05em, h2 ≈ -0.05em). Hero h1 two lines, second line muted.
- Body copy muted, relaxed line height. Must render Cyrillic — verify on the mn page.

## Components
- Buttons: rounded-full pills. Primary = black bg, white text, arrow icon. Secondary = white bg, 1px border.
- Cards: rounded-xl, 1px border, soft shadow, no heavy colour. Tags: small mono chips on secondary bg.
- Timeline: thin vertical line with small dots; mono date above the role.
- Icons: thin outline icons (inline SVG); every icon-only link has an accessible label.

## Layout & accessibility
- Mobile-first; verify at 360px and 1280px. Container max-w-6xl, generous section padding (py-24).
- All user-facing text from src/content/site.ts — no hard-coded strings.
- Semantic headings in order, visible focus ring, colour is never the only signal.
- Client JS only for GSAP motion (spec C-7), isolated in small "use client" components.
