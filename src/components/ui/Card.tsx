"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8, boxShadow: "var(--shadow-lg)" } : undefined}
        transition={{ duration: 0.3 }}
        className={cn(
          "bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm overflow-hidden rounded-2xl",
          "hover:border-brand-primary/20 hover:shadow-glow transition-colors duration-300",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        <div className="relative z-10">
            {children}
        </div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
