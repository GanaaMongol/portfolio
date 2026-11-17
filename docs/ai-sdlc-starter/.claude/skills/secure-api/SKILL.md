---
name: secure-api
description: Apply the API security standard. Use whenever creating or modifying an
  endpoint in api/, reviewing API code, or writing an API design in a spec.
---
# Secure API standard (v2.0, owner: Security lead)

1. AuthN: every route except /health goes through the Cognito JWT middleware.
2. AuthZ: load resources scoped to the caller (WHERE customer_id = $sub). If not owned,
   return 404, never 403 — do not reveal existence.
3. Input: validate path/query/body; reject unknown JSON fields.
4. PII: courier name/phone, customer phone/address never in logs, errors, or responses
   to other parties. Use the redact() helper in logs.
5. Audit: state-changing endpoints emit an audit event (actor, action, entity, time).
6. Rate limit: public endpoints sit behind the gateway rate limit; streaming endpoints
   cap connections per user (default 3).
Every new endpoint ships with a contract test proving 1, 2 and 4.
