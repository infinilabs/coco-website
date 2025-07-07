"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { defaultLocale, getDictionary } from "@/i18n/i18n";

export default function NotFound() {
  const getLangFromPath = () => {
    if (typeof window !== "undefined") {
      const pathLang = window.location.pathname.split("/")[1];
      return ["en", "zh"].includes(pathLang) ? pathLang : defaultLocale;
    }
    return defaultLocale;
  };
  const lang = getLangFromPath();

  const [dict, setDict] = useState<any>();

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setDict(dict);
  }, [lang]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-transparent text-black dark:text-white">
      <Image
        src="/svg/404.svg"
        alt="404 Not Found"
        width={292}
        height={292}
        priority
      />

      <div className="text-center mt-5 mb-10 text-[32px] text-[#999] font-normal">
        {dict?.NotFound?.title}
      </div>

      <Link href="/" aria-label="home" className="mb-14">
        <div
          className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base text-[#04071b] hover:scale-105 transform transition-transform duration-200`}
          style={{
            background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
            boxShadow: "0 2px 12px 0 #19F3FF55",
          }}
        >
          {dict?.NotFound?.backHome}
        </div>
      </Link>
    </div>
  );
}

