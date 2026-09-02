import React from 'react';
import { Language } from '../types';
import { CHURCH_SERVICES, CHURCH_INFO } from '../data/churchData';
import { Clock, Church, BookOpen, Flame, Moon, HandHeart, Bell, Calendar } from 'lucide-react';

interface ServiceScheduleSectionProps {
  currentLang: Language;
}

export const ServiceScheduleSection: React.FC<ServiceScheduleSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'sunday':
        return <Church className="w-6 h-6 text-[#D4AF37]" />;
      case 'communion':
        return <span className="text-2xl">🍞</span>;
      case 'sunday_school':
        return <BookOpen className="w-6 h-6 text-[#D4AF37]" />;
      case 'friday':
        return <HandHeart className="w-6 h-6 text-[#D4AF37]" />;
      case 'fasting':
        return <Flame className="w-6 h-6 text-[#D4AF37]" />;
      case 'all_night':
        return <Moon className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Clock className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="timings" className="py-16 sm:py-24 bg-[#FAF9F6] scroll-mt-20 border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            {isKn ? 'ಆರಾಧನಾ ವೇಳಾಪಟ್ಟಿ • SERVICE SCHEDULE' : 'WEEKLY & MONTHLY SERVICES'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
            {isKn ? 'ಆರಾಧನೆ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ಸಮಯಗಳು' : 'Worship & Prayer Gatherings'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          <p className="text-sm sm:text-base text-[#666] mt-3 font-sans max-w-xl mx-auto">
            {isKn
              ? 'ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಮಾದಾಪುರದಲ್ಲಿ ನಡೆಯುವ ಎಲ್ಲಾ ಸಾಪ್ತಾಹಿಕ ಮತ್ತು ಮಾಸಿಕ ಆರಾಧನಾ ಸಮಯಗಳು.'
              : 'Join us in heartfelt praise, biblical preaching, and intercession in the sanctuary of God.'}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CHURCH_SERVICES.map(service => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 bg-white rounded-xl border-2 transition-all flex flex-col justify-between hover:shadow-lg relative overflow-hidden group ${
                service.isFeatured ? 'border-[#D4AF37] shadow-md' : 'border-[#E5E1D8] shadow-sm hover:border-[#D4AF37]'
              }`}
            >
              {service.badgeEn && (
                <span className="absolute top-0 right-0 bg-[#123F42] text-[#D4AF37] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {isKn ? service.badgeKn : service.badgeEn}
                </span>
              )}

              <div className="space-y-4">
                {/* Header Icon + Day tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-[#123F42] flex items-center justify-center shadow-sm">
                    {getServiceIcon(service.type)}
                  </div>
                  <span className="px-3 py-1 bg-[#FAF9F6] border border-[#E5E1D8] text-[11px] font-sans font-bold uppercase tracking-wider text-[#8B7E66] rounded-md">
                    {isKn ? service.dayKn : service.dayEn}
                  </span>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#123F42] group-hover:text-[#8C6737] transition-colors">
                    {isKn ? service.titleKn : service.titleEn}
                  </h3>
                  <p className="text-xs text-[#8B7E66] font-sans font-semibold mt-0.5">
                    {isKn ? service.dayKn : service.dayEn}
                  </p>
                </div>

                {/* Timing Highlight */}
                <div className="p-3 bg-[#FAF9F6] border-l-4 border-[#D4AF37] rounded-r-md">
                  <div className="text-sm sm:text-base font-mono font-bold text-[#123F42] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{isKn ? service.timeKn : service.timeEn}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#444] font-sans leading-relaxed">
                  {isKn ? service.descriptionKn : service.descriptionEn}
                </p>
              </div>

              {/* Bottom Quick Remind link */}
              <div className="mt-6 pt-4 border-t border-[#E5E1D8]/60 flex items-center justify-between text-xs font-sans">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneRaw}?text=${encodeURIComponent(`Praise the Lord Pastor, I would like to attend the ${service.titleEn} (${service.timeEn}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#123F42] hover:text-[#D4AF37] font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Bell className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{isKn ? 'ಮಾಹಿತಿ / ಜ್ಞಾಪನೆ' : 'Inquire / Attend'}</span>
                </a>

                <a
                  href={CHURCH_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B7E66] hover:text-[#123F42] font-semibold"
                >
                  {isKn ? 'ಸ್ಥಳಕ್ಕೆ ದಾರಿ →' : 'Directions →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

