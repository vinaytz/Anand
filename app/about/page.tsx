import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Academia & Leadership",
    text: "A senior IEEE member, Prof. (Dr.) Anand Kr. Shukla is a Professor and Dean of Computer Science and Application at Lovely Professional University (NAAC A++, NIRF 31, QS Ranking 4, WURI 04) — India's largest and most reputed private university. Across a career spanning 22 years, he has served in several universities and institutions as Head, Director, Dean, and Executive Dean/Director.",
    image: "/gallery/stage2.jpeg",
  },
  {
    title: "Research & Publications",
    text: "Dr. Shukla has more than 100 publications including SCI and Scopus-indexed journals, 15 patents to his name, and is the solo author of 5 books. He is an Elsevier Certified Reviewer and editor, serving several national and international journals. Several PhD research scholars have been successfully supervised under his guidance.",
    image: "/gallery/new.jpeg",
  },
  {
    title: "Speaker & Tech Evangelist",
    text: "A renowned national and international Tech and Motivational Speaker, Dr. Shukla is a registered member of Asia's largest tech events — Infocomm Asia and Infocomm India. He has been invited as a keynote and guest speaker at national and international universities, and has spoken at several IEEE and Springer conferences. His YouTube channel features 100+ lectures on Java, Python, and Machine Learning.",
    image: "/gallery/stage_speaking2.jpeg",
  },
  {
    title: "Professional Memberships",
    text: "Dr. Shukla is an active member of prominent professional bodies including IEEE, ACM, International Association of Engineers, and CSTA NY USA. He is deeply involved in accreditation work (NAAC and NBA), has organised international conferences (Springer and IEEE) and FDPs in association with NITTTR, and conducted prestigious events like Hackathons and Coda Thons.",
    image: "/gallery/4.jpeg",
  },
  {
    title: "Awards & Recognition",
    text: "Dr. Anand Kr. Shukla has been awarded the \"Research Excellence Award\" by STEM-Research Society in association with Dr. B.R. Ambedkar National Institute of Technology, Jalandhar on 30th December 2020, and the \"RMA (Rohilkhand Medical Association) Gem 2017\" Award for Health Care Services, among many other national and international recognitions.",
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
          // className="object-cover object-center"
          className="object-cover object-[80%_10%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mb-3">
              The Person
            </h1>
            <p className="text-white/70 text-[13px] uppercase tracking-[0.25em] font-sans">
              Professor &middot; Dean &middot; Author &middot; Speaker
            </p>
          </div>
        </div>
      </section>

      {/* Bio intro */}
      <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <p className="text-(--text-body) text-[17px] leading-[1.8] font-sans text-center">
          Prof. (Dr.) Anand Kr. Shukla is a Professor, Dean, senior IEEE member, published author,
          and internationally recognised Tech &amp; Motivational Speaker. With 22 years in academia,
          100+ publications, 15 patents, and keynotes at IEEE &amp; Springer conferences worldwide,
          he is a defining voice in education, research, and leadership.
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
