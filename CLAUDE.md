@AGENTS.md

# portfolio

Next.js 16 (App Router, static export → out/) + Tailwind CSS 4. Business-partner portfolio, mn (`/`) + en (`/en/`).
Process follows docs/ai-sdlc-starter (AI-native SDLC).

## Commands
- Build:   make build          (must end with "BUILD OK")
- Test:    make test           (vitest, all green)
- Lint:    make lint           (eslint zero warnings + tsc)
- Content: make check-content  (fails while any "TODO" placeholder remains — deploy gate)
- Preview: make preview        (serves out/ locally)

## Conventions
- All user-facing text lives in src/content/site.ts — no hard-coded strings in components.
- mn and en must have the same structure (enforced by src/content/site.test.ts).
- Colours only via tokens in src/app/globals.css (bg-background, bg-secondary, bg-primary, text-muted, border-border,
  shadow-card, …) — no raw hex in components. Light only, monochrome zinc (see .claude/skills/ui-standards).
- Server Components by default. Client JS only for motion: src/components/HeroRain.tsx (Glyph Rain) and
  src/components/Reveal.tsx (GSAP). No dynamic server functions (static export).
- src/vendor/canvas-ui/ is vendored third-party code (MIT + Commons Clause) — do not edit; re-vendor to update.
- UI work: follow ui-standards first (the brief), then make-interfaces-feel-better, gsap-*, impeccable craft-floor.
- Mobile-first; check 360px and 1280px.

## SDLC artifacts
- Work starts from intent/<date>-<slug>/intent.md → spec.md → plan.md.
- If implementation departs from plan.md, update plan.md in the same commit.

## Verifying your work
Run make build, make test, make lint before reporting done, and paste the output.
If a test fails, fix the code, not the test.

## Things Claude gets wrong
- Next.js 16 differs from training data — read node_modules/next/dist/docs/ first.
- Do not deploy without the owner's explicit approval and a green `make check-content`.
- Do not publish personal contact details the owner has not approved (spec C-1).
