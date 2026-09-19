'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CAFE_MOODS } from '@/data/cafeMoodsData';
import { Sparkles, ArrowRight, Volume2, Clock, MapPin } from 'lucide-react';

export function CafeMoods() {
  const [activeMoodId, setActiveMoodId] = useState('morning');
  const activeMood = CAFE_MOODS.find((m) => m.id === activeMoodId) || CAFE_MOODS[0];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            06 / Atmospheric Rhythm
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
            THE CAFE <span className="italic font-serif text-[#173F35]">MOODS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#241C18]/75 font-body max-w-xl">
            A sanctuary that shifts with the light. Discover how our spaces and menus adapt from early morning stillness to midnight jazz.
          </p>
        </div>

        {/* Sanctuary Zone CTA */}
        <Link
          href="/reserve"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#173F35] hover:text-[#C46A32] transition-colors group"
        >
          <span>Reserve a Specific Mood Zone</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Mood Switcher Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-10 border-b border-[#241C18]/10">
        {CAFE_MOODS.map((mood) => {
          const isSelected = mood.id === activeMoodId;

          return (
            <button
              key={mood.id}
              onClick={() => setActiveMoodId(mood.id)}
              className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#173F35] text-[#F7F1E5] font-semibold shadow-sm'
                  : 'bg-[#EFE7D8]/60 text-[#241C18]/70 hover:bg-[#EFE7D8] hover:text-[#241C18]'
              }`}
            >
              {mood.name}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual Frame (7 cols) */}
        <div className="lg:col-span-7 relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl bg-[#EFE7D8] border border-[#241C18]/10 group">
          <Image
            src={activeMood.heroImage}
            alt={activeMood.name}
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent" />

          {/* Floating Timeframe Pill */}
          <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#F7F1E5]/90 backdrop-blur-md text-[#173F35] text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#C46A32]" />
            <span>{activeMood.timeframe}</span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-6 left-6 right-6 text-[#F7F1E5] space-y-1">
            <p className="font-serif-display text-2xl sm:text-3xl font-normal">
              {activeMood.tagline}
            </p>
          </div>
        </div>

        {/* Narrative & Pairing Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              Atmosphere & Setting
            </span>
            <h3 className="font-serif-display text-3xl text-[#241C18]">
              {activeMood.name}
            </h3>
            <p className="text-sm text-[#241C18]/80 leading-relaxed font-body">
              {activeMood.description}
            </p>
          </div>

          {/* Ambiance Attributes */}
          <div className="space-y-3 pt-2 text-xs font-mono border-t border-[#241C18]/10">
            <div className="flex items-start gap-3 text-[#241C18]/80">
              <Volume2 className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#173F35]">Soundtrack & Vibe: </span>
                <span>{activeMood.atmosphereSound}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[#241C18]/80">
              <MapPin className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#173F35]">Sanctuary Seating: </span>
                <span>{activeMood.seatingZone}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[#241C18]/80">
              <Sparkles className="w-4 h-4 text-[#E4B363] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#173F35]">Ideal Pairing: </span>
                <span className="text-[#C46A32] font-semibold">{activeMood.recommendedChai}</span> + {activeMood.recommendedToast}
              </div>
            </div>
          </div>

          {/* Direct Reserve Button */}
          <div className="pt-2">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-sm"
            >
              <span>Book Table For This Mood</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
