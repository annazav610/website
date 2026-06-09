'use client';

import { useState, useEffect, useTransition } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import { COACH } from '@/lib/content';

function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const switchTo = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const base = scrolled ? 'text-[#1a2e4a]' : 'text-white';
  const inactive = scrolled ? 'text-gray-300 hover:text-gray-500' : 'text-white/30 hover:text-white/60';

  return (
    <div className="flex items-center gap-1 text-xs font-bold tracking-wider">
      <button onClick={() => switchTo('en')} className={locale === 'en' ? base : inactive}>
        EN
      </button>
      <span className={`${scrolled ? 'text-gray-300' : 'text-white/20'}`}>|</span>
      <button onClick={() => switchTo('ru')} className={locale === 'ru' ? base : inactive}>
        RU
      </button>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NAV_LINKS = [
    { href: '/#services', label: t('services') },
    { href: '/#about', label: t('about') },
    { href: '/services', label: t('pricing') },
    { href: '/#testimonials', label: t('reviews') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#1a2e4a]' : 'text-white'}`}>
            {COACH.name}<span className="text-[#2e9e6b]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#2e9e6b] ${scrolled ? 'text-[#1a2e4a]' : 'text-white/90'}`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
          <Link
            href="/book"
            className="bg-[#2e9e6b] hover:bg-[#38b27a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            {t('cta')}
          </Link>
        </nav>

        {/* Mobile: language switcher + burger */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            className={`transition-colors ${scrolled ? 'text-[#1a2e4a]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            {t('cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
