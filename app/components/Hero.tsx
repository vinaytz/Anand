import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-rich-black">
      
      {/* 
         Pro Aceternity UI: Spotlight Effect
         Adds a dramatic light source from the top-left, enhancing the "Stage" feel.
      */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* 
         1. Full Screen Background Image 
         Action: Using a high-quality stage speaking photo. 
         Note: We use 'object-cover' and fixed positioning for parallax feel if desired, 
         but here relative is safer for the section.
      */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/gallery/1.png')] scale-105 animate-slow-pan" />
          
          {/* 
             2. Cinematic Gradient Overlay 
             Action: Instead of solid black, we use a gradient that allows the stage lights to peek through 
             on the right side, while keeping the left dark for text readability.
             Added a touch of Gold/Blue blend for "Premium" feel.
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#050505]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
           
           {/* Top Tagline */}
           <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase shadow-black drop-shadow-md">
                 Global Keynote Speaker
              </span>
           </div>

           {/* Main Headline */}
           <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-2xl">
             Unlock Your <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gold-400 to-gold-400 italic pr-4">
               Highest Potential
             </span>
           </h1>

           {/* Subtext with Aceternity Text Reveal */}
           <div className="border-l-4 border-gold-500 pl-6 my-8">
             <TextGenerateEffect 
                words="Dr. Anand K Shukla bridges the gap between academic wisdom and real-world resilience, empowering leaders across 50+ universities and global stages."
                className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed drop-shadow-md"
             />
           </div>

           {/* Buttons */}
           <div className="flex flex-col sm:flex-row gap-6 pt-8">
             <a href="#contact" className="px-10 py-5 bg-gold-500 hover:bg-white text-black font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-white/20 flex items-center justify-center gap-3">
                Invite Him to Speak
                <ChevronRight className="w-4 h-4" />
             </a>
             
             <button className="px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-black font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md bg-white/5">
                <PlayCircle className="w-5 h-5" />
                Watch Showreel
             </button>
           </div>
           
           {/* Stats / Proof (Floating) */}
           <div className="pt-12 flex items-center gap-12">
              <div>
                  <div className="text-3xl font-serif text-white">15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Countries</div>
              </div>
              <div className="w-[1px] h-8 bg-white/20"></div>
              <div>
                  <div className="text-3xl font-serif text-white">100k+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Lives Touched</div>
              </div>
           </div>

        </div>
      </div>

    </section>
  );
}



