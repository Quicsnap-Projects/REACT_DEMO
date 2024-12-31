import { create } from "zustand";

export const useCreateModelStore = create((set) => ({
  selectedProduct: null,
  uploadedImage: null,
  selectedAngle: null,
  prompt: "",
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setUploadedImage: (file) => set({ uploadedImage: file }),
  setSelectedAngle: (angle) => set({ selectedAngle: angle }),
  setPrompt: (prompt) => set({ prompt: prompt }),
}));
