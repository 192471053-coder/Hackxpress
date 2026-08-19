import React, { useEffect, useState } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';

export default function SimatsBrandIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { organizerName, organizerLogo } = hackxpressConfig.branding;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fadeInFrame = requestAnimationFrame(() => setIsVisible(true));
    const holdDuration = prefersReducedMotion ? 700 : 1800;
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), holdDuration);
    const completeTimer = setTimeout(onComplete, holdDuration + (prefersReducedMotion ? 100 : 500));

    return () => {
      cancelAnimationFrame(fadeInFrame);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-bgPrimary transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label={`${organizerName} opening branding`}
    >
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-goldBright/10 blur-[110px] pointer-events-none" />
      <img
        src={organizerLogo}
        alt="SIMATS Engineering"
        className={`relative z-10 w-[min(78vw,240px)] sm:w-[min(42vw,280px)] h-auto object-contain transition-all duration-700 ease-out ${
          isVisible && !isFadingOut ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.96]'
        }`}
      />
    </div>
  );
}
