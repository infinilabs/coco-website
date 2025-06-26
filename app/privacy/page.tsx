import { Suspense } from "react";

import PrivacyClient from "@/components/privacy/PrivacyClient";
import LoadingScreen from "@/components/LoadingScreen";

export default function PrivacyPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PrivacyClient />
    </Suspense>
  );
}
