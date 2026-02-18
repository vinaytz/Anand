import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-24 bg-neutral-950 flex justify-center">
      <div className="w-full max-w-2xl text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Start a Conversation</h2>
          <p className="text-gray-500 font-light">
            Inquiries for speaking, collaboration, and academic leadership.
          </p>
        </div>

        <form className="space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors text-lg font-light placeholder:text-gray-700"
              />
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Organization" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors text-lg font-light placeholder:text-gray-700"
              />
            </div>
          </div>
          
          <div className="relative group">
             <textarea 
                rows={4}
                placeholder="Nature of Inquiry" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors text-lg font-light placeholder:text-gray-700 resize-none"
             />
          </div>

          <div className="pt-8 text-center">
            <button className="px-12 py-4 border border-white/20 text-white font-sans tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-all duration-500">
              Submit Inquiry
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
