'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppState } from '@/components/providers/AppStateContext';
import { ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Flame, Coffee, Sparkles } from 'lucide-react';

export default function OrderPage() {
  const { cart, subtotal, tax, total, clearCart } = useAppState();

  // Checkout Form State
  const [fulfillment, setFulfillment] = useState<'pickup' | 'dine_in' | 'delivery'>('pickup');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'counter'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    items: typeof cart;
    total: number;
    fulfillment: string;
  } | null>(null);

  // Live order status simulation
  const [trackerStep, setTrackerStep] = useState(1);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `TT-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedOrder({
        orderId,
        items: [...cart],
        total,
        fulfillment
      });
      clearCart();
      setIsSubmitting(false);

      // Simulate live brewing stages
      setTimeout(() => setTrackerStep(2), 3000);
      setTimeout(() => setTrackerStep(3), 7000);
      setTimeout(() => setTrackerStep(4), 12000);
    }, 1500);
  };

  // If order is confirmed, show the sensory live order tracker
  if (confirmedOrder) {
    return (
      <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="bg-[#EFE7D8]/60 rounded-3xl p-8 sm:p-12 border border-[#241C18]/10 shadow-xl space-y-8 animate-in zoom-in-95 duration-300">
          <div className="text-center space-y-2">
            <span className="w-12 h-12 rounded-full bg-[#173F35] text-[#E4B363] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              Order Placed Successfully
            </span>
            <h1 className="font-serif-display text-4xl sm:text-5xl text-[#241C18]">
              We Are Brewing Your Order.
            </h1>
            <p className="text-xs font-mono text-[#241C18]/70">
              Receipt Identifier: <span className="font-bold text-[#173F35]">{confirmedOrder.orderId}</span> • Fulfillment: {confirmedOrder.fulfillment.toUpperCase()}
            </p>
          </div>

          {/* Live Sensory Brewing Tracker Timeline */}
          <div className="bg-[#241C18] text-[#F7F1E5] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E4B363]">
                <Flame className="w-4 h-4" />
                <span>LIVE KITCHEN STAGE</span>
              </div>
              <span className="text-xs font-mono text-white/60">Estimated: 8–10 mins</span>
            </div>

            {/* 4 Tracker Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Order Confirmed', desc: 'Ticket printed at chai bar' },
                { step: 2, title: 'Pounding Spices', desc: 'Crushing ginger & rolling boil' },
                { step: 3, title: 'Cast-Iron Toasting', desc: 'Browning sourdough in butter' },
                { step: 4, title: 'Ready for You', desc: 'Poured hot in clay kulhads' }
              ].map((s) => {
                const isPassed = trackerStep >= s.step;
                const isCurrent = trackerStep === s.step;

                return (
                  <div
                    key={s.step}
                    className={`p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? 'border-[#E4B363] bg-[#E4B363]/15 text-white'
                        : isPassed
                        ? 'border-[#173F35] bg-white/5 text-white/90'
                        : 'border-white/5 bg-transparent text-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span>0{s.step}</span>
                      {isPassed && <span className="text-[#E4B363]">●</span>}
                    </div>
                    <h4 className="font-serif-display text-base leading-snug">{s.title}</h4>
                    <p className="text-[11px] font-mono text-white/50 mt-1">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary Recap */}
          <div className="p-6 bg-white/70 rounded-2xl border border-[#241C18]/10 space-y-3 font-mono text-xs">
            <p className="font-bold text-[#173F35] uppercase tracking-wider text-sm font-serif-display">
              Items in this brew:
            </p>
            {confirmedOrder.items.map((item) => (
              <div key={item.cartItemId} className="flex justify-between text-[#241C18]/80">
                <span>{item.quantity}x {item.name}</span>
                <span>₹{item.unitPrice * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-[#241C18]/10 pt-2 flex justify-between font-bold text-sm text-[#241C18]">
              <span>Total Paid</span>
              <span className="text-[#173F35]">₹{confirmedOrder.total}</span>
            </div>
          </div>

          <div className="text-center pt-2 flex justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md"
            >
              Return to Sanctuary
            </Link>
            <Link
              href="/rewards"
              className="px-8 py-3 rounded-full border border-[#241C18]/20 text-[#241C18] text-xs font-mono uppercase tracking-wider hover:bg-[#241C18]/5 transition-all"
            >
              View Passport Stamps (+50 Pts)
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty and no confirmed order
  if (cart.length === 0) {
    return (
      <div className="pt-28 sm:pt-40 pb-24 px-6 max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#EFE7D8] flex items-center justify-center text-[#C46A32] mx-auto">
          <ShoppingBag className="w-8 h-8 stroke-1" />
        </div>
        <h1 className="font-serif-display text-4xl text-[#241C18]">
          Your tray is empty
        </h1>
        <p className="text-sm text-[#241C18]/70 max-w-md mx-auto leading-relaxed font-body">
          You haven&apos;t selected any single-estate brews or artisan toasts yet. Visit our tasting index to begin your order.
        </p>
        <Link
          href="/menu"
          className="inline-flex px-8 py-3.5 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-mono uppercase tracking-wider hover:bg-[#12332B] transition-all shadow-md"
        >
          Explore Tasting Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32] block mb-2">
          Express Checkout
        </span>
        <h1 className="font-serif-display text-5xl sm:text-6xl text-[#241C18] font-normal tracking-tight">
          SECURE YOUR <span className="italic font-serif text-[#173F35]">TRAY.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Checkout Form (7 cols) */}
        <form onSubmit={handleSubmitOrder} className="lg:col-span-7 space-y-8">
          {/* Fulfillment Toggle */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <h3 className="font-serif-display text-xl text-[#241C18]">
              1. Fulfillment Experience
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { key: 'pickup', label: 'Cafe Counter Pickup' },
                { key: 'dine_in', label: 'Dine-In Table Order' },
                { key: 'delivery', label: 'Curbside Express' }
              ].map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFulfillment(f.key as typeof fulfillment)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    fulfillment === f.key
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-semibold'
                      : 'border-[#241C18]/15 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <h3 className="font-serif-display text-xl text-[#241C18]">
              2. Guest Information
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
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                  Phone Number (for SMS Tracking) *
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
                Email Address (Receipt & Passport sync)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="priya@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
              />
            </div>

            {fulfillment === 'delivery' && (
              <div>
                <label className="block text-xs font-mono uppercase text-[#241C18]/70 mb-1">
                  Vehicle / Curbside Notes
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. White Honda City parked outside main gate"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#241C18]/20 bg-white/80 text-sm text-[#241C18] focus:outline-hidden focus:border-[#173F35]"
                />
              </div>
            )}
          </div>

          {/* Payment Selection */}
          <div className="p-6 bg-[#EFE7D8]/50 rounded-3xl border border-[#241C18]/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-display text-xl text-[#241C18]">
                3. Payment Gateway
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-mono text-[#173F35]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                256-Bit Encrypted
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { key: 'upi', label: 'UPI / QR Code', icon: '⚡' },
                { key: 'card', label: 'Credit/Debit Card', icon: '💳' },
                { key: 'counter', label: 'Pay at Counter', icon: '🪙' }
              ].map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPaymentMethod(p.key as typeof paymentMethod)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentMethod === p.key
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-semibold'
                      : 'border-[#241C18]/15 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  <div>{p.icon}</div>
                  <div className="mt-1">{p.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase hover:bg-[#12332B] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Brewing Connection to Gateway...</span>
            ) : (
              <>
                <span>Confirm & Authorize Order • ₹{total}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Right Tray Summary (5 cols) */}
        <div className="lg:col-span-5 bg-[#EFE7D8]/60 p-6 sm:p-8 rounded-3xl border border-[#241C18]/10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#241C18]/10 pb-4">
            <h3 className="font-serif-display text-2xl text-[#241C18]">
              Your Selection
            </h3>
            <span className="text-xs font-mono text-[#C46A32]">
              {cart.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>

          {/* Cart Item Rows */}
          <div className="divide-y divide-[#241C18]/10 max-h-80 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.cartItemId} className="py-3 flex gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden relative shrink-0 bg-white">
                  <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif-display text-base text-[#241C18]">{item.name}</h4>
                    <span className="font-mono text-xs font-bold text-[#173F35]">
                      ₹{item.unitPrice * item.quantity}
                    </span>
                  </div>
                  {item.customizationSummary && (
                    <p className="text-[11px] font-mono text-[#C46A32]">{item.customizationSummary}</p>
                  )}
                  <span className="text-xs font-mono text-[#241C18]/60">Qty: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Financial Breakdown */}
          <div className="border-t border-[#241C18]/10 pt-4 space-y-2 text-xs font-mono text-[#241C18]/80">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>GST & Packaging (5%)</span>
              <span>₹{tax}</span>
            </div>
            <div className="border-t border-[#241C18]/10 pt-2 flex justify-between font-bold text-base text-[#241C18]">
              <span>Total Payable</span>
              <span className="text-[#173F35]">₹{total}</span>
            </div>
          </div>

          <div className="p-3.5 bg-[#173F35]/10 rounded-2xl flex items-center gap-3 text-xs font-mono text-[#173F35]">
            <Sparkles className="w-4 h-4 text-[#C46A32] shrink-0" />
            <span>This order earns you <strong>+50 Tea Points</strong> on your Tea Passport!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
