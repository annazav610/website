import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COACH } from '@/lib/content';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

  const steps = ['s1', 's2', 's3', 's4'] as const;
  const values = ['v1', 'v2', 'v3'] as const;

  return (
    <>
      <section className="bg-[#3a4858] pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/anna.png" alt="Anna — Coach" fill className="object-cover object-top" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-4">{t('headerLabel')}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{t('headerTitle')}</h1>
            <p className="text-white/60 leading-relaxed mb-4">{t('bio1')}</p>
            <p className="text-white/60 leading-relaxed mb-6">{t('bio2')}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {COACH.certifications.map((c) => (
                <span key={c} className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-3">{t('approachLabel')}</p>
            <h2 className="text-4xl font-bold text-[#3a4858]">{t('approachTitle')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s}>
                <span className="text-5xl font-black text-[#c07a92]/20 mb-4 block leading-none">{t(`${s}step`)}</span>
                <h3 className="text-lg font-bold text-[#3a4858] mb-2">{t(`${s}title`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`${s}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f4f5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-3">{t('valuesLabel')}</p>
          <h2 className="text-4xl font-bold text-[#3a4858] mb-12">{t('valuesTitle')}</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {values.map((v) => (
              <div key={v} className="bg-white rounded-2xl p-7 border border-gray-100">
                <CheckCircle size={20} className="text-[#c07a92] mb-3" />
                <h4 className="font-bold text-[#3a4858] mb-2">{t(`${v}title`)}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`${v}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#3a4858] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
        <p className="text-white/60 mb-8">{t('ctaSubtitle')}</p>
        <Link href="/book" className="inline-flex items-center gap-2 bg-[#c07a92] hover:bg-[#d494aa] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
          {t('ctaButton')} <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
