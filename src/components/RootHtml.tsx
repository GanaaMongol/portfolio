import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { site, type Lang } from "@/content/site";
import "@/app/globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin", "cyrillic", "cyrillic-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic", "cyrillic-ext"] });

export const paths: Record<Lang, string> = { mn: "/", en: "/en/" };

export function buildMetadata(lang: Lang): Metadata {
  const { title, description } = site[lang].meta;
  return {
    metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
    title,
    description,
    alternates: { canonical: paths[lang], languages: paths },
    openGraph: { title, description, url: paths[lang], type: "website", locale: lang === "mn" ? "mn_MN" : "en_US" },
  };
}

export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        {/* Runs before any content is parsed: marks JS as available so the hero entrance has no flash (globals.css). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
