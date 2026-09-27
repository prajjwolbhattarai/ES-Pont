import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShieldCheck } from 'lucide-react';
import { EsPontBrandLogo } from './EsPontBrandLogo';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.overview, href: '#overview' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.bedrooms, href: '#bedrooms' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.faq, href: '#faq' }
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
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
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

          {/* Zone 3: Actions + Language Selector button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Top Language Selector Button */}
            <LanguageSelector isScrolled={isScrolled} />

            <button
              onClick={onOpenContact}
              className={`hidden sm:inline-flex items-center text-xs tracking-wider uppercase font-medium px-3.5 py-2 rounded-lg border transition-all whitespace-nowrap ${
                isScrolled
                  ? 'border-stone-300 text-stone-700 hover:text-stone-900 hover:border-stone-400 bg-stone-50/50'
                  : 'border-stone-400/40 text-stone-200 hover:text-white hover:border-[#D8B475]'
              }`}
            >
              {t.nav.inquire}
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white transition-all shadow-xs hover:shadow-sm whitespace-nowrap active:scale-95 cursor-pointer font-sans-clean"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookDirect}</span>
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
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">Language / Idioma / Sprache</span>
            <LanguageSelector isScrolled={false} />
          </div>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
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
              className="w-full py-3 bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-sm font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookDirectLong}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 border border-stone-700 text-stone-300 hover:text-white text-sm font-medium rounded-xl text-center"
            >
              {t.nav.inquire}
            </button>
          </div>

          <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.nav.guaranteeNote}</span>
          </div>
        </div>
      )}
    </header>
  );
};

