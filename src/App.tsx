/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroVerseBanner } from './components/HeroVerseBanner';
import { CountdownLiveBanner } from './components/CountdownLiveBanner';
import { AboutSection } from './components/AboutSection';
import { ServiceScheduleSection } from './components/ServiceScheduleSection';
import { DailyPromiseCard } from './components/DailyPromiseCard';
import { MinistriesSection } from './components/MinistriesSection';
import { OnlinePrayerSection } from './components/OnlinePrayerSection';
import { PastorSection } from './components/PastorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GivingSection } from './components/GivingSection';
import { WordOfGodSection } from './components/WordOfGodSection';
import { PrayerRequestFormSection } from './components/PrayerRequestFormSection';
import { FaqSection } from './components/FaqSection';
import { LocationEmailSection } from './components/LocationEmailSection';
import { Footer } from './components/Footer';
import { FloatingActionDock } from './components/FloatingActionDock';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('kn');

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D3436] flex flex-col antialiased selection:bg-[#D4AF37]/30 selection:text-[#123F42]">
      {/* 1. Header & Navigation */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
      />

      {/* 2. Main Official Church Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroVerseBanner currentLang={currentLang} />

        {/* Live Service / Online Prayer Countdown Banner */}
        <CountdownLiveBanner currentLang={currentLang} />

        {/* Welcome & About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Church Worship & Prayer Timings */}
        <ServiceScheduleSection currentLang={currentLang} />

        {/* Daily Divine Scripture Promise Widget */}
        <DailyPromiseCard currentLang={currentLang} />

        {/* Church Ministries Showcase */}
        <MinistriesSection currentLang={currentLang} />

        {/* Daily Online Prayer (8:30 PM) */}
        <OnlinePrayerSection currentLang={currentLang} />

        {/* Senior Pastor Profile & Testimony */}
        <PastorSection currentLang={currentLang} />

        {/* Testimonials & Answered Prayers */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Tithes, Offerings & Building Support */}
        <GivingSection currentLang={currentLang} />

        {/* Word of God & Kannada Holy Bible */}
        <WordOfGodSection currentLang={currentLang} />

        {/* Prayer Request & Contact Form */}
        <PrayerRequestFormSection currentLang={currentLang} />

        {/* Visitor Guide & FAQ */}
        <FaqSection currentLang={currentLang} />

        {/* Church Email, Directions on Maps, Transit Guide */}
        <LocationEmailSection currentLang={currentLang} />
      </main>

      {/* 3. Church Footer */}
      <Footer currentLang={currentLang} />

      {/* 4. Quick Action Floating Dock */}
      <FloatingActionDock currentLang={currentLang} />
    </div>
  );
}
