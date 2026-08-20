import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { hackxpressConfig } from '../../data/hackxpressConfig';

/**
 * Independent HACKXPRESS event logo layer.
 * Phases: hidden | intro-reveal | speed-dial | settling | persistent
 */
export default function RouteEmblem({ phase = 'hidden' }) {
  const emblemRef = useRef(null);
  const imgRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [sectionPulse, setSectionPulse] = useState(false);
  const prevSectionRef = useRef(null);

  const { eventLogo } = hackxpressConfig.branding;
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getPersistentPosition = () => {
    const isMobile = window.innerWidth < 640;
    return {
      top: isMobile ? 56 : 80,
      right: isMobile ? 12 : 16,
      width: isMobile ? Math.min(window.innerWidth * 0.18, 80) : Math.min(window.innerWidth * 0.1, 120),
    };
  };

  /* ── Position emblem based on phase ── */
  useEffect(() => {
    const el = emblemRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const isMobile = window.innerWidth < 640;
    const introWidth = Math.min(window.innerWidth * 0.78, 320);
    const persistent = getPersistentPosition();

    if (phase === 'intro-reveal') {
      gsap.set(el, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 1,
        opacity: prefersReducedMotion ? 1 : 0,
        zIndex: 65,
      });
      gsap.set(img, { width: introWidth });

      if (!prefersReducedMotion) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 12, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power2.out' }
        );
      }
    }

    if (phase === 'speed-dial') {
      gsap.to(el, {
        y: isMobile ? -100 : -130,
        scale: isMobile ? 0.78 : 0.82,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    }

    if (phase === 'settling') {
      if (prefersReducedMotion) {
        gsap.set(el, {
          top: persistent.top,
          left: 'auto',
          right: persistent.right,
          xPercent: 0,
          yPercent: 0,
          x: 0,
          y: 0,
          scale: 1,
        });
        gsap.set(img, { width: persistent.width });
        return;
      }

      gsap.to(el, {
        top: persistent.top,
        left: 'auto',
        right: persistent.right,
        xPercent: 0,
        yPercent: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.inOut',
      });
      gsap.to(img, {
        width: persistent.width,
        duration: 0.85,
        ease: 'power3.inOut',
      });
    }

    if (phase === 'persistent') {
      gsap.set(el, {
        top: persistent.top,
        left: 'auto',
        right: persistent.right,
        xPercent: 0,
        yPercent: 0,
        x: 0,
        y: 0,
        scale: 1,
        zIndex: 45,
      });
      gsap.set(img, { width: persistent.width });
    }
  }, [phase, prefersReducedMotion]);

  /* ── Scroll progress for gold rail dot ── */
  useEffect(() => {
    if (phase !== 'persistent' && phase !== 'settling') return;

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.min(Math.max(window.scrollY / total, 0), 1) : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phase]);

  /* ── Section-change gold pulse ── */
  useEffect(() => {
    if (phase !== 'persistent') return;

    const sections = document.querySelectorAll('main > section, main > div[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const id = entry.target.id || entry.target.className;
            if (prevSectionRef.current && prevSectionRef.current !== id) {
              setSectionPulse(true);
              setTimeout(() => setSectionPulse(false), 600);
            }
            prevSectionRef.current = id;
          }
        });
      },
      { threshold: [0.3] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [phase]);

  if (phase === 'hidden') return null;

  const isPersistent = phase === 'persistent' || phase === 'settling';
  const showRail = isPersistent;
  const showGlass = isPersistent;
  const showGlow = phase === 'intro-reveal' || phase === 'speed-dial';

  const railDotLeft = `${scrollProgress * 100}%`;

  return (
    <>
      {showGlow && (
        <div
          className="fixed inset-0 z-[64] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 42%, rgba(212,175,55,0.10) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
      )}

      <div
        ref={emblemRef}
        className="pointer-events-none"
        style={{ position: 'fixed', zIndex: isPersistent ? 45 : 65 }}
        aria-hidden="true"
      >
        <div
          className={`relative transition-shadow duration-300 ${
            sectionPulse ? 'shadow-[0_0_28px_rgba(212,175,55,0.35)]' : ''
          }`}
          style={
            showGlass
              ? {
                  background: 'rgba(5,5,5,0.78)',
                  border: '1px solid rgba(212,175,55,0.30)',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(212,175,55,0.08)',
                  padding: '6px 8px',
                }
              : undefined
          }
        >
          <img
            ref={imgRef}
            src={eventLogo}
            alt="HACKXPRESS — Hackathon on the Rails"
            className="block h-auto object-contain"
            style={{ width: 'min(78vw, 320px)' }}
            draggable={false}
          />
        </div>

        {showRail && (
          <div className="relative mt-1.5 w-full">
            <div className="h-px w-full" style={{ background: 'rgba(212,175,55,0.25)' }} />
            <div
              className="absolute top-1/2 w-1 h-1 rounded-full"
              style={{
                left: railDotLeft,
                transform: 'translate(-50%, -50%)',
                background: 'rgba(212,175,55,0.7)',
                boxShadow: '0 0 4px rgba(212,175,55,0.5)',
                transition: prefersReducedMotion ? 'none' : 'left 0.15s ease-out',
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
