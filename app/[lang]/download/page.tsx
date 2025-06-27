import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";
import LoadingScreen from "@/components/LoadingScreen";
import { staticParams } from "@/i18n/i18n";

export async function generateStaticParams() {
  return staticParams;
}
export default function Download({ params }: { params: { lang: string } }) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DownloadPageClient lang={params.lang} />
    </Suspense>
  );
}

