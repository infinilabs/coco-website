"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import HomeIndex from "@/components/home/HomeIndex";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Home() {
  const params = useParams();
  const lang = (params.lang as string) || defaultLocale;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeIndex lang={lang} />
    </Suspense>
  );
}

