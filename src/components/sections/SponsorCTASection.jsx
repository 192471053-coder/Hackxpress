import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Handshake } from 'lucide-react';

export default function SponsorCTASection() {
  const { contactEmail } = hackxpressConfig;

  return (
    <section id="sponsor-contact" className="relative py-16 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel p-8 rounded-2xl border border-goldPrimary/30 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-goldPrimary/20 border border-goldBright/40 flex items-center justify-center text-goldBright shrink-0">
              <Handshake className="w-6 h-6" />
            </div>
            <div className="min-w-0 space-y-1">
              <div className="text-base font-bold font-display text-ivory leading-snug">WANT TO PARTNER WITH HACKXPRESS?</div>
              <div className="text-xs font-mono text-goldChampagne leading-relaxed">Support Tamil Nadu's First Train Hackathon</div>
            </div>
          </div>
          <a
            href={`mailto:${contactEmail}?subject=HACKXPRESS%20Sponsorship%20Inquiry`}
            className="gold-outline-button px-6 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wider shrink-0 whitespace-nowrap"
            aria-label="Become a sponsor"
          >
            BECOME A SPONSOR
          </a>
        </div>
      </div>
    </section>
  );
}
