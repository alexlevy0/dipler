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
        whileHover={hoverEffect ? { y: -5 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-2xl relative",
          "group/card hover:border-brand-primary/30 hover:shadow-glow transition-all duration-500",
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
