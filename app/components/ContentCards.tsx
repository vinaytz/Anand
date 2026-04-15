import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "/gallery/stage_speaking1.jpeg",
    heading: "SPEAKING",
    text: "Dr. Anand K Shukla has delivered 50+ keynotes across 4 continents, inspiring audiences at TEDx, IIT Delhi, IIM Ahmedabad, and global leadership forums.",
    cta: "Watch Talks",
    href: "https://www.youtube.com/@SandeepSeminars/videos",
    external: true,
  },
  {
    image: "/gallery/2.jpeg",
    heading: "ABOUT",
    text: "Dr. Anand K Shukla is a name among millions who struggled, failed & surged ahead in pursuit of purpose. An educator, author, and thought leader impacting 100K+ lives.",
    cta: "Learn More",
    href: "/about",
    external: false,
  },
  {
    image: "/gallery/stage_speaking2.jpeg",
    heading: "INVITE",
    text: "To invite Dr. Anand K Shukla for a keynote, workshop, or guest lecture at your organization, kindly fill the invitation form.",
    cta: "Invite Now",
    href: "/invite",
    external: false,
  },
];

export default function ContentCards() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.heading} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.heading}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl text-[var(--text-dark)] mb-3 tracking-wide">
                {card.heading}
              </h3>
              <p className="text-[var(--text-body)] text-[15px] leading-relaxed mb-4 font-sans">
                {card.text}
              </p>

              {/* CTA */}
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 bg-[var(--btn-bg)] text-[var(--btn-text)] text-[13px] uppercase tracking-[0.1em] font-sans font-semibold no-underline hover:bg-[var(--btn-hover)] transition-colors duration-300"
                >
                  {card.cta}
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center min-h-[48px] px-8 bg-[var(--btn-bg)] text-[var(--btn-text)] text-[13px] uppercase tracking-[0.1em] font-sans font-semibold no-underline hover:bg-[var(--btn-hover)] transition-colors duration-300"
                >
                  {card.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
