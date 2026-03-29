"use client"

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
    // Prevent background scroll when mobile menu is open
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isMobileMenuOpen]);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, always show the navbar
  const showNavbar = !isHome || isScrolled;

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
        showNavbar 
          ? 'bg-[var(--th-overlay)] backdrop-blur-xl border-b border-[var(--th-border-subtle)] py-4 translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-serif text-xl text-[var(--th-text)] tracking-tight z-50" data-cursor="pointer">
          Dr. Anand K <span className="text-[#d4af37]">Shukla</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-[12px] uppercase tracking-[0.2em] text-[var(--th-text-3)] hover:text-[var(--th-text)] transition-colors duration-500 group"
              data-cursor="pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full border border-[var(--th-border)] hover:border-[#d4af37]/40 flex items-center justify-center transition-all duration-500 group"
            aria-label="Toggle theme"
            data-cursor="pointer"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors duration-300" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--th-text-3)] group-hover:text-[#d4af37] transition-colors duration-300" />
            )}
          </button>

          <a 
            href="/#contact"
            className="px-5 py-2 border border-[var(--th-border)] text-[12px] uppercase tracking-[0.2em] text-[var(--th-text-2)] hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all duration-500 rounded-full"
            data-cursor="pointer"
          >
            Invite Me
          </a>
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="md:hidden flex items-center gap-3 z-[60]">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-[var(--th-border)] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[var(--th-text-3)]" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--th-text-3)]" />
            )}
          </button>
          <button 
            className="text-[var(--th-text)] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && typeof window !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-[var(--th-overlay-heavy)] backdrop-blur-2xl flex flex-col items-center justify-center gap-8 overflow-y-auto pointer-events-auto select-auto"
          style={{ overscrollBehavior: 'none', touchAction: 'none' }}
        >
          <button
            className="absolute top-6 right-6 text-[var(--th-text)] text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ zIndex: 100000 }}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-serif text-[var(--th-text-2)] hover:text-[var(--th-text)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ zIndex: 100000 }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-lg text-[#d4af37] mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ zIndex: 100000 }}
          >
            Invite Me
          </a>
        </div>,
        document.body
      )}
    </nav>
  );
}
