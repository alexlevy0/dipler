import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SmoothScroller } from '@/components/layout/SmoothScroller';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        plusJakarta.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-body antialiased min-h-screen flex flex-col"
      )}>
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
