'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, HeartHandshake, Leaf, Flame } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-28 sm:space-y-36">
      {/* 01: Hero Statement */}
      <div className="max-w-4xl space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
          The Heritage Narrative
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl text-[#241C18] font-normal leading-[0.98] tracking-tight">
          AN EVERYDAY <br />
          <span className="italic font-serif text-[#173F35]">LITURGY</span> FOR <br />
          SLOW CONVERSATIONS.
        </h1>
        <p className="text-base sm:text-xl text-[#241C18]/80 font-body leading-relaxed max-w-2xl pt-2">
          Tea Toast was born from an unyielding dissatisfaction with hasty, cardboard-cup takeaway culture. We believe chai is India&apos;s sacred third place — a deliberate pause where time softens.
        </p>
      </div>

      {/* 02: Full-Bleed Atmospheric Visual Spread */}
      <div className="relative aspect-21/9 rounded-3xl overflow-hidden shadow-2xl bg-[#241C18]">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85"
          alt="Atmospheric view of the Tea Toast cafe interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E4B363]">
              The Sanctuary Design
            </span>
            <p className="font-serif-display text-3xl font-normal">
              Indiranagar Flagship • Two Stories of Uncoated Lime-Wash & Terracotta
            </p>
          </div>
          <Link
            href="/reserve"
            className="px-6 py-2.5 rounded-full bg-[#E4B363] text-[#241C18] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Visit Sanctuary
          </Link>
        </div>
      </div>

      {/* 03: The Three Pillars of Craft */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        {/* Pillar 1 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#E4B363] flex items-center justify-center">
            <Leaf className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            Pillar 01 / Sourcing
          </span>
          <h3 className="font-serif-display text-3xl text-[#241C18]">
            Single-Estate Harvests
          </h3>
          <p className="text-sm text-[#241C18]/80 font-body leading-relaxed">
            We bypass middlemen aggregators. Our CTC and Orthodox teas are procured directly from heritage gardens in Upper Assam, the misty valleys of Mirik in Darjeeling, and high-altitude slopes in Idukki.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#E4B363] flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            Pillar 02 / The Boil
          </span>
          <h3 className="font-serif-display text-3xl text-[#241C18]">
            Aeration & Clay Vessels
          </h3>
          <p className="text-sm text-[#241C18]/80 font-body leading-relaxed">
            Never powdered spices, never pre-mixed concentrates. Our tea is pulled from height in heavy brass samovars to aerate the liquor and poured into porous unglazed kulhads fired with natural wood ash.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#E4B363] flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            Pillar 03 / Hearth Bakery
          </span>
          <h3 className="font-serif-display text-3xl text-[#241C18]">
            Slow-Fermented Bread
          </h3>
          <p className="text-sm text-[#241C18]/80 font-body leading-relaxed">
            Our sourdoughs undergo a 36-hour cold ferment, and our Japanese brioche milk breads are baked fresh every sunrise. Griddled strictly over seasoned cast iron with cultured salted butter.
          </p>
        </div>
      </div>

      {/* 04: Editorial Quote Section */}
      <div className="p-10 sm:p-16 rounded-3xl bg-[#EFE7D8]/70 border border-[#241C18]/10 text-center max-w-4xl mx-auto space-y-6">
        <Sparkles className="w-8 h-8 text-[#C46A32] mx-auto" />
        <h2 className="font-serif-display text-3xl sm:text-5xl text-[#241C18] leading-tight">
          &ldquo;When you share chai and toast with someone, you are not just having breakfast. You are agreeing to share silence, laughter, and truth.&rdquo;
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-[#173F35] font-semibold">
          — Founding Guild Manifesto, Tea Toast 2026
        </p>
      </div>

      {/* 05: Bottom Journey CTA */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#241C18]/15">
        <div>
          <h4 className="font-serif-display text-3xl text-[#241C18]">
            Ready to experience the ritual?
          </h4>
          <p className="text-xs font-mono text-[#241C18]/70 mt-1">
            Browse our 28 menu offerings or reserve your corner in the courtyard.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/menu"
            className="px-8 py-3.5 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md"
          >
            Explore Menu
          </Link>
          <Link
            href="/reserve"
            className="px-8 py-3.5 rounded-full border border-[#241C18]/25 text-[#241C18] text-xs font-mono uppercase tracking-wider hover:bg-[#241C18]/5 transition-all"
          >
            Reserve Table
          </Link>
        </div>
      </div>
    </div>
  );
}
