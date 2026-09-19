'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MENU_ITEMS } from '@/data/menuData';
import { useAppState } from '@/components/providers/AppStateContext';
import { MenuCategory, DietaryFlag, MenuItem } from '@/types';
import { Search, Plus, Eye, Sparkles } from 'lucide-react';

export default function MenuPage() {
  const { openProductModal, addToCart } = useAppState();

  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<DietaryFlag[]>([]);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Offerings', count: MENU_ITEMS.length },
    { key: 'tea', label: 'Artisanal Teas', count: MENU_ITEMS.filter((i) => i.category === 'tea').length },
    { key: 'toast', label: 'Artisan Toasts', count: MENU_ITEMS.filter((i) => i.category === 'toast').length },
    { key: 'snacks', label: 'Small Plates', count: MENU_ITEMS.filter((i) => i.category === 'snacks').length },
    { key: 'desserts', label: 'House Confections', count: MENU_ITEMS.filter((i) => i.category === 'desserts').length },
    { key: 'combos', label: 'Curated Combos', count: MENU_ITEMS.filter((i) => i.category === 'combos').length }
  ];

  const dietaryOptions: { flag: DietaryFlag; label: string }[] = [
    { flag: 'V', label: 'Vegetarian' },
    { flag: 'VG', label: 'Vegan' },
    { flag: 'GF', label: 'Gluten-Friendly' },
    { flag: 'J', label: 'Jain Friendly' }
  ];

  const toggleDietary = (flag: DietaryFlag) => {
    setSelectedDietary((prev) =>
      prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag]
    );
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIng = item.ingredients.some((ing) => ing.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }
      // Dietary filter
      if (selectedDietary.length > 0) {
        const matchesAllDietary = selectedDietary.every((flag) => item.dietary.includes(flag));
        if (!matchesAllDietary) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          The Culinary Repertoire
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          TASTING <span className="italic font-serif text-[#173F35]">INDEX.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          Poured hot in porous clay, or crisped over cast-iron with cultured butter. Every harvest and loaf has an origin.
        </p>
      </div>

      {/* Category Navigation & Search Sub-bar */}
      <div className="space-y-6 mb-12 border-b border-[#241C18]/15 pb-8">
        {/* Category Pill Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider shrink-0 transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#173F35] text-[#F7F1E5] font-semibold shadow-xs'
                  : 'bg-[#EFE7D8]/70 text-[#241C18]/70 hover:bg-[#EFE7D8] hover:text-[#241C18]'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filter Controls Row: Search & Dietary Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-[#241C18]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient, spice or dish..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[#241C18]/15 bg-white/60 text-xs font-mono text-[#241C18] placeholder-[#241C18]/40 focus:outline-hidden focus:border-[#173F35]"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono text-[#241C18]/60 uppercase tracking-wider shrink-0 mr-1">
              Filter:
            </span>
            {dietaryOptions.map((opt) => {
              const isSelected = selectedDietary.includes(opt.flag);
              return (
                <button
                  key={opt.flag}
                  onClick={() => toggleDietary(opt.flag)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all shrink-0 ${
                    isSelected
                      ? 'bg-[#C46A32] text-white font-bold'
                      : 'border border-[#241C18]/15 bg-white/40 text-[#241C18]/70 hover:border-[#241C18]/30'
                  }`}
                >
                  [{opt.flag}] {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Menu Layout: Two Columns (Editorial Ledger on Left/Center, Sticky Visual Preview on Right for Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Numbered Ledger (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-[#EFE7D8]/40 rounded-3xl p-8">
              <p className="font-serif-display text-2xl text-[#241C18]">No offerings match your search</p>
              <p className="text-xs font-mono text-[#241C18]/60 mt-1">Try resetting the dietary filters or search terms</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDietary([]);
                  setActiveCategory('all');
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#241C18]/15 border-t border-[#241C18]/15">
              {filteredItems.map((item, index) => {
                const itemNumber = (index + 1).toString().padStart(2, '0');

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredItem(item)}
                    className="py-6 group transition-colors duration-200 hover:bg-[#EFE7D8]/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  >
                    {/* Item Number & Titles */}
                    <div className="space-y-1.5 flex-1 cursor-pointer" onClick={() => openProductModal(item)}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#C46A32] font-bold">
                          {itemNumber}
                        </span>
                        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241C18] group-hover:text-[#173F35] transition-colors inline-block">
                          {item.name}
                        </h3>

                        {item.isSignature && (
                          <span className="px-2 py-0.5 rounded-full bg-[#173F35]/10 text-[#173F35] text-[10px] font-mono uppercase tracking-wider font-semibold">
                            Signature
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#241C18]/70 font-mono tracking-wide">
                        {item.ingredients.slice(0, 4).join(' / ')}
                      </p>

                      <p className="text-sm text-[#241C18]/80 font-body line-clamp-2 max-w-xl pt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Price, Dietary & Action */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:justify-between shrink-0 pt-2 sm:pt-0">
                      <div className="flex items-center gap-2">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#241C18]/5 text-[#241C18]"
                          >
                            [{d}]
                          </span>
                        ))}
                        <span className="font-mono text-base sm:text-lg font-bold text-[#173F35]">
                          ₹{item.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openProductModal(item)}
                          className="p-2 rounded-full hover:bg-[#241C18]/10 text-[#241C18]/60 hover:text-[#241C18] transition-colors"
                          aria-label={`View details for ${item.name}`}
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 rounded-full bg-[#173F35] hover:bg-[#12332B] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs"
                          aria-label={`Add ${item.name} to tray`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sticky Desktop Preview Panel (4 cols) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-32">
          {hoveredItem ? (
            <div className="bg-[#EFE7D8]/60 p-6 rounded-3xl border border-[#241C18]/10 shadow-lg space-y-4 animate-in fade-in duration-300">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#241C18]/10">
                <Image
                  src={hoveredItem.image}
                  alt={hoveredItem.name}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C46A32]">
                  {hoveredItem.category}
                </span>
                <h4 className="font-serif-display text-2xl text-[#241C18]">
                  {hoveredItem.name}
                </h4>
                <p className="text-xs text-[#241C18]/75 font-body">
                  {hoveredItem.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#241C18]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#173F35] font-bold text-base">₹{hoveredItem.price}</span>
                <button
                  onClick={() => openProductModal(hoveredItem)}
                  className="text-[#C46A32] font-semibold hover:underline"
                >
                  Full Dossier & Customizer →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-3xl border border-dashed border-[#241C18]/20 text-center space-y-2 text-xs font-mono text-[#241C18]/60">
              <Sparkles className="w-6 h-6 mx-auto text-[#E4B363]" />
              <p className="font-serif-display text-lg text-[#241C18]">Hover Over Any Dish</p>
              <p>Move your cursor over an offering to inspect live culinary photography and origin stories.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
