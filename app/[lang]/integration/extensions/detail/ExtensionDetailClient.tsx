"use client";

import { useSearchParams } from "next/navigation";

import IntegrationDetail from "@/components/integration/ExtensionDetail";

interface ExtensionDetailClientProps {
  lang: string;
}

export default function ExtensionDetailClient({
  lang,
}: ExtensionDetailClientProps) {
  const searchParams = useSearchParams();
  const extensionId = searchParams.get("id");

  if (!extensionId) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Invalid Extension ID
          </h1>
          <p className="text-gray-600">Extension ID is required.</p>
        </div>
      </div>
    );
  }

  return <IntegrationDetail lang={lang} extensionId={extensionId} />;
}
