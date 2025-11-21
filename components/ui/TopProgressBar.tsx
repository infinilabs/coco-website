"use client";

import { useEffect, useState } from "react";
import { subscribeRouteProgress } from "@/components/ui/routeProgress";

export default function TopProgressBar() {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeRouteProgress((s) => {
      setActive(s.active);
      setProgress(s.progress);
    });
    return unsubscribe;
  }, []);

  if (!active) return null;

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[1000] w-full"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="h-[2px] bg-[#00CEFF] shadow-sm"
        style={{
          width: `${progress}%`,
          transition: "width 120ms ease-out",
        }}
      />
    </div>
  );
}