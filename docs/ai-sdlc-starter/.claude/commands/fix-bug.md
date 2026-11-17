---
description: Test-first bug fix
argument-hint: <bug description or ticket ID>
---
Bug: $ARGUMENTS
1. Reproduce it as a failing test. Run it and confirm it fails for the expected reason.
2. Stop and show me the test. After I confirm, commit it on its own.
3. Restart with FIX_MODE=1 (test files become read-only) and make the test pass by
   changing code only. Paste make test output.
