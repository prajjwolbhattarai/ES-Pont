import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShieldCheck } from 'lucide-react';
import { EsPontBrandLogo } from './EsPontBrandLogo';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Bedrooms', href: '#bedrooms' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 text-stone-900 border-b border-stone-200/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: Zone 1 (Single element Brand Wordmark) - Zone 2 (4-6 Clean text links) - Zone 3 (1-2 Primary actions) */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group inline-flex items-center py-1 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="ES PONT Home"
          >
            <EsPontBrandLogo
              size="sm"
              colorScheme={isScrolled ? 'dark' : 'gold'}
              withVillaPrefix={false}
              className={`transition-colors ${isScrolled ? 'hover:text-[#B48B3D]' : 'hover:text-[#E8C588]'}`}
            />
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors relative py-1 hover:underline underline-offset-8 decoration-amber-600 ${
                  isScrolled
                    ? 'text-stone-600 hover:text-stone-900'
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className={`hidden sm:inline-flex items-center text-xs tracking-wider uppercase font-medium px-3.5 py-2 rounded-lg border transition-all whitespace-nowrap ${
                isScrolled
                  ? 'border-stone-300 text-stone-700 hover:text-stone-900 hover:border-stone-400 bg-stone-50/50'
                  : 'border-stone-400/40 text-stone-200 hover:text-white hover:border-[#D8B475]'
              }`}
            >
              Inquire
            </button>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold px-4 py-2.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white transition-all shadow-xs hover:shadow-sm whitespace-nowrap active:scale-95 cursor-pointer font-sans-clean"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Direct</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                isScrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-stone-200 hover:text-white'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-white py-1.5 text-base font-medium border-b border-stone-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white text-sm font-semibold uppercase tracking-wider rounded text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Directly with Host</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 border border-stone-700 text-stone-300 hover:text-white text-sm font-medium rounded text-center"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct booking guarantees lowest rates with zero booking fees</span>
          </div>
        </div>
      )}
    </header>
  );
};
