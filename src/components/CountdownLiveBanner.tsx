import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CHURCH_INFO, DAILY_ONLINE_PRAYER } from '../data/churchData';
import { Clock, Calendar, Video, Bell, Sparkles, Check } from 'lucide-react';

interface CountdownLiveBannerProps {
  currentLang: Language;
}

export const CountdownLiveBanner: React.FC<CountdownLiveBannerProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    targetEvent: string;
    isTonightPrayer: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    targetEvent: 'Sunday Worship',
    isTonightPrayer: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Check if Daily Online Prayer is happening soon today (8:30 PM = 20:30)
      const isBeforeOnlinePrayerToday = currentHour < 20 || (currentHour === 20 && currentMinute < 30);

      // Target Sunday 10:00 AM
      const nextSunday = new Date(now);
      const daysUntilSunday = (7 - currentDay) % 7;
      if (daysUntilSunday === 0 && (currentHour > 13 || (currentHour === 13 && currentMinute > 0))) {
        // After Sunday service, next Sunday is 7 days away
        nextSunday.setDate(now.getDate() + 7);
      } else {
        nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 ? 0 : daysUntilSunday));
      }
      nextSunday.setHours(10, 0, 0, 0);

      // Target Tonight's Online Prayer 20:30
      const tonightPrayer = new Date(now);
      tonightPrayer.setHours(20, 30, 0, 0);

      let targetDate: Date;
      let eventName = 'Sunday Worship Service';
      let isPrayer = false;

      // If we are closer to today's 8:30 PM prayer
      if (isBeforeOnlinePrayerToday) {
        targetDate = tonightPrayer;
        eventName = isKn ? 'ಇಂದಿನ ಆನ್‌ಲೈನ್ ಪ್ರಾರ್ಥನೆ (8:30 PM)' : 'Tonight’s Online Prayer (8:30 PM)';
        isPrayer = true;
      } else {
        targetDate = nextSunday;
        eventName = isKn ? 'ಮುಂದಿನ ಭಾನುವಾರದ ಆರಾಧನೆ (10:00 AM)' : 'Next Sunday Morning Worship (10:00 AM)';
      }

      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, targetEvent: eventName, isTonightPrayer: isPrayer });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [isKn]);

  const handleShareReminder = () => {
    const text = isKn
      ? `✝ ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಮಾದಾಪುರ\nಮುಂದಿನ ಆರಾಧನೆ: ${timeLeft.targetEvent}\nಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ: +91 7353609920\nವೆಬ್‌ಸೈಟ್: ${window.location.href}`
      : `✝ Rehoboth Prayer House, Madapura\nNext Gathering: ${timeLeft.targetEvent}\nPastor Ramesh C: +91 7353609920\nVisit: ${window.location.href}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="relative -mt-6 sm:-mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-[#FAF9F6] border-2 border-[#D4AF37] rounded-lg shadow-xl overflow-hidden">
        {/* Top Header Bar */}
        <div className="bg-[#123F42] text-white px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/40">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#D4AF37]">
              {isKn ? 'ಮುಂದಿನ ಆರಾಧನಾ ಕ್ಷಣಗಣನೆ' : 'NEXT GATHERING COUNTDOWN'}
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-white font-medium truncate max-w-xs sm:max-w-md">
              {timeLeft.targetEvent}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareReminder}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-[#E5E1D8] text-xs font-sans font-semibold rounded transition-colors"
              title="Copy details"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-300">{isKn ? 'ಕಾಪಿ ಮಾಡಲಾಗಿದೆ' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{isKn ? 'ಜ್ಞಾಪನೆ ಹಂಚಿಕೊಳ್ಳಿ' : 'Share Reminder'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#FAF9F6] to-[#F2EFE9] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full md:w-auto">
            <div className="flex flex-col items-center bg-white border border-[#E5E1D8] p-2.5 sm:p-4 rounded-md shadow-sm min-w-[58px] sm:min-w-[80px]">
              <span className="text-xl sm:text-3xl font-mono font-bold text-[#123F42]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-sans uppercase tracking-widest text-[#8B7E66] font-bold mt-0.5 sm:mt-1">
                {isKn ? 'ದಿನ' : 'Days'}
              </span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">:</span>

            <div className="flex flex-col items-center bg-white border border-[#E5E1D8] p-2.5 sm:p-4 rounded-md shadow-sm min-w-[58px] sm:min-w-[80px]">
              <span className="text-xl sm:text-3xl font-mono font-bold text-[#123F42]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-sans uppercase tracking-widest text-[#8B7E66] font-bold mt-0.5 sm:mt-1">
                {isKn ? 'ಗಂಟೆ' : 'Hours'}
              </span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">:</span>

            <div className="flex flex-col items-center bg-white border border-[#E5E1D8] p-2.5 sm:p-4 rounded-md shadow-sm min-w-[58px] sm:min-w-[80px]">
              <span className="text-xl sm:text-3xl font-mono font-bold text-[#123F42]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-sans uppercase tracking-widest text-[#8B7E66] font-bold mt-0.5 sm:mt-1">
                {isKn ? 'ನಿಮಿಷ' : 'Mins'}
              </span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">:</span>

            <div className="flex flex-col items-center bg-white border border-[#E5E1D8] p-2.5 sm:p-4 rounded-md shadow-sm min-w-[58px] sm:min-w-[80px]">
              <span className="text-xl sm:text-3xl font-mono font-bold text-[#8B6E32]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-sans uppercase tracking-widest text-[#8B7E66] font-bold mt-0.5 sm:mt-1">
                {isKn ? 'ಸೆಕೆಂಡ್' : 'Secs'}
              </span>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
            <a
              href={`https://wa.me/${CHURCH_INFO.phoneRaw}?text=${encodeURIComponent('Praise the Lord Pastor, please share the prayer meeting connection details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none justify-center px-4 py-2.5 bg-[#123F42] hover:bg-[#0E3234] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider rounded transition-all shadow flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-[#D4AF37]" />
              <span>{isKn ? 'ಪ್ರಾರ್ಥನೆಗೆ ಸೇರಿ' : 'Join Online Prayer'}</span>
            </a>

            <a
              href="#timings"
              className="flex-1 sm:flex-none justify-center px-4 py-2.5 bg-white hover:bg-neutral-50 text-[#123F42] text-xs sm:text-sm font-sans font-bold uppercase tracking-wider rounded border border-[#8B7E66]/50 transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#8B7E66]" />
              <span>{isKn ? 'ಆರಾಧನಾ ವಿವರ' : 'Schedule'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
