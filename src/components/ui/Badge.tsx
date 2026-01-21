import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "brand";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-bg-tertiary/50 backdrop-blur-md text-text-secondary border border-border-light",
      success: "bg-accent-success/10 backdrop-blur-md text-accent-success border border-accent-success/20",
      warning: "bg-accent-warning/10 backdrop-blur-md text-accent-warning border border-accent-warning/20",
      error: "bg-accent-coral/10 backdrop-blur-md text-accent-coral border border-accent-coral/20",
      brand: "bg-brand-primary/10 backdrop-blur-md text-brand-primary border border-brand-primary/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors shadow-sm",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
