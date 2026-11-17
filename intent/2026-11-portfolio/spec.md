# Spec: Бизнесийн хамтрагчдад зориулсан portfolio вэб
From: intent.md (2026-11-17). Status: draft — awaiting owner approval
Skills applied: ui-standards (docs/ai-sdlc-starter, portfolio-д тохируулсан)

## 1. Функциональ шаардлага
FR-1  Нэг хуудастай сайт: Hero, Тухай (тоон үзүүлэлттэй), Үйлчилгээ, Төслүүд, Туршлага,
      Ур чадвар, Боловсрол/Шагнал, Холбоо барих. Агуулгын эх сурвалж: `docs/cv/CV-merged.md`.
      Нийтэд нээлттэй төсөл (`href`)-ийг холбоосоор харуулна. (2026-11-17, CV-ээс нэмсэн)
FR-2  Монгол (`/`) ба англи (`/en`) хувилбартай; толгой хэсгээс хэл солино.
FR-3  Бүх агуулга `src/content/site.ts` нэг файлд; хоёр хэл ижил бүтэцтэй.
FR-4  Холбоо барих: `mailto:`, `tel:`, гадаад холбоосууд (LinkedIn гэх мэт) шууд товшигдоно.
FR-5  Цэс (nav) хэсэг рүү үсэрнэ; утсан дээр ч ажиллана.

## 2. Функциональ бус шаардлага
NFR-1 Static export (`out/`) — ямар ч static host дээр ажиллана, JS-гүйгээр агуулга харагдана.
NFR-2 Mobile-first; 360px болон 1280px өргөнд шалгана.
NFR-3 WCAG 2.1 AA: semantic heading, `lang` attribute, focus харагдана, өнгө цорын ганц дохио биш.
NFR-4 Өнгө, фонтыг `globals.css`-ийн token-уудаас л авна (raw hex компонентод байхгүй).
NFR-5 SEO/share: хуудас бүр title, description, Open Graph, `hreflang` alternate-тай.

## 3. Дизайн
- Next.js 16 App Router, `output: 'export'`, Tailwind CSS 4.
- Route: `src/app/page.tsx` (mn), `src/app/en/page.tsx` (en) — хоёулаа `<Portfolio lang>` server компонент.
- Компонентууд Server Components; client JS шаардлагагүй.
- Загвар: цэвэр, мэргэжлийн, цайвар/бараан горим (`prefers-color-scheme`).

## 4. Өгөгдлийн загвар
`site: Record<"mn" | "en", SiteContent>` — `SiteContent` TypeScript type нь хоёр хэлийг ижил бүтэцтэй байлгана.
Хэлнээс хамаарахгүй өгөгдөл (имэйл, утас, холбоос) `contact` дотор нэг удаа.

## 5. Санаа зовоосон хэсгүүд (Flagged concerns)
C-1 [privacy] Утас, имэйлийг нийтэд байршуулбал spam-д өртөнө.
    → Owner Q-3-т хариулах хүртэл placeholder. OPEN
C-2 [content] Бодит агуулгагүйгээр хамтрагчид илгээж болохгүй.
    → Deploy-оос өмнө placeholder үлдээгүй эсэхийг тест шалгана (`content.test.ts`). RESOLVED
C-3 [ops] Hosting сонголт (Q-4) — owner-ийн бүртгэл шаардана. OPEN

## 6. Хүлээн авах шалгуур
AC-1 `make build` нь `out/index.html`, `out/en/index.html`-ийг үүсгэнэ.
AC-2 mn/en агуулга ижил тооны үйлчилгээ, төсөл, туршлагатай (unit тест).
AC-3 `make lint` 0 warning.
AC-4 `make check-content` нь placeholder (`TODO`) үлдсэн бол унана — deploy-ийн өмнө ногоон байх ёстой.
