"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_INTEGRATION, ApiResponse, Extension } from "@/data/integration";
import { defaultLocale, getDictionary } from "@/i18n/i18n";
import CommonList from "./CommonList";
import IntegrationInstallDialog from "./IntegrationInstallDialog";

// mock
import { MOCK_RESPONSE } from "./integration-demo";

interface StoreListPageProps {
  lang?: string;
  type:
    | "connector"
    | "assistant"
    | "mcp"
    | "llm-provider"
    | "datasource"
    | "rsa";
  texts?: {
    title?: string;
    description?: string;
    search?: string;
    build?: string;
    loading?: string;
    empty?: string;
  };
  iconUrl?: string;
  buildUrl?: string;
}

export default function StoreListPage({
  lang = defaultLocale,
  type,
  texts,
  iconUrl,
  buildUrl,
}: StoreListPageProps) {
  const [locale, setLocale] = useState<any>();
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(0);
  const searchParams = useSearchParams();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 9;

  const INTEGRATION = ALL_INTEGRATION[`INTEGRATION_${lang.toUpperCase()}`];

  const useMock = searchParams.get("mock") === "1";

  const loadMock = async (): Promise<ApiResponse> => {
    return MOCK_RESPONSE as unknown as ApiResponse;
  };

  const fetchExtensions = useCallback(
    async (query: string = "", page: number = 1) => {
      try {
        setLoading(true);
        const from = (page - 1) * pageSize;

        // Add sort parameter for 'recently' tab
        const sortParam =
          INTEGRATION[active].value === "recently" ? "&sort=created:desc" : "";

        if (useMock) {
          const data = await loadMock();
          const extensionList = data.hits.hits?.map((hit) => ({
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
          setExtensions(extensionList || []);
          setTotalCount(data.hits.total.value);
          return;
        }

        const apiUrl =
          process.env.NODE_ENV === "development"
            ? `/store/server/${type}/_search?query=${encodeURIComponent(
                query
              )}&from=${from}&size=${pageSize}${sortParam}`
            : `https://coco.infini.cloud/store/server/${type}/_search?query=${encodeURIComponent(
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
        // 失败时开发环境回退 mock，保证页面正常
        if (process.env.NODE_ENV === "development") {
          const data = await loadMock();
          const extensionList = data.hits.hits?.map((hit) => ({
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
          setExtensions(extensionList || []);
          setTotalCount(data.hits.total.value);
        } else {
          console.error("Failed to fetch extensions:", error);
          setExtensions([]);
          setTotalCount(0);
        }
      } finally {
        setLoading(false);
      }
    },
    [active, INTEGRATION, type, useMock]
  );

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict.Integration);
  }, [lang]);

  useEffect(() => {
    getLocale();

    const developerParam = searchParams.get("developer");
    if (developerParam) {
      setSearchQuery(developerParam);
      fetchExtensions(developerParam, 1);
    } else {
      fetchExtensions("", 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLocale, fetchExtensions]);

  const t = {
    title: texts?.title ?? locale?.title,
    description: texts?.description ?? locale?.description,
    search: texts?.search ?? locale?.search,
    build: texts?.build ?? locale?.build,
    loading: texts?.loading ?? locale?.loading ?? "Loading extensions...",
    empty: texts?.empty ?? locale?.empty ?? "No extensions found",
  };

  const tabs = [
    {
      label: locale?.tabs?.all?.[type],
      value: "all",
    },
    {
      label: locale?.tabs?.recently,
      value: "recently",
    },
  ];

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

  // 安装弹框状态
  const [installOpen, setInstallOpen] = useState(false);
  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(
    null
  );

  const handleInstallClick = (ext: Extension) => {
    try {
      const installUrl = `coco://install_extension_from_store?id=${ext.id}`;
      void navigator.clipboard?.writeText(installUrl);
    } catch {}
    setSelectedExtension(ext);
    setInstallOpen(true);
  };

  return (
    <section className="w-full flex flex-col items-center pt-28 md:pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent flex items-center">
        {iconUrl && (
          <Image
            src={iconUrl}
            alt={type}
            width={56}
            height={56}
            className="mr-2"
          />
        )}
        {t.title}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {t.description}
      </div>
      {buildUrl && (
        <div>
          <a
            href={buildUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CEFF] font-medium"
          >
            {t.build}
          </a>
        </div>
      )}

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
                  placeholder={t.search}
                  className="flex-1 bg-transparent border-none outline-none text-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-7xl flex mt-40 justify-start">
        <NavTab
          tabs={tabs}
          value={tabs[active].value}
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
              {t.loading}
            </div>
          </div>
        ) : extensions.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500 dark:text-gray-400">
              {t.empty}
            </div>
          </div>
        ) : (
          <CommonList
            type={type}
            extensions={extensions}
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            locale={locale}
            lang={lang}
            onPageChange={handlePageChange}
            onInstallClick={handleInstallClick}
          />
        )}
      </div>

      {/* 安装弹框 */}
      {selectedExtension && (
        <IntegrationInstallDialog
          open={installOpen}
          onOpenChange={setInstallOpen}
          lang={lang}
          name={selectedExtension.name}
          copied={true}
        />
      )}
    </section>
  );
}
