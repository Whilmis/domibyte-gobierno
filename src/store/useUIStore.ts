import { create } from 'zustand';
import { HardwareItem, Language } from '../types';

interface UIStore {
  activeFichaItem: HardwareItem | null;
  setActiveFichaItem: (item: HardwareItem | null) => void;
  isDossierModalOpen: boolean;
  setIsDossierModalOpen: (isOpen: boolean) => void;
  isBasketModalOpen: boolean;
  setIsBasketModalOpen: (isOpen: boolean) => void;
  language: Language;
  toggleLanguage: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeFichaItem: null,
  setActiveFichaItem: (item) => set({ activeFichaItem: item }),
  isDossierModalOpen: false,
  setIsDossierModalOpen: (isOpen) => set({ isDossierModalOpen: isOpen }),
  isBasketModalOpen: false,
  setIsBasketModalOpen: (isOpen) => set({ isBasketModalOpen: isOpen }),
  language: 'es',
  toggleLanguage: () => set((state) => ({ language: state.language === 'es' ? 'en' : 'es' }))
}));
