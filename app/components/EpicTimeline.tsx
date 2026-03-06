"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/* ─────────────────────────────────────────────
   Timeline Data
   ───────────────────────────────────────────── */
const milestones = [
  {
    year: "2005",
    era: "THE ORIGIN",
    title: "The Beginning\nof Academia",
    body: "Started the journey as a lecturer, realizing that students needed more than just textbook knowledge — they needed life skills. A conviction was born: education must build the person, not just the professional.",
    image: "/gallery/2.jpeg",
    stat: { value: "1", label: "Vision Born" },
  },
  {
    year: "2012",
    era: "THE SPARK",
    title: "First International\nKeynote",
    body: "Invited to the Dubai Leadership Forum to deliver a keynote on 'The Silent Leader.' The standing ovation that followed ignited a global speaking career that would span continents and cultures.",
    image: "/gallery/stage.jpeg",
    stat: { value: "4", label: "Continents" },
  },
  {
    year: "2017",
    era: "THE PEN",
    title: "Published Author\n& Thought Leader",
    body: "Released 'The Architecture of Thought' — a deep dive into the resilient mind. It became a best-seller within weeks, establishing a literary voice that resonates with leaders worldwide.",
    image: "/gallery/4_new.jpeg",
    stat: { value: "50K+", label: "Copies" },
  },
  {
    year: "2020",
    era: "THE SUMMIT",
    title: "Dean of\nAcademics",
    body: "Took the helm at the university, transforming the curriculum to integrate emotional intelligence. A radical belief: that institutions must teach students how to think, not what to think.",
    image: "/gallery/stage2.jpeg",
    stat: { value: "5K+", label: "Students" },
  },
  {
    year: "2024",
    era: "THE LEGACY",
    title: "Global\nMovement",
    body: "With 100K+ lives impacted, three best-selling books, and a philosophy adopted by institutions across 4 continents — the mission is no longer about one voice. It's about a movement.",
    image: "/gallery/stage_speaking1.jpeg",
    stat: { value: "100K+", label: "Lives" },
  },
];

/* ─────────────────────────────────────────────
   Utility: Horizontal-scroll section
   ───────────────────────────────────────────── */
export default function EpicTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll → horizontal translation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(milestones.length - 1) * 100}vw`]
  );

  // Track which card is active based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (milestones.length - 1));
    setActiveIdx(Math.min(idx, milestones.length - 1));
  });

  // Progress line width
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section ref={containerRef} className="relative bg-[#030303]" style={{ height: `${milestones.length * 100}vh` }}>
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ── Background ambient layer ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/[0.015] rounded-full blur-[200px]" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* ── Top: Section header (fixed) ── */}
        <div className="absolute top-8 left-6 md:left-12 z-30">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-[1px] bg-[#d4af37]/50" />
            <span className="text-[#d4af37] text-[9px] uppercase tracking-[0.5em] font-medium">
              The Journey
            </span>
          </div>
        </div>

        {/* ── Top-right: Active year display ── */}
        <div className="absolute top-6 right-6 md:right-12 z-30 text-right">
          <motion.span
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d4af37]/20 text-[11px] uppercase tracking-[0.4em] block mb-1"
          >
            {milestones[activeIdx].era}
          </motion.span>
          <motion.span
            key={`yr-${activeIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.08, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[120px] md:text-[180px] font-serif font-bold text-white leading-none block -mt-4 select-none"
          >
            {milestones[activeIdx].year}
          </motion.span>
        </div>

        {/* ── Horizontal track ── */}
        <motion.div
          style={{ x }}
          className="flex h-full will-change-transform"
        >
          {milestones.map((m, idx) => (
            <MilestoneCard key={idx} milestone={m} index={idx} activeIdx={activeIdx} />
          ))}
        </motion.div>

        {/* ── Bottom: Progress system ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-6 md:px-12 pb-8">
          {/* Progress track */}
          <div className="relative h-[1px] bg-white/[0.06] mb-6">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#d4af37]/40"
              style={{ width: lineWidth }}
            />
            {/* Dot markers */}
            {milestones.map((m, idx) => {
              const pos = (idx / (milestones.length - 1)) * 100;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${pos}%` }}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      idx <= activeIdx
                        ? "bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Year labels row */}
          <div className="flex justify-between">
            {milestones.map((m, idx) => (
              <span
                key={idx}
                className={`text-[10px] md:text-xs font-mono tracking-wider transition-all duration-500 ${
                  idx === activeIdx
                    ? "text-[#d4af37]"
                    : idx <= activeIdx
                    ? "text-white/30"
                    : "text-white/10"
                }`}
              >
                {m.year}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          animate={{ opacity: activeIdx === 0 ? 0.4 : 0, y: activeIdx === 0 ? [0, 6, 0] : 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Individual Milestone Card (full-viewport)
   ───────────────────────────────────────────── */
function MilestoneCard({
  milestone: m,
  index: idx,
  activeIdx,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  activeIdx: number;
}) {
  const isActive = idx === activeIdx;

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center">
      {/* ── Background image with parallax feel ── */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{
          scale: isActive ? 1 : 1.1,
          opacity: isActive ? 1 : 0.3,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={m.image}
          alt={m.title}
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-[#030303]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40" />
      </motion.div>

      {/* ── Content layout ── */}
      <div className="relative z-10 w-full h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full max-w-[1600px] mx-auto">
          {/* Left: Text content */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8">
            {/* Era + Year tag */}
            <motion.div
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -40,
              }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em] font-medium">
                  {m.era}
                </span>
              </div>
              <span className="text-white/20 text-xs font-mono">{m.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 60,
              }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.05] tracking-tight whitespace-pre-line"
            >
              {m.title}
            </motion.h3>

            {/* Body */}
            <motion.p
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 40,
              }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/35 text-base md:text-lg leading-[1.9] font-light max-w-lg"
            >
              {m.body}
            </motion.p>

            {/* Stat badge */}
            <motion.div
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30,
              }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 pt-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-[#d4af37]/[0.06] rounded-xl blur-xl" />
                <div className="relative bg-[#080808] border border-[#d4af37]/20 rounded-xl px-6 py-4 flex items-center gap-4">
                  <span className="text-3xl md:text-4xl font-serif text-[#d4af37]">
                    {m.stat.value}
                  </span>
                  <div className="w-[1px] h-8 bg-white/[0.06]" />
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
                    {m.stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Featured image card */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative hidden lg:block"
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 0.9,
              x: isActive ? 0 : 80,
            }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#d4af37]/10 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 border border-[#d4af37]/[0.06] rounded-2xl" />

              {/* Gold glow */}
              <div className="absolute -inset-8 bg-[#d4af37]/[0.04] rounded-3xl blur-3xl" />

              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/30 to-transparent" />

                {/* Year watermark on image */}
                <span className="absolute bottom-4 right-6 text-[80px] md:text-[120px] font-serif font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                  {m.year}
                </span>
              </div>

              {/* Floating index tag */}
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                <span className="text-black text-sm font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Vertical divider between cards (decorative) ── */}
      {idx < milestones.length - 1 && (
        <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      )}
    </div>
  );
}
