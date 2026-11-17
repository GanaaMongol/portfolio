# Lessons (read by Claude at the start of incident investigations)

## INC-2026-031 — Захиалгын баримтыг өөр хэрэглэгч харах боломжтой байсан (IDOR)
- Шалтгаан: handler order_id-аар л хайсан, customer_id шалгаагүй.
- Засвар: PR #412. secure-api skill-д 2-р дүрэм (404, not 403) нэмсэн.
- Eval: evals/cases/order-status-idor.json
- Сургамж: шинэ endpoint бүр contract тесттэй байх ёстой — REVIEW.md Security pass-д оруулсан.
