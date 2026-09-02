import React, { useState } from 'react';
import { Language } from '../types';
import { FAQ_DATA, CHURCH_INFO } from '../data/churchData';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B7E66]/10 text-[#8B7E66] text-xs font-sans font-bold uppercase tracking-widest rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKn ? 'ಸಹಾಯಕ ಮಾಹಿತಿ & ಪ್ರಶ್ನೋತ್ತರ' : 'VISITOR GUIDE & FAQ'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            {isKn ? 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ' : 'Frequently Asked Questions'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#E5E1D8] rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#123F42] hover:bg-[#FAF9F6] transition-colors"
                >
                  <span>{isKn ? faq.questionKn : faq.questionEn}</span>
                  <div className="shrink-0 p-1 rounded-full bg-[#FAF9F6] text-[#8B7E66]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#444] font-sans leading-relaxed border-t border-[#FAF9F6] bg-neutral-50/50">
                    <p>{isKn ? faq.answerKn : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 p-6 bg-white border border-[#E5E1D8] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-serif font-bold text-[#123F42]">
              {isKn ? 'ಇನ್ನೇನಾದರೂ ಮಾಹಿತಿ ಬೇಕೇ?' : 'Have more questions?'}
            </h4>
            <p className="text-xs sm:text-sm text-[#666] font-sans">
              {isKn
                ? 'ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ ಅವರನ್ನು ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ.'
                : 'Feel free to contact Pastor Ramesh C directly for personalized help.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CHURCH_INFO.phone}`}
              className="px-4 py-2 bg-[#123F42] hover:bg-[#0E3234] text-white text-xs font-sans font-bold rounded flex items-center gap-2 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{CHURCH_INFO.phone}</span>
            </a>

            <a
              href={CHURCH_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
