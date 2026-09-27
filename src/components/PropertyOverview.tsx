import React, { useState } from 'react';
import { PROPERTY_DATA } from '../data/propertyData';
import { Check, ShieldCheck, ChevronDown, ChevronUp, Home, Compass, Trees, Mountain } from 'lucide-react';

interface PropertyOverviewProps {
  onOpenBooking: () => void;
}

export const PropertyOverview: React.FC<PropertyOverviewProps> = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="overview" className="py-20 bg-white text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Descriptive Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold flex items-center gap-1.5 font-sans-clean">
                <Mountain className="w-3.5 h-3.5" />
                <span>The Estate & Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2D2825] leading-tight">
                Private Spanish-Style Villa in Son Vida with Panoramic Palma Bay Views
              </h2>
            </div>

            {/* Intro Lead */}
            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed font-light font-sans-clean">
              {PROPERTY_DATA.description.summary}
            </p>

            {/* Additional Detail Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C554E] font-light leading-relaxed font-sans-clean">
              <p>{PROPERTY_DATA.description.longDescription[0]}</p>
              <p>{PROPERTY_DATA.description.longDescription[1]}</p>

              {isExpanded && (
                <div className="space-y-4 pt-1 animate-in fade-in duration-300">
                  <p>{PROPERTY_DATA.description.longDescription[2]}</p>
                  <p>{PROPERTY_DATA.description.longDescription[3]}</p>
                </div>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C59B4D] hover:text-[#A37B30] underline underline-offset-4 pt-1 cursor-pointer font-sans-clean"
              >
                <span>{isExpanded ? 'Read less' : 'Read full property description'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Key Highlights Checklist */}
            <div className="pt-6 border-t border-[#E8E2D8]">
              <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-4">
                Key Highlights of Villa Es Pont
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROPERTY_DATA.description.highlights.map((highlight) => (
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
                Property Specifications
              </div>
              <h3 className="text-2xl font-serif-luxury font-light text-[#2D2825] mb-6">
                Villa Es Pont at a Glance
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans-clean">
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Property Type</span>
                  <span className="font-semibold text-[#2D2825]">Private Luxury Villa</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Maximum Capacity</span>
                  <span className="font-semibold text-[#2D2825]">10 Guests</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Bedrooms & Bathrooms</span>
                  <span className="font-semibold text-[#2D2825]">6 Bedrooms · 4 Full Bathrooms</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Swimming Pool</span>
                  <span className="font-semibold text-[#2D2825]">10m × 5m Private Pool</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Private Grounds</span>
                  <span className="font-semibold text-[#2D2825]">2,200 m² Secluded Estate</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Sports Facilities</span>
                  <span className="font-semibold text-[#2D2825]">Private Basketball Court</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Location</span>
                  <span className="font-semibold text-[#2D2825]">Son Vida, Palma de Mallorca</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8E2D8] text-[#5C554E]">
                  <span>Tourism License</span>
                  <span className="font-semibold text-emerald-700">{PROPERTY_DATA.licenseNumber}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E2D8]">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-sm block text-center cursor-pointer font-sans-clean"
                >
                  Reserve Direct & Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
