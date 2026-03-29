"use client";
import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer
      className="relative bg-[var(--th-bg)] overflow-hidden border-t border-[var(--th-border-subtle)] transition-colors duration-300"
    >
      {/* ─── Mega Quote Section ─── */}
      <div className="relative py-36 md:py-48 px-6 overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "24px 24px",
            backgroundImage: "radial-gradient(var(--th-dot) 1px, transparent 1px)",
          }}
        />
        {/* Top & bottom fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--th-bg)] via-transparent to-[var(--th-bg)]" />

        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] font-serif font-bold text-[var(--th-watermark)] uppercase tracking-tighter whitespace-nowrap"
          >
            LEGACY
          </motion.span>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/[0.01] rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center relative z-10 space-y-8"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
            <span className="text-[#d4af37]/50 text-[10px] uppercase tracking-[0.4em]">
              A Final Thought
            </span>
            <div className="w-12 h-[1px] bg-[#d4af37]/40" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[var(--th-text)] leading-[1.15] tracking-tight">
            &ldquo;To lead is to serve.
            <br />
            To speak is to heal.&rdquo;
          </h2>
          <p className="text-[var(--th-text-4)] text-base font-light italic tracking-wide">
            &mdash; Dr. Anand K Shukla
          </p>
        </motion.div>
      </div>

      {/* ─── Footer Navigation ─── */}
      <div className="border-t border-[var(--th-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {/* Explore */}
            <div>
              <h4 className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">
                Explore
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Biography", href: "/about" },
                  { name: "Speaking", href: "/speaking" },
                  { name: "Books", href: "/author" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "Videos", href: "/videos" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[var(--th-text-4)] text-sm font-light tracking-wide hover:text-[var(--th-text)] transition-colors duration-500 inline-block group"
                      data-cursor="pointer"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">
                Connect
              </h4>
              <ul className="space-y-4">
                {["LinkedIn", "Twitter / X", "Instagram", "YouTube"].map(
                  (name) => (
                    <li key={name}>
                      <a
                        href="#"
                        className="text-[var(--th-text-4)] text-sm font-light tracking-wide hover:text-[var(--th-text)] transition-colors duration-500 inline-block group"
                        data-cursor="pointer"
                      >
                        <span className="relative">
                          {name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2">
              <h4 className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">
                Newsletter
              </h4>
              <p className="text-[var(--th-text-4)] text-sm mb-8 max-w-xs font-light leading-relaxed">
                Join 50,000+ readers receiving monthly insights on leadership
                and resilience.
              </p>
              <div className="flex bg-[var(--th-input-bg)] border border-[var(--th-border)] rounded-full p-1.5 max-w-sm focus-within:border-[#d4af37]/30 transition-colors duration-500">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-[var(--th-text)] px-5 py-2.5 w-full text-sm focus:outline-none placeholder:text-[var(--th-text-5)]"
                />
                <MagneticButton
                  as="button"
                  strength={0.2}
                  className="bg-white text-black p-2.5 rounded-full hover:bg-[#d4af37] transition-colors duration-300 shrink-0"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-[var(--th-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[var(--th-text-5)] text-[11px] uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Dr. Anand K Shukla
          </span>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Credits"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[var(--th-text-5)] text-[11px] uppercase tracking-[0.2em] hover:text-[var(--th-text-3)] transition-colors duration-500"
                data-cursor="pointer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


