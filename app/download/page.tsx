import { Suspense } from "react";

import DownloadPageClient from "@/components/download/DownloadPageClient";

export default function Download() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadPageClient />
    </Suspense>
  );
}