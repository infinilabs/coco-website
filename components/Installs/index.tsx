"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, SunMoon, Server, Clipboard } from "lucide-react";

import data from "@/public/data.json";

const InstallApi = "https://release.infinilabs.com/coco/app/stable/";
const ServerApi = "https://release.infinilabs.com/coco/server/stable/";
const ServerHref =
  "https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/";

export default function Installs() {
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [copyStatus, setCopyStatus] = useState<string>("");

  const appVersion = data.app;
  const serverVersion = data.server;

  const DockerCommand = `docker run -d --name cocoserver -p 9000:9000 infinilabs/coco:${serverVersion}`;

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

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div id="install" className="container mx-auto px-4">
      <div className="mt-[130px] font-medium text-[32px] md:text-[40px] text-white leading-[48px] md:leading-[64px] text-center">
        Cross-Platform App with Self-Hosted Servers
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-2 bg-[#04FEF6] text-[#333] rounded-full flex items-center">
          <SunMoon className="mr-2" /> Coco AI App
        </button>
      </div>

      <div className="text-center gap-4 md:gap-4 mt-4 md:mt-4">
        <a
          target="_blank"
          href="https://docs.infinilabs.com/coco-app/main/"
          className="text-teal-400 font-semibold text-lg hover:text-teal-500 transition-colors"
        >
          Coco AI App Documentation
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-8">
        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/macos.svg" alt="macOS" width={24} height={24} />
            <span className="font-medium text-white text-xl">macOS</span>
          </div>

          <div className="space-y-4">
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-mac-arm64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Apple Silicon</span>
            </a>
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-mac-amd64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Intel Based</span>
            </a>

            <div className="flex items-center gap-2 text-[#676767]">
              <Image src="/svg/app-store.svg" alt="" width={16} height={16} />
              <span className="text-[#676767]">App Store (Coming soon)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#676767]" />
            </div>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/svg/windows11-logo.svg"
              alt="Windows"
              width={24}
              height={24}
            />
            <span className="font-medium text-white text-xl">Windows</span>
          </div>
          <div className="space-y-4">
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-windows-386.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">x86</span>
            </a>
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-windows-amd64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">amd64</span>
            </a>
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-windows-arm64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">arm64</span>
            </a>
            <div className="flex items-center gap-2 text-[#676767]">
              <Image src="/svg/m_store.svg" alt="" width={16} height={16} />
              <span className="text-[#676767]">
                Microsoft Store (Coming soon)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#676767]" />
            </div>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/ubuntu.svg" alt="Linux" width={24} height={24} />
            <span className="font-medium text-white text-xl">Ubuntu (X11 only)</span>
          </div>
          <div className="space-y-4">
            <a
              href={`${InstallApi}Coco-AI-${appVersion}-deb-linux-amd64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">amd64</span>
            </a>
            <div className="flex items-center gap-2 text-[#676767]">
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#676767]">arm64 (Coming soon)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-2 bg-[#04FEF6] text-[#333] rounded-full flex items-center">
          <Server className="mr-2" /> Coco AI Server
        </button>
      </div>

      <div className="text-center gap-4 md:gap-4 mt-4 md:mt-4">
        <a
          target="_blank"
          href="https://docs.infinilabs.com/coco-server/main/"
          className="text-teal-400 font-semibold text-lg hover:text-teal-500 transition-colors"
        >
          Coco AI Server Documentation
        </a>
      </div>

      <div className="mt-4 text-center">
        <div className="flex justify-center w-fit m-auto bg-[#0C1015] text-white p-4 rounded-lg text-center">
          <code className="bg-[#1A1A1A] text-[#04FEF6] p-1 rounded-md">
            {DockerCommand}
          </code>
          <div className="flex items-center">
            <Clipboard
              onClick={handleCopy}
              className="ml-2 text-[#04FEF6] cursor-pointer hover:text-[#03e5e0] transition-colors"
              size={24}
            />
            {copyStatus && (
              <span className="ml-2 text-sm text-green-400">{copyStatus}</span>
            )}
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          * For other installation environments, please choose{" "}
          <a
            href={ServerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-500 transition-colors"
          >
            Manual Installation
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-8">
        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/macos.svg" alt="macOS" width={24} height={24} />
            <span className="font-medium text-white text-xl">macOS</span>
          </div>
          <div className="space-y-4">
            <a
              href={`${ServerApi}coco-${serverVersion}-mac-arm64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Apple Silicon</span>
            </a>
            <a
              href={`${ServerApi}coco-${serverVersion}-mac-amd64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Intel Based</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/svg/windows11-logo.svg"
              alt="Windows"
              width={24}
              height={24}
            />
            <span className="font-medium text-white text-xl">Windows</span>
          </div>
          <div className="space-y-4">
            <a
              href={`${ServerApi}coco-${serverVersion}-windows-amd64.zip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">amd64</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/linux.svg" alt="Linux" width={24} height={24} />
            <span className="font-medium text-white text-xl">Linux</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#676767]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
                href={`${ServerApi}coco-${serverVersion}-linux-amd64.tar.gz`}
              >
                <Image src="/svg/down.svg" alt="" width={16} height={16} />
                <span className="text-[#04FEF6]">amd64</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#676767]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
                href={`${ServerApi}coco-${serverVersion}-linux-arm64.tar.gz`}
              >
                <Image src="/svg/down.svg" alt="" width={16} height={16} />
                <span className="text-[#04FEF6]">arm64</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
