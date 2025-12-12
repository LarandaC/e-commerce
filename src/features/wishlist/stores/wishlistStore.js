import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [], // array of product IDs

      addToWishlist: (productId) => {
        set((state) => ({
          wishlist: [...state.wishlist, productId],
        }));
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((id) => id !== productId),
        }));
      },

      toggleWishlist: (productId) => {
        const { wishlist } = get();
        if (wishlist.includes(productId)) {
          get().removeFromWishlist(productId);
        } else {
          get().addToWishlist(productId);
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },

      clearWishlist: () => {
        set({ wishlist: [] });
      },

      getWishlistCount: () => {
        return get().wishlist.length;
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
