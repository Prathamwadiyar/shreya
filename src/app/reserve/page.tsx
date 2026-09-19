'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SanctuaryZone } from '@/types';
import { useAppState } from '@/components/providers/AppStateContext';
import { Calendar as CalendarIcon, Clock, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const ZONES: { key: SanctuaryZone; name: string; desc: string; vibe: string; image: string }[] = [
  {
    key: 'courtyard',
    name: 'Sunlit Courtyard',
    desc: 'Bask beneath ficus canopies and morning birdsong.',
    vibe: 'Natural Daylight • Garden Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'focus_pods',
    name: 'Quiet Focus Pods',
    desc: 'Individual ergonomic workstations with high-speed fiber.',
    vibe: 'Silent Desks • International Outlets',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'chai_bar',
    name: 'The Chai Bar Counter',
    desc: 'Front-row stools observing boiling brass kettles.',
    vibe: 'Lively Tapri Hum • Barista Interaction',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'lounge_booth',
    name: 'Velvet Lounge Booth',
    desc: 'Deep corner booths for intimate conversations and reading.',
    vibe: 'Dim Ambient Light • Soft Jazz',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80'
  }
];

const TIME_SLOTS = [
  '8:30 AM', '9:30 AM', '11:00 AM', '12:30 PM',
  '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM',
  '8:00 PM', '9:00 PM'
];

export default function ReservePage() {
  const { addToast } = useAppState();

  const [date, setDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('5:00 PM');
  const [guests, setGuests] = useState(2);
  const [zone, setZone] = useState<SanctuaryZone>('courtyard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = `RES-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setConfirmed(true);
    addToast('Table Secured! 🌿', `Reservation confirmed under ${name}`);
  };

  if (confirmed) {
    return (
      <div className="pt-28 sm:pt-40 pb-24 px-6 sm:px-8 max-w-3xl mx-auto text-center">
        <div className="bg-[#EFE7D8]/70 p-8 sm:p-12 rounded-3xl border border-[#241C18]/10 shadow-2xl space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#173F35] text-[#E4B363] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
            Table Secured • {bookingRef}
          </span>

          <h1 className="font-serif-display text-4xl sm:text-5xl text-[#241C18]">
            We will have your table warmed.
          </h1>

          <div className="max-w-md mx-auto p-6 bg-white/80 rounded-2xl border border-[#241C18]/10 text-xs font-mono text-left space-y-2">
            <p className="text-[#C46A32] font-semibold text-sm font-serif-display border-b border-[#241C18]/10 pb-2">
              Sanctuary Pass: {ZONES.find((z) => z.key === zone)?.name}
            </p>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span className="font-bold text-[#173F35]">{date} at {timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span>Party Size:</span>
              <span className="font-bold text-[#173F35]">{guests} Guests</span>
            </div>
            <div className="flex justify-between">
              <span>Primary Guest:</span>
              <span>{name} ({phone})</span>
            </div>
            {occasion && (
              <div className="flex justify-between text-[#C46A32]">
                <span>Occasion:</span>
                <span>{occasion}</span>
              </div>
            )}
          </div>

          <p className="text-xs text-[#241C18]/70 max-w-sm mx-auto font-body">
            A confirmation pass has been dispatched via SMS. We hold tables for up to 15 minutes past your slot.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md"
            >
              Return Home
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3 rounded-full border border-[#241C18]/20 text-[#241C18] text-xs font-mono uppercase tracking-wider hover:bg-[#241C18]/5 transition-all"
            >
              Browse Menu in Advance
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          Sanctuary Reservations
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          RESERVE YOUR <span className="italic font-serif text-[#173F35]">CORNER.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          From sun-dappled courtyard tables to whisper-quiet work pods and evening booths. Select your sanctuary zone.
        </p>
      </div>

      <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Party Size */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-3">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              1. Number of Guests
            </label>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setGuests(num)}
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                    guests === num
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-bold shadow-xs'
                      : 'border-[#241C18]/15 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="text-xs font-mono text-[#241C18]/60 self-center ml-2">
                {guests > 6 ? 'Private Large Table' : 'Standard Seating'}
              </span>
            </div>
          </div>

          {/* Step 2: Date & Time Slot */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              2. Date & Time Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#241C18]/60 mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  min="2026-10-01"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm font-mono text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#241C18]/60 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs font-mono">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all ${
                      timeSlot === slot
                        ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-semibold'
                        : 'border-[#241C18]/15 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Sanctuary Seating Zone */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              3. Choose Sanctuary Mood Zone
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ZONES.map((z) => {
                const isSelected = zone === z.key;
                return (
                  <div
                    key={z.key}
                    onClick={() => setZone(z.key)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] shadow-md'
                        : 'border-[#241C18]/15 bg-white/60 text-[#241C18] hover:border-[#173F35]/30'
                    }`}
                  >
                    <h4 className="font-serif-display text-lg font-bold">{z.name}</h4>
                    <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-[#F7F1E5]/80' : 'text-[#241C18]/70'}`}>
                      {z.desc}
                    </p>
                    <span className={`text-[10px] font-mono mt-2 block ${isSelected ? 'text-[#E4B363]' : 'text-[#C46A32]'}`}>
                      {z.vibe}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Contact Details */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <h3 className="font-serif-display text-xl text-[#241C18]">
              4. Contact Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arjun Das"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                  Phone Number (for SMS Pass) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                Special Requests or Occasion
              </label>
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="e.g. Anniversary / Quiet work corner / Birthday"
                className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase hover:bg-[#12332B] transition-all shadow-lg flex items-center justify-center gap-3"
          >
            <span>Confirm Sanctuary Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Architectural Zone Spotlight (5 cols) */}
        <div className="lg:col-span-5 sticky top-32 space-y-6">
          <div className="bg-[#241C18] text-[#F7F1E5] p-6 sm:p-8 rounded-3xl shadow-xl border border-[#E4B363]/25 space-y-4">
            <span className="text-[10px] font-mono text-[#E4B363] uppercase tracking-widest">
              Selected Sanctuary Blueprint
            </span>
            <h3 className="font-serif-display text-3xl text-white">
              {ZONES.find((z) => z.key === zone)?.name}
            </h3>
            <p className="text-xs text-[#F7F1E5]/75 font-body leading-relaxed">
              {ZONES.find((z) => z.key === zone)?.desc}
            </p>

            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono text-white/70">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-3.5 h-3.5 text-[#E4B363]" />
                <span>Date: {date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E4B363]" />
                <span>Time: {timeSlot}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#E4B363]" />
                <span>Guests: {guests} People</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#E4B363]/80">
              ✓ No reservation deposit required for groups under 8.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
