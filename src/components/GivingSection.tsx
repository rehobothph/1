import React, { useState } from 'react';
import { Language } from '../types';
import { GIVING_INFO, CHURCH_INFO } from '../data/churchData';
import { Heart, Copy, Check, QrCode, ShieldCheck, Landmark, Smartphone } from 'lucide-react';

interface GivingSectionProps {
  currentLang: Language;
}

export const GivingSection: React.FC<GivingSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <section id="giving" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B7E66]/10 text-[#8B7E66] text-xs font-sans font-bold uppercase tracking-widest rounded-full mb-2">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKn ? 'ದಶಮಾಂಶ ಮತ್ತು ಕಾಣಿಕೆಗಳು' : 'TITHES & OFFERINGS'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            {isKn ? 'ದೇವರ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಿ' : 'Support God’s Kingdom Work'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          <blockquote className="mt-4 p-4 bg-white border border-[#E5E1D8] rounded-lg text-xs sm:text-sm font-serif italic text-[#444] leading-relaxed shadow-sm">
            {isKn ? GIVING_INFO.scriptureKn : GIVING_INFO.scriptureEn}
          </blockquote>
        </div>

        {/* Giving Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: UPI / PhonePe / GPay */}
          <div className="bg-white border-2 border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#123F42] flex items-center justify-center text-white">
                  <Smartphone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#123F42]">
                    {isKn ? 'UPI / Google Pay / PhonePe / Paytm' : 'Direct UPI & Digital Apps'}
                  </h3>
                  <p className="text-xs text-[#8B7E66] font-sans font-semibold">
                    {isKn ? 'ತ್ವರಿತವಾಗಿ ಕಾಣಿಕೆ ಕಳುಹಿಸಲು' : 'Fast & Secure Mobile Payment'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* UPI Number Box */}
                <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-sans uppercase font-bold text-[#8B7E66] tracking-wider block">
                      {isKn ? 'GPay / PhonePe / Paytm ಸಂಖ್ಯೆ' : 'Mobile Number'}
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#1A1A1A]">
                      {GIVING_INFO.upiNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(GIVING_INFO.upiNumber, 'upiNum')}
                    className="p-2 bg-white hover:bg-neutral-100 border border-[#D5CFBF] rounded text-xs font-sans font-bold flex items-center gap-1 text-[#123F42]"
                  >
                    {copiedField === 'upiNum' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#8B7E66]" />
                    )}
                  </button>
                </div>

                {/* UPI ID Box */}
                <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E1D8] rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-sans uppercase font-bold text-[#8B7E66] tracking-wider block">
                      {isKn ? 'UPI ID' : 'Official UPI ID'}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#1A1A1A] break-all">
                      {GIVING_INFO.upiId}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(GIVING_INFO.upiId, 'upiId')}
                    className="p-2 bg-white hover:bg-neutral-100 border border-[#D5CFBF] rounded text-xs font-sans font-bold flex items-center gap-1 text-[#123F42]"
                  >
                    {copiedField === 'upiId' ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#8B7E66]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#666]">
              <span className="flex items-center gap-1 text-[#123F42] font-semibold">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                {isKn ? 'ಖಾತೆದಾರರು: ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ' : 'Account: Pr. Ramesh C'}
              </span>
              <a
                href={`upi://pay?pa=${GIVING_INFO.upiId}&pn=${encodeURIComponent('Rehoboth Prayer House')}&cu=INR`}
                className="px-3 py-1.5 bg-[#123F42] text-white text-xs font-sans font-bold rounded hover:bg-[#0E3234] transition-colors"
              >
                {isKn ? 'UPI ಆಪ್ ತೆರೆಯಿರಿ' : 'Open UPI App'}
              </a>
            </div>
          </div>

          {/* Card 2: Bank NEFT / IMPS Transfer */}
          <div className="bg-white border border-[#E5E1D8] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] border border-[#E5E1D8] flex items-center justify-center text-[#123F42]">
                  <Landmark className="w-6 h-6 text-[#8B7E66]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#123F42]">
                    {isKn ? 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ (NEFT / IMPS)' : 'Direct Bank Transfer'}
                  </h3>
                  <p className="text-xs text-[#8B7E66] font-sans font-semibold">
                    {GIVING_INFO.bankName}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-sans">
                <div className="flex justify-between items-center py-2 border-b border-[#E5E1D8]">
                  <span className="text-[#666]">{isKn ? 'ಖಾತೆ ಹೆಸರು' : 'Account Holder'}:</span>
                  <span className="font-semibold text-[#1A1A1A]">{GIVING_INFO.accountHolder}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#E5E1D8]">
                  <span className="text-[#666]">{isKn ? 'ಖಾತೆ ಸಂಖ್ಯೆ' : 'Account No'}:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#123F42]">{GIVING_INFO.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(GIVING_INFO.accountNumber, 'accNo')}
                      className="text-[#8B7E66] hover:text-[#123F42]"
                      title="Copy Account Number"
                    >
                      {copiedField === 'accNo' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#E5E1D8]">
                  <span className="text-[#666]">{isKn ? 'IFSC ಕೋಡ್' : 'IFSC Code'}:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#123F42]">{GIVING_INFO.ifscCode}</span>
                    <button
                      onClick={() => copyToClipboard(GIVING_INFO.ifscCode, 'ifsc')}
                      className="text-[#8B7E66] hover:text-[#123F42]"
                      title="Copy IFSC Code"
                    >
                      {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-[#666]">{isKn ? 'ಶಾಖೆ' : 'Branch'}:</span>
                  <span className="font-semibold text-[#1A1A1A]">{GIVING_INFO.branch}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E1D8] text-[11px] text-[#777] font-sans">
              ℹ️ {isKn
                ? 'ಕಾಣಿಕೆ ಕಳುಹಿಸಿದ ನಂತರ ದೃಢೀಕರಣಕ್ಕಾಗಿ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ತಿಳಿಸಬಹುದು.'
                : 'After sending your offering, you may share the confirmation receipt via WhatsApp for our church prayer records.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
