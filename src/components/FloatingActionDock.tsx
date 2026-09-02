import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ArrowUp, Heart } from 'lucide-react';

interface FloatingActionDockProps {
  currentLang: Language;
}

export const FloatingActionDock: React.FC<FloatingActionDockProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPrayer = () => {
    const el = document.querySelector('#prayer-request');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 bg-white text-[#123F42] border border-[#D5CFBF] rounded-full shadow-lg hover:bg-neutral-100 transition-all hover:scale-105"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#123F42]" />
        </button>
      )}

      {/* Floating Prayer Request on Desktop */}
      <button
        onClick={scrollToPrayer}
        className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-[#123F42] text-[#D4AF37] border border-[#D4AF37]/50 rounded-full shadow-xl hover:bg-[#0E3234] transition-all hover:scale-105"
      >
        <Heart className="w-4 h-4 fill-[#D4AF37]" />
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-white">
          {isKn ? 'ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ' : 'Prayer Request'}
        </span>
      </button>

      {/* Single Clean WhatsApp Quick Action Button */}
      <a
        href={CHURCH_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
        title="WhatsApp Pastor"
        aria-label="Chat on WhatsApp with Pastor"
      >
        {/* Crisp Official WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="0" 
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.72 7.72C8.44 8.03 7.65 8.77 7.65 10.27C7.65 11.76 8.74 13.2 8.89 13.41C9.05 13.61 11.02 16.66 14.05 17.96C14.77 18.27 15.33 18.46 15.77 18.6C16.49 18.83 17.15 18.8 17.67 18.72C18.25 18.63 19.46 17.99 19.71 17.28C19.96 16.57 19.96 15.97 19.89 15.84C19.81 15.72 19.61 15.65 19.31 15.5C19.01 15.35 17.53 14.62 17.25 14.52C16.98 14.42 16.78 14.37 16.58 14.67C16.38 14.97 15.81 15.65 15.64 15.84C15.46 16.04 15.29 16.07 14.99 15.92C14.69 15.77 13.71 15.45 12.56 14.42C11.66 13.62 11.06 12.63 10.89 12.33C10.71 12.03 10.87 11.87 11.02 11.72C11.16 11.58 11.33 11.36 11.48 11.19C11.63 11.01 11.68 10.89 11.78 10.69C11.88 10.49 11.83 10.31 11.76 10.17C11.68 10.02 11.08 8.54 10.83 7.95C10.59 7.37 10.35 7.45 10.17 7.44C10 7.44 9.8 7.34 9.53 7.34Z" />
        </svg>
        <span className="text-xs font-sans font-bold tracking-wide">
          {isKn ? 'WhatsApp' : 'WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
