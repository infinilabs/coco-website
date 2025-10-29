"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import ConnectorIndex from "@/components/integration/Connector";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Connector() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ConnectorIndex lang={lang} />
    </Suspense>
  );
}
