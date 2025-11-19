"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import AssistantIndex from "@/components/integration/Assistant";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Assistant() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <AssistantIndex lang={lang} />
    </Suspense>
  );
}
