#!/bin/bash
# Stage 3 guardrail: block edits to generated code, secrets, and unticketed migrations.
f=$(jq -r '.tool_input.file_path // empty' < /dev/stdin)
case "$f" in
  *api/internal/gen/*) echo "Generated code. Edit api/queries/*.sql and run 'make gen'." >&2; exit 2 ;;
  *.env*|*secrets/*)   echo "Secrets files are off-limits to the agent." >&2; exit 2 ;;
  *api/migrations/*)
    if [ -z "$CHANGE_TICKET" ]; then
      echo "Migrations need a change ticket: set CHANGE_TICKET=<id> and restart the session." >&2; exit 2
    fi ;;
esac
exit 0
