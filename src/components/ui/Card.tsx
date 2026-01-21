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
          "bg-white/80 backdrop-blur-xl border border-white/60 shadow-sm overflow-hidden rounded-2xl relative",
          "group/card hover:border-brand-primary/30 hover:shadow-glow transition-all duration-500",
          className
        )}
        {...props}
      >
        {/* Spotlight Overlay using CSS variables from parent */}
        <div 
            className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300"
            style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)`
            }}
        />
        
        {/* Border Reveal - Uses mask to show gradient border only near mouse */}
        <div 
             className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-30"
             style={{
                 background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.4), transparent 40%)`,
                 maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                 maskComposite: "exclude",
                 WebkitMaskComposite: "xor",
                 padding: "1px", // Border width
                 borderRadius: "inherit"
             }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full">
            {children}
        </div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
