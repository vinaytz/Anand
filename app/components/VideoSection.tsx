export default function VideoSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl text-(--text-dark) text-center mb-8">
          Featured Talk
        </h2>
        <div className="relative w-full overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7441835599231176704?compact=1"
            title="Dr. Anand K Shukla - Featured Talk"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
