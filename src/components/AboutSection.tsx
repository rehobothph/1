import React from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            {isKn ? 'ಸ್ವಾಗತ • WELCOME' : 'WELCOME TO OUR SANCTUARY'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
            {isKn ? 'ನಮ್ಮ ಪ್ರೇಯರ್ ಹೌಸ್‌ಗೆ ಸ್ವಾಗತ' : 'Welcome to Rehoboth Prayer House'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#2D3436] leading-relaxed font-sans">
              {isKn ? CHURCH_INFO.aboutTextKn : CHURCH_INFO.aboutTextEn}
            </p>

            <div className="p-4 sm:p-5 bg-[#FAF9F6] border border-[#E5E1D8] flex items-center justify-around text-center text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#8B7E66]">
              <span>FAITH</span>
              <span className="text-[#A09A90]">•</span>
              <span>COMMUNITY</span>
              <span className="text-[#A09A90]">•</span>
              <span>HOPE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E1D8]">
                <div className="w-8 h-8 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">
                  {isKn ? 'ವಾಕ್ಯ ಆಧಾರಿತ ಬೋಧನೆ' : 'Biblical Foundation'}
                </h4>
                <p className="text-xs text-[#636E72] leading-relaxed">
                  {isKn ? 'ದೇವರ ಸತ್ಯವಾಕ್ಯ ಮತ್ತು ಪವಿತ್ರಾತ್ಮನ ಮಾರ್ಗದರ್ಶನ' : 'Grounded in biblical truth, prayer, and the love of Christ.'}
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E1D8]">
                <div className="w-8 h-8 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">
                  {isKn ? 'ವಿಜ್ಞಾಪನಾ ಪ್ರಾರ್ಥನೆ' : 'Intercessory Prayer'}
                </h4>
                <p className="text-xs text-[#636E72] leading-relaxed">
                  {isKn ? 'ಪ್ರತಿಯೊಬ್ಬರ ಕಷ್ಟ, ರೋಗ ಮತ್ತು ಸಮಸ್ಯೆಗಳಿಗಾಗಿ ಪ್ರಾರ್ಥನೆ' : 'Fervent prayer support for families, healing, and spiritual growth.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Emblem Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#FAF9F6] border-2 border-[#8B7E66]/40 p-8 text-center space-y-4 shadow-sm relative">
              <div className="flex justify-center">
                <ChurchLogo size="lg" />
              </div>
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
                  {CHURCH_INFO.mottoEn}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mt-1">
                  REHOBOTH
                </h3>
                <p className="text-xs text-[#636E72] mt-0.5">
                  {isKn ? CHURCH_INFO.locationKn : CHURCH_INFO.locationEn}
                </p>
              </div>
              <div className="w-12 h-0.5 bg-[#8B7E66] mx-auto"></div>
              <p className="text-xs font-sans font-bold text-[#8B7E66] uppercase tracking-[0.15em]">
                PRAYER • FAITH • HOPE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
