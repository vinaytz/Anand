import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import InviteSection from "../components/InviteSection";
import EpicTimeline from "../components/EpicTimeline";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />

      {/* Top-right grid */}
      <div
        className="fixed inset-0 z-[6] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 65%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 65%)",
        }}
      />

      {/* ── Cinematic Header ── */}
      <div className="relative h-[70vh] bg-[#030303]">
        {/* Massive background text — positioned at bottom, outside overflow-hidden so it won't clip */}
        <div className="absolute inset-x-0 -bottom-29 flex items-end justify-center pointer-events-none select-none z-[1] overflow-visible">
          <span className="text-[20vw] font-serif font-bold text-white/[0.02] uppercase tracking-tighter whitespace-nowrap leading-none translate-y-[30%]">
            ABOUT
          </span>
        </div>

        <div className="relative h-full flex items-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/gallery/stagecopy.jpeg"
              alt="Dr. Anand K Shukla"
              className="w-full h-full object-cover opacity-25 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-[#030303]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 to-transparent" />
          </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#d4af37]/50" />
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.5em]">
              Biography
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-[0.95]">
            The Story
          </h1>
          <p className="text-white/30 text-lg md:text-xl max-w-xl mt-6 font-light leading-relaxed">
            From the lecture halls of India to global stages — the journey of
            defining modern leadership.
          </p>
        </div>

          {/* Bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        </div>
      </div>

      <AboutSection />

      {/* ── Epic Horizontal-Scroll Timeline ── */}
      <EpicTimeline />

      <InviteSection />
      <Footer />
    </main>
  );
}
