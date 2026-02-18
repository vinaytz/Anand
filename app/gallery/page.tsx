import React from 'react';
import fs from 'fs';
import path from 'path';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ParallaxScroll } from '../components/ui/ParallaxScroll';
import InviteSection from '../components/InviteSection';

// This is a Server Component
export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];

  try {
    const files = fs.readdirSync(galleryDir);
    images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
      .map((file) => `/gallery/${file}`);
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    // Fallback if directory missing
  }

  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-10 px-6 bg-[#050505] relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent" />
         
         <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">Visual Journey</h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Moments of connection, stages of impact, and the quiet spaces in between.
            </p>
         </div>
      </div>

      <div className="min-h-screen bg-rich-black">
        {images.length > 0 ? (
           <ParallaxScroll images={images} />
        ) : (
           <div className="text-center py-20 text-gray-500">No images found in gallery.</div>
        )}
      </div>

      <InviteSection />
      <Footer />
    </main>
  );
}
