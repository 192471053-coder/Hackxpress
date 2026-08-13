import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-30 pointer-events-auto">
      <a
        href={hackxpressConfig.eventMeta.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center space-x-3 px-5 py-3.5 rounded-xl bg-obsidian/90 border border-goldBright/60 text-goldBright shadow-gold-glow-lg backdrop-blur-xl hover:border-goldBright transition-all duration-300 hover:scale-105"
        title="Register for HACKXPRESS Train Hackathon"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-goldBright opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-goldBright"></span>
        </span>
        <div className="w-8 h-8 rounded-lg bg-goldPrimary/20 border border-goldBright/40 flex items-center justify-center text-goldBright group-hover:bg-goldBright group-hover:text-bgPrimary transition-colors">
          <Zap className="w-4 h-4" />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[10px] uppercase font-mono tracking-widest text-goldChampagne/80">LIMITED SEATS</div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-ivory group-hover:text-goldBright">REGISTER NOW</div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-goldBright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
