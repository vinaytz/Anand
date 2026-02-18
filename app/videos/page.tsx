// Placeholder for Videos Page
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoGallery from '../components/VideoGallery';
import InviteSection from '../components/InviteSection';

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 bg-[#050505] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492619882492-1b6946396433?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">Media & Talks</h1>
            <p className="text-xl text-gray-400 max-w-2xl">A curated collection of interviews, speeches, and moments of clarity.</p>
         </div>
      </div>

      <VideoGallery />
      
      {/* More Videos Grid Placeholder */}
      <section className="pb-24 px-6 md:px-12 bg-rich-black">
         <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Simulated additional video items */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-video bg-[#111] border border-white/5 rounded flex items-center justify-center text-gray-600">
                        Additional Video {item}
                    </div>
                ))}
             </div>
         </div>
      </section>

      <InviteSection />
      <Footer />
    </main>
  );
}
