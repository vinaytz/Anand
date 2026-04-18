import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const invitations = [
  {
    src: "/invites/singapore.jpeg",
    title: "Singapore",
    subtitle: "Public Safety & Global Health Congress, 2026",
    flag: "🇸🇬",
  },
  {
    src: "/invites/dubai-uae.jpeg",
    title: "Dubai, UAE",
    subtitle: "3rd Global Meet on Civil, Structural & Environmental Engineering, 2024",
    flag: "🇦🇪",
  },
  {
    src: "/invites/lisbon-portugal.jpeg",
    title: "Lisbon, Portugal",
    subtitle: "International Meet on Catalysis, Chemical Engineering & Technology, 2023",
    flag: "🇵🇹",
  },
  {
    src: "/invites/tashkent-uzbekistan.jpeg",
    title: "Tashkent, Uzbekistan",
    subtitle: "Keynote Speech at ICTACS-2023, Amity University Tashkent",
    flag: "🇺🇿",
  },
  {
    src: "/invites/seoul-south-korea.jpeg",
    title: "Seoul, South Korea",
    subtitle: "4th International Conference on Advanced Energy Materials & Nanotechnology, 2023",
    flag: "🇰🇷",
  },
  {
    src: "/invites/seoul-south-korea-2.jpeg",
    title: "Seoul, South Korea",
    subtitle: "AEMN-2023 — Speaker Invitation Announcement",
    flag: "🇰🇷",
  },
];

export default function EngagementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative w-full border-b border-gray-100 bg-[#f9fafb] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <h1 className="font-serif text-3xl md:text-[42px] text-(--text-dark) leading-tight tracking-tight">
            Global Engagements
          </h1>
          <p className="text-(--text-body) text-[15px] md:text-base mt-3 max-w-xl leading-relaxed">
            Invited as a keynote and guest speaker at international conferences
            and universities across the globe.
          </p>
        </div>
      </section>

      {/* Invitation Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-x-10 md:gap-y-16">
          {invitations.map((invite, i) => (
            <article key={i} className="group overflow-hidden rounded-sm border border-gray-100 bg-[#fafbfc]">
              {/* Caption — visually attached to image */}
              <div className="px-5 pt-5 pb-3 bg-white border-b border-gray-100">
                <p className="text-[11px] uppercase tracking-[0.2em] text-(--accent) font-sans font-medium mb-1">
                  {invite.flag}&ensp;{invite.title}
                </p>
                <h2 className="font-serif text-lg md:text-xl text-(--text-dark) leading-snug">
                  {invite.subtitle}
                </h2>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src={invite.src}
                  alt={`Invitation from ${invite.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full border-t border-gray-100 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-(--accent) font-sans font-medium mb-3">
            Work with Dr. Shukla
          </p>
          <h2 className="font-serif text-2xl md:text-[34px] text-(--text-dark) leading-tight tracking-tight mb-4">
            Invite as a Speaker
          </h2>
          <p className="text-(--text-body) text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            Hosting a conference, seminar, or academic event? Invite Dr. Anand K
            Shukla as a keynote or guest speaker at your next engagement.
          </p>
          <Link
            href="/invite"
            className="inline-flex items-center gap-2 bg-(--btn-bg) hover:bg-(--btn-hover) text-(--btn-text) text-[14px] font-medium tracking-wide px-7 py-3 rounded-sm transition-colors duration-200"
          >
            Send an Invitation
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
