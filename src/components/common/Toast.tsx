'use client';

import React from 'react';
import { useAppState } from '@/components/providers/AppStateContext';
import { CheckCircle2, ShoppingBag, Info, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, removeToast } = useAppState();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl backdrop-blur-md border transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
          style={{
            backgroundColor: '#173F35',
            borderColor: 'rgba(228, 179, 99, 0.3)',
            color: '#F7F1E5'
          }}
        >
          <div className="mt-0.5 shrink-0 text-[#E4B363]">
            {toast.type === 'cart' ? (
              <ShoppingBag className="w-5 h-5" />
            ) : toast.type === 'info' ? (
              <Info className="w-5 h-5" />
            ) : (
              <CheckCircle2 className="w-5 h-5" />
            )}
          </div>

          <div className="flex-1">
            <h4 className="text-sm font-semibold tracking-wide text-[#F7F1E5]">
              {toast.title}
            </h4>
            {toast.description && (
              <p className="text-xs text-[#F7F1E5]/75 mt-0.5">
                {toast.description}
              </p>
            )}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#F7F1E5]/60 hover:text-[#F7F1E5] p-1 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
