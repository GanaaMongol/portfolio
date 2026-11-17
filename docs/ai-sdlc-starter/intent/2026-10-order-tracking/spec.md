# Spec: Захиалгын статусыг бодит цагаар хянах
From: intent.md (2026-10-06). Status: approved by Product Owner 2026-10-07
Skills applied: spec-from-intent@1.2, secure-api@2.0, ui-standards@1.4

## 1. Функциональ шаардлага
FR-1  Нэвтэрсэн хэрэглэгч өөрийн захиалгын статусыг /orders/{id}/track хуудаснаас харна.
FR-2  Статус 4 шаттай: RECEIVED, PREPARING, OUT_FOR_DELIVERY, DELIVERED (+ CANCELLED).
FR-3  Статус өөрчлөгдөхөд хуудас 5 секундын дотор шинэчлэгдэнэ (refresh хийхгүй).
FR-4  ETA (тооцоолсон хүргэх хугацаа)-г минутаар харуулна.
FR-5  Зочин захиалагч SMS-ээр ирсэн нэг удаагийн token-той холбоосоор харна.
      (intent-ийн нээлттэй асуултад хариулсан — PO баталсан)

## 2. Функциональ бус шаардлага
NFR-1 3,000 зэрэг холболт, p95 latency < 300ms (REST), SSE reconnect автоматаар.
NFR-2 Хувийн мэдээлэл (хүргэгчийн нэр/утас) API хариунд огт орохгүй.
NFR-3 WCAG 2.1 AA: статусын өөрчлөлтийг aria-live-ээр зарлана.

## 3. Дизайн
- API: GET /v1/orders/{id}/status (JSON), GET /v1/orders/{id}/status/stream (SSE).
- order-api нь `order_status_events` хүснэгтэд PostgreSQL LISTEN/NOTIFY ашиглан SSE рүү түгээнэ.
- Web: `OrderTracker` компонент; SSE тасарвал 10 секунд тутам polling руу шилжинэ.
- Эрх: JWT-ийн `sub` = order.customer_id, эсвэл зочны token (15 мин хүчинтэй, нэг захиалгад).

## 4. Өгөгдлийн загвар
order_status_events(id, order_id, status, eta_minutes, created_at) — append-only.

## 5. Санаа зовоосон хэсгүүд (Flagged concerns)
C-1 [security] Зочны token URL-д байгаа тул log, Referer-ээр алдагдах эрсдэл.
    → Шийдэл: token-ийг эхний ачааллаар httpOnly cookie руу солих. Owner: Security lead. RESOLVED
C-2 [ux] ui-standards нь "loading spinner 3 сек-ээс илүүгүй" гэдэг, SSE эхний холболт удааж болзошгүй.
    → Шийдэл: эхлээд REST-ээр статус авч зурна, дараа нь SSE холбоно. RESOLVED
C-3 [ops] LISTEN/NOTIFY нь RDS-ийн нэг instance-д холбогдоно; multi-AZ failover-т reconnect шаардлагатай.
    → Tech lead-д шилжүүлсэн. OPEN (plan-д эрсдэл болгон тусгах)

## 6. Хүлээн авах шалгуур
AC-1 Статус бүрийн шилжилтийг e2e тест баталгаажуулна.
AC-2 Өөр хэрэглэгчийн захиалгыг харах оролдлого 404 буцаана (403 биш — байгааг нь ч мэдэгдэхгүй).
AC-3 Хариунд `courier_phone`, `courier_name` талбар байхгүй (contract тест).
