# Plan: Захиалгын статус хянах (from spec.md 2026-10-07)
Accepted by: Э. Тэмүүлэн (engineer), reviewed by Tech Lead (C-3 эрсдэлийн улмаас)

## Өөрчлөгдөх файлууд
api/internal/order/status_handler.go        (new)
api/internal/order/status_stream.go         (new, SSE + LISTEN/NOTIFY)
api/internal/order/status_handler_test.go   (new)
api/migrations/0042_order_status_events.sql (new)
web/app/orders/[id]/track/page.tsx          (new)
web/components/OrderTracker.tsx             (new)
web/e2e/order-tracking.spec.ts              (new)

## Ажлын дараалал
1. Migration + repository (append-only insert, latest-by-order query).
2. GET /status endpoint, auth шалгалт, contract тест (AC-2, AC-3).
3. SSE stream, LISTEN/NOTIFY, heartbeat 15 сек.
4. OrderTracker: REST-ээр эхлэх → SSE → polling fallback.
5. e2e тест (Playwright) 4 шат + CANCELLED.

## Эрсдэл
- C-3: RDS failover үед LISTEN холболт тасарна → 5 сек backoff-оор дахин холбох, тест бичнэ.
- 3,000 SSE холболт → Go-д goroutine/холболт, ALB idle timeout-ийг 120 сек болгох (infra PR тусдаа).

## Нотолгоо (Proof)
make test-api, make test-web, make e2e бүгд ногоон.
Screenshot нь Claude Design-ийн батлагдсан mock-той таарна.
