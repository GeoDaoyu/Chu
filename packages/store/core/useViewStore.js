import { create } from 'zustand';

const useViewStore = create((set) => ({
  view: null,
  initialize: (newView) => set({ view: newView }),
}));
export default useViewStore;
