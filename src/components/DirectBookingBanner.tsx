import React from 'react';
import { Tag, ShieldCheck, MessageSquare, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DirectBookingBannerProps {
  onOpenBooking: () => void;
}

export const DirectBookingBanner: React.FC<DirectBookingBannerProps> = ({ onOpenBooking }) => {
  const { t, perks } = useLanguage();

  const icons = [
    <Tag className="w-5 h-5 text-[#B68D40]" key="tag" />,
    <ShieldCheck className="w-5 h-5 text-[#B68D40]" key="shield" />,
    <MessageSquare className="w-5 h-5 text-[#B68D40]" key="msg" />,
    <RefreshCw className="w-5 h-5 text-[#B68D40]" key="refresh" />
  ];

  return (
    <section className="bg-[#FAF8F5] text-stone-900 py-14 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-200/80 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B68D40] font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.perks.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-stone-900">
              {t.perks.title}
            </h2>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A37B30] hover:text-[#845E1B] transition-colors group cursor-pointer"
          >
            <span>{t.nav.bookDirect}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <div
              key={perk.title}
              className="p-6 rounded-2xl bg-white border border-stone-200/70 shadow-xs hover:shadow-md hover:border-[#D8B475]/60 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-base font-semibold text-stone-900 mb-2">{perk.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


