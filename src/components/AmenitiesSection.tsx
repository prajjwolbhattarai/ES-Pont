import React, { useState } from 'react';
import { AMENITIES_LIST } from '../data/propertyData';
import {
  Waves,
  Sun,
  Utensils,
  Flame,
  Car,
  Wind,
  Sparkles,
  ChefHat,
  Coffee,
  Wifi,
  Tv,
  Bed,
  Bath,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  Key,
  Activity,
  UserCheck,
  Landmark,
  LucideIcon
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const iconMap: Record<string, LucideIcon> = {
    Waves,
    Sun,
    Utensils,
    Flame,
    Car,
    Wind,
    Sparkles,
    ChefHat,
    Coffee,
    Wifi,
    Tv,
    Bed,
    Bath,
    ShieldCheck,
    CheckCircle,
    Briefcase,
    Key,
    Activity,
    UserCheck,
    Landmark
  };

  const categories = [
    { id: 'all', label: 'All Amenities' },
    { id: 'views', label: 'Scenic Views' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'bedroom_laundry', label: 'Bedroom & Laundry' },
    { id: 'heating_cooling', label: 'Heating & Cooling' },
    { id: 'kitchen_dining', label: 'Kitchen & Dining' },
    { id: 'parking_facilities', label: 'Parking & Facilities' },
    { id: 'home_safety', label: 'Home Safety' },
    { id: 'services', label: 'Services' }
  ];

  const filteredAmenities = selectedCategory === 'all'
    ? AMENITIES_LIST
    : AMENITIES_LIST.filter((a) => a.category === selectedCategory);

  // Initial display: 6 items, expands to all
  const visibleAmenities = isExpanded ? filteredAmenities : filteredAmenities.slice(0, 6);

  return (
    <section id="amenities" className="py-20 bg-[#FAF7F2] text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact requested title */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 font-sans-clean flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Villa Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            What this place offers
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light font-sans-clean">
            Complete amenity specifications for ES Pont in Son Vida.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer font-sans-clean ${
                selectedCategory === cat.id
                  ? 'bg-[#2D2825] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F4EFEB] text-[#5C554E] border border-[#E8E2D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visibleAmenities.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || CheckCircle;
            return (
              <div
                key={amenity.id}
                className="p-5 rounded-2xl bg-white border border-[#E8E2D8] transition-all duration-200 hover:shadow-sm flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 flex items-center justify-center shrink-0 text-[#C59B4D]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#2D2825] font-sans-clean truncate">
                      {amenity.name}
                    </h3>
                    {amenity.categoryTitle && (
                      <span className="text-[10px] text-[#C59B4D] uppercase tracking-wider font-sans-clean shrink-0">
                        {amenity.categoryTitle}
                      </span>
                    )}
                  </div>
                  {amenity.description && (
                    <p className="text-xs text-[#5C554E] mt-1 font-light leading-relaxed font-sans-clean">
                      {amenity.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E8E2D8] bg-white hover:bg-[#F4EFEB] text-[#2D2825] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-sm cursor-pointer font-sans-clean"
          >
            <span>
              {isExpanded
                ? 'Show fewer amenities'
                : `Show all amenities (${filteredAmenities.length})`}
            </span>
          </button>
        </div>

        {/* Safety & Care Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EFEB] border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C59B4D] shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-[#2D2825] font-sans-clean">
                Smoke Alarms & Carbon Monoxide Alarms Installed
              </h4>
              <p className="text-xs text-[#5C554E] font-light mt-0.5 font-sans-clean">
                Outside areas and entryway are monitored by exterior security cameras for guest safety.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#C59B4D] shrink-0 uppercase tracking-wider font-sans-clean">
            100% Certified Safe Stay
          </span>
        </div>
      </div>
    </section>
  );
};
