"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const logos = [
  "TEDx",
  "Josh Talks",
  "The Times",
  "India Today",
  "IIT Delhi",
  "IIM Ahmedabad",
  "World Summit",
  "Forbes India",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex shrink-0 gap-0"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center shrink-0 px-8 md:px-12">
              <span className="text-xl md:text-2xl font-serif text-[var(--th-text-4)] hover:text-[#d4af37]/60 transition-colors duration-700 whitespace-nowrap cursor-default select-none">
                {logo}
              </span>
            </div>
            <div className="flex items-center shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--th-border)]" />
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function LogoStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative py-10 md:py-14 border-y border-[var(--th-border-subtle)] bg-[var(--th-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Label */}
      <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[var(--th-text-4)] mb-8">
        Featured &amp; Trusted By
      </p>

      <MarqueeRow />

      {/* Subtle top/bottom lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.section>
  );
}
