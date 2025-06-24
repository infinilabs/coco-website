import Image from "next/image";
import { useTheme } from "next-themes";

import data from "@/public/data.json";

const InstallApi = "https://release.infinilabs.com/coco/app/stable/";
const appVersion = data.app;

const macLinks = [
  {
    label: "Apple Silicon",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-mac-arm64.zip`,
    icon: "download",
  },
  {
    label: "Intel Mac",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-mac-amd64.zip`,
    icon: "download",
  },
  {
    label: "App store",
    size: "",
    url: "#",
    icon: "external",
  },
];

const winLinks = [
  {
    label: "x86",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-386.zip`,
    icon: "download",
  },
  {
    label: "AMD 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-amd64.zip`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-arm64.zip`,
    icon: "download",
  },
  {
    label: "Microsoft Store",
    size: "",
    url: "#",
    icon: "external",
  },
];

const linuxLinks = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-deb-linux-amd64.zip`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "",
    url: "",
    icon: "external",
  },
];

export default function AppInstall() {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 mx-auto">
      {/* macOS */}
      <div className="bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-8 flex flex-col shadow-lg min-h-[200px]">
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
          Supports macOS 12 and later versions
        </div>
        <div className="flex flex-col gap-3 mt-4">
          {macLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-lg px-4 py-3 text-black dark:text-white transition hover:bg-[#232A3F]"
            >
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-gray-400">{item.size}</span>
              </div>
              <span>
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/download/down.svg"
                      : "/svg/download/down-light.svg"
                  }
                  alt="down"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Windows */}
      <div className="bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-8 flex flex-col shadow-lg min-h-[200px]">
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
          Support for Windows 10 and above versions
        </div>
        <div className="flex flex-col gap-3 mt-4">
          {winLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-lg px-4 py-3 text-black dark:text-white transition hover:bg-[#232A3F]"
            >
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-gray-400">{item.size}</span>
              </div>
              <span>
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/download/down.svg"
                      : "/svg/download/down-light.svg"
                  }
                  alt="down"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Linux */}
      <div className="bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-8 flex flex-col shadow-lg min-h-[200px]">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/svg/ubuntu.svg" alt="Linux" width={24} height={24} />
          <span className="text-black dark:text-white text-xl font-semibold">
            Ubuntu
          </span>
        </div>
        <div className="font-normal text-base text-[#9696B4] leading-[22px]">
          X11 only
        </div>
        <div className="flex flex-col gap-3 mt-4">
          {linuxLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#CBE8FF] dark:bg-[#0A1727] rounded-lg px-4 py-3 text-black dark:text-white transition hover:bg-[#232A3F]"
            >
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-gray-400">{item.size}</span>
              </div>
              <span>
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/download/down.svg"
                      : "/svg/download/down-light.svg"
                  }
                  alt="down"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

