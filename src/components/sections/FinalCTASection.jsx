import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ArrowUpRight, Train, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  const { heading, subheading, routeText, tagline } = hackxpressConfig.finalCta;
  const { registrationUrl } = hackxpressConfig.eventMeta;

  return (
    <section id="cta" className="relative py-32 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">

        {/* Ambient Gold Glow Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-goldBright/15 blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-obsidian border border-goldBright/50 text-goldBright text-xs font-mono tracking-widest uppercase shadow-gold-glow animate-float-slow">
          <Train className="w-4 h-4" />
          <span>BOARDING AT EGMORE CHENNAI</span>
        </div>

        {/* Dramatic Headings */}
        <div className="space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-ivory drop-shadow-2xl">
            {heading}
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold font-display text-gold-gradient tracking-wide">
            {subheading}
          </p>
        </div>

        {/* Route Badge */}
        <div className="inline-block glass-panel px-8 py-4 rounded-2xl border border-goldBright/40 shadow-obsidian-card">
          <div className="text-xl sm:text-2xl font-black font-mono text-goldBright tracking-widest">
            {routeText}
          </div>
          <div className="text-xs font-mono text-goldChampagne/80 tracking-widest uppercase mt-1">
            {tagline}
          </div>
        </div>

        {/* Major Action CTA Button */}
        <div className="pt-6">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-glow-button inline-flex items-center justify-center space-x-3 px-12 py-6 rounded-2xl text-base sm:text-lg font-black tracking-widest uppercase shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 text-bgPrimary animate-spin" style={{ animationDuration: '6s' }} />
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-6 h-6 text-bgPrimary" />
          </a>
        </div>

      </div>
    </section>
  );
}
