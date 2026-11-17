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
        "10+ жилийн туршлагатай Tech Lead. Бизнесийн хэрэгцээнд нийцсэн веб платформыг архитектурын түвшнээс эхлэн хөгжүүлж, найдвартай, өргөтгөх боломжтой систем болгон бүтээдэг. Мөн AI технологийг хөгжүүлэлтийн үйл явц болон бодит бүтээгдэхүүнд нэвтрүүлж, багийн бүтээмж, шийдлийн чанарыг сайжруулахад төвлөрдөг.",
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
      titleLine1: "Платформ бүтээж,",
      titleLine2: "AI-г ажилд оруулна.",
      introBefore: "Сайн байна уу, би ",
      name: "Гандаваа Дугарсүрэн",
      introAfter:
        ". 10 гаруй жил вэб систем зохиож, бүтээж, өргөжүүлж ирсэн; одоо багийн програм хангамж хөгжүүлэлтэд AI-г аюулгүй, хэмжигдэхүйц үр дүнтэй нэвтрүүлж байна.",
      cta: "Төслүүдийг үзэх",
      secondaryCta: "Холбогдох",
    },
    about: {
      heading: "Тухай",
      body: [
        "Node.js / NestJS, React, Vue.js болон AWS дээр суурилсан вэб системийг 10 гаруй жил хөгжүүлсэн Full Stack хөгжүүлэгч. Өдөр бүр 500 гаруй инженер ашигладаг нисэхийн платформоос эхлээд KFC, Pizza Hut-ийн өндөр ачаалалтай захиалгын систем хүртэл байгууллагын түвшний шийдлүүдийг хүлээлгэн өгсөн.",
        "Одоо Tavanbogd Nura ХХК-д Tech Lead-ээр ажиллаж, AI агент болон AI-д суурилсан хөгжүүлэлтийн процесс (AI SDLC)-ийг группийн хэмжээнд нэвтрүүлж байна. Багийг удирдаж, залуу хөгжүүлэгчдэд зөвлөдөг; Удирдлагын магистр (2024).",
      ],
      servicesHeading: "Юугаар хамтран ажиллах вэ",
      services: [
        {
          title: "AI SDLC нэвтрүүлэлт",
          description:
            "AI coding агент, хэрэгслийг үнэлж, шаардлага, дизайн, код, review, тест, баримтжуулалтын шат бүрт AI-тай ажлын урсгал, багийн дүрэм, хамгаалалтыг нэвтрүүлнэ.",
        },
        {
          title: "AI агент ба өгөгдөл",
          description:
            "Байгууллагын өгөгдөл дээр ажилладаг, эрх нь хязгаарлагдсан AI агент; хариултын тоо бүрийг шалгадаг eval, AWS Bedrock.",
        },
        {
          title: "Full stack платформ",
          description:
            "Олон түрээслэгчтэй SaaS, вэб ба мобайл, төлбөр, POS интеграцчлал, AWS дээрх CI/CD — архитектураас production хүртэл.",
        },
        {
          title: "Хуучин системийг шинэчлэх",
          description:
            "Ажиллаж буй системийг зогсоолгүй шинэчилнэ: Vue 2 → React + TypeScript, PHP → NestJS, monolith → сервисүүд, тестийг тэгээс нэвтрүүлнэ.",
        },
      ],
    },
    projects: {
      heading: "Онцлох төслүүд",
      intro: "Нарийн төвөгтэй асуудлыг шийдэж, хэмжигдэх үр дүн гаргасан ажлууд.",
      visit: "Сайт үзэх",
      items: [
        {
          title: "TBG HR Agent",
          client: "Таван Богд Групп",
          year: "2026",
          summary:
            "Odoo 19 болон ирцийн өгөгдөл дээр ажилладаг HR самбар, монгол хэлтэй AI чат агентыг Claude Code ашиглан ганцаараа бүтээсэн. Аюулгүй, зөвхөн уншдаг нэг өгөгдлийн давхаргаас тэжээгддэг.",
          result:
            "Тоо бүрийг шалгадаг eval-д Bedrock Sonnet 15/15 давсан (локал загвар 9/15-аар хасагдсан); аюулгүй байдлын тест 15/15.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call center апп",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Дэмжлэг нь дууссан, тестгүй Vue 2 аппыг аудитлаад React 18 + TypeScript дээр ганцаараа дахин бүтээсэн: 7 backend сервистэй интеграцчлагдсан, ~14,300 мөр TypeScript.",
          result:
            "Session дуусахад захиалга алдагдах асуудлыг бүрэн арилгасан; тестийг тэгээс нэвтрүүлсэн (17 тест файл).",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC нэвтрүүлэлт",
          client: "TBG Tech ХХК",
          year: "2025 – 2026",
          summary:
            "AI coding агент, хэрэгслийг судалж үнэлээд програм хангамж хөгжүүлэлтийн бүх шатанд AI-тай ажлын урсгал нэвтрүүлсэн.",
          result: "Шаардлагаас баримтжуулалт хүртэлх шат бүрт багийн удирдамж, хамгаалалт бий болсон.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Таван Богд Групп",
          year: "2022 – 2023",
          summary:
            "Имэйл, чат, утсаар тархсан IT хүсэлтийг орлох дотоод helpdesk-ийг эхнээс нь зохиож, хөгжүүлэлтийг удирдсан: автомат хуваарилалт, SLA сэрэмжлүүлэг, Odoo SSO.",
          result: "Сард 1,500–2,000 тасалбар; шийдвэрлэх хугацаа ~3 цагаас ~1 цаг болж, сард ~160 хүн-цаг хэмнэсэн.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC захиалга, хүргэлт",
          client: "KFC Mongolia",
          year: "4 жил",
          summary:
            "2 хүний backend багийн ахлах хөгжүүлэгч: monolith-ийг 7 бие даасан сервис (236 API endpoint) болгон задалж, 8 төлбөрийн үйлчилгээг нэг сервист нэгтгэсэн.",
          result:
            "Салбарын POS руу илгээсэн захиалга чимээгүй алдагдахаа больсон; төлбөрийг минутын дотор автоматаар баталгаажуулдаг.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 – now",
          summary: "Сүмүүдэд зориулсан олон түрээслэгчтэй сургалтын платформ (вэб + мобайл)-ыг архитектурлаж, хөгжүүлэлтийг удирдсан.",
          result:
            "Байгууллага бүрийн өгөгдлийг найдвартай тусгаарласан; шинэ хичээлийн төрлийг DB өөрчлөлтгүйгээр нэмдэг сургалтын хөдөлгүүр.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2026",
          summary:
            "Ажиллаж буй PHP платформыг унтраалгүйгээр NestJS руу шилжүүлж, хэрэглэгч бүр өөрийн домэйн дээр сайттай болдог multi-tenant платформ болгосон.",
          result: "Кодын ~75%-ийг бичсэн; query-ийн гүйцэтгэлийг сайжруулж, CDN зураг боловсруулалт, bulk имэйл нэвтрүүлсэн.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS",
          client: "Иргэний нисэхийн ерөнхий газар",
          year: "2010 – 2019",
          summary:
            "Агаарын навигацийн үйл ажиллагааг (нөөц төлөвлөлт, тоног төхөөрөмж, хүний нөөц, сургалт, тайлан) цахимжуулсан 12 модультай платформ.",
          result: "500+ инженер, техникч, менежер өдөр бүр ашигладаг.",
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
            "Группийн бодлого, зохион байгуулалтын процессыг AI-аар автоматжуулах ажлыг удирдаж байна.",
            "AI агентаар санааг хурдан прототип болгож, архитектурын review, тестээр production-д бэлэн болгодог.",
          ],
        },
        {
          period: "2022 — 2025",
          role: "Full Stack хөгжүүлэгч",
          org: "Tavanbogd Nura ХХК",
          highlights: [
            "KFC, Pizza Hut-ийн захиалга, хүргэлт, call center платформын backend, админ самбарыг AWS дээр бүтээсэн.",
            "Code review удирдаж, кодын стандарт тогтоож, залуу хөгжүүлэгчдэд зөвлөсөн.",
          ],
        },
        {
          period: "2021 — 2022",
          role: "Системийн шинжээч",
          org: "Tavanbogd Solutions ХХК",
          highlights: [
            "TBG группийн охин компаниудын e-commerce, захиалга, call center интеграцчлалын шаардлага, ажлын урсгалыг боловсруулсан.",
          ],
        },
        {
          period: "2010 — 2019",
          role: "Технологийн инженер",
          org: "Иргэний нисэхийн ерөнхий газар",
          highlights: ["ECNS платформыг бүтээж, дотоод IT багийг удирдсан (сургалт, худалдан авалт, технологийн шинэчлэл)."],
        },
        {
          period: "2007 — 2010",
          role: "Гүйцэтгэх захирал, инженер",
          org: "Megaspire ХХК, Interactive ХХК",
          highlights: ["ERP, HRM, CMS шийдлүүд, тэр дундаа “Diamond” ERP-ийг хүлээлгэн өгсөн."],
        },
      ],
    },
    stack: {
      heading: "Stack",
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
        body: "AI SDLC-ийг группийн хэмжээнд нэвтрүүлж, байгууллагын өгөгдөл дээр ажиллах аюулгүй AI агентуудыг бүтээж байна.",
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
            "Шилдэг ажилтан — ИНЕГ, 2015",
          ],
        },
        { name: "Хэл", items: ["Монгол (төрөлх)", "Англи (ажлын түвшин)", "Орос (дунд)", "Япон (анхан)"] },
        { name: "Нийгэмлэг", items: ["Faith Tech Community — ментор, зохион байгуулагч (2023 — одоо)"] },
      ],
    },
    contactSection: {
      heading: "Холбогдох",
      body: "Шинэ төсөл, AI нэвтрүүлэлт, техникийн зөвлөгөөний санал байвал бичээрэй — хариу өгөхдөө баяртай байх болно.",
      emailLabel: "Имэйл",
      linkedinLabel: "LinkedIn",
      locationLabel: "Байршил",
      location: "Улаанбаатар, Монгол",
      cardTitle: "Хамтран ажиллая",
      cardBody: "Төслийнхөө талаар хэдэн өгүүлбэрээр бичээд илгээгээрэй.",
      cardCta: "Имэйл бичих",
    },
    footer: { tagline: "Tech Lead — платформ бүтээж, AI-г бодит хэрэглээнд нэвтрүүлнэ.", rights: "Бүх эрх хуулиар хамгаалагдсан." },
  },
  en: {
    meta: {
      title: "Gandavaa Dugarsuren — Tech Lead, Full Stack Developer",
      description:
        "Tech Lead with 10+ years of experience designing, building, and scaling web platforms end-to-end, and bringing AI into how teams build software.",
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
      titleLine1: "Building platforms,",
      titleLine2: "putting AI to work.",
      introBefore: "Hi, I'm ",
      name: "Gandavaa Dugarsuren",
      introAfter:
        ". I've spent 10+ years designing, building, and scaling web systems — and now bring AI into how teams build software, safely and measurably.",
      cta: "View projects",
      secondaryCta: "Get in touch",
    },
    about: {
      heading: "About",
      body: [
        "Full Stack Developer with 10+ years of experience building web systems on Node.js / NestJS, React, Vue.js, and AWS. Delivered enterprise-grade systems — from an aviation platform used daily by 500+ engineers to high-traffic food-ordering systems for KFC and Pizza Hut.",
        "Now Tech Lead at Tavanbogd Nura LLC, rolling out AI agents and an AI-driven software development lifecycle across the group. Experienced team lead and mentor with a Master of Arts in Leadership (2024).",
      ],
      servicesHeading: "How we can work together",
      services: [
        {
          title: "AI SDLC adoption",
          description:
            "Evaluate AI coding agents and tooling, then roll out AI-assisted workflows across requirements, design, code, review, testing, and documentation — with team guidelines and guardrails.",
        },
        {
          title: "AI agents on your data",
          description:
            "Least-privilege AI agents over enterprise data, with evals that check every number in an answer, on AWS Bedrock.",
        },
        {
          title: "Full stack platforms",
          description:
            "Multi-tenant SaaS, web and mobile, payment and POS integrations, CI/CD on AWS — from architecture to production.",
        },
        {
          title: "Legacy modernization",
          description:
            "Modernize live systems without downtime: Vue 2 → React + TypeScript, PHP → NestJS, monolith → services, with tests from day one.",
        },
      ],
    },
    projects: {
      heading: "Featured work",
      intro: "Projects where I took on complex problems and delivered measurable results.",
      visit: "Visit site",
      items: [
        {
          title: "TBG HR Agent",
          client: "Tavan Bogd Group",
          year: "2026",
          summary:
            "Built solo with Claude Code: an HR dashboard and a Mongolian-language AI chat agent over Odoo 19 and attendance data, both fed from one secure, read-only data layer.",
          result:
            "Bedrock Sonnet passed 15/15 on an eval that checks every number (a local model scored 9/15 and was rejected); security tests 15/15.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call-center app",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Audited an end-of-life, untested Vue 2 app and rebuilt it solo in React 18 + TypeScript, integrated with 7 backend services (~14,300 lines of TypeScript).",
          result: "Eliminated lost orders on session expiry; introduced testing from zero (17 test files).",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC rollout",
          client: "TBG Tech LLC",
          year: "2025 – 2026",
          summary:
            "Researched and evaluated AI coding agents and tooling, then implemented an AI-driven software development lifecycle.",
          result: "AI-assisted workflows with team guidelines and guardrails at every stage, from requirements to documentation.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Tavan Bogd Group",
          year: "2022 – 2023",
          summary:
            "Architected and led, from scratch, the group's internal helpdesk replacing requests scattered across email, chat, and phone: auto-routing, SLA alerts, Odoo SSO.",
          result: "1,500–2,000 tickets a month; resolution time cut from ~3 h to ~1 h; ~160 person-hours saved monthly.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC ordering & delivery",
          client: "KFC Mongolia",
          year: "4 years",
          summary:
            "Lead developer in a 2-person backend team: split a monolith into 7 independent services (236 API endpoints) and consolidated 8 payment providers behind one service.",
          result: "Orders sent to branch POS are never silently lost; payments are confirmed automatically within minutes.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 –",
          summary: "Architected and led development of a multi-tenant discipleship learning platform (web + mobile) for churches.",
          result:
            "Each organization's data reliably isolated; a schema-driven course engine where new lesson types ship without database changes.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2025",
          summary:
            "Migrated a live PHP platform to NestJS without taking it offline, then extended it into a multi-tenant platform where users run sites on their own domains.",
          result: "Wrote ~75% of the code; fixed query performance and added a CDN image pipeline and bulk email.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS",
          client: "Civil Aviation Authority of Mongolia",
          year: "2014 – 2018",
          summary:
            "A 12-module platform digitizing air-navigation operations: resource planning, equipment tracking, HR, training, reporting.",
          result: "Used daily by 500+ engineers, technicians, and managers.",
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
            "Leading AI automation of group-level policy and organizational processes.",
            "Turning ideas into working prototypes with AI coding agents, then hardening them for production through architecture review and tests.",
          ],
        },
        {
          period: "2022 — 2025",
          role: "Full Stack Developer",
          org: "Tavanbogd Nura LLC",
          highlights: [
            "Built backend services and admin dashboards for KFC and Pizza Hut ordering, delivery, and call-center platforms on AWS.",
            "Led code reviews, established coding standards, and mentored junior developers.",
          ],
        },
        {
          period: "2021 — 2022",
          role: "System Analyst",
          org: "Tavanbogd Solutions LLC",
          highlights: [
            "Gathered requirements and designed workflows for e-commerce, order management, and call-center integrations across TBG Group subsidiaries.",
          ],
        },
        {
          period: "2012 — 2019",
          role: "Technologies Engineer",
          org: "Civil Aviation Authority of Mongolia",
          highlights: ["Built the ECNS platform and led the internal IT team: training, procurement, and technology upgrades."],
        },
        {
          period: "2009 — 2011",
          role: "CEO & Software Engineer",
          org: "Megaspire LLC & Interactive LLC",
          highlights: ["Delivered ERP, HRM, and CMS solutions, including the “Diamond” ERP."],
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
        body: "Rolling out an AI SDLC across the group and building secure AI agents that work on enterprise data.",
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
        { name: "Community", items: ["Faith Tech Community — create and organizer (2023 — present)"] },
      ],
    },
    contactSection: {
      heading: "Get in touch",
      body: "Have a project, an AI adoption initiative, or need technical advice? Write to me — I'd be glad to hear from you.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      location: "Ulaanbaatar, Mongolia",
      cardTitle: "Let's work together",
      cardBody: "Send a few sentences about your project.",
      cardCta: "Write an email",
    },
    footer: { tagline: "Tech Lead — Building platforms. Making AI useful.", rights: "All rights reserved." },
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
