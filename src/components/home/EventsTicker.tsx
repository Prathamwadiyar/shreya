'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CULTURAL_EVENTS } from '@/data/eventsData';
import { useAppState } from '@/components/providers/AppStateContext';
import { ArrowRight, Calendar, Users, Check } from 'lucide-react';
import { CulturalEvent } from '@/types';

export function EventsTicker() {
  const { addToast } = useAppState();
  const [rsvpEvent, setRsvpEvent] = useState<CulturalEvent | null>(null);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && guestPhone && rsvpEvent) {
      setRegistered(true);
      addToast('Pass Confirmed! 🎟️', `Reserved a seat for ${rsvpEvent.title}`);
      setTimeout(() => {
        setRsvpEvent(null);
        setRegistered(false);
        setGuestName('');
        setGuestPhone('');
      }, 2000);
    }
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            08 / Cultural Programming
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
            THE SALON <span className="italic font-serif text-[#173F35]">CALENDAR.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#241C18]/75 font-body max-w-xl">
            Live acoustic strings, open mic verses, creative printmaking, and tabletop game tournaments under the lantern trees.
          </p>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#173F35] hover:text-[#C46A32] transition-colors group"
        >
          <span>Explore All Upcoming Events</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Minimal Editorial Horizontal Ledger */}
      <div className="divide-y divide-[#241C18]/15 border-y border-[#241C18]/15">
        {CULTURAL_EVENTS.map((event) => {
          const seatsAvailable = event.capacity - event.registeredCount;

          return (
            <div
              key={event.id}
              className="py-8 group flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#EFE7D8]/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl transition-all"
            >
              {/* Date Block */}
              <div className="flex items-center gap-4 lg:w-48 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#173F35] text-[#F7F1E5] flex flex-col items-center justify-center font-mono shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#E4B363]">{event.date.split(' ')[0]}</span>
                  <span className="text-lg font-bold leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                </div>

                <div className="text-xs font-mono text-[#241C18]/70">
                  <p className="font-semibold text-[#241C18]">{event.dayOfWeek}</p>
                  <p className="text-[11px]">{event.time.split(' — ')[0]}</p>
                </div>
              </div>

              {/* Title & Host */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#C46A32]/10 text-[#C46A32] font-semibold">
                    {event.category}
                  </span>
                  <span className="text-xs font-mono text-[#241C18]/50">
                    Host: {event.hostName}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241C18] group-hover:text-[#173F35] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-[#241C18]/75 font-body line-clamp-1">
                  {event.subtitle}
                </p>
              </div>

              {/* Metadata & RSVP CTA */}
              <div className="flex items-center gap-6 lg:justify-end shrink-0 pt-2 lg:pt-0">
                <div className="text-xs font-mono text-right hidden sm:block">
                  <span className="flex items-center gap-1.5 text-[#173F35]">
                    <Users className="w-3.5 h-3.5" />
                    {seatsAvailable} seats left
                  </span>
                  <span className="text-[11px] text-[#241C18]/60">₹{event.entryFeeINR} pass includes chai</span>
                </div>

                <button
                  onClick={() => setRsvpEvent(event)}
                  className="px-6 py-2.5 rounded-full border border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-[#F7F1E5] text-xs font-mono uppercase tracking-wider transition-all shadow-xs"
                >
                  Reserve Pass
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* RSVP Modal */}
      {rsvpEvent && (
        <div className="fixed inset-0 z-50 bg-[#241C18]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F7F1E5] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#241C18]/10 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
                Event Registration
              </span>
              <h3 className="font-serif-display text-2xl text-[#241C18] mt-1">
                {rsvpEvent.title}
              </h3>
              <p className="text-xs text-[#241C18]/70 font-mono mt-1 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#173F35]" />
                {rsvpEvent.date} • {rsvpEvent.time}
              </p>
            </div>

            {registered ? (
              <div className="py-8 text-center space-y-3 bg-[#173F35]/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#173F35] text-[#E4B363] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif-display text-2xl text-[#173F35]">
                  Pass Confirmed
                </h4>
                <p className="text-xs text-[#241C18]/80 font-mono">
                  We sent your digital boarding pass to {guestPhone}. See you at the salon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Kabir Sen"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/70 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                    Phone Number (for SMS Pass)
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/70 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                  />
                </div>

                <div className="p-3 bg-[#EFE7D8] rounded-xl text-xs font-mono text-[#241C18]/80 flex justify-between">
                  <span>Pass (includes chai & snacks)</span>
                  <span className="font-bold text-[#173F35]">₹{rsvpEvent.entryFeeINR}</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRsvpEvent(null)}
                    className="w-1/3 py-3 rounded-full border border-[#241C18]/20 text-xs font-mono uppercase tracking-wider text-[#241C18]/70 hover:bg-[#241C18]/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#12332B] transition-all shadow-md"
                  >
                    Confirm Pass
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
