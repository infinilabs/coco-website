"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

import HeaderLinks from "@/components/header/HeaderLinks";
import { ALL_HEADER } from "@/data/header";
import { siteConfig } from "@/data/site";
import { LangSwitcher } from "./LangSwitcher";
import { ThemedButton } from "./ThemedButton";

export default function MobileMenu({ lang }: { lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ALL_HEADER[`HEADER_${lang.toUpperCase()}`];

  return (
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
              <ul className="space-y-4 my-8">
                {links.map((link) => (
                  <li key={link.label + link.value}>
                    <Link
                      href={
                        link.href?.startsWith("http")
                          ? link.href
                          : `/${lang}${link.href}`
                      }
                      aria-label={link.label}
                      title={link.label}
                      className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                      target={link.external ? "_blank" : "_self"}
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
                  <LangSwitcher lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
