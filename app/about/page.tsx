import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "The Journey",
    text: "Dr. Anand K Shukla's journey is a unique one, taking him from the world of academia to the global stage as a motivational speaker and thought leader. Starting as a lecturer in 2005, he realized early that education must build the person, not just the professional. His relentless pursuit of purpose led him to become the Dean of Academics, transforming curriculum to integrate emotional intelligence and leadership.",
  },
  {
    title: "The Transition",
    text: "Dr. Shukla's transition from educator to global speaker stemmed from a deep desire to impact lives beyond the classroom. He began delivering motivational keynotes, drawing on his own experiences, challenges, and two decades of academic wisdom. His first international keynote at the Dubai Leadership Forum in 2012 — 'The Silent Leader' — marked the beginning of a new chapter.",
  },
  {
    title: "The Core Message",
    text: "Dr. Shukla's talks focus on resilience, leadership, and self-belief. He emphasises the importance of 'Silent Authority' — commanding respect through presence, not volume. His core message bridges ancient wisdom with modern corporate strategy, reminding people of their inner strength and the power of integrity-driven leadership.",
  },
  {
    title: "The Reach",
    text: "The impact of Dr. Shukla's message extends far beyond physical speeches. With 50+ keynotes delivered across 4 continents, engagements at TEDx, IIT Delhi, IIM Ahmedabad, and global leadership forums, his influence touches millions. His 3 best-selling books — including 'The Architecture of Thought' — have been read by over 50,000 people worldwide.",
  },
  {
    title: "The Legacy",
    text: "Dr. Anand K Shukla's influence on over 100K+ lives serves as a testament to the power of purpose and resilience. His journey from lecturer, to Dean, to published author, to global speaker is an inspiration to those seeking to find their calling and create lasting impact. As he says: 'Success is what you gather. Legacy is what you scatter.'",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/gallery/writeonstage.png"
          alt="Dr. Anand K Shukla"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide">
            The Person
          </h1>
        </div>
      </section>

      {/* Bio intro */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <p className="text-[var(--text-body)] text-[16px] leading-relaxed font-sans">
          Dr. Anand K Shukla is a renowned educator, motivational speaker, published author,
          and thought leader from India. With over 20 years in academia and 50+ global keynotes
          across 4 continents, he has become a respected figure in the personal development
          and leadership space. His journey to impact is marked by perseverance, self-belief,
          and a deep understanding of human potential.
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section
          key={section.title}
          className={`py-12 md:py-16 ${i % 2 === 0 ? "bg-white" : "bg-[var(--bg-light)]"}`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h4 className="font-serif text-2xl md:text-3xl text-[var(--text-dark)] mb-4">
              {section.title}
            </h4>
            <p className="text-[var(--text-body)] text-[16px] leading-relaxed font-sans">
              {section.text}
            </p>
          </div>
        </section>
      ))}

      {/* Bottom image strip */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {[
            "/gallery/stage_speaking1.jpeg",
            "/gallery/2.jpeg",
            "/gallery/stage2.jpeg",
            "/gallery/4.jpeg",
            "/gallery/stage_podium1.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
