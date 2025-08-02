"use client";

import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_INTEGRATION, ApiResponse, Extension } from "@/data/integration";
import { defaultLocale, getDictionary } from "@/i18n/i18n";
import ExtensionList from "./ExtensionList";

export default function IntegrationIndex({
  lang = defaultLocale,
  onDetail,
}: {
  lang: string;
  onDetail: (id: string) => void;
}) {
  const [locale, setLocale] = useState<any>();
  const { theme } = useTheme();
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(0);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 9;

  const INTEGRATION = ALL_INTEGRATION[`INTEGRATION_${lang.toUpperCase()}`];

  // Fetch extensions with pagination and sorting support
  const fetchExtensions = useCallback(
    async (query: string = "", page: number = 1) => {
      try {
        setLoading(true);
        const from = (page - 1) * pageSize;

        // Add sort parameter for 'recently' tab
        const sortParam =
          INTEGRATION[active].value === "recently" ? "&sort=created:desc" : "";

        const apiUrl =
          process.env.NODE_ENV === "development"
            ? `/api/extensions/_search?query=${encodeURIComponent(
                query
              )}&from=${from}&size=${pageSize}${sortParam}`
            : `https://coco.infini.cloud/store/extension/_search?query=${encodeURIComponent(
                query
              )}&from=${from}&size=${pageSize}${sortParam}`;

        const response = await fetch(apiUrl);
        const data: ApiResponse = await response.json();

        if (data.hits && data.hits.hits) {
          const extensionList = data.hits.hits.map((hit) => ({
            ...hit._source,
            icon: hit._source.icon?.replace(/`/g, "").trim(),
            developer: {
              ...hit._source.developer,
              avatar: hit._source.developer.avatar?.replace(/`/g, "").trim(),
              website: hit._source.developer.website?.replace(/`/g, "").trim(),
            },
            screenshots: hit._source.screenshots?.map((screenshot) => ({
              ...screenshot,
              url: screenshot.url?.replace(/`/g, "").trim(),
            })),
            url: {
              code: hit._source.url.code?.replace(/`/g, "").trim(),
              download: hit._source.url.download?.replace(/`/g, "").trim(),
            },
          }));
          setExtensions(extensionList);
          setTotalCount(data.hits.total.value);
        } else {
          setExtensions([]);
          setTotalCount(0);
        }
      } catch (error) {
        console.error("Failed to fetch extensions:", error);
        setExtensions([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    },
    [active, INTEGRATION]
  );

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict.Integration);
  }, [lang]);

  useEffect(() => {
    getLocale();
    fetchExtensions("", 1);
  }, [getLocale, fetchExtensions]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setCurrentPage(1);
      fetchExtensions(searchQuery, 1);
    },
    [searchQuery, fetchExtensions]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setCurrentPage(1);
        fetchExtensions(searchQuery, 1);
      }
    },
    [searchQuery, fetchExtensions]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      fetchExtensions(searchQuery, page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [searchQuery, fetchExtensions]
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  return (
    <section className="w-full flex flex-col items-center pt-28 md:pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent flex items-center">
        <Image
          src="/svg/extension/extension.svg"
          alt="extension"
          width={56}
          height={56}
          className="mr-2"
        />
        {locale?.title || "Loading..."}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {locale?.description || "Loading..."}
      </div>
      <div>
        <a
          href="https://github.com/infinilabs/coco-extensions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CEFF] font-medium"
        >
          {locale?.build || "Loading..."}
        </a>
      </div>

      <div className="w-full max-w-2xl mt-12 mb-16">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative w-full h-16 rounded-full border-2 border-gradient-to-r from-[#5E85FF] to-[#49FFF3] bg-white dark:bg-[#04071B] shadow-lg overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5E85FF] via-[#EBC8FE] to-[#49FFF3] p-[2px]">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#04071B] flex items-center px-6">
                <Search className="flex-shrink-0 w-6 h-6 mr-4 text-[#828282]" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder={locale?.search || "Loading..."}
                  className="flex-1 bg-transparent border-none outline-none text-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />

                <div className="flex-shrink-0 ml-4">
                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#49FFF3] to-[#5E85FF] text-white text-sm font-medium">
                    Tab
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-7xl flex mt-40 justify-start">
        <NavTab
          tabs={INTEGRATION}
          value={INTEGRATION[active].value}
          onChange={(tab: any, index: number) => {
            setActive(index);
            setCurrentPage(1);
            fetchExtensions(searchQuery, 1);
          }}
        />
      </div>

      <div className="w-full max-w-7xl mt-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500 dark:text-gray-400">
              Loading extensions...
            </div>
          </div>
        ) : extensions.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500 dark:text-gray-400">
              No extensions found
            </div>
          </div>
        ) : (
          <ExtensionList
            extensions={extensions}
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            locale={locale}
            onDetail={onDetail}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
