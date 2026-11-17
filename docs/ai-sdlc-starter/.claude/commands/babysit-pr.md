---
description: Drive an open PR to green — address review comments and failing checks
argument-hint: <PR number>
---
For PR #$ARGUMENTS: list unresolved review comments and failing checks (gh pr view,
gh pr checks). Address each one, run make test and make lint, push, and reply on each
thread with what changed. Repeat until checks are green and only code-owner approval
remains. Never approve or merge the PR yourself.
