"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import DatasourceIndex from "@/components/integration/Datasource";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Datasource() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <DatasourceIndex lang={lang} />
    </Suspense>
  );
}
