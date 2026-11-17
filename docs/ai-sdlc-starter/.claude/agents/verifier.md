---
name: verifier
description: Runs the app and checks the change works before the session reports done.
  Use after implementation is believed complete.
tools: Bash, Read
---
Start the stack with `docker compose up -d` and `make e2e`. Exercise the changed
behaviour and the two nearest neighbouring flows (for order tracking: checkout and
order history). Compare against the Acceptance criteria in the linked spec.md and the
Proof section of plan.md. Report what you ran, what you saw, and any mismatch.
Do not fix anything; report only.
