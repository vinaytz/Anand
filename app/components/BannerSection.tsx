import Image from "next/image";

interface BannerSectionProps {
  src: string;
  alt: string;
  position?: string;
  quote?: string;
  attribution?: string;
}

export default function BannerSection({ src, alt, position = "center center", quote, attribution }: BannerSectionProps) {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-black/30" />
      {quote && (
        <div className="absolute inset-0 lg:pb-64 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white italic leading-snug mb-4"
               style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
              <span className="text-white/70 text-[13px] uppercase tracking-[0.2em] font-sans">
                — {attribution}
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
