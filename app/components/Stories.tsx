import React from 'react';
import { Play } from 'lucide-react';

const stories = [
  {
    title: "The Myth of Balance",
    line: "Life is not about balancing the scales, but weighting what matters.",
    duration: "12m"
  },
  {
    title: "Leading in Silence",
    line: "Why the best leaders speak last.",
    duration: "18m"
  },
  {
    title: "The Academic Soul",
    line: "Bridging the gap between theory and practice.",
    duration: "15m"
  }
];

export default function Stories() {
  return (
    <section className="py-24 px-6 md:px-24 bg-[var(--th-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[var(--th-border-subtle)] pb-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--th-text)]">Moments of Clarity</h2>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[var(--th-text-4)]">Selected Talks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-[var(--th-card)] overflow-hidden mb-6 border border-[var(--th-border)] group-hover:border-[var(--th-border-hover)] transition-colors">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-[var(--th-text)] flex items-center justify-center bg-[var(--th-bg-15)] backdrop-blur-sm">
                    <Play className="w-4 h-4 text-[var(--th-text)] fill-[var(--th-text)] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-[var(--th-text-3)] bg-[var(--th-bg-50)] px-2 py-1">
                  {story.duration}
                </div>
              </div>
              
              <h3 className="text-xl font-serif text-[var(--th-text-2)] group-hover:text-[var(--th-text)] transition-colors mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-[var(--th-text-4)] leading-relaxed group-hover:text-[var(--th-text-3)] transition-colors">
                {story.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
