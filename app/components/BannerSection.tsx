import Image from "next/image";

interface BannerSectionProps {
  src: string;
  alt: string;
  position?: string;
}

export default function BannerSection({ src, alt, position = "center center" }: BannerSectionProps) {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </section>
  );
}
