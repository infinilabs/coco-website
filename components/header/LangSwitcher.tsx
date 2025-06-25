"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

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
    const localLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    setLang(localLang || searchParams.get("lang") || defaultLocale);
  }, [searchParams]);

  const handleSwitchLanguage = (value: string) => {
    localStorage.setItem("lang", value);
    //
    const params = new URLSearchParams(searchParams.toString());
    if (value === defaultLocale) {
      params.delete("lang");
    } else {
      params.set("lang", value);
    }

    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
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

