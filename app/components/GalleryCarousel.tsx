"use client";

import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  "/gallery/stage.jpeg",
  "/gallery/internationl.jpeg",
  "/gallery/stage2.jpeg",
  "/gallery/4.jpeg",
  "/gallery/stage_podium1.jpeg",
  "/gallery/5.jpeg",
];

export default function GalleryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[33.33%] h-[180px] md:h-[220px] relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/25 hover:bg-black/50 text-white transition-colors rounded-none cursor-pointer"
            aria-label="Scroll left"
          >
            &#8249;
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/25 hover:bg-black/50 text-white transition-colors rounded-none cursor-pointer"
            aria-label="Scroll right"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
