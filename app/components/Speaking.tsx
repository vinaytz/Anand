import React from 'react';
import { Mic2, GraduationCap, Users, Globe2, Sparkles, Building2 } from 'lucide-react';

const categories = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Summits",
    desc: "Opening keynotes that set the tone for innovation and resilience."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Universities & Colleges",
    desc: "Faculty development and advanced student leadership programs."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Leadership Forums",
    desc: "Intensive workshops for C-Suite executives and future managers."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Global Conferences",
    desc: "Cross-cultural insights for diverse, international audiences."
  },
];

export default function Speaking() {
  return (
    <section className="py-24 px-6 md:px-24 bg-[var(--th-bg)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
            <div>
                 <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Engagement Types</span>
                 <h2 className="text-4xl md:text-5xl font-serif text-[var(--th-text)]">Tailored for Impact</h2>
            </div>
            <p className="text-[var(--th-text-3)] font-light leading-relaxed max-w-xl">
                Whether it’s a stadium of thousands or a boardroom of ten, Dr. Shukla adapts his delivery to resonate with the specific frequency of your room.
            </p>
        </div>
        
        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[var(--th-card)] border border-[var(--th-border)] p-8 relative overflow-hidden group hover:border-gold-500/30 transition-all duration-500">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--th-border)] flex items-center justify-center text-[var(--th-text-3)] mb-8 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-500">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-serif text-[var(--th-text)] mb-3 group-hover:translate-x-2 transition-transform duration-300">{cat.title}</h3>
                  <p className="text-sm text-[var(--th-text-4)] leading-relaxed group-hover:text-[var(--th-text-2)] transition-colors">
                    {cat.desc}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
