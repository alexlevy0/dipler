"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { ReactNode } from "react";

export function SmoothScroller({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    }}>
      {children}
    </ReactLenis>
  );
}
