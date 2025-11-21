"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import MCPIndex from "@/components/integration/MCP";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function MCP() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <MCPIndex lang={lang} />
    </Suspense>
  );
}
