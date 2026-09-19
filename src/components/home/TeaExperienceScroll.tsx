'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const STEPS = [
  {
    num: '01',
    title: 'Choose your tea',
    subtitle: 'Single-Garden Harvests',
    copy: 'From high-elevation Orthodox Darjeeling flushes to rich, full-bodied CTC harvests grown in the fertile red loam of Upper Assam along the Brahmaputra.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80',
    detail: 'Orthodox & CTC Whole Leaf'
  },
  {
    num: '02',
    title: 'Brew the moment',
    subtitle: 'The Rolling Boil',
    copy: 'Fresh spring water brought to an energetic rolling boil in heavy brass kettles, aerating the tea leaves and awakening deep amber tannins.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    detail: 'Simmered over slow blue flame'
  },
  {
    num: '03',
    title: 'Add your flavor',
    subtitle: 'Mortar-Pounded Aromatics',
    copy: 'Fresh ginger root bruised by hand in heavy granite mortars, paired with plump green cardamom pods from Idukki, cinnamon bark, and tellicherry pepper.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=900&q=80',
    detail: 'Never powdered syrups'
  },
  {
    num: '04',
    title: 'Make it yours',
    subtitle: 'Conscious Sweetening & Dairy',
    copy: 'Steamed full-cream farm milk or rich barista-grade oat milk. Sweetened with unrefined deshi khand, raw organic jaggery, or savored pure.',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=80',
    detail: 'Organic jaggery & unrefined khand'
  },
  {
    num: '05',
    title: 'Take your time',
    subtitle: 'The Deceleration',
    copy: 'Poured from height into porous earthenware kulhads that impart a subtle roasted clay minerality. Sip slowly. The kettle knows what it is doing.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80',
    detail: 'Double-walled terracotta finish'
  }
];

export function TeaExperienceScroll() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 bg-[#173F35] text-[#F7F1E5] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial from-[#1C4D41] to-[#12332B] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E4B363] block mb-2">
            04 / The Tea Experience
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[#F7F1E5] font-normal tracking-tight">
            THE FIVE ACTS OF <br />
            <span className="italic font-serif text-[#E4B363]">EVERY STEEP.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F7F1E5]/75 mt-4 font-body max-w-xl">
            A ritual perfected across generations, stripped of haste. Scroll through our five deliberate stages of brewing.
          </p>
        </div>

        {/* Interactive Storytelling Layout (Left: Step Controller, Right: Atmospheric Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Steps Navigator (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F7F1E5]/10 border-[#E4B363]/40 shadow-lg'
                      : 'bg-transparent border-transparent hover:bg-white/5 opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs text-[#E4B363] font-bold mt-1">
                      {step.num}
                    </span>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F7F1E5]">
                          {step.title}
                        </h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#E4B363] hidden sm:inline">
                          {step.subtitle}
                        </span>
                      </div>

                      {isActive && (
                        <p className="text-sm text-[#F7F1E5]/80 font-body leading-relaxed pt-2 animate-in fade-in duration-300">
                          {step.copy}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#12332B]">
              <Image
                src={STEPS[activeStep].image}
                alt={STEPS[activeStep].title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12332B]/90 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#173F35]/80 backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-mono text-[#E4B363] uppercase tracking-wider">
                  Phase {STEPS[activeStep].num} Spec
                </p>
                <p className="font-serif-display text-lg text-white">
                  {STEPS[activeStep].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
