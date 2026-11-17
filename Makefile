.PHONY: build test lint check-content dev preview
build:
	npm run build && test -f out/index.html && test -f out/en/index.html && echo "BUILD OK"
test:
	npx vitest run
lint:
	npx eslint --max-warnings 0 . && npx tsc --noEmit
check-content:
	CHECK_CONTENT=1 npx vitest run
dev:
	npm run dev
preview: build
	npx --yes serve out
