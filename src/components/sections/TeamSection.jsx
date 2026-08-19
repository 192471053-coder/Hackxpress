import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';

export default function TeamSection() {
  const { heading, facultyConvenors, studentConvenor } = hackxpressConfig.team;

  return (
    <section id="team" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 09 — ORGANIZERS & LEADS</div>
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

      </div>
    </section>
  );
}
