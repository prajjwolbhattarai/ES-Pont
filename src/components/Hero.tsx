import React from 'react';
import { Calendar, Image as ImageIcon, Users, Bed, Bath, Waves, Sparkles } from 'lucide-react';
import { EsPontBrandLogo } from './EsPontBrandLogo';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGallery }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end justify-start overflow-hidden bg-[#2D2825]">
      {/* Background Hero Image with Warm Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/a580aefe-b244-4b44-bd0d-7619594d8ab6.jpeg"
          alt="Villa Es Pont exterior, 10x5m swimming pool and sweeping views over Palma Bay and Cathedral"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Warm Golden Hour Pastel Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#26211D]/90 via-[#26211D]/60 to-[#26211D]/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pb-24">
        {/* Property Title with Exact Brand Logo Image */}
        <div className="mb-6">
          <div className="mb-3">
            <EsPontBrandLogo size="hero" colorScheme="gold" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs sm:text-sm tracking-[0.25em] font-light text-[#EED8B3] uppercase block font-sans-clean">
              {t.hero.luxuryTag}
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F2ECE4] text-[11px] font-sans-clean tracking-wider uppercase">
              <span className="text-[#C59B4D] font-medium">{language === 'es' ? 'Licencia Turística' : language === 'de' ? 'Touristische Lizenz' : 'Tourist Licence'}:</span>
              <strong className="font-semibold text-white">VT/106136</strong>
            </span>
          </div>
        </div>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-xl text-[#F2ECE4] font-light max-w-3xl leading-relaxed mb-8">
          {t.hero.subtitle}
        </p>

        {/* Key Property Specs Row (Warm Pastel Glass) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mb-8 p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8E2D8] text-[#2D2825] shadow-sm">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-[#C59B4D] shrink-0" />
            <div className="text-xs sm:text-sm font-sans-clean">
              <span className="font-semibold text-[#2D2825]">{t.hero.upTo10}</span> {t.hero.guests}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Bed className="w-4 h-4 text-[#C59B4D] shrink-0" />
            <div className="text-xs sm:text-sm font-sans-clean">
              <span className="font-semibold text-[#2D2825]">{t.hero.six}</span> {t.hero.bedrooms}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Bath className="w-4 h-4 text-[#C59B4D] shrink-0" />
            <div className="text-xs sm:text-sm font-sans-clean">
              <span className="font-semibold text-[#2D2825]">{t.hero.four}</span> {t.hero.bathrooms}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Waves className="w-4 h-4 text-[#C59B4D] shrink-0" />
            <div className="text-xs sm:text-sm font-sans-clean">
              <span className="font-semibold text-[#2D2825]">{t.hero.poolDim}</span> {t.hero.pool}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white font-medium text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.hero.checkAvail}</span>
          </button>

          <button
            onClick={onOpenGallery}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF7F2]/20 hover:bg-[#FAF7F2]/30 text-white font-medium text-sm tracking-wider uppercase border border-white/30 backdrop-blur-md transition-all cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-[#EED8B3]" />
            <span>{t.hero.viewGallery}</span>
          </button>
        </div>

        {/* Direct Booking Best Price Guarantee Note */}
        <div className="mt-6 flex items-center gap-2 text-xs text-[#E8DFD5] font-light font-sans-clean">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B4D]" />
          <span>{t.hero.directNote}</span>
        </div>
      </div>
    </section>
  );
};

