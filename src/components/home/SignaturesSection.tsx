'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppState } from '@/components/providers/AppStateContext';
import { MENU_ITEMS } from '@/data/menuData';
import { Plus, ArrowRight, Eye } from 'lucide-react';

export function SignaturesSection() {
  const { openProductModal, addToCart } = useAppState();

  // Pick the 4 flagship signature items
  const signatures = [
    MENU_ITEMS.find((i) => i.slug === 'og-masala-chai')!,
    MENU_ITEMS.find((i) => i.slug === 'three-cheese-chilli-toast')!,
    MENU_ITEMS.find((i) => i.slug === 'choco-crunch-toast')!,
    MENU_ITEMS.find((i) => i.slug === 'tea-toast-heritage-platter')!
  ].filter(Boolean);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            03 / Signature Creations
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
            THE HOUSE <span className="italic font-serif text-[#173F35]">REPERTOIRE</span>
          </h2>
        </div>

        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#173F35] hover:text-[#C46A32] transition-colors group"
        >
          <span>View All 28 Menu Offerings</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Staggered Editorial Showcase (Asymmetric 2x2 with vertical offset) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {signatures.map((item, index) => {
          const isOffset = index % 2 === 1;

          return (
            <div
              key={item.id}
              className={`group flex flex-col justify-between transition-all duration-500 ${
                isOffset ? 'md:translate-y-12' : ''
              }`}
            >
              {/* Image Vessel Container with Hover Reveal */}
              <div
                className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-[#EFE7D8] shadow-lg border border-[#241C18]/10 cursor-pointer"
                onClick={() => openProductModal(item)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-[#241C18]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-[#F7F1E5] text-[#241C18] text-xs font-mono uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Details
                  </span>
                </div>

                {/* Dietary / Signature Pill */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#173F35] text-[#F7F1E5] text-[10px] font-mono uppercase tracking-wider">
                    Signature
                  </span>
                  {item.dietary.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded-full bg-[#F7F1E5]/90 text-[#241C18] text-[10px] font-mono font-bold"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial Info Row */}
              <div className="pt-6 space-y-3">
                <div className="flex items-baseline justify-between border-b border-[#241C18]/10 pb-3">
                  <h3
                    onClick={() => openProductModal(item)}
                    className="font-serif-display text-2xl sm:text-3xl text-[#241C18] group-hover:text-[#173F35] cursor-pointer transition-colors"
                  >
                    {item.name}
                  </h3>
                  <span className="font-mono text-lg font-bold text-[#173F35]">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-sm text-[#241C18]/75 leading-relaxed font-body">
                  {item.description}
                </p>

                {/* Quick Add CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => openProductModal(item)}
                    className="text-xs font-mono text-[#C46A32] hover:underline"
                  >
                    Tasting Notes & Ingredients →
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 rounded-full bg-[#173F35]/10 hover:bg-[#173F35] text-[#173F35] hover:text-[#F7F1E5] text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5"
                    aria-label={`Add ${item.name} to tray`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
