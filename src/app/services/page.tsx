import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PACKAGES, SERVICES, FAQ } from '@/lib/content';

function PackageCard({ pkg }: { pkg: typeof PACKAGES[number] }) {
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
        pkg.highlight
          ? 'bg-[#1a2e4a] text-white shadow-2xl scale-105'
          : 'bg-white border border-gray-200 text-[#1a2e4a]'
      }`}
    >
      {pkg.highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2e9e6b] text-white text-xs font-bold px-5 py-1.5 rounded-full">
          Most Popular
        </span>
      )}
      <div className="mb-6">
        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${pkg.highlight ? 'text-[#2e9e6b]' : 'text-gray-400'}`}>
          {pkg.name}
        </p>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-5xl font-extrabold">{pkg.priceLabel}</span>
        </div>
        <p className={`text-sm ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>{pkg.duration}</p>
      </div>

      <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? 'text-white/70' : 'text-gray-500'}`}>
        {pkg.description}
      </p>

      <ul className="space-y-3 flex-1 mb-8">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle size={15} className="text-[#2e9e6b] shrink-0 mt-0.5" />
            <span className={pkg.highlight ? 'text-white/80' : 'text-gray-600'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/book"
        className={`block text-center text-sm font-bold py-3.5 rounded-full transition-all ${
          pkg.highlight
            ? 'bg-[#2e9e6b] hover:bg-[#38b27a] text-white'
            : 'bg-[#f8f9fa] hover:bg-gray-200 text-[#1a2e4a]'
        }`}
      >
        {pkg.cta}
      </Link>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-gray-100 py-6">
      <h4 className="font-semibold text-[#1a2e4a] mb-2">{q}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] pt-36 pb-20 text-center">
        <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">Services & Pricing</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Invest in Yourself</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Flexible options for every goal and budget. Start for free — scale when you're ready.
        </p>
      </section>

      {/* What I offer */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-12">What's included in every session</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-8 border border-gray-100">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-[#1a2e4a] mb-1">{s.title}</h3>
                <p className="text-[#2e9e6b] text-sm font-medium mb-4">{s.subtitle}</p>
                <ul className="space-y-2">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={13} className="text-[#2e9e6b] shrink-0" />
                      {t}
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
            <h2 className="text-4xl font-bold text-[#1a2e4a] mb-3">Choose Your Package</h2>
            <p className="text-gray-500">All packages work for both Soft Skills and English Coaching.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {PACKAGES.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a2e4a] mb-10 text-center">Frequently Asked Questions</h2>
          {FAQ.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2e4a] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Still not sure? Let's talk.</h2>
        <p className="text-white/60 mb-8">A free 30-minute call is the easiest way to find out if we're a good fit.</p>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
        >
          Book Free Call <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
