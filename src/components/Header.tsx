import React, { useState } from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { ChurchLogo } from './ChurchLogo';
import { Globe, Phone, MessageSquare, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
}) => {
  const isKn = currentLang === 'kn';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelKn: 'ಮುಖಪುಟ', labelEn: 'Home' },
    { href: '#about', labelKn: 'ನಮ್ಮ ಬಗ್ಗೆ', labelEn: 'About' },
    { href: '#timings', labelKn: 'ಆರಾಧನಾ ಸಮಯ', labelEn: 'Timings' },
    { href: '#daily-promise', labelKn: 'ದಿನದ ವಾಗ್ದಾನ', labelEn: 'Promise' },
    { href: '#ministries', labelKn: 'ಸಚಿವಾಲಯಗಳು', labelEn: 'Ministries' },
    { href: '#online', labelKn: 'ಆನ್‌ಲೈನ್ ಪ್ರಾರ್ಥನೆ', labelEn: 'Online Prayer' },
    { href: '#pastor', labelKn: 'ಪಾಸ್ಟರ್', labelEn: 'Pastor' },
    { href: '#giving', labelKn: 'ಕಾಣಿಕೆಗಳು', labelEn: 'Giving' },
    { href: '#prayer-request', labelKn: 'ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ', labelEn: 'Prayer Request' },
    { href: '#contact', labelKn: 'ಸಂಪರ್ಕ', labelEn: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#FAF9F6] text-[#2D3436] border-b border-[#E5E1D8] shadow-sm">
      {/* Top Banner Ticker */}
      <div className="bg-[#123F42] text-[#E5E1D8] text-xs py-2 px-4 sm:px-8 font-sans flex items-center justify-between border-b border-[#0F2B2A]">
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[#D4AF37] uppercase tracking-wider text-[11px] font-bold">
              {isKn ? 'ಸಹಾಯವಾಣಿ:' : 'Helpline:'}
            </span>
          </div>
          <a href={`tel:${CHURCH_INFO.phone}`} className="font-mono font-bold text-white hover:text-[#D4AF37] transition-colors text-xs sm:text-sm">
            {CHURCH_INFO.phone}
          </a>
          <span className="hidden md:inline text-[#3E6B6E]">|</span>
          <span className="hidden md:inline text-[#D5E4E4] text-xs">
            {isKn ? CHURCH_INFO.locationKn : CHURCH_INFO.locationEn}
          </span>
        </div>

        {/* Language switch */}
        <div className="flex items-center gap-1 bg-[#0F2B2A] px-2 py-0.5 border border-[#2E6B68] rounded-sm shrink-0">
          <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
          <button
            id="lang-kn-btn"
            onClick={() => onToggleLang('kn')}
            className={`px-2 py-0.5 text-xs transition-all uppercase tracking-wider font-semibold rounded-sm ${
              isKn ? 'bg-[#D4AF37] text-[#123F42] font-bold' : 'text-[#A09A90] hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
          <span className="text-[#7A746B] text-xs">/</span>
          <button
            id="lang-en-btn"
            onClick={() => onToggleLang('en')}
            className={`px-2 py-0.5 text-xs transition-all uppercase tracking-wider font-semibold rounded-sm ${
              !isKn ? 'bg-[#D4AF37] text-[#123F42] font-bold' : 'text-[#A09A90] hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand Info */}
          <a
            href="#home"
            onClick={e => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0 min-w-0"
          >
            <div className="shrink-0">
              <ChurchLogo size="sm" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#8B7E66] font-bold leading-tight truncate">
                {CHURCH_INFO.mottoEn}
              </span>
              <h1 className="text-sm sm:text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#123F42] transition-colors leading-snug truncate">
                {isKn ? CHURCH_INFO.nameKn : CHURCH_INFO.nameEn}
              </h1>
              <span className="text-[10px] sm:text-xs text-[#636E72] font-sans leading-tight truncate">
                {isKn ? CHURCH_INFO.locationKn : CHURCH_INFO.locationEn}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="px-2.5 py-1.5 text-xs font-sans font-semibold text-[#2D3436] hover:text-[#123F42] hover:bg-[#E5E1D8]/30 transition-colors whitespace-nowrap rounded-sm"
              >
                {isKn ? item.labelKn : item.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${CHURCH_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#8B7E66] hover:bg-[#6D6251] text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-sm font-mono shrink-0 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CHURCH_INFO.callDisplay}</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#2D3436] hover:bg-[#E5E1D8]/50 border border-[#E5E1D8] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF9F6] border-t border-[#E5E1D8] px-4 pt-3 pb-6 space-y-1 shadow-md">
          {navLinks.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-sm font-sans font-semibold text-[#1A1A1A] hover:bg-[#E5E1D8]/50 rounded-sm"
            >
              {isKn ? item.labelKn : item.labelEn}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-[#E5E1D8] flex flex-col gap-2">
            <a
              href={`tel:${CHURCH_INFO.phone}`}
              className="w-full py-2.5 bg-[#8B7E66] text-white text-center text-xs font-sans font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 rounded-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{CHURCH_INFO.callDisplay}</span>
            </a>
            <a
              href={CHURCH_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] text-white text-center text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ' : 'WhatsApp Pastor'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
