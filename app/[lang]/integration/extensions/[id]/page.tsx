"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import IntegrationDetail from "@/components/integration/ExtensionDetail";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function ExtensionDetailPage() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;
  const extensionId = params.id as string;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <IntegrationDetail lang={lang} extensionId={extensionId} />
    </Suspense>
  );
}