import { Suspense } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import PrivacyClient from "@/components/privacy/PrivacyClient";

export default function PrivacyPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PrivacyClient />
    </Suspense>
  );
}

