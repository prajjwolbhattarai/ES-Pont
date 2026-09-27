import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_OPTIONS, Language } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  isScrolled?: boolean;
  className?: string;
  direction?: 'down' | 'up';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  isScrolled = false,
  className = '',
  direction = 'down'
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium tracking-wide transition-all cursor-pointer ${
          isScrolled
            ? 'border-stone-200 bg-stone-50/80 hover:bg-stone-100 text-stone-800'
            : 'border-white/30 bg-black/30 hover:bg-black/40 text-stone-100 backdrop-blur-xs'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language / Seleccionar Idioma / Sprache wählen"
      >
        <span className="text-sm leading-none" role="img" aria-hidden="true">
          {currentOption.flag}
        </span>
        <span className="uppercase tracking-wider font-semibold text-[11px]">
          {currentOption.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
            isScrolled ? 'text-stone-500' : 'text-stone-300'
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${direction === 'up' ? 'bottom-full mb-1.5' : 'top-full mt-1.5'} right-0 w-36 rounded-xl bg-white text-[#2D2825] shadow-xl border border-[#E8E2D8] py-1 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden`}
          role="menu"
        >
          {LANGUAGE_OPTIONS.map((option) => {
            const isSelected = option.code === language;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => handleSelect(option.code)}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#FAF7F2] font-semibold text-[#C59B4D]'
                    : 'hover:bg-[#F4EFEB] text-[#2D2825]'
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm leading-none" role="img" aria-hidden="true">
                    {option.flag}
                  </span>
                  <span>{option.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#C59B4D] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
