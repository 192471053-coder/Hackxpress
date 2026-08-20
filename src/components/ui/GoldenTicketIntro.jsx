import React, { useEffect, useState } from 'react';
import { ArrowRight, Train } from 'lucide-react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import IntroSpeedDial from './IntroSpeedDial';

export default function GoldenTicketIntro({ onComplete }) {
  const [phase, setPhase] = useState('logo');
  const [logoVisible, setLogoVisible] = useState(false);
  const { organizerLogo } = hackxpressConfig.branding;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timings = prefersReducedMotion
      ? { logo: 250, ticket: 450, scan: 650 }
      : { logo: 1500, ticket: 3000, scan: 3800 };

    const logoFrame = requestAnimationFrame(() => setLogoVisible(true));
    const ticketTimer = setTimeout(() => setPhase('ticket'), timings.logo);
    const scanTimer = setTimeout(() => setPhase('scan'), timings.ticket);
    const speedDialTimer = setTimeout(() => setPhase('speed-dial'), timings.scan);

    return () => {
      cancelAnimationFrame(logoFrame);
      clearTimeout(ticketTimer);
      clearTimeout(scanTimer);
      clearTimeout(speedDialTimer);
    };
  }, []);

  if (phase === 'speed-dial') {
    return <IntroSpeedDial onComplete={onComplete} duration={2800} />;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-bgPrimary px-4 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_42%)] pointer-events-none" />

      {phase === 'logo' && (
        <div className={`relative flex flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${logoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.94]'}`}>
          <div className="absolute -inset-16 rounded-full bg-goldBright/10 blur-[90px] pointer-events-none" />
          <img
            src={organizerLogo}
            alt="SIMATS Engineering"
            className="relative z-10 w-[min(78vw,210px)] sm:w-[min(42vw,280px)] h-auto object-contain"
          />
        </div>
      )}

      {(phase === 'ticket' || phase === 'scan') && (
        <div className="relative w-full max-w-2xl animate-[ticket-reveal_700ms_ease-out]">
          <div className="absolute -inset-10 rounded-full bg-goldBright/10 blur-[90px] pointer-events-none" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-goldBright/70 bg-obsidian shadow-[0_0_45px_rgba(245,197,66,0.18)]">
            <div className="absolute inset-2 rounded-[0.9rem] border border-goldChampagne/25 pointer-events-none" />
            <div className="grid grid-cols-[1fr_auto] min-h-[250px] sm:min-h-[290px]">
              <div className="relative p-6 sm:p-10 flex flex-col justify-between gap-8">
                <div className="flex items-center justify-between gap-4 text-[9px] sm:text-[10px] tracking-[0.24em] text-goldChampagne/80 font-mono uppercase">
                  <span>SIMATS ENGINEERING</span>
                  <span>BOARDING PASS</span>
                </div>
                <div className="space-y-2">
                  <div className="text-[clamp(1.8rem,6vw,3.5rem)] leading-none font-black font-display tracking-tight text-ivory">
                    HACK<span className="text-gold-gradient">XPRESS</span>
                  </div>
                  <div className="text-xs sm:text-sm tracking-[0.2em] font-mono text-goldChampagne uppercase">2026 · TRAIN HACKATHON</div>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] sm:text-xs font-mono text-goldChampagne uppercase tracking-wider">
                  <span>EGMORE</span><ArrowRight className="w-4 h-4 text-goldBright" /><span>PONDICHERRY</span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-ivory/55 uppercase">TAMIL NADU'S FIRST TRAIN HACKATHON</div>
              </div>
              <div className="relative w-12 sm:w-16 border-l border-dashed border-goldPrimary/60 flex flex-col items-center justify-between py-6 sm:py-8">
                <Train className="w-4 h-4 text-goldBright" />
                <div className="flex-1 my-4 w-5 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #D4AF37 0 2px, transparent 2px 5px)' }} />
                <span className="[writing-mode:vertical-rl] rotate-180 text-[8px] tracking-[0.3em] text-goldChampagne/70 font-mono">HXP · 2026</span>
              </div>
            </div>
            {phase === 'scan' && (
              <>
                <div className="absolute left-0 right-0 top-0 h-px bg-goldBright shadow-[0_0_14px_3px_rgba(245,197,66,0.75)] animate-[ticket-scan_1100ms_ease-in-out_infinite]" />
                <div className="absolute bottom-4 left-0 right-0 text-center text-[9px] tracking-[0.3em] text-goldBright font-mono uppercase">BOARDING VERIFIED</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
