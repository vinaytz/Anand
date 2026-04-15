import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "The Journey",
    text: "Dr. Anand K Shukla's journey is a unique one, taking him from the world of academia to the global stage as a motivational speaker and thought leader. Starting as a lecturer in 2005, he realized early that education must build the person, not just the professional. His relentless pursuit of purpose led him to become the Dean of Academics, transforming curriculum to integrate emotional intelligence and leadership.",
    image: "/gallery/stage2.jpeg",
  },
  {
    title: "The Transition",
    text: "Dr. Shukla's transition from educator to global speaker stemmed from a deep desire to impact lives beyond the classroom. He began delivering motivational keynotes, drawing on his own experiences, challenges, and two decades of academic wisdom. His first international keynote at the Dubai Leadership Forum in 2012 — 'The Silent Leader' — marked the beginning of a new chapter.",
    image: "/gallery/new.jpeg",
  },
  {
    title: "The Core Message",
    text: "Dr. Shukla's talks focus on resilience, leadership, and self-belief. He emphasises the importance of 'Silent Authority' — commanding respect through presence, not volume. His core message bridges ancient wisdom with modern corporate strategy, reminding people of their inner strength and the power of integrity-driven leadership.",
    image: "/gallery/stage_speaking2.jpeg",
  },
  {
    title: "The Reach",
    text: "The impact of Dr. Shukla's message extends far beyond physical speeches. With 50+ keynotes delivered across 4 continents, engagements at TEDx, IIT Delhi, IIM Ahmedabad, and global leadership forums, his influence touches millions. His 3 best-selling books — including 'The Architecture of Thought' — have been read by over 50,000 people worldwide.",
    image: "/gallery/4.jpeg",
  },
  {
    title: "The Legacy",
    text: "Dr. Anand K Shukla's influence on over 100K+ lives serves as a testament to the power of purpose and resilience. His journey from lecturer, to Dean, to published author, to global speaker is an inspiration to those seeking to find their calling and create lasting impact. As he says: 'Success is what you gather. Legacy is what you scatter.'",
    image: "/gallery/stage_podium1.jpeg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/gallery/writeonstage.png"
          alt="Dr. Anand K Shukla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mb-3">
              The Person
            </h1>
            <p className="text-white/70 text-[13px] uppercase tracking-[0.25em] font-sans">
              Scholar &middot; Speaker &middot; Thought Leader
            </p>
          </div>
        </div>
      </section>

      {/* Bio intro */}
      <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <p className="text-(--text-body) text-[17px] leading-[1.8] font-sans text-center">
          Dr. Anand K Shukla is a renowned educator, motivational speaker, published author,
          and thought leader from India. With over 20 years in academia and 50+ global keynotes
          across 4 continents, he has become a respected figure in the personal development
          and leadership space.
        </p>
      </section>

      {/* Alternating Sections */}
      {sections.map((section, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={section.title}
            className={`py-14 md:py-20 ${i % 2 === 0 ? "bg-white" : "bg-(--bg-light)"}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${imageLeft ? "" : "md:[direction:rtl]"}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${imageLeft ? "" : "md:[direction:ltr]"}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Text */}
                <div className={imageLeft ? "" : "md:[direction:ltr]"}>
                  <h4 className="font-serif text-2xl md:text-3xl text-(--text-dark) mb-5">
                    {section.title}
                  </h4>
                  <p className="text-(--text-body) text-[16px] leading-[1.8] font-sans">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom image grid */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { src: "/gallery/stage_speaking1.jpeg", pos: "center" },
            { src: "/gallery/stagecopy.jpeg", pos: "center" },
            { src: "/gallery/2.jpeg", pos: "center" },
            { src: "/gallery/4_new.jpeg", pos: "center" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={`Gallery ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
