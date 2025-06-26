"use client";

import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select-lang";
import { defaultLocale, localeNames } from "@/i18n/i18n";

export const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    const lang =
      searchParams.get("lang") || localStorage.getItem("lang") || defaultLocale;
    setLang(lang);
  }, []);

  const handleSwitchLanguage = (value: string) => {
    localStorage.setItem("lang", value);
    setLang(value);
    router.push(`${pathname}?lang=${value}`);
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

