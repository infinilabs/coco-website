import { Suspense } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";
import MCPDetailClient from "./DetailClient";

interface ExtensionDetailPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ExtensionDetailPage({
  params,
}: ExtensionDetailPageProps) {
  const { lang } = await params;
  const currentLang = lang || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <MCPDetailClient lang={currentLang} />
    </Suspense>
  );
}
