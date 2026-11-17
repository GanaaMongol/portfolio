# Spec: Бизнесийн хамтрагчдад зориулсан portfolio вэб
From: intent.md (2026-11-17). Status: approved by PO 2026-11-17
Skills applied: ui-standards@1.0 (төслийн brief), impeccable@4.9.2, make-interfaces-feel-better, gsap-* (`.claude/skills/`)
  impeccable: hook, engine binary-гүй (owner шийдвэр 2026-11-17) — critique/audit/polish гараар.

## 1. Функциональ шаардлага
FR-1  Нэг хуудастай сайт: Hero, Тухай (тоон үзүүлэлттэй), Үйлчилгээ, Төслүүд, Туршлага,
      Ур чадвар, Боловсрол/Шагнал, Холбоо барих. Агуулгын эх сурвалж: `docs/cv/CV-merged.md`.
      Нийтэд нээлттэй төсөл (`href`)-ийг холбоосоор харуулна. (2026-11-17, CV-ээс нэмсэн)
FR-2  Монгол (`/`) ба англи (`/en`) хувилбартай; толгой хэсгээс хэл солино.
FR-3  Бүх агуулга `src/content/site.ts` нэг файлд; хоёр хэл ижил бүтэцтэй.
FR-4  Холбоо барих: `mailto:`, `tel:`, гадаад холбоосууд (LinkedIn гэх мэт) шууд товшигдоно.
FR-5  Цэс (nav) хэсэг рүү үсэрнэ; утсан дээр ч ажиллана.
FR-6  Hero (үндсэн дэлгэц)-д Canvas UI "Glyph Rain" анимэйшн (owner сонголт, 2026-11-17):
      https://canvasui.dev/docs/components/glyph-rain — source: github.com/DavidHDev/canvas-ui `src/lib/GlyphRain/`.

## 2. Функциональ бус шаардлага
NFR-1 Static export (`out/`) — ямар ч static host дээр ажиллана, JS-гүйгээр агуулга харагдана.
NFR-2 Mobile-first; 360px болон 1280px өргөнд шалгана.
NFR-3 WCAG 2.1 AA: semantic heading, `lang` attribute, focus харагдана, өнгө цорын ганц дохио биш.
NFR-4 Өнгө, фонтыг `globals.css`-ийн token-уудаас л авна (raw hex компонентод байхгүй).
NFR-5 SEO/share: хуудас бүр title, description, Open Graph, `hreflang` alternate-тай.

## 3. Дизайн
- Next.js 16 App Router, `output: 'export'`, Tailwind CSS 4.
- Route: `src/app/(mn)/page.tsx` (`/`), `src/app/(en)/en/page.tsx` (`/en/`) — хэл бүр өөрийн root layout-тай
  (`<html lang>` зөв байхын тулд); хоёулаа `<Portfolio lang>` server компонент.
