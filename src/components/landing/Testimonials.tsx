"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

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
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
            Loved by teams worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 flex flex-col items-center text-center">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl mx-auto mb-3">
                        {t.avatar}
                    </div>
                    <div className="font-bold text-text-primary">{t.author}</div>
                    <div className="text-sm text-text-tertiary">{t.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
