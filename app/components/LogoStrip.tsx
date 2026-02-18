import React from 'react';

const logos = [
  "TEDx", "Josh Talks", "The Times", "India Today", "IIT Delhi", "IIM A"
];

export default function LogoStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-600 mb-8">Featured On & Trusted By</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {logos.map((logo, idx) => (
             <div key={idx} className="text-xl md:text-2xl font-serif text-white/40 hover:text-gold-400 transition-colors cursor-default">
               {logo}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
