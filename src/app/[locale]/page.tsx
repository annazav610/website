import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react';
import { COACH } from '@/lib/content';

function Hero() {
  const t = useTranslations('hero');
  const tp = useTranslations('pricing');
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2e4a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e4a] via-[#243d5e] to-[#1a2e4a]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2e9e6b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Text */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e9e6b] animate-pulse" />
              {t('badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              {t('tagline1')}
              <span className="block text-[#2e9e6b]">{t('tagline2')}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {t('hiPrefix')} <strong className="text-white">{COACH.name}</strong> — {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-[#2e9e6b]/30">
                {t('ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all">
                {t('ctaSecondary')}
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                {'★★★★★'.split('').map((s, i) => <span key={i} className="text-[#f59e0b]">{s}</span>)}
                {t('stat1')}
              </span>
              <span>{t('stat2')}</span>
              <span>{t('stat3')}</span>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#2e9e6b]/40 to-transparent blur-md" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image src="/anna.png" alt="Anna — Coach" fill className="object-cover object-top" priority />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{t('certBadge')}</p>
                  <p className="text-sm font-bold text-[#1a2e4a]">{t('certLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations('services');
  const services = [
    { id: 'softSkills', icon: '🧠', color: 'navy' },
    { id: 'english', icon: '🌍', color: 'green' },
  ] as const;

  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4">{t('title')}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ id, icon, color }) => (
            <div key={id} className={`rounded-3xl p-10 transition-all hover:-translate-y-1 hover:shadow-xl ${color === 'navy' ? 'bg-[#1a2e4a] text-white' : 'bg-white border-2 border-[#2e9e6b]/20'}`}>
              <span className="text-4xl mb-5 block">{icon}</span>
              <h3 className="text-2xl font-bold mb-2">{t(`${id}.title`)}</h3>
              <p className="text-sm mb-4 font-medium text-[#2e9e6b]">{t(`${id}.subtitle`)}</p>
              <p className={`text-sm leading-relaxed mb-7 ${color === 'navy' ? 'text-white/70' : 'text-gray-500'}`}>{t(`${id}.description`)}</p>
              <ul className="space-y-2.5 mb-8">
                {(t.raw(`${id}.topics`) as string[]).map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={15} className="text-[#2e9e6b] shrink-0" />
                    <span className={color === 'navy' ? 'text-white/80' : 'text-gray-700'}>{topic}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${color === 'navy' ? 'text-[#2e9e6b] hover:text-[#38b27a]' : 'text-[#1a2e4a] hover:text-[#2e9e6b]'}`}>
                {t(`${id}.cta`)} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations('about');
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/anna.png" alt="Anna" fill className="object-cover object-top" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="text-xs text-gray-400">Certified by</p>
              <p className="text-sm font-bold text-[#1a2e4a]">ICF · Cambridge</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">{t('label')}</p>
          <h2 className="text-4xl font-bold text-[#1a2e4a] mb-6 leading-tight">
            {t('title')}<br /><span className="text-gray-400 font-normal">{t('subtitle')}</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">{t('bio1')}</p>
          <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">{t('bio2')}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {COACH.certifications.map((c) => (
              <span key={c} className="bg-[#f8f9fa] border border-gray-200 text-[#1a2e4a] text-xs font-medium px-3 py-1.5 rounded-full">{c}</span>
            ))}
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-[#1a2e4a] font-semibold text-sm hover:text-[#2e9e6b] transition-colors">
            {t('readMore')} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingTeaser() {
  const t = useTranslations('pricing');
  const packages = [
    { id: 'trial', highlight: false },
    { id: 'journey', highlight: true },
  ] as const;
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">{t('label')}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4">{t('title')}</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-14">{t('subtitle')}</p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {packages.map(({ id, highlight }) => (
            <div key={id} className={`relative rounded-3xl p-8 text-left ${highlight ? 'bg-[#1a2e4a] text-white' : 'bg-white border border-gray-200'}`}>
              {highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2e9e6b] text-white text-xs font-bold px-4 py-1 rounded-full">{t('mostPopular')}</span>}
              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${highlight ? 'text-[#2e9e6b]' : 'text-gray-400'}`}>{t(`${id}.name`)}</p>
              <p className="text-4xl font-extrabold mb-1">{t(`${id}.priceLabel`)}</p>
              <p className={`text-sm mb-5 ${highlight ? 'text-white/60' : 'text-gray-400'}`}>{t(`${id}.duration`)}</p>
              <ul className="space-y-2 mb-8">
                {(t.raw(`${id}.features`) as string[]).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={14} className="text-[#2e9e6b] shrink-0 mt-0.5" />
                    <span className={highlight ? 'text-white/80' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/book" className={`block text-center text-sm font-semibold py-3 rounded-full transition-all ${highlight ? 'bg-[#2e9e6b] hover:bg-[#38b27a] text-white' : 'bg-[#f8f9fa] hover:bg-gray-200 text-[#1a2e4a]'}`}>
                {t(`${id}.cta`)}
              </Link>
            </div>
          ))}
        </div>
        <Link href="/services" className="text-sm text-[#2e9e6b] font-semibold hover:underline">{t('seeAll')}</Link>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const items = ['t1', 't2', 't3'] as const;
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a]">{t('title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((key) => (
            <div key={key} className="bg-[#f8f9fa] rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t(`${key}.text`)}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#1a2e4a] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t(`${key}.name`).charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e4a]">{t(`${key}.name`)}</p>
                  <p className="text-xs text-gray-400">{t(`${key}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('cta');
  return (
    <section className="py-24 bg-[#1a2e4a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e9e6b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{t('title')}</h2>
        <p className="text-white/60 text-lg mb-10">{t('subtitle')}</p>
        <Link href="/book" className="inline-flex items-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-[#2e9e6b]/30">
          {t('button')} <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PricingTeaser />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
