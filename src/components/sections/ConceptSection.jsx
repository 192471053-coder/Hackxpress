import React, { useState } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { MapPin, Navigation } from 'lucide-react';

export default function ConceptSection() {
  const { heading, tagline, routeStations } = hackxpressConfig.concept;
  const [activeStation, setActiveStation] = useState(0);

  return (
    <section id="concept" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 03 — THE HACKXPRESS CONCEPT</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-lg sm:text-xl font-bold font-mono tracking-widest text-goldBright uppercase">
            "{tagline}"
          </p>
        </div>

        {/* Railway Route Station Bar (Interactive Track Line) */}
        <div className="relative py-8">
          {/* Main Glowing Track Bar */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 bg-obsidian border-y border-goldPrimary/30 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-1.5 bg-gold-gradient gold-neon-line -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStation / (routeStations.length - 1)) * 100}%` }}
          />

          {/* Station Markers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {routeStations.map((st, idx) => {
              const isActive = activeStation === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStation(idx)}
                  className={`glass-panel p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                    isActive
                      ? 'border-goldBright bg-goldPrimary/15 shadow-gold-glow-lg -translate-y-2'
                      : 'border-goldPrimary/20 hover:border-goldPrimary/60 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-goldChampagne/70">
                      STATION {idx + 1}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-goldBright shadow-[0_0_10px_#F5C542]' : 'bg-goldDark/50'
                      }`}
                    />
                  </div>

                  <div>
                    <div className="text-xs font-mono text-goldChampagne">{st.code}</div>
                    <div className="text-base font-extrabold font-display text-ivory tracking-wider uppercase">
                      {st.name}
                    </div>
                  </div>

                  <p className="text-[11px] text-ivory/60 font-sans line-clamp-2">
                    {st.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Station Focus Display */}
        <div className="glass-panel p-8 rounded-3xl border border-goldBright/30 max-w-4xl mx-auto shadow-obsidian-card relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-goldPrimary/20 border border-goldBright/40 flex items-center justify-center text-goldBright shadow-gold-glow">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-mono text-goldChampagne">
                  CURRENT HACKATHON STAGE ({activeStation + 1} OF 7)
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-goldBright">
                  {routeStations[activeStation].name}
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right max-w-md">
              <p className="text-sm sm:text-base text-ivory/90 font-sans leading-relaxed">
                {routeStations[activeStation].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
