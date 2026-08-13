import React, { useState, useEffect } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';

export default function CountdownTimer() {
  const dateStr = hackxpressConfig.eventMeta.eventDate;
  const isPlaceholder = !dateStr || dateStr.includes('[ADD DATE]');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (isPlaceholder) return;

    const targetDate = new Date(dateStr).getTime();
    if (isNaN(targetDate)) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dateStr, isPlaceholder]);

  if (isPlaceholder) {
    return (
      <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-xl bg-obsidian/80 border border-goldPrimary/30 text-goldChampagne font-mono text-sm shadow-gold-inner">
        <span className="w-2.5 h-2.5 rounded-full bg-goldBright animate-ping" />
        <span className="text-ivory font-semibold">EVENT DATE:</span>
        <span className="text-goldBright font-mono px-2 py-0.5 rounded bg-goldPrimary/10 border border-goldPrimary/30">
          [ADD DATE]
        </span>
        <span className="text-xs text-ivory/60">(COUNTDOWN ACTIVATES ONCE ORGANIZERS CONFIRM DATE)</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
      {[
        { label: 'DAYS', val: timeLeft.days },
        { label: 'HOURS', val: timeLeft.hours },
        { label: 'MINUTES', val: timeLeft.minutes },
        { label: 'SECONDS', val: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="glass-panel p-4 rounded-xl text-center border border-goldPrimary/30">
          <div className="text-2xl sm:text-4xl font-extrabold font-mono text-goldBright tracking-wider">
            {String(item.val).padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-goldChampagne/80 tracking-widest mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
