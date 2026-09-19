'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, ToastMessage, PassportStamp, ChaiCustomization } from '@/types';
import { PASSPORT_STAMPS } from '@/data/rewardsData';

interface AppStateContextType {
  // Cart
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  tax: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: MenuItem, customization?: Partial<ChaiCustomization>, qty?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;

  // Product Modal / Quick View
  activeProductModal: MenuItem | null;
  openProductModal: (item: MenuItem) => void;
  closeProductModal: () => void;

  // Toasts
  toasts: ToastMessage[];
  addToast: (title: string, description?: string, type?: 'success' | 'info' | 'cart') => void;
  removeToast: (id: string) => void;

  // Loyalty Passport
  userPoints: number;
  stamps: PassportStamp[];
  unlockNextStamp: () => void;

  // Mobile Menu
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<MenuItem | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [userPoints, setUserPoints] = useState(380);
  const [stamps, setStamps] = useState<PassportStamp[]>(PASSPORT_STAMPS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('teatoast_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Ignore localstorage errors
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('teatoast_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'cart' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openProductModal = (item: MenuItem) => setActiveProductModal(item);
  const closeProductModal = () => setActiveProductModal(null);

  const addToCart = (item: MenuItem, customization?: Partial<ChaiCustomization>, qty: number = 1) => {
    const customSummary = customization
      ? `${customization.base || ''} • ${customization.flavor || ''} • ${customization.sweetness || ''} • ${customization.size || ''}`
      : undefined;

    const unitPrice = customization?.totalPrice || item.price;
    const cartItemId = `${item.id}-${customSummary || 'standard'}-${Date.now()}`;

    const newItem: CartItem = {
      cartItemId,
      menuItemId: item.id,
      name: item.name,
      category: item.category,
      unitPrice,
      quantity: qty,
      image: item.image,
      customizationSummary: customSummary,
      customizations: customization
    };

    setCart((prev) => [...prev, newItem]);
    addToast('Added to Tray', `${item.name} (${qty}x)`, 'cart');
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const unlockNextStamp = () => {
    setStamps((prev) => {
      const nextIndex = prev.findIndex((s) => !s.isUnlocked);
      if (nextIndex === -1) return prev;
      const updated = [...prev];
      updated[nextIndex] = {
        ...updated[nextIndex],
        isUnlocked: true,
        unlockedDate: 'Just Now'
      };
      return updated;
    });
    setUserPoints((p) => p + 50);
    addToast('Passport Stamped! ✨', 'You earned +50 Tea Points for trying a new brew.');
  };

  // Computations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + tax;

  return (
    <AppStateContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        tax,
        total,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        activeProductModal,
        openProductModal,
        closeProductModal,
        toasts,
        addToast,
        removeToast,
        userPoints,
        stamps,
        unlockNextStamp,
        isMobileMenuOpen,
        setIsMobileMenuOpen
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
