// All portfolio content lives here (spec FR-3). Source: docs/cv/CV-merged.md.
// `make check-content` fails while any "TODO" placeholder remains.

export const langs = ["mn", "en"] as const;
export type Lang = (typeof langs)[number];

export type SiteContent = {
  meta: { title: string; description: string };
  nav: { about: string; projects: string; experience: string; contact: string };
  a11y: { primaryNav: string; switchLang: string; email: string; linkedin: string; newTab: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    introBefore: string;
    name: string;
    introAfter: string;
    cta: string;
    secondaryCta: string;
  };
  about: {
    heading: string;
    body: string[];
    servicesHeading: string;
    services: { title: string; description: string }[];
  };
  projects: {
    heading: string;
    intro: string;
    visit: string;
    items: {
      title: string;
      client: string;
      year: string;
      summary: string;
      result: string;
      tags: string[];
      href: string | null;
    }[];
  };
  experience: { heading: string; items: { period: string; role: string; org: string; highlights: string[] }[] };
  stack: {
    heading: string;
    groups: { name: string; items: string[] }[];
    now: { title: string; body: string };
  };
  credentials: { heading: string; groups: { name: string; items: string[] }[] };
  contactSection: {
    heading: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    location: string;
    cardTitle: string;
    cardBody: string;
    cardCta: string;
  };
  footer: { tagline: string; rights: string };
};

// Language-independent details (spec §4). Public contact approved by owner (spec C-1); no phone.
export const brand = "GANDAVAA.D";

export const contact = {
  email: "ganaa7@gmail.com",
  linkedin: "https://www.linkedin.com/in/gandavaa-dugarsuren-ba488b101/",
};

const tags = {
  hrAgent: ["AWS Bedrock", "MCP", "Python", "Trino", "Docker"],
  kfcCallCenter: ["React 18", "TypeScript", "TanStack Query", "Cognito", "Vitest"],
  aiSdlc: ["Claude Code", "AI agents", "Guardrails"],
  itsupport: ["Node.js", "PostgreSQL", "Next.js", "Socket.io"],
  kfcBackend: ["Node.js", "Express", "MySQL", "AWS"],
  dagaldagch: ["Next.js", "Fastify", "Supabase", "AWS"],
  vip76: ["NestJS", "TypeORM", "MySQL", "CloudFront"],
  ecns: ["Java", "PHP", "MSSQL"],
};

const stack = {
  ai: ["AWS Bedrock", "Claude", "MCP", "LLM evals", "Claude Code", "Trino"],
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "TanStack Query", "Ant Design"],
  backend: ["Node.js", "NestJS", "Fastify", "Express", "Python", "Java", "PHP"],
  data: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "GraphQL", "WebSocket"],
  cloud: ["AWS", "Docker", "GitLab CI/CD", "GitHub Actions", "Amplify", "CloudFront"],
  quality: ["Vitest", "Testing Library", "MSW", "Jira", "Agile/Scrum"],
};

