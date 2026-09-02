import React from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { Clock, Heart, MapPin, ExternalLink } from 'lucide-react';

interface HeroVerseBannerProps {
  currentLang: Language;
}

export const HeroVerseBanner: React.FC<HeroVerseBannerProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#123F42] text-white py-16 sm:py-24 overflow-hidden border-b-4 border-[#D4AF37]">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Church Official Logo */}
        <div className="flex justify-center mb-2">
          <ChurchLogo size="xl" />
        </div>

        {/* Hero Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0F2B2A] border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-sans font-bold shadow-sm rounded-sm">
          <span>✝ REHOBOTH PRAYER HOUSE • MADAPURA</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-wide">
          {isKn ? (
            <>
              ದೇವರ ಸನ್ನಿಧಿಯಲ್ಲಿ
              <span className="block text-[#D4AF37] mt-1.5">ಹೊಸ ಆಶೀರ್ವಾದ</span>
            </>
          ) : (
            <>
              Experience New Blessings
              <span className="block text-[#D4AF37] mt-1.5">In God's Divine Presence</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#E5E1D8] font-sans font-medium max-w-2xl mx-auto tracking-wide">
          {isKn ? CHURCH_INFO.pillarKn : 'PRAYER • GOD’S WORD • WORSHIP • SERVICE'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => scrollTo('#timings')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#D4AF37] hover:bg-[#B89628] text-[#123F42] text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 rounded-sm"
          >
            <Clock className="w-4 h-4" />
            <span>{isKn ? '🙏 ಆರಾಧನಾ ಸಮಯ' : '🙏 Service Timings'}</span>
          </button>

          <button
            onClick={() => scrollTo('#prayer-request')}
            className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all border border-white/60 shadow-sm flex items-center justify-center gap-2 rounded-sm"
          >
            <Heart className="w-4 h-4 text-[#D4AF37]" />
            <span>{isKn ? '🙏 ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ' : '🙏 Prayer Request'}</span>
          </button>

          <a
            href={CHURCH_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all border border-white/60 shadow-sm flex items-center justify-center gap-2 rounded-sm"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{isKn ? '📍 ಚರ್ಚ್ ಸ್ಥಳ' : '📍 Church Location'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Pastor Tag - Fixed double pastor label */}
        <div className="pt-6 text-xs text-[#D5E4E4] font-sans">
          <span>{isKn ? 'ಪಾಸ್ಟರ್:' : 'Senior Pastor:'}</span>{' '}
          <strong className="text-white font-serif">{isKn ? CHURCH_INFO.pastorNameOnlyKn : CHURCH_INFO.pastorEn}</strong> •{' '}
          <span>{CHURCH_INFO.locationEn}</span> •{' '}
          <a href={`tel:${CHURCH_INFO.phone}`} className="text-[#D4AF37] font-mono font-bold hover:underline">
            {CHURCH_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
