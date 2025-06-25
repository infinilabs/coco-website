import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";

export default function Download() {
  return (
    <Suspense>
      <DownloadPageClient />
    </Suspense>
  );
}