import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { SmoothScroller } from '@/components/layout/SmoothScroller';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Dipler - The Voice AI Platform That Actually Scales',
  description: 'Build, deploy, and manage AI voice agents that sound human and act intelligently.',
};

// ✅ Génère les pages pour chaque locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ Fonction pour charger les messages statiquement
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    return (await import(`../../../messages/${routing.defaultLocale}.json`)).default;
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Vérifie que la locale est valide
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // ✅ Charge les messages statiquement (pas de headers())
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(
        plusJakarta.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-body antialiased min-h-screen flex flex-col"
      )}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroller>
            {children}
          </SmoothScroller>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}