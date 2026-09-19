'use client';

import React from 'react';
import Link from 'next/link';
import { useAppState } from '@/components/providers/AppStateContext';
import { LOYALTY_REWARDS } from '@/data/rewardsData';
import { Sparkles, Check, Gift, ArrowRight, Stamp, Award } from 'lucide-react';

export default function RewardsPage() {
  const { userPoints, stamps, unlockNextStamp, addToast } = useAppState();

  const handleRedeem = (rewardTitle: string, pointsCost: number) => {
    if (userPoints < pointsCost) {
      addToast('Insufficient Points', `You need ${pointsCost - userPoints} more points for this reward.`, 'info');
      return;
    }
    addToast('Perk Claimed! 🎁', `Redeemed ${rewardTitle}. Voucher added to your account.`);
  };

  const unlockedCount = stamps.filter((s) => s.isUnlocked).length;

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          The Loyalty Guild
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          TEA PASSPORT & <span className="italic font-serif text-[#173F35]">GUILD.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          Every harvest tasted earns you guild points and official stamps. Collect all 5 regional single-estate brews to unlock your complimentary reserve pot and masterclass invitations.
        </p>
      </div>

      {/* Guild Balance Overview Card */}
      <div className="bg-[#173F35] text-[#F7F1E5] rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl border border-[#E4B363]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E4B363]">
            <Award className="w-4 h-4" />
            <span>TIER: GUILD EXPLORER (LEVEL I)</span>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-mono text-[#F7F1E5]/60 uppercase">Available Balance</p>
            <h2 className="font-serif-display text-5xl sm:text-6xl text-white font-bold tracking-tight">
              {userPoints} <span className="text-2xl sm:text-3xl font-normal font-sans text-[#E4B363]">Tea Points</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F7F1E5]/80 font-body max-w-lg">
            Earn 10 points for every ₹100 spent at our tea bar or online. Plus 50 bonus points for every distinct estate tea logged into your passport.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={unlockNextStamp}
              disabled={unlockedCount >= 6}
              className="px-6 py-2.5 rounded-full bg-[#E4B363] text-[#241C18] font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
            >
              <Stamp className="w-4 h-4" />
              <span>Simulate Tasting Next Tea (+50 pts)</span>
            </button>
            <Link
              href="/menu"
              className="px-6 py-2.5 rounded-full border border-white/30 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Order Qualifying Teas
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10 text-xs font-mono space-y-3">
          <p className="text-[#E4B363] font-bold uppercase tracking-wider">
            Passport Milestone
          </p>
          <div className="flex justify-between text-sm font-serif-display">
            <span>{unlockedCount} of 6 Chapters Completed</span>
            <span className="text-[#E4B363]">{Math.round((unlockedCount / 6) * 100)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#E4B363] rounded-full transition-all duration-700"
              style={{ width: `${(unlockedCount / 6) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-white/60">
            {6 - unlockedCount > 0 ? `Try ${6 - unlockedCount} more teas to unlock your free signature platter.` : 'All chapters unlocked! Visit the counter for your reward.'}
          </p>
        </div>
      </div>

      {/* The Digital Passport Stamp Book */}
      <div className="mb-20 space-y-8">
        <div className="border-b border-[#241C18]/10 pb-4 flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              Official Record
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#241C18]">
              Your Tea Passport Stamps
            </h3>
          </div>
          <span className="text-xs font-mono text-[#173F35] font-semibold">
            {unlockedCount} / 6 Stamps Stamped
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stamps.map((stamp) => (
            <div
              key={stamp.id}
              className={`p-6 rounded-3xl border transition-all ${
                stamp.isUnlocked
                  ? 'bg-[#EFE7D8]/80 border-[#173F35]/30 shadow-md'
                  : 'bg-white/40 border-[#241C18]/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#C46A32]">
                  CHAPTER 0{stamp.index}
                </span>
                {stamp.isUnlocked ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#173F35] text-[#E4B363] text-[10px] font-mono uppercase font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-[#241C18]/50 uppercase">
                    Awaiting First Sip
                  </span>
                )}
              </div>

              <h4 className="font-serif-display text-2xl text-[#241C18] leading-tight">
                {stamp.teaName}
              </h4>
              <p className="text-xs text-[#173F35] font-mono mt-1">
                Region: {stamp.region}
              </p>
              <p className="text-xs text-[#241C18]/70 font-body mt-2 leading-relaxed">
                {stamp.tastingNote}
              </p>

              {stamp.isUnlocked && stamp.unlockedDate && (
                <div className="mt-4 pt-3 border-t border-[#241C18]/10 text-[10px] font-mono text-[#241C18]/50 flex justify-between">
                  <span>STAMPED IN SANCTUARY</span>
                  <span>{stamp.unlockedDate}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Available Rewards Catalogue */}
      <div className="space-y-8">
        <div className="border-b border-[#241C18]/10 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            Exchange Guild Points
          </span>
          <h3 className="font-serif-display text-3xl sm:text-4xl text-[#241C18]">
            Rewards & Sanctuary Perks
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOYALTY_REWARDS.map((reward) => {
            const canAfford = userPoints >= reward.pointsRequired;

            return (
              <div
                key={reward.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#EFE7D8]/60 border border-[#241C18]/10 shadow-sm flex flex-col justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C46A32]/15 text-[#C46A32] text-[10px] font-mono uppercase font-bold">
                      {reward.badge}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#173F35]">
                      {reward.pointsRequired} Points
                    </span>
                  </div>

                  <h4 className="font-serif-display text-2xl text-[#241C18]">
                    {reward.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#241C18]/75 font-body leading-relaxed">
                    {reward.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#241C18]/10">
                  <span className="text-[11px] font-mono text-[#241C18]/50">
                    VOUCHER: {reward.code}
                  </span>

                  <button
                    onClick={() => handleRedeem(reward.title, reward.pointsRequired)}
                    disabled={!canAfford}
                    className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      canAfford
                        ? 'bg-[#173F35] text-[#F7F1E5] hover:bg-[#12332B] shadow-xs'
                        : 'bg-[#241C18]/10 text-[#241C18]/40 cursor-not-allowed'
                    }`}
                  >
                    <Gift className="w-3.5 h-3.5 text-[#E4B363]" />
                    <span>{canAfford ? 'Redeem Perk' : 'Need More Points'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
