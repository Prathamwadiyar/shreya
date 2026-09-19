'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Terracotta Chai Bar',
    subtitle: 'Simmering brass samovars and fluted clay cups',
    category: 'Architecture & Craft',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-2',
    title: 'The Cast-Iron Hearth',
    subtitle: 'Thick artisan country loaves crisping in cultured butter',
    category: 'Toast Preparation',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-3',
    title: 'The Sunlit Courtyard',
    subtitle: 'Natural lime-wash textures, ficus trees, and quiet banter',
    category: 'Sanctuary Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-4',
    title: 'Hand-Crushing the Spices',
    subtitle: 'Fresh root ginger and Idukki cardamom pods bruised to order',
    category: 'Tea Ritual',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-5',
    title: 'Evening Jazz & Tea Salon',
    subtitle: 'Amber glass pendants glowing as the city unwinds',
    category: 'Atmosphere & People',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80'
  }
];

export function SanctuaryGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            07 / The Physical Space
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
            THE PHYSICAL <span className="italic font-serif text-[#173F35]">SANCTUARY.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#241C18]/75 font-body max-w-xl">
            Fluted terracotta, live ficus branches, heavy brass samovars, and the comforting crackle of cast iron.
          </p>
        </div>

        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-sm group"
        >
          <span>Explore The Cafe Journey</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Masonry / Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Item 1: Large Featured (7 cols) */}
        <div
          onClick={() => setSelectedItem(GALLERY_ITEMS[0])}
          className="lg:col-span-7 relative aspect-16/10 rounded-3xl overflow-hidden bg-[#EFE7D8] shadow-lg border border-[#241C18]/10 group cursor-pointer"
        >
          <Image
            src={GALLERY_ITEMS[0].image}
            alt={GALLERY_ITEMS[0].title}
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F7F1E5]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E4B363] block mb-1">
                {GALLERY_ITEMS[0].category}
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-normal">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs text-[#F7F1E5]/75 font-body mt-1">
                {GALLERY_ITEMS[0].subtitle}
              </p>
            </div>
            <Maximize2 className="w-5 h-5 text-[#E4B363] opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Item 2: Right Top (5 cols) */}
        <div
          onClick={() => setSelectedItem(GALLERY_ITEMS[1])}
          className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto rounded-3xl overflow-hidden bg-[#EFE7D8] shadow-lg border border-[#241C18]/10 group cursor-pointer"
        >
          <Image
            src={GALLERY_ITEMS[1].image}
            alt={GALLERY_ITEMS[1].title}
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-[#F7F1E5]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E4B363] block mb-1">
              {GALLERY_ITEMS[1].category}
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-normal">
              {GALLERY_ITEMS[1].title}
            </h3>
          </div>
        </div>

        {/* Bottom Row: 3 Staggered Items (4 cols each) */}
        {GALLERY_ITEMS.slice(2).map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="lg:col-span-4 relative aspect-4/3 rounded-3xl overflow-hidden bg-[#EFE7D8] shadow-lg border border-[#241C18]/10 group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-[#F7F1E5]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E4B363] block mb-1">
                {item.category}
              </span>
              <h3 className="font-serif-display text-xl font-normal">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#241C18]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full bg-[#241C18] rounded-3xl overflow-hidden shadow-2xl border border-white/15 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1000px"
                className="object-cover"
              />
            </div>

            <div className="p-6 bg-[#241C18] text-[#F7F1E5] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#E4B363] uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif-display text-2xl text-white mt-0.5">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#F7F1E5]/70 font-body mt-1">
                  {selectedItem.subtitle}
                </p>
              </div>

              <Link
                href="/reserve"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-full bg-[#E4B363] text-[#241C18] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Visit In Person
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
