"use client";
import { useEffect, useRef } from "react";

interface WaveLayer {
  amplitude:   number;
  frequency:   number;
  speed:       number;
  phase:       number;
  yBase:       number; // 0–1 relative to canvas height
  colorStop1:  string;
  colorStop2:  string;
  opacity:     number;
}

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0.5, y: 0.5 }); // normalised 0–1

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    // ── Wave layer definitions ────────────────────────────────
    const layers: WaveLayer[] = [
      // Deepest / widest — amber base
      {
        amplitude: 0.14, frequency: 0.0018, speed: 0.004,
        phase: 0,        yBase: 0.62,
        colorStop1: "rgba(245,158,11,0.18)",
        colorStop2: "rgba(245,158,11,0.0)",
        opacity: 1,
      },
      // Second — orange tint
      {
        amplitude: 0.11, frequency: 0.0025, speed: 0.006,
        phase: 1.2,      yBase: 0.58,
        colorStop1: "rgba(251,146,60,0.14)",
        colorStop2: "rgba(251,146,60,0.0)",
        opacity: 1,
      },
      // Mid — yellow-amber
      {
        amplitude: 0.09, frequency: 0.003,  speed: 0.009,
        phase: 2.5,      yBase: 0.52,
        colorStop1: "rgba(252,211,77,0.12)",
        colorStop2: "rgba(252,211,77,0.0)",
        opacity: 1,
      },
      // Upper-mid — warm gold
      {
        amplitude: 0.07, frequency: 0.004,  speed: 0.012,
        phase: 0.7,      yBase: 0.46,
        colorStop1: "rgba(245,158,11,0.09)",
        colorStop2: "rgba(245,158,11,0.0)",
        opacity: 1,
      },
      // Near-top — thin bright highlight
      {
        amplitude: 0.04, frequency: 0.006,  speed: 0.018,
        phase: 3.8,      yBase: 0.38,
        colorStop1: "rgba(253,224,71,0.07)",
        colorStop2: "rgba(253,224,71,0.0)",
        opacity: 1,
      },
      // Very top shimmer
      {
        amplitude: 0.025, frequency: 0.009, speed: 0.025,
        phase: 1.9,       yBase: 0.28,
        colorStop1: "rgba(255,255,255,0.04)",
        colorStop2: "rgba(255,255,255,0.0)",
        opacity: 1,
      },
    ];

    // ── Resize ────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse ─────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / canvas.width,
        y: (e.clientY - rect.top)  / canvas.height,
      };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    // ── Draw a single wave layer ──────────────────────────────
    function drawLayer(layer: WaveLayer, t: number) {
      if (!ctx || !canvas) return;

      const { amplitude, frequency, speed, yBase, colorStop1, colorStop2 } = layer;
      const W = canvas.width;
      const H = canvas.height;

      // Mouse distortion — subtle vertical pull near cursor
      const mx    = mouseRef.current.x * W;
      const myOff = (mouseRef.current.y - 0.5) * 0.06; // ±0.03

      const baseY = yBase * H;

      ctx.beginPath();
      ctx.moveTo(0, H);

      for (let x = 0; x <= W; x += 2) {
        // Primary wave
        const primary = Math.sin(x * frequency + t * speed + layer.phase) * amplitude * H;

        // Secondary harmonic (half amplitude, double freq)
        const harmonic = Math.sin(x * frequency * 2.1 + t * speed * 1.4 + layer.phase * 0.7)
          * amplitude * H * 0.35;

        // Mouse proximity distortion
        const distX  = (x - mx) / W;
        const mouseD = Math.exp(-distX * distX * 12) * myOff * H * 0.4;

        const y = baseY + primary + harmonic + mouseD;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(W, H);
      ctx.closePath();

      // Vertical gradient fill
      const grad = ctx.createLinearGradient(0, baseY - amplitude * H, 0, H);
      grad.addColorStop(0,   colorStop1);
      grad.addColorStop(0.6, colorStop2);
      grad.addColorStop(1,   "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.fill();

      // Glowing stroke on wave crest
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= W; x += 2) {
        const primary  = Math.sin(x * frequency + t * speed + layer.phase) * amplitude * H;
        const harmonic = Math.sin(x * frequency * 2.1 + t * speed * 1.4 + layer.phase * 0.7)
          * amplitude * H * 0.35;
        const distX  = (x - mx) / W;
        const mouseD = Math.exp(-distX * distX * 12) * myOff * H * 0.4;
        ctx.lineTo(x, baseY + primary + harmonic + mouseD);
      }
      ctx.strokeStyle = colorStop1.replace(/[\d.]+\)$/, "0.45)");
      ctx.lineWidth   = 1.2;
      ctx.stroke();
    }

    // ── Horizontal scan-line shimmer ──────────────────────────
    function drawScanLines() {
      if (!ctx || !canvas) return;
      const H = canvas.height;
      const W = canvas.width;
      // Very subtle horizontal lines for depth
      for (let y = 0; y < H; y += 80) {
        const alpha = 0.015 + Math.sin(frame * 0.008 + y * 0.05) * 0.008;
        ctx.fillStyle = `rgba(245,158,11,${alpha})`;
        ctx.fillRect(0, y, W, 1);
      }
    }

    // ── Vignette ──────────────────────────────────────────────
    function drawVignette() {
      if (!ctx || !canvas) return;
      const W = canvas.width;
      const H = canvas.height;

      // Left edge glow
      const leftGrad = ctx.createLinearGradient(0, 0, W * 0.25, 0);
      leftGrad.addColorStop(0,   "rgba(245,158,11,0.04)");
      leftGrad.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 0, W, H);

      // Right edge glow
      const rightGrad = ctx.createLinearGradient(W, 0, W * 0.75, 0);
      rightGrad.addColorStop(0,   "rgba(251,146,60,0.03)");
      rightGrad.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = rightGrad;
      ctx.fillRect(0, 0, W, H);
    }

    // ── Subtle grid ───────────────────────────────────────────
    function drawGrid() {
      if (!ctx || !canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      const size = 64;
      const pulse = 0.03 + Math.sin(frame * 0.005) * 0.015;

      ctx.strokeStyle = `rgba(245,158,11,${pulse})`;
      ctx.lineWidth   = 0.4;

      // Vertical lines
      for (let x = 0; x < W; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = 0; y < H; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    }

    // ── Main draw loop ────────────────────────────────────────
    function draw() {
      if (!ctx || !canvas) return;
      frame++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Grid (deepest layer)
      drawGrid();

      // 2. Scan-line shimmer
      drawScanLines();

      // 3. Wave layers — back to front
      for (const layer of layers) {
        drawLayer(layer, frame);
      }

      // 4. Subtle radial vignette on sides
      drawVignette();

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
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
