"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import IntegrationDetail from "@/components/integration/ExtensionDetail";
import { getDictionary } from "@/i18n/i18n";

interface ExtensionDetailClientProps {
  lang: string;
}

export default function ExtensionDetailClient({
  lang,
}: ExtensionDetailClientProps) {
  const searchParams = useSearchParams();
  const extensionId = searchParams.get("id");
  const [locale, setLocale] = useState<any>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(lang);
      setLocale(dict);
    };
    loadDictionary();
  }, [lang]);

  if (!extensionId) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {locale?.Integration?.extensionNotFound}
          </h1>
          <p className="text-gray-600">
            {locale?.Integration?.extensionNotFoundDesc}
          </p>
        </div>
      </div>
    );
  }

  return <IntegrationDetail lang={lang} extensionId={extensionId} />;
}

