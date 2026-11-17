// All portfolio content lives here (spec FR-3). Source: docs/cv/CV-merged.md.
// Replace every "TODO" before deploying — `make check-content` fails while any remain.

export const langs = ["mn", "en"] as const;
export type Lang = (typeof langs)[number];

export type SiteContent = {
  meta: { title: string; description: string };
  nav: { about: string; services: string; projects: string; experience: string; contact: string };
  hero: { name: string; role: string; tagline: string; cta: string; secondaryCta: string };
  about: { heading: string; body: string[]; stats: { value: string; label: string }[] };
  services: { heading: string; items: { title: string; description: string }[] };
  projects: {
    heading: string;
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
  skills: { heading: string; groups: { name: string; items: string[] }[] };
  credentials: { heading: string; groups: { name: string; items: string[] }[] };
  contactSection: { heading: string; body: string; email: string; phone: string; locationLabel: string; location: string };
  footer: { rights: string };
};

// Language-independent details (spec §4). Owner must approve what is public (spec C-1).
export const contact = {
  email: "TODO@example.com",
  phone: "+976 TODO",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/TODO" }],
};

const tags = {
  hrAgent: ["AWS Bedrock", "MCP", "Python", "Trino", "Docker"],
  kfcCallCenter: ["React 18", "TypeScript", "TanStack Query", "Cognito", "Vitest"],
  aiSdlc: ["Claude Code", "AI agents", "Guardrails"],
  itsupport: ["Node.js", "PostgreSQL", "Next.js", "Socket.io"],
  kfcBackend: ["Node.js", "Express", "MySQL", "AWS"],
  dagaldagch: ["Next.js", "Fastify", "Supabase", "AWS"],
  vip76: ["NestJS", "TypeORM", "MySQL", "S3/CloudFront"],
  ecns: ["Java", "PHP", "MSSQL"],
};

const skills = {
  ai: ["AWS Bedrock (Claude)", "MCP servers", "LLM agents & evals", "Claude Code", "Starburst (Trino)"],
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "TanStack Query", "Redux Toolkit", "Ant Design"],
  backend: ["Node.js", "NestJS", "Fastify", "Express", "TypeORM", "Python", "Java", "PHP"],
  data: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "REST", "GraphQL", "WebSocket"],
  cloud: ["AWS (EC2, S3, Lambda, RDS, Cognito, Amplify, CloudFront)", "Docker", "GitLab CI/CD", "GitHub Actions"],
  process: ["Vitest", "Testing Library", "MSW", "Jira", "Agile/Scrum"],
};

