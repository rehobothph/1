import React from 'react';
import { Language } from '../types';
import { DAILY_ONLINE_PRAYER, CHURCH_INFO } from '../data/churchData';
import { Laptop, Phone, MessageSquare, Clock, Users, ShieldCheck } from 'lucide-react';

interface OnlinePrayerSectionProps {
  currentLang: Language;
}

export const OnlinePrayerSection: React.FC<OnlinePrayerSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  return (
    <section id="online" className="py-16 sm:py-20 bg-[#1A1A1A] text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D0D0D] border-2 border-[#8B7E66] p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B7E66]/20 border border-[#8B7E66] text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-sans font-bold">
            <Laptop className="w-3.5 h-3.5" />
            <span>{DAILY_ONLINE_PRAYER.subtitleKn}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide">
            {isKn ? DAILY_ONLINE_PRAYER.titleKn : DAILY_ONLINE_PRAYER.titleEn}
          </h2>

          {/* Time Display */}
          <div className="inline-block bg-[#1A1A1A] border border-[#3E4547] px-6 py-2.5">
            <div className="flex items-center justify-center gap-2.5 text-[#D4AF37] font-mono text-xl sm:text-2xl font-bold tracking-wider">
              <Clock className="w-5 h-5 text-[#8B7E66]" />
              <span>{DAILY_ONLINE_PRAYER.time}</span>
            </div>
            <span className="text-[11px] text-[#A09A90] uppercase tracking-wider block mt-1 font-sans">
              {isKn ? 'ಪ್ರತಿದಿನ ಸಂಜೆ (Every Evening)' : 'Every Evening'}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#E5E1D8] max-w-2xl mx-auto leading-relaxed font-sans">
            {isKn ? DAILY_ONLINE_PRAYER.descriptionKn : DAILY_ONLINE_PRAYER.descriptionEn}
          </p>

          {/* Call & WhatsApp Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${DAILY_ONLINE_PRAYER.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8B7E66] hover:bg-[#6D6251] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all border border-[#8B7E66] shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{isKn ? '📞 ಪಾಸ್ಟರ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ' : '📞 Enquire Pastor'}</span>
            </a>

            <a
              href={`https://wa.me/917353609920?text=${encodeURIComponent(DAILY_ONLINE_PRAYER.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isKn ? '💬 WhatsApp Pastor' : '💬 WhatsApp Pastor'}</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-[11px] text-[#A09A90] font-sans">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#8B7E66]" />
              {isKn ? 'ಕಾನ್ಫರೆನ್ಸ್ ಕಾಲ್ ಮೂಲಕ' : 'Online Conference Call'}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B7E66]" />
              {isKn ? 'ಉಚಿತ ಪ್ರವೇಶ' : 'Open to All'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
