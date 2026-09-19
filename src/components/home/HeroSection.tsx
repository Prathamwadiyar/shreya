'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThreeTeaSteam } from '@/components/common/ThreeTeaSteam';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Meta Line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#241C18]/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C46A32]">
            Vol. 01 • Est. 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#241C18]/30" />
          <span className="text-xs font-mono tracking-wider text-[#241C18]/70">
            Roastery & Artisanal Kitchen
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#173F35] bg-[#173F35]/5 px-3 py-1.5 rounded-full border border-[#173F35]/10 w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>OPEN TODAY • 8:00 AM — 10:00 PM</span>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10 sm:py-16">
        {/* Left Editorial Text Column (7 cols) */}
        <div className="lg:col-span-7 space-y-8 z-20">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#173F35] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E4B363]" />
              The Boutique Chai Sanctuary
            </span>
            <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#241C18] leading-[0.95] font-normal">
              YOUR DAILY <br />
              <span className="italic font-serif text-[#C46A32]">CUP OF</span> <br />
              CHAOS.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#241C18]/80 max-w-lg font-body leading-relaxed">
            Tea, toast and conversations worth staying for. Single-estate Assam leaves boiled over slow flame, hand-crushed ginger, and cast-iron toasts crisping in cultured butter.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/order"
              className="px-8 py-4 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase hover:bg-[#12332B] transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center gap-2 group"
            >
              <span>Order Now</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/menu"
              className="px-8 py-4 rounded-full border border-[#241C18]/25 text-[#241C18] font-medium text-xs tracking-widest uppercase hover:bg-[#241C18]/5 transition-all"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Right Cinematic Culinary Visual with Real-time Steam (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl bg-[#EFE7D8] border border-[#241C18]/10 group">
            {/* Interactive Particle Steam */}
            <ThreeTeaSteam className="opacity-90" />

            {/* Cinematic Chai Vessel Image */}
            <Image
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85"
              alt="Steaming terracotta kulhad of freshly brewed masala chai"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
              className="object-cover scale-102 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Soft Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glass Spec Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#F7F1E5]/90 backdrop-blur-md border border-[#241C18]/10 text-xs font-mono text-[#241C18] flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#C46A32] uppercase tracking-wider font-semibold">
                  Today's Signature Steep
                </p>
                <p className="font-serif-display text-base text-[#241C18] font-normal">
                  OG Masala Chai in Clay Kulhad
                </p>
              </div>
              <span className="font-bold text-[#173F35] text-sm">₹49</span>
            </div>
          </div>

          {/* Decorative Subtle Accent Tag */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-[#C46A32]/30 flex items-center justify-center p-2 text-center pointer-events-none hidden sm:flex bg-[#F7F1E5]/80 backdrop-blur-xs">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#C46A32]">
              Single Estate
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Prompt */}
      <div className="border-t border-[#241C18]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#241C18]/60">
        <span>01 / 12 • THE PROLOGUE</span>
        <span className="hidden sm:inline">SCROLL TO UNPACK THE RITUAL ↓</span>
        <span>BANGALORE SANCTUARY</span>
      </div>
    </section>
  );
}
