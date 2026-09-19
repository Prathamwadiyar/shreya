'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppState } from '@/components/providers/AppStateContext';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, ShoppingBag, ArrowRight, RefreshCw, Music, Coffee } from 'lucide-react';

interface FullSommelierPrescription {
  mood: string;
  energyTitle: string;
  narrative: string;
  teaSlug: string;
  toastSlug: string;
  musicCadence: string;
  recommendedTime: string;
  bundlePrice: number;
}

const PRESCRIPTIONS: Record<string, FullSommelierPrescription> = {
  Energetic: {
    mood: 'Energetic',
    energyTitle: 'High Octane Kadak & Sharp Melted Cheddar',
    narrative: 'When you are ready to seize the afternoon or power through creative deadlines. The deep astringent tannins of Assam CTC paired with fresh crushed black ginger spark alertness, balanced by the savory crunch of Bhavnagri chillies and aged English cheddar.',
    teaSlug: 'gully-adrak-chai',
    toastSlug: 'three-cheese-chilli-toast',
    musicCadence: 'Uptempo fusion sitar & electro-acoustic tabla',
    recommendedTime: '11:00 AM — 3:00 PM',
    bundlePrice: 220
  },
  Comfort: {
    mood: 'Comfort',
    energyTitle: 'Cardamom Hug & Melting Cultured Malai',
    narrative: 'For emotional solace, rainy mornings, or bittersweet memories. Slow-simmered whole milk infused with fragrant Idukki cardamom pods and sweet desi jaggery, accompanied by hot split brioche buns smothered with salted butter and clotted malai.',
    teaSlug: 'og-masala-chai',
    toastSlug: 'classic-mumbai-maska-bun',
    musicCadence: 'Mellow classical morning ragas on bamboo flute',
    recommendedTime: '8:00 AM — 11:00 AM or Rainy Evenings',
    bundlePrice: 130
  },
  Relaxed: {
    mood: 'Relaxed',
    energyTitle: 'Saffron Meadow Sips & Orchard Sweetness',
    narrative: 'A gentle deceleration for the nervous system. Delicate whole green leaves brewed with wild saffron threads, cinnamon quills, and shaved almonds, alongside fresh orchard mission figs and whipped mascarpone cream on toasted brioche.',
    teaSlug: 'kashmiri-saffron-kahwa',
    toastSlug: 'fig-honey-mascarpone-toast',
    musicCadence: 'Nocturnal ambient jazz & soft acoustic guitar',
    recommendedTime: '4:00 PM — 7:00 PM Sunset Hour',
    bundlePrice: 300
  },
  Focused: {
    mood: 'Focused',
    energyTitle: 'Crystalline Tannins & Confit Garlic Sourdough',
    narrative: 'A clean, cognitive state stripped of brain fog. Unblended single-garden Darjeeling First Flush with brisk floral clarity, paired with slow-roasted confit garlic bulbs spread like velvet over naturally fermented crusty sourdough.',
    teaSlug: 'darjeeling-first-flush',
    toastSlug: 'garlic-herb-butter-toast',
    musicCadence: 'Binaural lo-fi piano with cafe courtyard rain sounds',
    recommendedTime: '10:00 AM — 2:00 PM Deep Work Sessions',
    bundlePrice: 280
  },
  Adventurous: {
    mood: 'Adventurous',
    energyTitle: 'Smoked Kiln Embers & Single-Origin Malabar Ganache',
    narrative: 'A sensory voyage between fire and silk. Porous terracotta kulhads roasted directly on glowing coals impart an earthy kiln minerality to the tea, followed by the intense crunch of 70% dark chocolate feuilletine flakes.',
    teaSlug: 'smoked-cardamom-kulhad-chai',
    toastSlug: 'choco-crunch-toast',
    musicCadence: 'Experimental Indian percussion & indie electronic',
    recommendedTime: '7:00 PM — Midnight Sanctuary',
    bundlePrice: 250
  }
};

