import React, { useState } from 'react';
import { PROPERTY_DATA } from '../data/propertyData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Compass, Clock, Waves, Mountain, Landmark } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { t, nearbyAttractions, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'beach' | 'village' | 'nature'>('all');

  const tabLabels = {
    all: t.amenities.filterAll,
    beach: language === 'es' ? 'Playas' : language === 'de' ? 'Strände' : 'Beaches',
    village: language === 'es' ? 'Palma y Cultura' : language === 'de' ? 'Palma & Kultur' : 'Palma & Culture',
    nature: language === 'es' ? 'Golf y Naturaleza' : language === 'de' ? 'Golf & Natur' : 'Golf & Nature'
  };

  const proximityFooter = {
    en: '700m from Son Vida Centre · 10 min to Palma · 15 min to Airport (PMI)',
    es: 'A 700 m del centro de Son Vida · 10 min de Palma · 15 min del aeropuerto (PMI)',
    de: '700 m vom Zentrum von Son Vida · 10 Min. nach Palma · 15 Min. zum Flughafen (PMI)'
  }[language];

  const filteredAttractions = activeTab === 'all'
    ? nearbyAttractions
    : nearbyAttractions.filter((a) => a.category === activeTab);

  return (
    <section id="location" className="py-20 bg-white text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 flex items-center gap-1.5 font-sans-clean">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            {t.location.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light font-sans-clean">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Left Column: Interactive Map Preview Card (Pastel Premium) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF7F2] shadow-xs flex flex-col">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E8E2D8] text-[#2D2825] flex items-center justify-between font-sans-clean">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C59B4D]" />
                <span className="text-xs sm:text-sm font-semibold">
                  {PROPERTY_DATA.location.fullAddress}
                </span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "Carrer Marola 4, 07013 Son Vida, Spain"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C59B4D] hover:text-[#A37B30] flex items-center gap-1 font-semibold uppercase tracking-wider"
              >
                <span>{t.location.directionsBtn}</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps View centered on Carrer Marola 4, 07013 Son Vida, Spain */}
            <div className="relative aspect-[16/10] w-full bg-[#E8E2D8]">
              <iframe
                title="Map of Villa Es Pont at Carrer Marola 4, 07013 Son Vida, Spain"
                src="https://maps.google.com/maps?q=Carrer%20Marola%204%2C%2007013%20Son%20Vida%2C%20Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-white border-t border-[#E8E2D8] text-xs text-[#5C554E] flex flex-wrap items-center justify-between gap-2 font-sans-clean">
              <span className="font-medium text-[#2D2825]">
                GPS: {PROPERTY_DATA.location.coordinates.lat.toFixed(4)}° N, {PROPERTY_DATA.location.coordinates.lng.toFixed(4)}° E
              </span>
              <span>{proximityFooter}</span>
            </div>
          </div>

          {/* Right Column: Distances & Quick Travel Times */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
              <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825]">
                {t.location.nearbyHighlightsTitle}
              </h3>
              <div className="flex items-center gap-1 font-sans-clean">
                {(['all', 'beach', 'village', 'nature'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#2D2825] text-white font-medium shadow-xs'
                        : 'text-[#5C554E] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredAttractions.map((spot) => (
                <div
                  key={spot.name}
                  className="p-4 rounded-xl border border-[#E8E2D8] bg-[#FAF7F2] hover:bg-white hover:border-[#C59B4D] transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3 font-sans-clean">
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2825]">{spot.name}</h4>
                      <p className="text-xs text-[#5C554E] font-light mt-1">
                        {spot.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#845E1B] bg-[#FAF5EC] border border-[#EEDBBA]/60 px-2 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-[#C59B4D]" />
                        <span>{spot.driveTime}</span>
                      </div>
                      <div className="text-[11px] text-[#5C554E] mt-1 font-mono">{spot.distance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local Highlights Trio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D8]">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 text-[#C59B4D] flex items-center justify-center mb-3">
              <Landmark className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-1">
              {language === 'es' ? 'Golf y Enclave de Son Vida' : language === 'de' ? 'Son Vida Golf & Wohnlage' : 'Son Vida Golf & Enclave'}
            </h4>
            <p className="text-xs text-[#5C554E] font-light leading-relaxed font-sans-clean">
              {language === 'es'
                ? 'Situada a solo 700 m del centro de Son Vida y a menos de 3 km de los campos de golf Son Vida, Son Muntaner y Son Quint.'
                : language === 'de'
                ? 'Nur 700 m vom Zentrum von Son Vida entfernt und im Umkreis von 3 km zu den Golfplätzen Son Vida, Son Muntaner und Son Quint.'
                : 'Located only 700m from Son Vida centre and within 3km of Son Vida Golf, Son Muntaner, and Son Quint courses.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 text-[#C59B4D] flex items-center justify-center mb-3">
              <Waves className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-1">
              {language === 'es' ? 'Playas y Bahía de Palma' : language === 'de' ? 'Strände & Bucht von Palma' : 'Beaches & Palma Bay'}
            </h4>
            <p className="text-xs text-[#5C554E] font-light leading-relaxed font-sans-clean">
              {language === 'es'
                ? 'A solo 12 minutos en coche de las aguas turquesas de Cala Major, Illetas Beach Club y el paseo marítimo de Palma.'
                : language === 'de'
                ? 'Nur 12 Autominuten zum türkisfarbenen Wasser von Cala Major, Illetas Beach Club und der Uferpromenade von Palma.'
                : 'A short 12-minute drive reaches the turquoise waters of Cala Major, Illetas Beach Club, and the scenic Palma promenade.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 text-[#C59B4D] flex items-center justify-center mb-3">
              <Mountain className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-1">
              {language === 'es' ? 'Casco Antiguo y Catedral' : language === 'de' ? 'Altstadt & Kathedralenblick' : 'Old Town & Cathedral Views'}
            </h4>
            <p className="text-xs text-[#5C554E] font-light leading-relaxed font-sans-clean">
              {language === 'es'
                ? 'A tan solo 10 minutos de la emblemática Catedral de Santa María (La Seu), restaurantes con estrella Michelin y tiendas de lujo en el Paseo del Borne.'
                : language === 'de'
                ? 'Nur 10 Minuten zu Palmas gotischer Kathedrale La Seu, Sternegastronomie, Luxusboutiquen am Passeig del Born und Yachthäfen.'
                : "Just 10 minutes to Palma's iconic Gothic Cathedral La Seu, Michelin-starred dining, luxury boutiques on Passeig del Born, and marina."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
