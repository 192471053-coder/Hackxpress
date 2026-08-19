import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import GoldenTicketIntro from './components/ui/GoldenTicketIntro';
import TrainCanvas from './components/3d/TrainCanvas';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/ui/Navbar';
import StickyCTA from './components/ui/StickyCTA';

import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ConceptSection from './components/sections/ConceptSection';
import DomainsSection from './components/sections/DomainsSection';
import PhasesSection from './components/sections/PhasesSection';
import DetailsSection from './components/sections/DetailsSection';
import PrizesSection from './components/sections/PrizesSection';
import JurySection from './components/sections/JurySection';
import SponsorCTASection from './components/sections/SponsorCTASection';
import TeamSection from './components/sections/TeamSection';
import RulesSection from './components/sections/RulesSection';
import SafetySection from './components/sections/SafetySection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';
import Footer from './components/sections/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  // Use refs to avoid unnecessary re-renders and scene re-creation
  const scrollProgressRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = Math.min(Math.max(window.scrollY / (totalHeight || 1), 0), 1);
    };

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Track Mouse Movement for 3D Parallax (No state updates)
    const handleMouseMove = (e) => {
      mousePosRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bgPrimary text-ivory selection:bg-goldPrimary/30 selection:text-goldBright overflow-x-hidden">
      
      {/* Unified SIMATS ticket and HACKXPRESS speed-dial opening */}
      {showIntro && <GoldenTicketIntro onComplete={() => setShowIntro(false)} />}

      {/* 3D WebGL Futuristic Train & Track Canvas */}
      <TrainCanvas scrollProgressRef={scrollProgressRef} mousePosRef={mousePosRef} />

      {/* Interactive Custom Glowing Cursor */}
      <CustomCursor mousePosRef={mousePosRef} />

      {/* Header Navbar */}
      <Navbar />

      {/* Persistent Floating Registration CTA */}
      <StickyCTA />

      {/* Main Continuous Journey Sections */}
      <main className={`relative z-10 transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection />
        <ExperienceSection />
        <ConceptSection />
        <DomainsSection />
        <PhasesSection />
        <DetailsSection />
        <PrizesSection />
        <JurySection />
        <SponsorCTASection />
        <TeamSection />
        <RulesSection />
        <SafetySection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
