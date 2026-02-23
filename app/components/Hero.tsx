"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Speaking", href: "/speaking" },
  { name: "Author", href: "/author" },
  { name: "Gallery", href: "/gallery" },
  { name: "Videos", href: "/videos" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;

      // 1. Scale the card in from slightly smaller
      tl.from(".hero-card", {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 2. Reveal the name lines from below
      tl.from(
        ".hero-name-line",
        {
          yPercent: 120,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
        },
        "-=0.6"
      );

      // 3. Nav links slide in
      tl.from(
        ".hero-nav-link",
        {
          opacity: 0,
          x: -20,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.8"
      );

      // 4. CTA button
      tl.from(
        ".hero-cta",
        { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Scroll parallax on the background image
      gsap.to(".hero-bg-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  // Listen for preloader-exit or start after timeout
  useEffect(() => {
    const start = () => tlRef.current?.play();
    window.addEventListener("preloader-exit", start);
    const fallback = setTimeout(start, 4000);
    return () => {
      window.removeEventListener("preloader-exit", start);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-175 bg-[#1a1a1a] p-3 md:p-5"
    >
      {/* ─── The Card ─── */}
      <div className="hero-card relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/8">
        {/* Background Image */}
        <div className="hero-bg-img absolute inset-0 scale-110 will-change-transform">
          <img
            src="/gallery/semiMain.png"
            alt="Dr. Anand K Shukla on stage"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />

        {/* ─── Content Layer ─── */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Top row — empty for breathing room or can add a small logo */}

          {/* Middle — Nav Left + Name Right */}
          <div className="flex-1 flex items-center">
            <div className="w-full flex items-end lg:items-center justify-between">
              {/* Left: Vertical Navigation */}
              <nav className="hidden md:flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hero-nav-link text-white/80 text-base lg:text-lg font-light tracking-wide hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Right: Giant Name */}
              <div className="text-right">
                <div className="overflow-hidden">
                  <div className="hero-name-line font-serif text-white text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-tighter font-bold uppercase will-change-transform">
                    ANAND
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-name-line font-serif text-white text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-tighter font-bold uppercase will-change-transform">
                    SHUKLA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row — CTA */}
          <div className="flex items-end justify-end">
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center gap-3 px-8 py-4 border-2 border-dashed border-white/30 rounded-xl bg-black/30 backdrop-blur-sm text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-500"
            >
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                Invite Sir
              </span>
              <span className="text-gold-400 text-xl leading-none">
                ¶
              </span>
            </a>
          </div>
        </div>

        {/* Subtle inner glow on edges */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />
      </div>
    </section>
  );
}



