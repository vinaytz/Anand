import React from 'react';
import { Award, BookOpen, Mic } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-rich-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative group">
           <div className="absolute -inset-4 bg-gold-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="relative h-[600px] w-full rounded-4xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-neutral-800 bg-[url('/gallery/2.jpeg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <p className="font-serif italic text-gold-400 text-lg">"Empowering the next generation of leaders."</p>
              </div>
           </div>
        </div>

        {/* Text Side */}
        <div className="space-y-8">
           <div className="space-y-2">
              <h4 className="text-gold-500 text-sm uppercase tracking-widest font-semibold">About Dr. Anand K Shukla</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Scholar. Speaker.<br/>Thought Leader.
              </h2>
           </div>

           <p className="text-gray-400 text-lg leading-relaxed font-light">
             I am a motivational speaker, academic dean, and author on a mission to bridge the gap between educational theory and real-world resilience. With over two decades in academia, I have seen firsthand that true success is not just about intelligence, but about emotional fortitude and clear purpose.
           </p>

           <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                 <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Mic className="w-5 h-5" />
                 </div>
                 <div>
                    <h5 className="text-white text-lg font-medium">Motivational Speaker</h5>
                    <p className="text-gray-500 text-sm">Delivering high-impact keynotes at universities and global forums.</p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                 </div>
                 <div>
                    <h5 className="text-white text-lg font-medium">Published Author</h5>
                    <p className="text-gray-500 text-sm">Author of 3 best-selling books on leadership and personal growth.</p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Award className="w-5 h-5" />
                 </div>
                 <div>
                    <h5 className="text-white text-lg font-medium">Academic Dean</h5>
                    <p className="text-gray-500 text-sm">Leading academic excellence and curriculum innovation.</p>
                 </div>
              </div>
           </div>

           <div className="pt-6">
              <a href="#speaking" className="text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors">
                Read Full Biography
              </a>
           </div>

        </div>

      </div>
    </section>
  );
}
