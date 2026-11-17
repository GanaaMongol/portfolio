import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { site, type Lang } from "@/content/site";
import "@/app/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"] });

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
    <html lang={lang} className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
