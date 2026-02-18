"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rich-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-serif text-2xl text-white tracking-tight z-50">
          Dr. Anand K <span className="text-gold-400">Shukla</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hover:underline hover:decoration-gold-400 hover:underline-offset-8"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact"
            className="px-6 py-2 border border-gold-400/30 text-gold-400 text-sm uppercase tracking-widest hover:bg-gold-400 hover:text-black transition-all"
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
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
             {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-serif text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact"
            className="text-xl text-gold-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Invite Me
          </a>
          </div>
        )}
      </div>
    </nav>
  );
}
