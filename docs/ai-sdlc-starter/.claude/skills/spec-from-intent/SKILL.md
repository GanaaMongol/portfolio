---
name: spec-from-intent
description: Produce spec.md (requirements + design) from an accepted intent.md. Use
  whenever asked to write a spec, requirements, or design for an intent folder.
---
# Spec from intent

Inputs: intent/<folder>/intent.md (Status must be accepted) and the current codebase.

Produce intent/<folder>/spec.md with these sections, in order:
1. Functional requirements (FR-n), each traceable to the intent's Proposed outcome.
2. Non-functional requirements (NFR-n): performance, security, accessibility.
3. Design: API contracts, data flow, components touched — integrate with what exists.
4. Data model changes.
5. Flagged concerns (C-n): tag each [security] [ux] [ops] [legal]; name a policy owner;
   say explicitly where two policies contradict. Mark OPEN until a human resolves it.
6. Acceptance criteria (AC-n) that a test can prove.

Apply the secure-api and ui-standards skills while writing. Answer the intent's open
questions or carry them forward explicitly. Record the skill versions used in the header.
Never mark the spec approved — only the product owner does that.
