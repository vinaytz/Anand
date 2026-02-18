// Placeholder for Speaking Engagements Page
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Speaking from '../components/Speaking';
import KeynoteShowcase from '../components/KeynoteShowcase'; // New component
import { Spotlight } from '../components/ui/Spotlight';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import InviteSection from '../components/InviteSection';
import { ArrowDown } from 'lucide-react';

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      {/* 
        New Video/Hero Section 
        Using similar layout to home but specific for Speaking 
      */}
      <div className="h-[90vh] min-h-[700px] bg-[#050505] relative overflow-hidden flex items-center">
         <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
         
         {/* Background Image - Microphone/Stage focus */}
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1475721027767-da4233096f9d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 animate-slow-pan" />
         
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-transparent to-transparent" />

         <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
            <div className="w-24 h-[1px] bg-gold-500 mb-8 animate-fade-in-up delay-100"></div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 animate-fade-in-up delay-200 leading-[0.9]">
               The Art of <br/>
               <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gold-400">Influence</span>
            </h1>
            
            <div className="max-w-2xl animate-fade-in-up delay-300">
               <TextGenerateEffect 
                  words="Transformative keynotes that shift perspectives, ignite action, and leave a legacy of clarity. Dr. Shukla doesn't just speak; he resonates."
                  className="text-xl text-gray-300 font-light leading-relaxed"
               />
            </div>

            <div className="absolute bottom-10 left-6 animate-bounce text-gray-500">
               <ArrowDown className="w-6 h-6" />
            </div>
         </div>
      </div>

      {/* Categories & Engagement Types */}
      <Speaking />

      {/* Detailed Keynote Showcase (The "Meat" of the page) */}
      <KeynoteShowcase />
      
      {/* Logos or Trust Strip could go here */}

      <InviteSection />
      <Footer />
    </main>
  );
}
