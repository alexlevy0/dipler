"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations('FAQ');
  const faqs = t.raw('items') as { q: string, a: string }[];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden" id="faq">
       <div className="absolute inset-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
            ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string, a: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={false}
            className={cn(
                "border border-border-light dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800/50 overflow-hidden transition-all duration-300",
                isOpen ? "shadow-md border-brand-primary/30 dark:border-brand-primary/50" : "hover:border-brand-primary/20 dark:hover:border-slate-600"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={cn("text-lg font-bold transition-colors", isOpen ? "text-brand-primary" : "text-text-primary")}>
                    {faq.q}
                </span>
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-brand-primary text-white rotate-180" : "bg-bg-secondary dark:bg-slate-700/50 text-text-secondary"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-dashed border-border-light dark:border-slate-700/50 pt-4 mx-6 mt-2">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
