'use client';

import Script from 'next/script';

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full rounded-3xl overflow-hidden"
        data-url={`${url}?hide_gdpr_banner=1&primary_color=2e9e6b`}
        style={{ minWidth: '320px', height: '580px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
