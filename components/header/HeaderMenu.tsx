"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_HEADER } from "@/data/header";

export default function HeaderMenu({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const links = ALL_HEADER[`HEADER_${lang.toUpperCase()}`];

  const onChangeNavTab = (tab: any) => {
    // Handle tab change logic here
    if (tab.external) {
      window.open(tab.href, "_blank");
    } else {
      router.push(`${tab.href}`);
    }
  };

  const [navActive, setNavActive] = useState("home");
  useEffect(() => {
    if (pathname === "/" || pathname === "/en" || pathname === "/zh") {
      setNavActive("home");
    } else {
      const cleanPath = pathname.startsWith("/") ? pathname.slice(3) : pathname;
      setNavActive(cleanPath);
    }
  }, [pathname]);

  return (
    <div className="hidden md:flex flex-1 justify-center">
      <NavTab tabs={links} value={navActive} onChange={onChangeNavTab} />
    </div>
  );
}

