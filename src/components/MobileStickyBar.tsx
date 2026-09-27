import React from 'react';
import { Calendar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8E2D8] px-4 py-2.5 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <div className="text-[13px] font-brand-espont text-[#C59B4D] tracking-wider font-medium">
            ES PONT
          </div>
          <div className="text-[11px] text-[#5C554E] font-light flex items-center gap-1 font-sans-clean">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.mobileBar.bestRate}</span>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider shadow-xs transition-colors whitespace-nowrap active:scale-95 cursor-pointer font-sans-clean"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.mobileBar.bookDirect}</span>
        </button>
      </div>
    </div>
  );
};
