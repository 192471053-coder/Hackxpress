import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import CountdownTimer from '../ui/CountdownTimer';
import { Calendar, MapPin, Ticket, Users, Train, Info } from 'lucide-react';

const iconMap = {
  "Event": Train,
  "Format": Train,
  "Start Location": MapPin,
  "Destination": MapPin,
  "Venue": Train,
  "Participation": Users,
  "Date": Calendar,
  "Registration Fee": Ticket
};

export default function DetailsSection() {
  const { details } = hackxpressConfig;

  return (
    <section id="details" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono tracking-widest text-goldBright uppercase">SECTION 06 — EVENT SPECIFICATIONS</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-ivory tracking-tight">
            OFFICIAL EVENT DETAILS
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-sm font-mono tracking-wider text-goldChampagne/80">
            KEY INFORMATION FOR HACKXPRESS PARTICIPANTS
          </p>
        </div>

        {/* Live Countdown Widget */}
        <div className="space-y-4 text-center">
          <div className="text-xs font-mono text-goldChampagne tracking-widest uppercase">JOURNEY COUNTDOWN</div>
          <CountdownTimer />
        </div>

        {/* Details Spec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => {
            const IconComponent = iconMap[item.label] || Info;
            const isPlaceholder = item.value.includes('[ADD');

            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-goldPrimary/25 flex items-start space-x-4 glass-panel-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-obsidian border border-goldPrimary/40 flex items-center justify-center text-goldBright shrink-0 shadow-gold-inner">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-goldChampagne/70 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className={`text-base font-bold font-display ${isPlaceholder ? 'text-goldBright font-mono bg-goldPrimary/10 px-2 py-0.5 rounded inline-block border border-goldPrimary/30' : 'text-ivory'}`}>
                    {item.value}
                  </div>
                  {isPlaceholder && (
                    <div className="text-[10px] text-ivory/50 font-mono">
                      (EDITABLE PLACEHOLDER)
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
