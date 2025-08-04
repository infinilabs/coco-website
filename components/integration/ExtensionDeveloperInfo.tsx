import Image from "next/image";
import { Github, Globe, MapPin } from "lucide-react";
import type { Extension } from "@/data/integration";

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
    <div className="w-[29%] space-y-6">
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="p-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl">
          <div className="text-xl font-semibold text-black dark:text-white mb-6">
            {locale?.developer || "Developer"}
          </div>

          <Image
            src={extension.developer.avatar}
            alt={extension.developer.name}
            width={40}
            height={40}
            className="rounded-full mb-3"
          />

          <div className="text-black dark:text-white font-semibold text-xl mb-4">
            {extension.developer.name}
          </div>
          {extension.developer.bio && (
            <p className="text-[#9696B4] text-sm leading-relaxed mb-6">
              {extension.developer.bio}
            </p>
          )}

          {/* Developer contact info */}
          <div className="space-y-3 text-sm pb-6">
            {extension.developer.location && (
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-black dark:text-white" />
                <span className="text-[#9696B4]">
                  {extension.developer.location}
                </span>
              </div>
            )}

            {extension.developer.github_handle && (
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://github.com/${extension.developer.github_handle}`,
                    "_blank"
                  )
                }
              >
                <Github className="w-4 h-4 text-black dark:text-white" />
                <span className="text-[#9696B4]">
                  @{extension.developer.github_handle}
                </span>
              </div>
            )}

            {extension.developer.twitter_handle && (
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://twitter.com/${extension.developer.twitter_handle}`,
                    "_blank"
                  )
                }
              >
                <svg
                  className="w-4 h-4 text-black dark:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[#9696B4]">
                  @{extension.developer.twitter_handle}
                </span>
              </div>
            )}

            {extension.developer.website && (
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() =>
                  window.open(extension.developer.website, "_blank")
                }
              >
                <Globe className="w-4 h-4 text-black dark:text-white" />
                <span className="text-[#9696B4]">
                  {extension.developer.website}
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-800 py-6">
            <div className="text-xl font-semibold text-black dark:text-white mb-6">
              {locale?.moreBy || "More by"} {extension.developer.name}
            </div>

            <div className="space-y-3">
              {getDeveloperExtensions(extension.developer.id).map(
                (ext, index) => (
                  <div
                    key={ext.id}
                    className={`flex items-center space-x-4 p-2  rounded-xl hover:bg-[#161b22] transition-colors cursor-pointer group`}
                    onClick={() => {
                      window.open(
                        `/${lang}/integration/${ext.id}`,
                        "_blank"
                      );
                    }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${ext.gradientFrom} ${ext.gradientTo} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      {renderExtensionIcon(ext.iconType)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-black dark:text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
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

            <button className="mt-6 px-2 inline-flex items-center space-x-1 text-[#28A3FF] hover:text-blue-300 text-base font-medium transition-colors">
              {locale?.more || "More →"}
            </button>
          </div>
        </div>
      </div>

      {/* Build your own Extension */}
      <div className="p-[2px] rounded-full bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-[52px] leading-[52px] px-6 bg-[#EBF6FF] dark:bg-[#0B1020] rounded-full">
          <div
            className="text-[#28A3FF] font-base mb-2 flex items-center justify-center cursor-pointer"
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