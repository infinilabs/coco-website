import { Suspense } from "react";

import HomeIndex from "@/components/home/HomeIndex";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeIndex />
    </Suspense>
  );
}

