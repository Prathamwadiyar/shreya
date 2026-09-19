'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Navigation, Compass, Calendar } from 'lucide-react';

export function LocationConcierge() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Information (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              11 / The Flagship
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
              FIND YOUR <span className="italic font-serif text-[#173F35]">CHAI.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#241C18]/75 font-body">
              Nestled beneath mature gulmohar canopies in Indiranagar. A two-story sunlit refuge with an open courtyard, quiet focus pods, and a cast-iron toast kitchen.
            </p>
          </div>

          <div className="space-y-4 text-xs font-mono text-[#241C18]/80 divide-y divide-[#241C18]/10">
            <div className="flex items-start gap-3.5 pt-3 first:pt-0">
              <MapPin className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#173F35] text-sm font-serif-display">The Indiranagar Sanctuary</p>
                <p>42 Gulmohar Lane, 12th Main Road</p>
                <p>Bangalore, Karnataka — 560038</p>
                <p className="text-[11px] text-[#C46A32] mt-0.5">Valet parking available at entrance</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3">
              <Clock className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#173F35]">Opening Hours</p>
                <p>Monday to Sunday: 8:00 AM — 10:00 PM</p>
                <p className="text-[11px] text-[#241C18]/60">Morning Chai Ritual starts at 8:00 AM sharp</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3">
              <Phone className="w-4 h-4 text-[#C46A32] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#173F35]">Sanctuary Desk</p>
                <p>+91 (080) 4920-1122</p>
                <p className="text-[11px] text-[#241C18]/60">For private salons and table queries</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md flex items-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E4B363]" />
              <span>Get Directions</span>
            </a>

            <Link
              href="/reserve"
              className="px-6 py-3 rounded-full border border-[#241C18]/25 text-[#241C18] text-xs font-mono uppercase tracking-wider hover:bg-[#241C18]/5 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C46A32]" />
              <span>Reserve Table</span>
            </Link>
          </div>
        </div>

        {/* Right Stylized Vector Map Graphic (7 cols) */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-[#E8DFC8] border border-[#241C18]/15 p-8 flex flex-col justify-between">
            {/* Map Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#241C18_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Stylized Architectural Street Lines */}
            <svg className="absolute inset-0 w-full h-full stroke-[#241C18]/20 stroke-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="35%" x2="100%" y2="35%" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="0" y1="70%" x2="100%" y2="70%" strokeWidth="1.5" />
              <line x1="40%" y1="0" x2="40%" y2="100%" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="75%" y1="0" x2="75%" y2="100%" strokeWidth="1.5" />
              <circle cx="40%" cy="35%" r="35" fill="none" stroke="#173F35" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Top Bar on Map */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#173F35] text-[#F7F1E5] text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3 h-3 text-[#E4B363] animate-spin-slow" />
                Indiranagar Flagship Coordinates
              </span>
              <span className="text-xs font-mono text-[#241C18]/60">12.9784° N, 77.6408° E</span>
            </div>

            {/* Central Animated Location Marker */}
            <div className="relative z-10 my-auto flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#C46A32]/20 animate-ping absolute -inset-0" />
                <div className="w-12 h-12 rounded-full bg-[#173F35] text-[#E4B363] flex items-center justify-center shadow-xl relative border-2 border-[#F7F1E5]">
                  <MapPin className="w-6 h-6 fill-current" />
                </div>
              </div>

              <div className="mt-3 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-[#241C18]/10 text-center">
                <p className="font-serif-display text-base text-[#241C18] font-bold">
                  TEA TOAST CAFE
                </p>
                <p className="text-[10px] font-mono text-[#173F35] font-semibold">
                  LIVE SEAT CAPACITY: 78% • 12 SEATS OPEN
                </p>
              </div>
            </div>

            {/* Bottom Subway / Transit Pill */}
            <div className="relative z-10 p-3 rounded-xl bg-[#F7F1E5]/90 backdrop-blur-md border border-[#241C18]/10 flex items-center justify-between text-[11px] font-mono text-[#241C18]/80">
              <span>🚇 Indiranagar Metro (Purple Line) — 450m Walk</span>
              <span className="text-[#C46A32] font-semibold">Exit Gate 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
