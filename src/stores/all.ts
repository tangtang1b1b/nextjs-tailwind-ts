import { create } from 'zustand'

interface AllStore {
  all: string[]
  setAll: (all: string[]) => void
}

export const useAllStore = create<AllStore>((set) => ({
  all: [],
  setAll: (all) => set({ all }),
}))

export type { AllStore }
