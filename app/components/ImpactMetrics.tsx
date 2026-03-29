"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const metrics = [
  { value: 50, suffix: "+", label: "Global Keynotes", desc: "Across 4 continents" },
  { value: 100, suffix: "K+", label: "Lives Impacted", desc: "Students & professionals" },
  { value: 3, suffix: "", label: "Best-Selling Books", desc: "Published internationally" },
  { value: 20, suffix: "+", label: "Years in Academia", desc: "Shaping future leaders" },
];

function Counter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.round(eased * target);
      setCount(start);
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden bg-[var(--th-bg)] transition-colors duration-300"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[var(--th-border-subtle)] animate-[spin_180s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[var(--th-border-subtle)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/[0.01] rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em]">
              Impact
            </span>
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--th-text)] tracking-tight">
            Global Footprint
          </h2>
          <p className="text-[var(--th-text-4)] max-w-lg mx-auto text-base font-light leading-relaxed mt-6">
            A legacy of transformative leadership spanning continents,
            classrooms, and boardrooms.
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2 + idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl bg-[var(--th-card)] border border-[var(--th-border)] hover:border-[#d4af37]/20 transition-all duration-700 p-6 md:p-8 overflow-hidden text-center"
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#d4af37]/30 group-hover:w-20 transition-all duration-700" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--th-text)] tracking-tight tabular-nums">
                  <Counter
                    target={metric.value}
                    suffix={metric.suffix}
                    inView={isInView}
                  />
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#d4af37]/70 font-medium">
                  {metric.label}
                </p>
                <p className="mt-2 text-[11px] text-[var(--th-text-4)] font-light">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
    </section>
  );
}
