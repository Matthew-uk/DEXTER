import { create } from "zustand";

interface DexterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | null) => void;
}

const useDexterState = create<DexterProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: any) => set({ isOpen }),
}));

export default useDexterState;
