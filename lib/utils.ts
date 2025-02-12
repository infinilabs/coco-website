import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
      forks: data.forks_count
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}

