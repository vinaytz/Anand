import React from 'react';

export default function InviteSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Text/Form Side */}
          <div className="p-12 md:p-16 flex flex-col justify-center space-y-8">
             <div className="w-16 h-1 bg-gold-500 mb-4"></div>
             
             <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
               Invite Dr. Anand <br/>
               <span className="text-gray-500">for your next event.</span>
             </h2>

             <p className="text-gray-400 leading-relaxed font-light text-lg">
               Whether for a university convocation, corporate leadership summit, or youth forum, Dr. Anand brings a presence that shifts perspectives.
             </p>

             <form className="space-y-6 pt-6">
                <div>
                   <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                   <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                    <select className="w-full bg-transparent border-b border-white/10 py-4 text-gray-400 focus:outline-none focus:border-gold-500 transition-colors">
                       <option>Event Type</option>
                       <option>Keynote Speech</option>
                       <option>Workshop</option>
                       <option>Guest Lecture</option>
                    </select>
                </div>

                <div className="pt-8">
                   <button className="w-full md:w-auto px-10 py-4 bg-white text-black font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300">
                      Submit Invitation
                   </button>
                </div>
             </form>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] md:h-auto min-h-full">
             <div className="absolute inset-0 bg-[url('/gallery/5.jpeg')] bg-cover bg-center transition-all duration-1000"></div>
             <div className="absolute inset-0 bg-gradient-to-l from-rich-black/50 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
