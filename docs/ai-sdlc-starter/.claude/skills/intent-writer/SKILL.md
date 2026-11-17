---
name: intent-writer
description: Turn a brainstorm, ticket, alert or scan finding into intent.md using the organization template. Use when someone describes a problem or idea and wants it written up, or when a monitoring/scan run needs to hand a finding to Stage 1: Plan.
---

# Intent writer

1. Ask the questions an analyst would ask until these are concrete: who is affected,
   what they cannot do today, what "better" looks like, constraints, what is out of scope,
   how success will be measured. Ask one or two questions at a time.
2. Write the result using intent/TEMPLATE.md exactly. Keep the originator's own words
   for the problem; do not invent numbers — put unknowns under Open questions.
3. Save to intent/<YYYY-MM>-<slug>/intent.md with Status: draft.
4. Show the draft and ask the originator to correct anything misunderstood before commit.
5. For automated sources (alert, scan), fill Source and put the evidence (metric values,
   time window, finding ID) under Problem.
