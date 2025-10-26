"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import PageLoader from "@/components/ui/PageLoader";
import { getLangFromPath } from "@/lib/utils";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const lang = getLangFromPath();
    router.replace(`/${lang}`);
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PageLoader />
    </div>
  );
}
