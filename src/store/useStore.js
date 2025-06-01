import { create } from "zustand";

const useStore = create((set) => ({
  // Navbar state
  isNavbarTransparent: true,
  setNavbarTransparent: (isTransparent) =>
    set({ isNavbarTransparent: isTransparent }),

  // Mobile menu state
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Contact form state
  formData: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
  updateFormData: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  resetForm: () =>
    set((state) => ({
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    })),
}));

export default useStore;
