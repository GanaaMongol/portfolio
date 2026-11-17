# AI-native SDLC Starter — Web development жишээ

Anthropic-ийн "AI-native SDLC playbook"-ийг бодит web төсөл дээр буулгасан эхлэл repo.
Жишээ төсөл: **food-delivery-web** (Next.js + Go + PostgreSQL + AWS + GitHub Actions),
жишээ feature: **"Захиалгын статусыг бодит цагаар хянах"**.

## Артефактын гинж (audit trail)

```
intent.md ──(PO merge)──▶ spec.md ──(PO approve)──▶ plan.md ──(engineer accept)──▶ code + tests
    ▲                                                                                   │
    │                                                                              PR + REVIEW
    │                                                                                   │
 alert / scan / Slack ◀──(band breach)── production ◀──(release manager gate)── CI/CD ◀─┘
```

Шат бүр нэг файлыг git-д commit хийж дуусна, дараагийн шат түүнийг уншиж эхэлнэ.

## Файлын бүтэц ба аль шатанд хамаарах

| Шат | Файл | Үүрэг |
|---|---|---|
| 1 Plan | `intent/TEMPLATE.md` | Байгууллагын intent template |
| 1 Plan | `.claude/skills/intent-writer/` | Brainstorm → intent.md болгох skill |
| 1 Plan | `intent/2026-10-order-tracking/intent.md` | **Жишээ**: call center ачааллын асуудал |
| 2 Design | `.claude/skills/spec-from-intent/`, `secure-api/`, `ui-standards/` | Spec бичих үед хэрэгжих бодлогууд |
| 2 Design | `.claude/commands/spec-from-intent.md` | `/spec-from-intent <folder>` slash command |
| 2 Design | `.github/workflows/intent-to-spec.yml` | intent merge → spec PR автоматаар |
| 2 Design | `intent/.../spec.md` | **Жишээ**: FR/NFR, SSE дизайн, flagged concerns C-1..C-3 |
| 3 Build | `CLAUDE.md` | Шинэ ажилтанд хэрэгтэй мэдлэг, командууд |
| 3 Build | `.claude/commands/plan.md` | Plan mode-д ажиллуулах |
| 3 Build | `intent/.../plan.md` | **Жишээ**: файлууд, дараалал, эрсдэл, нотолгоо |
| 3 Build | `.claude/hooks/protect-paths.sh`, `format-after-edit.sh` | Generated код, secret, migration хамгаалалт |
| 3 Build | `.claude/agents/verifier.md`, `code-simplifier.md` | Subagent-ууд |
| 4 Test | `Makefile`, `CLAUDE.md` "Verifying" хэсэг | Нэг командтай feedback loop |
| 4 Test | `.claude/commands/fix-bug.md`, `hooks/protect-tests.sh` | Test-first bug fix, тест сулруулахыг хориглох |
| 4 Test | `evals/`, `.github/workflows/agent-evals.yml` | Агентын тохиргооны regression тест |
| 5 Deploy | `REVIEW.md`, `.github/workflows/claude-review.yml` | 3 pass AI review + @claude fix loop |
| 5 Deploy | `.claude/commands/babysit-pr.md` | PR-ыг ногоон болтол хөтлөх |
| 5 Deploy | `.claude/hooks/production-gate.sh` | Release manager-ийн зөвшөөрөлгүй prod deploy хориглох |
| 5 Deploy | `.claude/settings.json`, `managed-settings.example.json` | Багийн болон байгууллагын (override хийх боломжгүй) тохиргоо |
| 5 Deploy | `.github/workflows/ci.yml` | CI + унасан build-ийг Claude triage хийх |
| 6 Maintain | `monitoring/bands.yaml`, `detect.py`, `band-watch.yml` | Детерминист detection → Claude → alert intent |
| 6 Maintain | `incidents/LESSONS.md` | Incident-ийн сургамж, дараагийн оношилгоонд уншигдана |

## Жишээ feature-ийн урсгал алхам алхмаар

1. **Plan.** Харилцагчийн үйлчилгээний ажилтан claude.ai дээр `intent-writer` skill-ээр
   асуудлаа ярина → `intent.md` гарна → GitHub connector-оор commit → PO merge хийнэ.
2. **Design.** Merge нь `intent-to-spec.yml`-ийг асаана → Claude `spec.md` бичиж PR нээнэ.
   PO эхлээд C-1..C-3 санаа зовоосон хэсгүүдийг бодлогын эзэдтэй шийднэ (C-3 нь tech lead руу).
3. **Build.** Инженер `claude --worktree order-tracking` → plan mode → `/plan intent/2026-10-order-tracking`.
   Эрсдэлийг байцааж, `plan.md` commit → auto-accept-ээр хэрэгжүүлнэ. Migration засах үед
   hook `CHANGE_TICKET` шаардана. Зэрэгцээ worktree-д frontend-ийг тусад нь хийж болно.
4. **Test.** Claude `make build test lint`-ийг өөрөө ажиллуулж, `verifier` subagent e2e-г шалгана.
5. **Deploy.** PR нээгдэхэд `claude-review.yml` REVIEW.md-ийн 3 pass-аар шалгана, `@claude`
   тэмдэглэгээгээр засвар хийлгэнэ, code owner батална. Prod deploy-д `production-gate.sh`
   release manager-ийн `RELEASE_APPROVAL`-ийг шаардана.
6. **Maintain.** SSE disconnect rate 3σ давбал `band-watch.yml` Claude-аар оношлуулж,
   шинэ `intent.md`-тэй PR нээнэ → on-call triage → давталт дахин эхэлнэ. Засвар гарвал
   `evals/cases/`-д шинэ кейс нэмнэ.

## Нэвтрүүлэх дараалал (playbook-ийн dependency-ийн дагуу)

| Долоо хоног | Хийх зүйл | Урьдчилсан нөхцөл |
|---|---|---|
| 1 | `CLAUDE.md`, `Makefile` (нэг командтай шалгалт) | Байхгүй |
| 1–2 | `intent/` хавтас + template, `intent-writer` skill | Байхгүй |
| 2 | `secure-api`, `ui-standards` skill (бодлогын эздээр батлуулах) | Байхгүй |
| 2–3 | Hook-ууд + `.claude/settings.json` | Байхгүй |
| 3 | `REVIEW.md` + `claude-review.yml`, branch protection | CLAUDE.md |
| 4 | `intent-to-spec.yml`, eval suite (20–50 кейс) | intent + skills, feedback loop |
| 5+ | `ci.yml` triage, prod gate, managed settings | Review loop + hooks |
| 6+ | `band-watch.yml` (эхлээд зөвхөн 1–2σ буюу log/diagnose) | Бүгд + rollback туршсан байх |

## Анхааруулга

- Энэ бол эхлэл загвар. Модель, CLI flag, action-ийн параметрүүдийг өөрийн хувилбартай
  тулгаж шалгана уу: code.claude.com/docs (hooks, settings, skills, github-actions).
- `managed-settings.example.json`-ийг хуулахгүй, repo-гийн өгөгдлийн ангилалд тааруулна.
- `ANTHROPIC_API_KEY`, `PROM_URL`-ийг GitHub Secrets-д хадгална. Bedrock ашиглах бол
  claude-code-action-ийн Bedrock тохиргоог хэрэглэнэ.
- Hook script-үүд `jq` шаардана.
