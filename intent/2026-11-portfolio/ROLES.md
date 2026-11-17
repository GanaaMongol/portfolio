# Roles: Portfolio вэб
Approved by: Owner, 2026-11-17. Based on docs/ai-sdlc-starter/INSTRUCT.md, adapted to a one-person project.

- **Бичнэ**: тухайн зүйлийг бичиж, шинэчилж байх хүн.
- **Батална**: дараагийн шат руу шилжихийг зөвшөөрөх хүн. Батлагдаагүй бол дараагийн шат эхлэхгүй.

## Үүрэг

| Үүрэг | Хэн | Энэ төсөлд |
|---|---|---|
| Product Owner | Owner | intent, spec батлах; агуулга, хувийн мэдээллийн шийдвэр (C-1) |
| Tech Lead | Owner | plan хүлээн авах; hosting (C-3), CLAUDE.md, REVIEW.md батлах |
| Release Manager | Owner | Нийтэд байршуулахыг зөвшөөрөх |
| Designer / Security owner | Owner (Claude санал гаргана) | Загвар; нийтэд ил байх мэдээлэл |
| PM/BA, Developer, QA | Claude | intent/spec/plan ноорог, код, тест, `make` шалгалт |
| Reviewer | Claude → Owner | REVIEW.md-ийн 3 pass; Owner эцэслэн батална |

## Шат ба хаалт (gate)

| Шат | Файл | Бичнэ | Батална | Хаалт |
|---|---|---|---|---|
| 1 Plan | `intent.md` | Claude (owner-ийн үгээр) | **Owner (PO)** | `Status: accepted` + commit |
| 2 Design | `spec.md` | Claude | **Owner (PO)** | Бүх C-* RESOLVED эсвэл plan-д эрсдэл болгон тусгасан |
| 3 Build | `plan.md`, код | Claude | **Owner (Tech Lead)** | `Accepted by:` бөглөгдсөн байж код эхэлнэ |
| 4 Test | `make build test lint` | Claude | Claude гаралтыг үзүүлнэ | Бүгд ногоон |
| 5 Deploy | REVIEW.md, `make check-content` | Claude | **Owner (Release Manager)** | Review батлагдсан + check-content ногоон + owner-ийн тодорхой зөвшөөрөл |
| 6 Maintain | — | — | — | Хамрах хүрээнээс гадуур |

## Дүрэм
- Шат бүр нэг commit-оор дуусна; commit message-д батлагдсан шатыг бичнэ.
- Хэрэгжүүлэлт plan.md-ээс зөрвөл plan.md-ийг тэр commit-д шинэчилж, owner-т мэдэгдэнэ.
- `git push` болон байршуулалт нь нийтэд гаргах үйлдэл — owner-ийн тухайн удаагийн зөвшөөрөлтэй.
