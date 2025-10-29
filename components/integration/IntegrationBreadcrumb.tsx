"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getDictionarySync } from "@/i18n/i18n";

type IntegrationType =
  | "extensions"
  | "connector"
  | "assistant"
  | "mcp"
  | "llm-provider"
  | "datasource"
  | "rsa";

interface IntegrationBreadcrumbProps {
  lang: string;
  type: IntegrationType;
  currentLabel?: string;
  className?: string;
}

export default function IntegrationBreadcrumb({
  lang,
  type,
  currentLabel,
  className,
}: IntegrationBreadcrumbProps) {
  const dict = getDictionarySync(lang);
  const i = dict?.Integration;

  const moduleTitleMap: Record<IntegrationType, string> = {
    extensions: i?.modules?.extensions?.title || "Extensions",
    connector: i?.modules?.connector?.title || "Connector",
    assistant: i?.modules?.aiAssistant?.title || "AI Assistant",
    mcp: i?.modules?.mcpServer?.title || "MCP Server",
    "llm-provider": "LLM Provider",
    datasource: "Datasource",
    rsa: "RSA",
  };

  const integrationLabel = i?.integration || "Integration";
  const moduleLabel = moduleTitleMap[type] || type;

  return (
    <div className={className}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${lang}/integration`}>{integrationLabel}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {currentLabel ? (
              <BreadcrumbLink asChild>
                <Link href={`/${lang}/integration/${type}`}>{moduleLabel}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{moduleLabel}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {currentLabel && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}