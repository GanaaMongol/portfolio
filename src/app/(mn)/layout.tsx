import { buildMetadata, RootHtml } from "@/components/RootHtml";

export const metadata = buildMetadata("mn");

export default function Layout({ children }: LayoutProps<"/">) {
  return <RootHtml lang="mn">{children}</RootHtml>;
}
