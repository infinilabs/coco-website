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
    const lang = localStorage.getItem("lang") || defaultLocale;
    setLang(lang);
  }, []);

  const handleSwitchLanguage = (value: string) => {
    localStorage.setItem("lang", value);
    setLang(lang);
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

