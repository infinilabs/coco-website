"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import HomeIndex from "@/components/home/HomeIndex";
import { defaultLocale } from "@/i18n/i18n";

export default function Home() {
  const searchParams = useSearchParams();

  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    const localLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    setLang(localLang || searchParams.get("lang") || defaultLocale);
  }, [searchParams]);

  return <HomeIndex lang={lang} />;
}

