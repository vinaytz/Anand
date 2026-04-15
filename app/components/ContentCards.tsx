import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "/gallery/stage_speaking1.jpeg",
    heading: "SPEAKING",
    text: "50+ keynotes across 4 continents — TEDx, IIT Delhi, IIM Ahmedabad, and global leadership forums.",
    cta: "Watch Talks",
    href: "#",
    external: true,
  },
  {
    image: "/gallery/4.jpeg",
    heading: "ABOUT",
    text: "An educator, author, and thought leader who has impacted 100K+ lives through purpose and resilience.",
    cta: "Learn More",
    href: "/about",
    external: false,
  },
  {
    image: "/gallery/stage_speaking2.jpeg",
    heading: "INVITE",
    text: "Invite Dr. Anand K Shukla for a keynote, workshop, or guest lecture at your organisation.",
    cta: "Invite Now",
    href: "/invite",
    external: false,
  },
];

export default function ContentCards() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => {
            const inner = (
              <div key={card.heading} className="group cursor-pointer">
                {/* Image with overlay label */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-[13px] uppercase tracking-[0.2em] font-sans font-semibold mb-1">
                      {card.heading}
                    </h3>
                    <p className="text-white/80 text-[14px] leading-relaxed font-sans line-clamp-2">
                      {card.text}
                    </p>
                  </div>
                </div>
                {/* CTA below image */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.15em] font-sans font-semibold text-(--text-link) group-hover:text-(--accent) transition-colors duration-300">
                    {card.cta}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            );

            if (card.external) {
              return (
                <a key={card.heading} href={card.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                  {inner}
                </a>
              );
            }
            return (
              <Link key={card.heading} href={card.href} className="no-underline">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
