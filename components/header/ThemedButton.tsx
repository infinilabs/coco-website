"use client";

import { Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Sun className="text-[#666] dark:text-[#999]" />;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        window.NoticeWidget?.setTheme(nextTheme);
      }}
    >
      {theme === "light" ? (
        <SunMoon className="text-[#666] dark:text-[#999]" />
      ) : (
        <Sun className="text-[#666] dark:text-[#999]" />
      )}
    </div>
  );
}

