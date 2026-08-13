import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { UserCheck, Sparkles, Clock } from 'lucide-react';

export default function JurySection() {
  const { heading, announcementMessage, confirmedJury } = hackxpressConfig.jury;
  const hasJudges = confirmedJury && confirmedJury.length > 0;

  return (
    <section id="jury" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 08 — EVALUATION PANEL</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            DISTINGUISHED INDUSTRY LEADERS & INNOVATION JUDGES
          </p>
        </div>

        {/* Display Confirmed Jury Grid or Tasteful Announcement Placeholder */}
        {hasJudges ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {confirmedJury.map((judge, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-goldPrimary/30 glass-panel-hover space-y-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-goldBright mx-auto">
                  <img
                    src={judge.image || '/placeholder-judge.jpg'}
                    alt={judge.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold font-display text-ivory">{judge.name}</h3>
                  <div className="text-xs font-mono text-goldBright">{judge.designation}</div>
                  <div className="text-xs text-goldChampagne/70">{judge.organization}</div>
                </div>
                <p className="text-xs text-ivory/70 text-center font-sans line-clamp-3">
                  {judge.bio}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 sm:p-16 rounded-3xl border border-goldBright/40 text-center max-w-3xl mx-auto space-y-6 shadow-obsidian-card relative overflow-hidden">
            <div className="w-20 h-20 mx-auto rounded-full bg-goldPrimary/15 border border-goldBright/40 flex items-center justify-center text-goldBright shadow-gold-glow animate-float-slow">
              <UserCheck className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-goldChampagne tracking-widest uppercase flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-goldBright animate-spin" style={{ animationDuration: '10s' }} />
                <span>PANEL REVEAL IN PROGRESS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-goldBright tracking-wider">
                {announcementMessage}
              </h3>
            </div>

            <p className="text-sm text-ivory/70 max-w-xl mx-auto font-sans leading-relaxed">
              Our jury comprises senior technology leaders, railway domain experts, venture capitalists, and academic pioneers. Official judge bios will be updated prior to train boarding.
            </p>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-obsidian border border-goldPrimary/30 text-goldChampagne text-xs font-mono">
              <Sparkles className="w-4 h-4 text-goldBright" />
              <span>STRICT NO FABRICATION POLICY</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
