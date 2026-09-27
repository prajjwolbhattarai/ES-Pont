import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Check, FileText, Ban, Sparkles } from 'lucide-react';

export const HouseRulesSection: React.FC = () => {
  const { t, propertyData } = useLanguage();

  return (
    <section className="py-16 bg-[#FAF7F2] text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 font-sans-clean flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.rules.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            {t.rules.heading}
          </h2>
          <p className="text-sm text-[#5C554E] mt-1 font-light font-sans-clean">
            {t.rules.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Check-In / Check-Out */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 flex items-center justify-center text-[#C59B4D] mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-3">
              {t.rules.arrivalTitle}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5C554E] font-light font-sans-clean">
              <div>
                <span className="font-semibold text-[#2D2825] block">{t.rules.checkinLabel}</span>
                <span>{propertyData.policies.checkIn}</span>
              </div>
              <div className="pt-2 border-t border-[#F4EFEB]">
                <span className="font-semibold text-[#2D2825] block">{t.rules.checkoutLabel}</span>
                <span>{propertyData.policies.checkOut}</span>
              </div>
              <div className="pt-2 border-t border-[#F4EFEB] text-[11px] text-[#5C554E]">
                {t.rules.earlyCheckinNote}
              </div>
            </div>
          </div>

          {/* House Rules */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 flex items-center justify-center text-[#C59B4D] mb-4">
              <Ban className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-3">
              {t.rules.guidelinesTitle}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5C554E] font-light font-sans-clean">
              {propertyData.policies.rules.map((rule) => (
                <li key={rule} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C59B4D] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fees & Deposit */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#EADBBD]/50 flex items-center justify-center text-[#C59B4D] mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-luxury font-medium text-[#2D2825] mb-3">
              {t.rules.depositsTitle}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5C554E] font-light font-sans-clean">
              <div>
                <span className="font-semibold text-[#2D2825] block">{t.rules.depositLabel}</span>
                <span>{propertyData.policies.deposit}</span>
              </div>
              <div className="pt-2 border-t border-[#F4EFEB]">
                <span className="font-semibold text-[#2D2825] block">{t.rules.taxLabel}</span>
                <span>{propertyData.policies.ecoTax}</span>
              </div>
              <div className="pt-2 border-t border-[#F4EFEB]">
                <span className="font-semibold text-[#2D2825] block">{t.rules.cancellationLabel}</span>
                <span>{propertyData.policies.cancellation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
