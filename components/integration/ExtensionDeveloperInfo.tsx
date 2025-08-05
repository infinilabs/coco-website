import type { Extension } from "@/data/integration";
import { Github, Globe, MapPin } from "lucide-react";
import Image from "next/image";

interface DeveloperExtension {
  id: string;
  name: string;
  description: string;
  iconType: "volume" | "eject" | "music" | "check";
  gradientFrom: string;
  gradientTo: string;
}

interface ExtensionDeveloperInfoProps {
  extension: Extension;
  locale: any;
  lang: string;
  getDeveloperExtensions: (developerId: string) => DeveloperExtension[];
  renderExtensionIcon: (iconType: string) => JSX.Element | null;
}

export default function ExtensionDeveloperInfo({
  extension,
  locale,
  lang,
  getDeveloperExtensions,
  renderExtensionIcon,
}: ExtensionDeveloperInfoProps) {
  return (
    <div className="w-full lg:w-[29%] space-y-4 sm:space-y-6">
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="p-3 sm:p-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl">
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

          <div className="text-black dark:text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
            {extension.developer.name}
          </div>
          {extension.developer.bio && (
            <p className="text-[#9696B4] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              {extension.developer.bio}
            </p>
          )}

          {/* Developer contact info */}
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm pb-4 sm:pb-6">
            {extension.developer.location && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate">
                  {extension.developer.location}
                </span>
              </div>
            )}

            {extension.developer.github_handle && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://github.com/${extension.developer.github_handle}`,
                    "_blank"
                  )
                }
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate">
                  @{extension.developer.github_handle}
                </span>
              </div>
            )}

            {extension.developer.twitter_handle && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://twitter.com/${extension.developer.twitter_handle}`,
                    "_blank"
                  )
                }
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[#9696B4] truncate">
                  @{extension.developer.twitter_handle}
                </span>
              </div>
            )}

            {extension.developer.website && (
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(extension.developer.website, "_blank")
                }
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white flex-shrink-0" />
                <span className="text-[#9696B4] truncate">
                  {extension.developer.website}
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-800 py-4 sm:py-6">
            <div className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4 sm:mb-6">
              {locale?.moreBy || "More by"} {extension.developer.name}
            </div>

            <div className="space-y-2 sm:space-y-3">
              {getDeveloperExtensions(extension.developer.id).map(
                (ext, index) => (
                  <div
                    key={ext.id}
                    className={`flex items-center space-x-3 sm:space-x-4 p-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer group`}
                    onClick={() => {
                      window.open(`/${lang}/integration/${ext.id}`, "_blank");
                    }}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${ext.gradientFrom} ${ext.gradientTo} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      {renderExtensionIcon(ext.iconType)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-black dark:text-white font-medium text-xs sm:text-sm group-hover:text-blue-400 transition-colors truncate">
                        {ext.name}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1 truncate">
                        {ext.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <button className="mt-4 sm:mt-6 px-2 inline-flex items-center space-x-1 text-[#28A3FF] hover:text-blue-300 text-sm sm:text-base font-medium transition-colors">
              {locale?.more || "More →"}
            </button>
          </div>
        </div>
      </div>

      {/* Build your own Extension */}
      <div className="p-[2px] rounded-full bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-[44px] sm:h-[52px] leading-[44px] sm:leading-[52px] px-4 sm:px-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-full flex items-center justify-center">
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
