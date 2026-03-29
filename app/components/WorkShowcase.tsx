"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const books = [
  {
    title: "The Architecture\nof Thought",
    subtitle: "Latest Publication",
    tag: "BEST SELLER",
    description:
      "A deep dive into the resilient mind — how modern leaders find clarity amidst chaos and build mental frameworks for lasting impact.",
  },
  {
    title: "Silent\nAuthority",
    subtitle: "Leadership Classic",
    tag: "50K+ COPIES",
    description:
      "The definitive guide to leading with presence, not noise. A manifesto for the quiet leaders who reshape industries.",
  },
  {
    title: "Beyond\nResilience",
    subtitle: "Self Development",
    tag: "NEW RELEASE",
    description:
      "Moving past recovery into reinvention — the art of emerging stronger from every challenge life presents.",
  },
];

export default function WorkShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="work" className="relative py-32 lg:py-44 px-6 md:px-12 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#d4af37]" />
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em]">
              Body of Work
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--th-text)] tracking-tight">
              Published Works &<br />
              <span className="text-[var(--th-text-4)]">Contributions</span>
            </h2>
            <p className="text-[var(--th-text-3)] text-sm font-light leading-relaxed max-w-sm lg:text-right">
              Three best-selling books that have shaped how thousands think about leadership, resilience, and legacy.
            </p>
          </div>
        </motion.div>

        {/* ── Books Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2 + idx * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-[var(--th-card)] border border-[var(--th-border)] hover:border-[#d4af37]/20 transition-all duration-700 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Book mockup */}
                <div className="relative p-8 md:p-10 flex justify-center">
                  <div className="relative w-40 md:w-44 aspect-[2/3] [perspective:800px]">
                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-5deg)]">
                      {/* Front cover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--th-book-from)] to-[var(--th-book-to)] rounded-sm shadow-2xl border border-[var(--th-border-subtle)]">
                        <div className="h-full w-full p-5 flex flex-col justify-between">
                          <span className="text-[7px] text-[#d4af37]/40 uppercase tracking-[0.3em] text-center">
                            Dr. Anand K Shukla
                          </span>
                          <div className="space-y-3 text-center">
                            <div className="w-12 h-[0.5px] bg-[#d4af37]/30 mx-auto" />
                            <span className="text-base font-serif text-[#d4af37]/80 leading-tight block whitespace-pre-line">
                              {book.title}
                            </span>
                            <div className="w-12 h-[0.5px] bg-[#d4af37]/30 mx-auto" />
                          </div>
                          <span className="text-[6px] text-[var(--th-text-5)] uppercase tracking-[0.2em] text-center">
                            {book.tag}
                          </span>
                        </div>
                      </div>
                      {/* Page edges */}
                      <div className="absolute -right-[3px] top-[3px] bottom-[3px] w-[3px] bg-gradient-to-r from-[var(--th-book-pages)] to-[var(--th-book-pages2)] rounded-r-[1px]" />
                      <div className="absolute -right-[5px] top-[6px] bottom-[6px] w-[2px] bg-[var(--th-book-pages2)] rounded-r-[1px]" />
                      {/* Spine */}
                      <div className="absolute -left-[2px] top-0 bottom-0 w-[3px] bg-gradient-to-r from-black/50 to-transparent rounded-l" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 pt-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-[1px] bg-[#d4af37]" />
                    <span className="text-[#d4af37] text-[9px] uppercase tracking-[0.3em]">
                      {book.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-[var(--th-text)] tracking-tight whitespace-pre-line leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-[var(--th-text-4)] text-sm font-light leading-relaxed">
                    {book.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[var(--th-text-3)] text-[11px] uppercase tracking-[0.15em] hover:text-[#d4af37] transition-colors duration-500 group/link pt-2"
                    data-cursor="pointer"
                  >
                    Get Your Copy
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom: Speaking + Academic Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {/* Speaking Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="group relative rounded-2xl overflow-hidden border border-[var(--th-border)] min-h-[380px]"
          >
            <motion.div className="absolute inset-[-15%]" style={{ y: parallaxY }}>
              <img
                src="/gallery/stage_podium1.jpeg"
                alt="Speaking"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--th-bg)] via-[var(--th-bg-60)] to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em]">
                  Keynote Speaker
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[var(--th-text)] mb-3 tracking-tight">
                Inspiring Global Audiences
              </h3>
              <p className="text-[var(--th-text-3)] text-sm font-light mb-6 max-w-md leading-relaxed">
                From IITs to international forums — delivering messages that transform perspectives and ignite action.
              </p>
              <a
                href="/speaking"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--th-text-3)] border border-[var(--th-border-hover)] px-5 py-3 rounded-full hover:border-[#d4af37]/30 hover:text-[#d4af37] transition-all duration-500"
                data-cursor="pointer"
              >
                View Speaking Topics
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="group relative rounded-2xl bg-[var(--th-card)] border border-[var(--th-border)] hover:border-[#d4af37]/20 transition-all duration-700 overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[380px]"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em]">
                  Academic Leadership
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[var(--th-text)] tracking-tight">
                Deanship &amp; Curriculum Innovation
              </h3>
              <p className="text-[var(--th-text-4)] font-light text-sm leading-[1.8] max-w-md">
                As Dean of Academics, Dr. Anand leads curriculum innovation and student development strategies
                impacting thousands of futures annually.
              </p>
            </div>

            <div className="relative z-10 flex gap-10 pt-8 border-t border-[var(--th-border-subtle)] mt-8">
              <div>
                <span className="block text-4xl md:text-5xl font-serif text-[#d4af37]">20+</span>
                <span className="text-[10px] text-[var(--th-text-4)] uppercase tracking-[0.2em] mt-1 block">
                  Years
                </span>
              </div>
              <div className="w-[1px] h-12 bg-[var(--th-border)] self-center" />
              <div>
                <span className="block text-4xl md:text-5xl font-serif text-[#d4af37]">5K+</span>
                <span className="text-[10px] text-[var(--th-text-4)] uppercase tracking-[0.2em] mt-1 block">
                  Students
                </span>
              </div>
              <div className="w-[1px] h-12 bg-[var(--th-border)] self-center" />
              <div>
                <span className="block text-4xl md:text-5xl font-serif text-[#d4af37]">12</span>
                <span className="text-[10px] text-[var(--th-text-4)] uppercase tracking-[0.2em] mt-1 block">
                  Programs
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
    </section>
  );
}
