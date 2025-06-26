"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { macLinks, winLinks, linuxLinks } from "@/data/download";
import { divider } from "@nextui-org/react";

export default function AppInstall({ locale }: { locale: any }) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 mx-auto">
      {/* macOS */}
      <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={
                theme === "dark"
                  ? "/svg/download/macos.svg"
                  : "/svg/download/macos-light.svg"
              }
              alt="macOS"
              width={24}
              height={24}
              className="dark:text-black"
            />

            <span className="text-black dark:text-white text-xl font-semibold">
              macOS
            </span>
          </div>
          <div className="font-normal text-base text-[#9696B4] leading-[22px]">
            {locale?.macOS}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {macLinks.map((item) => (
              <div
                key={item.label}
                className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-black dark:text-white transition"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                    <Image
                      src={
                        item.label === "App store"
                          ? "/svg/download/link.svg"
                          : "/svg/download/down-light.svg"
                      }
                      alt="down"
                      width={16}
                      height={16}
                    />
                  </a>
                ) : (
                  <div className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-[#676767] transition">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Windows */}
      <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg ">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/svg/windows11-logo.svg"
              alt="Windows"
              width={24}
              height={24}
            />
            <span className="text-black dark:text-white text-xl font-semibold">
              Windows
            </span>
          </div>
          <div className="font-normal text-base text-[#9696B4] leading-[22px]">
            {locale?.window}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {winLinks.map((item) => (
              <div
                key={item.label}
                className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-black dark:text-white transition"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                    <Image
                      src={
                        item.label === "Microsoft Store"
                          ? "/svg/download/link.svg"
                          : "/svg/download/down-light.svg"
                      }
                      alt="down"
                      width={16}
                      height={16}
                    />
                  </a>
                ) : (
                  <div className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-[#676767] transition">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Linux */}
      <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/svg/ubuntu.svg" alt="Linux" width={24} height={24} />
            <span className="text-black dark:text-white text-xl font-semibold">
              Ubuntu
            </span>
          </div>
          <div className="font-normal text-base text-[#9696B4] leading-[22px]">
            {locale?.unbuntu}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {linuxLinks.map((item) => (
              <div
                key={item.label}
                className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-black dark:text-white transition"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-gray-400">{item.size}</span>
                  </div>
                  <Image
                    src={"/svg/download/down-light.svg"}
                    alt="down"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            ))}
            <div className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
              <a
                href="https://snapcraft.io/coco"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-6 py-3 text-black dark:text-white transition"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/download/snap-install.svg"
                      : "/svg/download/snap-install-light.svg"
                  }
                  alt="snap"
                  width={137}
                  height={32}
                />
                <Image
                  src={"/svg/download/link.svg"}
                  alt="link"
                  width={14}
                  height={14}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

