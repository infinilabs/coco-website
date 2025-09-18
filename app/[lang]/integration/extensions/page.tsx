"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import ExtensionIndex from "@/components/integration/Extension";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Extension() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ExtensionIndex lang={lang} />
    </Suspense>
  );
}
