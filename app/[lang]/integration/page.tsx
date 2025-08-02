"use client";

import { useParams } from "next/navigation";
import { Suspense, useState } from "react";

import IntegrationDetail from "@/components/integration/ExtensionDetail";
import IntegrationIndex from "@/components/integration/index";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Integration() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  const [showDetail, setShowDetail] = useState(false);
  const [extensionId, setExtensionId] = useState<string>("");

  return (
    <Suspense fallback={<LoadingScreen />}>
      {showDetail && extensionId ? (
        <IntegrationDetail lang={lang} extensionId={extensionId!} />
      ) : (
        <IntegrationIndex
          lang={lang}
          onDetail={(id) => {
            setExtensionId(id);
            setShowDetail(true);
          }}
        />
      )}
    </Suspense>
  );
}
