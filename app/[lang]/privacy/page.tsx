import { Suspense } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import PrivacyClient from "@/components/privacy/PrivacyClient";
import { staticParams } from "@/i18n/i18n";

export async function generateStaticParams() {
  return staticParams;
}
export default function PrivacyPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PrivacyClient />
    </Suspense>
  );
}

