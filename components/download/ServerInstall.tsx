import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Copy, ExternalLink } from "lucide-react";

import data from "@/public/data.json";

const ServerApi = "https://release.infinilabs.com/coco/server/stable/";
const ServerHref =
  "https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/";
const serverVersion = data.server;

const DockerCommand = `docker run -d --name cocoserver -p 9000:9000 infinilabs/coco:${serverVersion}`;

const macLinksServer = [
  {
    label: "Apple Silicon",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-mac-arm64.zip`,
    icon: "download",
  },
  {
    label: "Intel Mac",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-mac-amd64.zip`,
    icon: "download",
  },
];

const winLinksServer = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-windows-amd64.zip`,
    icon: "download",
  },
];

const linuxLinkServer = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-linux-amd64.tar.gz`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-linux-arm64.tar.gz`,
    icon: "download",
  },
];

export default function ServerInstall({ locale }: { locale: any }) {
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

  return (
    <div className="w-full max-w-7xl pt-14">
      <div className="bg-[#04071B] border border-[#49FFF3] rounded-2xl shadow-lg p-8 mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <Image
            src="/svg/download/Docker.svg"
            alt="Docker"
            width={32}
            height={24}
          />

          <span className="text-white text-lg font-semibold">Docker</span>
        </div>
        <div className="flex items-center bg-[#151A2A] rounded-lg px-4 py-3 mb-2">
          <span className="text-cyan-200 font-mono text-sm flex-1 select-all">
            {DockerCommand}
          </span>
          <button
            className="ml-3 p-1 rounded hover:bg-[#232A3F] transition"
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
        <div className="text-gray-400 text-xs mt-1">
          {locale?.envText}
          <a
            href={ServerHref}
            className="text-cyan-300 underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {locale?.manual}
          </a>
        </div>
      </div>

      <div className="w-full pt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        {/* macOS */}
        <div className="bg-[#04071B] border border-[#49FFF3] rounded-2xl px-8 py-10 flex flex-col shadow-lg min-h-[200px]">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/svg/macos.svg" alt="macOS" width={24} height={24} />

            <span className="text-white text-xl font-semibold">macOS</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {macLinksServer.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#151A2A] rounded-lg px-4 py-3 text-white transition hover:bg-[#232A3F]"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-gray-400">{item.size}</span>
                </div>
                <span>
                  <img src="/svg/down.svg" alt="" width={16} height={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Windows */}
        <div className="bg-[#04071B] border border-[#49FFF3] rounded-2xl px-8 py-10 flex flex-col shadow-lg min-h-[200px]">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/svg/windows11-logo.svg"
              alt="Windows"
              width={24}
              height={24}
            />
            <span className="text-white text-xl font-semibold">Windows</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {winLinksServer.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#151A2A] rounded-lg px-4 py-3 text-white transition hover:bg-[#232A3F]"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-gray-400">{item.size}</span>
                </div>
                <span>
                  <img src="/svg/down.svg" alt="" width={16} height={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Linux */}
        <div className="bg-[#04071B] border border-[#49FFF3] rounded-2xl px-8 py-10 flex flex-col shadow-lg min-h-[200px]">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/svg/linux.svg" alt="Linux" width={24} height={24} />
            <span className="text-white text-xl font-semibold">Linux</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {linuxLinkServer.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#151A2A] rounded-lg px-4 py-3 text-white transition hover:bg-[#232A3F]"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-gray-400">{item.size}</span>
                </div>
                <span>
                  <img src="/svg/down.svg" alt="" width={16} height={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

