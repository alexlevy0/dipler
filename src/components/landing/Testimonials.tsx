"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";
import { WordReveal } from "@/components/text/WordReveal";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

// Testimonials moved inside



function TestimonialCard({ t, className }: { t: Testimonial, className?: string }) {
    return (
        <Card className={cn("p-8 flex flex-col items-center text-center h-full bg-white/40 backdrop-blur-md border-white/40 hover:bg-white/60 transition-colors", className)}>
            <div className="flex gap-1 text-amber-400 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                <Star key={`star-${i}`} className="w-4 h-4 fill-current" />
                ))}
            </div>
            <blockquote className="text-base text-text-primary leading-relaxed mb-6 font-medium">
                "{t.quote}"
            </blockquote>
            <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.avatar}
                </div>
                <div className="text-left">
                    <div className="font-bold text-text-primary text-sm">{t.author}</div>
                    <div className="text-xs text-text-secondary">{t.role}</div>
                </div>
            </div>
        </Card>
    )
}

// Helper to split array
const splitArray = <T,>(array: T[], numParts: number) => {
    const result: T[][] = Array.from({ length: numParts }, () => []);
    array.forEach((item, i) => {
        result[i % numParts].push(item);
    });
    return result;
}

function MarqueeColumn({ items, duration, reverse = false }: { items: Testimonial[], duration: number, reverse?: boolean }) {
    return (
        <div className="relative flex flex-col gap-6 overflow-hidden h-[800px] mask-gradient-y">
            <motion.div
                className="flex flex-col gap-6"
                animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {[...items, ...items, ...items, ...items].map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                ))}
            </motion.div>
        </div>
    )
}

export function Testimonials() {
  const t = useTranslations('Testimonials');

  const testimonials: Testimonial[] = [
    {
      quote: t('items.0.quote'),
      author: "John Techton",
      role: t('items.0.role'),
      avatar: "JT"
    },
    {
      quote: t('items.1.quote'),
      author: "Maria Rodriguez",
      role: t('items.1.role'),
      avatar: "MR"
    },
    {
      quote: t('items.2.quote'),
      author: "James Chen",
      role: t('items.2.role'),
      avatar: "JC"
    },
    {
      quote: t('items.3.quote'),
      author: "Sarah Connor",
      role: t('items.3.role'),
      avatar: "SC"
    },
    {
      quote: t('items.4.quote'),
      author: "David Kim",
      role: t('items.4.role'),
      avatar: "DK"
    },
    {
      quote: t('items.5.quote'),
      author: "Emily Watson",
      role: t('items.5.role'),
      avatar: "EW"
    }
  ];

  // Specific ordering from original code:
  // const column1 = [testimonials[0], testimonials[3], testimonials[1]];
  // const column2 = [testimonials[1], testimonials[4], testimonials[2]];
  // const column3 = [testimonials[2], testimonials[5], testimonials[0]];
  
  const column1 = [testimonials[0], testimonials[3], testimonials[1]];
  const column2 = [testimonials[1], testimonials[4], testimonials[2]];
  const column3 = [testimonials[2], testimonials[5], testimonials[0]];

  return (
    <section className="py-32 bg-bg-secondary overflow-hidden relative" id="testimonials">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <WordReveal 
            as="h2" 
            text={t('title')}
            className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mask-gradient-y h-[600px] overflow-hidden">
            {/* Top Fade Mask handled by global mask-image or internal div */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-secondary to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-secondary to-transparent z-20 pointer-events-none" />

            <MarqueeColumn items={column1} duration={40} />
            <MarqueeColumn items={column2} duration={55} reverse />
            <MarqueeColumn items={column3} duration={45} />
        </div>
      </div>
    </section>
  );
}
