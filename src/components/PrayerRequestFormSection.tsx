import React, { useState } from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { MessageSquare, Phone, Send, Lock, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PrayerRequestFormSectionProps {
  currentLang: Language;
}

export const PrayerRequestFormSection: React.FC<PrayerRequestFormSectionProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Format WhatsApp message exactly as on the website
    let text = `🙏 *NEW PRAYER REQUEST*\n\n`;
    text += `👤 *ಹೆಸರು (Name):* ${name.trim()}\n`;
    if (phone.trim()) text += `📞 *ಫೋನ್ (Phone):* ${phone.trim()}\n`;
    if (place.trim()) text += `📍 *ಸ್ಥಳ (Location):* ${place.trim()}\n`;
    text += `\n📝 *ಪ್ರಾರ್ಥನಾ ವಿಷಯ (Prayer Need):*\n${message.trim()}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917353609920?text=${encodedText}`;

    confetti({ particleCount: 30, spread: 60 });
    setIsSubmitted(true);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setName('');
      setPhone('');
      setPlace('');
      setMessage('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="prayer-request" className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#8B7E66] block">
            WE PRAY FOR YOU • ನಾವು ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
            {isKn ? 'Prayer Request & Contact Form' : 'Prayer Request & Contact Form'}
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7E66] mx-auto mt-3"></div>
          <p className="text-sm text-[#636E72] mt-3 font-sans">
            {isKn ? 'ನಿಮ್ಮ ಪ್ರಾರ್ಥನಾ ವಿನಂತಿಯನ್ನು ಇಲ್ಲಿ ಸಲ್ಲಿಸಿ, ನಾವು ನಿಮಗಾಗಿ ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ.' : 'Submit your prayer request here, and we will earnestly intercede for you.'}
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white border-2 border-[#8B7E66]/40 p-6 sm:p-10 shadow-md">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-[#8B7E66] text-white flex items-center justify-center mx-auto rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                {isKn ? 'ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...' : 'Prayer Request Sent'}
              </h3>
              <p className="text-xs text-[#636E72]">
                {isKn ? 'ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ ಅವರು ನಿಮಗಾಗಿ ಪ್ರಾರ್ಥನೆ ಮಾಡುತ್ತಾರೆ.' : 'Pastor Ramesh C will pray for your request.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                  {isKn ? 'ನಿಮ್ಮ ಹೆಸರು (Name) *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={isKn ? 'ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ' : 'Enter your name'}
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E5E1D8] focus:outline-none focus:border-[#8B7E66]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    {isKn ? 'ಫೋನ್ ಸಂಖ್ಯೆ (Phone Number)' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder={isKn ? 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ' : '+91 73536...'}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E5E1D8] focus:outline-none focus:border-[#8B7E66]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    {isKn ? 'ಸ್ಥಳ (Location)' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                    placeholder={isKn ? 'ಉದಾ: ಮಾದಾಪುರ, ಮೈಸೂರು' : 'e.g., Madapura, Mysuru'}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E5E1D8] focus:outline-none focus:border-[#8B7E66]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                  {isKn ? 'ಪ್ರಾರ್ಥನಾ ವಿಷಯ / Prayer Request *' : 'Prayer Request *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={isKn ? 'ನಿಮ್ಮ ಪ್ರಾರ್ಥನಾ ವಿನಂತಿಯನ್ನು ವಿವರವಾಗಿ ಬರೆಯಿರಿ...' : 'Please write your prayer need in detail...'}
                  className="w-full px-4 py-3 text-sm bg-white border border-[#E5E1D8] focus:outline-none focus:border-[#8B7E66] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-sans font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>🙏 WhatsApp ಮೂಲಕ Prayer Request ಕಳುಹಿಸಿ</span>
              </button>
            </form>
          )}

          {/* Direct Alternative Options */}
          <div className="mt-8 pt-6 border-t border-[#E5E1D8] text-center space-y-3">
            <p className="text-xs text-[#7A746B] font-sans">
              {isKn ? 'ಅಥವಾ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ:' : 'Or contact directly:'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="sms:+917353609920?body=Prayer%20Request%3A%20"
                className="px-4 py-2 bg-white border border-[#E5E1D8] hover:border-[#8B7E66] text-xs font-sans font-bold text-[#1A1A1A] transition-colors rounded-sm"
              >
                {isKn ? '📱 SMS ಕಳುಹಿಸಿ' : '📱 Send SMS'}
              </a>
              <a
                href={`tel:${CHURCH_INFO.phone}`}
                className="px-4 py-2 bg-[#8B7E66] text-white hover:bg-[#6D6251] text-xs font-sans font-bold transition-colors font-mono rounded-sm"
              >
                {isKn ? `📞 ಪಾಸ್ಟರ್ ಅವರಿಗೆ ಕರೆ: ${CHURCH_INFO.phone}` : `📞 Call Pastor: ${CHURCH_INFO.phone}`}
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#8B7E66] font-sans flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>{isKn ? '🔒 ನಿಮ್ಮ ಪ್ರಾರ್ಥನಾ ವಿಷಯಗಳನ್ನು ಅತ್ಯಂತ ಗೌಪ್ಯವಾಗಿ ಇಡಲಾಗುತ್ತದೆ.' : '🔒 Your prayer requests are kept strictly confidential.'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
