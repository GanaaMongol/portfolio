# Plan v2: Portfolio вэб (from spec.md, approved 2026-11-17)
Accepted by: Owner (Tech Lead), 2026-11-17
Skills: ui-standards (brief), make-interfaces-feel-better, gsap-react/scrolltrigger/performance, impeccable (critique/audit/polish, hook-гүй)

## Түүх
v1 (2026-11-17) — анхны цэнхэр accent загвар; батлагдахаас өмнө хэрэгжсэн (ca60670, ROLES.md-ийн хаалтыг зөрчсөн).
v2 — энэ plan: батлагдсан spec-ийн лавлах загвар, Glyph Rain, GSAP, C-1..C-8 шийдвэрүүд. v1-ийн кодыг дахин ашиглана.

## Өөрчлөгдөх файлууд
package.json                                (+ gsap, @gsap/react — C-7)
src/app/globals.css                         (zinc token, grain, dark mode хасах — ui-standards)
src/components/RootHtml.tsx                 (Geist + Geist Mono: latin, cyrillic, cyrillic-ext)
src/content/site.ts                         (contact C-1; C-4 дэлгэрэнгүй хасах; hero eyebrow; Stack карт текст;
                                             glyph charset; footer tagline; утас хасах)
src/content/site.test.ts                    (contact-д утас байхгүй, href бүр https — шинэ тест)
src/components/Portfolio.tsx                (лавлах бүтэц: header icons, hero, Featured Work 3 багана,
                                             Experience + Stack 2 багана, Services, Credentials, Contact, Footer)
src/components/icons.tsx                    (new — GitHub/LinkedIn/Mail/Arrow outline SVG, aria-label)
src/components/HeroRain.tsx                 (new — "use client", GlyphRain-ийг zinc/dim:0/бага density-тай ороох)
src/components/Reveal.tsx                   (new — "use client", useGSAP scroll reveal; reduced-motion-д унтарна)
src/vendor/canvas-ui/GlyphRain.tsx          (vendored, DavidHDev/canvas-ui@a0be3b7, лицензийн header-тэй)
src/vendor/canvas-ui/GlyphRainVanilla.ts    (vendored)
src/vendor/canvas-ui/canvas-viewport.ts     (vendored)
src/vendor/canvas-ui/html-in-canvas.ts      (vendored)
src/vendor/canvas-ui/LICENSE.md             (MIT + Commons Clause)
CLAUDE.md                                   (token нэрс, client JS дүрэм, vendor/ засахгүй)
eslint.config.mjs                           (src/vendor/** ignore)

## Ажлын дараалал
1. Token + фонт: zinc палитр, Geist/Geist Mono (кирилл шалгах), dark mode хасах.
2. Агуулга: C-1 contact, C-4 аюулгүй байдлын дэлгэрэнгүйг хасах, шинэ талбарууд (mn/en ижил бүтэц) → тест.
3. Layout: Portfolio.tsx-ийг лавлах бүтцээр дахин зохион байгуулах (Server Component хэвээр).
4. Vendor Glyph Rain (temp clone-оос, өөрчлөхгүй) → HeroRain wrapper: zinc өнгө, `dim: 0`, бага density,
   charset кирилл + `{}<>/;=`, гарчиг дээр контраст хадгалах.
5. GSAP Reveal: hero entrance + хэсгүүдийн scroll reveal. JS-гүй үед агуулга харагдах (анхдагч төлөв visible,
   JS ачаалсны дараа л from-анимэйшн), reduced-motion-д огт ажиллахгүй.
6. make-interfaces-feel-better шалгалт (radius, shadow, tabular-nums, hit area).
7. `make build test lint` → 360/1280px screenshot лавлахтай харьцуулах → impeccable `audit` + `critique` (гараар).
8. Owner review (Stage 5).

## Эрсдэл
- Glyph Rain overlay нь hero текст дээр зурагдана → контраст муудах: бүдэг өнгө, бага density; AC-6-аар шалгана.
- Static export + "use client": зөвхөн жижиг client компонентууд; бусад нь server-ээр HTML болж гарна (NFR-1).
- GSAP-ийн from() анимэйшн JS ачаалахаас өмнө агуулгыг нууж магадгүй (FOUC) → анхдагч CSS-д нуухгүй.
- WebGL2-гүй/хуучин төхөөрөмж: GlyphRain null буцаана → hero хэвийн харагдана.
- Vendored код шинэчлэгдэхгүй — commit hash-ийг header-д тэмдэглэнэ.

## Нотолгоо (Proof)
make build, make test, make lint ногоон; 360px/1280px screenshot (mn, en); reduced-motion эмуляцтай screenshot;
impeccable audit-ийн P0/P1 олдворгүй.
