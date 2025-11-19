"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import LLMIndex from "@/components/integration/LLM";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function LLM() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <LLMIndex lang={lang} />
    </Suspense>
  );
}
