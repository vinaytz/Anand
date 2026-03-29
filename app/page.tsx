import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import AboutSection from "./components/AboutSection";
import Philosophy from "./components/Philosophy";
import ImpactMetrics from "./components/ImpactMetrics";
import VisualJourney from "./components/VisualJourney";
import WorkShowcase from "./components/WorkShowcase";
import VideoGallery from "./components/VideoGallery";
import { Testimonials } from "./components/Testimonials";
import InviteSection from "./components/InviteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--th-bg)] overflow-x-hidden transition-colors duration-300">
      {/* Global noise texture */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.018] mix-blend-overlay bg-noise" />

      <Preloader />
      <Navbar />
      <Hero />
      <LogoStrip />
      <AboutSection />
      <Philosophy />
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