const content: Record<Lang, SiteContent> = {
  mn: {
    meta: {
      title: "Гандаваа Дугарсүрэн — Tech Lead, Full Stack хөгжүүлэгч",
      description:
        "10+ жилийн туршлагатай технологийн удирдагч. Бизнесийн зорилго, хэрэглэгчийн хэрэгцээнд нийцсэн веб платформыг системийн архитектураас эхлэн хөгжүүлж, найдвартай ажиллагаа болон өргөтгөх боломжийг ханган хэрэгжүүлдэг. Мөн хиймэл оюуныг бүтээгдэхүүн болон програм хангамж хөгжүүлэлтийн мөчлөгт нэвтрүүлж, багийн бүтээмж, инженерчлэлийн чанар, бизнесийн үр ашгийг нэмэгдүүлэхэд чиглэн ажилладаг.",
    },
    nav: { about: "Тухай", projects: "Төслүүд", experience: "Туршлага", contact: "Холбогдох" },
    a11y: {
      primaryNav: "Үндсэн цэс",
      switchLang: "Switch to English",
      email: "Имэйл илгээх",
      linkedin: "LinkedIn профайл",
      newTab: "шинэ цонхонд нээгдэнэ",
    },
    hero: {
      badge: "Tech Lead & Full Stack хөгжүүлэгч",
      titleLine1: "Найдвартай платформ бүтээж,",
      titleLine2: "AI-г бодит үр дүнд хүргэнэ.",
      introBefore: "Сайн байна уу, би ",
      name: "Гандаваа Дугарсүрэн",
      introAfter:
        ". Веб системийн архитектур, хөгжүүлэлт, өргөтгөл дээр 10 гаруй жил ажилласан туршлагатай. Өнөөдөр багийн програм хангамж хөгжүүлэлтийн үйл явцад хиймэл оюуныг аюулгүй, хяналттай, хэмжигдэхүйц үр дүнтэйгээр нэвтрүүлж байна.",
      cta: "Төслүүдийг үзэх",
      secondaryCta: "Холбогдох",
    },
    about: {
      heading: "Миний тухай",
      body: [
        "Node.js / NestJS, React, Vue.js болон AWS технологид суурилсан веб системийн архитектур, хөгжүүлэлт, ашиглалтад нэвтрүүлэлтийн чиглэлээр 10 гаруй жилийн туршлагатай Full Stack инженер. Өдөр тутам 500 гаруй инженер, мэргэжилтэн ашигладаг нисэхийн үйл ажиллагааны платформоос эхлээд KFC, Pizza Hut-ийн захиалга, хүргэлтийн өндөр ачаалалтай систем хүртэл байгууллагын түвшний шийдлүүдийг боловсруулж, үйлдвэрлэлийн орчинд нэвтрүүлсэн.",
        "Одоогоор Tavanbogd Nura ХХК-д Tech Lead-ийн үүрэг гүйцэтгэж, AI агент болон хиймэл оюунд суурилсан програм хангамж хөгжүүлэлтийн мөчлөгийг (AI SDLC) группийн хэмжээнд нэвтрүүлэх ажлыг удирдаж байна. Техникийн шийдвэр гаргалт, багийн хөгжүүлэлт, инженерүүдийн мэргэжлийн өсөлтөд манлайлан оролцдог. Удирдлагын магистрын зэрэгтэй (2024).",
      ],
      servicesHeading: "Үйлчилгээний чиглэлүүд",
      services: [
        {
          title: "AI SDLC нэвтрүүлэлт",
          description:
            "AI кодчиллын агент болон инженерчлэлийн хэрэгслүүдийг үнэлж сонгоно. Шаардлага тодорхойлохоос эхлээд архитектур, хөгжүүлэлт, кодын хяналт, тест, баримтжуулалт хүртэлх үе шатанд AI-д суурилсан ажлын урсгал, багийн стандарт, аюулгүй ажиллагааны хяналтыг нэвтрүүлнэ.",
        },
        {
          title: "AI агент ба өгөгдөл",
          description:
            "Байгууллагын өгөгдөлтэй аюулгүй харилцах, хамгийн бага шаардлагатай эрхийн зарчмаар ажиллах AI агентуудыг хөгжүүлнэ. Хариултын үнэн зөв байдал, тоон мэдээллийн нийцэл, аюулгүй байдлыг үнэлэх тестийн хүрээг AWS Bedrock зэрэг технологид тулгуурлан хэрэгжүүлнэ.",
        },
        {
          title: "Full stack платформ",
          description:
            "Олон байгууллага, хэрэглэгчийг тусгаарлан дэмжих SaaS платформ, веб болон мобайл аппликейшн, төлбөрийн систем, POS интеграцчлалыг архитектураас эхлэн хөгжүүлж, AWS орчинд CI/CD бүхий үйлдвэрлэлийн бэлэн шийдэл болгон нэвтрүүлнэ.",
        },
        {
          title: "Хуучин системийг шинэчлэх",
          description:
            "Үйл ажиллагаанд байгаа системийн тасралтгүй ажиллагааг хадгалан технологийн шинэчлэл хийнэ. Vue 2-оос React + TypeScript, PHP-ээс NestJS рүү шилжүүлэх, монолит архитектурыг бие даасан сервисүүдэд задлах, автомат тест болон чанарын хяналтыг нэвтрүүлэх ажлыг хэрэгжүүлнэ.",
        },
      ],
    },
    projects: {
      heading: "Онцлох төслүүд",
      intro: "Бизнесийн бодит асуудлыг инженерчлэлийн шийдлээр шийдвэрлэж, хэмжигдэхүйц үр дүн бий болгосон төслүүд.",
      visit: "Сайт үзэх",
      items: [
        {
          title: "TBG HR Agent",
          client: "Таван Богд Групп",
          year: "2026",
          summary:
            "Odoo 19 болон ажилтнуудын ирцийн мэдээлэлтэй холбогдсон хүний нөөцийн аналитик самбар, монгол хэлээр харилцах AI агентыг Claude Code-ийн тусламжтайгаар бие даан архитектурчилж, хөгжүүлсэн. Хоёр шийдэл нь нэгдсэн, зөвхөн унших эрхтэй, аюулгүй өгөгдлийн давхаргаар дамжин мэдээлэл авдаг.",
          result:
            "Тоон мэдээллийн үнэн зөв байдлыг шалгах үнэлгээнд Bedrock Sonnet 15/15 оноо авч, локал загвар 9/15 оноогоор шаардлага хангаагүй. Аюулгүй байдлын тестийн 15/15 шалгуурыг амжилттай хангасан.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call center апп",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Дэмжлэгийн хугацаа дууссан, автомат тестгүй Vue 2 аппликейшнд техникийн аудит хийж, React 18 болон TypeScript ашиглан шинэ архитектураар бие даан дахин хөгжүүлсэн. Шинэ аппликейшн нь backend-ийн 7 сервисийн интеграцчлалтай бөгөөд ойролцоогоор 14,300 мөр TypeScript кодоос бүрдэнэ.",
          result:
            "Хэрэглэгчийн session дуусах үед захиалга бүртгэгдэхгүй болох эрсдэлийг арилгаж, автомат тестийн суурийг шинээр бүрдүүлэн 17 тест файл нэвтрүүлсэн.",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC нэвтрүүлэлт",
          client: "TBG Tech ХХК",
          year: "2025 – 2026",
          summary:
            "AI кодчиллын агент болон хөгжүүлэлтийн хэрэгслүүдэд харьцуулсан үнэлгээ хийж, програм хангамжийн амьдралын мөчлөгийн үе шат бүрд AI-д суурилсан ажлын урсгалыг төлөвлөн нэвтрүүлсэн.",
          result: "Шаардлага тодорхойлох, дизайн, кодчилол, хяналт, тест, баримтжуулалтын үе шат бүрд ашиглах багийн стандарт, ажлын заавар болон аюулгүй ажиллагааны хяналтыг боловсруулсан.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Таван Богд Групп",
          year: "2022 – 2023",
          summary:
            "Имэйл, чат, утсаар хүлээн авдаг байсан IT хүсэлтийг нэгтгэх байгууллагын дотоод Helpdesk платформын архитектур, хөгжүүлэлтийг удирдсан. Хүсэлтийн автомат хуваарилалт, SLA мэдэгдэл болон Odoo SSO интеграцчлалыг хэрэгжүүлсэн.",
          result: "Сард 1,500–2,000 хүсэлт боловсруулдаг системийг нэвтрүүлснээр хүсэлт шийдвэрлэх дундаж хугацааг ойролцоогоор 3 цагаас 1 цаг болгон бууруулж, сар бүр 160 орчим хүн-цагийн бүтээмжийн хэмнэлт бий болгосон.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC захиалга, хүргэлт",
          client: "KFC Mongolia",
          year: "4 жил",
          summary:
            "Хоёр хүний бүрэлдэхүүнтэй backend багийн ахлах хөгжүүлэгчээр ажиллаж, монолит системийг 236 API endpoint бүхий 7 бие даасан сервис болгон дахин зохион байгуулсан. Мөн 8 төлбөрийн үйлчилгээний интеграцчлалыг нэгдсэн сервисээр удирдах архитектур боловсруулсан.",
          result:
            "Салбарын POS систем рүү дамжуулсан захиалгын алдагдлыг арилгаж, төлбөрийн төлөвийг хэдхэн минутын дотор автоматаар баталгаажуулах найдвартай механизмыг нэвтрүүлсэн.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 – одоо",
          summary: "Сүм, байгууллагуудад зориулсан олон байгууллагын архитектуртай (multi-tenant) шавь бэлтгэх сургалтын платформын веб болон мобайл шийдлийн архитектурыг боловсруулж, хөгжүүлэлтийг удирдсан.",
          result:
            "Байгууллага тус бүрийн өгөгдлийн тусгаарлалтыг хэрэгжүүлж, өгөгдлийн сангийн бүтцэд өөрчлөлт оруулахгүйгээр шинэ төрлийн хичээл нэмэх боломжтой, схемд суурилсан сургалтын хөдөлгүүр хөгжүүлсэн.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2026",
          summary:
            "Үйл ажиллагаанд байгаа PHP платформыг тасралтгүй ажиллуулах нөхцөлтэйгөөр NestJS архитектурт үе шаттай шилжүүлж, хэрэглэгч бүр өөрийн домэйнд вебсайт ажиллуулах боломжтой multi-tenant платформ болгон өргөтгөсөн.",
          result: "Платформын нийт кодын ойролцоогоор 75%-ийг хөгжүүлж, өгөгдлийн сангийн query-ийн гүйцэтгэлийг оновчлон, CDN-д суурилсан зураг боловсруулах урсгал болон бөөнөөр имэйл илгээх боломжийг нэвтрүүлсэн.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS",
          client: "Иргэний нисэхийн ерөнхий газар",
          year: "2010 – 2019",
          summary:
            "Агаарын навигацийн үйл ажиллагааны нөөцийн төлөвлөлт, тоног төхөөрөмжийн бүртгэл, хүний нөөц, сургалт, тайлагнал зэрэг үндсэн процессыг цахимжуулсан 12 модультай байгууллагын платформ.",
          result: "Өдөр тутам 500 гаруй инженер, техникч, удирдах ажилтан үйл ажиллагаандаа ашигладаг.",
          tags: tags.ecns,
          href: null,
        },
      ],
    },
    experience: {
      heading: "Туршлага",
      items: [
        {
          period: "2025 — одоо",
          role: "Tech Lead",
          org: "Tavanbogd Nura ХХК",
          highlights: [
            "Группийн хэмжээнд бодлого, байгууллагын үйл ажиллагааны процессыг хиймэл оюунд суурилан автоматжуулах санаачилгыг удирдан хэрэгжүүлж байна.",
            "AI хөгжүүлэлтийн агент ашиглан бизнесийн санааг богино хугацаанд ажиллах прототип болгон хувиргаж, архитектурын хяналт болон тестээр баталгаажуулан үйлдвэрлэлийн орчинд нэвтрүүлэхэд бэлтгэдэг.",
          ],
        },
        {
          period: "2022 — 2025",
          role: "Full Stack хөгжүүлэгч",
          org: "Tavanbogd Nura ХХК",
          highlights: [
            "KFC болон Pizza Hut-ийн захиалга, хүргэлт, дуудлагын төвийн платформын backend сервис, удирдлагын самбарыг AWS үүлэн дэд бүтцэд хөгжүүлж, интеграцчилсан.",
            "Кодын хяналтын (code review) үйл явцыг зохион байгуулж, хөгжүүлэлтийн стандарт тогтоон, багийн гишүүдэд техникийн чиглүүлэг болон менторшип үзүүлсэн.",
          ],
        },
        {
          period: "2021 — 2022",
          role: "Системийн шинжээч",
          org: "Tavanbogd Solutions ХХК",
          highlights: [
            "TBG группийн охин компаниудын цахим худалдаа, захиалгын удирдлага болон дуудлагын төвийн системүүдийн бизнесийн шаардлагыг тодорхойлж, систем хоорондын интеграцчлал, ажлын урсгалыг боловсруулсан.",
          ],
        },
        {
          period: "2010 — 2019",
          role: "Технологийн инженер",
          org: "Иргэний нисэхийн ерөнхий газар",
          highlights: ["ECNS платформын хөгжүүлэлтийг хэрэгжүүлж, дотоод IT багийн үйл ажиллагааг удирдан, сургалт, технологийн худалдан авалт болон дэд бүтцийн шинэчлэлийг хариуцсан."],
        },
        {
          period: "2007 — 2010",
          role: "Гүйцэтгэх захирал, инженер",
          org: "Megaspire ХХК, Interactive ХХК",
          highlights: ["ERP, HRM болон CMS төрлийн байгууллагын програм хангамжийн шийдлүүдийг боловсруулж, хөгжүүлэн нэвтрүүлсний дотор “Diamond” ERP систем багтана."],
        },
      ],
    },
    stack: {
      heading: "Технологийн ур чадвар",
      groups: [
        { name: "AI ба өгөгдөл", items: stack.ai },
        { name: "Frontend", items: stack.frontend },
        { name: "Backend", items: stack.backend },
        { name: "Өгөгдлийн сан ба API", items: stack.data },
        { name: "Cloud ба DevOps", items: stack.cloud },
        { name: "Чанар ба процесс", items: stack.quality },
      ],
      now: {
        title: "Одоо юу хийж байна вэ?",
        body: "Группийн хэмжээнд AI SDLC нэвтрүүлэлтийг удирдахын зэрэгцээ байгууллагын өгөгдөлтэй аюулгүй харилцах, эрхийн хяналттай AI агентуудыг хөгжүүлж байна.",
      },
    },
    credentials: {
      heading: "Боловсрол ба шагнал",
      groups: [
        {
          name: "Боловсрол",
          items: ["Удирдлагын магистр — Bible School of MAoG, 2024", "Бакалавр, Програм хангамж — ШУТИС, 2006"],
        },
        {
          name: "Шагнал",
          items: [
            "Оны шилдэг залуу инженер — Монголын Залуучуудын Холбоо, 2016",
            "Шилдэг инженер — ИНЕГ, 2017",
          ],
        },
        { name: "Хэл", items: ["Монгол (төрөлх)", "Англи (ажлын түвшин)"] },
        { name: "Нийгэмлэг", items: ["Faith Tech Community — хамтран үүсгэн байгуулагч, зохион байгуулагч (2023 — одоо)"] },
      ],
    },
    contactSection: {
      heading: "Холбогдох",
      body: "Веб платформ хөгжүүлэлт, AI нэвтрүүлэлт эсвэл техникийн зөвлөх үйлчилгээний чиглэлээр хамтран ажиллах санал байвал холбогдоорой.",
      emailLabel: "Имэйл",
      linkedinLabel: "LinkedIn",
      locationLabel: "Байршил",
      location: "Улаанбаатар, Монгол",
      cardTitle: "Хамтран ажиллая",
      cardBody: "Төслийн зорилго, хэрэгцээ болон хамтран ажиллах боломжийн талаар товч мэдээлэл илгээнэ үү.",
      cardCta: "Имэйл бичих",
    },
    footer: { tagline: "Tech Lead — өргөтгөх боломжтой платформ хөгжүүлж, хиймэл оюуныг бизнесийн бодит үр дүнд чиглүүлнэ.", rights: "Бүх эрх хуулиар хамгаалагдсан." },
  },
  en: {
    meta: {
      title: "Gandavaa Dugarsuren — Tech Lead, Full Stack Developer",
      description:
        "Technology leader with 10+ years of experience architecting, delivering, and scaling business-critical web platforms. Focused on integrating AI into products and software delivery workflows to improve engineering quality, team productivity, and measurable business outcomes.",
    },
    nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
    a11y: {
      primaryNav: "Primary",
      switchLang: "Монгол хэл рүү шилжих",
      email: "Send an email",
      linkedin: "LinkedIn profile",
      newTab: "opens in a new tab",
    },
    hero: {
      badge: "Tech Lead & Full Stack Developer",
      titleLine1: "Engineering scalable platforms,",
      titleLine2: "turning AI into impact.",
      introBefore: "Hi, I'm ",
      name: "Gandavaa Dugarsuren",
      introAfter:
        ". I bring 10+ years of experience across web architecture, software engineering, and platform delivery. Today, I help teams adopt AI across the software development lifecycle with the controls, evaluation, and measurable outcomes needed for production use.",
      cta: "View projects",
      secondaryCta: "Get in touch",
    },
    about: {
      heading: "About",
      body: [
        "Full Stack Engineer with 10+ years of experience architecting and delivering web platforms using Node.js / NestJS, React, Vue.js, and AWS. My work spans enterprise systems, including an aviation operations platform used daily by 500+ professionals and high-volume ordering and delivery platforms for KFC and Pizza Hut.",
        "Currently Tech Lead at Tavanbogd Nura LLC, leading the adoption of AI agents and an AI-enabled software development lifecycle across the group. I contribute to technical strategy, engineering practices, team leadership, and developer mentoring. Master of Arts in Leadership (2024).",
      ],
      servicesHeading: "How we can work together",
      services: [
        {
          title: "AI SDLC adoption",
          description:
            "Assess and select AI coding agents and engineering tools, then establish AI-assisted workflows across requirements, architecture, implementation, code review, testing, and documentation — supported by team standards, governance, and security controls.",
        },
        {
          title: "AI agents on your data",
          description:
            "Build secure AI agents that interact with enterprise data under least-privilege access controls. Implement evaluation frameworks to validate factual accuracy, numerical consistency, and response safety using platforms such as AWS Bedrock.",
        },
        {
          title: "Full stack platforms",
          description:
            "Architect and deliver multi-tenant SaaS platforms, web and mobile applications, payment and POS integrations, and AWS-based CI/CD pipelines — from solution design through production deployment.",
        },
        {
          title: "Legacy modernization",
          description:
            "Modernize business-critical systems while maintaining service continuity. Execute migrations such as Vue 2 to React + TypeScript, PHP to NestJS, and monolith-to-service architectures, introducing automated testing and quality controls throughout.",
        },
      ],
    },
    projects: {
      heading: "Featured work",
      intro: "Selected projects demonstrating technical leadership, end-to-end delivery, and measurable business impact.",
      visit: "Visit site",
      items: [
        {
          title: "TBG HR Agent",
          client: "Tavan Bogd Group",
          year: "2026",
          summary:
            "Independently architected and built an HR analytics dashboard and a Mongolian-language AI assistant integrated with Odoo 19 and attendance data, using Claude Code. Both applications consume data through a unified, secure, read-only access layer.",
          result:
            "Achieved 15/15 on numerical-accuracy evaluations with Bedrock Sonnet; the local model scored 9/15 and did not meet the acceptance threshold. Passed all 15 security test cases.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call-center app",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Conducted a technical audit of an end-of-life Vue 2 application with no automated tests, then independently rebuilt it using React 18 and TypeScript. The new application integrates with seven backend services and comprises approximately 14,300 lines of TypeScript.",
          result: "Resolved order-loss scenarios triggered by session expiry and established the application’s automated testing foundation, delivering 17 test files.",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC rollout",
          client: "TBG Tech LLC",
          year: "2025 – 2026",
          summary:
            "Evaluated AI coding agents and engineering tools, then designed and implemented an AI-enabled software development lifecycle across the engineering organization.",
          result: "Established AI-assisted workflows, team guidelines, and governance controls across the delivery lifecycle — from requirements and design through implementation, testing, and documentation.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Tavan Bogd Group",
          year: "2022 – 2023",
          summary:
            "Architected and led the development of a centralized internal helpdesk, consolidating IT requests previously handled through email, chat, and phone. Delivered automated ticket routing, SLA notifications, and Odoo single sign-on integration.",
          result: "Processes 1,500–2,000 tickets per month. Reduced average resolution time from approximately three hours to one hour, saving an estimated 160 person-hours each month.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC ordering & delivery",
          client: "KFC Mongolia",
          year: "4 years",
          summary:
            "Served as lead developer in a two-person backend team, decomposing a monolithic application into seven independent services comprising 236 API endpoints. Consolidated integrations with eight payment providers behind a unified payment service.",
          result: "Improved order-delivery reliability by preventing silent order loss during transmission to branch POS systems, and implemented automated payment confirmation within minutes.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 –",
          summary: "Architected and led delivery of a multi-tenant discipleship and learning platform for churches, spanning web and mobile experiences.",
          result:
            "Implemented tenant-level data isolation and a schema-driven learning engine that supports new lesson types without requiring database schema changes.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2025",
          summary:
            "Led the migration of a live PHP platform to NestJS with no planned service interruption, then evolved it into a multi-tenant publishing platform that enables each customer to operate websites on custom domains.",
          result: "Contributed approximately 75% of the codebase, optimized database query performance, and implemented a CDN-backed image-processing pipeline and bulk email capability.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS",
          client: "Civil Aviation Authority of Mongolia",
          year: "2014 – 2018",
          summary:
            "Designed and delivered a 12-module enterprise platform that digitized core air-navigation operations, including resource planning, equipment management, human resources, training, and reporting.",
          result: "Adopted for daily operational use by more than 500 engineers, technicians, and managers.",
          tags: tags.ecns,
          href: null,
        },
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          period: "2025 — present",
          role: "Tech Lead",
          org: "Tavanbogd Nura LLC",
          highlights: [
            "Leading initiatives to apply AI-driven automation to group-wide policies and organizational workflows.",
            "Accelerating solution validation through AI-assisted prototyping, then preparing solutions for production through architecture reviews, testing, and engineering quality controls.",
          ],
        },
        {
          period: "2022 — 2025",
          role: "Full Stack Developer",
          org: "Tavanbogd Nura LLC",
          highlights: [
            "Developed backend services and administrative applications for KFC and Pizza Hut ordering, delivery, and call-center platforms, deployed on AWS.",
            "Facilitated code reviews, established engineering standards, and provided technical guidance and mentorship to junior developers.",
          ],
        },
        {
          period: "2021 — 2022",
          role: "System Analyst",
          org: "Tavanbogd Solutions LLC",
          highlights: [
            "Elicited and documented business requirements, and designed workflows and system integrations for e-commerce, order management, and call-center solutions across TBG Group subsidiaries.",
          ],
        },
        {
          period: "2012 — 2019",
          role: "Technologies Engineer",
          org: "Civil Aviation Authority of Mongolia",
          highlights: ["Delivered the ECNS platform and led the internal IT function, overseeing technical training, technology procurement, and infrastructure modernization."],
        },
        {
          period: "2009 — 2011",
          role: "CEO & Software Engineer",
          org: "Megaspire LLC & Interactive LLC",
          highlights: ["Led and delivered enterprise software solutions across ERP, HRM, and CMS domains, including the Diamond ERP platform."],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        { name: "AI & Data", items: stack.ai },
        { name: "Frontend", items: stack.frontend },
        { name: "Backend", items: stack.backend },
        { name: "Databases & APIs", items: stack.data },
        { name: "Cloud & DevOps", items: stack.cloud },
        { name: "Quality & Process", items: stack.quality },
      ],
      now: {
        title: "What I'm working on now",
        body: "Leading group-wide adoption of an AI-enabled software development lifecycle while engineering secure, access-controlled AI agents for enterprise data.",
      },
    },
    credentials: {
      heading: "Education & awards",
      groups: [
        {
          name: "Education",
          items: [
            "Master of Arts in Leadership — Bible School of MAoG, 2024",
            "BSc, Software Development — Mongolian University of Science and Technology, 2006",
          ],
        },
        {
          name: "Awards",
          items: [
            "Young Engineer of the Year — Mongolian Youth Organization, 2016",
            "Best Engineer — Civil Aviation Authority, 2017",
          ],
        },
        { name: "Languages", items: ["Mongolian (native)", "English (working proficiency)" ] },
        { name: "Community", items: ["Faith Tech Community — Co-founder and Community Lead (2023 — present)"] },
      ],
    },
    contactSection: {
      heading: "Get in touch",
      body: "For web platform development, AI adoption initiatives, or technical consulting, feel free to get in touch to discuss how we could work together.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      location: "Ulaanbaatar, Mongolia",
      cardTitle: "Let's work together",
      cardBody: "Share a brief overview of your project goals, requirements, and potential collaboration.",
      cardCta: "Write an email",
    },
    footer: { tagline: "Tech Lead — Engineering scalable platforms. Turning AI into measurable impact.", rights: "All rights reserved." },
  },
};

// Keep Latin words glued to their Mongolian suffix ("AI-д", "Tech Lead-ээр") so lines never break at the hyphen:
// a word joiner (U+2060, invisible) after the hyphen removes the break opportunity.
function glueSuffixes<T>(value: T): T {
  if (typeof value === "string") return value.replace(/([A-Za-z0-9])-(?=[А-Яа-яЁёӨөҮү])/g, "$1-\u2060") as T;
  if (Array.isArray(value)) return value.map(glueSuffixes) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, glueSuffixes(v)])) as T;
  }
  return value;
}

export const site: Record<Lang, SiteContent> = { mn: glueSuffixes(content.mn), en: content.en };
