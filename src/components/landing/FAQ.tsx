"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What makes Dipler different from other platforms?",
    answer: "Dipler combines the lowest latency in the market (<100ms) with a visual flow builder, making it accessible for both developers and non-technical teams. Plus, our voice cloning and in-house telephony infrastructure provide meaningful cost savings at scale."
  },
  {
    question: "How does pricing work?",
    answer: "We offer a generous free tier for experimentation. Paid plans start at $99/month and include minutes, phone numbers, and advanced features. You only pay for what you use beyond your plan limits."
  },
  {
    question: "Is Dipler HIPAA compliant?",
    answer: "Yes, Dipler is fully HIPAA compliant and SOC2 Type II certified. We sign BAA agreements for Enterprise customers to ensure your patient data is handled with the highest security standards."
  },
  {
    question: "Can I use my own phone numbers?",
    answer: "Absolutely. You can port your existing numbers to Dipler or verify them to use as caller ID. We also provide new numbers in over 50 countries instantly."
  },
  {
    question: "What languages do you support?",
    answer: "We support over 100 languages and dialects with native-sounding accents. You can even switch languages mid-conversation if the user changes their preference."
  },
  {
    question: "How do I get started?",
    answer: "Click 'Start Free' to create an account. You'll be able to build your first agent in minutes using our templates. No credit card required for the free tier."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center bg-bg-secondary p-8 rounded-2xl border border-border-light">
          <p className="text-lg font-medium text-text-primary mb-4">
            Still have questions?
          </p>
          <Button variant="secondary" className="gap-2">
            Contact our team <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
