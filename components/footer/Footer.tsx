"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer({ lang }: { lang: string }) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="m-auto mt-44 pt-20 sm:px-6 lg:px-8 bg-[#EBF6FF] dark:bg-transparent">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 pb-6 border-b border-b-[#CBCBCB] dark:border-b-[#2D2D2D]">
          <div className="flex items-center">
            <Image
              src={
                theme === "dark"
                  ? "/svg/Coco_logo.svg"
                  : "/svg/cocoLogo-light.svg"
              }
              alt="Coco"
              width={127}
              height={40}
            />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/infinilabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676767] hover:text-[#04FEF6] transition-colors"
            >
              <Image
                src={
                  theme === "dark" ? "/svg/github.svg" : "/svg/github-light.svg"
                }
                alt="Github"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://x.com/infinilabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676767] hover:text-[#04FEF6] transition-colors"
            >
              <Image
                src={theme === "dark" ? "/svg/twitter.svg" : "/svg/x-light.svg"}
                alt="Twitter"
                width={20}
                height={20}
                className="w-[20px] h-auto"
              />
            </a>
            <a
              href="https://discord.com/invite/4tKTMkkvVX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676767] hover:text-[#04FEF6] transition-colors"
            >
              <Image
                src={
                  theme === "dark"
                    ? "/svg/discord.svg"
                    : "/svg/discord-light.svg"
                }
                alt="Discord"
                width={20}
                height={20}
                className="w-[20px] h-auto"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 mt-7 pb-10">
          <div className="text-[#9F9FAC] text-sm order-2 md:order-1">
            Copyright © {new Date().getFullYear()} Coco AI.
          </div>
          <div className="flex items-center gap-2 order-1 md:order-2">
            <a
              href="#/terms"
              className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
            >
              Terms
            </a>
            <span className="text-[#9F9FAC]">|</span>
            <a
              href={`/${lang}/privacy`}
              className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
            >
              Privacy
            </a>
            <span className="text-[#9F9FAC]">|</span>
            <a
              href="#/cookies"
              className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

