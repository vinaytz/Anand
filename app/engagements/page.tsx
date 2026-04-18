import Image from "next/image";
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

      {/* Hero */}
      <section className="relative w-full bg-linear-to-br from-[#f8fbff] to-[#ebf5ff] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[13px] uppercase tracking-[0.25em] text-(--accent) font-sans font-medium mb-4">
            International Recognition
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-(--text-dark) leading-tight mb-5">
            Global Engagements
          </h1>
          <p className="text-(--text-body) text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Invited as a keynote and guest speaker at prestigious international
            conferences and universities across the globe.
          </p>
        </div>
      </section>

      {/* Invitation Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {invitations.map((invite, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/5 bg-[#f8fbff] overflow-hidden">
                <Image
                  src={invite.src}
                  alt={`Invitation from ${invite.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>

              {/* Caption */}
              <div className="px-6 py-5 border-t border-gray-50">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {invite.flag}
                  </span>
                  <h2 className="font-serif text-xl md:text-[22px] text-(--text-dark) leading-snug">
                    {invite.title}
                  </h2>
                </div>
                <p className="text-sm text-(--text-light) leading-relaxed pl-10">
                  {invite.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
