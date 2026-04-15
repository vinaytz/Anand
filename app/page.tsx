import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
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
      <StatsBar />
      <ContentCards />
      <BannerSection
        src="/gallery/5.jpeg"
        alt="Dr. Anand K Shukla at Infocomm India"
        position="50% 40%"
        quote="Success is what you gather. Legacy is what you scatter."
        attribution="Dr. Anand K Shukla"
      />
      <VideoSection />
      <GalleryCarousel />
      <div className="p-5  flex justify-center items-center">
      <img src="about.png" className="rounded-2xl" alt="" />

      </div>
      <Footer />
    </main>
  );
}
