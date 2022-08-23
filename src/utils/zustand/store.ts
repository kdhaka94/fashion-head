import create from "zustand";
import { HeadStoreTypes } from "./types";

export const useHeadStore = create<HeadStoreTypes>((set, get) => ({
  currentModals: [],
  user: null,
  openModal: (name) => {
    console.log({ opening: name });
    const current = get().currentModals;
    current.push(name);
    set({ currentModals: Array.from(new Set(current)) });
  },
  closeModal: (name) => {
    console.log({ closing: name });
    const current = get().currentModals;
    const removed = current.filter((curr) => curr !== name);
    set({ currentModals: removed });
  },
  setUser: (user) => {
    set({ user });
  },
}));
