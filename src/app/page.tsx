import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandStatement } from '@/components/home/BrandStatement';
import { SignaturesSection } from '@/components/home/SignaturesSection';
import { TeaExperienceScroll } from '@/components/home/TeaExperienceScroll';
import { BuildYourChai } from '@/components/home/BuildYourChai';
import { CafeMoods } from '@/components/home/CafeMoods';
import { SanctuaryGallery } from '@/components/home/SanctuaryGallery';
import { EventsTicker } from '@/components/home/EventsTicker';
import { TeaPassportSection } from '@/components/home/TeaPassportSection';
import { AISommelierTeaser } from '@/components/home/AISommelierTeaser';
import { LocationConcierge } from '@/components/home/LocationConcierge';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Brand Statement */}
      <BrandStatement />

      {/* 03: Signature Products */}
      <SignaturesSection />

      {/* 04: The Tea Experience Scroll */}
      <TeaExperienceScroll />

      {/* 05: Build Your Chai Customization Studio */}
      <BuildYourChai />

      {/* 06: Cafe Experience Moods */}
      <CafeMoods />

      {/* 07: The Physical Sanctuary Gallery */}
      <SanctuaryGallery />

      {/* 08: Events & Cultural Calendar */}
      <EventsTicker />

      {/* 09: The Tea Passport Loyalty */}
      <TeaPassportSection />

      {/* 10: AI Recommendation Sommelier */}
      <AISommelierTeaser />

      {/* 11: Location & Sanctuary Concierge */}
      <LocationConcierge />
    </div>
  );
}
