"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export function WordReveal({ text, className, delay = 0, as: Component = "h2" }: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] -mb-2 pb-2 align-bottom">
            <motion.span
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.05,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}
