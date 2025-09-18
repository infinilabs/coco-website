"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import IntegrationIndex from "@/components/integration/index";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Integration() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <IntegrationIndex lang={lang} />
    </Suspense>
  );
}
