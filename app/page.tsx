import { Suspense } from "react";

import HomeIndex from "@/components/home/HomeIndex";

export default function Home() {
  return (
    <Suspense>
      <HomeIndex />
    </Suspense>
  );
}

