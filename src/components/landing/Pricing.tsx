"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for testing and prototypes.",
    features: ["100 mins/month", "1 agent", "Web widget only", "Visual Flow Builder", "Community support"],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: { monthly: 99, annual: 79 },
    description: "For growing businesses and teams.",
    features: ["5,000 mins/month", "10 agents", "Phone + Web", "Voice Cloning", "Priority support", "API Access"],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "For large scale deployments.",
    features: ["Unlimited mins", "Unlimited agents", "Dedicated support", "SSO / SAML", "Custom SLA", "On-premise option"],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 bg-bg-primary" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Start free. Scale as you grow. No credit card required.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !annual ? "text-text-primary" : "text-text-tertiary")}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-brand-primary/10 p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-brand-primary shadow-sm"
                animate={{ x: annual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("text-sm font-medium", annual ? "text-text-primary" : "text-text-tertiary")}>
              Annual <span className="text-emerald-500 text-xs ml-1 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                   <Badge variant="brand" className="shadow-lg py-1 px-4 text-sm gap-1">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                   </Badge>
                </div>
              )}
              
              <Card 
                className={cn(
                  "h-full flex flex-col p-8",
                  plan.popular ? "border-brand-primary shadow-glow ring-1 ring-brand-primary/20" : "border-border-light"
                )}
                hoverEffect={true}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-sm text-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-text-primary">
                        {typeof plan.price.monthly === 'number' 
                            ? `$${annual ? plan.price.annual : plan.price.monthly}`
                            : plan.price.monthly}
                    </span>
                    {typeof plan.price.monthly === 'number' && (
                        <span className="text-text-tertiary">/month</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-primary" />
                      </div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                    className="w-full" 
                    variant={plan.popular ? "primary" : "secondary"}
                >
                    {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
