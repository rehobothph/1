import React from 'react';
import { Language } from '../types';
import { WORD_OF_GOD } from '../data/churchData';

interface WordOfGodSectionProps {
  currentLang: Language;
}

export const WordOfGodSection: React.FC<WordOfGodSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  return (
    <section id="word" className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block mb-2">
          WORD OF GOD • ದೇವರ ವಾಕ್ಯ
        </span>

        <div className="bg-white border-2 border-[#8B7E66]/40 p-8 sm:p-12 shadow-sm relative">
          <div className="w-10 h-10 border border-[#8B7E66] bg-[#FAF9F6] text-[#8B7E66] flex items-center justify-center mx-auto mb-6">
            <span className="font-serif font-bold text-xl">✝</span>
          </div>

          {/* Verse Text */}
          <blockquote className="text-xl sm:text-3xl font-serif text-[#1A1A1A] leading-relaxed italic mb-4">
            {isKn ? WORD_OF_GOD.textKn : WORD_OF_GOD.textEn}
          </blockquote>

          {/* Reference */}
          <p className="text-sm font-sans font-bold uppercase tracking-widest text-[#8B7E66] mb-4">
            — {isKn ? WORD_OF_GOD.referenceKn : WORD_OF_GOD.referenceEn}
          </p>

          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mb-5"></div>

          <p className="text-sm text-[#636E72] font-sans max-w-lg mx-auto">
            {isKn ? WORD_OF_GOD.instructionKn : WORD_OF_GOD.instructionEn}
          </p>
        </div>
      </div>
    </section>
  );
};
