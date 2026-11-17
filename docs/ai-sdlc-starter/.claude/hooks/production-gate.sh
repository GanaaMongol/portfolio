#!/bin/bash
# Stage 5 approval gate: production deploys need a named release authorization.
cmd=$(jq -r '.tool_input.command // empty' < /dev/stdin)
if [[ "$cmd" == *deploy* && "$cmd" == *prod* ]]; then
  if [ -z "$RELEASE_APPROVAL" ]; then
    echo "Production deploy blocked. Ask the release manager to approve in #releases and set RELEASE_APPROVAL=<approval-id>." >&2
    exit 2
  fi
fi
exit 0
