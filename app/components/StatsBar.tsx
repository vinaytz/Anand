const stats = [
    { bold: "Best Author", label: "10+ Books" },
    { bold: "International Publications", label: "100+ Global Publications" },
    // { bold: "5+", label: "Journals Published" },
  //   { bold: "5+", label: "Books & Book Chapters" },
  { bold: "Motivational Speaker", label: "& Education Leader" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-white py-10 md:py-14 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center md:divide-x md:divide-gray-300">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center px-6 md:px-10 py-4 text-center w-1/2 md:w-auto md:flex-1
                ${i < 4 ? "border-b border-gray-200 md:border-b-0" : ""}
              `}
            >
              <span className="text-(--text-dark) text-xl md:text-2xl font-bold font-sans leading-tight">
                {stat.bold}
              </span>
              <span className="text-(--text-body) text-[13px] md:text-[14px] font-sans mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
