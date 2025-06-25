"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { useTheme } from "next-themes";

import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import NavTab from "@/components/header/NavTab";
import { siteConfig } from "@/data/site";
import { defaultLocale } from "@/i18n/i18n";
import { ThemedButton } from "./ThemedButton";
import { ALL_HEADER } from "@/data/header";

const Header = () => {
  const { theme } = useTheme();

  const searchParams = useSearchParams();

  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    const localLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    setLang(localLang || searchParams.get("lang") || defaultLocale);
  }, [searchParams]);

  const links = ALL_HEADER[`HEADER_${lang.toUpperCase()}`];

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onChangeNavTab = (tab: any, index: number) => {
    // Handle tab change logic here
    if (tab.external) {
      window.open(tab.href, "_blank");
    } else {
      const params = new URLSearchParams(searchParams.toString());
      const newUrl = `${tab.href}?${params.toString()}`;
      router.push(newUrl);
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="py-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="hidden md:flex flex-1 justify-center">
          <NavTab tabs={links} value="home" onChange={onChangeNavTab} />
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <ThemedButton />
          <LangSwitcher />
          <HeaderLinks />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Coco AI"
                      title="Coco AI"
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {siteConfig.name}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label + link.value}>
                        <Link
                          href={
                            link.external
                              ? link.href
                              : `${link.href}`
                          }
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

