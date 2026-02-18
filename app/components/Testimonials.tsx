"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-rich-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-center mb-12 relative z-10 px-4">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Voices of Impact</h2>
      </div>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
      {/* Gradients to fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-rich-black to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-rich-black to-transparent z-10"></div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Dr. Shukla's keynote was not just a speech; it was a shift in consciousness for our entire leadership team.",
    name: "Sarah Williams",
    title: "Director of HR, TechGlobal Inc.",
  },
  {
    quote:
      "I have seen many speakers, but few command the room with such quiet authority and profound wisdom.",
    name: "Rajesh Gupta",
    title: "Chancellor, University of Delhi",
  },
  {
    quote: "His concept of 'Silent Authority' has completely redefined how I approach negotiation and conflict.",
    name: "Michael Chen",
    title: "CEO, FutureFlow",
  },
  {
    quote:
      "An unforgettable experience. The bridge between ancient wisdom and modern corporate strategy is exactly what we needed.",
    name: "Elena Rodriguez",
    title: "VP of Operations, Stellar Group",
  },
  {
    quote:
      "Dr. Shukla doesn't just speak to the mind; he speaks to the potential within. Truly world-class.",
    name: "David Park",
    title: "Founder, InnovateX",
  },
];
