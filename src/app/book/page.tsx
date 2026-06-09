'use client';

import { useState } from 'react';
import { CheckCircle, Mail, ExternalLink, Send } from 'lucide-react';
import { COACH } from '@/lib/content';

type FormData = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

export default function BookPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API route / Supabase / Resend / Formspree
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2e4a] pt-36 pb-20 text-center">
        <p className="text-[#2e9e6b] text-sm font-semibold uppercase tracking-widest mb-3">Book a Session</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Let's Get Started
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Fill in the form and I'll reach out within 24 hours to schedule your free intro call.
        </p>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a2e4a] mb-6">What to expect</h2>
            <ul className="space-y-5 mb-10">
              {[
                "I'll reach out within 24 hours to confirm a time",
                'We meet for a free 30-minute intro call via Zoom',
                "I'll listen to your goals and answer all your questions",
                "If it's a good fit, we plan your first session together",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#2e9e6b] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Prefer to reach out directly?
              </p>
              <a
                href={`mailto:${COACH.email}`}
                className="flex items-center gap-3 text-sm text-[#1a2e4a] hover:text-[#2e9e6b] transition-colors"
              >
                <Mail size={16} className="text-[#2e9e6b]" />
                {COACH.email}
              </a>
              <a
                href={COACH.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#1a2e4a] hover:text-[#2e9e6b] transition-colors"
              >
                <ExternalLink size={16} className="text-[#2e9e6b]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#2e9e6b]/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#2e9e6b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e4a]">Message sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks {form.name}! I'll be in touch within 24 hours to schedule your free call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2e4a] outline-none focus:border-[#2e9e6b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2e4a] outline-none focus:border-[#2e9e6b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    I'm interested in
                  </label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2e4a] outline-none focus:border-[#2e9e6b] transition-colors bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="soft_skills">Soft Skills Coaching</option>
                    <option value="english">English Coaching</option>
                    <option value="both">Both</option>
                    <option value="corporate">Corporate / Team Programme</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Tell me about your goal (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to work on?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2e4a] outline-none focus:border-[#2e9e6b] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2e9e6b] hover:bg-[#38b27a] text-white font-bold py-3.5 rounded-full transition-all hover:scale-[1.02]"
                >
                  Send Message
                  <Send size={16} />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  I respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
