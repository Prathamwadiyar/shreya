'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppState } from '@/components/providers/AppStateContext';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

interface RecommendationPairing {
  mood: string;
  tagline: string;
  story: string;
  teaSlug: string;
  toastSlug: string;
  discountedPrice: number;
}

const MOOD_PAIRINGS: Record<string, RecommendationPairing> = {
  ENERGETIC: {
    mood: 'ENERGETIC',
    tagline: 'Bold ginger heat & sharp cast-iron cheddar',
    story: 'When you need a punch of unyielding stamina. We match our intense double-ginger Kadak brew with the sharp crunch of three-cheese chillies on toasted milk bread.',
    teaSlug: 'gully-adrak-chai',
    toastSlug: 'three-cheese-chilli-toast',
    discountedPrice: 220
  },
  COMFORT: {
    mood: 'COMFORT',
    tagline: 'Warm cardamom solace & melting cultured malai',
    story: 'For rainy mid-afternoons or quiet reflection. The comforting embrace of slow-boiled Masala Chai with whole Idukki pods paired with hot split brioche dripping with salted butter and clotted malai.',
    teaSlug: 'og-masala-chai',
    toastSlug: 'classic-mumbai-maska-bun',
    discountedPrice: 130
  },
  RELAXED: {
    mood: 'RELAXED',
    tagline: 'Floral saffron green tea & raw almond sweetness',
    story: 'A serene pause. Gentle Kashmir green leaves steeped with saffron threads, cinnamon, and raw honey, paired with seasonal fresh figs and whipped spiced mascarpone.',
    teaSlug: 'kashmiri-saffron-kahwa',
    toastSlug: 'fig-honey-mascarpone-toast',
    discountedPrice: 300
  },
  FOCUSED: {
    mood: 'FOCUSED',
    tagline: 'Clean tannins & slow-roasted confit garlic',
    story: 'Designed for deep writing or design work. High-altitude Darjeeling First Flush with brisk muscatel clarity alongside slow-confit whole garlic bulbs spread over charred sourdough.',
    teaSlug: 'darjeeling-first-flush',
    toastSlug: 'garlic-herb-butter-toast',
    discountedPrice: 280
  },
  ADVENTUROUS: {
    mood: 'ADVENTUROUS',
    tagline: 'Smoky clay kulhad & 70% dark Malabar chocolate',
    story: 'An exhilarating contrast of elements. Clay-roasted charcoal smoke in your tea, followed by decadent molten dark chocolate feuilletine crunch.',
    teaSlug: 'smoked-cardamom-kulhad-chai',
    toastSlug: 'choco-crunch-toast',
    discountedPrice: 250
  }
};

export function AISommelierTeaser() {
  const [selectedMood, setSelectedMood] = useState<string>('COMFORT');
  const { addToCart } = useAppState();

  const currentPairing = MOOD_PAIRINGS[selectedMood];
  const teaItem = MENU_ITEMS.find((i) => i.slug === currentPairing.teaSlug)!;
  const toastItem = MENU_ITEMS.find((i) => i.slug === currentPairing.toastSlug)!;

  const handleAddBundle = () => {
    addToCart({
      ...teaItem,
      name: `Sommelier Pairing: ${teaItem.name} + ${toastItem.name}`,
      price: currentPairing.discountedPrice
    });
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
          10 / AI Chai Sommelier
        </span>
        <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] mt-2 font-normal tracking-tight">
          WHAT ARE YOU <span className="italic font-serif text-[#173F35]">FEELING TODAY?</span>
        </h2>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body">
          Select your internal emotional cadence. Our sommelier synthesizes the exact leaf extraction, spice profile, and toast pairing for this moment.
        </p>
      </div>

      {/* Mood Options Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {Object.keys(MOOD_PAIRINGS).map((moodKey) => {
          const isSelected = selectedMood === moodKey;
          return (
            <button
              key={moodKey}
              onClick={() => setSelectedMood(moodKey)}
              className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                isSelected
                  ? 'bg-[#173F35] text-[#F7F1E5] font-semibold shadow-md scale-105'
                  : 'bg-[#EFE7D8]/80 text-[#241C18]/70 hover:bg-[#EFE7D8] hover:text-[#241C18]'
              }`}
            >
              {moodKey}
            </button>
          );
        })}
      </div>

      {/* Dynamic Recommendation Card */}
      <div className="bg-[#EFE7D8]/50 border border-[#241C18]/10 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Pairing Duo (6 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md bg-[#241C18]">
              <Image
                src={teaItem.image}
                alt={teaItem.name}
                fill
                sizes="250px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono">
                <span className="text-[10px] text-[#E4B363] uppercase">The Brew</span>
                <p className="font-serif-display text-base truncate">{teaItem.name}</p>
              </div>
            </div>

            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md bg-[#241C18]">
              <Image
                src={toastItem.image}
                alt={toastItem.name}
                fill
                sizes="250px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono">
                <span className="text-[10px] text-[#E4B363] uppercase">The Toast</span>
                <p className="font-serif-display text-base truncate">{toastItem.name}</p>
              </div>
            </div>
          </div>

          {/* Narrative & Add Button (6 cols) */}
          <div className="md:col-span-6 space-y-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C46A32] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Tailored Sanctuary Prescription
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#241C18]">
                {currentPairing.tagline}
              </h3>
            </div>

            <p className="text-sm text-[#241C18]/80 leading-relaxed font-body">
              {currentPairing.story}
            </p>

            <div className="p-4 rounded-xl bg-white/70 border border-[#241C18]/10 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-[#241C18]/60 line-through">₹{teaItem.price + toastItem.price}</span>
                <span className="text-base font-bold text-[#173F35] ml-2">₹{currentPairing.discountedPrice}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#C46A32]/15 text-[#C46A32] font-semibold">
                10% Pairing Benefit
              </span>
            </div>

            <button
              onClick={handleAddBundle}
              className="w-full py-4 px-8 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase hover:bg-[#12332B] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 text-[#E4B363]" />
              <span>Add Curated Bundle to Order</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
