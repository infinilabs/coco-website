"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, SunMoon } from "lucide-react";

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Sun />;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <SunMoon /> : <Sun />}
    </div>
  );
}

