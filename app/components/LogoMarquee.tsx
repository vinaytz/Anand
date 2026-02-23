"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const names = [
  "TEDx",
  "Josh Talks",
  "IIT Delhi",
  "IIM Ahmedabad",
  "India Today",
  "The Times",
  "Harvard Business Review",
  "World Economic Forum",
  "Oxford Union",
  "NASSCOM",
];

export default function LogoMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  // Double the items for seamless loop
  const items = [...names, ...names];

  return (
    <section
      ref={sectionRef}
      className="relative py-10 lg:py-14 bg-[#050505] border-y border-white/[0.04] overflow-hidden"
    >
      <div className="text-center mb-8">
        <span className="text-gray-600 text-[9px] tracking-[0.5em] uppercase font-medium">
          Featured & Trusted By
        </span>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll flex items-center gap-16 lg:gap-24 whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={i}
              className="text-lg lg:text-xl font-serif text-white/20 hover:text-gold-400/60 transition-colors duration-500 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
