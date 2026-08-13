import React, { useState } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Layers, ChevronUp, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function DomainsSection() {
  const { heading, list } = hackxpressConfig.domains;

  // Track currently expanded domain ID (null if none expanded)
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="challenges" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 04 — CHALLENGE DOMAINS</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            CHOOSE YOUR PROBLEM DOMAIN & INNOVATE ABOARD THE TRAIN
          </p>
        </div>

        {/* Challenge Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {list.map((domain, idx) => {
            const isExpanded = expandedId === domain.id;

            return (
              <div
                key={domain.id}
                className={`glass-panel rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col justify-between relative group ${
                  isExpanded
                    ? 'border-goldBright bg-goldPrimary/15 shadow-gold-glow-lg col-span-1 sm:col-span-2 lg:col-span-2'
                    : 'border-goldPrimary/30 glass-panel-hover col-span-1'
                }`}
              >
                {/* Subtle Ambient Gold Glow Background */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-goldPrimary/10 rounded-full blur-2xl group-hover:bg-goldBright/25 transition-all duration-500 pointer-events-none" />

                {/* Main Card Header Area */}
                <div className="p-8 space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{domain.symbol}</span>
                    <span className="text-[10px] font-mono text-goldChampagne/70 px-2.5 py-1 rounded bg-obsidian border border-goldPrimary/30">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-ivory group-hover:text-goldBright transition-colors">
                    {domain.name}
                  </h3>

                  {!isExpanded && (
                    <p className="text-xs text-ivory/70 line-clamp-2 font-sans">
                      {domain.context}
                    </p>
                  )}
                </div>

                {/* Inline Expanded Context Panel */}
                {isExpanded && (
                  <div className="px-8 pb-6 pt-2 space-y-6 border-t border-goldPrimary/20 relative z-10 animate-fadeIn">
                    
                    {/* Overview Context */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono tracking-widest text-goldBright uppercase flex items-center space-x-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>DOMAIN OVERVIEW & CONTEXT</span>
                      </div>
                      <p className="text-sm text-ivory/90 font-sans leading-relaxed">
                        {domain.context}
                      </p>
                    </div>

                    {/* Possible Areas to Explore */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono tracking-wider text-goldChampagne uppercase">
                        POSSIBLE AREAS TO EXPLORE:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-ivory/80">
                        {domain.possibleAreas?.map((area, aIdx) => (
                          <div key={aIdx} className="flex items-center space-x-2 bg-obsidian/70 p-2 rounded-lg border border-goldPrimary/15">
                            <CheckCircle2 className="w-3.5 h-3.5 text-goldBright shrink-0" />
                            <span className="capitalize">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Closing Idea */}
                    <div className="p-4 rounded-xl bg-obsidian border border-goldBright/40 text-center space-y-1">
                      <div className="text-[10px] font-mono text-goldChampagne/70 uppercase tracking-widest">
                        DIRECTIONAL VISION
                      </div>
                      <div className="text-sm font-extrabold font-display text-goldBright">
                        "{domain.closingIdea}"
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-ivory/50 text-center">
                      (OFFICIAL PROBLEM STATEMENTS REVEALED ABOARD THE TRAIN DURING BOARDING)
                    </div>

                  </div>
                )}

                {/* Footer Action Bar */}
                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between z-10">
                  <button
                    onClick={() => toggleExpand(domain.id)}
                    className="w-full flex items-center justify-center text-xs font-mono text-goldBright hover:text-ivory transition-colors cursor-pointer pt-4"
                  >
                    {isExpanded ? (
                      <span className="px-3 py-1 rounded bg-goldPrimary/20 border border-goldBright/40 text-goldBright text-[10px] flex items-center space-x-1">
                        <span>CLOSE</span>
                        <X className="w-3 h-3" />
                      </span>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Layers className="w-4 h-4 text-goldBright" />
                        <span className="font-bold tracking-wider uppercase">
                          HACK TRACK / EXPLORE
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform font-bold">
                          →
                        </span>
                      </div>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
