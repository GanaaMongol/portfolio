import { buildMetadata, RootHtml } from "@/components/RootHtml";

export const metadata = buildMetadata("en");

export default function Layout({ children }: LayoutProps<"/">) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
