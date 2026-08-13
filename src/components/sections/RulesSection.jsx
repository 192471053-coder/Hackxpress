import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ShieldCheck, BookOpen } from 'lucide-react';

export default function RulesSection() {
  const { heading, items } = hackxpressConfig.rules;

  return (
    <section id="rules" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 11 — GOVERNANCE & PROTOCOLS</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            OFFICIAL CODE OF CONDUCT & HACKATHON REGULATIONS
          </p>
        </div>

        {/* Readable 2D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((rule, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-goldPrimary/20 space-y-3 hover:border-goldPrimary/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-goldPrimary/15 border border-goldPrimary/30 flex items-center justify-center text-goldBright font-mono text-xs font-bold shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-base font-bold font-display text-ivory">
                  {rule.title}
                </h3>
              </div>
              <p className="text-xs text-ivory/80 leading-relaxed font-sans pl-11">
                {rule.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
