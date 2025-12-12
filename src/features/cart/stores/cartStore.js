import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      items: [],
      savedItems: [],

      // Actions
      addItem: (product, quantity = 1, size = "M", color = "Default") => {
        const items = get().items;
        const existingItemIndex = items.findIndex(
          (item) =>
            item.id === product.id && item.size === size && item.color === color
        );

        // Stock validation (assuming product.stock exists, default to Infinity if not)
        const maxStock = product.stock || Infinity;

        if (existingItemIndex > -1) {
          const currentItem = items[existingItemIndex];
          const newQuantity = currentItem.quantity + quantity;

          if (newQuantity > maxStock) {
            // Optional: You could return false or throw an error to notify UI
            console.warn("Cannot add more items than available stock");
            return;
          }

          // Item exists, update quantity
          set({
            items: items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: newQuantity }
                : item
            ),
          });
        } else {
          if (quantity > maxStock) {
            console.warn("Cannot add more items than available stock");
            return;
          }

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
                stock: maxStock, // Persist stock info
                addedAt: new Date().toISOString(), // Timestamp
              },
            ],
          });
        }
      },

      updateQuantity: (id, size, color, newQuantity) => {
        if (newQuantity < 1) return;

        const items = get().items;
        const item = items.find(
          (i) => i.id === id && i.size === size && i.color === color
        );

        if (item && newQuantity > item.stock) {
          console.warn("Cannot exceed available stock");
          return;
        }

        set({
          items: items.map((item) =>
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

      // Save for Later Actions
      saveForLater: (id, size, color) => {
        const { items, savedItems } = get();
        const itemToSave = items.find(
          (item) => item.id === id && item.size === size && item.color === color
        );

        if (itemToSave) {
          set({
            items: items.filter(
              (item) =>
                !(item.id === id && item.size === size && item.color === color)
            ),
            savedItems: [
              ...savedItems,
              { ...itemToSave, savedAt: new Date().toISOString() },
            ],
          });
        }
      },

      moveToCart: (id, size, color) => {
        const { items, savedItems } = get();
        const itemToMove = savedItems.find(
          (item) => item.id === id && item.size === size && item.color === color
        );

        if (itemToMove) {
          // Check if item already exists in cart to merge or add
          // For simplicity, we'll just use addItem logic which handles merging
          // But we need to remove from savedItems first
          set({
            savedItems: savedItems.filter(
              (item) =>
                !(item.id === id && item.size === size && item.color === color)
            ),
          });

          // Re-add to cart using the store's addItem action to reuse logic
          get().addItem(
            itemToMove,
            itemToMove.quantity,
            itemToMove.size,
            itemToMove.color
          );
        }
      },

      removeSavedItem: (id, size, color) => {
        set({
          savedItems: get().savedItems.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          ),
        });
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
      // Persist both items and savedItems
      partialize: (state) => ({
        items: state.items,
        savedItems: state.savedItems,
      }),
    }
  )
);
