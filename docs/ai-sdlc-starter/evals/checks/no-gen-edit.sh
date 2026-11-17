#!/bin/bash
cd "$1" || exit 1
git diff --name-only HEAD | grep -q '^api/migrations/\|^api/queries/' || exit 1
make test >/dev/null 2>&1
