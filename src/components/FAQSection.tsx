import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

interface FAQItem {
  q: string;
  a: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  // Exact FAQs with "ES Pont" as requested
  const requestedFaqs: FAQItem[] = [
    {
      q: "How many guests can sleep at ES Pont?",
      a: "ES Pont can accommodate the following group size: 10 guests"
    },
    {
      q: "Is there a private pool available to guests staying at ES Pont?",
      a: "Yes, there is a private pool. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "Does ES Pont have a pool?",
      a: "Yes, this hotel has a pool. Find out the details about the pool and other facilities on this page."
    },
    {
      q: "Does ES Pont have a balcony?",
      a: "Yes, there are options at this property that have a balcony. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "Does ES Pont have a terrace?",
      a: "Yes, there are options at this property that have a terrace. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "What are the check-in and check-out times at ES Pont?",
      a: "Check-in at ES Pont is from 15:00, and check-out is until 11:00."
    },
    {
      q: "How many bedrooms does ES Pont have?",
      a: "ES Pont has the following number of bedrooms: 6 bedrooms"
    },
    {
      q: "How much does it cost to stay at ES Pont?",
      a: "The prices at ES Pont may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates."
    },
    {
      q: "What is there to do at ES Pont?",
      a: "ES Pont offers the following activities / services (charges may apply): Cycling, Hiking, Tennis court, Golf course (within 3 km), Fitness, Swimming pool"
    },
    {
      q: "How far is ES Pont from the centre of Son Vida?",
      a: "ES Pont is 700 m from the centre of Son Vida."
    },
    {
      q: "Is ES Pont popular with families?",
      a: "Yes, ES Pont is popular with guests booking family stays."
    }
  ];

  const toggle = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF7F2] text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 inline-flex items-center gap-1.5 font-sans-clean">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-[#2D2825] tracking-tight">
            ES Pont
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light font-sans-clean">
            Frequently asked questions about ES Pont in Son Vida.
          </p>
        </div>

        {/* 2 columns on medium/wide screens, 1 column on narrow screens as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {requestedFaqs.map((faq, index) => {
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
            Have a question about ES Pont not answered here?
          </h4>
          <p className="text-xs sm:text-sm text-[#5C554E] font-light mb-4 font-sans-clean">
            We are always here to help with dates, local recommendations, or special arrival requests.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer font-sans-clean"
          >
            Contact Host Directly
          </button>
        </div>
      </div>
    </section>
  );
};
