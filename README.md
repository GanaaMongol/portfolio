# Portfolio

Бизнесийн хамтрагчдад зориулсан portfolio вэб. Монгол (`/`) болон англи (`/en/`) хувилбартай.
Next.js 16 + Tailwind CSS 4, static export хийдэг тул ямар ч static hosting дээр ажиллана.

AI-SDLC процессын дагуу хийсэн ([docs/ai-sdlc-starter](docs/ai-sdlc-starter/README.md)):
[intent](intent/2026-11-portfolio/intent.md) → [spec](intent/2026-11-portfolio/spec.md) → [plan](intent/2026-11-portfolio/plan.md) → код + тест → review ([REVIEW.md](REVIEW.md)) → deploy.

## Агуулга засах

Бүх текст, холбоо барих мэдээлэл **нэг файлд** байна: [`src/content/site.ts`](src/content/site.ts).

1. `TODO` гэж эхэлсэн бүх утгыг өөрийн мэдээллээр солино (монгол `mn`, англи `en` хоёуланд нь).
2. Үйлчилгээ, төсөл, туршлагыг нэмэх/хасах бол хоёр хэлэнд ижил тоотой байлгана.
3. Шалгана:

```bash
make dev            # http://localhost:3000 дээр засвараа шууд харна
make check-content  # TODO үлдсэн бол алдаа заана
```

## Шалгах (deploy-оос өмнө)

```bash
make build          # out/ хавтас үүсгэнэ, "BUILD OK" гарах ёстой
make test
make lint
make check-content
make preview        # out/-ийг локалаар харах
```

## Вэбэд байршуулах

`make build` хийсний дараа `out/` хавтас бол бэлэн сайт. Аль нэгийг сонгоно:

- **Vercel** (хамгийн хялбар): GitHub-д push хийгээд vercel.com дээр repo-гоо import хийнэ. Тохиргоо автоматаар танигдана.
- **Netlify Drop**: app.netlify.com/drop хуудас руу `out/` хавтсыг чирж оруулна. Бүртгэл, git шаардлагагүй.
- **GitHub Pages**: `out/`-ийн агуулгыг Pages branch руу байршуулна.

Өөрийн домэйнтэй бол `SITE_URL=https://таны-домэйн.mn make build` гэж build хийвэл Open Graph холбоосууд зөв гарна.
