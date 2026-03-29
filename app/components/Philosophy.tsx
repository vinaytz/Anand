"use client";
import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    keyword: "SILENCE",
    title: "The Architecture\nof Silence",
    quote: "Silence is the loudest sound in the room.",
    description:
      "True authority doesn't shout. In a world of constant noise, the ability to pause, reflect, and speak with intent is the ultimate power move. Dr. Shukla teaches leaders how to command the room not by filling it — but by anchoring it with presence.",
  },
  {
    number: "02",
    keyword: "RESILIENCE",
    title: "Resilience\nover Reaction",
    quote: "Don't bounce back. Bounce forward.",
    description:
      "Reaction is instinct; resilience is architecture. We build mental frameworks that turn crisis into clarity. This isn't about recovery — it's about emerging with a newly forged strength that wasn't there before.",
  },
  {
    number: "03",
    keyword: "LEGACY",
    title: "Legacy\nin Motion",
    quote: "Success is what you gather. Legacy is what you scatter.",
    description:
      "The final stage of leadership is moving from accumulation to contribution. We design careers that don't just end in retirement, but evolve into lasting institutions of influence that outlive their creator.",
  },
  {
    number: "04",
    keyword: "INTEGRITY",
    title: "The Compass\nof Integrity",
    quote: "When values are clear, decisions are easy.",
    description:
      "In the grey areas of modern business, integrity is the only black and white. It is the north star that simplifies complex decisions and the foundation upon which all other principles rest.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="relative py-32 lg:py-44 px-6 md:px-12 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#d4af37]/[0.012] rounded-full blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(var(--th-grid) 1px, transparent 1px), linear-gradient(90deg, var(--th-grid) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em]">
              Core Philosophy
            </span>
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--th-text)] tracking-tight uppercase">
            The Method
          </h2>
          <p className="text-[var(--th-text-4)] mt-6 max-w-lg mx-auto text-base font-light leading-relaxed">
            Four guiding pillars that define the philosophy behind every keynote,
            book, and transformation.
          </p>
        </motion.div>

        {/* ── Pillar Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2 + idx * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative rounded-2xl bg-[var(--th-card)] border border-[var(--th-border)] hover:border-[#d4af37]/20 transition-all duration-700 p-8 md:p-10 lg:p-12 overflow-hidden min-h-[400px] flex flex-col ${
                idx % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#d4af37]/30 group-hover:w-24 transition-all duration-700" />
              <div className="absolute top-0 left-0 w-[1px] h-16 bg-[#d4af37]/30 group-hover:h-24 transition-all duration-700" />

              {/* Watermark number */}
              <span className="absolute -top-2 right-4 text-[140px] md:text-[160px] font-serif font-bold text-[var(--th-watermark)] group-hover:text-[#d4af37]/[0.05] transition-colors duration-1000 leading-none select-none pointer-events-none">
                {pillar.number}
              </span>

              {/* ── Top: Keyword + Title ── */}
              <div className="relative z-10 space-y-5">
                <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em] font-medium">
                  {pillar.keyword}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-serif text-[var(--th-text)] leading-[1.2] tracking-tight whitespace-pre-line">
                  {pillar.title}
                </h3>
              </div>

              {/* ── Bottom: Quote + Description ── */}
              <div className="relative z-10 mt-auto pt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="text-[#d4af37]/30 text-3xl font-serif leading-none -mt-1 shrink-0">
                    &ldquo;
                  </span>
                  <p className="text-[#d4af37]/60 font-serif italic text-sm leading-relaxed">
                    {pillar.quote}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[var(--th-border-subtle)]" />
                <p className="text-[var(--th-text-4)] text-sm font-light leading-[1.9]">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
}
