import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const { faqs, t, language } = useLanguage();

  const toggle = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  const bannerText = {
    en: {
      title: 'Have a question about ES Pont not answered here?',
      desc: 'We are always here to help with dates, local recommendations, or special arrival requests.',
      btn: 'Contact Host Directly'
    },
    es: {
      title: '¿Tiene alguna pregunta sobre ES Pont que no aparezca aquí?',
      desc: 'Estamos siempre disponibles para resolver dudas sobre fechas, recomendaciones locales o peticiones especiales.',
      btn: 'Contactar con el Anfitrión'
    },
    de: {
      title: 'Haben Sie eine Frage zu ES Pont, die hier nicht beantwortet wurde?',
      desc: 'Wir stehen Ihnen jederzeit für Fragen zu Terminen, Ausflugstipps oder besonderen Wünschen zur Verfügung.',
      btn: 'Gastgeber direkt kontaktieren'
    }
  }[language];

  return (
    <section id="faq" className="py-20 bg-[#FAF7F2] text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 inline-flex items-center gap-1.5 font-sans-clean">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            {t.faq.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light font-sans-clean">
            {t.faq.subtitle}
          </p>
        </div>

        {/* 2 columns on medium/wide screens, 1 column on narrow screens as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.q}
                className="border border-[#E8E2D8] rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-start justify-between gap-3 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#2D2825] font-sans-clean leading-snug">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full text-[#5C554E] shrink-0 mt-0.5">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#C59B4D]" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-white border-t border-[#F4EFEB] text-xs sm:text-sm text-[#5C554E] font-light leading-relaxed animate-in fade-in duration-200 font-sans-clean">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F4EFEB] border border-[#E8E2D8] text-center max-w-2xl mx-auto">
          <h4 className="text-base font-serif-luxury font-medium text-[#2D2825] mb-1">
            {bannerText.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#5C554E] font-light mb-4 font-sans-clean">
            {bannerText.desc}
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer font-sans-clean"
          >
            {bannerText.btn}
          </button>
        </div>
      </div>
    </section>
  );
};
