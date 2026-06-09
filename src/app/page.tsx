import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react';
import { COACH, SERVICES, TESTIMONIALS, PACKAGES } from '@/lib/content';

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2e4a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e4a] via-[#243d5e] to-[#1a2e4a]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2e9e6b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* ── Left: text ── */}
          <div className="flex-1">
            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e9e6b] animate-pulse" />
              Soft Skills · English Coaching · Online & Flexible
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              {COACH.tagline.split('—')[0]}
              <span className="block text-[#2e9e6b]">
                — {COACH.tagline.split('—')[1]}
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Hi, I'm <strong className="text-white">{COACH.name}</strong> — a certified coach helping professionals
              communicate with confidence, lead with impact, and thrive in English.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-[#2e9e6b]/30"
              >
                Book Free Intro Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all backdrop-blur-sm"
              >
                View Services & Pricing
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-wrap gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="flex">{'★★★★★'.split('').map((s, i) => <span key={i} className="text-[#f59e0b]">{s}</span>)}</span>
                5.0 rating
              </span>
              <span>100+ professionals coached</span>
              <span>ICF · CELTA Certified</span>
            </div>
          </div>

          {/* ── Right: Anna's photo ── */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#2e9e6b]/40 to-transparent blur-md" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/anna.png"
                  alt="Anna — Soft Skills & English Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Certified</p>
                  <p className="text-sm font-bold text-[#1a2e4a]">ICF · Cambridge</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

/* ─── Services Overview ─────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">
            What I offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4">
            Two Areas. One Coach.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether you want to grow professionally or master English, I've got you covered — with personalised sessions built around your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-10 transition-all hover:-translate-y-1 hover:shadow-xl ${
                service.color === 'navy'
                  ? 'bg-[#1a2e4a] text-white'
                  : 'bg-white border-2 border-[#2e9e6b]/20 text-[#1a2e4a]'
              }`}
            >
              <span className="text-4xl mb-5 block">{service.icon}</span>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className={`text-sm mb-4 font-medium ${service.color === 'navy' ? 'text-[#2e9e6b]' : 'text-[#2e9e6b]'}`}>
                {service.subtitle}
              </p>
              <p className={`text-sm leading-relaxed mb-7 ${service.color === 'navy' ? 'text-white/70' : 'text-gray-500'}`}>
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {service.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={15} className="text-[#2e9e6b] shrink-0" />
                    <span className={service.color === 'navy' ? 'text-white/80' : 'text-gray-700'}>
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  service.color === 'navy'
                    ? 'text-[#2e9e6b] hover:text-[#38b27a]'
                    : 'text-[#1a2e4a] hover:text-[#2e9e6b]'
                }`}
              >
                {service.cta} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Preview ─────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1a2e4a] to-[#243d5e] flex items-center justify-center overflow-hidden">
            <span className="text-white/20 text-9xl font-bold select-none">A</span>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="text-xs text-gray-400">Certified by</p>
              <p className="text-sm font-bold text-[#1a2e4a]">ICF · Cambridge</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">
            About me
          </p>
          <h2 className="text-4xl font-bold text-[#1a2e4a] mb-6 leading-tight">
            Hi, I'm {COACH.name} —<br />
            <span className="text-gray-400 font-normal">your partner in growth.</span>
          </h2>

          {COACH.bio.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-500 leading-relaxed mb-4 text-[15px]">
              {para}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 my-6">
            {COACH.certifications.map((cert) => (
              <span
                key={cert}
                className="bg-[#f8f9fa] border border-gray-200 text-[#1a2e4a] text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#1a2e4a] font-semibold text-sm hover:text-[#2e9e6b] transition-colors"
          >
            Read full story <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Teaser ────────────────────────────────────────────────────── */
function PricingTeaser() {
  const highlighted = PACKAGES.find((p) => p.highlight);
  const trial = PACKAGES.find((p) => p.id === 'trial');

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">
          Pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-14">
          Start with a free call. No strings attached.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {[trial, highlighted].map((pkg) => {
            if (!pkg) return null;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 text-left ${
                  pkg.highlight
                    ? 'bg-[#1a2e4a] text-white'
                    : 'bg-white border border-gray-200 text-[#1a2e4a]'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2e9e6b] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-[#2e9e6b]' : 'text-gray-400'}`}>
                  {pkg.name}
                </p>
                <p className="text-4xl font-extrabold mb-1">{pkg.priceLabel}</p>
                <p className={`text-sm mb-5 ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                  {pkg.duration}
                </p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="text-[#2e9e6b] shrink-0 mt-0.5" />
                      <span className={pkg.highlight ? 'text-white/80' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`block text-center text-sm font-semibold py-3 rounded-full transition-all ${
                    pkg.highlight
                      ? 'bg-[#2e9e6b] hover:bg-[#38b27a] text-white'
                      : 'bg-[#f8f9fa] hover:bg-gray-200 text-[#1a2e4a]'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <Link href="/services" className="text-sm text-[#2e9e6b] font-semibold hover:underline">
          See all packages →
        </Link>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e4a]">
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#f8f9fa] rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#1a2e4a] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e4a]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="py-24 bg-[#1a2e4a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e9e6b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready to take the next step?
        </h2>
        <p className="text-white/60 text-lg mb-10">
          Book a free 30-minute intro call — no pressure, no commitment. Just a conversation about where you want to go.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-[#2e9e6b]/30"
        >
          Book Free Call
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
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
