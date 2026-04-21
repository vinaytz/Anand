import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    image: "/gallery/stage2.jpeg",
    objectPosition: "center top",
    tag: "Session 01",
    heading: "MOTIVATIONAL & CAREER GROWTH",
    text: "Dr. Anand K Shukla has spent over two decades igniting ambition in students and professionals. His sessions on purpose, resilience, and career strategy have transformed thousands of lives — equipping audiences with the clarity and drive to turn potential into achievement.",
    cta: "INVITE FOR THIS SESSION",
    href: "/invite",
    external: false,
  },
  {
    image: "/education.jpeg",
    objectPosition: "center top",
    heading: "TECH SESSIONS",
    text: "A senior IEEE member and published researcher, Dr. Shukla delivers immersive sessions on Artificial Intelligence, Machine Learning, Python, Java, and emerging technologies. His 100+ YouTube lectures reflect the same depth and accessibility he brings to live audiences worldwide.",
    cta: "WATCH TECH LECTURES",
    href: "https://www.youtube.com/@ProfAKSClasses/videos",
    external: true,
  },
  {
    image: "/spritual.jpeg",
    objectPosition: "center top",
    tag: "Session 03",
    heading: "SPIRITUALITY",
    text: "Beyond academia, Dr. Shukla guides audiences inward — exploring the intersection of purpose, inner peace, and professional fulfilment. His sessions draw from timeless wisdom and lived experience to awaken clarity, stillness, and a deeper sense of direction in a fast-paced world.",
    cta: "INVITE FOR THIS SESSION",
    href: "/invite",
    external: false,
  },
];

export default function SpeakerTopics() {
  return (
    <section className="w-full bg-[#ebf5ff] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-(--accent) font-sans font-medium mb-10 md:mb-14">
          What Dr. Anand Speaks About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10">
          {topics.map((topic) => {
            const card = (
              <div className="group flex flex-col bg-[#ebf5ff] h-full cursor-pointer">
                {/* Image */}
                <div className="relative w-full aspect-3/4 overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: topic.objectPosition }}
                  />
                </div>

                {/* Text block */}
                <div className="flex flex-col items-center text-center px-6 pt-7 pb-8 flex-1 bg-white">
                  <h3 className="font-sans font-semibold text-[13px] uppercase tracking-[0.18em] text-(--text-dark) mb-4">
                    {topic.heading}
                  </h3>
                  <p className="text-(--text-body) text-[14px] leading-relaxed font-sans mb-7 max-w-xs">
                    {topic.text}
                  </p>
                  <span className="mt-auto inline-block border border-(--text-dark) text-(--text-dark) text-[11px] uppercase tracking-[0.18em] font-sans font-semibold px-5 py-2.5 transition-all duration-200 group-hover:bg-(--text-dark) group-hover:text-white">
                    {topic.cta}
                  </span>
                </div>
              </div>
            );

            if (topic.external) {
              return (
                <a
                  key={topic.tag}
                  href={topic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {card}
                </a>
              );
            }
            return (
              <Link key={topic.tag} href={topic.href} className="no-underline">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
