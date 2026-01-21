"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const useCases = [
  {
    industry: "Healthcare",
    quote: "Dipler reduced our appointment no-shows by 40% and freed our staff to focus on patient care.",
    author: "Dr. Sarah Chen, MedCare Clinic",
    features: ["Appointment scheduling", "Prescription refills", "Insurance verification", "Follow-up calls"],
    color: "bg-blue-500",
  },
  {
    industry: "Real Estate",
    quote: "We're qualifying leads 24/7 now. Our agents only talk to serious buyers who are ready to view properties.",
    author: "James Wilson, LuxLiving",
    features: ["Lead qualification", "Property inquiries", "Tour scheduling", "Database updates"],
    color: "bg-emerald-500",
  },
  {
    industry: "E-commerce",
    quote: "Customer satisfaction scores went up 15% after we implemented Dipler for order status checks.",
    author: "Lisa Wang, ShopTrendy",
    features: ["Order status", "Returns processing", "Product FAQ", "Support ticket creation"],
    color: "bg-purple-500",
  },
  {
    industry: "Finance",
    quote: "Security was our top concern. Dipler's SOC2 compliance making the switch easy.",
    author: "Robert Miller, FinGuard",
    features: ["Account inquiries", "Fraud alerts", "Payment processing", "Identity verification"],
    color: "bg-amber-500",
  },
];

export function UseCases() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="py-24 bg-bg-primary overflow-hidden relative" id="solutions">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Powering voice AI across industries
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      {/* Note: Ideally this would be a sticky horizontal scroll, but for simplicity in this artifact we'll do a marquee-like drag or just a grid on mobile/tablet and horizontal on desktop if desired. 
          For "Airy Premium", a clean carousel or grid is best. Let's do a horizontal scroll container. */}
      
      <div className="overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex px-4 md:px-6 gap-6 w-max mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-[350px] md:w-[450px]"
            >
              <Card className="h-full flex flex-col p-8 border-t-4" style={{ borderColor: useCase.color }}>
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${useCase.color}`}>
                    {useCase.industry}
                  </span>
                  <blockquote className="text-lg font-medium text-text-primary leading-relaxed mb-4">
                    "{useCase.quote}"
                  </blockquote>
                  <cite className="text-sm text-text-secondary not-italic block">
                     — {useCase.author}
                  </cite>
                </div>

                <div className="mt-auto space-y-3 pt-6 border-t border-border-light">
                  {useCase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-brand-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                     <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-brand-primary">
                        Read case study <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
