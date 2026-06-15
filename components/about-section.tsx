"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";

function Oscillogram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(188,19,254,0.18)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();

      const points = W / 2;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * W;
        // Irregular heart-rhythm-like oscillation
        const base = Math.sin((i / points) * Math.PI * 14 + frame * 0.008) * 10;
        const spike =
          Math.abs(Math.sin((i / points) * Math.PI * 3 + frame * 0.005)) > 0.95
            ? Math.sin((i / points) * Math.PI * 50) * 28
            : 0;
        const noise = (Math.random() - 0.5) * 1.5;
        const y = H / 2 + base + spike + noise;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden texture-overlay"
      style={{ background: "#00000066", padding: "clamp(5rem, 10vw, 9rem) 0" }}
    >
      {/* Oscillogram background */}
      <div className="absolute inset-0 z-0">
        <Oscillogram />
      </div>

      {/* Cyan ambient left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "60%",
          top: "0",
          width: "40vw",
          height: "100%",
          background:
            "radial-gradient(ellipse at right center, rgba(0,243,255,0.03) 0%, transparent 60%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <ScrollReveal direction="up" delay={0}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "rgba(232,230,224,0.3)" }}
            >
              О нас
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0.1}>
              <p
                className="font-light trembling"
                style={{
                  fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                  lineHeight: 1.75,
                  color: "rgba(232,230,224,0.85)",
                  letterSpacing: "0.015em",
                }}
              >
                Циклотимия — украшения, рождённые из противоречия. Каждое
                изделие хранит в себе напряжение между покоем и тревогой, между
                ломкостью и прочностью.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p
                className="font-light"
                style={{
                  fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "rgba(232,230,224,0.5)",
                  letterSpacing: "0.01em",
                }}
              >
                Мы не скрываем нестабильность — мы превращаем её в форму. В
                физическую память о моментах, когда внутри всё сдвигается.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p
                className="font-light"
                style={{
                  fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "rgba(232,230,224,0.4)",
                  letterSpacing: "0.01em",
                }}
              >
                Авторское серебро. Ограниченные серии. Ручная работа.
              </p>
            </ScrollReveal>
          </div>

          {/* Decorative rule */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="mt-12 flex items-center gap-0" aria-hidden="true">
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: "48px",
                  background: "rgba(188,19,254,0.5)",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: "16px",
                  background: "rgba(0,243,255,0.35)",
                  marginLeft: "4px",
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
