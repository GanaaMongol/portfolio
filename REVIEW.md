# Review instructions

## Passes (tag each finding with its pass)
- Bugs: broken links/anchors, layout breaks at 360px or 1280px, mn/en mismatch
- Security/Privacy: unapproved personal data, secrets, external links missing rel="noopener noreferrer"
- Compliance: change matches spec.md and plan.md of the linked intent folder;
  follows CLAUDE.md conventions (content only in site.ts, tokens only)

## Severity
Important = breaks behavior, leaks data, or breaches a policy. Everything else is a Nit.

## Cap the nits
Max 5 nits per review; summarize the rest as a count.

## Do not report
.next/**, out/**, docs/ai-sdlc-starter/**, anything `make lint` already enforces.

## Also flag
If the change makes CLAUDE.md or plan.md outdated.
