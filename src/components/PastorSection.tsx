import React from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { Phone, MessageSquare, BookOpen, User } from 'lucide-react';

interface PastorSectionProps {
  currentLang: Language;
}

export const PastorSection: React.FC<PastorSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  return (
    <section id="pastor" className="py-16 sm:py-20 bg-white border-y border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            {isKn ? 'ನಮ್ಮ ಸೇವಕರು • OUR LEADER' : 'OUR LEADER'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
            {isKn ? 'ನಮ್ಮ ಪಾಸ್ಟರ್' : 'Senior Pastor'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
        </div>

        {/* Pastor Profile Card */}
        <div className="bg-[#FAF9F6] border-2 border-[#8B7E66]/40 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Pastor Emblem / Logo */}
            <div className="shrink-0 flex flex-col items-center">
              <ChurchLogo size="lg" />
              <span className="mt-3 px-3 py-1 bg-white border border-[#E5E1D8] text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B7E66]">
                {CHURCH_INFO.pastorRoleEn}
              </span>
            </div>

            {/* Pastor Details */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8B7E66] block">
                  {isKn ? 'ಹಿರಿಯ ಸೇವಕರು' : 'SENIOR PASTOR'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mt-1">
                  {isKn ? CHURCH_INFO.pastorKn : CHURCH_INFO.pastorEn}
                </h3>
              </div>

              <div className="space-y-2 text-sm sm:text-base text-[#2D3436] font-sans leading-relaxed">
                <p>{isKn ? CHURCH_INFO.pastorBioKn : CHURCH_INFO.pastorBioEn}</p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={`tel:${CHURCH_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B7E66] hover:bg-[#6D6251] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-sm font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>{CHURCH_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/917353609920?text=${encodeURIComponent('Praise the Lord Pastor Ramesh C, I would like to connect with you.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isKn ? 'WhatsApp ಚಾಟ್' : 'WhatsApp Chat'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
