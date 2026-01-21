"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Placeholder for logos - In a real app these would be SVG components or images
const integrations = [
  "Salesforce", "HubSpot", "Twilio", "Slack", 
  "Zapier", "Make", "Gong", "Zendesk",
  "OpenAI", "Google", "Calendly", "Airtable",
  "n8n", "RingCentral", "Freshworks", "Shopify"
];

export function Integrations() {
  return (
    <section className="py-24 bg-bg-secondary" id="integrations">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
            Connects with the tools you already use
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Seamlessly integrate with your existing stack. No custom code required.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
          {integrations.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="aspect-square bg-white rounded-2xl shadow-sm border border-border-light flex items-center justify-center p-4 group transition-shadow hover:shadow-md cursor-pointer"
            >
              <span className="text-xs font-bold text-text-tertiary group-hover:text-brand-primary transition-colors text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <Button variant="outline" className="gap-2">
                See all 40+ integrations <ArrowRight className="w-4 h-4" />
            </Button>
        </div>
      </div>
    </section>
  );
}
