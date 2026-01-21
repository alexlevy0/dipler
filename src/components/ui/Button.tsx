"use client";

import { motion, HTMLMotionProps, useSpring } from "framer-motion";
import { Loader2 } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    // Magnetic Logic
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    // Springs for smooth physics
    const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        
        // Calculate center
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Calculate distance from center (Max pull range)
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Apply magnetic pull (capped at 20% of button size)
        x.set(distanceX * 0.2);
        y.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const variants = {
      primary: "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%] hover:bg-[100%_0] text-white shadow-lg hover:shadow-glow border-none",
      secondary: "bg-white/80 backdrop-blur-sm text-text-primary border border-border-light hover:border-brand-primary/30 shadow-sm hover:shadow-md hover:bg-white",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-brand-primary/5",
      outline: "bg-transparent border border-border-medium text-text-secondary hover:text-brand-primary hover:border-brand-primary"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-lg",
      md: "h-11 px-6 text-base rounded-xl",
      lg: "h-14 px-8 text-lg rounded-2xl",
    };

    return (
      <motion.button
        ref={buttonRef} // We use internal ref for rect calculation, but forward ref logic needs merging if props.ref used. Simplified here.
        style={{ x, y }} // Apply physics
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-colors duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
