import type { ReactNode } from "react";
import { brand, contact, langs, site, type Lang } from "@/content/site";
import { paths } from "@/components/RootHtml";
import { HeroRain } from "@/components/HeroRain";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, LinkedIn, Mail, MapPin } from "@/components/icons";

const container = "mx-auto w-full max-w-6xl px-6";
const h2 = "text-3xl font-bold tracking-[-0.04em] sm:text-4xl";
const monoLabel = "font-mono text-xs uppercase tracking-[0.12em] text-muted";
const pressable = "transition-[transform,background-color,box-shadow] duration-150 ease-out active:scale-[0.96]";
const iconButton = `grid size-10 place-items-center rounded-full text-lg text-foreground hover:bg-secondary ${pressable}`;

function Section({ id, className = "", children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`py-24 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

function ExternalLink({ href, newTab, className, children }: { href: string; newTab: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}

export function Portfolio({ lang }: { lang: Lang }) {
  const t = site[lang];
  const otherLang = langs.find((l) => l !== lang)!;
  const navItems = ["about", "projects", "experience", "contact"] as const;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
        <div className={`${container} flex flex-wrap items-center gap-x-6`}>
          <a href="#top" className="flex h-16 items-center font-mono text-lg font-bold tracking-tight">
            {brand}
          </a>
          <nav aria-label={t.a11y.primaryNav} className="order-last -mx-3 w-full md:order-none md:mx-0 md:w-auto md:flex-1">
            <ul className="flex justify-between pb-2 text-sm text-muted md:justify-center md:gap-2 md:pb-0">
              {navItems.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="block rounded-full px-3 py-2 hover:text-foreground">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <ExternalLink href={contact.linkedin} newTab={t.a11y.newTab} className={iconButton}>
              <LinkedIn />
              <span className="sr-only">{t.a11y.linkedin}</span>
            </ExternalLink>
            <a href={`mailto:${contact.email}`} className={iconButton}>
              <Mail />
              <span className="sr-only">{t.a11y.email}</span>
            </a>
            <a
              href={paths[otherLang]}
              hrefLang={otherLang}
              aria-label={t.a11y.switchLang}
              className={`ml-1 grid h-10 min-w-10 place-items-center rounded-full px-3 font-mono text-xs font-bold uppercase shadow-card hover:bg-secondary ${pressable}`}
            >
              {otherLang}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24" data-hero>
          <HeroRain />
          <Reveal variant="hero" className={`${container} relative`}>
            <p
              data-reveal
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-muted"
            >
              <span aria-hidden>&gt;_</span>
              {t.hero.badge}
            </p>
            <h1 className="mt-8 text-5xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              <span data-reveal className="block">
                {t.hero.titleLine1}
              </span>
              <span data-reveal className="block text-muted">
                {t.hero.titleLine2}
              </span>
            </h1>
            <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {t.hero.introBefore}
              <strong className="font-semibold text-foreground">{t.hero.name}</strong>
              {t.hero.introAfter}
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={`inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 ${pressable}`}
              >
                {t.hero.cta}
                <ArrowRight className="text-base" />
              </a>
              <a
                href="#contact"
                className={`inline-flex h-12 items-center rounded-full bg-background px-6 text-sm font-medium shadow-card hover:bg-secondary ${pressable}`}
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </section>

        <Section id="about" className="border-t border-border">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <h2 id="about-heading" className={h2}>
              {t.about.heading}
            </h2>
            <div className="max-w-[70ch] space-y-5 text-lg leading-relaxed">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <h3 className="mt-20 text-xl font-bold tracking-tight">{t.about.servicesHeading}</h3>
          <ul className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {t.about.services.map((s) => (
              <li key={s.title} className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects">
          <h2 id="projects-heading" className={h2}>
            {t.projects.heading}
          </h2>
          <p className="mt-3 max-w-xl text-lg text-muted">{t.projects.intro}</p>
          <Reveal variant="cards">
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.projects.items.map((p) => (
                <li key={p.title} data-reveal className="flex">
                  <article className="flex w-full flex-col rounded-2xl bg-background p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                    <p className="font-mono text-xs text-muted">
                      {p.client} · {p.year}
                    </p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                    <p className="mt-4 text-sm leading-relaxed font-medium">{p.result}</p>
                    <div className="mt-auto pt-6">
                      <ul className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <li key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-foreground">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {p.href && (
                        <ExternalLink
                          href={p.href}
                          newTab={t.a11y.newTab}
                          className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                        >
                          {t.projects.visit}
                          <ArrowUpRight />
                          <span className="sr-only">: {p.title}</span>
                        </ExternalLink>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section id="experience" className="grainy bg-secondary/30">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 id="experience-heading" className={h2}>
                {t.experience.heading}
              </h2>
              <ol className="mt-10 space-y-10 border-l border-border">
                {t.experience.items.map((e) => (
                  <li key={e.period + e.org} className="relative pl-8">
                    <span aria-hidden className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-muted/50" />
                    <p className={`${monoLabel} tabular-nums`}>{e.period}</p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight">{e.role}</h3>
                    <p className="mt-1 text-sm font-medium">{e.org}</p>
                    <ul className="mt-3 space-y-1.5 leading-relaxed text-muted">
                      {e.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className={h2}>{t.stack.heading}</h2>
              <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {t.stack.groups.map((g) => (
                  <div key={g.name}>
                    <h3 className={monoLabel}>{g.name}</h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li key={item} className="rounded-lg bg-background px-3 py-1.5 text-sm shadow-card">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-primary p-6 text-primary-foreground">
                <h3 className="text-lg font-bold">{t.stack.now.title}</h3>
                <p className="mt-2 leading-relaxed text-primary-foreground/75">{t.stack.now.body}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="credentials">
          <h2 id="credentials-heading" className={h2}>
            {t.credentials.heading}
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.credentials.groups.map((g) => (
              <div key={g.name}>
                <h3 className={monoLabel}>{g.name}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" className="border-t border-border">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 id="contact-heading" className={h2}>
                {t.contactSection.heading}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{t.contactSection.body}</p>
              <ul className="mt-10 space-y-6">
                <li className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-xl">
                    <Mail />
                  </span>
                  <div>
                    <p className={monoLabel}>{t.contactSection.emailLabel}</p>
                    <a href={`mailto:${contact.email}`} className="font-medium underline-offset-4 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-xl">
                    <LinkedIn />
                  </span>
                  <div>
                    <p className={monoLabel}>{t.contactSection.linkedinLabel}</p>
                    <ExternalLink
                      href={contact.linkedin}
                      newTab={t.a11y.newTab}
                      className="font-medium underline-offset-4 hover:underline"
                    >
                      {t.hero.name}
                    </ExternalLink>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-xl">
                    <MapPin />
                  </span>
                  <div>
                    <p className={monoLabel}>{t.contactSection.locationLabel}</p>
                    <p className="font-medium">{t.contactSection.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-secondary/50 p-8 shadow-card">
              <h3 className="text-2xl font-bold tracking-tight">{t.contactSection.cardTitle}</h3>
              <p className="mt-3 leading-relaxed text-muted">{t.contactSection.cardBody}</p>
              <a
                href={`mailto:${contact.email}`}
                className={`mt-8 flex h-12 items-center justify-center gap-2 rounded-xl bg-primary font-medium text-primary-foreground hover:bg-primary/90 ${pressable}`}
              >
                {t.contactSection.cardCta}
                <Mail />
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-12">
        <div className={container}>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-mono text-lg font-bold tracking-tight">{brand}</p>
              <p className="mt-2 text-sm text-muted">{t.footer.tagline}</p>
            </div>
            <div className="flex gap-1">
              <ExternalLink href={contact.linkedin} newTab={t.a11y.newTab} className={iconButton}>
                <LinkedIn />
                <span className="sr-only">{t.a11y.linkedin}</span>
              </ExternalLink>
              <a href={`mailto:${contact.email}`} className={iconButton}>
                <Mail />
                <span className="sr-only">{t.a11y.email}</span>
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-xs text-muted">
            © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
