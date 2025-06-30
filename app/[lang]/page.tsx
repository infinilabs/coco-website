import { Suspense } from "react";

import HomeIndex from "@/components/home/HomeIndex";
import LoadingScreen from "@/components/LoadingScreen";
import { defaultLocale } from "@/i18n/i18n";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang || defaultLocale;
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeIndex lang={lang} />
    </Suspense>
  );
}