export default function RecommendPage() {
  const [selectedMood, setSelectedMood] = useState<string>('Comfort');
  const { addToCart } = useAppState();

  const current = PRESCRIPTIONS[selectedMood];
  const teaItem = MENU_ITEMS.find((i) => i.slug === current.teaSlug)!;
  const toastItem = MENU_ITEMS.find((i) => i.slug === current.toastSlug)!;

  const handleAddBundle = () => {
    addToCart({
      ...teaItem,
      name: `Sommelier Prescription: ${teaItem.name} + ${toastItem.name}`,
      price: current.bundlePrice
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          The AI Sommelier Desk
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          WHAT ARE YOU <br />
          <span className="italic font-serif text-[#173F35]">FEELING TODAY?</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          No generic dropdowns. Select your current emotional frequency. We synthesize single-estate extractions, spice heat levels, and bakery pairings for your exact moment.
        </p>
      </div>

      {/* Mood Frequency Chips */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
        {Object.keys(PRESCRIPTIONS).map((moodKey) => {
          const isSelected = selectedMood === moodKey;
          return (
            <button
              key={moodKey}
              onClick={() => setSelectedMood(moodKey)}
              className={`px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                isSelected
                  ? 'bg-[#173F35] text-[#F7F1E5] font-bold shadow-xl scale-105 border border-[#E4B363]/40'
                  : 'bg-[#EFE7D8]/80 text-[#241C18]/70 hover:bg-[#EFE7D8] hover:text-[#241C18] border border-[#241C18]/10'
              }`}
            >
              {moodKey}
            </button>
          );
        })}
      </div>

      {/* Prescribed Experience Showcase Card */}
      <div className="bg-[#EFE7D8]/60 rounded-3xl p-8 sm:p-14 border border-[#241C18]/15 shadow-2xl max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#241C18]/10 pb-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#C46A32] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E4B363]" />
              Synthesized Sanctuary Prescription
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#241C18]">
              {current.energyTitle}
            </h2>
          </div>

          <div className="text-left sm:text-right font-mono text-xs text-[#173F35]">
            <p className="font-bold">BEST ENJOYED</p>
            <p className="text-[#241C18]/70">{current.recommendedTime}</p>
          </div>
        </div>

        {/* Sensory Story */}
        <p className="text-base sm:text-lg text-[#241C18]/85 font-body leading-relaxed max-w-3xl">
          {current.narrative}
        </p>

        {/* Pairing Visual Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Tea Card */}
          <div className="p-5 rounded-2xl bg-white/70 border border-[#241C18]/10 flex gap-4 items-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0 bg-[#241C18]">
              <Image src={teaItem.image} alt={teaItem.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C46A32]">The Leaf Infusion</span>
              <h4 className="font-serif-display text-xl text-[#241C18]">{teaItem.name}</h4>
              <p className="text-xs text-[#241C18]/70 font-mono line-clamp-1">{teaItem.ingredients.join(', ')}</p>
            </div>
          </div>

          {/* Toast Card */}
          <div className="p-5 rounded-2xl bg-white/70 border border-[#241C18]/10 flex gap-4 items-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0 bg-[#241C18]">
              <Image src={toastItem.image} alt={toastItem.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C46A32]">The Hearth Toast</span>
              <h4 className="font-serif-display text-xl text-[#241C18]">{toastItem.name}</h4>
              <p className="text-xs text-[#241C18]/70 font-mono line-clamp-1">{toastItem.ingredients.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Soundtrack / Ambiance Note */}
        <div className="p-4 rounded-xl bg-[#173F35]/10 border border-[#173F35]/15 flex items-center justify-between text-xs font-mono text-[#173F35]">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-[#C46A32]" />
            <span>Soundtrack Cadence: {current.musicCadence}</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[#241C18]/60">Playing on Sanctuary Radio</span>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#241C18]/10">
          <div className="font-mono text-xs">
            <span className="text-[#241C18]/60 line-through">Standard ₹{teaItem.price + toastItem.price}</span>
            <span className="text-xl font-bold text-[#173F35] ml-3">Bundle Price: ₹{current.bundlePrice}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAddBundle}
              className="flex-1 sm:flex-none px-8 py-4 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs font-mono uppercase tracking-widest hover:bg-[#12332B] transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 text-[#E4B363]" />
              <span>Add Curated Bundle to Order</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
