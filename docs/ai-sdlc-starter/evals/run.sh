#!/bin/bash
# Runs each eval case in a clean worktree and applies its check script. Fails CI below threshold.
set -u; pass=0; total=0; THRESHOLD=${THRESHOLD:-90}
for c in evals/cases/*.json; do
  total=$((total+1)); id=$(jq -r .id "$c")
  git worktree add -q "/tmp/eval-$id" HEAD
  ( cd "/tmp/eval-$id" && claude -p "$(jq -r .prompt "$OLDPWD/$c")" \
      --allowedTools "Read,Grep,Glob,Edit,Write,Bash(make test),Bash(make gen)" \
      --output-format json > result.json )
  if bash "$(jq -r .check_script "$c")" "/tmp/eval-$id"; then pass=$((pass+1)); echo "PASS $id"; else echo "FAIL $id"; fi
  git worktree remove --force "/tmp/eval-$id"
done
rate=$((100*pass/total)); echo "pass_rate=${rate}% ($pass/$total)"
[ "$rate" -ge "$THRESHOLD" ]
