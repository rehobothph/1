import React from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#0D0D0D] text-[#A09A90] border-t-2 border-[#8B7E66] pt-14 pb-10 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Main Info */}
          <div className="flex flex-col items-center text-center space-y-4">
            <ChurchLogo size="md" />

            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
                {CHURCH_INFO.mottoEn}
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                {isKn ? CHURCH_INFO.nameKn : CHURCH_INFO.nameEn}
              </h3>
              <p className="text-sm text-[#E5E1D8] mt-0.5">
                {isKn ? CHURCH_INFO.locationKn : CHURCH_INFO.locationEn}
              </p>
            </div>

            <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#8B7E66] font-bold">
              FAITH • COMMUNITY • HOPE
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs font-medium text-[#E5E1D8]">
              <a href="#home" onClick={e => scrollTo(e, '#home')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಮುಖಪುಟ' : 'Home'}
              </a>
              <a href="#about" onClick={e => scrollTo(e, '#about')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'About'}
              </a>
              <a href="#timings" onClick={e => scrollTo(e, '#timings')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಆರಾಧನಾ ಸಮಯ' : 'Timings'}
              </a>
              <a href="#online" onClick={e => scrollTo(e, '#online')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಆನ್‌ಲೈನ್ ಪ್ರಾರ್ಥನೆ' : 'Online Prayer'}
              </a>
              <a href="#pastor" onClick={e => scrollTo(e, '#pastor')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಪಾಸ್ಟರ್' : 'Pastor'}
              </a>
              <a href="#word" onClick={e => scrollTo(e, '#word')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ದೇವರ ವಾಕ್ಯ' : 'Word of God'}
              </a>
              <a href="#prayer-request" onClick={e => scrollTo(e, '#prayer-request')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ' : 'Prayer Request'}
              </a>
              <a href="#contact" onClick={e => scrollTo(e, '#contact')} className="hover:text-[#8B7E66] transition-colors">
                {isKn ? 'ಸಂಪರ್ಕ' : 'Contact'}
              </a>
            </div>

            {/* Pastor & Helpline badge - Fixed double pastor */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#E5E1D8]">
              <span>
                <strong className="text-[#8B7E66]">{isKn ? 'ಪಾಸ್ಟರ್:' : 'Pastor:'}</strong> {isKn ? CHURCH_INFO.pastorNameOnlyKn : CHURCH_INFO.pastorEn}
              </span>
              <span>•</span>
              <a href={`tel:${CHURCH_INFO.phone}`} className="hover:text-[#8B7E66] font-mono">
                {CHURCH_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${CHURCH_INFO.email}`} className="hover:text-[#8B7E66] font-mono">
                {CHURCH_INFO.email}
              </a>
            </div>
          </div>

          <div className="border-t border-[#2D3436] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A746B]">
            <p>
              © 2026 {CHURCH_INFO.nameEn} | Madapura. {isKn ? 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' : 'All rights reserved.'}
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A] border border-[#3E4547] text-[#E5E1D8] hover:text-white hover:border-[#8B7E66] text-xs transition-colors rounded-sm"
            >
              <span>{isKn ? 'ಮೇಲಕ್ಕೆ ಹೋಗಿ' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
