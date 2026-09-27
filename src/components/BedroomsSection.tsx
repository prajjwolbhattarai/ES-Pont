import React from 'react';
import { BEDROOMS_LIST } from '../data/propertyData';
import { Bed, Users, Bath, Check, Sparkles } from 'lucide-react';

export const BedroomsSection: React.FC = () => {
  return (
    <section id="bedrooms" className="py-20 bg-white text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 font-sans-clean flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rest & Rejuvenation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            6 Bedrooms & 4 Bathrooms
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light font-sans-clean">
            Designed for deep rest and peaceful silence in residential Son Vida. Accommodating up to 10 guests across 6 private bedrooms with 4 bathrooms, independent climate control, and fresh hotel-grade linens.
          </p>
        </div>

        {/* Bedroom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BEDROOMS_LIST.map((room) => (
            <div
              key={room.id}
              className="rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF7F2] flex flex-col group hover:shadow-md transition-shadow"
            >
              {/* Bedroom Photo */}
              <div className="aspect-[4/3] overflow-hidden relative bg-[#E8E2D8]">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#2D2825]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full font-sans-clean">
                  {room.capacity}
                </div>
              </div>

              {/* Bedroom Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif-luxury font-medium text-[#2D2825] mb-1">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#C59B4D] font-medium mb-3 font-sans-clean">
                    <Bed className="w-3.5 h-3.5" />
                    <span>{room.bedType}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C554E] font-light leading-relaxed mb-4 font-sans-clean">
                    {room.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="pt-4 border-t border-[#E8E2D8] space-y-2">
                  {room.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#5C554E] font-sans-clean">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bathrooms & Capacity Highlight Card (Pastel Premium) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFEB] border border-[#E8E2D8] text-[#2D2825] grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center shrink-0 text-[#C59B4D]">
              <Bath className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-1">
                4 Full Bathrooms with Rain Showers & Vanities
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554E] font-light leading-relaxed font-sans-clean">
                Equipped with modern fittings, high-pressure hot water, organic soaps, plush bath sheets, and dedicated swimming pool towels for all guests.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:border-l md:border-[#E8E2D8] md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center shrink-0 text-[#C59B4D]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-1">
                Accommodating Groups up to 10 Guests
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554E] font-light leading-relaxed font-sans-clean">
                6 separate bedrooms offering privacy for families or retreat groups, with baby cots and children high chairs prepared complimentary upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
