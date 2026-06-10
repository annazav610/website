'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CheckCircle, Mail, ExternalLink, Send } from 'lucide-react';
import { COACH } from '@/lib/content';
import CalendlyEmbed from '@/components/CalendlyEmbed';

export default function BookPage() {
  const t = useTranslations('bookPage');
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#3a4858] pt-36 pb-20 text-center">
        <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-3">{t('headerLabel')}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{t('headerTitle')}</h1>
        <p className="text-white/60 max-w-xl mx-auto">{t('headerSubtitle')}</p>
      </section>

      {/* Calendly inline embed */}
      <section className="pt-4 pb-0 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#c07a92] text-sm font-semibold uppercase tracking-widest mb-3">{t('scheduleLabel')}</p>
            <h2 className="text-3xl font-bold text-[#3a4858] mb-3">{t('scheduleTitle')}</h2>
            <p className="text-gray-500">{t('scheduleSubtitle')}</p>
          </div>
          <CalendlyEmbed url={COACH.calendly} />
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-4 max-w-4xl mx-auto px-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-400 font-medium">{t('orDivider')}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <section className="py-10 bg-[#f8f4f5]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-bold text-[#3a4858] mb-6">{t('expectTitle')}</h2>
            <ul className="space-y-5 mb-10">
              {(['step1', 'step2', 'step3', 'step4'] as const).map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#c07a92] shrink-0 mt-0.5" />
                  {t(s)}
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{t('directContact')}</p>
              <a href={`mailto:${COACH.email}`} className="flex items-center gap-3 text-sm text-[#3a4858] hover:text-[#c07a92] transition-colors">
                <Mail size={16} className="text-[#c07a92]" />{COACH.email}
              </a>
              <a href={COACH.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#3a4858] hover:text-[#c07a92] transition-colors">
                <ExternalLink size={16} className="text-[#c07a92]" />LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#c07a92]/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#c07a92]" />
                </div>
                <h3 className="text-xl font-bold text-[#3a4858]">{t('successTitle')}</h3>
                <p className="text-gray-500 text-sm max-w-xs">{t('successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: 'name', type: 'text', label: t('nameLabel'), placeholder: t('namePlaceholder') },
                  { key: 'email', type: 'email', label: t('emailLabel'), placeholder: t('emailPlaceholder') },
                ].map(({ key, type, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
                    <input
                      type={type}
                      required
                      value={form[key as 'name' | 'email']}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3a4858] outline-none focus:border-[#c07a92] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{t('interestLabel')}</label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3a4858] outline-none focus:border-[#c07a92] transition-colors bg-white"
                  >
                    <option value="">{t('interestPlaceholder')}</option>
                    <option value="soft_skills">{t('optSoftSkills')}</option>
                    <option value="english">{t('optEnglish')}</option>
                    <option value="both">{t('optBoth')}</option>
                    <option value="corporate">{t('optCorporate')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{t('messageLabel')}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3a4858] outline-none focus:border-[#c07a92] transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#c07a92] hover:bg-[#d494aa] text-white font-bold py-3.5 rounded-full transition-all hover:scale-[1.02]">
                  {t('submit')} <Send size={16} />
                </button>
                <p className="text-xs text-gray-400 text-center">{t('disclaimer')}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
