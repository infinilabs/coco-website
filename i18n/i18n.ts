import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import enDict from "@/i18n/locales/en.json";
import zhDict from "@/i18n/locales/zh.json";

export const locales = ["", "en", "en-US", "zh", "zh-CN", "zh-TW", "zh-HK"];
export const localeNames: any = {
  en: "English",
  zh: "简体中文",
};
export const defaultLocale = "en";
export const staticParams = [{ lang: "en" }, { lang: "zh" }];
export const langs = ["en", "zh"];
export const slugs = ["download", "privacy"];
// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/i18n/locales/en.json").then((module) => module.default),
  zh: () => import("@/i18n/locales/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};

export const getDictionarySync = (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }
  if (!["en", "zh"].includes(locale)) {
    locale = "en";
  }
  return locale === "zh" ? zhDict : enDict;
};
