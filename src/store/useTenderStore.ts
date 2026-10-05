import { create } from 'zustand';
import { HardwareItem, TenderBasketItem } from '../types';
import { HARDWARE_ITEMS } from '../data/mockData';

interface TenderStore {
  basket: TenderBasketItem[];
  addToTender: (item: HardwareItem) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromTender: (id: string) => void;
  clearTender: () => void;
  totalTenderCount: () => number;
}

export const useTenderStore = create<TenderStore>((set, get) => ({
  basket: [
    {
      item: HARDWARE_ITEMS[0],
      quantity: 1,
      addedAt: new Date().toISOString()
    },
    {
      item: HARDWARE_ITEMS[1],
      quantity: 1,
      addedAt: new Date().toISOString()
    }
  ],
  addToTender: (item) => set((state) => {
    const existing = state.basket.find((b) => b.item.id === item.id);
    if (existing) {
      return {
        basket: state.basket.map((b) =>
          b.item.id === item.id ? { ...b, quantity: b.quantity + 1 } : b
        )
      };
    }
    return { basket: [...state.basket, { item, quantity: 1, addedAt: new Date().toISOString() }] };
  }),
  updateQuantity: (id, delta) => set((state) => ({
    basket: state.basket
      .map((b) => {
        if (b.item.id === id) {
          const newQty = b.quantity + delta;
          return newQty > 0 ? { ...b, quantity: newQty } : null;
        }
        return b;
      })
      .filter(Boolean) as TenderBasketItem[]
  })),
  removeFromTender: (id) => set((state) => ({
    basket: state.basket.filter((b) => b.item.id !== id)
  })),
  clearTender: () => set({ basket: [] }),
  totalTenderCount: () => get().basket.reduce((sum, item) => sum + item.quantity, 0)
}));
