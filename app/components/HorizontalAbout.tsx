"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: "2005",
    title: "Academic Foundation",
    desc: "Began his journey in education, teaching and mentoring at leading universities across India.",
  },
  {
    year: "2015",
    title: "Global Stage",
    desc: "Delivered his first international keynote. Went on to speak across 15+ countries on leadership and resilience.",
  },
  {
    year: "2025",
    title: "100K Lives Touched",
    desc: "Impacted over 100,000 individuals through speaking, writing, and personal mentorship.",
  },
];

export default function HorizontalAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only enable horizontal scroll on desktop
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          const panels = gsap.utils.toArray<HTMLElement>(".about-panel");
          if (!panels.length || !trackRef.current || !sectionRef.current)
            return;

          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => "+=" + (trackRef.current?.scrollWidth || 0),
              invalidateOnRefresh: true,
            },
          });

          // Fade in elements as panels come into view
          panels.forEach((panel) => {
            gsap.from(panel.querySelectorAll(".panel-reveal"), {
              opacity: 0,
              y: 50,
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: gsap.getById?.("horizontalScroll") || undefined,
                start: "left 80%",
                toggleActions: "play none none none",
              },
            });
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[var(--th-bg2)] transition-colors duration-300">
      {/* Top transition from dark */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[var(--th-bg)] to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row"
      >
        {/* ─── Panel 1: The Title ─── */}
        <div className="about-panel min-w-screen min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 lg:py-0">
          <div className="max-w-5xl">
            <span className="panel-reveal text-gold-600 text-[10px] tracking-[0.5em] uppercase font-semibold mb-8 block">
              About
            </span>
            <h2 className="panel-reveal text-[var(--th-heading)] text-[clamp(2.8rem,7vw,7rem)] font-serif leading-[0.9] tracking-tight">
              A Bridge Between
              <br />
              <span className="italic text-gold-600">Wisdom</span> &{" "}
              <span className="italic text-gold-600">Action</span>
            </h2>
            <p className="panel-reveal text-[var(--th-text-2)] text-lg lg:text-xl font-light leading-relaxed mt-10 max-w-xl">
              For over two decades, Dr. Anand K Shukla has stood at the
              intersection of academia and the real world — empowering the next
              generation to lead with courage, clarity, and compassion.
            </p>
            <div className="panel-reveal mt-10 flex items-center gap-3">
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--th-text-3)] font-medium">
                Keep scrolling →
              </span>
            </div>
          </div>
        </div>

        {/* ─── Panel 2: Image + Quote ─── */}
        <div className="about-panel min-w-screen min-h-screen flex items-center px-6 lg:px-20 py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="panel-reveal relative aspect-4/5 overflow-hidden bg-[var(--th-card)]">
              <img
                src="/gallery/1.png"
                alt="Dr. Shukla speaking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
            <div>
              <blockquote className="panel-reveal text-2xl lg:text-[2.5rem] font-serif text-[var(--th-heading)] leading-snug italic lg:leading-[1.2]">
                &ldquo;Education is not just about filling minds — it&apos;s
                about igniting souls.&rdquo;
              </blockquote>
              <div className="panel-reveal mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-[var(--th-text-3)] text-sm tracking-wide">
                  Dr. Anand K Shukla
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Panel 3: Milestones ─── */}
        <div className="about-panel min-w-screen min-h-screen flex items-center px-6 lg:px-20 py-24 lg:py-0">
          <div className="max-w-5xl mx-auto w-full">
            <span className="panel-reveal text-gold-600 text-[10px] tracking-[0.5em] uppercase font-semibold mb-16 block">
              The Journey
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="panel-reveal border-t-2 border-[var(--th-border)] pt-8"
                >
                  <div className="text-gold-600 text-5xl lg:text-6xl font-serif mb-5">
                    {item.year}
                  </div>
                  <h3 className="text-[var(--th-heading)] text-xl font-serif mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--th-text-3)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Panel 4: The Mission ─── */}
        <div className="about-panel min-w-screen min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 lg:py-0">
          <div className="text-center max-w-3xl">
            <div className="panel-reveal w-16 h-px bg-gold-500 mx-auto mb-14" />
            <h2 className="panel-reveal text-[var(--th-heading)] text-4xl lg:text-6xl font-serif leading-tight mb-8">
              The Mission
            </h2>
            <p className="panel-reveal text-[var(--th-text-2)] text-lg lg:text-2xl font-light leading-relaxed">
              To unlock the highest potential in every individual — by bridging
              the gap between knowledge and courage, between thinking and doing,
              between surviving and truly thriving.
            </p>
            <a
              href="/about"
              className="panel-reveal inline-flex items-center gap-3 mt-14 text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold border-b border-gold-400/50 pb-2 hover:text-[var(--th-heading)] hover:border-[var(--th-heading)] transition-colors duration-300"
            >
              Read Full Biography →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom transition to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[var(--th-bg)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
