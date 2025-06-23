"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <PhSunBold />;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </div>
  );
}

