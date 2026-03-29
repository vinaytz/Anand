"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "The Power of Silence in Leadership",
    views: "125K Views",
    duration: "12:45",
    thumb: "/gallery/stage_speaking1.jpeg",
  },
  {
    title: "Why You Feel Stuck (And How to Move)",
    views: "89K Views",
    duration: "18:30",
    thumb: "/gallery/stage_speaking2.jpeg",
  },
  {
    title: "The Future of Education in India",
    views: "45K Views",
    duration: "24:15",
    thumb: "/gallery/stage_podium1.jpeg",
  },
  {
    title: "Building Resilience in Uncertain Times",
    views: "67K Views",
    duration: "15:20",
    thumb: "/gallery/4.jpeg",
  },
];

export default function VideoGallery() {
  return (
    <section
      id="videos"
      className="relative py-24 lg:py-32 px-6 md:px-12 bg-[var(--th-bg)] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#d4af37]" />
              <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em]">
                Watch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--th-text)] tracking-tight">
              In Action
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            href="https://youtube.com"
            target="_blank"
            className="group inline-flex items-center gap-2 text-[var(--th-text-3)] hover:text-[var(--th-text)] transition-colors duration-500 text-xs border border-[var(--th-border)] hover:border-[#d4af37]/30 px-5 py-2.5 rounded-full"
            data-cursor="pointer"
          >
            YouTube Channel
            <svg
              className="w-3.5 h-3.5 text-[#d4af37] -rotate-45 group-hover:rotate-0 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </div>

        {/* ── Video Grid — 2x2 on desktop, stacked on mobile ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
              data-cursor-text="PLAY"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--th-border)] group-hover:border-[#d4af37]/20 transition-all duration-700">
                {/* Thumbnail */}
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-[1.03] group-hover:scale-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

                {/* Play button — center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--th-bg-15)] backdrop-blur-md border border-[var(--th-border-hover)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>

                {/* Duration chip — top right */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-md">
                  {video.duration}
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-sm md:text-[15px] font-medium text-[var(--th-text)] tracking-wide line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-[var(--th-text-3)] mt-1 font-mono">
                    {video.views}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--th-border-subtle)] to-transparent" />
    </section>
  );
}
