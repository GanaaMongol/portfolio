#!/bin/bash
# Fast, file-scoped formatting after each edit (heavier checks belong in CI).
f=$(jq -r '.tool_input.file_path // empty' < /dev/stdin)
case "$f" in
  *.go)              gofmt -w "$f" ;;
  *.ts|*.tsx|*.json) (cd "$CLAUDE_PROJECT_DIR/web" && npx prettier --write "$f" >/dev/null 2>&1) ;;
esac
exit 0
