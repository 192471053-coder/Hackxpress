import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Trophy, Award, Star, Sparkles, ShieldCheck } from 'lucide-react';

export default function PrizesSection() {
  const { heading, mainPrizes, specialAwards } = hackxpressConfig.prizes;

  return (
    <section id="prizes" className="relative py-28 px-4 sm:px-6 z-10 bg-obsidian/70">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 07 — REWARDS & RECOGNITION</div>
          <h2 className="text-5xl sm:text-7xl font-black font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne">
            CELEBRATING TRAILBLAZING TRAIN INNOVATORS
          </p>
        </div>

        {/* Central Anti-Gravity Suspended Trophy Moment */}
        <div className="relative py-12 flex flex-col items-center justify-center">
          {/* Pulsing Backlight Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-goldBright/15 blur-3xl animate-pulse-gold pointer-events-none" />

          {/* Suspended Levitating Trophy Element */}
          <div className="relative z-20 animate-float-slow text-center space-y-4">
            <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full bg-obsidian/90 border-2 border-goldBright flex items-center justify-center text-goldBright shadow-gold-glow-lg backdrop-blur-md">
              <Trophy className="w-14 h-14 sm:w-20 sm:h-20 text-goldBright animate-spin" style={{ animationDuration: '20s' }} />
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-goldPrimary/20 border border-goldBright/50 text-goldBright text-xs font-mono">
              <Sparkles className="w-4 h-4" />
              <span>ANTI-GRAVITY CHAMPIONSHIP TROPHY</span>
            </div>
          </div>
        </div>

        {/* Main Tiered Prizes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {mainPrizes.map((prize, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between space-y-6 ${
                prize.highlight
                  ? 'border-goldBright bg-goldPrimary/15 shadow-gold-glow-lg -translate-y-4 scale-105'
                  : 'border-goldPrimary/30 hover:border-goldBright/60 hover:-translate-y-2'
              }`}
            >
              {prize.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-goldBright text-bgPrimary text-[10px] font-extrabold font-mono uppercase tracking-widest shadow-gold-glow">
                  TOP HONOUR
                </div>
              )}

              <div className="space-y-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-obsidian border border-goldPrimary/40 flex items-center justify-center text-goldBright shadow-gold-inner">
                  {idx === 0 ? <Trophy className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                </div>

                <h3 className="text-2xl font-extrabold font-display text-ivory tracking-wider uppercase">
                  {prize.rank}
                </h3>

                <div className="text-3xl sm:text-4xl font-black font-mono text-goldBright tracking-tight">
                  {prize.amount}
                </div>

                <div className="text-[10px] text-ivory/50 font-mono uppercase tracking-widest">
                  (PRIZE AMOUNT CONFIGURABLE)
                </div>
              </div>

              {/* Included Perks List */}
              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono text-goldChampagne">
                {prize.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-center justify-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-goldBright" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Award Categories Badges */}
        <div className="glass-panel p-8 rounded-3xl border border-goldPrimary/30 space-y-6">
          <div className="text-center space-y-2">
            <h4 className="text-xl font-bold font-display text-ivory flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-goldBright fill-goldBright" />
              <span>SPECIAL CATEGORY RECOGNITIONS</span>
            </h4>
            <p className="text-xs font-mono text-goldChampagne/70">
              HONOURING SPECIFIC DOMAIN EXCELLENCE
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {specialAwards.map((award, aIdx) => (
              <div
                key={aIdx}
                className="px-5 py-2.5 rounded-xl bg-obsidian border border-goldPrimary/40 text-goldChampagne text-xs font-semibold hover:border-goldBright hover:text-goldBright hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-goldBright" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
