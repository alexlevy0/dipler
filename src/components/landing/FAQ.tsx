"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the pricing model work?",
    answer: "We charge per minute of conversation. You only pay for what you use. The Starter plan includes 100 free minutes every month to get you going."
  },
  {
    question: "Can I bring my own LLM?",
    answer: "Yes! on the Pro plan and above, you can connect your own custom LLM (GPT-4, Claude 3, Llama 3) via API key for full control over the intelligence."
  },
  {
    question: "Is Dipler HIPPA compliant?",
    answer: "Absolutely. Our Enterprise tier offers full HIPAA compliance, BAA signing, and dedicated secure infrastructure for healthcare providers."
  },
  {
    question: "What languages do you support?",
    answer: "We support over 100 languages with native-level accents. You can even switch languages mid-conversation seamlessly."
  },
  {
    question: "How fast is the latency really?",
    answer: "Our globally distributed edge network delivers median audio-to-audio latency of under 500ms, with many regions seeing <300ms. It feels instantaneous."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden" id="faq">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-white to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about the platform.
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

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={false}
            className={cn(
                "border border-border-light rounded-2xl bg-white overflow-hidden transition-all duration-300",
                isOpen ? "shadow-md border-brand-primary/30" : "hover:border-brand-primary/20"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={cn("text-lg font-bold transition-colors", isOpen ? "text-brand-primary" : "text-text-primary")}>
                    {faq.question}
                </span>
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-brand-primary text-white rotate-180" : "bg-bg-secondary text-text-secondary"
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
                        <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-dashed border-border-light pt-4 mx-6 mt-2">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
