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
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
      
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
      
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setOpacity(1);
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    return (
      <motion.div
        ref={divRef} // Using internal ref for rect
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={hoverEffect ? { y: -5 } : undefined} // Subtler lift
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-white/80 backdrop-blur-xl border border-white/60 shadow-sm overflow-hidden rounded-2xl relative",
          "hover:border-brand-primary/30 hover:shadow-glow transition-all duration-500",
          className
        )}
        {...props}
      >
        {/* Spotlight Overlay */}
        <div 
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
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
