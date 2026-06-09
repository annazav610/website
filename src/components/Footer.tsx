import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';
import { COACH } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e4a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-2xl font-bold mb-3">
            {COACH.name}<span className="text-[#2e9e6b]">.</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {COACH.shortBio}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/services', 'Services & Pricing'],
              ['/about', 'About Anya'],
              ['/book', 'Book a Session'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-[#2e9e6b] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${COACH.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#2e9e6b] transition-colors"
              >
                <Mail size={15} />
                {COACH.email}
              </a>
            </li>
            <li>
              <a
                href={COACH.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#2e9e6b] transition-colors"
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>
            </li>
          </ul>
          <Link
            href="/book"
            className="inline-block mt-6 bg-[#2e9e6b] hover:bg-[#38b27a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book Free Call
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} {COACH.fullName} · All rights reserved
      </div>
    </footer>
  );
}
