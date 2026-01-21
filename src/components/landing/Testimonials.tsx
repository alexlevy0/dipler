"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";
import { WordReveal } from "@/components/text/WordReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dipler's voice agents sound so natural, our customers often don't realize they're talking to an AI. It's been a game changer for our support team.",
    author: "John Techton",
    role: "CTO, TechCorp",
    avatar: "JT"
  },
  {
    quote: "We moved from Vapi and never looked back. The visual builder makes it incredibly easy to iterate on conversation flows without engineering support.",
    author: "Maria Rodriguez",
    role: "VP Ops, HealthCo",
    avatar: "MR"
  },
  {
    quote: "The white-label feature is perfect for our agency. We've built a whole new revenue stream reselling voice agents to our clients.",
    author: "James Chen",
    role: "Founder, ScaleAgency",
    avatar: "JC"
  },
  {
    quote: "Latency was our biggest issue with other providers. Dipler is consistently under 500ms, which makes the conversation feel real.",
    author: "Sarah Connor",
    role: "Lead Dev, Skynet Inc",
    avatar: "SC"
  },
  {
    quote: "The API is a joy to work with. Well documented, typed properly, and the support team is actually composed of engineers.",
    author: "David Kim",
    role: "Engineering Manager, FinStart",
    avatar: "DK"
  },
  {
    quote: "Our booking rates increased by 40% when we switched to Dipler for outbound qualification calls.",
    author: "Emily Watson",
    role: "Director of Sales, Realm",
    avatar: "EW"
  }
];

// Split testimonials for masonry
const column1 = [testimonials[0], testimonials[3], testimonials[1]];
const column2 = [testimonials[1], testimonials[4], testimonials[2]];
const column3 = [testimonials[2], testimonials[5], testimonials[0]];

function TestimonialCard({ t, className }: { t: typeof testimonials[0], className?: string }) {
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

function MarqueeColumn({ items, duration, reverse = false }: { items: typeof testimonials, duration: number, reverse?: boolean }) {
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
            text="Loved by engineering teams worldwide" 
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
