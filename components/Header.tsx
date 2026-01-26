'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/gallery', label: 'gallery' },
    { href: '/biography', label: 'biography' },
    { href: '/exhibitions', label: 'exhibitions' },
    { href: '/publications', label: 'publications' },
  ];

  return (
    <header className="fixed z-50 top-2.5 md:top-7.5 w-full px-4 md:px-10">
      <nav className="backdrop-blur-lg flex items-center justify-between container mx-auto py-3.5 px-6 bg-black/50 rounded-full font-medium">
        {/* Logo */}
        <div className="flex justify-between items-center shrink-0">
          <Link href="/" className="text-lg md:text-xl text-white font-semibold tracking-wide">
            arinze stanley
            
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="capitalize text-base text-white transition-colors hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle & Contact Button Container */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center transition duration-700 ease-in-out"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>

          {/* Contact Button */}
          <Link href="/contact" className="hidden lg:block shrink-0">
            <button className="text-base text-primary-500 border-2 border-primary-500 px-5 py-1 rounded-full transition-colors hover:text-primary-600 hover:border-primary-600 flex items-center gap-2 font-medium">
              Contact
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-3 backdrop-blur-lg bg-black/50 rounded-3xl py-4 px-6 border border-white/10">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="capitalize text-base text-white py-2.5 border-b border-gray-700 last:border-b-0 transition-colors hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="capitalize text-base text-orange-500 py-2.5 mt-2 font-medium transition-colors hover:text-orange-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
