'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppState } from '@/components/providers/AppStateContext';
import { ChaiCustomization } from '@/types';
import { X, Clock, Flame, Sparkles, Check, Plus, Minus } from 'lucide-react';

export function ProductQuickModal() {
  const { activeProductModal, closeProductModal, addToCart } = useAppState();
  const [qty, setQty] = useState(1);

  // Customization state (for customizable brews)
  const [base, setBase] = useState<ChaiCustomization['base']>('Assam Strong CTC');
  const [flavor, setFlavor] = useState<ChaiCustomization['flavor']>('Crushed Adrak (Ginger)');
  const [sweetness, setSweetness] = useState<ChaiCustomization['sweetness']>('Desi Khand (50%)');
  const [size, setSize] = useState<ChaiCustomization['size']>('Kulhad (200ml)');
  const [milk, setMilk] = useState<ChaiCustomization['milk']>('Whole Buffalo Milk');

  if (!activeProductModal) return null;

  const item = activeProductModal;
  const isCustomizable = item.customizable || item.category === 'tea';

  // Calculate dynamic price
  let calculatedPrice = item.price;
  if (isCustomizable) {
    if (size === 'Sanctuary Mug (350ml)') calculatedPrice += 30;
    if (milk === 'Oat Milk (Plant-based)') calculatedPrice += 40;
    if (flavor === 'Kesar Masala (Saffron & Spices)') calculatedPrice += 35;
  }

  const handleAdd = () => {
    if (isCustomizable) {
      addToCart(
        item,
        {
          base,
          flavor,
          sweetness,
          size,
          milk,
          totalPrice: calculatedPrice
        },
        qty
      );
    } else {
      addToCart(item, undefined, qty);
    }
    closeProductModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#241C18]/65 backdrop-blur-sm transition-opacity"
        onClick={closeProductModal}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative bg-[#F7F1E5] text-[#241C18] rounded-3xl max-w-2xl w-full text-left overflow-hidden shadow-2xl border border-[#241C18]/10 animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={closeProductModal}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#241C18]/60 hover:bg-[#241C18] text-white flex items-center justify-center transition-colors shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Hero Image */}
          <div className="relative h-64 sm:h-72 w-full bg-[#EFE7D8] overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/80 via-transparent to-transparent" />

            {/* Badges on image */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E4B363] px-2.5 py-1 rounded-full bg-[#241C18]/80 backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F7F1E5] mt-1 font-normal">
                  {item.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#E4B363]">
                  ₹{calculatedPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Description & Metadata */}
            <div>
              <p className="text-sm sm:text-base text-[#241C18]/85 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-[#241C18]/70">
                {item.prepTimeMinutes && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C46A32]" />
                    {item.prepTimeMinutes} mins brew time
                  </span>
                )}
                {item.spiceLevel && (
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C46A32]" />
                    Spice Level: {'🌶️'.repeat(item.spiceLevel)}
                  </span>
                )}
                {item.pairingSuggestion && (
                  <span className="flex items-center gap-1.5 text-[#173F35] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#E4B363]" />
                    Pairs with: {item.pairingSuggestion}
                  </span>
                )}
              </div>
            </div>

            {/* Ingredients */}
            <div className="border-t border-[#241C18]/10 pt-4">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#241C18]/60 mb-2">
                Ingredients & Origins
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs bg-[#EFE7D8] text-[#241C18]/80 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Customizer for Teas */}
            {isCustomizable && (
              <div className="border-t border-[#241C18]/10 pt-4 space-y-4 bg-[#EFE7D8]/40 p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#173F35] font-bold">
                    Tailor Your Brew
                  </h4>
                  <span className="text-xs text-[#C46A32] font-mono">Live Price: ₹{calculatedPrice}</span>
                </div>

                {/* Flavor / Spices */}
                <div>
                  <label className="block text-xs font-medium text-[#241C18]/70 mb-1.5">
                    Signature Spices & Infusion
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Crushed Adrak (Ginger)',
                      'Elaichi (Green Cardamom)',
                      'Kesar Masala (Saffron & Spices)',
                      'Lemongrass Mint'
                    ].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFlavor(f as ChaiCustomization['flavor'])}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          flavor === f
                            ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-medium'
                            : 'border-[#241C18]/10 bg-white/70 text-[#241C18] hover:border-[#173F35]/40'
                        }`}
                      >
                        <span className="truncate">{f.split(' (')[0]}</span>
                        {flavor === f && <Check className="w-3.5 h-3.5 text-[#E4B363]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sweetness */}
                <div>
                  <label className="block text-xs font-medium text-[#241C18]/70 mb-1.5">
                    Sweetness Level
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {['Unsweetened (0%)', 'Mild Jaggery (25%)', 'Desi Khand (50%)', 'Standard Sweet (100%)'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSweetness(s as ChaiCustomization['sweetness'])}
                        className={`py-2 px-1 rounded-lg border text-center text-xs transition-all ${
                          sweetness === s
                            ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-medium'
                            : 'border-[#241C18]/10 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                        }`}
                      >
                        {s.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vessel & Size */}
                <div>
                  <label className="block text-xs font-medium text-[#241C18]/70 mb-1.5">
                    Vessel & Size
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { name: 'Cutting (120ml)', extra: 0 },
                      { name: 'Kulhad (200ml)', extra: 0 },
                      { name: 'Sanctuary Mug (350ml)', extra: 30 }
                    ].map((v) => (
                      <button
                        key={v.name}
                        type="button"
                        onClick={() => setSize(v.name as ChaiCustomization['size'])}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          size === v.name
                            ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-medium'
                            : 'border-[#241C18]/10 bg-white/60 text-[#241C18] hover:border-[#173F35]/40'
                        }`}
                      >
                        <div className="font-medium truncate">{v.name.split(' ')[0]}</div>
                        <div className="text-[10px] opacity-75">{v.extra > 0 ? `+₹${v.extra}` : 'Standard'}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#EFE7D8]/60 border-t border-[#241C18]/10 flex items-center justify-between gap-4">
            {/* Quantity control */}
            <div className="flex items-center border border-[#241C18]/20 rounded-full bg-white px-2 py-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-7 h-7 flex items-center justify-center text-[#241C18]/70 hover:text-[#241C18]"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-mono text-sm font-semibold text-[#241C18]">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-7 h-7 flex items-center justify-center text-[#241C18]/70 hover:text-[#241C18]"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              className="flex-1 py-3.5 px-6 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase flex items-center justify-between hover:bg-[#12332B] transition-all shadow-md"
            >
              <span>Add to Tray</span>
              <span className="font-mono font-bold text-[#E4B363]">₹{calculatedPrice * qty}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
