import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { SmoothScroller } from '@/components/layout/SmoothScroller';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(
        plusJakarta.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-body antialiased min-h-screen flex flex-col"
      )}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroller>
            {children}
          </SmoothScroller>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
