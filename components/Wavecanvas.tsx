"use client";
import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const LINES = 22;
    const SPEED = 0.008;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let l = 0; l < LINES; l++) {
        const progress = l / LINES;
        const yBase    = canvas.height * 0.15 + l * (canvas.height * 0.042);
        const alpha    = 0.15 + progress * 0.45;   // 🔥 much more visible
        const freq     = 0.006 + progress * 0.005;
        const amp      = 55 + progress * 70;        // 🔥 bigger amplitude
        const phase    = t + l * 0.35;

        // Vibrant purple-violet-pink gradient
        const r = Math.round(100 + progress * 130);
        const g = Math.round(0   + progress * 10);
        const b = Math.round(220 + progress * 35);

        ctx.beginPath();
        ctx.moveTo(0, yBase);

        for (let x = 0; x <= canvas.width; x += 2) {
          const y = yBase
            + Math.sin(x * freq + phase) * amp
            + Math.sin(x * freq * 2.1 + phase * 1.3) * amp * 0.35
            + Math.cos(x * freq * 0.5 + phase * 0.6) * amp * 0.2;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth   = 1.0 + progress * 1.5;   // 🔥 thicker lines
        ctx.stroke();
      }

      t += SPEED;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
