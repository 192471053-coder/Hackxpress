import React, { useState, useEffect } from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-bgPrimary/80 backdrop-blur-md border-b border-goldPrimary/20 shadow-obsidian-card'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        {/* Event + institution logos */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
          <a href="#hero" className="shrink-0">
            <img
              src={hackxpressConfig.branding.eventLogo}
              alt="HACKXPRESS"
              className="block w-[clamp(60px,18vw,85px)] sm:w-[clamp(90px,9vw,140px)] h-auto max-h-10 sm:max-h-12 object-contain"
            />
          </a>
          <img
            src={hackxpressConfig.branding.organizerLogo}
            alt="SIMATS Engineering"
            className="block w-[clamp(55px,16vw,75px)] sm:w-[clamp(90px,8vw,120px)] max-w-[22vw] sm:max-w-[24vw] h-auto max-h-8 sm:max-h-9 p-1 sm:p-1.5 object-contain rounded-md bg-obsidian/80 border border-goldPrimary/25 shadow-gold-inner"
          />
        </div>

        {/* Train Route Ticker (Center Badge) */}
        <div className="hidden xl:flex items-center space-x-2 px-4 py-1.5 rounded-full bg-obsidian/80 border border-goldPrimary/25 text-xs font-mono text-goldChampagne shadow-gold-inner shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-goldBright animate-ping" />
          <span>ROUTE: EGMORE, CHENNAI</span>
          <span className="text-goldBright font-bold">→</span>
          <span>PONDICHERRY</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium shrink-0">
          {hackxpressConfig.footer.navLinks.slice(0, 7).map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-ivory/80 hover:text-goldBright transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-goldBright transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href={hackxpressConfig.eventMeta.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex gold-glow-button px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-bold items-center space-x-1.5"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-obsidian border border-goldPrimary/30 text-goldChampagne hover:text-goldBright"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian/95 border-b border-goldPrimary/30 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-goldPrimary/10 text-xs font-mono text-goldChampagne">
            <span>ROUTE</span>
            <span>EGMORE → PONDICHERRY</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            {hackxpressConfig.footer.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ivory/80 hover:text-goldBright py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href={hackxpressConfig.eventMeta.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="gold-glow-button w-full py-3 rounded-lg text-xs uppercase font-bold flex items-center justify-center space-x-2"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
