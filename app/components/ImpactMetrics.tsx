import React from 'react';
import { Globe, Users, BookMarked, Award } from 'lucide-react';

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-[#080808] relative border-b border-white/5">
      {/* Background World Map Graphic (Abstract) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
         <div className="w-[80%] h-[80%] rounded-full border border-white/20 border-dashed animate-[spin_60s_linear_infinite]" />
         <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Global Footprint</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">
             Dr. Shukla's influence spans continents, classrooms, and boardrooms, creating a legacy of transformative leadership.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           <div className="space-y-4">
              <div className="flex justify-center text-gold-500 mb-2">
                 <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-serif text-white">50+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Global Keynotes</p>
           </div>
           
           <div className="space-y-4">
              <div className="flex justify-center text-gold-500 mb-2">
                 <Users className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-serif text-white">100k+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Lives Impacted</p>
           </div>

           <div className="space-y-4">
              <div className="flex justify-center text-gold-500 mb-2">
                 <BookMarked className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-serif text-white">3</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Best Sellers</p>
           </div>

           <div className="space-y-4">
              <div className="flex justify-center text-gold-500 mb-2">
                 <Award className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-serif text-white">20+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Yr. Academic Legacy</p>
           </div>
        </div>
      </div>
    </section>
  );
}
