"use client";

import { doneRouteProgress } from "@/components/ui/routeProgress";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteProgressWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    doneRouteProgress();
  }, [pathname]);

  return null;
}
