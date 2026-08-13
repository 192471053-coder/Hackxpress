import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Handshake, Shield } from 'lucide-react';

export default function SponsorsSection() {
  const { heading, categories } = hackxpressConfig.sponsors;

  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 09 — ECOSYSTEM PARTNERS</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            POWERED BY INDUSTRY & INNOVATION PIONEERS
          </p>
        </div>

        {/* Sponsor Category Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-goldPrimary/25 space-y-6 glass-panel-hover"
            >
              <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-lg bg-goldPrimary/15 border border-goldPrimary/40 flex items-center justify-center text-goldBright">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-display text-goldBright uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-6 rounded-xl bg-obsidian border border-goldPrimary/20 flex items-center justify-center text-center hover:border-goldBright hover:shadow-gold-inner transition-all duration-300 group"
                  >
                    {item.logo ? (
                      <img src={item.logo} alt={item.name} className="max-h-12 object-contain" />
                    ) : (
                      <div className="space-y-1">
                        <div className="text-sm font-bold font-mono text-ivory/80 group-hover:text-goldBright transition-colors">
                          [{cat.name.toUpperCase()}]
                        </div>
                        <div className="text-[10px] font-mono text-goldChampagne/50">
                          EDITABLE PARTNER PLACEHOLDER
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner */}
        <div className="glass-panel p-8 rounded-2xl border border-goldPrimary/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-goldPrimary/20 border border-goldBright/40 flex items-center justify-center text-goldBright shrink-0">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold font-display text-ivory">WANT TO PARTNER WITH HACKXPRESS?</div>
              <div className="text-xs font-mono text-goldChampagne">Support Tamil Nadu's First Train Hackathon</div>
            </div>
          </div>
          <a
            href={`mailto:sponsor@hackxpress.in?subject=HACKXPRESS%20Sponsorship%20Inquiry`}
            className="gold-outline-button px-6 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wider shrink-0"
          >
            BECOME A SPONSOR
          </a>
        </div>

      </div>
    </section>
  );
}