export const site: Record<Lang, SiteContent> = {
  mn: {
    meta: {
      title: "Гандаваа Дугарсүрэн — Tech Lead, Full Stack хөгжүүлэгч",
      description:
        "10+ жилийн туршлагатай Tech Lead. Вэб платформыг эхнээс нь дуустал зохиож, бүтээж, өргөжүүлдэг; багийн хөгжүүлэлтэд AI нэвтрүүлдэг.",
    },
    nav: { about: "Тухай", services: "Үйлчилгээ", projects: "Төслүүд", experience: "Туршлага", contact: "Холбогдох" },
    hero: {
      name: "Гандаваа Дугарсүрэн",
      role: "Tech Lead · Full Stack хөгжүүлэгч",
      tagline:
        "Вэб платформыг эхнээс нь дуустал зохиож, бүтээж, өргөжүүлдэг — мөн багийн програм хангамж хөгжүүлэлтэд AI-г аюулгүй, үр дүнтэй нэвтрүүлдэг.",
      cta: "Холбогдох",
      secondaryCta: "Төслүүдийг үзэх",
    },
    about: {
      heading: "Тухай",
      body: [
        "Node.js / NestJS, React, Vue.js болон AWS дээр суурилсан вэб системийг 10 гаруй жил зохиож, хөгжүүлж, өргөжүүлж ирсэн Full Stack хөгжүүлэгч. Улсын нисэхийн 500+ хэрэглэгчтэй платформоос эхлээд KFC, Pizza Hut-ийн өндөр ачаалалтай захиалгын систем хүртэл байгууллагын түвшний шийдлүүдийг хүлээлгэн өгсөн.",
        "Одоо Tavanbogd Nura ХХК-д Tech Lead-ээр ажиллаж, AI агент, AI-д суурилсан хөгжүүлэлтийн процесс (AI SDLC)-ийг группийн хэмжээнд нэвтрүүлж байна. Багийг удирдаж, залуу хөгжүүлэгчдэд зөвлөдөг; Удирдлагын магистр (2024).",
      ],
      stats: [
        { value: "10+", label: "жилийн туршлага" },
        { value: "500+", label: "өдөр бүр хэрэглэдэг хэрэглэгчтэй платформ бүтээсэн" },
        { value: "1,500–2,000", label: "сард шийдвэрлэгддэг тасалбар (helpdesk)" },
      ],
    },
    services: {
      heading: "Юугаар хамтран ажиллах вэ",
      items: [
        {
          title: "AI SDLC нэвтрүүлэлт",
          description:
            "AI coding агент, хэрэгслийг үнэлж, шаардлага, дизайн, код, review, тест, баримтжуулалтын шат бүрт AI-тай ажлын урсгал, багийн дүрэм, хамгаалалтыг нэвтрүүлнэ.",
        },
        {
          title: "AI агент ба өгөгдөл",
          description:
            "Байгууллагын өгөгдөл дээр аюулгүй AI агент: эрх хязгаарласан MCP сервер, хариултын тоо бүрийг шалгадаг eval, аудит, AWS Bedrock.",
        },
        {
          title: "Full stack платформ хөгжүүлэлт",
          description:
            "Олон түрээслэгчтэй (multi-tenant) SaaS, вэб ба мобайл, төлбөр, POS интеграцчлал, AWS дээрх CI/CD — архитектураас production хүртэл.",
        },
        {
          title: "Хуучин системийг шинэчлэх",
          description:
            "Ажиллаж буй системийг зогсоолгүй шинэчилнэ: Vue 2 → React + TypeScript, PHP → NestJS, monolith → бие даасан сервисүүд, тестийг тэгээс нэвтрүүлнэ.",
        },
      ],
    },
    projects: {
      heading: "Онцлох төслүүд",
      visit: "Сайт үзэх",
      items: [
        {
          title: "TBG HR Agent — HR самбар ба AI чат агент",
          client: "Таван Богд Групп",
          year: "2026",
          summary:
            "Odoo 19 болон ирцийн өгөгдөл (Starburst/Trino) дээр нэг аюулгүй өгөгдлийн давхаргаас тэжээгддэг HR самбар, монгол хэлтэй AI агентыг Claude Code ашиглан ганцаараа бүтээсэн. 16 тогтмол хэрэгсэлтэй, зөвхөн уншдаг MCP сервер, эрхийг хэрэглэгчийн JWT-ээр хянана.",
          result:
            "Тоо бүрийг шалгадаг eval-д Bedrock Sonnet 15/15 давсан (локал загвар 9/15-аар хасагдсан); аюулгүй байдлын тест 15/15.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call center аппыг дахин бичсэн",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Дэмжлэг нь дууссан, тестгүй Vue 2 аппыг (10 critical, 10 high асуудалтай) аудитлаад React 18 + TypeScript дээр ганцаараа дахин бүтээсэн: 7 backend сервистэй интеграцчлагдсан, ~14,300 мөр TypeScript.",
          result:
            "Session дуусахад захиалга алдагдах асуудлыг бүрэн арилгасан; тестийг тэгээс нэвтрүүлсэн (17 тест файл), dev/prod CI/CD тусгаарласан.",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC нэвтрүүлэлт",
          client: "TBG Tech ХХК",
          year: "2025 – 2026",
          summary:
            "AI coding агент, хэрэгслийг судалж үнэлээд програм хангамж хөгжүүлэлтийн бүх шатанд AI-тай ажлын урсгал нэвтрүүлсэн.",
          result: "Шаардлагаас баримтжуулалт хүртэлх шат бүрт багийн удирдамж, хамгаалалт (guardrails) бий болсон.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Таван Богд Групп",
          year: "2022 – 2023",
          summary:
            "Имэйл, чат, утсаар тархсан IT хүсэлтийг орлох дотоод helpdesk-ийг эхнээс нь зохиож, хөгжүүлэлтийг удирдсан: автомат хуваарилалт, SLA сэрэмжлүүлэг, Odoo SSO, бодит цагийн мэдэгдэл.",
          result: "Сард 1,500–2,000 тасалбар; шийдвэрлэх дундаж хугацаа ~3 цагаас ~1 цаг болж, сард ~160 хүн-цаг хэмнэсэн.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC захиалга, хүргэлтийн backend",
          client: "KFC Mongolia",
          year: "4 жил",
          summary:
            "2 хүний backend багийн ахлах хөгжүүлэгч: monolith-ийг 7 бие даасан сервис (236 API endpoint) болгон задалж, 8 төлбөрийн үйлчилгээг нэг төлбөрийн сервист нэгтгэсэн.",
          result:
            "POS-д илгээсэн захиалга чимээгүй алдагдахаа больсон; callback ирээгүй төлбөрийг минутын дотор автоматаар баталгаажуулдаг.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 –",
          summary:
            "Сүмүүдэд зориулсан олон түрээслэгчтэй сургалтын платформ (вэб + мобайл)-ыг архитектурлаж, хөгжүүлэлтийг удирдсан.",
          result:
            "Postgres Row-Level Security-тэй давхар хамгаалалт; шинэ блокийн төрлийг DB migration-гүйгээр нэмдэг schema-д суурилсан сургалтын хөдөлгүүр.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2026",
          summary:
            "Ажиллаж буй PHP (CodeIgniter) контент платформыг унтраалгүйгээр NestJS руу шилжүүлж, хэрэглэгч бүр өөрийн домэйн дээр сайттай болдог multi-tenant платформ болгосон (64 entity, 20 модуль).",
          result: "Кодын ~75%-ийг бичсэн; query-ийн гүйцэтгэлийг сайжруулж, S3 + CloudFront зураг боловсруулалт, SES имэйл нэвтрүүлсэн.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS — нисэхийн үйл ажиллагааны платформ",
          client: "Иргэний нисэхийн ерөнхий газар",
          year: "2010 – 2019",
          summary:
            "Агаарын навигацийн үйл ажиллагааг (нөөц төлөвлөлт, тоног төхөөрөмж, хүний нөөц, сургалт, тайлан) цахимжуулсан 12 модультай платформыг архитектурлаж хөгжүүлсэн.",
          result: "500+ инженер, техникч, менежер өдөр бүр ашигладаг.",
          tags: tags.ecns,
          href: null,
        },
      ],
    },
    experience: {
      heading: "Ажлын туршлага",
      items: [
        {
          period: "2025 — одоо",
          role: "Tech Lead",
          org: "Tavanbogd Nura ХХК",
          highlights: [
            "Группийн бодлого, зохион байгуулалтын процессыг AI-аар автоматжуулах ажлыг удирдаж байна.",
            "AI агентаар санааг хурдан прототип болгож, архитектурын review, тест-ээр production-д бэлэн болгодог.",
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
          role: "Технологийн инженер (Full Stack)",
          org: "Иргэний нисэхийн ерөнхий газар, CNS хэлтэс",
          highlights: [
            "ECNS платформыг бүтээж, дотоод IT багийг удирдсан (сургалт, худалдан авалт, технологийн шинэчлэл).",
          ],
        },
        {
          period: "2007 — 2010",
          role: "Гүйцэтгэх захирал / Програм хангамжийн инженер",
          org: "Megaspire ХХК, Interactive ХХК",
          highlights: ["ERP, HRM, CMS шийдлүүд, тэр дундаа “Diamond” ERP-ийг хүлээлгэн өгсөн."],
        },
      ],
    },
    skills: {
      heading: "Ур чадвар",
      groups: [
        { name: "AI ба өгөгдөл", items: skills.ai },
        { name: "Frontend", items: skills.frontend },
        { name: "Backend", items: skills.backend },
        { name: "Өгөгдлийн сан ба API", items: skills.data },
        { name: "Cloud ба DevOps", items: skills.cloud },
        { name: "Тест ба процесс", items: skills.process },
      ],
    },
    credentials: {
      heading: "Боловсрол ба шагнал",
      groups: [
        {
          name: "Боловсрол",
          items: [
            "Удирдлагын магистр — Bible School of MAoG, 2024",
            "Бакалавр, Програм хангамж — ШУТИС, 2006",
          ],
        },
        {
          name: "Шагнал",
          items: [
            "Оны шилдэг залуу инженер (2016) — Монголын Залуучуудын Холбоо",
            "Шилдэг инженер (2017) — ИНЕГ, CNS хэлтэс",
            "Шилдэг ажилтан (2015) — ИНЕГ",
          ],
        },
        {
          name: "Хэл",
          items: ["Монгол (төрөлх)", "Англи (ажлын түвшин)", "Орос (дунд)", "Япон (анхан)"],
        },
        {
          name: "Нийгэмлэг",
          items: ["Faith Tech Community (2023 — одоо) — ментор, зохион байгуулагч"],
        },
      ],
    },
    contactSection: {
      heading: "Хамтран ажиллая",
      body: "Шинэ төсөл, AI нэвтрүүлэлт, техникийн зөвлөгөөний санал байвал холбогдоно уу.",
      email: "Имэйл",
      phone: "Утас",
      locationLabel: "Байршил",
      location: "Улаанбаатар, Монгол",
    },
    footer: { rights: "Бүх эрх хуулиар хамгаалагдсан." },
  },
  en: {
    meta: {
      title: "Gandavaa Dugarsuren — Tech Lead, Full Stack Developer",
      description:
        "Tech Lead with 10+ years of experience designing, building, and scaling web platforms end-to-end, and bringing AI into how teams build software.",
    },
    nav: { about: "About", services: "Services", projects: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      name: "Gandavaa Dugarsuren",
      role: "Tech Lead · Full Stack Developer",
      tagline:
        "I design, build, and scale web platforms end-to-end — and bring AI into how teams build software, safely and measurably.",
      cta: "Get in touch",
      secondaryCta: "View projects",
    },
    about: {
      heading: "About",
      body: [
        "Full Stack Developer with 10+ years of experience designing, building, and scaling web applications with Node.js / NestJS, React, Vue.js, and AWS. Delivered enterprise-grade systems — from a national aviation platform with 500+ users to high-traffic food-ordering systems for KFC and Pizza Hut.",
        "Now Tech Lead at Tavanbogd Nura LLC, rolling out AI agents and an AI-driven software development lifecycle across the group. Experienced team lead and mentor with a Master of Arts in Leadership (2024).",
      ],
      stats: [
        { value: "10+", label: "years of experience" },
        { value: "500+", label: "daily users on a platform I built" },
        { value: "1,500–2,000", label: "helpdesk tickets resolved monthly" },
      ],
    },
    services: {
      heading: "How we can work together",
      items: [
        {
          title: "AI SDLC adoption",
          description:
            "Evaluate AI coding agents and tooling, then roll out AI-assisted workflows across requirements, design, coding, review, testing, and documentation — with team guidelines and guardrails.",
        },
        {
          title: "AI agents on your data",
          description:
            "Secure AI agents over enterprise data: least-privilege MCP servers, evals that check every number in an answer, auditing, AWS Bedrock.",
        },
        {
          title: "Full stack platform development",
          description:
            "Multi-tenant SaaS, web and mobile, payment and POS integrations, CI/CD on AWS — from architecture to production.",
        },
        {
          title: "Legacy modernization",
          description:
            "Modernize live systems without downtime: Vue 2 → React + TypeScript, PHP → NestJS, monolith → independent services, with tests from day one.",
        },
      ],
    },
    projects: {
      heading: "Selected projects",
      visit: "Visit site",
      items: [
        {
          title: "TBG HR Agent — HR dashboard + AI chat agent",
          client: "Tavan Bogd Group",
          year: "2026",
          summary:
            "Built solo with Claude Code: an HR dashboard and a Mongolian-language AI agent fed from one secure data layer over Odoo 19 and attendance data in Starburst (Trino). Read-only MCP server with 16 fixed tools; access enforced by the user's JWT.",
          result:
            "Bedrock Sonnet passed 15/15 on an eval that checks every number (a local model scored 9/15 and was rejected); security smoke tests 15/15.",
          tags: tags.hrAgent,
          href: null,
        },
        {
          title: "KFC call-center app rewrite",
          client: "KFC Mongolia",
          year: "2026",
          summary:
            "Audited an end-of-life, untested Vue 2 app (10 critical, 10 high-severity issues) and rebuilt it solo in React 18 + TypeScript, integrated with 7 backend services (~14,300 lines of TypeScript).",
          result:
            "Eliminated lost orders on session expiry; introduced testing from zero (17 test files) and separate dev/prod CI/CD.",
          tags: tags.kfcCallCenter,
          href: null,
        },
        {
          title: "AI SDLC rollout",
          client: "TBG Tech LLC",
          year: "2025 – 2026",
          summary:
            "Researched and evaluated AI coding agents and tooling, then implemented an AI-driven software development lifecycle.",
          result: "AI-assisted workflows with team guidelines and guardrails across every stage, from requirements to documentation.",
          tags: tags.aiSdlc,
          href: null,
        },
        {
          title: "IT Support helpdesk",
          client: "Tavan Bogd Group",
          year: "2022 – 2023",
          summary:
            "Architected and led, from scratch, the group's internal helpdesk replacing requests scattered across email, chat, and phone: auto-routing, SLA alerts, Odoo SSO, real-time notifications.",
          result: "1,500–2,000 tickets a month; average resolution time cut from ~3 h to ~1 h; ~160 person-hours saved monthly.",
          tags: tags.itsupport,
          href: null,
        },
        {
          title: "KFC ordering & delivery backend",
          client: "KFC Mongolia",
          year: "4 years",
          summary:
            "Lead developer in a 2-person backend team: split a monolith into 7 independent services (236 API endpoints) and consolidated 8 payment providers behind a single payment service.",
          result:
            "Orders sent to branch POS are never silently lost; paid orders whose callback never arrived are confirmed automatically within minutes.",
          tags: tags.kfcBackend,
          href: null,
        },
        {
          title: "dagaldagch.mn",
          client: "FaithTech",
          year: "2025 –",
          summary: "Architected and led development of a multi-tenant discipleship LMS (web + mobile) for churches.",
          result:
            "Defense-in-depth tenant isolation with Postgres Row-Level Security; schema-driven course engine where new block types ship without DB migrations.",
          tags: tags.dagaldagch,
          href: "https://dagaldagch.mn",
        },
        {
          title: "vip76.mn",
          client: "vip76",
          year: "2024 – 2026",
          summary:
            "Migrated a live PHP (CodeIgniter) content platform to NestJS without taking it offline, then extended it into a multi-tenant platform where users run sites on their own domains (64 entities, 20 modules).",
          result: "Wrote ~75% of the code; fixed query performance and added an S3 + CloudFront image pipeline and SES mail.",
          tags: tags.vip76,
          href: "https://vip76.mn",
        },
        {
          title: "ECNS — aviation operations platform",
          client: "Civil Aviation Authority of Mongolia",
          year: "2010 – 2019",
          summary:
            "Architected and developed a 12-module platform digitizing air-navigation operations: resource planning, equipment tracking, HR, training, reporting.",
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
            "Turning ideas into working prototypes with AI coding agents, then hardening them for production through architecture review and automated tests.",
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
          period: "2010 — 2019",
          role: "Technologies Engineer (Full Stack)",
          org: "Civil Aviation Authority of Mongolia, CNS Division",
          highlights: ["Built the ECNS platform and led the internal IT team: training, procurement, and technology upgrades."],
        },
        {
          period: "2007 — 2010",
          role: "CEO / Software Engineer",
          org: "Megaspire LLC & Interactive LLC",
          highlights: ["Delivered ERP, HRM, and CMS solutions, including the “Diamond” ERP."],
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "AI & Data", items: skills.ai },
        { name: "Frontend", items: skills.frontend },
        { name: "Backend", items: skills.backend },
        { name: "Databases & APIs", items: skills.data },
        { name: "Cloud & DevOps", items: skills.cloud },
        { name: "Testing & Process", items: skills.process },
      ],
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
            "Young Engineer of the Year (2016) — Mongolian Youth Organization",
            "Best Engineer (2017) — Civil Aviation Authority, CNS Division",
            "Best Employee (2015) — Civil Aviation Authority",
          ],
        },
        {
          name: "Languages",
          items: ["Mongolian (native)", "English (working proficiency)", "Russian (intermediate)", "Japanese (basic)"],
        },
        {
          name: "Community",
          items: ["Faith Tech Community (2023 — present) — mentor and organizer"],
        },
      ],
    },
    contactSection: {
      heading: "Let's work together",
      body: "Have a project, an AI adoption initiative, or need technical advice? Get in touch.",
      email: "Email",
      phone: "Phone",
      locationLabel: "Location",
      location: "Ulaanbaatar, Mongolia",
    },
    footer: { rights: "All rights reserved." },
  },
};
