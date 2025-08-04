import Image from "next/image";
import Link from "next/link";
import NavTab from "@/components/header/NavTab";
import type { Extension } from "@/data/integration";

interface RelatedExtension {
  id: string;
  name: string;
  description: string;
  icon?: string;
  iconBg?: string;
}

interface ExtensionDetailContentProps {
  extension: Extension;
  locale: any;
  lang: string;
  relatedExtensions: RelatedExtension[];
}

export default function ExtensionDetailContent({
  extension,
  locale,
  lang,
  relatedExtensions,
}: ExtensionDetailContentProps) {
  return (
    <div className="w-[70%]">
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="px-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl">
          {/* Screenshots */}
          {extension.screenshots && extension.screenshots.length > 0 && (
            <div className="pt-6">
              <div className="text-xl font-medium text-black dark:text-white mb-6">
                {locale?.details || "Details"}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {extension.screenshots
                  .slice(0, 3)
                  .map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot.url}
                      alt={screenshot.title || `Screenshot ${index + 1}`}
                      width={272}
                      height={170}
                      className="w-full h-full object-cover"
                    />
                  ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="text-base font-normal text-[#9696B4] mb-2">
              {locale?.description_title || "Description"}
            </div>
            <p className="text-black dark:text-gray-300  leading-relaxed">
              {extension.description}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="text-base font-normal text-[#9696B4] mb-2">
              {locale?.commands || "Commands"}
            </div>
            <div className="space-y-4">
              <div className="flex space-x-2 mb-4">
                <NavTab
                  tabs={extension.platforms.map((platform) => ({
                    label:
                      platform === "macos"
                        ? "macOS"
                        : platform === "windows"
                        ? "Windows"
                        : "Linux",
                    value: platform,
                  }))}
                  value={extension.platforms[0]}
                  variant="compact"
                  size="sm"
                  onChange={(tab: any, index: number) => {
                    console.log("Selected platform:", tab.value);
                  }}
                />
              </div>

              {/* Command items */}
              <div className="space-y-4">
                {extension.commands?.map((command, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-base">
                      <div className="text-black dark:text-white font-normal">
                        {command.name}
                      </div>
                      <p className="text-[#9696B4] mt-1">
                        {command.description}
                      </p>
                    </div>
                  </div>
                )) || (
                  <p className="text-gray-500 text-center py-8">
                    {locale?.noCommands || "No commands available"}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="text-base font-normal text-[#9696B4] mb-2">
              {locale?.tags || "Tags"}
            </div>
            <div className="flex space-x-2">
              {extension.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#333] text-gray-300 rounded-sm text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Last update */}
          <div className="mt-6 py-6 border-t border-gray-700">
            <div className="text-base font-normal text-[#9696B4] mb-2">
              {locale?.lastUpdate || "Last update"}
            </div>
            <p className="text-black dark:text-white text-base">
              {new Date(extension.updated).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="p-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl">
          <div className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            {locale?.youMayAlsoLike || "You may also like"}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Related extensions - 数据遍历渲染 */}
            {relatedExtensions.map((relatedExt, index) => (
              <div
                key={relatedExt.id || index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => {
                  // router.push(`/integration/${relatedExt.id}`);
                }}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    relatedExt.iconBg || "bg-gray-500"
                  }`}
                >
                  {relatedExt.icon ? (
                    <Image
                      src={relatedExt.icon}
                      alt={relatedExt.name}
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-white text-sm font-bold">
                      {relatedExt.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-black dark:text-white font-medium text-sm">
                    {relatedExt.name.length > 25
                      ? `${relatedExt.name.substring(0, 25)}...`
                      : relatedExt.name}
                  </h4>
                  <p className="text-[#9696B4] text-xs">
                    {relatedExt.description.length > 35
                      ? `${relatedExt.description.substring(0, 35)}...`
                      : relatedExt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 px-3">
            <Link
              href={`/${lang}/integration`}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {locale?.more || "More →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}