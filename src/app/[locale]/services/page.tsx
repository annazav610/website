import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const tp = useTranslations('pricing');
  const ts = useTranslations('services');

  const packageIds = ['trial', 'single', 'journey', 'intensive'] as const;
  const serviceIds = ['softSkills', 'english'] as const;
  const faqIds = ['faq1', 'faq2', 'faq3', 'faq4'] as const;

  return (
    <>
      <section className="bg-[#3a4858] pt-36 pb-20 text-center">
        <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-3">{t('headerLabel')}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{t('headerTitle')}</h1>
        <p className="text-white/60 max-w-xl mx-auto">{t('headerSubtitle')}</p>
      </section>

      {/* What's included */}
      <section className="py-20 bg-[#f8f4f5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3a4858] text-center mb-12">{t('includedTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceIds.map((id) => (
              <div key={id} className="bg-white rounded-2xl p-8 border border-gray-100">
                <span className="text-3xl mb-4 block">{id === 'softSkills' ? '🧠' : '🌍'}</span>
                <h3 className="text-xl font-bold text-[#3a4858] mb-1">{ts(`${id}.title`)}</h3>
                <p className="text-[#c07a92] text-sm font-medium mb-4">{ts(`${id}.subtitle`)}</p>
                <ul className="space-y-2">
                  {(ts.raw(`${id}.topics`) as string[]).map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={13} className="text-[#c07a92] shrink-0" />{topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#3a4858] mb-3">{t('packagesTitle')}</h2>
            <p className="text-gray-500">{t('packagesSubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {packageIds.map((id) => {
              const isHighlight = id === 'journey';
              return (
                <div key={id} className={`relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${isHighlight ? 'bg-[#3a4858] text-white shadow-2xl scale-105' : 'bg-white border border-gray-200'}`}>
                  {isHighlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c07a92] text-white text-xs font-bold px-5 py-1.5 rounded-full">{tp('mostPopular')}</span>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isHighlight ? 'text-[#c07a92]' : 'text-gray-400'}`}>{tp(`${id}.name`)}</p>
                  <p className="text-5xl font-extrabold mb-1">{tp(`${id}.priceLabel`)}</p>
                  <p className={`text-sm mb-5 ${isHighlight ? 'text-white/60' : 'text-gray-400'}`}>{tp(`${id}.duration`)}</p>
                  <p className={`text-sm leading-relaxed mb-6 ${isHighlight ? 'text-white/70' : 'text-gray-500'}`}>{tp(`${id}.description`)}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {(tp.raw(`${id}.features`) as string[]).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={15} className="text-[#c07a92] shrink-0 mt-0.5" />
                        <span className={isHighlight ? 'text-white/80' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book" className={`block text-center text-sm font-bold py-3.5 rounded-full transition-all ${isHighlight ? 'bg-[#c07a92] hover:bg-[#d494aa] text-white' : 'bg-[#f8f4f5] hover:bg-gray-200 text-[#3a4858]'}`}>
                    {tp(`${id}.cta`)}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f8f4f5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3a4858] mb-10 text-center">{t('faqTitle')}</h2>
          {faqIds.map((id) => (
            <div key={id} className="border-b border-gray-100 py-6">
              <h4 className="font-semibold text-[#3a4858] mb-2">{t(`${id}q`)}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{t(`${id}a`)}</p>
            </div>
          ))}
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
