// Placeholder for Books Page
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Books from '../components/Books';
import InviteSection from '../components/InviteSection';

export default function AuthorPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />

            {/* Top-right grid */}
      <div
        className="absolute inset-0 z-[6] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 65%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 65%)",
        }}
      />
      
      <div className="pt-40 pb-20 px-6 bg-[#050505] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">Published Works</h1>
            <p className="text-xl text-gray-400 max-w-2xl">The written word is the legacy of thought. Explore the books authored by Dr. Shukla.</p>
         </div>
      </div>

      <Books />
      
      <InviteSection />
      <Footer />
    </main>
  );
}
