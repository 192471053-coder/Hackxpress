import React, { useEffect, useRef } from 'react';

export default function CustomCursor({ mousePosRef }) {
  const haloRef = useRef(null);
  const coreRef = useRef(null);
  const isHoveredRef = useRef(false);
  let animationFrameId = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      const target = e.target;
      const isHovered =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-hover');

      isHoveredRef.current = isHovered;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Use requestAnimationFrame to update cursor position smoothly
    const updateCursorPosition = () => {
      const mousePos = mousePosRef?.current || { x: 0, y: 0 };
      const clientX = (mousePos.x * window.innerWidth) / 2 + window.innerWidth / 2;
      const clientY = (-mousePos.y * window.innerHeight) / 2 + window.innerHeight / 2;

      if (haloRef.current) {
        haloRef.current.style.left = `${clientX}px`;
        haloRef.current.style.top = `${clientY}px`;
        haloRef.current.style.width = isHoveredRef.current ? '40px' : '24px';
        haloRef.current.style.height = isHoveredRef.current ? '40px' : '24px';
        haloRef.current.style.boxShadow = isHoveredRef.current ? '0 0 20px rgba(245, 197, 66, 0.3)' : 'none';
      }

      if (coreRef.current) {
        coreRef.current.style.left = `${clientX}px`;
        coreRef.current.style.top = `${clientY}px`;
        coreRef.current.style.width = isHoveredRef.current ? '6px' : '4px';
        coreRef.current.style.height = isHoveredRef.current ? '6px' : '4px';
      }

      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    };

    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mousePosRef]);

  return (
    <>
      {/* Soft Controlled Environmental Halo */}
      <div
        ref={haloRef}
        className="fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out"
        style={{
          left: '-100px',
          top: '-100px',
          width: '24px',
          height: '24px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(245, 197, 66, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
        }}
      />
      {/* Precision Core */}
      <div
        ref={coreRef}
        className="fixed pointer-events-none z-50 rounded-full bg-goldBright opacity-90"
        style={{
          left: '-100px',
          top: '-100px',
          width: '4px',
          height: '4px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 8px rgba(245, 197, 66, 0.6)',
        }}
      />
    </>
  );
}
