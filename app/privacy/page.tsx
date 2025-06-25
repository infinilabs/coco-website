import { Suspense } from "react";

import PrivacyClient from "@/components/privacy/PrivacyClient";

export default function PrivacyPage() {
  return (
    <Suspense>
      <PrivacyClient />
    </Suspense>
  );
}
