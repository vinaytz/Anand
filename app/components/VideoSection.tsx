export default function VideoSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full" style={{ paddingBottom: "56.25%", maxHeight: "620px" }}>
          <iframe
            src="https://www.youtube.com/embed/hPFN4UDgMZ4?rel=0&showinfo=0&controls=1"
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
