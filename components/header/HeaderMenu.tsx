"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_HEADER } from "@/data/header";
import { defaultLocale } from "@/i18n/i18n";

export default function HeaderMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState(defaultLocale);
  useEffect(() => {
    const lang =
      searchParams.get("lang") || localStorage.getItem("lang") || defaultLocale;
    setLang(lang);
  }, [searchParams]);

  const links = ALL_HEADER[`HEADER_${lang.toUpperCase()}`];

  const onChangeNavTab = (tab: any, index: number) => {
    // Handle tab change logic here
    if (tab.external) {
      window.open(tab.href, "_blank");
    } else {
      router.push(`${tab.href}`);
    }
  };

  const [navActive, setNavActive] = useState("home");
  useEffect(() => {
    if (pathname === "/") {
      setNavActive("home");
    } else {
      const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
      setNavActive(cleanPath);
    }
  }, [pathname]);

  return (
    <div className="hidden md:flex flex-1 justify-center">
      <NavTab tabs={links} value={navActive} onChange={onChangeNavTab} />
    </div>
  );
}

