import { create } from 'zustand';

type Store = {
  searchTitle: string;
  searchLocation: string;
  setSearchTitle: (title: string) => void;
  setSearchLocation: (location: string) => void;
};

export const useSearchStore = create<Store>((set) => ({
  searchTitle: '',
  searchLocation: '',
  setSearchTitle: (searchTitle: string) => set(() => ({ searchTitle })),
  setSearchLocation: (searchLocation: string) => set(() => ({ searchLocation }))
}));
