"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Spotlight } from "./ui/Spotlight";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — "The Stage"
   Full-viewport cinematic hero. Stripped to essentials.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ── Scroll-driven transforms ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scrollOp = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  /* ── Mouse parallax ── */
  const handleMouse = useCallback((e: MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 15,
      y: (e.clientY / window.innerHeight - 0.5) * 10,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  /* ── GSAP entrance ── */
  useGSAP(
    () => {
      // Pre-set initial hidden states immediately so there's no flash
      gsap.set(".h-img", { scale: 1.4 });
      gsap.set(".h-overlay", { opacity: 0 });
      gsap.set(".h-char-first", { yPercent: 120, rotationX: -80, opacity: 0 });
      gsap.set(".h-char-last", { yPercent: 120, rotationX: -80, opacity: 0 });
      gsap.set(".h-gold", { scaleX: 0 });
      gsap.set(".h-fade", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;

      // Image zoom-in reveal
      tl.to(".h-img", {
        scale: 1,
        duration: 2.4,
        ease: "power3.out",
      });

      // Overlay fade
      tl.to(
        ".h-overlay",
        { opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=2.0"
      );

      // Each letter of first name
      tl.to(
        ".h-char-first",
        {
          yPercent: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.04,
        },
        "-=1.2"
      );

      // Each letter of last name
      tl.to(
        ".h-char-last",
        {
          yPercent: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.04,
        },
        "-=0.7"
      );

      // Gold line
      tl.to(
        ".h-gold",
        { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
        "-=0.5"
      );

      // Subtitle + CTA + peripherals
      tl.to(
        ".h-fade",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.05,
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const start = () => tlRef.current?.play();
    window.addEventListener("preloader-exit", start);
    const fallback = setTimeout(start, 4200);
    return () => {
      window.removeEventListener("preloader-exit", start);
      clearTimeout(fallback);
    };
  }, []);

  const firstName = "ANAND".split("");
  const lastName = "SHUKLA".split("");

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-[var(--th-bg)] transition-colors duration-300"
    >
      {/* ═══════════════════════════════════════
          IMAGE — Full bleed, parallax, mouse-reactive
         ═══════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: imgScale, y: imgY }}
      >
        {/* Outer div for GSAP scale control */}
        <div className="h-img absolute inset-[-5%]">
          {/* Inner motion.div for framer-motion mouse parallax only */}
          <motion.div
            className="w-full h-full"
            animate={{ x: mouse.x * 0.4, y: mouse.y * 0.4 }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
          >
            <img
              src="/gallery/imp.png"
              alt="Dr. Anand K Shukla addressing a packed auditorium"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          SHADOW SYSTEM — Layered darkness
         ═══════════════════════════════════════ */}
      <div className="h-overlay absolute inset-0 z-[2]">
        {/* Deep left wall — 0-55% is near-black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--th-bg-95) 0%, var(--th-bg-88) 25%, var(--th-bg-60) 45%, var(--th-bg-15) 65%, transparent 80%)",
          }}
        />
        {/* Floor anchor */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--th-bg-90) 0%, var(--th-bg-30) 25%, transparent 50%)",
          }}
        />
        {/* Ceiling dim for nav */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--th-bg-75) 0%, var(--th-bg-40) 10%, transparent 22%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          SPOTLIGHT — Gold atmospheric glow
         ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none opacity-60">
        <Spotlight className="-top-40 -left-10 md:left-40 md:-top-20" fill="#d4af37" />
      </div>

      {/* ═══════════════════════════════════════
          GRID PATTERN — Subtle architectural lines
         ═══════════════════════════════════════ */}
      {/* Bottom-left grid */}
      <div
        className="absolute inset-0 z-[6] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--th-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--th-grid) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 20%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 20%, transparent 70%)",
        }}
      />
      {/* Top-right grid */}
      <div
        className="absolute inset-0 z-[6] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--th-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--th-grid) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 15%, transparent 65%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 15%, transparent 65%)",
        }}
      />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise z-[4]" />

      {/* ═══════════════════════════════════════
          HERO NAVBAR — Lives inside the hero
         ═══════════════════════════════════════ */}
      <nav className="absolute top-0 left-0 right-0 z-[20] px-6 md:px-10 lg:px-16 xl:px-20 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <a href="/" className="font-serif text-xl text-[var(--th-text)] tracking-tight font-bold" data-cursor="pointer">
            AKS<span className="text-[#d4af37]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {["About", "Speaking", "Author", "Gallery", "Videos"].map((l) => (
              <a
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.2em] text-[var(--th-text-2)] hover:text-[var(--th-text)] transition-colors duration-500 relative group"
                data-cursor="pointer"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
            <a
              href="/#contact"
              className="ml-2 px-5 py-2 border border-[#d4af37]/40 text-[10px] uppercase tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-500 rounded-full"

              data-cursor="pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          THE NAME — Massive, left-aligned
         ═══════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-[15vh] md:bottom-[12vh] left-6 md:left-10 lg:left-16 xl:left-20 z-[10]"
        style={{ y: nameY, opacity: fadeOut }}
      >
        {/* First name */}
        <div className="overflow-hidden" style={{ perspective: 600 }}>
          <div className="flex mb-3">
            {firstName.map((ch, i) => (
              <span
                key={`f${i}`}
                className="h-char-first inline-block font-serif text-[var(--th-text)] text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] tracking-[-0.04em] font-bold select-none will-change-transform"
                style={{ transformOrigin: "bottom center" }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Last name — outlined */}
        
        <div className="overflow-hidden -mt-[1vw]" style={{ perspective: 600 }}>
          <div className="flex">
            {lastName.map((ch, i) => (
              <span
                key={`l${i}`}
                className="h-char-last inline-block font-serif text-transparent text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] tracking-[-0.04em] font-bold select-none will-change-transform"
                style={{
                  transformOrigin: "bottom center",
                  WebkitTextStroke: "2px var(--th-text-3)",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-gold h-[2px] w-16 md:w-28 bg-[#d4af37] origin-left mt-4 mb-5" />

        {/* Sub-line + CTA */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="h-fade text-[var(--th-text-3)] text-[10px] md:text-xs uppercase tracking-[0.35em] font-light">
            Speaker &bull; Author &bull; Thought Leader
          </p>

          <div className="h-fade flex items-center gap-3">
            <MagneticButton
              as="a"
              href="#contact"
              data-cursor-text="GO"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#d4af37] rounded-full" />
              <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
              <span className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-black">
                Invite to Speak
              </span>
              <svg className="relative w-3.5 h-3.5 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/about"
              className="group relative inline-flex items-center px-5 py-3"
            >
              <span className="absolute inset-0 border border-[var(--th-border)] rounded-full group-hover:border-[var(--th-border-hover)] transition-colors duration-500" />
              <span className="relative text-[10px] uppercase tracking-[0.2em] text-[var(--th-text-3)] group-hover:text-[var(--th-text)] transition-colors duration-500">
                Explore
              </span>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          SCROLL INDICATOR — bottom center
         ═══════════════════════════════════════ */}
      <motion.div
        className="h-fade absolute bottom-6 left-1/2 -translate-x-1/2 z-[10] hidden md:flex flex-col items-center gap-2"
        style={{ opacity: scrollOp }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37]/40 to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════
          VIGNETTE
         ═══════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_250px_var(--th-bg-60)] z-[5]" />
    </section>
  );
}



