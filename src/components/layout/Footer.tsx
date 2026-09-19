'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#241C18] text-[#F7F1E5] pt-24 pb-12 border-t border-[#F7F1E5]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F7F1E5]/10">
          {/* Brand Manifesto & Newsletter */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif-display text-4xl sm:text-5xl tracking-tight text-[#F7F1E5] block">
                TEA <span className="italic font-serif text-[#E4B363]">TOAST</span>
              </span>
              <p className="text-xs font-mono tracking-widest text-[#E4B363] uppercase mt-1">
                Sip. Toast. Talk. Repeat.
              </p>
            </div>

            <p className="text-sm text-[#F7F1E5]/75 leading-relaxed max-w-md font-body">
              An everyday liturgy for slow conversations. Single-estate Assam CTC, freshly crushed ginger, and golden cast-iron toasts baked over cultured butter.
            </p>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F1E5]/60 mb-3">
                The Morning Dispatch (Weekly Musings & Chai Releases)
              </h4>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-[#E4B363] py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You have been added to the sanctuary ledger.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md border-b border-[#F7F1E5]/30 focus-within:border-[#E4B363] transition-colors pb-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-transparent text-sm text-[#F7F1E5] placeholder-[#F7F1E5]/40 focus:outline-hidden w-full font-body py-1.5"
                  />
                  <button
                    type="submit"
                    className="text-[#E4B363] hover:text-white px-2 flex items-center transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links Column 1: Sanctuary */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E4B363]">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F1E5]/75">
              <li><Link href="/menu" className="hover:text-[#F7F1E5] transition-colors">Tasting Menu</Link></li>
              <li><Link href="/experience" className="hover:text-[#F7F1E5] transition-colors">The Brewing Craft</Link></li>
              <li><Link href="/reserve" className="hover:text-[#F7F1E5] transition-colors">Reserve Table</Link></li>
              <li><Link href="/order" className="hover:text-[#F7F1E5] transition-colors">Order for Pickup</Link></li>
              <li><Link href="/rewards" className="hover:text-[#F7F1E5] transition-colors">Tea Passport</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Culture */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E4B363]">
              Culture & Salon
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F1E5]/75">
              <li><Link href="/events" className="hover:text-[#F7F1E5] transition-colors">Cultural Calendar</Link></li>
              <li><Link href="/recommend" className="hover:text-[#F7F1E5] transition-colors">AI Chai Sommelier</Link></li>
              <li><Link href="/about" className="hover:text-[#F7F1E5] transition-colors">Our Philosophy</Link></li>
              <li><Link href="/events#host" className="hover:text-[#F7F1E5] transition-colors">Host a Gathering</Link></li>
              <li><Link href="/contact" className="hover:text-[#F7F1E5] transition-colors">Find Sanctuary</Link></li>
            </ul>
          </div>

          {/* Hours & Location Column */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-[#E4B363]">
              Hours & Location
            </h4>
            <div className="space-y-1.5 text-[#F7F1E5]/80">
              <p className="font-semibold text-white">Monday — Sunday</p>
              <p>8:00 AM — 10:00 PM</p>
              <p className="text-[11px] text-[#E4B363] pt-1">Kitchen & Ovens close at 9:30 PM</p>
            </div>

            <div className="pt-2 text-[#F7F1E5]/70 space-y-1">
              <p>42 Gulmohar Lane, 12th Main</p>
              <p>Indiranagar, Bangalore — 560038</p>
              <p className="pt-1 text-[#E4B363]">+91 (080) 4920-1122</p>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F1E5]/50">
          <p>© 2026 Tea Toast Roastery & Kitchen. Crafted with patience.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E4B363] transition-colors">Instagram</a>
            <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-[#E4B363] transition-colors">Cafe Radio</a>
            <Link href="/privacy" className="hover:text-[#E4B363] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#E4B363] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
