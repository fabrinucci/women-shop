import { create } from 'zustand';

interface UIMenuState {
  isOpenMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useUIStore = create<UIMenuState>((set) => ({
  isOpenMenu: false,
  openMenu: () => set(() => ({ isOpenMenu: true })),
  closeMenu: () => set(() => ({ isOpenMenu: false })),
}));
