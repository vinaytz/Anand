"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          window.dispatchEvent(new Event("preloader-exit"));
          setTimeout(() => setDone(true), 200);
        },
      });

      // 1. Stagger in each character of the name
      tl.from(".preloader-char", {
        yPercent: 110,
        rotateX: -80,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.04,
      });

      // 2. Fade in the tagline
      tl.from(
        ".preloader-tagline",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 3. Expand the line
      tl.fromTo(
        ".preloader-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
        "-=0.2"
      );

      // 4. Hold
      tl.to({}, { duration: 0.4 });

      // 5. Collapse everything and slide away
      tl.to(".preloader-content", {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power3.in",
      });

      tl.to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  const nameChars = "ANAND K SHUKLA".split("");

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303]"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)]" />

      <div className="preloader-content relative z-10 flex flex-col items-center gap-6">
        {/* Name */}
        <div className="flex overflow-hidden">
          {nameChars.map((char, i) => (
            <span
              key={i}
              className="preloader-char inline-block font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.06em] will-change-transform"
              style={{
                transformOrigin: "bottom center",
                perspective: "600px",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="preloader-tagline text-[#d4af37] text-xs sm:text-sm uppercase tracking-[0.4em] font-light">
          Speaker &bull; Author &bull; Thought Leader
        </p>

        {/* Line */}
        <div className="preloader-line w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent origin-center" />
      </div>

      {/* Corner marks */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-white/10" />
    </div>
  );
}
