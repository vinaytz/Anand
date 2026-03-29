"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Dr. Shukla's keynote was not just a speech; it was a shift in consciousness for our entire leadership team.",
    name: "Sarah Williams",
    title: "Director of HR",
    org: "TechGlobal Inc.",
  },
  {
    quote:
      "I have seen many speakers, but few command the room with such quiet authority and profound wisdom.",
    name: "Rajesh Gupta",
    title: "Chancellor",
    org: "University of Delhi",
  },
  {
    quote:
      "His concept of 'Silent Authority' has completely redefined how I approach negotiation and conflict resolution.",
    name: "Michael Chen",
    title: "CEO",
    org: "FutureFlow",
  },
  {
    quote:
      "The bridge between ancient wisdom and modern corporate strategy is exactly what we needed. Unforgettable.",
    name: "Elena Rodriguez",
    title: "VP of Operations",
    org: "Stellar Group",
  },
  {
    quote:
      "Dr. Shukla doesn't just speak to the mind; he speaks to the potential within. Truly world-class.",
    name: "David Park",
    title: "Founder",
    org: "InnovateX",
  },
];

const DURATION = 6000;

export function Testimonials() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame>>(0);
  const startTimeRef = useRef(Date.now());

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
      setProgress(0);
      startTimeRef.current = Date.now();
    },
    [active]
  );

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Animated progress bar + auto-advance
  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        next();
      } else {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    startTimeRef.current = Date.now();
    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [active, next]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Massive decorative quotation mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[10%] left-[5%] md:left-[8%] pointer-events-none select-none"
      >
        <span
          className="text-[220px] md:text-[340px] lg:text-[420px] font-serif leading-none block"
          style={{
            background:
              "linear-gradient(180deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          &ldquo;
        </span>
      </motion.div>

      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top bar: label + counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16 md:mb-24"
        >
          <div>
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.5em] block mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-serif text-[var(--th-text)] tracking-tight">
              Voices of Impact
            </h2>
          </div>

          {/* Counter + Arrows */}
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[var(--th-text-2)] text-sm font-light tabular-nums tracking-wider">
              <span className="text-[var(--th-text)] font-medium">{pad(active + 1)}</span>
              <span className="mx-2 text-[#d4af37]">/</span>
              {pad(testimonials.length)}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="group w-11 h-11 rounded-full border border-[var(--th-border-hover)] hover:border-[#d4af37]/50 flex items-center justify-center transition-all duration-400"
                data-cursor="pointer"
              >
                <svg
                  className="w-4 h-4 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                className="group w-11 h-11 rounded-full border border-[var(--th-border-hover)] hover:border-[#d4af37]/50 flex items-center justify-center transition-all duration-400"
                data-cursor="pointer"
              >
                <svg
                  className="w-4 h-4 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Quote area */}
          <div className="lg:col-span-9 relative min-h-[220px] md:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({
                    opacity: 0,
                    x: d > 0 ? 60 : -60,
                    filter: "blur(8px)",
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  },
                  exit: (d: number) => ({
                    opacity: 0,
                    x: d > 0 ? -60 : 60,
                    filter: "blur(8px)",
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                {/* The quote */}
                <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-serif text-[var(--th-text)] leading-[1.35] tracking-tight">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-5">
                  {/* Gold accent bar */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#d4af37]/20" />
                  <div>
                    <p className="text-[var(--th-text)] text-sm font-semibold uppercase tracking-[0.2em]">
                      {testimonials[active].name}
                    </p>
                    <p className="text-[var(--th-text-3)] text-xs tracking-wide mt-1">
                      {testimonials[active].title},{" "}
                      <span className="text-[#d4af37]/50">
                        {testimonials[active].org}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Vertical indicators */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end gap-4 lg:gap-3 lg:pt-2">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`group relative text-left transition-all duration-500 ${
                  idx === active ? "lg:pl-0" : "lg:pl-0"
                }`}
                data-cursor="pointer"
              >
                {/* Mobile: dots */}
                <span
                  className={`lg:hidden block w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    idx === active
                      ? "bg-[#d4af37] scale-110"
                      : "bg-[var(--th-border-hover)] hover:bg-[var(--th-text-3)]"
                  }`}
                />
                {/* Desktop: name list */}
                <div className="hidden lg:block">
                  <span
                    className={`text-[13px] tracking-wide transition-all duration-500 block ${
                      idx === active
                        ? "text-[var(--th-text)] font-medium"
                        : "text-[var(--th-text-4)] hover:text-[var(--th-text-3)] font-light"
                    }`}
                  >
                    {t.name}
                  </span>
                  <span
                    className={`text-[10px] tracking-wider transition-all duration-500 block mt-0.5 ${
                      idx === active
                        ? "text-[#d4af37]/60"
                        : "text-transparent"
                    }`}
                  >
                    {t.org}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-16 md:mt-20">
          <div className="h-[1px] bg-[var(--th-border)] relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37]/80 to-[#d4af37]/30"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="group w-10 h-10 rounded-full border border-[var(--th-border-hover)] hover:border-[#d4af37]/50 flex items-center justify-center transition-all"
          >
            <svg
              className="w-3.5 h-3.5 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-[var(--th-text-3)] text-xs self-center tabular-nums">
            {pad(active + 1)} / {pad(testimonials.length)}
          </span>
          <button
            onClick={next}
            className="group w-10 h-10 rounded-full border border-[var(--th-border-hover)] hover:border-[#d4af37]/50 flex items-center justify-center transition-all"
          >
            <svg
              className="w-3.5 h-3.5 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
    </section>
  );
}
