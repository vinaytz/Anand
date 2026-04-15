"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "VIDEOS", href: "https://www.youtube.com/@ProfAKSClasses/videos", external: true },
  { label: "INVITE", href: "/invite" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_6px_0px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 no-underline min-w-0 shrink">
          <Image
            src="/gallery/semiMain.png"
            alt="Dr. Anand K Shukla"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-serif text-[17px] sm:text-[20px] md:text-[22px] text-(--text-dark) tracking-tight leading-tight">
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
              ? "text-(--text-dark) border-b border-(--accent)"
              : "text-(--text-link) hover:text-(--text-link-hover) border-b border-transparent";

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
          className="md:hidden flex flex-col gap-1.25 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-(--text-dark) transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-1.75" : ""}`} />
          <span className={`w-6 h-0.5 bg-(--text-dark) transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-(--text-dark) transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
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
                    className="text-[14px] uppercase tracking-[0.214em] font-sans text-(--text-link) py-2"
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
                    isActive ? "text-(--text-dark)" : "text-(--text-link)"
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
