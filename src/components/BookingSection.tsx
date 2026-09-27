import React, { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Clock,
  Check,
  Search,
  ChevronDown,
  X
} from 'lucide-react';
import { PROPERTY_DATA } from '../data/propertyData';

interface BookingSectionProps {
  onOpenContact: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenContact }) => {
  const today = new Date();
  const defaultArrival = new Date(today);
  defaultArrival.setDate(today.getDate() + 14); // 2 weeks ahead
  const defaultDeparture = new Date(defaultArrival);
  defaultDeparture.setDate(defaultArrival.getDate() + 7); // 7 nights default

  const formatDateYMD = (d: Date) => d.toISOString().split('T')[0];

  const [arrivalDate, setArrivalDate] = useState<string>(formatDateYMD(defaultArrival));
  const [departureDate, setDepartureDate] = useState<string>(formatDateYMD(defaultDeparture));
  const [adults, setAdults] = useState<number>(4);
  const [children, setChildren] = useState<number>(2);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<{
    arrival: string;
    departure: string;
    adults: number;
    children: number;
  }>({
    arrival: formatDateYMD(defaultArrival),
    departure: formatDateYMD(defaultDeparture),
    adults: 4,
    children: 2
  });

  const guestPickerRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Close guest picker on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (guestPickerRef.current && !guestPickerRef.current.contains(event.target as Node)) {
        setIsGuestPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate stay nights
  const arrivalObj = new Date(arrivalDate);
  const departureObj = new Date(departureDate);
  const diffTime = Math.max(0, departureObj.getTime() - arrivalObj.getTime());
  const calculatedNights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
  const totalGuests = adults + children;

  // Handle Search click to apply user queries into Smoobu booking tool
  const handleSearch = () => {
    setSearchQuery({
      arrival: arrivalDate,
      departure: departureDate,
      adults,
      children
    });

    // Smooth scroll down to the booking tool iframe inside the card
    setTimeout(() => {
      iframeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  // Build Smoobu URL with live queries
  const smoobuUrl = `https://booking.smoobu.com/sonvida?from=${searchQuery.arrival}&to=${searchQuery.departure}&adults=${searchQuery.adults}&children=${searchQuery.children}`;

  // Load Smoobu script and iframe-resizer
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
    script.async = true;
    document.body.appendChild(script);

    const resizerScript = document.createElement('script');
    resizerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.16/iframeResizer.min.js';
    resizerScript.async = true;
    resizerScript.onload = () => {
      if (typeof (window as any).iFrameResize === 'function') {
        try {
          (window as any).iFrameResize(
            {
              heightCalculationMethod: 'lowestElement',
              tolerance: 34,
              waitForLoad: true,
              checkOrigin: false
            },
            '#booking-tool-iFrame-allApartments'
          );
        } catch {
          // ignore
        }
      }
    };
    document.body.appendChild(resizerScript);

    return () => {
      try {
        document.body.removeChild(script);
        document.body.removeChild(resizerScript);
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <section id="booking" className="py-20 bg-[#FAF7F2] text-[#2D2825] relative border-t border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Consistent GFS Didot Brand Typography */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#EEDBBA]/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reservation & Real-Time Availability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-[#2D2825] tracking-tight leading-tight">
            Reserve <span className="font-brand-espont text-[#C59B4D] tracking-[0.08em] font-normal">ES PONT</span> Directly
          </h2>

          <p className="text-sm sm:text-base text-[#5C554E] mt-3 font-light max-w-2xl mx-auto leading-relaxed">
            Experience authentic Mediterranean living in Son Vida with direct host booking. Best rates guaranteed, flexible dates, and secure instant confirmation via our integrated Smoobu engine.
          </p>
        </div>

        {/* Reserve ES PONT Directly Box: Contains query inputs AND Smoobu booking iframe */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-[#E8E2D8] mb-8">
          
          {/* Query Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Check-In */}
            <div className="sm:col-span-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] hover:border-[#C59B4D] transition-colors">
              <label className="block text-[11px] uppercase tracking-wider text-[#5C554E] font-medium mb-1">
                Check-in (Anreise)
              </label>
              <input
                type="date"
                value={arrivalDate}
                min={formatDateYMD(today)}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-[#2D2825] bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check-Out */}
            <div className="sm:col-span-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] hover:border-[#C59B4D] transition-colors">
              <label className="block text-[11px] uppercase tracking-wider text-[#5C554E] font-medium mb-1">
                Check-out (Abreise)
              </label>
              <input
                type="date"
                value={departureDate}
                min={arrivalDate || formatDateYMD(today)}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-[#2D2825] bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            {/* Guests Counter */}
            <div className="sm:col-span-3 relative" ref={guestPickerRef}>
              <div
                onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
                className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] hover:border-[#C59B4D] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] uppercase tracking-wider text-[#5C554E] font-medium cursor-pointer">
                    Guests ({totalGuests}/10)
                  </label>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#5C554E] transition-transform ${isGuestPickerOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#2D2825] truncate mt-1">
                  {adults} {adults === 1 ? 'Adult' : 'Adults'} · {children} {children === 1 ? 'Child' : 'Kids'}
                </div>
              </div>

              {/* Guest Customizer Popover Dialog */}
              {isGuestPickerOpen && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-80 mt-2 p-4 bg-white rounded-2xl border border-[#E8E2D8] shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4EFEB]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2D2825]">
                      Select Guests (Max 10)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsGuestPickerOpen(false)}
                      className="p-1 rounded-md text-[#5C554E] hover:bg-[#F4EFEB] cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Adults Stepper */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#2D2825]">Adults</div>
                        <div className="text-[11px] text-[#5C554E] font-light">Age 13+</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          disabled={adults <= 1}
                          className="w-8 h-8 rounded-full border border-[#E8E2D8] bg-[#FAF7F2] hover:bg-[#E8E2D8] disabled:opacity-40 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Decrease adults"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(Math.min(10 - children, adults + 1))}
                          disabled={adults + children >= 10}
                          className="w-8 h-8 rounded-full border border-[#E8E2D8] bg-[#FAF7F2] hover:bg-[#E8E2D8] disabled:opacity-40 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Increase adults"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children Stepper */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#F4EFEB]">
                      <div>
                        <div className="text-sm font-semibold text-[#2D2825]">Children</div>
                        <div className="text-[11px] text-[#5C554E] font-light">Ages 2–12 (Cots available)</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          disabled={children <= 0}
                          className="w-8 h-8 rounded-full border border-[#E8E2D8] bg-[#FAF7F2] hover:bg-[#E8E2D8] disabled:opacity-40 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Decrease children"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(Math.min(10 - adults, children + 1))}
                          disabled={adults + children >= 10}
                          className="w-8 h-8 rounded-full border border-[#E8E2D8] bg-[#FAF7F2] hover:bg-[#E8E2D8] disabled:opacity-40 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Increase children"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsGuestPickerOpen(false)}
                      className="w-full py-2 bg-[#2D2825] hover:bg-[#3D3733] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Apply Guests
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search CTA Button */}
            <div className="sm:col-span-3">
              <button
                type="button"
                onClick={handleSearch}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-2 text-center cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-[#F4EFEB] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C554E] font-light px-1">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C59B4D]" />
              <span>Selected stay: <strong>{calculatedNights} nights</strong> ({searchQuery.arrival} → {searchQuery.departure}) · {totalGuests} guests</span>
            </div>
            <a
              href={`https://booking.smoobu.com/sonvida?from=${searchQuery.arrival}&to=${searchQuery.departure}&adults=${searchQuery.adults}&children=${searchQuery.children}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C59B4D] hover:text-[#B48B3D] transition-colors"
            >
              <span>Open booking window</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* User Requested Smoobu Booking Tool:
              <div id="apartmentIframeAll">
              Inside Reserve ES PONT Directly box, filled with user's queries
          */}
          <div ref={iframeContainerRef} className="mt-6 pt-6 border-t border-[#E8E2D8]">
            <div className="smoobu-booking-tool-container w-full" id="apartmentIframeAll">
              <iframe
                id="booking-tool-iFrame-allApartments"
                title="Official Smoobu Booking Tool for ES PONT"
                src={smoobuUrl}
                scrolling="no"
                allowTransparency={true}
                allowFullScreen={true}
                className="w-full min-h-[580px] border-0 rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Security Guarantee Footer inside Reserve Box */}
            <div className="mt-4 pt-4 border-t border-[#F4EFEB] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C554E] font-light">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit SSL encrypted connection · Bank-level checkout security</span>
              </div>
              <span>Official Balearic Tourism License: <strong>{PROPERTY_DATA.licenseNumber}</strong></span>
            </div>
          </div>
        </div>

        {/* Direct Booking Perks Box Placed Directly Under Date Selection Box */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#EEDBBA]/60 flex items-center justify-center text-[#C59B4D]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#2D2825]">
              Direct Booking Perks (Direktbucher-Vorteile)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8]/70 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2D2825] font-semibold mb-0.5">Best Rate Guaranteed</strong>
                <span className="text-[#5C554E] font-light">100% direct host pricing without intermediary portal markups.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8]/70 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2D2825] font-semibold mb-0.5">Contactless Check-In</strong>
                <span className="text-[#5C554E] font-light">Smart encrypted keybox code sent before arrival or host welcome.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8]/70 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2D2825] font-semibold mb-0.5">Direct Host Support</strong>
                <span className="text-[#5C554E] font-light">Immediate personal contact for inquiries, concierge & recommendations.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8]/70 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2D2825] font-semibold mb-0.5">Flexible Cancellation</strong>
                <span className="text-[#5C554E] font-light">Full 100% refund up to 14 days prior to your arrival date.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Host Direct Inquiry (WhatsApp completely removed as requested) */}
        <div className="p-6 rounded-2xl bg-[#F4EFEB] border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C59B4D] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#2D2825]">
                Questions About Dates or Custom Stays?
              </h4>
              <p className="text-xs text-[#5C554E] font-light mt-0.5">
                Need customized dates, corporate terms, or local concierge advice for your visit to Son Vida?
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full md:w-auto py-3 px-6 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center shadow-xs cursor-pointer"
            >
              Send Direct Inquiry Form
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
