"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Award, BookOpen, Mic } from "lucide-react";

const roles = [
  {
    icon: Mic,
    title: "Motivational Speaker",
    stat: "50+",
    desc: "High-impact keynotes at universities, corporations, and global forums across 4 continents.",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    stat: "3",
    desc: "Best-selling books on leadership, resilience, and the architecture of lasting personal growth.",
  },
  {
    icon: Award,
    title: "Academic Dean",
    stat: "20yr",
    desc: "Leading academic excellence, curriculum innovation, and shaping thousands of future leaders.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-44 px-6 md:px-12 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/[0.015] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* ─── Image Column ─── */}
          <motion.div
            ref={imgRef}
            style={{ y: imageY }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Gold glow behind image */}
              <div className="absolute -inset-6 bg-[#d4af37]/[0.12] rounded-3xl blur-3xl transition-all duration-700 group-hover:bg-[#d4af37]/[0.18] group-hover:blur-[40px]" />
              
              {/* Decorative frame */}
              <div className="absolute -top-5 -left-5 w-full h-full border border-[#d4af37]/40 rounded-2xl transition-all duration-700 group-hover:border-[#d4af37]/60 shadow-[0_0_40px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.25)]" />

              {/* Section number watermark */}
              <span className="absolute -top-12 -left-4 text-[100px] font-serif font-bold text-[var(--th-watermark)] leading-none select-none pointer-events-none">
                01
              </span>

              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <motion.img
                  src="/gallery/2.jpeg"
                  alt="Dr. Anand K Shukla"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--th-bg)] via-transparent to-transparent opacity-50" />
              </div>

              {/* Quote overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 -right-4 md:right-[-40px] bg-[var(--th-card)] border border-[var(--th-border)] rounded-xl p-6 max-w-[280px] shadow-2xl"
              >
                <div className="w-8 h-[1px] bg-[#d4af37] mb-4" />
                <p className="font-serif italic text-[var(--th-text-2)] text-sm leading-relaxed">
                  &ldquo;Empowering the next generation of leaders through
                  wisdom and silent authority.&rdquo;
                </p>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-3 -right-3 w-20 h-20 bg-[var(--th-card)] border border-[#d4af37]/20 rounded-full flex flex-col items-center justify-center shadow-xl"
              >
                <span className="text-lg font-serif text-[#d4af37]">20+</span>
                <span className="text-[7px] text-[var(--th-text-3)] uppercase tracking-wider">Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ─── Text Column ─── */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 space-y-10 lg:pt-8"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#d4af37]" />
              <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] font-medium">
                About Dr. Anand K Shukla
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--th-text)] leading-[1.1] tracking-tight"
            >
              Scholar. Speaker.
              <br />
              <span className="text-[var(--th-text-4)]">Thought Leader.</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[var(--th-text-3)] text-lg leading-[1.9] max-w-xl font-light"
            >
              A motivational speaker, academic dean, and author on a mission to
              bridge the gap between educational theory and real-world
              resilience. With over two decades in academia, true success is not
              just about intelligence — it&apos;s about emotional fortitude and
              clear purpose.
            </motion.p>

            {/* Role cards — dramatic upgrade */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: 0.4 + idx * 0.12,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative rounded-xl bg-[var(--th-card)] border border-[var(--th-border)] hover:border-[#d4af37]/20 transition-all duration-700 p-5 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[var(--th-input-bg)] border border-[var(--th-border)] flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/5 transition-all duration-500">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-serif text-[#d4af37]/30 group-hover:text-[#d4af37]/60 transition-colors duration-500">
                          {role.stat}
                        </span>
                      </div>
                      <h5 className="text-[var(--th-text)] text-sm font-medium tracking-wide mb-2">
                        {role.title}
                      </h5>
                      <p className="text-[var(--th-text-4)] text-xs font-light leading-relaxed">
                        {role.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-4"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-3 text-[var(--th-text-3)] hover:text-[var(--th-text)] transition-colors duration-500"
                data-cursor="pointer"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-light">
                  Read Full Biography
                </span>
                <svg
                  className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
}
