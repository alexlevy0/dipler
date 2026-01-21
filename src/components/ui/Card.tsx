"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8, boxShadow: "var(--shadow-lg)" } : undefined}
        transition={{ duration: 0.3 }}
        className={cn(
          "bg-white rounded-2xl border border-border-light p-6 shadow-sm overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
