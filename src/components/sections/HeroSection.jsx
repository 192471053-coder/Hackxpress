import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ArrowUpRight, Compass, Sparkles, Train } from 'lucide-react';

export default function HeroSection() {
  const { title, subtitle, tagline, route, subTagline, registrationUrl } = hackxpressConfig.eventMeta;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
        
        {/* Anti-Gravity Floating Subtitle Badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-obsidian/80 border border-goldBright/40 text-goldChampagne text-xs font-mono tracking-widest uppercase shadow-gold-inner animate-float-slow">
          <Sparkles className="w-4 h-4 text-goldBright animate-spin" style={{ animationDuration: '8s' }} />
          <span>{subtitle}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-goldBright" />
        </div>

        {/* Cinematic Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-ivory drop-shadow-2xl">
            HACK<span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(245,197,66,0.5)]">XPRESS</span>
          </h1>
          <p className="text-lg sm:text-2xl font-bold tracking-widest text-goldChampagne font-display uppercase">
            {tagline}
          </p>
        </div>

        {/* Route Card & Sub-Tagline */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-goldPrimary/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-obsidian-card">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-goldPrimary/15 border border-goldPrimary/40 flex items-center justify-center text-goldBright">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-goldChampagne/70 uppercase tracking-widest">OFFICIAL TRAIN ROUTE</div>
                <div className="text-sm sm:text-base font-extrabold text-goldBright font-mono">{route}</div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-goldPrimary/20 text-goldBright text-xs font-mono border border-goldPrimary/40">
              BOARDING EGMORE
            </span>
          </div>

          <p className="text-xs sm:text-sm font-mono tracking-widest text-ivory/70 uppercase">
            {subTagline}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-glow-button w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wider uppercase flex items-center justify-center space-x-2"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#experience"
            className="gold-outline-button w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase flex items-center justify-center space-x-2"
          >
            <Compass className="w-5 h-5 text-goldBright" />
            <span>EXPLORE THE JOURNEY</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center space-y-2 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-goldChampagne uppercase">SCROLL TO BOARD THE TRAIN</span>
          <div className="w-5 h-9 rounded-full border-2 border-goldPrimary/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-goldBright animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}
