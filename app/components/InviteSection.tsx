"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function InviteSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden bg-[#030303]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/[0.015] rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ─── Left: Text + Form ─── */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#d4af37]" />
              <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em]">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight"
            >
              Invite Dr. Anand
              <br />
              <span className="text-white/25">for your next event.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-white/30 text-lg leading-[1.8] font-light max-w-md"
            >
              Whether for a university convocation, corporate leadership summit,
              or youth forum — a presence that shifts perspectives.
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-0 pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <div className="group border-b border-r-0 sm:border-r border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent py-5 px-1 text-white text-sm tracking-wide placeholder:text-white/20 focus:outline-none focus:placeholder:text-white/30 transition-colors duration-500"
                  />
                </div>
                <div className="group border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent py-5 px-1 sm:pl-5 text-white text-sm tracking-wide placeholder:text-white/20 focus:outline-none focus:placeholder:text-white/30 transition-colors duration-500"
                  />
                </div>
              </div>
              <div className="group border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                <select className="w-full bg-transparent py-5 px-1 text-white/20 text-sm tracking-wide focus:outline-none focus:text-white/40 transition-colors duration-500 [&>option]:bg-[#0a0a0a] [&>option]:text-white">
                  <option>Event Type</option>
                  <option>Keynote Speech</option>
                  <option>Workshop</option>
                  <option>Guest Lecture</option>
                  <option>Panel Discussion</option>
                </select>
              </div>
              <div className="group border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                <textarea
                  placeholder="Tell us about your event..."
                  rows={3}
                  className="w-full bg-transparent py-5 px-1 text-white text-sm tracking-wide placeholder:text-white/20 focus:outline-none focus:placeholder:text-white/30 transition-colors duration-500 resize-none"
                />
              </div>

              <div className="pt-10">
                <MagneticButton
                  as="button"
                  data-cursor-text="SEND"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white rounded-full" />
                  <span className="absolute inset-0 bg-[#d4af37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
                  <span className="relative text-sm font-bold uppercase tracking-[0.2em] text-black group-hover:text-black transition-colors duration-300">
                    Submit Invitation
                  </span>
                  <svg
                    className="relative w-4 h-4 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </MagneticButton>
              </div>
            </motion.form>
          </div>

          {/* ─── Right: Image ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.div 
                className="absolute inset-[-15%]"
                style={{ y: bgY }}
              >
                <img
                  src="/gallery/stage_speaking1.jpeg"
                  alt="Dr. Anand K Shukla on stage"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/30 to-transparent" />
            </div>

            {/* Decorative offset border */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-[#d4af37]/10 rounded-2xl -z-10" />

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-8 -left-8 bg-[#080808] border border-white/[0.06] rounded-xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="block text-2xl font-serif text-[#d4af37]">
                    50+
                  </span>
                  <span className="text-[9px] text-white/30 uppercase tracking-wider">
                    Events
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-white/[0.06]" />
                <div className="text-center">
                  <span className="block text-2xl font-serif text-[#d4af37]">
                    100K
                  </span>
                  <span className="text-[9px] text-white/30 uppercase tracking-wider">
                    Impacted
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </section>
  );
}
