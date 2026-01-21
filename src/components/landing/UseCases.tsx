"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";
import { WordReveal } from "@/components/text/WordReveal";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "healthcare",
    industry: "Healthcare",
    title: "Patient Intake & Scheduling",
    quote: "Dipler reduced our appointment no-shows by 40% and freed our staff to focus on patient care.",
    author: "Dr. Sarah Chen, MedCare Clinic",
    features: ["Appointment scheduling", "Prescription refills", "Insurance verification", "Follow-up calls"],
    color: "bg-blue-500",
    gradient: "from-blue-500/20 to-blue-600/5",
    cardColor: "border-blue-500/20 shadow-blue-500/10"
  },
  {
    id: "realestate",
    industry: "Real Estate",
    title: "Lead Qualification & Scheduling",
    quote: "We're qualifying leads 24/7 now. Our agents only talk to serious buyers who are ready to view properties.",
    author: "James Wilson, LuxLiving",
    features: ["Lead qualification", "Property inquiries", "Tour scheduling", "Database updates"],
    color: "bg-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    cardColor: "border-emerald-500/20 shadow-emerald-500/10"
  },
  {
    id: "ecommerce",
    industry: "E-commerce",
    title: "24/7 Customer Support",
    quote: "Customer satisfaction scores went up 15% after we implemented Dipler for order status checks.",
    author: "Lisa Wang, ShopTrendy",
    features: ["Order status", "Returns processing", "Product FAQ", "Support ticket creation"],
    color: "bg-purple-500",
    gradient: "from-purple-500/20 to-purple-600/5",
    cardColor: "border-purple-500/20 shadow-purple-500/10"
  },
  {
    id: "finance",
    industry: "Finance",
    title: "Identity Verification & Alerts",
    quote: "Security was our top concern. Dipler's SOC2 compliance making the switch easy.",
    author: "Robert Miller, FinGuard",
    features: ["Account inquiries", "Fraud alerts", "Payment processing", "Identity verification"],
    color: "bg-amber-500",
    gradient: "from-amber-500/20 to-amber-600/5",
    cardColor: "border-amber-500/20 shadow-amber-500/10"
  },
];

function UseCaseCard({ useCase, isActive }: { useCase: typeof useCases[0], isActive: boolean }) {
     return (
        <Card 
            className={cn(
                "p-8 h-full transition-all duration-500 border border-white/40", 
                isActive ? `bg-white/80 shadow-2xl ${useCase.cardColor} scale-105` : "bg-white/30 opacity-50 blur-[2px] scale-95"
            )}
        >
             <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${useCase.color}`}>
                {useCase.industry}
                </span>
                <blockquote className="text-xl font-medium text-text-primary leading-relaxed mb-4">
                "{useCase.quote}"
                </blockquote>
                <cite className="text-sm text-text-secondary not-italic block">
                    — {useCase.author}
                </cite>
            </div>

            <div className="space-y-3 pt-6 border-t border-border-light">
                {useCase.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-brand-primary" />
                    {feature}
                </div>
                ))}
            </div>
        </Card>
     )
}

export function UseCases() {
  const [activeId, setActiveId] = useState(useCases[0].id);

  // Using IntersectionObserver approach for simplicity and performance
  useEffect(() => {
    const observers = useCases.map((useCase) => {
        const element = document.getElementById(`usecase-${useCase.id}`);
        if (!element) return null;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveId(useCase.id);
                }
            },
            { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
        );

        observer.observe(element);
        return observer;
    });

    return () => {
        observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-bg-primary relative" id="solutions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <WordReveal 
             as="h2" 
             text="Powering voice AI across industries"
             className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Sticky Left Column: Text Content */}
            <div className="hidden lg:block h-screen sticky top-0 flex items-center">
                <div className="relative w-full h-[400px]">
                     {useCases.map((useCase, index) => (
                         <div 
                            key={useCase.id}
                            className={cn(
                                "absolute inset-0 transition-opacity duration-500 flex flex-col justify-center",
                                activeId === useCase.id ? "opacity-100 z-10" : "opacity-0 z-0"
                            )}
                         >
                            <WordReveal 
                                text={useCase.industry}
                                className={cn("text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r", useCase.color === 'bg-blue-500' ? "from-blue-600 to-indigo-600" : useCase.color === 'bg-emerald-500' ? "from-emerald-600 to-teal-600" : useCase.color === 'bg-purple-500' ? "from-purple-600 to-violet-600" : "from-amber-600 to-orange-600")}
                            />
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                {useCase.title}
                            </h3>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-md">
                                Intelligent voice agents tailored for <span className="font-semibold text-text-primary">{useCase.industry}</span>. 
                                Automate your most repetitive calls with human-level accuracy.
                            </p>
                            
                            {/* Decorative background blob for active state */}
                            <div className={cn(
                                "absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full blur-[100px] -z-10 transition-colors duration-700 bg-gradient-to-br opacity-20",
                                useCase.gradient
                            )} />
                         </div>
                     ))}
                </div>
            </div>

            {/* Right Scrollable Column: Cards */}
            <div className="space-y-[30vh] py-[10vh]">
                {useCases.map((useCase) => (
                    <div 
                        key={useCase.id} 
                        id={`usecase-${useCase.id}`}
                        className="min-h-[50vh] flex items-center justify-center"
                    >
                         <UseCaseCard useCase={useCase} isActive={activeId === useCase.id} />
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}
