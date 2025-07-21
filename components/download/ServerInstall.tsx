"use client";

import { Copy } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  DockerCommand,
  linuxLinkServer,
  macLinksServer,
  ServerHref,
  winLinksServer,
} from "@/data/download";

export default function ServerInstall({ locale }: { locale: any }) {
  const { theme } = useTheme();

  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [copyStatus, setCopyStatus] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(DockerCommand);
    setCopyStatus("Copied!");
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => {
      setCopyStatus("");
    }, 2000);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full max-w-7xl pt-14">
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-full bg-[#EBF6FF] dark:bg-[#04071B] rounded-2xl shadow-lg p-4 md:p-8 mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/svg/download/Docker.svg"
              alt="Docker"
              width={32}
              height={24}
            />

            <span className="text-black dark:text-white text-lg font-semibold">
              Docker
            </span>
          </div>
          <div className="flex items-center bg-[#CBE8FF] dark:bg-[#0A1727] rounded-lg px-4 py-3 mb-2">
            <span className="text-black dark:text-cyan-200 font-mono text-sm flex-1">
              {DockerCommand}
            </span>
            <button
              className="ml-3 p-1 rounded dark:hover:bg-[#232A3F] transition"
              onClick={handleCopy}
              aria-label="复制"
              type="button"
            >
              <Copy className="w-5 h-5 text-cyan-300" />
            </button>
            {copyStatus && (
              <span className="ml-2 text-cyan-300 text-xs">{copyStatus}</span>
            )}
          </div>
          <div className="text-[#9696B4] dark:text-gray-400 text-xs mt-1">
            {locale?.envText}
            <a
              href={ServerHref}
              className="text-cyan-300 font-medium underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale?.manual}
            </a>
          </div>
        </div>
      </div>

      <div className="w-full pt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        {/* macOS */}
        <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
          <div className="h-full bg-[#EBF6FF] dark:bg-[#04071B] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg">
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
              />

              <span className="text-black dark:text-white text-xl font-semibold">
                macOS
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {macLinksServer.map((item) => (
                <div
                  key={item.label}
                  className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-4 py-3 text-black dark:text-white transition"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                    <span>
                      <Image
                        src={"/svg/download/down-light.svg"}
                        alt="down"
                        width={16}
                        height={16}
                      />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Windows */}
        <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
          <div className="h-full bg-[#EBF6FF] dark:bg-[#04071B] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg">
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

            <div className="flex flex-col gap-3 mt-4">
              {winLinksServer.map((item) => (
                <div
                  key={item.label}
                  className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-4 py-3 text-black dark:text-white transition"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                    <span>
                      <Image
                        src={"/svg/download/down-light.svg"}
                        alt="down"
                        width={16}
                        height={16}
                      />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Linux */}
        <div className="min-h-[200px] p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
          <div className="h-full bg-[#EBF6FF] dark:bg-[#04071B] rounded-2xl px-4 py-5 md:px-8 md:py-10 flex flex-col shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/svg/linux.svg" alt="Linux" width={24} height={24} />
              <span className="text-black dark:text-white text-xl font-semibold">
                Linux
              </span>
            </div>
            <div></div>
            <div className="flex flex-col gap-3 mt-4">
              {linuxLinkServer.map((item) => (
                <div
                  key={item.label}
                  className="p-[2px] rounded-[16px] hover:bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[72px] flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-[14px] px-4 py-3 text-black dark:text-white transition"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                    <span>
                      <Image
                        src={"/svg/download/down-light.svg"}
                        alt="down"
                        width={16}
                        height={16}
                      />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
