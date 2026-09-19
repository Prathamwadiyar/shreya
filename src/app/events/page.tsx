'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CULTURAL_EVENTS } from '@/data/eventsData';
import { useAppState } from '@/components/providers/AppStateContext';
import { CulturalEvent } from '@/types';
import { Calendar, Users, ArrowRight, Check } from 'lucide-react';

export default function EventsPage() {
  const { addToast } = useAppState();
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // Private Salon Inquiry Form state
  const [hostName, setHostName] = useState('');
  const [hostEmail, setHostEmail] = useState('');
  const [hostDetails, setHostDetails] = useState('');
  const [hostSubmitted, setHostSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !selectedEvent) return;
    setConfirmed(true);
    addToast('Pass Confirmed! 🎟️', `Reserved a seat for ${selectedEvent.title}`);
    setTimeout(() => {
      setSelectedEvent(null);
      setConfirmed(false);
      setName('');
      setPhone('');
    }, 2200);
  };

  const handleHostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHostSubmitted(true);
    addToast('Inquiry Received! 🌿', 'Our salon curator will get in touch within 24 hours.');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          The Cultural Salon
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          COMMUNITY & <span className="italic font-serif text-[#173F35]">GATHERINGS.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          Tea has always been the beverage of poets, thinkers, and nocturnal dreamers. Join our intimate acoustic evenings, open mic verses, and hands-on culinary masterclasses.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
        {CULTURAL_EVENTS.map((event) => {
          const seatsLeft = event.capacity - event.registeredCount;

          return (
            <div
              key={event.id}
              className="bg-[#EFE7D8]/60 rounded-3xl overflow-hidden border border-[#241C18]/10 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative aspect-16/9 w-full bg-[#241C18] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#173F35] text-[#E4B363] text-xs font-mono uppercase font-semibold">
                      {event.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E4B363]" />
                      {event.date} • {event.time}
                    </span>
                    <span className="text-[#E4B363] font-bold">₹{event.entryFeeINR}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#241C18] group-hover:text-[#173F35] transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C46A32]">
                    Curated by: {event.hostName}
                  </p>
                  <p className="text-sm text-[#241C18]/80 font-body leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#241C18]/10 mt-4">
                <div className="text-xs font-mono text-[#173F35]">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#C46A32]" />
                    {seatsLeft} Seats Remaining
                  </span>
                </div>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="px-6 py-2.5 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Reserve Seat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Host a Private Gathering / Salon Section */}
      <div id="host" className="bg-[#241C18] text-[#F7F1E5] rounded-3xl p-8 sm:p-14 border border-[#E4B363]/25 shadow-2xl">
        <div className="max-w-3xl space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E4B363]">
            Host With Us
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-white font-normal">
            Host a Private Salon, Book Launch, or Creative Workshop.
          </h2>
          <p className="text-sm text-[#F7F1E5]/75 font-body leading-relaxed">
            Our courtyard and private library nook can be reserved for intimate literary evenings, acoustic showcases, design sprints, or team chai tastings. We cater custom tea flights and fresh toast platters.
          </p>
        </div>

        {hostSubmitted ? (
          <div className="p-6 bg-[#173F35] rounded-2xl text-xs font-mono text-[#E4B363] flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span>Thank you. Your inquiry has been sent to our community salon concierge.</span>
          </div>
        ) : (
          <form onSubmit={handleHostSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              required
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              placeholder="Your Name or Collective"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-white placeholder-white/50 focus:outline-hidden focus:border-[#E4B363]"
            />
            <input
              type="email"
              required
              value={hostEmail}
              onChange={(e) => setHostEmail(e.target.value)}
              placeholder="Email or Phone Number"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-white placeholder-white/50 focus:outline-hidden focus:border-[#E4B363]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#E4B363] text-[#241C18] font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all shadow-md"
            >
              Inquire About Salon Dates
            </button>
          </form>
        )}
      </div>

      {/* Seat RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-[#241C18]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F7F1E5] rounded-3xl p-8 max-w-md w-full border border-[#241C18]/10 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
                Reserve Pass
              </span>
              <h3 className="font-serif-display text-2xl text-[#241C18] mt-1">
                {selectedEvent.title}
              </h3>
              <p className="text-xs font-mono text-[#241C18]/70 mt-1">
                {selectedEvent.date} • {selectedEvent.time} • ₹{selectedEvent.entryFeeINR}
              </p>
            </div>

            {confirmed ? (
              <div className="py-8 text-center space-y-2 bg-[#173F35]/10 rounded-2xl p-4">
                <Check className="w-8 h-8 text-[#173F35] mx-auto" />
                <h4 className="font-serif-display text-2xl text-[#173F35]">
                  Pass Confirmed
                </h4>
                <p className="text-xs font-mono text-[#241C18]/80">
                  SMS pass dispatched to {phone}. See you there!
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Roshni Roy"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                    Phone (for SMS entry pass) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="w-1/3 py-3 rounded-full border border-[#241C18]/20 text-xs font-mono uppercase tracking-wider text-[#241C18]/70 hover:bg-[#241C18]/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#12332B] transition-all shadow-md"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
