import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import AboutSection from "./components/AboutSection";
import  Philosophy  from "./components/Philosophy"; // New Sticky Scroll
import ImpactMetrics from "./components/ImpactMetrics"; // New
import VisualJourney from "./components/VisualJourney"; // New
import WorkShowcase from "./components/WorkShowcase"; 
import VideoGallery from "./components/VideoGallery";
import { Testimonials } from "./components/Testimonials"; // New Aceternity UI
import InviteSection from "./components/InviteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black overflow-x-hidden selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <LogoStrip />
      
      <AboutSection />
      
      {/* Cool Sticky Scroll Section */}
      <Philosophy />
      
      {/* New Visual Section: The "World Class" Feel */}
      <ImpactMetrics />
      <VisualJourney />
      
      <WorkShowcase />
      <VideoGallery />
      
      <Testimonials />
      
      <InviteSection />
      
      <Footer />
    </main>
  );
}



