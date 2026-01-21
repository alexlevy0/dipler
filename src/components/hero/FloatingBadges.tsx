"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Database, Globe } from "lucide-react";

export function FloatingBadges() {
  const badgeVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <motion.div
        custom={0}
        variants={badgeVariants}
        animate="animate"
        className="absolute -top-6 -right-6 hidden md:block z-10"
      >
        <Badge variant="success" className="bg-white/90 backdrop-blur-sm shadow-md py-1 px-3">
          <ShieldCheck className="w-3 h-3 mr-1" />
          SOC2 Compliant
        </Badge>
      </motion.div>
      <motion.div
        custom={1}
        variants={badgeVariants}
        animate="animate"
        className="absolute top-1/2 -left-12 hidden md:block z-10"
      >
        <Badge variant="brand" className="bg-white/90 backdrop-blur-sm shadow-md py-1 px-3">
          <Globe className="w-3 h-3 mr-1" />
          100+ Languages
        </Badge>
      </motion.div>
      <motion.div
        custom={2}
        variants={badgeVariants}
        animate="animate"
        className="absolute -bottom-4 right-1/4 hidden md:block z-10"
      >
        <Badge variant="warning" className="bg-white/90 backdrop-blur-sm shadow-md py-1 px-3">
          <Database className="w-3 h-3 mr-1" />
          GDPR Ready
        </Badge>
      </motion.div>
    </>
  );
}
