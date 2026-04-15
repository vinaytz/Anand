"use client";

import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/gallery/1768293102553.jpeg", alt: "Event photo" },
{ src: "/gallery/1770623937224.jpeg", alt: "Event photo" },
{ src: "/gallery/stage_speaking1.jpeg", alt: "International keynote with flags" },
{ src: "/gallery/stagecopy.jpeg", alt: "Education Tomorrow Awards" },
{ src: "/gallery/new.jpeg", alt: "Infocomm India podium" },
{ src: "/gallery/1772470177807.jpeg", alt: "Event photo" },
  { src: "/gallery/4.jpeg", alt: "Speaking to audience" },
  { src: "/gallery/stage2.jpeg", alt: "FDP conference talk" },
  { src: "/gallery/2.jpeg", alt: "International collaboration" },
  { src: "/gallery/stage_podium1.jpeg", alt: "University podium address" },
  { src: "/gallery/4_new.jpeg", alt: "International meeting" },
  { src: "/gallery/stage_speaking2.jpeg", alt: "On stage speaking" },
  { src: "/gallery/stage.jpeg", alt: "Stage speaking event" },
  { src: "/gallery/internationl.jpeg", alt: "International event" },
  { src: "/gallery/1.jpeg", alt: "Event photo" },
  { src: "/gallery/5.jpeg", alt: "Event photo" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.36 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.37 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.39 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.40 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.40 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.41 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.41 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.41 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.42 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.42 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.43 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.43 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.44 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.44 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.44 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.45 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.45 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.45 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.46 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.46 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.47 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.47 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.47 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.48 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.49 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.50 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.51 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.43.52 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.14 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.14 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.17 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.17 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.18 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.52.18 AM.jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.53.26 AM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 11.53.26 AM (2).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 12.06.54 PM (1).jpeg", alt: "Event moment" },
  { src: "/gallery/WhatsApp Image 2026-01-25 at 12.06.54 PM.jpeg", alt: "Event moment" },
];

export default function GalleryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-(--bg-light) py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-(--text-dark) text-center">
          Moments That Matter
        </h2>
      </div>
      <div className="relative max-w-350 mx-auto px-6">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-[72vw] sm:w-75 md:w-95 aspect-4/3 relative overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center bg-white/90 hover:bg-white text-(--text-dark) shadow-md transition-all cursor-pointer"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center bg-white/90 hover:bg-white text-(--text-dark) shadow-md transition-all cursor-pointer"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
