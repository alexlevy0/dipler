"use client";

import { motion } from "framer-motion";
import { User, Stethoscope, Briefcase, ShoppingBag, Phone } from "lucide-react";

export function Avatar({ type = "default", isSpeaking = false }: { type?: string, isSpeaking?: boolean }) {
  const getIcon = () => {
    switch(type) {
      case "Healthcare": return Stethoscope;
      case "Real Estate": return Briefcase;
      case "E-commerce": return ShoppingBag;
      case "Support": return Phone;
      default: return User;
    }
  };

  const Icon = getIcon();

  return (
    <div className="relative">
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 flex items-center justify-center shadow-lg ${isSpeaking ? "shadow-glow" : ""}`}>
         <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
            <Icon className="w-8 h-8 text-brand-primary z-10 relative" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-brand-primary/10"></div>
         </div>
      </div>
      {isSpeaking && (
        <motion.div
            className="absolute -inset-1 rounded-full border-2 border-brand-primary"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
    </div>
  );
}
