import React, { useState, useEffect } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function IntroSpeedDial({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isSkipping, setIsSkipping] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion speed or standard progressive speed
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onComplete, 500);
      }, 300);
      return;
    }

    let interval;
    const duration = isSkipping ? 400 : 3800; // 3.8s standard duration, fast skip
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    let step = 0;

    interval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 600); // Trigger transition to hero
        }, 400);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isSkipping, prefersReducedMotion, onComplete]);

  // Handle Skip via Mouse Click or Space key
  const handleSkip = () => {
    if (!isSkipping && progress < 100) {
      setIsSkipping(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [progress, isSkipping]);

  // Dynamic Status Text based on percentage phase
  const getStatusText = () => {
    if (progress < 20) return 'INITIALIZING JOURNEY';
    if (progress < 50) return 'ROUTE LOCKED';
    if (progress < 80) return 'TRAIN SYSTEM READY';
    if (progress < 100) return 'JOURNEY READY';
    return 'JOURNEY READY';
  };

  // SVG Speed Dial Circumference calculation
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 bg-bgPrimary flex flex-col justify-between p-6 sm:p-12 overflow-hidden transition-all duration-700 cursor-pointer select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Subtle Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-goldBright/10 blur-[120px] pointer-events-none" />

      {/* Top Header Information */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-goldChampagne/70 z-10">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-goldBright animate-pulse" />
          <span className="tracking-widest">EGMORE, CHENNAI</span>
        </div>
        <div className="tracking-widest hidden sm:block">
          TAMIL NADU'S FIRST TRAIN HACKATHON
        </div>
        <div className="tracking-widest">PONDICHERRY</div>
      </div>

      {/* Central Speed Dial & Main Branding */}
      <div className="flex flex-col items-center justify-center my-auto space-y-8 z-10 text-center">

        {/* Speed Dial Gauge */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Subtle Outer Ring */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              className="stroke-goldDark/30 fill-none"
              strokeWidth="4"
            />
            {/* Progress Arc */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              className="stroke-goldBright fill-none transition-all duration-100 ease-linear shadow-gold-glow"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Inner Dark Obsidian Circle & Percentage */}
          <div className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-obsidian border border-goldPrimary/30 flex flex-col items-center justify-center shadow-gold-inner space-y-1">
            <span className="text-4xl sm:text-5xl font-black font-mono text-goldBright tracking-tighter">
              {progress}%
            </span>
            <span className="text-[10px] font-mono tracking-widest text-goldChampagne/80 uppercase">
              {getStatusText()}
            </span>
          </div>
        </div>

        {/* HACKXPRESS Branding */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-ivory">
            HACK<span className="text-gold-gradient">XPRESS</span>
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-goldChampagne uppercase">
            TAMIL NADU'S FIRST TRAIN HACKATHON
          </p>
          <div className="text-[11px] font-mono tracking-wider text-ivory/60 uppercase">
            {hackxpressConfig.eventMeta.tagline}
          </div>
        </div>

        {/* Route Information with Illuminated Arrow */}
        <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-obsidian border border-goldPrimary/30 text-goldChampagne text-xs font-mono">
          <span>EGMORE, CHENNAI</span>
          <ArrowRight className="w-4 h-4 text-goldBright animate-pulse" />
          <span>PONDICHERRY</span>
        </div>

        {/* Event Context Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {['TRAIN HACKATHON', 'INNOVATION', 'BUILD', 'PITCH'].map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-obsidian/80 border border-goldPrimary/20 text-[10px] font-mono text-goldChampagne/80"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Bottom Footer & Horizontal Progress Bar */}
      <div className="w-full space-y-4 max-w-xl mx-auto z-10 text-center">
        {/* Minimal Horizontal Progress Bar */}
        <div className="w-full h-1 bg-obsidian rounded-full overflow-hidden border border-goldPrimary/20">
          <div
            className="h-full bg-gold-gradient transition-all duration-100 ease-linear shadow-gold-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip Hint */}
        <div className="text-[10px] font-mono tracking-widest text-ivory/50 uppercase hover:text-goldBright transition-colors">
          [ CLICK OR PRESS SPACE TO SKIP ]
        </div>
      </div>

    </div>
  );
}
