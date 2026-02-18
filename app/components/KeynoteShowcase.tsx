import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const keynotes = [
  {
    title: "The Resilient Mind",
    subtitle: "Navigating Uncertainty with Clarity",
    description: "In an era of rapid change, resilience is not just about bouncing back—it’s about moving forward with intent. This talk explores the neuroscience of stress and the philosophy of stoicism to equip leaders with an unshakeable core.",
    audience: "Corporate Leaders, C-Suite, Managers",
    takeaways: [
        "Decision making under pressure",
        "The architecture of mental silence",
        "Transforming anxiety into action"
    ],
    gradient: "from-blue-900/40 via-purple-900/40 to-black"
  },
  {
    title: "Leadership Beyond Title",
    subtitle: "Influence Without Authority",
    description: "True leadership isn't assigned; it's assumed. Discover how to command respect through presence, empathy, and strategic silence. A masterclass in non-verbal authority and emotional intelligence.",
    audience: "Teams, Emerging Leaders, Students",
    takeaways: [
        "Building trust instantly",
        "The power of the pause",
        "Leading from the middle"
    ],
    gradient: "from-gold-900/20 via-orange-900/20 to-black"
  },
  {
    title: "The Future of Education",
    subtitle: "Bridging Tradition and Technology",
    description: "A provocative look at how AI and ancient wisdom must coexist. Dr. Shukla argues that in the age of information, wisdom is the only currency that matters.",
    audience: "Educators, Policymakers, Universities",
    takeaways: [
        "Human-centric teaching",
        "Curriculum for the soul",
        "Preparing students for the unknown"
    ],
    gradient: "from-emerald-900/30 via-teal-900/30 to-black"
  }
];

export default function KeynoteShowcase() {
  return (
    <section className="py-32 px-6 md:px-12 bg-rich-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium">Signature Talks</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl">
                Masterclasses in <span className="text-gold-400 italic">Human Potential</span>
            </h2>
        </div>

        <div className="space-y-24">
            {keynotes.map((talk, index) => (
                <div key={index} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
                    {/* Background Glow */}
                    <div className={`absolute -inset-x-0 top-0 h-[500px] bg-gradient-radial ${talk.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-3xl -z-10`} />

                    {/* Content Left */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <span className="text-sm font-mono text-gray-500 mb-2 block">0{index + 1}</span>
                            <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{talk.title}</h3>
                            <p className="text-xl text-gold-500/80 font-medium italic">{talk.subtitle}</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
                            {talk.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-gray-300">
                                Best for: {talk.audience}
                             </div>
                        </div>

                        <button className="flex items-center gap-3 text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors group/btn">
                            Book this Talk 
                            <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>

                    {/* Content Right (Takeaways) */}
                    <div className="lg:col-span-5 relative">
                        <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-sm relative z-10 group-hover:border-gold-500/30 transition-colors duration-500">
                           <h4 className="text-white font-serif text-xl mb-6">Key Takeaways</h4>
                           <ul className="space-y-4">
                               {talk.takeaways.map((item, i) => (
                                   <li key={i} className="flex items-start gap-4">
                                       <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                       <span className="text-gray-400 font-light">{item}</span>
                                   </li>
                               ))}
                           </ul>
                        </div>
                        {/* Decorative Box Shadow */}
                        <div className="absolute top-4 left-4 w-full h-full border border-white/5 -z-0" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
