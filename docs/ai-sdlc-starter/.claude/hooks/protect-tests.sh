#!/bin/bash
# Stage 4 guardrail: during a bug fix (FIX_MODE=1) the agent may not weaken tests.
[ "$FIX_MODE" != "1" ] && exit 0
f=$(jq -r '.tool_input.file_path // empty' < /dev/stdin)
if [[ "$f" == *_test.go || "$f" == *.spec.ts || "$f" == *.test.ts* ]]; then
  echo "FIX_MODE: test files are frozen. Make the existing failing test pass by fixing the code." >&2
  exit 2
fi
exit 0
