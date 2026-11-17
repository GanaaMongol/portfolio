# Review instructions

## Passes (tag each finding with its pass)
- Bugs: logic errors, edge cases, race conditions, unclosed SSE/DB connections
- Security: authz gaps (IDOR), injection, PII in logs or responses, secrets
- Compliance: change matches spec.md and plan.md of the linked intent folder;
  follows CLAUDE.md conventions

## Severity
Important = breaks behavior, leaks data, or breaches a policy. Everything else is a Nit.

## Cap the nits
Max 5 nits per review; summarize the rest as a count.

## Do not report
api/internal/gen/**, web/.next/**, anything `make lint` already enforces.

## Also flag
If the change makes CLAUDE.md or plan.md outdated.
