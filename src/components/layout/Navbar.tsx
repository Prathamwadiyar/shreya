'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppState } from '@/components/providers/AppStateContext';
import { ShoppingBag, Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, openCart, isMobileMenuOpen, setIsMobileMenuOpen } = useAppState();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Experience', href: '/experience' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Reserve', href: '/reserve' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F1E5]/90 backdrop-blur-md py-4 border-b border-[#241C18]/10 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-hidden"
            aria-label="Tea Toast Homepage"
          >
            <span className="font-serif-display text-2xl sm:text-3xl tracking-tight text-[#241C18] group-hover:text-[#173F35] transition-colors">
              TEA <span className="italic font-serif text-[#C46A32]">TOAST</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#241C18]/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-1 hover:text-[#173F35] ${
                    isActive ? 'text-[#173F35] font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#173F35] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Desktop Utilities */}
          <div className="hidden md:flex items-center gap-5">
            {/* Live Cafe Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F35]/5 border border-[#173F35]/15 text-[11px] font-mono text-[#173F35]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>OPEN TIL 10 PM</span>
            </div>

            {/* Tray / Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full text-[#241C18] hover:bg-[#241C18]/5 transition-colors"
              aria-label={`Open cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C46A32] text-white text-[10px] font-mono font-bold flex items-center justify-center animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <Link
              href="/order"
              className="px-5 py-2.5 rounded-full bg-[#173F35] text-[#F7F1E5] text-xs font-medium tracking-wider uppercase hover:bg-[#12332B] transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={openCart}
              className="relative p-2 text-[#241C18]"
              aria-label={`Open cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#C46A32] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#241C18] focus:outline-hidden"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F1E5] flex flex-col justify-between p-8 pt-24 md:hidden animate-in fade-in duration-300">
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C46A32]">
              Navigation
            </p>
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', href: '/' },
                ...navLinks,
                { name: 'Order Pickup', href: '/order' },
                { name: 'Contact & Sanctuary', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif-display text-3xl text-[#241C18] hover:text-[#173F35] flex items-center justify-between group transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#241C18]/40 group-hover:text-[#173F35] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#241C18]/10 pt-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#173F35]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>OPEN TODAY: 8:00 AM — 10:00 PM</span>
            </div>

            <p className="text-xs text-[#241C18]/60 font-body">
              Tea Toast Sanctuary • 42 Gulmohar Lane, Indiranagar, Bangalore
            </p>

            <div className="flex gap-4 text-xs font-mono tracking-wider text-[#C46A32]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
              <a href="tel:+918025201122">CONCIERGE</a>
              <Link href="/reserve" onClick={() => setIsMobileMenuOpen(false)}>RESERVE</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
