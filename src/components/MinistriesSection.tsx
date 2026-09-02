import React from 'react';
import { Language } from '../types';
import { MINISTRIES_DATA, CHURCH_INFO } from '../data/churchData';
import { Music, BookOpen, Smile, Sparkles, HeartHandshake, Users, Clock, ArrowRight } from 'lucide-react';

interface MinistriesSectionProps {
  currentLang: Language;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  const getIcon = (name: string) => {
    switch (name) {
      case 'Music':
        return <Music className="w-6 h-6 text-[#D4AF37]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#D4AF37]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Users className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="ministries" className="py-16 sm:py-24 bg-white border-b border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            {isKn ? 'ಸಭೆಯ ಸಚಿವಾಲಯಗಳು • MINISTRIES' : 'CHURCH MINISTRIES & OUTREACH'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
            {isKn ? 'ದೇವರ ರಾಜ್ಯಕ್ಕಾಗಿ ವಿವಿಧ ಸೇವೆಗಳು' : 'Serving the Lord & the Community'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          <p className="text-sm sm:text-base text-[#666] font-sans mt-3">
            {isKn
              ? 'ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯು ಆತ್ಮೀಕವಾಗಿ ಬೆಳೆಯಲು, ಸತ್ಯವಾಕ್ಯದಲ್ಲಿ ನೆಲೆನಿಲ್ಲಲು ಮತ್ತು ದೇವರ ಪ್ರೀತಿಯನ್ನು ಅನುಭವಿಸಲು ಮೀಸಲಾದ ವಿಭಾಗಗಳು.'
              : 'Empowering every generation to grow in Christ, be grounded in sound doctrine, and reflect God’s transformative love.'}
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MINISTRIES_DATA.map((ministry) => (
            <div
              key={ministry.id}
              className="bg-[#FAF9F6] border border-[#E5E1D8] hover:border-[#D4AF37] rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md group"
            >
              <div>
                {/* Top Icon and Tag */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#123F42] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(ministry.iconName)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#8B7E66] bg-white px-2.5 py-1 rounded border border-[#E5E1D8]">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {isKn ? ministry.timingKn : ministry.timingEn}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#123F42] group-hover:text-[#8C6737] transition-colors">
                  {isKn ? ministry.titleKn : ministry.titleEn}
                </h3>

                <p className="text-xs font-sans font-semibold text-[#8B7E66] mt-1 mb-3">
                  {isKn ? ministry.taglineKn : ministry.taglineEn}
                </p>

                <p className="text-sm text-[#444] font-sans leading-relaxed">
                  {isKn ? ministry.descriptionKn : ministry.descriptionEn}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E5E1D8]/60 flex items-center justify-between text-xs font-sans font-bold text-[#123F42]">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneRaw}?text=${encodeURIComponent(`Praise the Lord Pastor, I would like to know more about ${ministry.titleEn}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#123F42] hover:text-[#D4AF37] transition-colors"
                >
                  <span>{isKn ? 'ಹೆಚ್ಚಿನ ವಿವರಕ್ಕೆ ಸಂಪರ್ಕಿಸಿ' : 'Get Involved'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
