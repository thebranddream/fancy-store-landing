/**
 * UI Store - Global UI state management
 * Handles toasts, modals, and other UI state
 */

import { create } from 'zustand';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

interface UIState {
  toasts: Toast[];
  isQuickViewOpen: boolean;
  quickViewProductId: string | null;
  isMobileMenuOpen: boolean;
  
  // Actions
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  isQuickViewOpen: false,
  quickViewProductId: null,
  isMobileMenuOpen: false,

  addToast: (toast) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast = { ...toast, id };
    
    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    // Auto-dismiss after duration (default 4 seconds)
    const duration = toast.duration ?? 4000;
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, duration);
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },

  openQuickView: (productId) => {
    set({ isQuickViewOpen: true, quickViewProductId: productId });
  },

  closeQuickView: () => {
    set({ isQuickViewOpen: false, quickViewProductId: null });
  },

  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }));
  },

  closeMobileMenu: () => {
    set({ isMobileMenuOpen: false });
  },
}));
