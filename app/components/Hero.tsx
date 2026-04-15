import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gallery/stagecopy.jpeg"
        alt="Dr. Anand K Shukla on stage"
        fill
        priority
        className="object-cover object-[48%_100%]"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl text-white italic leading-tight mb-4"
            style={{ textShadow: "0px 2px 30px rgba(0,0,0,0.3)" }}>
          Commanding Respect Through Presence
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-sans mb-8"
           style={{ textShadow: "0px 1px 10px rgba(0,0,0,0.3)" }}>
          Scholar. Speaker. Thought Leader.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center justify-center min-h-14 px-10 bg-(--btn-bg) text-(--btn-text) text-[14px] uppercase tracking-widest font-sans font-semibold no-underline hover:bg-(--btn-hover) transition-colors duration-300"
        >
          Know More
        </Link>
      </div>
    </section>
  );
}
