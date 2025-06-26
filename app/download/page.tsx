import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";
import LoadingScreen from "@/components/LoadingScreen";

export default function Download() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DownloadPageClient />
    </Suspense>
  );
}