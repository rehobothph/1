import React, { useState } from 'react';
import { Language } from '../types';
import { CHURCH_INFO, HOW_TO_REACH_GUIDE } from '../data/churchData';
import { Mail, MapPin, Phone, MessageSquare, ExternalLink, Laptop, Heart, Clock, Navigation, Check, Copy, Compass } from 'lucide-react';

interface LocationEmailSectionProps {
  currentLang: Language;
}

export const LocationEmailSection: React.FC<LocationEmailSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [copiedCoords, setCopiedCoords] = useState(false);

  const copyCoordinates = () => {
    navigator.clipboard.writeText(CHURCH_INFO.coordinates);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* 1. CHURCH EMAIL SECTION */}
      <section className="py-12 bg-white border-y border-[#E5E1D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border-2 border-[#8B7E66]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm rounded-lg">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-12 h-12 bg-[#8B7E66] text-white flex items-center justify-center shrink-0 rounded-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B7E66] block">
                  CHURCH EMAIL
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  {isKn ? 'ನಮ್ಮನ್ನು Email ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ' : 'Contact Us via Email'}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#636E72] mt-0.5">
                  {CHURCH_INFO.email}
                </p>
              </div>
            </div>

            <a
              href={`mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(CHURCH_INFO.emailSubject)}`}
              className="px-6 py-3 bg-[#8B7E66] hover:bg-[#6D6251] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-sm shrink-0 flex items-center gap-2 rounded-sm"
            >
              <span>{isKn ? 'Email ಕಳುಹಿಸಿ →' : 'Send Email →'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. LOCATION & HOW TO REACH SECTION */}
      <section id="location" className="py-16 bg-[#FAF9F6] border-y border-[#E5E1D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
              FIND US • ಸ್ಥಳ ವಿವರ
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
              {isKn ? 'ಚರ್ಚ್ ಸ್ಥಳ ಮತ್ತು ತಲುಪುವ ಮಾರ್ಗ' : 'How to Reach the Sanctuary'}
            </h3>
            <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
            <p className="text-sm text-[#555] font-sans mt-2 max-w-2xl mx-auto">
              {isKn ? CHURCH_INFO.addressFullKn : CHURCH_INFO.addressFullEn}
            </p>
          </div>

          {/* Main Location Hero Banner */}
          <div className="bg-white border-2 border-[#D4AF37]/60 rounded-xl p-6 sm:p-8 shadow-md mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 text-left flex-col sm:flex-row">
              <div className="w-14 h-14 bg-[#123F42] text-white flex items-center justify-center shrink-0 rounded-xl shadow-md">
                <MapPin className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B7E66] block">
                  SANCTUARY ADDRESS • ಮೈಸೂರು ಜಿಲ್ಲೆ
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                  {isKn ? 'ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ (ಮಾದಾಪುರ ಬಂಡೆ)' : 'Rehoboth Prayer House (Madapura Bande)'}
                </h4>
                <p className="text-sm text-[#444] font-sans">
                  {isKn ? CHURCH_INFO.locationKn : CHURCH_INFO.locationEn}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="font-sans text-[#666]">
                    GPS: <strong className="font-mono text-[#123F42]">{CHURCH_INFO.coordinates}</strong>
                  </span>
                  <button
                    onClick={copyCoordinates}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F4F1EA] hover:bg-[#EAE4D7] text-[#123F42] border border-[#D4AF37]/50 rounded text-[11px] font-sans font-semibold transition-colors"
                  >
                    {copiedCoords ? (
                      <>
                        <Check className="w-3 h-3 text-green-600" />
                        <span className="text-green-700">{isKn ? 'ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#8B7E66]" />
                        <span>{isKn ? 'Coordinates ಕಾಪಿ ಮಾಡಿ' : 'Copy GPS'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={CHURCH_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 bg-[#123F42] hover:bg-[#0E3234] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 rounded-lg"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>{isKn ? 'Google Mapsನಲ್ಲಿ ದಾರಿ ನೋಡಿ' : 'Get Directions on Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${CHURCH_INFO.phone}`}
                className="flex-1 lg:flex-none justify-center px-5 py-3.5 bg-white hover:bg-[#FAF9F6] text-[#123F42] border border-[#123F42] text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#123F42]" />
                <span>{isKn ? 'ದಾರಿಗಾಗಿ ಕರೆ ಮಾಡಿ' : 'Call for Guidance'}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="bg-white border border-[#E5E1D8] rounded-xl overflow-hidden shadow-sm mb-8">
            <div className="p-4 bg-[#123F42] text-white flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-medium">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {isKn ? 'ಲೈವ್ ಮ್ಯಾಪ್ ಸ್ಥಳ: ಮಾದಾಪುರ ಬಂಡೆ, ಎಚ್.ಡಿ. ಕೋಟೆ ರಸ್ತೆ' : 'Live Map: Madapura Bande, H.D. Kote Road, Mysuru'}
                </span>
              </div>
              <a
                href={CHURCH_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline font-bold flex items-center gap-1"
              >
                <span>{isKn ? 'ದೊಡ್ಡ ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ' : 'Open in Google Maps App'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="w-full h-80 sm:h-96 relative bg-[#E5E1D8]">
              <iframe
                title="Church Location - Madapura Bande"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.851726059635!2d76.38636511528655!3d12.11643950916725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzU5LjIiTiA3NsKwMjMnMjAuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Transit Options from neighboring towns */}
          <div className="mb-4">
            <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 text-center">
              {isKn ? HOW_TO_REACH_GUIDE.titleKn : HOW_TO_REACH_GUIDE.titleEn}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HOW_TO_REACH_GUIDE.routes.map((route, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#E5E1D8] rounded-lg shadow-sm hover:border-[#D4AF37] transition-all">
                  <span className="text-[10px] font-sans uppercase font-bold text-[#8B7E66] block">FROM / ಇಂದ</span>
                  <h5 className="text-base font-serif font-bold text-[#123F42]">
                    {isKn ? route.fromKn : route.fromEn}
                  </h5>
                  <div className="flex items-center gap-2 mt-1 mb-2">
                    <span className="px-2 py-0.5 bg-[#F4F1EA] text-[#123F42] text-[11px] font-mono font-bold rounded">
                      {route.dist}
                    </span>
                    <span className="text-xs text-[#666] font-sans">
                      {isKn ? route.timeKn : route.timeEn}
                    </span>
                  </div>
                  <p className="text-xs text-[#444] font-sans leading-relaxed">
                    {isKn ? route.descKn : route.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GET IN TOUCH CONTACT GRID */}
      <section id="contact" className="py-12 bg-white border-y border-[#E5E1D8] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
              {isKn ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Get in Touch'}
            </h2>
            <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pastor Card */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D8] text-center space-y-2 rounded-sm">
              <div className="w-10 h-10 bg-[#8B7E66] text-white flex items-center justify-center mx-auto mb-3 rounded-sm">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B7E66]">
                {isKn ? 'ಸೇವಕರು' : 'PASTOR'}
              </span>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">
                {isKn ? CHURCH_INFO.pastorKn : CHURCH_INFO.pastorEn}
              </h4>
              <a href={`tel:${CHURCH_INFO.phone}`} className="text-sm font-mono font-bold text-[#8B7E66] hover:underline block pt-2">
                {CHURCH_INFO.phone}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D8] text-center space-y-2 rounded-sm">
              <div className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center mx-auto mb-3 rounded-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B7E66]">WHATSAPP</span>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">
                {isKn ? 'ವಾಟ್ಸಾಪ್ ಸಹಾಯವಾಣಿ' : 'WhatsApp Support'}
              </h4>
              <p className="text-xs text-[#636E72]">
                {isKn ? 'Pastor ಅವರನ್ನು WhatsAppನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.' : 'Reach out directly on WhatsApp.'}
              </p>
              <a
                href={CHURCH_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-bold text-[#25D366] hover:underline block pt-2"
              >
                {isKn ? 'WhatsApp ತೆರೆಯಿರಿ →' : 'Open WhatsApp →'}
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D8] text-center space-y-2 rounded-sm">
              <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center mx-auto mb-3 rounded-sm">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B7E66]">EMAIL</span>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">
                Rehoboth Prayer House
              </h4>
              <p className="text-xs font-mono text-[#636E72] truncate">
                {CHURCH_INFO.email}
              </p>
              <a
                href={`mailto:${CHURCH_INFO.email}`}
                className="text-xs font-sans font-bold text-[#8B7E66] hover:underline block pt-2"
              >
                {isKn ? 'Email ಕಳುಹಿಸಿ →' : 'Send Email →'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USEFUL LINKS SECTION */}
      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            QUICK LINKS
          </span>
          <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-6">
            {isKn ? 'ಉಪಯುಕ್ತ ಲಿಂಕ್‌ಗಳು' : 'Quick Links'}
          </h3>
          <div className="w-12 h-0.5 bg-[#8B7E66] mx-auto mb-8"></div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-sans font-medium">
            <a
              href="#timings"
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#3E4547] hover:border-[#8B7E66] text-[#E5E1D8] hover:text-white transition-colors flex items-center gap-2 rounded-sm"
            >
              <Clock className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಆರಾಧನಾ ಸಮಯ' : 'Worship Timings'}</span>
            </a>

            <a
              href="#online"
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#3E4547] hover:border-[#8B7E66] text-[#E5E1D8] hover:text-white transition-colors flex items-center gap-2 rounded-sm"
            >
              <Laptop className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಆನ್‌ಲೈನ್ ಪ್ರಾರ್ಥನೆ' : 'Online Prayer'}</span>
            </a>

            <a
              href="#prayer-request"
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#3E4547] hover:border-[#8B7E66] text-[#E5E1D8] hover:text-white transition-colors flex items-center gap-2 rounded-sm"
            >
              <Heart className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ' : 'Prayer Request'}</span>
            </a>

            <a
              href={CHURCH_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#3E4547] hover:border-[#8B7E66] text-[#E5E1D8] hover:text-white transition-colors flex items-center gap-2 rounded-sm"
            >
              <MapPin className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಚರ್ಚ್ ಸ್ಥಳ' : 'Church Location'}</span>
            </a>

            <a
              href={`mailto:${CHURCH_INFO.email}`}
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#3E4547] hover:border-[#8B7E66] text-[#E5E1D8] hover:text-white transition-colors flex items-center gap-2 rounded-sm"
            >
              <Mail className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಇಮೇಲ್' : 'Church Email'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
