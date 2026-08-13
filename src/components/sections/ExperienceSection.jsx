import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Train, Cpu, Users, Compass } from 'lucide-react';

const iconMap = {
  Train: Train,
  Cpu: Cpu,
  Users: Users,
  Compass: Compass,
};

export default function ExperienceSection() {
  const { heading, description, cards } = hackxpressConfig.experience;

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 02 — THE EXPERIENCE</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-base sm:text-lg text-ivory/80 font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Experience Cards Grid with Anti-Gravity Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Train;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-goldPrimary/25 glass-panel-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                {/* Background Gold Accent Mesh */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-goldPrimary/10 rounded-full blur-2xl group-hover:bg-goldBright/25 transition-all duration-500" />
                
                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-obsidian border border-goldPrimary/40 flex items-center justify-center text-goldBright group-hover:border-goldBright group-hover:scale-110 transition-all duration-300 shadow-gold-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-ivory group-hover:text-goldBright transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ivory/70 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-goldChampagne/60">
                  <span>EXP-0{idx + 1}</span>
                  <span className="group-hover:text-goldBright transition-colors">EN ROUTE → {card.contextPhrase}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
