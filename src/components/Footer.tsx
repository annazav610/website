'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Mail, ExternalLink } from 'lucide-react';
import { COACH } from '@/lib/content';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-[#3a4858] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-2xl font-bold mb-3">
            {COACH.name}<span className="text-[#c07a92]">.</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            {t('navTitle')}
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-white/70 hover:text-[#c07a92] transition-colors">{t('home')}</Link></li>
            <li><Link href="/services" className="text-white/70 hover:text-[#c07a92] transition-colors">{t('services')}</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-[#c07a92] transition-colors">{t('aboutAnna')}</Link></li>
            <li><Link href="/book" className="text-white/70 hover:text-[#c07a92] transition-colors">{t('bookSession')}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            {t('contactTitle')}
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${COACH.email}`} className="flex items-center gap-2 text-white/70 hover:text-[#c07a92] transition-colors">
                <Mail size={15} />{COACH.email}
              </a>
            </li>
            <li>
              <a href={COACH.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-[#c07a92] transition-colors">
                <ExternalLink size={15} />LinkedIn
              </a>
            </li>
          </ul>
          <Link href="/book" className="inline-block mt-6 bg-[#c07a92] hover:bg-[#d494aa] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            {tNav('cta')}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} {COACH.fullName} · {t('copyright')}
      </div>
    </footer>
  );
}
