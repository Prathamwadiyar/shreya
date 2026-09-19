'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, CheckCircle2, Compass } from 'lucide-react';
import { useAppState } from '@/components/providers/AppStateContext';

export default function ContactPage() {
  const { addToast } = useAppState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Message Received! 🌿', 'Our concierge desk will respond within 24 hours.');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          Sanctuary Concierge
        </span>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[#241C18] font-normal tracking-tight">
          FIND YOUR <span className="italic font-serif text-[#173F35]">WAY.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body leading-relaxed">
          Whether you are arriving for morning solitary journaling, seeking private salon bookings, or requesting special tea cupping sessions. We are here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Contact & Location Dossier (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-[#EFE7D8]/60 rounded-3xl border border-[#241C18]/10 space-y-6">
            <h3 className="font-serif-display text-2xl text-[#241C18]">
              The Flagship Address
            </h3>

            <div className="space-y-4 text-xs font-mono text-[#241C18]/80 divide-y divide-[#241C18]/10">
              <div className="flex items-start gap-3.5 pt-3 first:pt-0">
                <MapPin className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#173F35] text-sm font-serif-display">Tea Toast Bangalore</p>
                  <p>42 Gulmohar Lane, 12th Main Road</p>
                  <p>Indiranagar, Bangalore, Karnataka — 560038</p>
                  <p className="text-[11px] text-[#C46A32] mt-1">Complimentary valet parking at gate</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3">
                <Clock className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#173F35]">Operational Hours</p>
                  <p>Monday — Sunday: 8:00 AM — 10:00 PM</p>
                  <p className="text-[11px] text-[#241C18]/60">Kitchen & ovens close at 9:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3">
                <Phone className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#173F35]">Telephone Concierge</p>
                  <p>+91 (080) 4920-1122</p>
                  <p className="text-[11px] text-[#241C18]/60">Lines open 8:00 AM — 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3">
                <Mail className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#173F35]">Electronic Dispatch</p>
                  <p>concierge@teatoastcafe.in</p>
                  <p>press@teatoastcafe.in</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#E4B363]" />
                <span>Open in Google Maps / Apple Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Inquiry Form & Stylized Vector Map (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Custom Vector Map Container */}
          <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-xl bg-[#E8DFC8] border border-[#241C18]/15 p-6 flex flex-col justify-between">
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#173F35] text-[#F7F1E5] text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-xs">
                <Compass className="w-3 h-3 text-[#E4B363]" />
                12.9784° N, 77.6408° E • Indiranagar
              </span>
              <span className="text-[11px] font-mono text-emerald-800 font-bold">● Live Sanctuary Open</span>
            </div>

            <div className="relative z-10 text-center my-auto">
              <div className="w-10 h-10 rounded-full bg-[#173F35] text-[#E4B363] flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
              <p className="font-serif-display text-xl text-[#241C18] mt-2 font-bold">TEA TOAST SANCTUARY</p>
              <p className="text-[11px] font-mono text-[#241C18]/70">42 Gulmohar Lane, 12th Main Road</p>
            </div>

            <div className="relative z-10 p-3 rounded-xl bg-[#F7F1E5]/90 text-[11px] font-mono text-[#241C18]/80 flex justify-between">
              <span>Transit: Purple Line Metro Station</span>
              <span className="text-[#C46A32] font-semibold">450m Walk</span>
            </div>
          </div>

          {/* Concierge Message Form */}
          <div className="p-8 bg-[#EFE7D8]/60 rounded-3xl border border-[#241C18]/10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
                Direct Line
              </span>
              <h3 className="font-serif-display text-2xl text-[#241C18]">
                Send a Dispatch to Our Concierge
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#173F35]/10 rounded-2xl flex items-center gap-3 text-xs font-mono text-[#173F35]">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Message received. A member of our host team will respond promptly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Diya Sen"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="diya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your event, partnership idea, dietary query, or press question..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md"
                >
                  Dispatch Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
