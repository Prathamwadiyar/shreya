'use client';

import React from 'react';

export function BrandStatement() {
  return (
    <section className="py-28 sm:py-40 px-6 sm:px-8 max-w-5xl mx-auto text-center">
      <div className="space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
          02 / The Philosophy
        </span>

        <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#241C18] leading-[1.08] font-normal tracking-tight">
          &ldquo;Some moments deserve <br />
          <span className="italic font-serif text-[#173F35]">to be brewed</span> slowly.&rdquo;
        </h2>

        <div className="w-12 h-[1.5px] bg-[#C46A32]/40 mx-auto my-6" />

        <p className="text-base sm:text-lg text-[#241C18]/75 max-w-2xl mx-auto font-body leading-relaxed">
          We believe chai is not a transaction grabbed between meetings. It is an everyday liturgy. Hand-crushed root ginger, green cardamom from the misty hills of Idukki, bold single-estate Assam CTC, and thick-sliced country loaves toasted golden on hot cast iron over cultured butter.
        </p>

        <div className="pt-4">
          <span className="text-xs font-mono tracking-widest uppercase text-[#241C18]/50">
            Welcome to your third place.
          </span>
        </div>
      </div>
    </section>
  );
}
