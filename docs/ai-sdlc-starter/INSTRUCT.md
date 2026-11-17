# INSTRUCT: Хавтас бүрийн үүрэг ба хариуцагч

Энэ repo-гийн хавтас, файл бүр SDLC-ийн аль шатанд хамаарах, хэн бичиж хэн батлахыг тодорхойлно.

- **Бичнэ**: тухайн зүйлийг бичиж, шинэчилж байх хүн.
- **Батална**: merge эсвэл approve хийх эрхтэй хүн.

PO, Tech Lead, Release Manager, On-call, бодлогын эзэд гэсэн үүргүүдийг [README.md](README.md)-ээс авсан.
PM, QA, Designer, Platform admin гэсэн үүргүүд нь жишээ багийн бүтэц тул өөрийн байгууллагад тааруулна уу.

## 1. Plan: юу хийх вэ

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `intent/TEMPLATE.md` | Асуудлыг ижил бүтцээр бичих загвар | PM | PO |
| `.claude/skills/intent-writer/` | Ярианаас intent.md гаргах skill | PM + Tech Lead | PO |
| `intent/<date>-<slug>/intent.md` | Асуудал, хүссэн үр дүн, амжилтын шалгуур | Асуудлыг мэдэрч буй хүн (call center, BA, бизнес). Claude туслана | **PO** (merge) |

## 2. Design: яаж хийх вэ

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `intent/.../spec.md` | FR/NFR, API ба UX дизайн, санаа зовоосон асуудлууд (C-1..C-3) | **Claude** автоматаар, BA засна | **PO**. Техникийн асуултыг Tech Lead шийднэ |
| `.claude/skills/secure-api/` | API-ийн аюулгүй байдлын стандарт | Security engineer | **Security owner / CISO** |
| `.claude/skills/ui-standards/` | UI/UX, брэндийн стандарт | UI/UX Designer | **Design lead / Brand owner** |
| `.claude/skills/spec-from-intent/`, `.claude/commands/spec-from-intent.md` | Spec бичих арга | Tech Lead | Tech Lead |
| `.github/workflows/intent-to-spec.yml` | intent merge хийгдэхэд spec PR автоматаар нээх | DevOps | Tech Lead |

## 3. Build: код бичих

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `intent/.../plan.md` | Өөрчлөх файлууд, дараалал, эрсдэл | **Developer** + Claude (plan mode) | **Developer** (accept), том өөрчлөлтийг Tech Lead |
| `api/`, `web/` | Аппын код | Backend / Frontend Developer + Claude | Code owner |
| `CLAUDE.md` | Төслийн дүрэм, командууд (Claude болон шинэ ажилтанд) | Бүх developer нэмж бичнэ | **Tech Lead** |
| `.claude/commands/plan.md` | `/plan` command | Tech Lead | Tech Lead |
| `.claude/hooks/protect-paths.sh`, `format-after-edit.sh` | Generated код, secret, migration-ийг хамгаалах | DevOps / Tech Lead | Tech Lead |
| `.claude/agents/` | `verifier`, `code-simplifier` subagent-ууд | Tech Lead | Tech Lead |

## 4. Test: шалгах

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `Makefile` | build/test/lint-ийг нэг командаар ажиллуулах | DevOps / Tech Lead | Tech Lead |
| `.claude/commands/fix-bug.md`, `.claude/hooks/protect-tests.sh` | Эхлээд тест бичих, тест сулруулахыг хориглох | QA lead + Tech Lead | Tech Lead |
| `evals/` | Агент буруу зүйл давтахгүй эсэхийг шалгах тест (IDOR, gen засвар гэх мэт) | **QA** + Developer (incident бүрийн дараа кейс нэмнэ) | Tech Lead |
| `.github/workflows/agent-evals.yml` | Eval-ийг CI-д ажиллуулах | DevOps | Tech Lead |

## 5. Deploy: гаргах

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `REVIEW.md` | AI review-ийн 3 шат: Bugs, Security, Compliance | Tech Lead + Security | Tech Lead |
| `.github/workflows/claude-review.yml` | PR бүрийг Claude review хийх | DevOps | Tech Lead |
| `.claude/commands/babysit-pr.md` | PR-ийг ногоон болтол хөтлөх | Developer ашиглана | – |
| `.github/workflows/ci.yml` | CI, унасан build-ийг Claude триаж хийх | DevOps | Tech Lead |
| `.claude/hooks/production-gate.sh` | Зөвшөөрөлгүй prod deploy-г хаах | DevOps | **Release Manager** (`RELEASE_APPROVAL` өгнө) |
| `.claude/settings.json` | Багийн зөвшөөрөл, hook-ууд | Tech Lead | Tech Lead |
| `managed-settings.example.json` | Байгууллагын түвшний, хэн ч override хийж чадахгүй тохиргоо | **IT / Platform admin** | **CISO / IT Security** |

## 6. Maintain: ажиллуулах

| Хавтас / файл | Үүрэг | Бичнэ | Батална |
|---|---|---|---|
| `monitoring/bands.yaml`, `monitoring/detect.py` | Метрикийн хэвийн хязгаар. 1σ-д log, 2σ-д оношлох, 3σ-д PR санал болгох | **SRE / DevOps** | Tech Lead |
| `.github/workflows/band-watch.yml` | Хязгаар давахад Claude-аар оношлуулж, шинэ intent PR нээх | SRE | Tech Lead |
| `incidents/LESSONS.md` | Incident-ийн сургамж | **On-call engineer** (postmortem) | Tech Lead |
| Alert-аас үүссэн intent PR | Шинэ асуудал | Claude | **On-call** триаж хийж, PO-д дамжуулна |

## Үүрэг тус бүрээр

- **Product Owner:** intent болон spec-ийг батална, бизнесийн санаа зовоосон асуудлыг шийднэ.
- **PM / BA:** intent template-ийг хариуцна, оролцогч талуудаас асуудлыг цуглуулна.
- **Tech Lead:** CLAUDE.md, settings, hook, REVIEW.md, техникийн шийдвэр. Хамгийн олон файлын эзэн.
- **Developer:** plan.md, код, тест, eval кейс.
- **UI/UX Designer:** `ui-standards` skill.
- **Security owner:** `secure-api` skill, REVIEW.md-ийн Security шат, managed settings.
- **QA:** eval suite, тестийн стратеги.
- **DevOps / SRE:** Makefile, workflow-ууд, monitoring.
- **Release Manager:** prod deploy-г зөвшөөрнө.
- **On-call:** alert-ийг триаж хийнэ, LESSONS.md бичнэ.
- **IT / Platform admin:** managed settings-ийг байгууллагын хэмжээнд түгээнэ.
- **Claude:** spec, plan, код, review, оношилгоо зэргийн ноорог гаргана. Шат бүрийн эцсийн шийдвэрийг хүн гаргана.
