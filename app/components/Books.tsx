import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const books = [
  {
    title: "The Architecture of Thought",
    subtitle: "Building Foundations for Decisive Action",
    description: "A comprehensive guide on modern leadership, exploring how silence and reflection build the foundation for decisive action. A map for clarity in a chaotic world.",
    link: "https://www.amazon.com", // Placeholder
    color: "from-neutral-800 to-neutral-900",
    accent: "text-gray-200"
  },
  {
    title: "Silent Authority",
    subtitle: "Commanding Respect Without Noise",
    description: "Master the art of non-verbal influence. Learn how presence, posture, and pause convey more power than words ever could.",
    link: "https://www.amazon.com", // Placeholder
    color: "from-stone-900 to-stone-950", 
    accent: "text-gold-400"
  },
  {
    title: "Legacy in Motion",
    subtitle: "Beyond Success to Significance",
    description: "Success is what you accomplish for yourself. Legacy is what you leave for others. A blueprint for building a life that outlasts you.",
    link: "https://www.amazon.com", // Placeholder
    color: "from-slate-900 to-slate-950",
    accent: "text-white"
  }
];

export default function Books() {
  return (
    <section className="py-24 px-6 md:px-12 bg-rich-black relative">
      <div className="max-w-7xl mx-auto">
      
        {/* Featured Section (Requested Restore) */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-b border-white/5 pb-24">
            <div className="order-2 md:order-1 relative group">
               {/* Book Visualization */}
               <div className="relative aspect-[3/4] w-2/3 mx-auto bg-neutral-800 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4">
                  <div className="absolute inset-x-4 inset-y-0 border-r border-l border-white/5 bg-[#1a1a1a] flex items-center justify-center">
                    <div className="text-center p-8 border border-white/10 h-3/4 w-3/4 flex flex-col justify-between">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Dr. Anand K Shukla</span>
                        <span className="font-serif text-3xl text-gray-200">The Architecture<br/>of Thought</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 mx-auto" />
                    </div>
                  </div>
               </div>
               
               {/* Decorative Shadow */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-black blur-xl opacity-60 transition-all duration-700 group-hover:w-2/3 group-hover:opacity-40" />
            </div>

            <div className="order-1 md:order-2 space-y-10">
              <div className="inline-flex items-center gap-2">
                 <div className="w-8 h-[1px] bg-gold-500"></div>
                 <span className="text-gold-500 uppercase tracking-widest text-xs">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Written Works</h2>
              
              <div className="space-y-6">
                <h3 className="text-2xl text-gray-200 font-medium">The Architecture of Thought</h3>
                <p className="text-gray-400 font-light leading-relaxed max-w-md">
                  A collection of essays on modern leadership, exploring how silence and reflection 
                  build the foundation for decisive action. This is not a guide to success, 
                  but a map for clarity.
                </p>
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                View on Amazon <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
        </div>

        {/* Grid Section */}
        <div className="text-center mb-20 space-y-4">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium">More Publications</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Curated Wisdom</h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8">
            {books.map((book, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                    {/* Book Cover Simulation */}
                    <div className="relative w-full aspect-[2/3] max-w-[280px] perspective-1000 mb-10">
                        <div className={`relative w-full h-full bg-gradient-to-br ${book.color} rounded-r-md shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:-rotate-y-12 group-hover:shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-r border-white/5`}>
                           {/* Spine Effect */}
                           <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/10 to-transparent z-10"></div>
                           
                           {/* Cover Content */}
                           <div className="absolute inset-4 border border-white/10 flex flex-col justify-between p-6 text-center">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Dr. A.K. Shukla</span>
                                <div>
                                    <h3 className={`font-serif text-2xl leading-none mb-2 ${book.accent}`}>{book.title}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400">{book.subtitle}</p>
                                </div>
                                <div className="flex justify-center">
                                     <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                        <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                                     </div>
                                </div>
                           </div>
                        </div>
                        {/* Shadow underneath */}
                         <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Book Details */}
                    <div className="text-center space-y-4 max-w-sm px-4">
                        <h3 className="text-xl font-serif text-white group-hover:text-gold-400 transition-colors">{book.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                            {book.description}
                        </p>
                        <div className="pt-4">
                            <a 
                                href={book.link} 
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white border-b border-gold-500/50 pb-1 hover:border-gold-500 transition-all hover:text-gold-400"
                            >
                                Get on Amazon <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
