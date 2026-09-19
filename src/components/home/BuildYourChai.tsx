'use client';

import React, { useState } from 'react';
import { useAppState } from '@/components/providers/AppStateContext';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';

export function BuildYourChai() {
  const { addToCart } = useAppState();

  const [base, setBase] = useState<'Assam Strong CTC' | 'Darjeeling First Flush' | 'Kashmiri Kahwa Green' | 'Oat Milk Golden Tea'>('Assam Strong CTC');
  const [flavor, setFlavor] = useState<'Crushed Adrak (Ginger)' | 'Elaichi (Green Cardamom)' | 'Kesar Masala (Saffron & Spices)' | 'Lemongrass Mint'>('Crushed Adrak (Ginger)');
  const [sweetness, setSweetness] = useState<'Unsweetened (0%)' | 'Mild Jaggery (25%)' | 'Desi Khand (50%)' | 'Standard Sweet (100%)'>('Desi Khand (50%)');
  const [size, setSize] = useState<'Cutting (120ml)' | 'Kulhad (200ml)' | 'Sanctuary Mug (350ml)'>('Kulhad (200ml)');
  const [addOns, setAddOns] = useState<string[]>([]);

  // Base price
  let price = 59;
  if (base === 'Darjeeling First Flush') price += 40;
  if (base === 'Kashmiri Kahwa Green') price += 35;
  if (base === 'Oat Milk Golden Tea') price += 30;

  if (flavor === 'Kesar Masala (Saffron & Spices)') price += 30;
  if (size === 'Sanctuary Mug (350ml)') price += 25;
  if (addOns.includes('Warm Maska Bun (+₹45)')) price += 45;
  if (addOns.includes('Dollop of Fresh Malai (+₹25)')) price += 25;

  const toggleAddOn = (item: string) => {
    setAddOns((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleAddToCart = () => {
    // Reference base item
    const baseMenuItem = MENU_ITEMS.find((i) => i.id === 'tea-1') || MENU_ITEMS[0];
    addToCart(
      {
        ...baseMenuItem,
        name: `Custom Brew: ${flavor.split(' ')[0]} ${base.split(' ')[0]} Chai`,
        price
      },
      {
        base,
        flavor,
        sweetness,
        size,
        totalPrice: price,
        addOns
      }
    );
  };

  // Color of liquid preview based on selection
  const getLiquidColor = () => {
    if (base === 'Kashmiri Kahwa Green') return '#C8A84B'; // Amber Green
    if (base === 'Oat Milk Golden Tea') return '#E5B842'; // Golden Turmeric
    if (base === 'Darjeeling First Flush') return '#A95E34'; // Amber Bronze
    return '#8E4A28'; // Rich Assam Karak Milky Brown
  };

  return (
    <section id="build-chai" className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#241C18]/10">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
          05 / Interactive Customization Studio
        </span>
        <h2 className="font-serif-display text-4xl sm:text-6xl text-[#241C18] mt-2 font-normal tracking-tight">
          BUILD YOUR <span className="italic font-serif text-[#173F35]">CHAI.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#241C18]/75 mt-4 font-body">
          Calibrate tea leaves, crushed roots, sweetness, and vessels in real time. Crafted to your exact morning or evening constitution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Interactive Graphical Preview Canvas (5 cols) */}
        <div className="lg:col-span-5 bg-[#EFE7D8]/60 p-8 sm:p-10 rounded-3xl border border-[#241C18]/10 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-inner">
          <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs font-mono text-[#173F35]">
            <Sparkles className="w-3.5 h-3.5 text-[#E4B363]" />
            <span>Interactive Visualizer</span>
          </div>

          {/* Graphical Tea Cup Rendering */}
          <div className="my-8 relative w-48 h-56 flex flex-col items-center justify-end">
            {/* Animated Steam lines */}
            <div className="absolute -top-6 flex gap-3 opacity-70">
              <span className="w-1 h-8 bg-gradient-to-t from-[#241C18]/20 to-transparent rounded-full animate-pulse" />
              <span className="w-1.5 h-12 bg-gradient-to-t from-[#241C18]/30 to-transparent rounded-full animate-pulse delay-150" />
              <span className="w-1 h-10 bg-gradient-to-t from-[#241C18]/20 to-transparent rounded-full animate-pulse delay-300" />
            </div>

            {/* Vessel Outline */}
            <div
              className={`relative border-2 border-[#241C18]/30 rounded-b-3xl shadow-xl overflow-hidden transition-all duration-500 flex flex-col justify-end ${
                size === 'Sanctuary Mug (350ml)'
                  ? 'w-44 h-48 rounded-t-lg'
                  : size === 'Cutting (120ml)'
                  ? 'w-28 h-36 rounded-t-sm'
                  : 'w-36 h-42 rounded-t-md'
              }`}
              style={{
                backgroundColor: size === 'Kulhad (200ml)' ? '#B86F45' : '#FAF6EE'
              }}
            >
              {/* Fluted Grooves on Kulhad */}
              {size === 'Kulhad (200ml)' && (
                <div className="absolute inset-0 opacity-20 flex justify-between px-3 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-[1.5px] h-full bg-[#3B1E08]" />
                  ))}
                </div>
              )}

              {/* Liquid Fill with Dynamic Color */}
              <div
                className="w-full transition-all duration-700 relative"
                style={{
                  height: '75%',
                  backgroundColor: getLiquidColor()
                }}
              >
                {/* Froth / Malai Layer */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-[#FFF5E1]/40 backdrop-blur-xs flex items-center justify-center">
                  <div className="w-2 h-1 rounded-full bg-white/60 mx-1" />
                  <div className="w-3 h-1 rounded-full bg-white/60 mx-1" />
                </div>
              </div>
            </div>

            {/* Saucer / Coaster */}
            <div className="w-48 h-3 rounded-full bg-[#241C18]/15 mt-2" />
          </div>

          {/* Live Dynamic Specs Card */}
          <div className="w-full bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-[#241C18]/10 text-left font-mono text-xs space-y-1.5 shadow-sm">
            <p className="text-[#C46A32] font-semibold uppercase tracking-wider text-[11px]">
              YOUR CUSTOM CHAI SPEC
            </p>
            <p className="text-sm font-serif-display text-[#241C18] font-bold">
              {base.split(' ')[0]} • {flavor.split(' ')[0]}
            </p>
            <div className="text-[#241C18]/70 flex justify-between pt-1 text-[11px]">
              <span>{size.split(' ')[0]} Vessel</span>
              <span>{sweetness.split(' ')[0]}</span>
            </div>
            {addOns.length > 0 && (
              <p className="text-[10px] text-[#173F35] font-medium pt-1">
                + {addOns.map((a) => a.split(' (')[0]).join(', ')}
              </p>
            )}
            <div className="border-t border-[#241C18]/10 pt-2 flex items-center justify-between font-bold text-sm text-[#173F35]">
              <span>Calculated Price</span>
              <span className="text-base text-[#C46A32]">₹{price}</span>
            </div>
          </div>
        </div>

        {/* Right Configuration Console (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Tea Base */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              1. Choose Tea Base
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { name: 'Assam Strong CTC', desc: 'Bold & Malty' },
                { name: 'Darjeeling First Flush', desc: 'Delicate Muscatel (+₹40)' },
                { name: 'Kashmiri Kahwa Green', desc: 'Saffron & Spices (+₹35)' },
                { name: 'Oat Milk Golden Tea', desc: 'Plant-based (+₹30)' }
              ].map((b) => (
                <button
                  key={b.name}
                  onClick={() => setBase(b.name as typeof base)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    base === b.name
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5]'
                      : 'border-[#241C18]/15 bg-white/50 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  <div className="font-semibold">{b.name}</div>
                  <div className={`text-[10px] mt-0.5 ${base === b.name ? 'text-[#E4B363]' : 'text-[#241C18]/60'}`}>
                    {b.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Flavor Infusion */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              2. Fresh Hand-Crushed Infusion
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                'Crushed Adrak (Ginger)',
                'Elaichi (Green Cardamom)',
                'Kesar Masala (Saffron & Spices)',
                'Lemongrass Mint'
              ].map((f) => (
                <button
                  key={f}
                  onClick={() => setFlavor(f as typeof flavor)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    flavor === f
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-semibold'
                      : 'border-[#241C18]/15 bg-white/50 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  <div className="truncate">{f.split(' (')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Sweetness Level */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              3. Sweetness & Sugar
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                'Unsweetened (0%)',
                'Mild Jaggery (25%)',
                'Desi Khand (50%)',
                'Standard Sweet (100%)'
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setSweetness(s as typeof sweetness)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    sweetness === s
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5] font-semibold'
                      : 'border-[#241C18]/15 bg-white/50 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  <div>{s.split(' ')[0]}</div>
                  <div className="text-[10px] opacity-75">{s.split(' ')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Vessel & Size */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              4. Vessel & Serving Size
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { name: 'Cutting (120ml)', desc: 'Glass Tumbler' },
                { name: 'Kulhad (200ml)', desc: 'Smoked Clay' },
                { name: 'Sanctuary Mug (350ml)', desc: 'Double Steep (+₹25)' }
              ].map((v) => (
                <button
                  key={v.name}
                  onClick={() => setSize(v.name as typeof size)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    size === v.name
                      ? 'border-[#173F35] bg-[#173F35] text-[#F7F1E5]'
                      : 'border-[#241C18]/15 bg-white/50 text-[#241C18] hover:border-[#173F35]/40'
                  }`}
                >
                  <div className="font-semibold">{v.name.split(' ')[0]}</div>
                  <div className={`text-[10px] ${size === v.name ? 'text-[#E4B363]' : 'text-[#241C18]/60'}`}>
                    {v.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Optional Add-ons */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-[#241C18]/70 font-semibold block">
              5. Pair with Artisanal Accompaniments
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Warm Maska Bun (+₹45)', 'Dollop of Fresh Malai (+₹25)'].map((addon) => {
                const isSelected = addOns.includes(addon);
                return (
                  <button
                    key={addon}
                    onClick={() => toggleAddOn(addon)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-[#C46A32] bg-[#C46A32]/10 text-[#C46A32] font-semibold'
                        : 'border-[#241C18]/15 bg-white/50 text-[#241C18] hover:border-[#241C18]/40'
                    }`}
                  >
                    <span>{addon}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 px-8 rounded-full bg-[#173F35] text-[#F7F1E5] font-medium text-xs tracking-widest uppercase hover:bg-[#12332B] transition-all shadow-md hover:shadow-lg flex items-center justify-between group active:scale-98"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#E4B363]" />
                <span>Add Custom Brew to Order</span>
              </div>
              <span className="font-mono text-sm font-bold text-[#E4B363]">
                ₹{price}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
