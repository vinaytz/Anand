"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "VIDEOS", href: "https://www.youtube.com/@SandeepSeminars/videos", external: true },
  { label: "INVITE", href: "/invite" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_6px_0px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/gallery/semiMain.png"
            alt="Dr. Anand K Shukla"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-serif text-[22px] text-[var(--text-dark)] tracking-tight">
            Dr. Anand K Shukla
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = !link.external && pathname === link.href;
            const baseClass =
              "text-[14px] uppercase tracking-[0.214em] font-sans transition-colors duration-200 pb-1";
            const activeClass = isActive
              ? "text-[var(--text-dark)] border-b border-[var(--accent)]"
              : "text-[var(--text-link)] hover:text-[var(--text-link-hover)] border-b border-transparent";

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClass} ${activeClass}`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${baseClass} ${activeClass}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] bg-[var(--text-dark)] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-[var(--text-dark)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-[var(--text-dark)] transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] uppercase tracking-[0.214em] font-sans text-[var(--text-link)] py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] uppercase tracking-[0.214em] font-sans py-2 ${
                    isActive ? "text-[var(--text-dark)]" : "text-[var(--text-link)]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
