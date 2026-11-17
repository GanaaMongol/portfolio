.PHONY: build test lint e2e gen
build:
	cd api && go build ./... && cd ../web && npm run build && echo "BUILD OK"
test:
	cd api && go test ./... && cd ../web && npm test -- --run
lint:
	cd api && golangci-lint run && cd ../web && npm run lint
e2e:
	cd web && npx playwright test
gen:
	cd api && sqlc generate
