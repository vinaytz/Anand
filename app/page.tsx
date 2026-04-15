import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentCards from "./components/ContentCards";
import BannerSection from "./components/BannerSection";
import VideoSection from "./components/VideoSection";
import GalleryCarousel from "./components/GalleryCarousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ContentCards />
      <BannerSection src="/gallery/stage.jpeg" alt="Dr. Anand K Shukla speaking" position="59% 33%" />
      <BannerSection src="/gallery/internationl.jpeg" alt="International events" position="50% 70%" />
      <VideoSection />
      <GalleryCarousel />
      <Footer />
    </main>
  );
}
