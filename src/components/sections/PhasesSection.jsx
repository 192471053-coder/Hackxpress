import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Train, Flag, Terminal, Code2, Presentation, Trophy } from 'lucide-react';

const phaseIcons = [Train, Flag, Terminal, Code2, Presentation, Trophy];

export default function PhasesSection() {
  const { heading, list } = hackxpressConfig.phases;

  return (
    <section id="phases" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 05 — EVENT PHASES</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            THE TRAIN ROUTE TIMELINE
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            PROGRESSIVE JOURNEY FROM REGISTRATION TO THE PONDICHERRY GRAND FINALE
          </p>
        </div>

        {/* Physical Train Journey Phases Timeline */}
        <div className="relative">
          {/* Vertical Connecting Track Line for Mobile & Tablet */}
          <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-1 bg-obsidian border-x border-goldPrimary/30 -translate-x-1/2" />

          <div className="space-y-12 relative z-10">
            {list.map((phase, idx) => {
              const IconComp = phaseIcons[idx] || Train;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
                    <div className="glass-panel p-8 rounded-2xl border border-goldPrimary/30 glass-panel-hover space-y-4 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black font-mono text-goldBright">
                          {phase.number}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-goldChampagne px-2.5 py-1 rounded bg-goldPrimary/10 border border-goldPrimary/30">
                          PHASE 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-display text-ivory tracking-wide">
                        {phase.title}
                      </h3>

                      <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Train Track Node */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-obsidian border-2 border-goldBright flex items-center justify-center text-goldBright shadow-gold-glow z-20">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
