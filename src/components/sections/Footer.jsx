import React from 'react';
import { hackxpressConfig } from '../../data/hackxpressConfig';
import { Train, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { copyright, navLinks } = hackxpressConfig.footer;
  const { contactEmail } = hackxpressConfig;
  const { organizerName, organizerLogo } = hackxpressConfig.branding;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-obsidian border-t border-goldPrimary/20 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-goldPrimary/20 border border-goldBright/40 flex items-center justify-center text-goldBright">
                <Train className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black font-display tracking-wider text-ivory">
                HACK<span className="text-goldBright">XPRESS</span>
              </span>
            </div>
            <p className="text-sm font-semibold font-display text-goldChampagne">
              Tamil Nadu's First Train Hackathon
            </p>
            <p className="text-xs font-mono text-ivory/60">
              Egmore, Chennai → Pondicherry
            </p>
            <div className="pt-6 mt-4 border-t border-goldPrimary/20 flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
              <span className="text-[10px] font-mono tracking-widest text-goldChampagne/60 uppercase">
                Organized by
              </span>
              <img
                src={organizerLogo}
                alt={organizerName}
                className="w-full max-w-[240px] h-auto object-contain"
              />
              <span className="text-[10px] font-mono tracking-widest text-goldChampagne/60 uppercase">
                Institutional Partner
              </span>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-xs font-mono text-goldChampagne hover:text-goldBright transition-colors break-all"
            >
              {contactEmail}
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-ivory/70 hover:text-goldBright transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-bgPrimary border border-goldPrimary/30 text-goldChampagne hover:border-goldBright hover:text-goldBright transition-all duration-300 shadow-gold-inner cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        <div className="gold-divider" />

        {/* Copyright */}
        <div className="text-center text-xs font-mono text-ivory/50">
          {copyright}
        </div>

      </div>
    </footer>
  );
}
