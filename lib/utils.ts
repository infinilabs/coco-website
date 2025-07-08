import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { defaultLocale, langs } from "@/i18n/i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GithubStarPrefixKey = "github_star_";

export function localStorageSetWithTTL(
  key: string,
  value: string,
  ttl: number
) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function localStorageGetWithTTL(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export async function fetchGithubStats(repo: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}

export const getBrowserLanguage = (): string => {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang) {
      const langCode = browserLang.split("-")[0];
      return langs.includes(langCode) ? langCode : defaultLocale;
    }
  }
  return defaultLocale;
};

export const LANG_STORAGE_KEY = "preferred_language";

export const saveLanguagePreference = (lang: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }
};

export const getSavedLanguagePreference = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(LANG_STORAGE_KEY);
  }
  return null;
};

export const getLangFromPath = () => {
  if (typeof window !== "undefined") {
    const pathLang = window.location.pathname.split("/")[1];

    if (langs.includes(pathLang)) {
      return pathLang;
    }

    const savedLang = getSavedLanguagePreference();
    if (savedLang && langs.includes(savedLang)) {
      return savedLang;
    }

    return getBrowserLanguage();
  }
  return defaultLocale;
};

