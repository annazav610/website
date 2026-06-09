import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COACH } from '@/lib/content';

const APPROACH = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We start with a free call to understand your goals, challenges, and what success looks like for you.',
  },
  {
    step: '02',
    title: 'Personalised Plan',
    desc: 'I build a tailored session plan — no generic exercises, everything is designed around your situation.',
  },
  {
    step: '03',
    title: 'Practice & Feedback',
    desc: 'Real-world practice, honest feedback, and continuous adjustment until the skills become second nature.',
  },
  {
    step: '04',
    title: 'Results',
    desc: 'You leave each session with something you can apply immediately — tangible, measurable progress.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative order-2 md:order-1">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/anna.png"
                alt="Anna — Coach"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-4">About Anna</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your partner in professional growth.
            </h1>
            {COACH.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 mt-6">
              {COACH.certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My approach */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">My Approach</p>
            <h2 className="text-4xl font-bold text-[#1a2e4a]">How we work together</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACH.map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="text-5xl font-black text-[#2e9e6b]/20 mb-4 leading-none">{item.step}</span>
                <h3 className="text-lg font-bold text-[#1a2e4a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">My Values</p>
          <h2 className="text-4xl font-bold text-[#1a2e4a] mb-12">What I believe in</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Personalisation', desc: 'No two clients are the same. Every session is built around your unique goals, context, and learning style.' },
              { title: 'Honesty', desc: "I give real, constructive feedback — because that's what creates real growth." },
              { title: 'Results', desc: 'Everything we do together should have a direct impact on your professional life.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100">
                <CheckCircle size={20} className="text-[#2e9e6b] mb-3" />
                <h4 className="font-bold text-[#1a2e4a] mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2e4a] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's work together</h2>
        <p className="text-white/60 mb-8">Book a free intro call and let's talk about your goals.</p>
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
