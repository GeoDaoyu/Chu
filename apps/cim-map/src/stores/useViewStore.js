import { create } from 'zustand';

export default create((set) => ({
  view: null,
  initialize: (newView) => set({ view: newView }),
}));
