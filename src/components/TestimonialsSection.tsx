import React from 'react';
import { Language } from '../types';
import { TESTIMONIALS_DATA, CHURCH_INFO } from '../data/churchData';
import { Quote, MessageCircleHeart, MapPin, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  return (
    <section id="testimonies" className="py-16 sm:py-24 bg-white border-b border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123F42]/10 text-[#123F42] text-xs font-sans font-bold uppercase tracking-widest rounded-full mb-2">
            <MessageCircleHeart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKn ? 'ದೇವರ ಕೃಪೆಯ ಸಾಕ್ಷಿಗಳು' : 'TESTIMONIES OF GRACE'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            {isKn ? 'ಪ್ರಾರ್ಥನೆಗೆ ಸಿಕ್ಕ ಅದ್ಭುತ ಉತ್ತರಗಳು' : 'Stories of Faith & Answered Prayer'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          <p className="text-sm sm:text-base text-[#666] font-sans mt-3">
            {isKn
              ? 'ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರದಲ್ಲಿ ಕರ್ತನು ಮಾಡಿದ ಮಹತ್ಕಾರ್ಯಗಳು ಮತ್ತು ಕೌಟುಂಬಿಕ ಬಿಡುಗಡೆಯ ಅನುಭವಗಳು.'
              : 'Witnessing the miraculous power of God in healing sickness, restoring families, and providing breakthroughs.'}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] border border-[#E5E1D8] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#D4AF37]/20 pointer-events-none" />

              <div>
                <span className="inline-block px-2.5 py-0.5 bg-white border border-[#E5E1D8] text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B7E66] rounded mb-3">
                  {item.category.toUpperCase()}
                </span>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#123F42] mb-3 leading-snug">
                  {isKn ? item.titleKn : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#444] font-sans leading-relaxed italic">
                  "{isKn ? item.storyKn : item.storyEn}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-sans font-bold text-[#1A1A1A]">
                    {isKn ? item.nameKn : item.nameEn}
                  </h4>
                  <p className="text-xs text-[#8B7E66] flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {isKn ? item.placeKn : item.placeEn}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#123F42]/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#123F42]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Testimony CTA */}
        <div className="mt-12 text-center bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-xl p-6 max-w-2xl mx-auto shadow-sm">
          <h4 className="text-base font-serif font-bold text-[#123F42]">
            {isKn ? 'ನಿಮ್ಮ ಜೀವನದಲ್ಲೂ ದೇವರು ಕಾರ್ಯ ಮಾಡಿದ್ದಾರೆಯೇ?' : 'Has God answered your prayers?'}
          </h4>
          <p className="text-xs sm:text-sm text-[#666] font-sans mt-1">
            {isKn
              ? 'ನಿಮ್ಮ ಸಾಕ್ಷಿಯನ್ನು ಹಂಚಿಕೊಂಡು ಇತರರಿಗೆ ನಂಬಿಕೆಯ ಪ್ರೇರಣೆಯಾಗಿ.'
              : 'Share your testimony to encourage and build the faith of others in the fellowship.'}
          </p>
          <a
            href={`https://wa.me/${CHURCH_INFO.phoneRaw}?text=${encodeURIComponent('Praise the Lord Pastor, I would like to share a testimony of what God did in my life.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-[#123F42] hover:bg-[#0E3234] text-white text-xs font-sans font-bold rounded transition-colors"
          >
            <span>{isKn ? 'ಸಾಕ್ಷಿ ಹಂಚಿಕೊಳ್ಳಿ (WhatsApp)' : 'Share Testimony on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
