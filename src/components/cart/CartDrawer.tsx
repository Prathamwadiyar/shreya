'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppState } from '@/components/providers/AppStateContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export function CartDrawer() {
  const { isCartOpen, closeCart, cart, subtotal, tax, total, updateQuantity, removeFromCart } = useAppState();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dim Backdrop */}
      <div
        className="absolute inset-0 bg-[#241C18]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer Container: Slide-over right on desktop, bottom-sheet on mobile */}
      <div className="fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
        <aside
          aria-label="Order Cart"
          className="w-screen max-w-md bg-[#F7F1E5] text-[#241C18] shadow-2xl flex flex-col h-full border-l border-[#241C18]/10 animate-in slide-in-from-right-full sm:slide-in-from-right-full max-sm:slide-in-from-bottom-full duration-300 max-sm:rounded-t-3xl max-sm:max-h-[92vh] max-sm:mt-auto"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#241C18]/10 flex items-center justify-between bg-[#F7F1E5]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#173F35]" />
              <h2 className="font-serif-display text-2xl font-normal text-[#241C18] tracking-tight">
                Your Tea Tray
              </h2>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-[#173F35]/10 text-[#173F35]">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} {cart.reduce((sum, i) => sum + i.quantity, 0) === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={closeCart}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#241C18]/70 hover:text-[#241C18] hover:bg-[#241C18]/5 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#241C18]/10">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[#EFE7D8] flex items-center justify-center text-[#C46A32] mb-4">
                  <ShoppingBag className="w-7 h-7 stroke-1" />
                </div>
                <h3 className="font-serif-display text-2xl text-[#241C18] mb-2">
                  Your tray is empty
                </h3>
                <p className="text-sm text-[#241C18]/70 max-w-xs mb-6 leading-relaxed">
                  The kettle is warm. Explore our single-estate brews, sourdough toasts, and seasonal confections.
                </p>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-medium tracking-wider uppercase hover:bg-[#173F35]/90 transition-all shadow-sm"
                >
                  Explore Menu
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartItemId} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0 bg-[#EFE7D8]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info & Controls */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif-display text-lg text-[#241C18] leading-snug">
                          {item.name}
                        </h4>
                        <span className="font-mono text-sm font-semibold text-[#173F35]">
                          ₹{item.unitPrice * item.quantity}
                        </span>
                      </div>

                      {item.customizationSummary && (
                        <p className="text-xs text-[#C46A32] font-medium mt-0.5 line-clamp-1">
                          {item.customizationSummary}
                        </p>
                      )}
                    </div>

                    {/* Stepper and Delete */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#241C18]/15 rounded-full bg-white/50 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#241C18]/70 hover:text-[#241C18] hover:bg-[#241C18]/5 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-mono font-medium text-[#241C18]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#241C18]/70 hover:text-[#241C18] hover:bg-[#241C18]/5 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-red-700/70 hover:text-red-700 flex items-center gap-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#EFE7D8]/60 border-t border-[#241C18]/10 space-y-4">
              <div className="space-y-1.5 text-xs text-[#241C18]/80 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Cafe Service (5%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="border-t border-[#241C18]/10 pt-2 flex justify-between text-sm font-bold text-[#241C18]">
                  <span>Total Due</span>
                  <span className="text-[#173F35] text-base">₹{total}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/order"
                  onClick={closeCart}
                  className="w-full py-3.5 px-6 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#12332B] transition-all shadow-md group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full py-2 text-center text-xs text-[#241C18]/70 hover:text-[#241C18] tracking-wider uppercase transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
