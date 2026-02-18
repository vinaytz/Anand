import React from 'react';

const images = [
  {
    url: "/gallery/new.jpeg",
    label: "Keynote Excellence",
    desc: "Commanding the stage at International Summits."
  },
  {
    url: "/gallery/3.jpeg",
    label: "Strategic Leadership",
    desc: "Guiding boards and academic councils."
  },
  {
    url: "/gallery/4_new.jpeg",
    label: "Mentorship",
    desc: "Connecting deeply with the next generation."
  }
];

export default function VisualJourney() {
  return (
    <section className="py-0 bg-rich-black overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[80vh]">
          
          {images.map((img, idx) => (
            <div key={idx} className="group relative h-[60vh] md:h-[80vh] overflow-hidden border-r border-white/5 last:border-r-0">
              
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${img.url})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-gold-500 mb-6 w-0 group-hover:w-12 transition-all duration-700 ease-out" />
                
                <p className="text-gold-400 text-xs uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {img.label}
                </p>
                
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  {img.desc}
                </h3>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all opacity-0 group-hover:opacity-100 delay-200">
                  View Gallery
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      {/* Centered Text Overlay for Context */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-center mix-blend-overlay">
         <h2 className="text-[10vw] font-serif font-black text-white/10 uppercase tracking-tighter leading-none">
            World<br/>Class
         </h2>
      </div>
    </section>
  );
}
