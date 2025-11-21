import { Github, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import PageLoader from "@/components/ui/PageLoader";
import type { ApiResponse, Extension } from "@/data/integration";

interface ExtensionDeveloperInfoProps {
  extension: Extension;
  locale: any;
  lang: string;
}

export default function ExtensionDeveloperInfo({
  extension,
  locale,
  lang,
}: ExtensionDeveloperInfoProps) {
  const [developerExtensions, setDeveloperExtensions] = useState<Extension[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const fetchDeveloperExtensions = useCallback(
    async (developerName: string) => {
      try {
        setLoading(true);

        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/store/extension/_search?query=${developerName}&from=0&size=10`;

        const response = await fetch(apiUrl);
        const data: ApiResponse = await response.json();

        if (data.hits && data.hits.hits) {
          const extensionList = data.hits.hits
            .map((hit) => hit._source)
            .filter((ext) => ext.developer.name === extension.developer.name);

          setDeveloperExtensions(extensionList);
        } else {
          setDeveloperExtensions([]);
        }
      } catch (error) {
        console.error("Failed to fetch developer extensions:", error);
        setDeveloperExtensions([]);
      } finally {
        setLoading(false);
      }
    },
    [extension.developer.name]
  );

  useEffect(() => {
    if (extension.developer.name) {
      fetchDeveloperExtensions(extension.developer.name);
    }
  }, [extension.developer.name, fetchDeveloperExtensions]);

  return (
    <div className="w-full lg:w-[29%] space-y-4 sm:space-y-6 lg:sticky min-w-0">
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="w-full p-3 sm:p-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl">
          <div className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4 sm:mb-6">
            {locale?.developer || "Developer"}
          </div>

          <Image
            src={extension.developer.avatar}
            alt={extension.developer.name}
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-3"
          />

          <div className="text-black dark:text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4 break-words">
            {extension.developer.name}
          </div>
          {extension.developer.bio && (
            <p className="text-[#9696B4] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 break-words">
              {extension.developer.bio}
            </p>
          )}

          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {extension.developer.location && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate break-words">
                  {extension.developer.location}
                </span>
              </div>
            )}

            {extension.developer.github_handle && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer min-h-[36px]"
                onClick={() =>
                  window.open(
                    `https://github.com/${extension.developer.github_handle}`,
                    "_blank"
                  )
                }
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate break-words">
                  @{extension.developer.github_handle}
                </span>
              </div>
            )}

            {extension.developer.twitter_handle && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer min-h-[36px]"
                onClick={() =>
                  window.open(
                    `https://twitter.com/${extension.developer.twitter_handle}`,
                    "_blank"
                  )
                }
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-[#9696B4] truncate break-words">
                  @{extension.developer.twitter_handle}
                </span>
              </div>
            )}

            {extension.developer.website && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer min-h-[36px]"
                onClick={() =>
                  window.open(extension.developer.website, "_blank")
                }
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate break-words">
                  {extension.developer.website}
                </span>
              </div>
            )}
          </div>

          {developerExtensions.length > 0 && (
            <div className="border-t border-blue-400/20 dark:border-gray-700 py-4 sm:py-6">
              <div className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4 sm:mb-6">
                {locale?.moreBy || "More by"} {extension.developer.name}
              </div>

              {loading ? (
                <PageLoader />
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  {developerExtensions.map((ext, index) => (
                    <div
                      key={ext.id}
                      className="w-full box-border overflow-hidden flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#161b22] transition-colors cursor-pointer group min-h-[56px]"
                      onClick={() => {
                        window.open(
                          `/${lang}/integration/extensions/detail?id=${ext.id}`,
                          "_blank"
                        );
                      }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10">
                        <Image
                          src={ext.icon}
                          alt={ext.name}
                          width={40}
                          height={40}
                          className="rounded w-full h-full"
                          style={{
                            filter:
                              "drop-shadow(rgb(255, 255, 255) 0px 0px 6px)",
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-black dark:text-white font-medium text-sm group-hover:text-blue-400 transition-colors truncate">
                          {ext.name}
                        </h4>
                        <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 sm:mt-1 break-words line-clamp-2 sm:line-clamp-1">
                          {ext.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Link
                href={`/${lang}/integration/extensions?developer=${encodeURIComponent(
                  extension.developer.name
                )}`}
                className="mt-4 sm:mt-6 px-2 inline-flex items-center space-x-1 text-[#28A3FF] hover:text-blue-300 text-sm sm:text-base font-medium transition-colors"
              >
                {locale?.more || "More →"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Build your own Extension */}
      <div className="w-full max-w-full min-w-0 overflow-hidden box-border p-[2px] rounded-full bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="w-full max-w-full min-w-0 box-border h-[44px] sm:h-[52px] leading-[44px] sm:leading-[52px] px-4 sm:px-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-full flex items-center justify-center">
          <div
            className="text-[#28A3FF] text-sm sm:text-base flex items-center justify-center cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/infinilabs/coco-extensions",
                "_blank"
              )
            }
          >
            {locale?.buildYourOwn || "Build your own Extension"}
          </div>
        </div>
      </div>
    </div>
  );
}
