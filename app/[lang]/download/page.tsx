import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Download({ params }: { params: { lang: string } }) {
  const lang = params.lang || defaultLocale;
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DownloadPageClient lang={lang} />
    </Suspense>
  );
}

