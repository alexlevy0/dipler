"use client";

import { motion } from "framer-motion";

export function WaveformVisualizer({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="flex items-center gap-1 h-8">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-brand-primary to-brand-secondary rounded-full"
          animate={{
            height: isActive 
              ? [8, Math.random() * 24 + 8, 8] 
              : [4, 8, 4]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
