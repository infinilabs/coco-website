"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Download() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <DownloadPageClient lang={lang} />
    </Suspense>
  );
}

