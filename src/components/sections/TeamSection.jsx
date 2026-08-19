import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { User, Linkedin, Twitter, Share2 } from 'lucide-react';

export default function TeamSection() {
  const { heading, members, facultyConvenors, studentConvenor } = hackxpressConfig.team;

  return (
    <section id="team" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 10 — ORGANIZERS & LEADS</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            {heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            THE LEADERSHIP TEAM DRIVING HACKXPRESS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-2xl border border-goldPrimary/25 space-y-5">
            <h3 className="text-xl font-bold font-display text-goldBright">FACULTY CONVENOR</h3>
            <div className="space-y-4">
              {facultyConvenors.map((convenor) => (
                <div key={convenor.name}>
                  <div className="text-base font-bold font-display text-ivory">{convenor.name}</div>
                  <div className="text-xs font-mono text-goldChampagne/70">{convenor.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-8 rounded-2xl border border-goldPrimary/25 space-y-5">
            <h3 className="text-xl font-bold font-display text-goldBright">STUDENT CONVENOR</h3>
            <div>
              <div className="text-base font-bold font-display text-ivory">{studentConvenor.name}</div>
              <a href={`tel:${studentConvenor.phone}`} className="text-sm font-mono text-goldChampagne hover:text-goldBright transition-colors">
                {studentConvenor.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-goldPrimary/25 glass-panel-hover flex flex-col justify-between space-y-6"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-obsidian border border-goldPrimary/40 flex items-center justify-center text-goldBright shadow-gold-inner">
                  <User className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-goldChampagne px-2.5 py-1 rounded bg-goldPrimary/10 border border-goldPrimary/30 uppercase">
                  {member.role}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-ivory">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-goldChampagne/60">
                  EDITABLE ORGANIZER CARD
                </div>
              </div>

              {/* Social Media Link Slots */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-ivory/50 flex items-center space-x-1">
                  <Share2 className="w-3.5 h-3.5 text-goldBright" />
                  <span>CONNECT</span>
                </span>
                <div className="flex items-center space-x-3 text-goldChampagne">
                  <a
                    href={member.social?.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-obsidian border border-goldPrimary/20 hover:text-goldBright hover:border-goldBright transition-colors"
                    aria-label={`${member.role} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social?.twitter || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-obsidian border border-goldPrimary/20 hover:text-goldBright hover:border-goldBright transition-colors"
                    aria-label={`${member.role} Twitter Profile`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
