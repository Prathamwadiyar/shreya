'use client';

import React from 'react';
import Link from 'next/link';
import { useAppState } from '@/components/providers/AppStateContext';
import { Sparkles, Check, ArrowRight, Stamp } from 'lucide-react';

export function TeaPassportSection() {
  const { stamps, unlockNextStamp, userPoints } = useAppState();
  const unlockedCount = stamps.filter((s) => s.isUnlocked).length;

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Narrative (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              09 / The Loyalty Guild
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
              THE TEA <br />
              <span className="italic font-serif text-[#173F35]">PASSPORT.</span>
            </h2>
          </div>

          <div className="p-4 rounded-2xl bg-[#EFE7D8]/80 border border-[#241C18]/10 text-xs font-mono space-y-1">
            <p className="text-[#C46A32] font-bold tracking-widest uppercase">
              THE HERITAGE PROMISE
            </p>
            <p className="font-serif-display text-2xl text-[#241C18]">
              &ldquo;Try 5 teas. Unlock your sixth.&rdquo;
            </p>
          </div>

          <p className="text-sm text-[#241C18]/75 leading-relaxed font-body">
            Each single-estate brew is a chapter. From smoky charred clay kulhads in Kolkata to fragrant saffron green leaves harvested in the Pampore valley. Stamp your digital passport with every order.
          </p>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div>
              <p className="text-xl font-bold text-[#173F35]">{unlockedCount} / 6</p>
              <p className="text-[#241C18]/60">Stamps Collected</p>
            </div>
            <div className="w-[1px] h-8 bg-[#241C18]/20" />
            <div>
              <p className="text-xl font-bold text-[#C46A32]">{userPoints} pts</p>
              <p className="text-[#241C18]/60">Guild Points Balance</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={unlockNextStamp}
              disabled={unlockedCount >= 6}
              className="px-6 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
            >
              <Stamp className="w-4 h-4 text-[#E4B363]" />
              <span>{unlockedCount >= 6 ? 'Passport Complete! 🎉' : 'Simulate Tasting Next Tea (+50 pts)'}</span>
            </button>

            <Link
              href="/rewards"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C46A32] hover:underline"
            >
              <span>View Rewards Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Physical-Feel Debossed Passport Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#241C18] text-[#F7F1E5] p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#E4B363]/30 relative overflow-hidden">
          {/* Subtle Passport Gold Watermark */}
          <div className="absolute top-6 right-6 opacity-10 font-serif-display text-8xl text-[#E4B363] pointer-events-none select-none">
            TT
          </div>

          <div className="flex items-center justify-between border-b border-[#F7F1E5]/15 pb-6 mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#E4B363]">
                Official Travel Document
              </span>
              <h3 className="font-serif-display text-3xl text-white mt-0.5">
                Tea Toast Passport
              </h3>
            </div>
            <div className="text-right font-mono text-xs">
              <span className="text-[#E4B363]">LEVEL I EXPLORER</span>
              <p className="text-[#F7F1E5]/50 text-[10px]">SERIES: 2026</p>
            </div>
          </div>

          {/* 6 Circular Stamp Slots (2 rows of 3) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {stamps.map((stamp) => (
              <div
                key={stamp.id}
                className={`aspect-square rounded-2xl p-4 border flex flex-col justify-between transition-all relative ${
                  stamp.isUnlocked
                    ? 'border-[#E4B363] bg-[#E4B363]/10 text-white shadow-inner'
                    : 'border-white/10 bg-white/5 text-[#F7F1E5]/40'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold">
                    0{stamp.index}
                  </span>
                  {stamp.isUnlocked ? (
                    <span className="w-5 h-5 rounded-full bg-[#E4B363] text-[#241C18] flex items-center justify-center text-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-mono">
                      ?
                    </span>
                  )}
                </div>

                <div>
                  <h4 className={`font-serif-display text-base leading-tight ${stamp.isUnlocked ? 'text-white' : 'text-[#F7F1E5]/40'}`}>
                    {stamp.teaName}
                  </h4>
                  <p className="text-[9px] font-mono text-[#E4B363]/80 truncate mt-0.5">
                    {stamp.region}
                  </p>
                </div>

                {stamp.isUnlocked && (
                  <div className="text-[8px] font-mono text-[#E4B363] uppercase tracking-wider">
                    STAMPED: {stamp.unlockedDate || 'VERIFIED'}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#F7F1E5]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#F7F1E5]/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E4B363]" />
              <span>Complete 5/5 to unlock the complimentary Secret Brew</span>
            </div>
            <Link
              href="/rewards"
              className="text-[#E4B363] hover:underline uppercase tracking-wider text-[11px]"
            >
              Passport Rules →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
