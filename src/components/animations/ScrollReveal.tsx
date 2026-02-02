"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  distance?: number;
  blur?: boolean;
}

export function ScrollReveal({ 
  children, 
  width = "100%", 
  className, 
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  blur = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getHiddenVariant = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: distance };
      case "right": return { opacity: 0, x: -distance };
      case "zoom": return { opacity: 0, scale: 0.95 };
      default: return { opacity: 0, y: distance };
    }
  };

  const getVisibleVariant = () => {
    switch (direction) {
      case "zoom": return { opacity: 1, scale: 1, x: 0, y: 0 };
      default: return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={cn("relative", className)}>
      <motion.div
        variants={{
          hidden: { ...getHiddenVariant(), filter: blur ? "blur(4px)" : "none" },
          visible: { ...getVisibleVariant(), filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
