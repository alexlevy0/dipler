"use client";

import { useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function CountUp({ end, duration = 2, suffix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth stop
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentCount = progress === 1 ? end : end * easeOutQuart;
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);
  
  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}
