"use client";

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

  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") || localStorage.getItem("lang") || defaultLocale;
    setLang(lang);
  }, []);

  const handleSwitchLanguage = (value: string) => {
    localStorage.setItem("lang", value);
    //
    const params = new URLSearchParams(window.location.search);
    if (value === defaultLocale) {
      params.delete("lang");
    } else {
      params.set("lang", value);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.location.href = newUrl
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

