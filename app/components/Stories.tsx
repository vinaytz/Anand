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
    <section className="py-24 px-6 md:px-24 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-6">
          <h2 className="text-3xl md:text-5xl font-serif text-white">Moments of Clarity</h2>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-gray-500">Selected Talks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-[#151515] overflow-hidden mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Play className="w-4 h-4 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-400 bg-black/50 px-2 py-1">
                  {story.duration}
                </div>
              </div>
              
              <h3 className="text-xl font-serif text-gray-200 group-hover:text-white transition-colors mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {story.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
