"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Workflow, PhoneCall, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Build",
    description: "Design your agent with our visual builder. No coding required.",
    icon: Workflow,
    details: "Drag and drop nodes to create complex conversation flows. Use our pre-built templates for healthcare, real estate, and more.",
    image: "/images/step-build.svg" // Placeholder
  },
  {
    id: 2,
    title: "Evaluate",
    description: "Test with simulated calls and auto-QA.",
    icon: PhoneCall,
    details: "Run thousands of simulated conversations to identify edge cases. Our AI evaluator provides instant feedback and improvement suggestions.",
    image: "/images/step-evaluate.svg" // Placeholder
  },
  {
    id: 3,
    title: "Launch",
    description: "Deploy with one click to phone, web, or app.",
    icon: Rocket,
    details: "Purchase phone numbers instantly or bring your own. Embed the web widget with one line of code. Scale to infinity.",
    image: "/images/step-launch.svg" // Placeholder
  },
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-bg-primary overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            From idea to production in minutes
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We've streamlined the process so you can focus on building great experiences.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-bg-tertiary transform -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: progressHeight }} 
              className="w-full bg-gradient-to-b from-brand-primary to-brand-secondary origin-top"
            />
          </div>

          <div className="flex flex-col gap-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary font-bold text-xl mb-4 shadow-sm">
                    {step.id}
                  </div>
                  <h3 className="text-3xl font-bold font-display text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg font-semibold text-text-secondary mb-2">
                    {step.description}
                  </p>
                  <p className="text-text-tertiary leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12">
                   <div className="w-4 h-4 rounded-full bg-brand-primary ring-4 ring-white shadow-md" />
                </div>

                {/* Visual Content */}
                <div className="flex-1 w-full">
                  <Card className="aspect-video bg-bg-tertiary/50 border-dashed border-2 flex items-center justify-center group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-accent to-bg-secondary opacity-50" />
                    <step.icon className="w-16 h-16 text-text-tertiary group-hover:text-brand-primary group-hover:scale-110 transition-all duration-500 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                         {/* Placeholder for actual UI preview */}
                         <div className="w-3/4 h-3/4 bg-white shadow-xl rounded-lg transform rotate-2"></div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
