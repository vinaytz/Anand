import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-24 bg-[var(--th-bg)] flex justify-center transition-colors duration-300">
      <div className="w-full max-w-2xl text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--th-text)]">Start a Conversation</h2>
          <p className="text-[var(--th-text-4)] font-light">
            Inquiries for speaking, collaboration, and academic leadership.
          </p>
        </div>

        <form className="space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-[var(--th-border-hover)] py-4 text-[var(--th-text)] focus:outline-none focus:border-[var(--th-text)] transition-colors text-lg font-light placeholder:text-[var(--th-text-4)]"
              />
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Organization" 
                className="w-full bg-transparent border-b border-[var(--th-border-hover)] py-4 text-[var(--th-text)] focus:outline-none focus:border-[var(--th-text)] transition-colors text-lg font-light placeholder:text-[var(--th-text-4)]"
              />
            </div>
          </div>
          
          <div className="relative group">
             <textarea 
                rows={4}
                placeholder="Nature of Inquiry" 
                className="w-full bg-transparent border-b border-[var(--th-border-hover)] py-4 text-[var(--th-text)] focus:outline-none focus:border-[var(--th-text)] transition-colors text-lg font-light placeholder:text-[var(--th-text-4)] resize-none"
             />
          </div>

          <div className="pt-8 text-center">
            <button className="px-12 py-4 border border-[var(--th-border-hover)] text-[var(--th-text)] font-sans tracking-widest text-xs uppercase hover:bg-[var(--th-text)] hover:text-[var(--th-bg)] transition-all duration-500">
              Submit Inquiry
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
