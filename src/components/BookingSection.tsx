import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Check,
  Lock,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { PROPERTY_DATA } from '../data/propertyData';
import { useLanguage } from '../context/LanguageContext';

interface BookingSectionProps {
  onOpenContact: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenContact }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { t, perks, language } = useLanguage();

  const customAssistanceDesc = {
    en: 'Need customized dates, corporate terms, or local concierge advice for your visit to Son Vida?',
    es: '¿Necesita fechas personalizadas, estancias prolongadas o asistencia local para su visita a Son Vida?',
    de: 'Benötigen Sie individuelle Reisedaten, Firmenkonditionen oder Concierge-Tipps für Ihren Aufenthalt in Son Vida?'
  }[language];

  const licenseLabel = {
    en: 'Official Balearic Tourism License:',
    es: 'Licencia Turística Oficial de Baleares:',
    de: 'Offizielle Tourismuslizenz Balearen:'
  }[language];

  useEffect(() => {
    // Check if BookingToolIframe is already loaded or dynamically inject it
    const initBookingTool = () => {
      if (typeof (window as any).BookingToolIframe !== 'undefined') {
        const container = document.querySelector('#apartmentIframeAll');
        if (container && !container.querySelector('iframe')) {
          (window as any).BookingToolIframe.initialize({
            url: 'https://login.smoobu.com/en/booking-tool/iframe/17153',
            baseUrl: 'https://login.smoobu.com',
            target: '#apartmentIframeAll'
          });
        }
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
        script.async = true;
        script.onload = () => {
          const container = document.querySelector('#apartmentIframeAll');
          if (container && !container.querySelector('iframe')) {
            (window as any).BookingToolIframe?.initialize({
              url: 'https://login.smoobu.com/en/booking-tool/iframe/17153',
              baseUrl: 'https://login.smoobu.com',
              target: '#apartmentIframeAll'
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    // Load iframe-resizer for automatic responsive height adaptation
    const resizerScript = document.createElement('script');
    resizerScript.type = 'text/javascript';
    resizerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.16/iframeResizer.min.js';
    resizerScript.async = true;
    resizerScript.onload = () => {
      if (typeof (window as any).iFrameResize === 'function') {
        try {
          (window as any).iFrameResize(
            {
              heightCalculationMethod: 'lowestElement',
              tolerance: 10,
              waitForLoad: true,
              checkOrigin: false,
              sizeWidth: false,
              autoResize: true
            },
            '#booking-tool-iFrame-allApartments'
          );
        } catch {
          // ignore
        }
      }
    };
    document.body.appendChild(resizerScript);

    initBookingTool();

    return () => {
      try {
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
            <span>{t.booking.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-[#2D2825] tracking-tight leading-tight">
            {t.booking.heading.includes('ES PONT') ? (
              <>
                {t.booking.heading.split('ES PONT')[0]}
                <span className="font-brand-espont text-[#C59B4D] tracking-[0.08em] font-normal">ES PONT</span>
                {t.booking.heading.split('ES PONT')[1]}
              </>
            ) : (
              t.booking.heading
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C554E] mt-3 font-light max-w-2xl mx-auto leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Dynamic Reserve ES PONT Directly Box: Snugly sized relative to the date search bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xs border border-[#E8E2D8] mb-8 transition-all duration-300">
          <div className="flex items-center pb-3 mb-3 border-b border-[#F4EFEB]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2D2825]">
                {t.booking.liveBadge}
              </span>
            </div>
          </div>

          {/* Dynamic container sized relative to the date search bar */}
          <div
            id="apartmentIframeAll"
            className="smoobu-booking-tool-container w-full min-h-[130px] transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            <iframe
              id="booking-tool-iFrame-allApartments"
              title="Official Smoobu Booking Tool for ES PONT"
              src="https://booking.smoobu.com/sonvida"
              scrolling="no"
              allowFullScreen={true}
              onLoad={() => setIframeLoaded(true)}
              className="w-full min-h-[130px] border-0 rounded-xl transition-all duration-300"
              style={{ maxWidth: '100%', width: '100%', border: 0 }}
            />
          </div>

          {/* Security Guarantee Footer */}
          <div className="mt-3 pt-3 border-t border-[#F4EFEB] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C554E] font-light">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.booking.sslText}</span>
            </div>
            <span>{licenseLabel} <strong>{PROPERTY_DATA.licenseNumber}</strong></span>
          </div>
        </div>

        {/* Direct Booking Perks Box Placed Directly Under Reserve Box */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#EEDBBA]/60 flex items-center justify-center text-[#C59B4D]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#2D2825]">
              {t.perks.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {perks.map((perk) => (
              <div key={perk.title} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8]/70 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#2D2825] font-semibold mb-0.5">{perk.title}</strong>
                  <span className="text-[#5C554E] font-light">{perk.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Host Direct Inquiry */}
        <div className="p-6 rounded-2xl bg-[#F4EFEB] border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C59B4D] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#2D2825]">
                {t.booking.needAssistance}
              </h4>
              <p className="text-xs text-[#5C554E] font-light mt-0.5">
                {customAssistanceDesc}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full md:w-auto py-3 px-6 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center shadow-xs cursor-pointer"
            >
              {t.booking.inquireBtn}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
