#!/bin/bash
# $1 = worktree path
cd "$1" || exit 1
make test >/dev/null 2>&1 || exit 1
grep -rq 'customer_id' api/internal/order/*receipt*.go || exit 1
grep -rqE 'StatusNotFound|404' api/internal/order/*receipt*_test.go || exit 1
! grep -rqE 'courier_(phone|name)' api/internal/order/*receipt*.go
