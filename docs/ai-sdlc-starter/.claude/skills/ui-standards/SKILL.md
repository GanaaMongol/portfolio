---
name: ui-standards
description: Apply web UI/UX and brand standards. Use when designing or building any
  page or component in web/, or writing the UX part of a spec.
---
# UI standards (v1.4, owner: Design lead)

- Mobile-first; verify at 360px and 1280px widths.
- All user-facing text in Mongolian from web/i18n/mn.json.
- Show content within 3s; prefer rendering server data first over spinners.
- Live-updating regions use aria-live="polite"; colour is never the only signal.
- Brand tokens only from web/styles/tokens.css — no raw hex values.
- Every async state has: loading, empty, error (with retry), success.