- Компонентууд Server Components. Client JS зөвхөн хөдөлгөөнд (GSAP) — C-7-оор шийднэ.
- Загвар (owner-ийн сонголт, 2026-11-17): **лавлах сайттай ижил хэв маяг** —
  https://hika-portfolio-site-uat9lyf7.blinkusercontent.com/ (Blink-ээр хийсэн "Hika Deme" portfolio).
  Зөвхөн загвар, бүтцийг дуурайна; тэр сайтын текст, зураг, лого, assets-ийг хуулахгүй.
  - Монохром zinc палитр: цагаан дэвсгэр, бараг хар текст (#09090b), саарал muted (#71717a), хил (#e4e4e7);
    accent өнгөгүй — хар товч л онцлох элемент. Хэсэг ээлжлэн маш цайвар саарал дэвсгэр + бага зэргийн grain.
  - Фонт: Geist (текст), Geist Mono (лого, жижиг шошго, огноо, tag). Кирилл үсгийг дэмжих эсэхийг шалгана (C-6).
  - Header: зүүн талд mono лого (`GANDAVAA.D` маягаар), голд nav, баруун талд GitHub/LinkedIn icon + хэл солих.
  - Hero: бүтэн дэлгэцийн өндөр; mono "pill" шошго (`>_ Tech Lead & ...`), 2 мөр асар том гарчиг
    (2-р мөр саарал), нэрийг тодоор оруулсан танилцуулга, хар pill товч + цагаан хүрээтэй pill товч.
  - Төслүүд ("Featured Work"): гарчиг + тайлбар зүүн талд; 3 баганат карт (дээр нь зураг, нэр, тайлбар, mono tag).
  - Туршлага + Stack нэг мөрөнд 2 багана: зүүнд босоо шугамтай timeline (mono огноо, албан тушаал, байгууллага,
    тайлбар, mono tag); баруунд ангиллаар бүлэглэсэн skill "chip"-үүд + хар дэвсгэртэй онцлох карт.
  - Холбоо барих: зүүнд гарчиг, тайлбар, icon-той холбоо барих мөрүүд; баруунд форм (C-5).
  - Footer: mono лого, нэг мөр тайлбар, icon холбоосууд, доор нь copyright.
  - Бараан горим: лавлах сайтад байхгүй тул хасна (зөвхөн цайвар).
- Одоогийн хэсгүүд (Үйлчилгээ, Боловсрол/Шагнал) лавлахад байхгүй — ижил хэв маягаар (карт, timeline) үлдээнэ.

## 4. Өгөгдлийн загвар
`site: Record<"mn" | "en", SiteContent>` — `SiteContent` TypeScript type нь хоёр хэлийг ижил бүтэцтэй байлгана.
Хэлнээс хамаарахгүй өгөгдөл (имэйл, утас, холбоос) `contact` дотор нэг удаа.

## 5. Санаа зовоосон хэсгүүд (Flagged concerns)
C-1 [privacy] Утас, имэйлийг нийтэд байршуулбал spam-д өртөнө.
    → Owner шийдвэр (2026-11-17): имэйл ganaa7@gmail.com, LinkedIn
      https://www.linkedin.com/in/gandavaa-dugarsuren-ba488b101/. Утас нийтэд гаргахгүй. RESOLVED
C-2 [content] Бодит агуулгагүйгээр хамтрагчид илгээж болохгүй.
    → Deploy-оос өмнө placeholder үлдээгүй эсэхийг тест шалгана (`src/content/site.test.ts`, `make check-content`). RESOLVED
C-3 [ops] Hosting сонголт (Q-4) — owner-ийн бүртгэл шаардана.
    → Vercel (GitHub repo-оос). Домэйн: одоогоор *.vercel.app. RESOLVED
C-4 [confidentiality] CV-д ажил олгогчийн дотоод төслүүд (TBG HR Agent — soft launch PoC, IT helpdesk,
    KFC call center) дотоод тоо баримт, аюулгүй байдлын архитектурын дэлгэрэнгүйтэй орсон.
    Нийтэд гаргах эрх ажил олгогчоос шаардлагатай байж магадгүй. Owner: PO.
    → Тоон үр дүнг үлдээж, аюулгүй байдлын архитектурын дэлгэрэнгүйг (JWT, MCP хэрэгслийн тоо, тестийн хэлбэр г.м.) хасна. RESOLVED
C-5 [scope] Лавлах сайт холбоо барих формтой, харин intent-д форм "хамрах хүрээнээс гадуур" (сервер шаардана).
    → Сонголт: (a) формгүй, mailto/утас/LinkedIn л үлдээх; (b) Formspree/Web3Forms мэт гуравдагч үйлчилгээ —
    intent-ийг өөрчилж PO дахин батлах шаардлагатай. Owner: PO.
    → (a) Формгүй: имэйл (mailto) + LinkedIn товч. Intent өөрчлөгдөхгүй. RESOLVED
C-6 [design] Лавлах төслийн картууд зурагтай; бидэнд төслийн зураг байхгүй, мөн "Download CV" товч нийтэд CV
    файл шаардана. Geist нь кирилл үсэгтэй эсэхийг build-д шалгана — үгүй бол ойролцоо фонт (Inter + JetBrains Mono).
    → Зураг: owner screenshot өгөх эсвэл зураггүй карт. CV: нийтийн хувилбар (хувийн мэдээлэлгүй) PDF эсвэл товчгүй.
    Owner: PO/Designer.
    → Зураггүй карт; "Download CV" товчгүй (нийтийн CV бэлэн болохоор дараагийн intent). RESOLVED
C-7 [design/perf] Owner GSAP skill хэрэглэхийг сонгосон → хөдөлгөөн (scroll reveal, hero entrance) нэмэхэд
    `gsap` + `@gsap/react` dependency, "use client" компонент шаардлагатай; NFR-1 "JS-гүйгээр агуулга харагдана"-тай
    зөрчилдөхгүйн тулд: progressive enhancement (JS-гүй үед агуулга бүрэн харагдана), `prefers-reduced-motion`-д
    хөдөлгөөн унтарна, зөвхөн transform/opacity. Owner: Tech Lead.
    → Санал болгосноор батлагдсан. RESOLVED
C-8 [design/perf/license] Glyph Rain (FR-6):
    - WebGL2 shader, "use client", dependency-гүй (зөвхөн react). Эх кодыг төсөлд хуулна (`npx shadcn add` эсвэл гараар).
    - Бороо WebGL2-той бүх браузерт харагдана; html-in-canvas "гэрэл" эффект зөвхөн Chrome 157+ (бусад нь overlay).
    - Анхдагч өнгө цэнхэр, `dim` хуудсыг харанхуйлна → лавлах монохром цайвар загварт: zinc өнгө, `dim: 0`,
      бага density, зөвхөн hero хэсэгт; гарчгийн уншигдах байдал (контраст) алдагдахгүй.
    - prefers-reduced-motion-ийг өөрөө дэмждэг; viewport-оос гарахад зогсоно. WebGL2-гүй үед юу ч зурахгүй — агуулга хэвээр.
    - Лиценз: MIT + Commons Clause — сайтын нэг хэсэг болгон ашиглахыг зөвшөөрнө, компонентыг дангаар нь
      тараах/зарахыг хориглоно. Header-д copyright notice-ийг хадгална. Owner: Tech Lead.
    → Санал болгосноор батлагдсан; `charset`: монгол кирилл + кодын тэмдэгт (`{}<>/;=`). RESOLVED
    → Өөрчлөлт (PO/Designer, 2026-11-17): бороо НОГООН өнгөтэй, тэмдэгт нь ЯПОН катакана (номын сангийн анхдагч).
      Hero-гийн бороо нь монохром палитраас гарах цорын ганц өнгөт элемент.

## 6. Хүлээн авах шалгуур
AC-1 `make build` нь `out/index.html`, `out/en/index.html`-ийг үүсгэнэ.
AC-2 mn/en агуулга ижил тооны үйлчилгээ, төсөл, туршлагатай (unit тест).
AC-3 `make lint` 0 warning.
AC-4 `make check-content` нь placeholder (`TODO`) үлдсэн бол унана — deploy-ийн өмнө ногоон байх ёстой.
AC-5 360px, 1280px дээр лавлах сайттай хэв маягийн хувьд ижил (screenshot харьцуулалт, owner батална).
AC-6 Glyph Rain: Chrome/Safari/Firefox дээр hero-д харагдана; reduced-motion үед зогсоно; hero гарчиг уншигдана.
