"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import { Brain, Mic2, Feather, Compass } from "lucide-react";

const content = [
  {
    title: "The Architecture of Silence",
    description:
      "True authority doesn't shout. In a world of constant noise, the ability to pause, reflect, and speak with intent is the ultimate power move. Dr. Shukla teaches leaders how to command the room not by filling it with words, but by anchoring it with presence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--rich-black),#1a1a1a)] flex items-center justify-center text-white">
         <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full border border-gold-500/20 flex items-center justify-center mx-auto animate-pulse">
                <Mic2 className="w-8 h-8 text-gold-500" />
            </div>
            <p className="text-sm font-serif italic text-gray-500">"Silence is the loudest sound in the room."</p>
         </div>
      </div>
    ),
  },
  {
    title: "Resilience over Reaction",
    description:
      "Reaction is instinct; resilience is architecture. We build mental frameworks that turn crisis into clarity. This isn't just about 'bouncing back'—it's about bouncing forward with a newly forged strength that wasn't there before.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--rich-black),var(--gold-600))]">
         <div className="w-full h-full flex items-center justify-center bg-black/50">
             <Brain className="w-24 h-24 text-white/20" />
         </div>
      </div>
    ),
  },
  {
    title: "Legacy in Motion",
    description:
      "Success is what you gather; legacy is what you scatter. The final stage of leadership is moving from accumulation to contribution. We design careers that don't just end in retirement, but evolve into lasting institutions of influence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gold-500),var(--rich-black))] flex items-center justify-center text-white">
        <Feather className="w-20 h-20 text-white/80" />
      </div>
    ),
  },
  {
    title: "The Compass of Integrity",
    description:
      "In the grey areas of modern business, integrity is the only black and white. It is the north star that simplifies complex decisions. When values are clear, decisions are easy.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--rich-black),#0a0a0a)] flex items-center justify-center text-white border border-white/5">
        <Compass className="w-20 h-20 text-gold-400 rotate-45" />
      </div>
    ),
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-rich-black relative">
       {/* Section Header */}
       <div className="max-w-7xl mx-auto px-10 mb-20 text-center">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium">Core Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">The Method</h2>
       </div>
       
       <StickyScroll content={content} />
    </section>
  );
}
