"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_HEADER } from "@/data/header";

export default function HeaderMenu({ lang }: { lang: string }) {
  const pathname = usePathname();

  const links = ALL_HEADER[`HEADER_${lang.toUpperCase()}`];

  const [navActive, setNavActive] = useState("home");
  useEffect(() => {
    const match = pathname.match(/^\/(en|zh)?\/?([^\/]*)/);
    if (!match || !match[2]) {
      setNavActive("home");
    } else {
      setNavActive(match[2]);
    }
  }, [pathname]);

  return (
    <div className="hidden md:flex flex-1 justify-center">
      <NavTab tabs={links} value={navActive} />
    </div>
  );
}

