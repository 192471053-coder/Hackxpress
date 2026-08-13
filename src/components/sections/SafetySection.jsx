import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SafetySection() {
  const { heading, instructions } = hackxpressConfig.safety;

  return (
    <section id="safety" className="relative py-24 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-goldDark/30 border border-goldBright/40 text-goldBright text-xs font-mono">
            <ShieldAlert className="w-4 h-4 text-goldBright" />
            <span>MANDATORY TRAIN SAFETY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-3" />
        </div>

        {/* High-Clarity Safety Checklist */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-goldBright/40 space-y-4 shadow-obsidian-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instructions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-obsidian border border-goldPrimary/25 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-goldBright shrink-0 mt-0.5" />
                <span className="text-sm font-semibold font-sans text-ivory leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-xs font-mono text-goldChampagne/70">
            SAFETY IS OUR TOP PRIORITY ABOARD HACKXPRESS. NON-COMPLIANCE WILL RESULT IN IMMEDIATE DISQUALIFICATION.
          </div>
        </div>

      </div>
    </section>
  );
}
