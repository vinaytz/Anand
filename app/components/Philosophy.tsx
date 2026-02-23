"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Brain, Mic2, Feather, Compass, Sparkles } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "The Architecture of Silence",
    quote: "Silence is the loudest sound in the room.",
    description:
      "True authority doesn't shout. In a world of constant noise, the ability to pause, reflect, and speak with intent is the ultimate power move. Dr. Shukla teaches leaders how to command the room not by filling it — but by anchoring it with presence.",
    icon: Mic2,
    accentColor: "#d4af37",
    gradientFrom: "#1a1509",
    gradientTo: "#050505",
  },
  {
    number: "02",
    title: "Resilience over Reaction",
    quote: "Don't bounce back. Bounce forward.",
    description:
      "Reaction is instinct; resilience is architecture. We build mental frameworks that turn crisis into clarity. This isn't about recovery — it's about emerging with a newly forged strength that wasn't there before.",
    icon: Brain,
    accentColor: "#c5a059",
    gradientFrom: "#0d0d1a",
    gradientTo: "#050505",
  },
  {
    number: "03",
    title: "Legacy in Motion",
    quote: "Success is what you gather. Legacy is what you scatter.",
    description:
      "The final stage of leadership is moving from accumulation to contribution. We design careers that don't just end in retirement, but evolve into lasting institutions of influence that outlive their creator.",
    icon: Feather,
    accentColor: "#ebd39c",
    gradientFrom: "#120f08",
    gradientTo: "#050505",
  },
  {
    number: "04",
    title: "The Compass of Integrity",
    quote: "When values are clear, decisions are easy.",
    description:
      "In the grey areas of modern business, integrity is the only black and white. It is the north star that simplifies complex decisions and the foundation upon which all other principles rest.",
    icon: Compass,
    accentColor: "#d4af37",
    gradientFrom: "#0a0f09",
    gradientTo: "#050505",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-16 lg:py-24"
      >
        {/* Left: Number + Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Number + Line */}
          <div className="flex items-center gap-6">
            <span
              className="text-7xl lg:text-8xl font-serif font-bold leading-none"
              style={{ color: pillar.accentColor, opacity: 0.15 }}
            >
              {pillar.number}
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-serif text-white leading-snug tracking-tight">
            {pillar.title}
          </h3>

          {/* Quote */}
          <div className="flex items-start gap-4">
            <Sparkles
              className="w-4 h-4 shrink-0 mt-1.5"
              style={{ color: pillar.accentColor }}
            />
            <p
              className="text-lg font-serif italic leading-relaxed"
              style={{ color: pillar.accentColor }}
            >
              "{pillar.quote}"
            </p>
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-gray-400 leading-[1.8] max-w-xl font-light">
            {pillar.description}
          </p>
        </div>

        {/* Right: Visual Card */}
        <div className="lg:col-span-5 relative flex items-start justify-center lg:justify-end pt-4">
          <div
            className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientTo} 100%)`,
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at center, ${pillar.accentColor}10 0%, transparent 70%)`,
              }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Outer ring */}
                <div
                  className="absolute -inset-8 rounded-full border opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
                  style={{ borderColor: pillar.accentColor }}
                />
                {/* Inner ring */}
                <div
                  className="absolute -inset-4 rounded-full border opacity-5 group-hover:opacity-15 transition-all duration-700"
                  style={{ borderColor: pillar.accentColor }}
                />
                <Icon
                  className="w-12 h-12 transition-all duration-700 group-hover:scale-110"
                  style={{ color: pillar.accentColor, opacity: 0.6 }}
                />
              </div>
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-20 h-20"
              style={{
                background: `linear-gradient(225deg, ${pillar.accentColor}08 0%, transparent 60%)`,
              }}
            />

            {/* Number watermark */}
            <span
              className="absolute bottom-4 right-6 text-[120px] font-serif font-bold leading-none select-none pointer-events-none"
              style={{ color: pillar.accentColor, opacity: 0.03 }}
            >
              {pillar.number}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      {index < pillars.length - 1 && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      )}
    </motion.div>
  );
}

export default function Philosophy() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Animated background gradient blob */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-gold-400/[0.04] to-transparent blur-3xl" />
      </motion.div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 lg:mb-32 space-y-6">
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="h-[1px] w-10 bg-gold-500/50" />
            <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-semibold">
              Core Philosophy
            </span>
            <div className="h-[1px] w-10 bg-gold-500/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            The Method Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-white to-gold-200">
              The Impact
            </span>
          </h2>

          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Four foundational principles that guide every keynote, every book,
            and every transformative conversation.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="space-y-0">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
