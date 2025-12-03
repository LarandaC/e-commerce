import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      items: [],

      // Actions
      addItem: (product, quantity = 1, size = "M", color = "Default") => {
        const items = get().items;
        const existingItemIndex = items.findIndex(
          (item) =>
            item.id === product.id && item.size === size && item.color === color
        );

        if (existingItemIndex > -1) {
          // Item exists, update quantity
          set({
            items: items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          // Add new item
          set({
            items: [
              ...items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity,
                size,
                color,
              },
            ],
          });
        }
      },

      updateQuantity: (id, size, color, newQuantity) => {
        if (newQuantity < 1) return;

        set({
          items: get().items.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity: newQuantity }
              : item
          ),
        });
      },

      removeItem: (id, size, color) => {
        set({
          items: get().items.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      // Computed values
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal > 100000 ? 0 : 15000;
      },

      getTotal: () => {
        return get().getSubtotal() + get().getShipping();
      },
    }),
    {
      name: "cart-storage", // localStorage key
      // Only persist the items array
      partialize: (state) => ({ items: state.items }),
    }
  )
);
