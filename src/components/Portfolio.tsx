import type { ReactNode } from "react";
import { contact, langs, site, type Lang } from "@/content/site";
import { paths } from "@/components/RootHtml";

const sectionIds = ["about", "services", "projects", "experience", "contact"] as const;

function Section({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-border py-16 sm:py-24">
      <h2 id={`${id}-heading`} className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function Portfolio({ lang }: { lang: Lang }) {
  const t = site[lang];
  const otherLang = langs.find((l) => l !== lang)!;

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3">
          <a href="#top" className="shrink-0 font-semibold">
            {t.hero.name}
          </a>
          <nav aria-label="Primary" className="-mx-1 flex flex-1 justify-end overflow-x-auto">
            <ul className="flex gap-1 text-sm text-muted">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="block whitespace-nowrap rounded-md px-2 py-1.5 hover:bg-surface hover:text-foreground">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={paths[otherLang]}
            hrefLang={otherLang}
            lang={otherLang}
            className="shrink-0 rounded-md border border-border px-2.5 py-1 text-sm font-medium uppercase hover:border-accent"
          >
            {otherLang}
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        <div className="py-20 sm:py-32">
          <p className="mb-4 font-medium text-accent">{t.hero.role}</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">{t.hero.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t.hero.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground hover:opacity-90">
              {t.hero.cta}
            </a>
            <a href="#projects" className="rounded-lg border border-border px-5 py-3 font-medium hover:border-accent">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <Section id="about" heading={t.about.heading}>
          <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4 text-lg leading-relaxed">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {t.about.stats.map((s) => (
                <div key={s.label} className="flex flex-col rounded-xl border border-border bg-surface p-4">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="order-first text-2xl font-bold sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="services" heading={t.services.heading}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {t.services.items.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-border bg-surface p-6">
                <span aria-hidden className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" heading={t.projects.heading}>
          <ul className="grid gap-6 md:grid-cols-2">
            {t.projects.items.map((p) => (
              <li key={p.title}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                  <p className="text-sm text-muted">
                    {p.client} · {p.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.summary}</p>
                  <p className="mt-4 rounded-lg bg-accent-soft px-4 py-3 font-medium">{p.result}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-sm font-medium text-accent hover:underline"
                      >
                        {t.projects.visit} ↗<span className="sr-only">: {p.title}</span>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" heading={t.experience.heading}>
          <ol className="space-y-8 border-l border-border pl-6">
            {t.experience.items.map((e) => (
              <li key={e.period + e.org} className="relative">
                <span aria-hidden className="absolute top-2 -left-[29px] size-2.5 rounded-full bg-accent" />
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {e.role} · <span className="font-normal">{e.org}</span>
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" heading={t.skills.heading}>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((g) => (
              <div key={g.name}>
                <dt className="font-semibold">{g.name}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="credentials" heading={t.credentials.heading}>
          <dl className="grid gap-8 sm:grid-cols-2">
            {t.credentials.groups.map((g) => (
              <div key={g.name}>
                <dt className="font-semibold">{g.name}</dt>
                <dd className="mt-2">
                  <ul className="space-y-1.5 text-muted">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" heading={t.contactSection.heading}>
          <p className="max-w-2xl text-2xl font-semibold sm:text-3xl">{t.contactSection.body}</p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-5">
              <dt className="text-sm text-muted">{t.contactSection.email}</dt>
              <dd className="mt-1 font-medium break-all">
                <a href={`mailto:${contact.email}`} className="hover:text-accent">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <dt className="text-sm text-muted">{t.contactSection.phone}</dt>
              <dd className="mt-1 font-medium">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <dt className="text-sm text-muted">{t.contactSection.locationLabel}</dt>
              <dd className="mt-1 font-medium">{t.contactSection.location}</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-3">
            {contact.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-border px-4 py-2 font-medium hover:border-accent"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
      </footer>
    </>
  );
}
