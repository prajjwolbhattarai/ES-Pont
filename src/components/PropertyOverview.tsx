import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PropertyOverviewProps {
  onOpenBooking: () => void;
}

export const PropertyOverview: React.FC<PropertyOverviewProps> = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { propertyData, t, language } = useLanguage();

  const specsLabels = {
    en: {
      title: 'Property Specifications',
      subtitle: 'Villa Es Pont at a Glance',
      type: 'Property Type',
      typeVal: 'Private Luxury Villa',
      capacity: 'Maximum Capacity',
      capacityVal: '10 Guests',
      bedsBaths: 'Bedrooms & Bathrooms',
      bedsBathsVal: '6 Bedrooms · 4 Full Bathrooms',
      pool: 'Swimming Pool',
      poolVal: '10m × 5m Private Pool',
      grounds: 'Private Grounds',
      groundsVal: '2,200 m² Secluded Estate',
      sports: 'Sports Facilities',
      sportsVal: 'Private Basketball Court',
      location: 'Location',
      locationVal: 'Son Vida, Palma de Mallorca',
      license: 'Tourism License',
      readMore: 'Read full property description',
      readLess: 'Read less',
      btn: 'Reserve Direct & Save'
    },
    es: {
      title: 'Especificaciones de la Propiedad',
      subtitle: 'Villa Es Pont en Resumen',
      type: 'Tipo de Propiedad',
      typeVal: 'Villa Privada de Lujo',
      capacity: 'Capacidad Máxima',
      capacityVal: '10 Huéspedes',
      bedsBaths: 'Dormitorios y Baños',
      bedsBathsVal: '6 Dormitorios · 4 Baños Completos',
      pool: 'Piscina Privada',
      poolVal: 'Piscina Privada 10m × 5m',
      grounds: 'Terreno Privado',
      groundsVal: 'Finca Privada de 2.200 m²',
      sports: 'Instalaciones Deportivas',
      sportsVal: 'Cancha de Baloncesto Privada',
      location: 'Ubicación',
      locationVal: 'Son Vida, Palma de Mallorca',
      license: 'Licencia Turística',
      readMore: 'Leer descripción completa',
      readLess: 'Leer menos',
      btn: 'Reservar Directamente y Ahorrar'
    },
    de: {
      title: 'Eigenschaften des Anwesens',
      subtitle: 'Villa Es Pont auf einen Blick',
      type: 'Objekttyp',
      typeVal: 'Private Luxusvilla',
      capacity: 'Maximale Belegung',
      capacityVal: '10 Gäste',
      bedsBaths: 'Schlaf- & Badezimmer',
      bedsBathsVal: '6 Schlafzimmer · 4 Vollbäder',
      pool: 'Swimmingpool',
      poolVal: 'Privater 10m × 5m Pool',
      grounds: 'Grundstücksfläche',
      groundsVal: '2.200 m² privates Anwesen',
      sports: 'Sportmöglichkeiten',
      sportsVal: 'Eigener Basketballplatz',
      location: 'Lage',
      locationVal: 'Son Vida, Palma de Mallorca',
      license: 'Touristische Lizenz',
      readMore: 'Vollständige Beschreibung lesen',
      readLess: 'Weniger anzeigen',
      btn: 'Direkt buchen & sparen'
    }
  }[language];

  return (
    <section id="overview" className="py-20 bg-white text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Descriptive Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold flex items-center gap-1.5 font-sans-clean">
                <Mountain className="w-3.5 h-3.5" />
                <span>{t.overview.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2D2825] leading-tight">
                {propertyData.tagline}
              </h2>
            </div>

            {/* Intro Lead */}
            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed font-light font-sans-clean">
              {propertyData.description.summary}
            </p>

            {/* Additional Detail Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C554E] font-light leading-relaxed font-sans-clean">
              <p>{propertyData.description.longDescription[0]}</p>
              <p>{propertyData.description.longDescription[1]}</p>

              {isExpanded && (
                <div className="space-y-4 pt-1 animate-in fade-in duration-300">
                  <p>{propertyData.description.longDescription[2]}</p>
                  <p>{propertyData.description.longDescription[3]}</p>
                </div>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C59B4D] hover:text-[#A37B30] underline underline-offset-4 pt-1 cursor-pointer font-sans-clean"
              >
                <span>{isExpanded ? specsLabels.readLess : specsLabels.readMore}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Key Highlights Checklist */}
            <div className="pt-6 border-t border-[#E8E2D8]">
              <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-4">
                {t.overview.highlightsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {propertyData.description.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C554E] font-light font-sans-clean">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications Card (Pastel Premium) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] shadow-xs">
              <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-1 font-sans-clean">
                {specsLabels.title}
              </div>
              <h3 className="text-2xl font-serif-luxury font-light text-[#2D2825] mb-6">
                {specsLabels.subtitle}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans-clean">
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.type}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.typeVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.capacity}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.capacityVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.bedsBaths}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.bedsBathsVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.pool}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.poolVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.grounds}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.groundsVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.sports}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.sportsVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.location}</span>
                  <span className="font-semibold text-[#2D2825]">{specsLabels.locationVal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>{specsLabels.license}</span>
                  <span className="font-semibold text-emerald-700">{propertyData.licenseNumber}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E2D8]">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-sm block text-center cursor-pointer font-sans-clean"
                >
                  {specsLabels.btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

