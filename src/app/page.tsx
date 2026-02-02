'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    
    // Check if supported, otherwise use default
    const targetLocale = routing.locales.includes(browserLang as any) 
      ? browserLang 
      : routing.defaultLocale;

    router.replace(`/${targetLocale}`);
  }, [router]);

  return null;
}
