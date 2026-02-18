// Placeholder for a detailed About page
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import InviteSection from '../components/InviteSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-20 px-6 bg-[#050505] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">The Story</h1>
            <p className="text-xl text-gray-400 max-w-2xl">From the lecture halls of India to global stages, the journey of defining modern leadership.</p>
         </div>
      </div>

      <AboutSection />
      
      {/* Detailed Timeline or Additional Bio Content would go here */}
      <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
             <div className="border-l border-gold-500/30 pl-8 space-y-4">
                <span className="text-gold-500 font-mono text-sm">2005</span>
                <h3 className="text-2xl font-serif text-white">The Beginning of Academia</h3>
                <p className="text-gray-400">Started the journey as a lecturer, realizing that students needed more than just textbook knowledge—they needed life skills.</p>
             </div>
             <div className="border-l border-gold-500/30 pl-8 space-y-4">
                <span className="text-gold-500 font-mono text-sm">2012</span>
                <h3 className="text-2xl font-serif text-white">First International Keynote</h3>
                <p className="text-gray-400">Invited to Dubai Leadership Forum to speak on 'The Silent Leader'.</p>
             </div>
             <div className="border-l border-gold-500/30 pl-8 space-y-4">
                <span className="text-gold-500 font-mono text-sm">2020</span>
                <h3 className="text-2xl font-serif text-white">Dean of Academics</h3>
                <p className="text-gray-400">Took the helm at [University Name], transforming the curriculum to integrate emotional intelligence.</p>
             </div>
          </div>
      </section>

      <InviteSection />
      <Footer />
    </main>
  );
}
