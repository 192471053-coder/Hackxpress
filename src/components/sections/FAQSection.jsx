import React, { useState } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const { heading, items } = hackxpressConfig.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/40">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 13 — INQUIRIES & HELP</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            EVERYTHING YOU NEED TO KNOW BEFORE BOARDING
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isPlaceholder = item.a.includes('[ADD') || item.a.includes('[YES/NO]');

            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-goldBright bg-goldPrimary/10 shadow-gold-glow' : 'border-goldPrimary/20 hover:border-goldPrimary/50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-goldBright' : 'text-goldChampagne/60'}`} />
                    <span className="text-base sm:text-lg font-bold font-display text-ivory">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-goldBright transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-2">
                    <p className={`text-sm sm:text-base font-sans leading-relaxed ${isPlaceholder ? 'text-goldBright font-mono bg-goldPrimary/10 p-3 rounded-lg border border-goldPrimary/30 inline-block' : 'text-ivory/80'}`}>
                      {item.a}
                    </p>
                    {isPlaceholder && (
                      <div className="text-[10px] font-mono text-goldChampagne/60">
                        (EDITABLE ANSWER PLACEHOLDER FOR ORGANIZERS)
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
