'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { COACH } from '@/lib/content';

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/services', label: 'Pricing' },
  { href: '/#testimonials', label: 'Reviews' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-[#1a2e4a]' : 'text-white'
            }`}
          >
            {COACH.name}
            <span className="text-[#2e9e6b]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#2e9e6b] ${
                scrolled ? 'text-[#1a2e4a]' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-[#2e9e6b] hover:bg-[#38b27a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book Free Call
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-[#1a2e4a]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#1a2e4a] font-medium text-sm py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="bg-[#2e9e6b] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Book Free Call
          </Link>
        </div>
      )}
    </header>
  );
}
