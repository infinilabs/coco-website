"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select-lang";
import { localeNames } from "@/i18n/i18n";
import { saveLanguagePreference } from "@/lib/utils";

export const LangSwitcher = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitchLanguage = (value: string) => {
    saveLanguagePreference(value);

    const newPath = pathname.replace(/^\/[^/]+/, `/${value}`);
    router.push(newPath);
  };

  return (
    <Select value={lang as string} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit" aria-label="LangSwitcher">
        <Globe className="text-[#666] dark:text-[#999]" />
      </SelectTrigger>

      <SelectContent>
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

