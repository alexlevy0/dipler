"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Button } from "@/components/ui/Button";
import { Languages } from "lucide-react";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
        <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary px-3"
            onClick={() => setIsOpen(!isOpen)}
        >
            <Languages size={18} />
            <span className="uppercase font-medium">{locale}</span>
        </Button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl border border-border-light p-1 z-50 flex flex-col gap-1"
                >
                    <button
                        disabled={isPending}
                        onClick={() => switchLocale("fr")}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left",
                            locale === "fr" ? "bg-brand-primary/10 text-brand-primary" : "text-text-secondary hover:bg-bg-secondary"
                        )}
                    >
                        <span>🇫🇷</span> Français
                    </button>
                    <button
                        disabled={isPending}
                        onClick={() => switchLocale("en")}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left",
                            locale === "en" ? "bg-brand-primary/10 text-brand-primary" : "text-text-secondary hover:bg-bg-secondary"
                        )}
                    >
                        <span>🇬🇧</span> English
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
