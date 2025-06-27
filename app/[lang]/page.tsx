import { Suspense } from "react";

import HomeIndex from "@/components/home/HomeIndex";
import LoadingScreen from "@/components/LoadingScreen";
import { staticParams } from "@/i18n/i18n";

export async function generateStaticParams() {
  return staticParams;
}
export default function Home({ params }: { params: { lang: string } }) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeIndex lang={params.lang} />
    </Suspense>
  );
}

