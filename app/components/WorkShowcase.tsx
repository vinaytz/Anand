import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WorkShowcase() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
           <h2 className="text-4xl md:text-5xl font-serif text-white">Impact & Contributions</h2>
           <p className="text-gray-500">A lifetime of dedicated work in education and empowerment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Card 1: The Author (Large) */}
           <div className="md:col-span-2 bg-neutral-900/50 p-8 md:p-12 rounded-xl border border-white/5 relative group overflow-hidden hover:border-gold-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-9xl font-serif text-white">A</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-48 aspect-[2/3] bg-neutral-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 border-l border-white/5">
                    {/* Fake Book Cover */}
                    <div className="h-full w-full bg-gradient-to-b from-gray-800 to-black p-4 flex flex-col justify-between">
                       <span className="text-[8px] text-gray-400 uppercase tracking-widest text-center">Dr. Anand K Shukla</span>
                       <span className="text-xl font-serif text-center text-gold-200">The<br/>Architecture<br/>of Thought</span>
                       <div className="w-full h-1 bg-gold-600"></div>
                    </div>
                 </div>
                 <div className="space-y-6 flex-1 text-center md:text-left">
                    <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">Latest Publication</span>
                    <h3 className="text-3xl font-serif text-white">The Architecture of Thought</h3>
                    <p className="text-gray-400 leading-relaxed">
                       A deep dive into the resilient mind. This book explores how modern leaders can find clarity amidst chaos.
                    </p>
                    <button className="flex items-center gap-2 text-white text-sm uppercase tracking-wider hover:text-gold-400 transition-colors mx-auto md:mx-0">
                       Get Your Copy <ArrowUpRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Card 2: The Speaker (Tall) */}
           <div className="md:col-span-1 bg-neutral-900/50 p-8 rounded-xl border border-white/5 relative group overflow-hidden hover:bg-neutral-900 transition-colors flex flex-col justify-end min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 space-y-4">
                 <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">Keynote Speaker</span>
                 <h3 className="text-2xl font-serif text-white">Inspiring Global Audiences</h3>
                 <p className="text-gray-400 text-sm">
                    From IITs to International Forums, delivering messages that stick.
                 </p>
                 <a href="#speaking" className="inline-block text-white text-xs border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
                    View Topics
                 </a>
              </div>
           </div>

           {/* Card 3: The Academic (Wide) */}
           <div className="md:col-span-3 bg-gold-600/10 p-8 md:p-12 rounded-xl border border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                 <h3 className="text-2xl font-serif text-white">Deanship & Academic Leadership</h3>
                 <p className="text-gray-400">
                    As Dean of Academics, Dr. Anand leads curriculum innovation and student development strategies impacting thousands of futures annually.
                 </p>
              </div>
              <div className="flex gap-12 text-center">
                 <div>
                    <span className="block text-3xl font-serif text-gold-400">20+</span>
                    <span className="text-xs text-gray-500 uppercase">Years</span>
                 </div>
                 <div>
                    <span className="block text-3xl font-serif text-gold-400">5k+</span>
                    <span className="text-xs text-gray-500 uppercase">Students</span>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
