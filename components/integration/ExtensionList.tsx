"use client";

import {
  ChevronLeft,
  ChevronRight,
  FolderDown,
  MonitorCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Extension } from "@/data/integration";

interface ExtensionListProps {
  extensions: Extension[];
  currentPage: number;
  totalCount: number;
  pageSize: number;
  locale: {
    install: string;
  };
  lang: string;
  onPageChange: (page: number) => void;
}

export default function ExtensionList({
  extensions,
  currentPage,
  totalCount,
  pageSize,
  locale,
  lang,
  onPageChange,
}: ExtensionListProps) {
  const router = useRouter();

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  // Generate pagination button array with ellipsis support
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((extension, index) => (
          <div
            key={extension.id}
            className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333] cursor-pointer"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() =>
              router.push(
                `/${lang}/integration/extensions/detail?id=${extension.id}`
              )
            }
          >
            <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-[15px] p-8 min-h-[380px] flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Image
                    src={extension.icon}
                    alt={extension.name}
                    width={56}
                    height={56}
                    className="object-cover rounded-xl"
                    style={{
                      filter: "drop-shadow(rgb(255, 255, 255) 0px 0px 6px)",
                    }}
                  />
                  <Link
                    href={`coco://install_extension_from_store?id=${extension.id}`}
                    aria-label="install"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {hoveredCard === index ? (
                      <div
                        className={`h-8 leading-[32px] px-4 rounded-full font-medium text-base transition-colors text-[#04071b]`}
                        style={{
                          background:
                            "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
                          boxShadow: "0 2px 12px 0 #19F3FF55",
                        }}
                      >
                        {locale?.install || "Loading..."}
                      </div>
                    ) : (
                      <div className="h-8 p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
                        <div className="h-full leading-[28px] bg-[#EBF6FF] dark:bg-[#0B1020] rounded-[15px] shadow-lg flex justify-center text-base font-normal text-[#28A3FF] px-4">
                          {locale?.install || "Loading..."}
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
                <h3 className="text-black dark:text-white text-lg font-semibold mb-4">
                  {extension.name}
                </h3>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 rounded-full mr-2 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {extension.developer.avatar ? (
                      <Image
                        src={extension.developer.avatar}
                        alt={extension.developer.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-500"></div>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm">
                    {extension.developer.name}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-4">
                  {extension.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-xs mt-auto">
                <div className="flex items-center space-x-2">
                  <MonitorCheck className="w-5 h-5 text-black dark:text-white" />

                  {/* Show all platforms if platforms array is empty or show specific platforms */}
                  {!extension.platforms || extension.platforms.length === 0 ? (
                    <>
                      <Image
                        src="/svg/extension/macos.svg"
                        alt="macOS"
                        width={20}
                        height={20}
                        className="dark:text-black"
                      />
                      <Image
                        src="/svg/windows11-logo.svg"
                        alt="Windows"
                        width={20}
                        height={20}
                      />
                      <Image
                        src="/svg/ubuntu.svg"
                        alt="Linux"
                        width={20}
                        height={20}
                      />
                    </>
                  ) : (
                    <>
                      {extension.platforms?.includes("macos") && (
                        <Image
                          src="/svg/extension/macos.svg"
                          alt="macOS"
                          width={20}
                          height={20}
                          className="dark:text-black"
                        />
                      )}
                      {extension.platforms?.includes("windows") && (
                        <Image
                          src="/svg/windows11-logo.svg"
                          alt="Windows"
                          width={20}
                          height={20}
                        />
                      )}
                      {extension.platforms?.includes("linux") && (
                        <Image
                          src="/svg/ubuntu.svg"
                          alt="Linux"
                          width={20}
                          height={20}
                        />
                      )}
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <FolderDown className="w-4 h-4 mr-1" />
                    <span>{extension.stats.installs}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination component */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center mt-12 space-x-2">
          {/* Previous page button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
              currentPage === 1
                ? "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page number buttons */}
          {generatePageNumbers().map((page, index) => (
            <div key={index}>
              {page === "..." ? (
                <span className="px-3 py-2 text-gray-400 dark:text-gray-500 text-sm">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-gradient-to-r from-[#5E85FF] to-[#49FFF3] text-white border-0 shadow-sm"
                      : "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {page}
                </button>
              )}
            </div>
          ))}

          {/* Next page button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
              currentPage === totalPages
                ? "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
