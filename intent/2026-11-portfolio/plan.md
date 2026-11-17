# Plan: Portfolio вэб (from spec.md 2026-11-17)
Accepted by: — (owner батлах)

## Өөрчлөгдөх файлууд
next.config.ts                       (static export)
src/content/site.ts                  (new, бүх агуулга mn/en)
src/content/site.test.ts             (new, AC-2 + AC-4)
src/components/Portfolio.tsx         (new, бүх хэсгүүд)
src/app/layout.tsx, globals.css      (token, фонт, metadata)
src/app/page.tsx                     (mn)
src/app/en/page.tsx                  (new, en)
Makefile, CLAUDE.md, REVIEW.md       (new, AI-SDLC feedback loop)

## Ажлын дараалал
1. Static export тохиргоо, design token.
2. `SiteContent` type + placeholder агуулга (TODO тэмдэгтэй).
3. Portfolio компонент, хоёр route, metadata/hreflang.
4. Тест: mn/en бүтэц тэнцүү; placeholder шалгалт тусдаа.
5. `make build test lint` ногоон → owner-т үзүүлэх.
6. Owner агуулга оруулна → `make check-content` ногоон → deploy (owner зөвшөөрөлтэй).

## Эрсдэл
- Next.js 16 нь breaking change-тэй: `node_modules/next/dist/docs/`-оос шалгаж бичнэ.
- Static export-д `next/image` optimization ажиллахгүй → `images.unoptimized: true`.

## Хэрэгжүүлэлтийн явцад өөрчлөгдсөн (2026-11-17)
- `cacheComponents` / `partialPrefetching`-ийг унтраасан: Next.js 16-д static export-той нийцэхгүй ("PPR cannot be enabled in export mode").
- `<html lang>` хэл бүрт зөв байхын тулд хоёр root layout: `src/app/(mn)/`, `src/app/(en)/en/`; хуваалцсан хэсэг нь `src/components/RootHtml.tsx`.

## Нотолгоо (Proof)
make build, make test, make lint бүгд ногоон; 360px/1280px дээр screenshot.
