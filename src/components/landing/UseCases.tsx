"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Activity, Building, ShoppingBag, Landmark } from "lucide-react";
import { WordReveal } from "@/components/text/WordReveal";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "healthcare",
    industry: "Inbound Patient Scheduling",
    title: "Medical Receptionist",
    description: "We automated 80% of appointment confirmations. No one realized they spoke to a robot.",
    stats: "40% reduction in no-shows",
    icon: Activity,
    features: ["Appointment scheduling", "Prescription refills", "Insurance verification"],
    color: "bg-blue-500",
    gradient: "from-blue-500/10 to-blue-600/10",
    borderColor: "group-hover:border-blue-500/50",
    textColor: "text-blue-600"
  },
  {
    id: "realestate",
    industry: "24/7 Lead Qualification",
    title: "Lead Qualification",
    description: "Our agents qualify leads at 3 AM and book meetings directly into sales calendars.",
    stats: "24/7 lead coverage",
    icon: Building,
    features: ["Lead qualification", "Tour scheduling", "CRM sync"],
    color: "bg-emerald-500",
    gradient: "from-emerald-500/10 to-emerald-600/10",
    borderColor: "group-hover:border-emerald-500/50",
    textColor: "text-emerald-600"
  },
  {
    id: "ecommerce",
    industry: "L1 Customer Triage",
    title: "Support & Order Status",
    description: "Handle \"Where is my order?\" calls instantly. Process returns and answer product FAQs at scale.",
    stats: "15% increase in CSAT",
    icon: ShoppingBag,
    features: ["Order tracking", "Returns processing", "Product FAQs"],
    color: "bg-purple-500",
    gradient: "from-purple-500/10 to-purple-600/10",
    borderColor: "group-hover:border-purple-500/50",
    textColor: "text-purple-600"
  },
  {
    id: "finance",
    industry: "Finance",
    title: "Identity & Fraud Alerts",
    description: "Securely verify customer identity for high-value transactions and alert users of suspicious activity in real-time.",
    stats: "SOC2 Compliant Security",
    icon: Landmark,
    features: ["Identity verification", "Fraud detection", "Account unlocks"],
    color: "bg-amber-500",
    gradient: "from-amber-500/10 to-amber-600/10",
    borderColor: "group-hover:border-amber-500/50",
    textColor: "text-amber-600"
  },
];

export function UseCases() {
  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden" id="solutions">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <WordReveal 
             as="h2" 
             text="Built for every industry"
             className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
          />
          <p className="text-xl text-text-secondary">
            Deploy specialized voice agents that understand the nuance of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
                <motion.div
                    key={useCase.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className={cn(
                        "group relative h-full p-8 md:p-10 transition-all duration-500 border border-border-light hover:shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm",
                        useCase.borderColor
                    )}>
                        {/* Hover Gradient Background */}
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br",
                            useCase.gradient
                        )} />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div className={cn("p-3 rounded-2xl bg-white shadow-sm ring-1 ring-black/5", useCase.textColor)}>
                                    <useCase.icon size={32} />
                                </div>
                                <span className={cn("px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm ring-1 ring-black/5", useCase.textColor)}>
                                    {useCase.industry}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                                {useCase.title}
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-8 flex-grow">
                                {useCase.description}
                            </p>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    {useCase.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                                            <div className={cn("w-1.5 h-1.5 rounded-full", useCase.color)} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-border-light/50 flex items-center justify-between">
                                    <span className="font-semibold text-text-primary">{useCase.stats}</span>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 bg-white shadow-sm ring-1 ring-black/5",
                                        useCase.textColor
                                    )}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
