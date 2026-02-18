import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
       {/* Background Image/Texture */}
       <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Big Footer Message */}
        <div className="mb-20 text-center space-y-6 max-w-2xl">
           <div className="w-16 h-1 bg-gold-500 mx-auto" />
           <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
             "To lead is to serve. <br/> To speak is to heal."
           </h2>
           <p className="text-xl text-gray-400 font-light italic">
             - Dr. Anand K Shukla
           </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-20 text-center md:text-left">
           <div>
              <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light tracking-wide">
                 <li><a href="/about" className="hover:text-white transition-colors">Biography</a></li>
                 <li><a href="/speaking" className="hover:text-white transition-colors">Speaking</a></li>
                 <li><a href="/author" className="hover:text-white transition-colors">Books</a></li>
                 <li><a href="/videos" className="hover:text-white transition-colors">Media Gallery</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light tracking-wide">
                 <li><a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a></li>
                 <li><a href="https://twitter.com" className="hover:text-white transition-colors">Twitter / X</a></li>
                 <li><a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a></li>
                 <li><a href="https://youtube.com" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
           </div>

           <div className="col-span-2 text-center md:text-left">
              <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto md:mx-0">
                 Join 50,000+ readers receiving monthly insights on leadership and resilience.
              </p>
              <div className="flex bg-white/5 border border-white/10 rounded-full p-1 max-w-xs mx-auto md:mx-0 focus-within:border-gold-500 transition-colors">
                 <input type="email" placeholder="Email Address" className="bg-transparent text-white px-4 py-2 w-full text-sm focus:outline-none" />
                 <button className="bg-gold-500 text-black p-2 rounded-full hover:bg-gold-400 transition-colors">
                    <span className="sr-only">Subscribe</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                 </button>
              </div>
           </div>
        </div>

        {/* Brand & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
           <div>&copy; {new Date().getFullYear()} Dr. Anand K Shukla</div>
           <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Credits</a>
           </div>
        </div>

      </div>
    </footer>
  );
}


