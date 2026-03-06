"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Author', href: '/author' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Videos', href: '/videos' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.04] py-4 translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-serif text-xl text-white tracking-tight z-50" data-cursor="pointer">
          Dr. Anand K <span className="text-[#d4af37]">Shukla</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-[12px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-500 group"
              data-cursor="pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          <a 
            href="/#contact"
            className="px-5 py-2 border border-white/10 text-[12px] uppercase tracking-[0.2em] text-white/60 hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all duration-500 rounded-full"
            data-cursor="pointer"
          >
            Invite Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#030303] z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="text-3xl font-serif text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-[#d4af37]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Invite Me
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
