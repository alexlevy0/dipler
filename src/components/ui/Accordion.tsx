"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border-light last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-brand-primary" : "text-text-primary group-hover:text-brand-primary"
        )}>
          {question}
        </span>
        <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-brand-primary text-white rotate-180" : "bg-bg-tertiary text-text-secondary group-hover:bg-brand-primary/10 group-hover:text-brand-primary"
        )}>
            {isOpen ? <X size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text-secondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
