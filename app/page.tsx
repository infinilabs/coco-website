'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const targetLang = userLang.startsWith('zh') ? 'zh' : 'en';
    router.replace(`/${targetLang}`);
  }, [router]);

  return <p>Redirecting...</p>;
}
