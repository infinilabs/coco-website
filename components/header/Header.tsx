"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import LoadingScreen from "@/components/LoadingScreen";
import { siteConfig } from "@/data/site";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";
import { ThemedButton } from "./ThemedButton";

const Header = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="w-full py-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="Coco AI"
            title="Coco AI"
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              src={
                theme === "dark"
                  ? "/svg/Coco_logo.svg"
                  : "/svg/cocoLogo-light.svg"
              }
              alt="Coco"
              width={178}
              height={56}
              priority
              className="hidden md:block"
            />
            <Image
              alt={siteConfig.name}
              src="/logo.svg"
              width={32}
              height={32}
              className="md:hidden"
            />
          </Link>
        </div>

        {/* Nav */}
        <Suspense fallback={<LoadingScreen />}>
          <HeaderMenu />
        </Suspense>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <ThemedButton />
          <Suspense fallback={<LoadingScreen />}>
            <LangSwitcher />
          </Suspense>
          <HeaderLinks />
        </div>

        {/* Mobile menu button */}
        <Suspense fallback={<LoadingScreen />}>
          <MobileMenu />
        </Suspense>
      </nav>
    </header>
  );
};

export default Header;

