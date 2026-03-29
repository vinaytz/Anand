"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    url: "/gallery/stage.jpeg",
    label: "Keynote Excellence",
    desc: "Commanding the stage at International Summits.",
    accent: "from-amber-900/80",
  },
  {
    url: "/gallery/stage2.jpeg",
    label: "Strategic Leadership",
    desc: "Guiding boards and academic councils.",
    accent: "from-[#1a1a2e]/80",
  },
  {
    url: "/gallery/stage_speaking2.jpeg",
    label: "Mentorship",
    desc: "Connecting deeply with the next generation.",
    accent: "from-[#0d1b2a]/80",
  },
];

function ParallaxColumn({
  img,
  index,
}: {
  img: (typeof images)[0];
  index: number;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    index === 1 ? ["5%", "-5%"] : ["-3%", "3%"]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="group relative"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#d4af37]/20 via-transparent to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

      <div
        className="relative overflow-hidden rounded-3xl border border-[var(--th-border)] group-hover:border-[#d4af37]/20 transition-all duration-700 shadow-2xl"
        style={{
          height: "75vh",
        }}
      >
        {/* Parallax image */}
        <motion.div className="absolute inset-[-10%]" style={{ y }}>
          <img
            src={img.url}
            alt={img.desc}
            className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-110 group-hover:brightness-110"
          />
        </motion.div>

        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--th-bg)] via-[var(--th-bg-40)] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        <div className={`absolute inset-0 bg-gradient-to-t ${img.accent} to-transparent opacity-30 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />

        {/* Subtle inner border glow */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[var(--th-border)] group-hover:ring-[#d4af37]/10 transition-all duration-700" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full p-8 md:p-10"
        >
          {/* Gold accent line with glow */}
          <motion.div
            className="relative w-10 h-[2px] mb-6 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[#d4af37]" />
            <div className="absolute inset-0 bg-[#d4af37] blur-sm opacity-60" />
          </motion.div>

          <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em] mb-3 font-medium">
            {img.label}
          </p>
          <h3 className="text-2xl md:text-3xl font-serif text-[var(--th-text)] leading-snug max-w-sm drop-shadow-lg">
            {img.desc}
          </h3>

          {/* Hover reveal arrow */}
          <div className="mt-5 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-6 h-[1px] bg-[var(--th-text-3)]" />
            <svg className="w-3 h-3 text-[var(--th-text-3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Index number — more visible with glass feel */}
        <div className="absolute top-8 right-8 text-[var(--th-watermark)] text-9xl font-serif font-bold select-none pointer-events-none group-hover:text-[var(--th-text-5)] transition-colors duration-700">
          0{index + 1}
        </div>

        {/* Corner accent */}
        <div className="absolute top-6 left-6 w-5 h-5 border-l border-t border-[var(--th-border)] group-hover:border-[#d4af37]/30 transition-colors duration-700 rounded-tl-sm" />
      </div>
    </motion.div>
  );
}

export default function VisualJourney() {
  return (
    <section className="relative py-0 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage: "radial-gradient(var(--th-dot) 1px, transparent 1px)",
        }}
      />
      {/* Top & bottom fade to blend the dots */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--th-bg)] via-transparent to-[var(--th-bg)]" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center py-24 md:py-28"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-12 h-[1px] bg-[#d4af37]/50 mx-auto mb-8 origin-center"
        />
        <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.5em] font-medium">
          Visual Journey
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--th-text)] mt-5 tracking-tight">
          Moments That Define
        </h2>
        <p className="text-[var(--th-text-4)] text-sm md:text-base max-w-md mx-auto mt-4 font-light">
          A curated portfolio of leadership, impact, and global presence.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <ParallaxColumn key={idx} img={img} index={idx} />
          ))}
        </div>
      </div>

      {/* Floating watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-center mix-blend-overlay select-none">
        <h2 className="text-[12vw] font-serif font-black text-[var(--th-watermark)] uppercase tracking-tighter leading-none">
          World
          <br />
          Class
        </h2>
      </div>
    </section>
  );
}
