import React, { useState } from 'react';
import { Language } from '../types';
import { DAILY_PROMISES, CHURCH_INFO } from '../data/churchData';
import { Sparkles, ArrowRight, ArrowLeft, Share2, Copy, Check, BookOpen, Volume2 } from 'lucide-react';

interface DailyPromiseCardProps {
  currentLang: Language;
}

export const DailyPromiseCard: React.FC<DailyPromiseCardProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentPromise = DAILY_PROMISES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_PROMISES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DAILY_PROMISES.length) % DAILY_PROMISES.length);
  };

  const handleCopy = () => {
    const text = isKn
      ? `✝ ದಿನದ ದೈವಿಕ ವಾಗ್ದಾನ ✝\n${currentPromise.referenceKn}\n${currentPromise.verseKn}\n\n— ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಮಾದಾಪುರ\nಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ: +91 7353609920`
      : `✝ Daily Divine Promise ✝\n${currentPromise.referenceEn}\n${currentPromise.verseEn}\n\n— Rehoboth Prayer House, Madapura\nPr. Ramesh C: +91 7353609920`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShareWhatsApp = () => {
    const text = isKn
      ? `✝ *ದಿನದ ದೈವಿಕ ವಾಗ್ದಾನ* ✝\n\n*${currentPromise.referenceKn}*\n${currentPromise.verseKn}\n\n_${currentPromise.encouragementKn}_\n\n🕊️ *ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಮಾದಾಪುರ*\nಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ (+91 7353609920)`
      : `✝ *Daily Divine Promise* ✝\n\n*${currentPromise.referenceEn}*\n${currentPromise.verseEn}\n\n_${currentPromise.encouragementEn}_\n\n🕊️ *Rehoboth Prayer House, Madapura*\nPr. Ramesh C (+91 7353609920)`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="daily-promise" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F3EFE6] border-b border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123F42]/10 border border-[#123F42]/20 text-[#123F42] text-xs uppercase font-sans font-bold tracking-widest rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKn ? 'ದಿನದ ದೇವರ ವಾಗ್ದಾನ' : 'DAILY BIBLE PROMISE'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-3">
            {isKn ? 'ನಿಮಗಾಗಿ ಇಂದಿನ ಜೀವವಾಕ್ಯ' : 'Today’s Word of Blessing'}
          </h2>
          <p className="text-sm sm:text-base text-[#666] font-sans mt-2 max-w-xl mx-auto">
            {isKn
              ? 'ಪ್ರತಿದಿನ ದೇವರ ವಾಗ್ದಾನವನ್ನು ನಿಮ್ಮ ಹೃದಯದಲ್ಲಿ ಸ್ವೀಕರಿಸಿ, ಆಶೀರ್ವಾದವನ್ನು ಅನುಭವಿಸಿ.'
              : 'Claim this scripture promise in faith today for your family, peace, and spiritual victory.'}
          </p>
        </div>

        {/* Promise Card */}
        <div className="relative bg-white border-2 border-[#D4AF37]/60 rounded-xl shadow-lg p-6 sm:p-10 overflow-hidden">
          {/* Decorative Corner Watermark */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between gap-4 border-b border-[#E5E1D8] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#123F42] text-[#D4AF37] text-xs font-serif font-bold rounded">
                {isKn ? currentPromise.referenceKn : currentPromise.referenceEn}
              </span>
              <span className="text-xs font-sans font-semibold text-[#8B7E66] uppercase tracking-wider hidden sm:inline">
                • {isKn ? currentPromise.themeKn : currentPromise.themeEn}
              </span>
            </div>

            <div className="text-xs font-sans text-[#999]">
              {currentIndex + 1} / {DAILY_PROMISES.length}
            </div>
          </div>

          {/* Verse Text */}
          <blockquote className="my-4 text-center sm:text-left">
            <p className="text-lg sm:text-2xl font-serif font-bold text-[#123F42] leading-relaxed italic">
              {isKn ? currentPromise.verseKn : currentPromise.verseEn}
            </p>
            <p className="text-xs sm:text-sm text-[#8B7E66] font-sans font-medium mt-4 bg-[#FAF9F6] p-3 rounded border-l-4 border-[#D4AF37]">
              💡 {isKn ? currentPromise.encouragementKn : currentPromise.encouragementEn}
            </p>
          </blockquote>

          {/* Actions & Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E5E1D8] mt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-[#FAF9F6] hover:bg-[#EAE5D9] text-[#123F42] border border-[#D5CFBF] rounded transition-colors"
                title="Previous Promise"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 bg-[#FAF9F6] hover:bg-[#EAE5D9] text-[#123F42] border border-[#D5CFBF] rounded transition-colors"
                title="Next Promise"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="px-3 py-2 bg-[#123F42] hover:bg-[#0E3234] text-white text-xs font-sans font-bold rounded transition-colors"
              >
                {isKn ? 'ಇನ್ನೊಂದು ವಾಗ್ದಾನ' : 'Next Promise'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-50 text-[#123F42] text-xs font-sans font-bold border border-[#D5CFBF] rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600">{isKn ? 'ಕಾಪಿ ಆಗಿದೆ!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>{isKn ? 'ವಾಕ್ಯ ಕಾಪಿ ಮಾಡಿ' : 'Copy'}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-sans font-bold rounded transition-colors shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <a
                href={CHURCH_INFO.kannadaBibleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-[#FAF9F6] hover:bg-[#EAE5D9] text-[#8B7E66] text-xs font-sans font-bold border border-[#D5CFBF] rounded transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isKn ? 'ಸಂಪೂರ್ಣ ಬೈಬಲ್' : 'Read Bible'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
