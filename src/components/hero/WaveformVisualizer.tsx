"use client";

import { useEffect, useRef } from "react";

interface WaveformVisualizerProps {
  isActive?: boolean;
}

export function WaveformVisualizer({ isActive = false }: WaveformVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Configuration
    const lines = 3; // Number of overlapping sine waves
    const baseColor = { r: 59, g: 130, b: 246 }; // Brand Primary (Blue)
    
    // Target values for smooth transitions
    let targetAmplitude = isActive ? 50 : 15;
    let targetSpeed = isActive ? 0.15 : 0.02;
    
    // Current values
    let currentAmplitude = 15;
    let currentSpeed = 0.02;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Double resolution for retina displays
        canvas.width = parent.clientWidth * 2;
        canvas.height = parent.clientHeight * 2;
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        ctx.scale(2, 2);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      // Smoothly interpolate towards targets (Lerp)
      targetAmplitude = isActive ? 40 : 10;
      targetSpeed = isActive ? 0.2 : 0.03;

      currentAmplitude += (targetAmplitude - currentAmplitude) * 0.1;
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;

      // Update Phase
      phaseRef.current += currentSpeed;

      // Clear Canvas
      const width = canvas.width / 2; // Accounting for scale
      const height = canvas.height / 2;
      ctx.clearRect(0, 0, width, height);

      // Draw Lines
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Offset each line slightly
        const linePhaseOffset = i * (Math.PI / 3); 
        const lineAmplitudeFactor = 1 - (i * 0.2); // Fade amplitude for secondary lines
        
        // Gradient for each line
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        const alpha = isActive ? 0.8 : 0.5;
        const fadeAlpha = Math.max(0, alpha - (i * 0.15));
        
        gradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${fadeAlpha})`);
        gradient.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        // Draw Sine Wave
        for (let x = 0; x <= width; x += 2) {
            // Complex wave function:
            // y = Amplitude * sin(Frequency * x + Phase)
            // We mix multiple frequencies for a more organic look
            
            const normalizedX = (x / width) * Math.PI * 4; // 2 periods across width
            
            // Primary Wave
            const y1 = Math.sin(normalizedX + phaseRef.current + linePhaseOffset);
            
            // Secondary Wave (for complexity)
            const y2 = Math.sin((normalizedX * 1.5) - (phaseRef.current * 0.5));

            // Envelope to taper ends
            // Creates a "bell curve" shape so ends are always 0
            const envelope = Math.sin((x/width) * Math.PI);

            const y = (height / 2) + (y1 + (y2 * 0.5)) * currentAmplitude * lineAmplitudeFactor * envelope;

            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
