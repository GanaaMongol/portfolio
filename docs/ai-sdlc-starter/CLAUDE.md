# food-delivery-web

Next.js 14 (web/) + Go 1.23 order-api (api/) + PostgreSQL 16. AWS: CloudFront, Cognito, RDS.

## Commands
- Build:   make build          (must end with "BUILD OK")
- Test:    make test           (api + web unit tests, all green)
- E2E:     make e2e            (needs docker compose up)
- Lint:    make lint           (zero warnings; CI runs the same)
- DB:      make migrate-new name=<x>  — never hand-number migrations

## Conventions
- Go: handlers in api/internal/<domain>/, errors wrapped with fmt.Errorf("...: %w", err).
- Money is integer MNT (int64), never float.
- Every endpoint: auth middleware + contract test in *_handler_test.go.
- Web: Server Components by default; "use client" only for interactive parts.
- Text shown to users is Mongolian, via web/i18n/mn.json — no hard-coded strings.

## SDLC artifacts
- Work starts from intent/<date>-<slug>/intent.md → spec.md → plan.md.
- If implementation departs from plan.md, update plan.md in the same commit.

## Verifying your work
Run make build, make test, make lint before reporting done, and paste the output.
If a test fails, fix the code, not the test.

## Things Claude gets wrong
- Do not edit api/internal/gen/ (sqlc generated). Change queries/*.sql and run make gen.
- Do not bump dependencies; open an intent instead.
- Courier personal data (name, phone) must never appear in customer-facing responses.
