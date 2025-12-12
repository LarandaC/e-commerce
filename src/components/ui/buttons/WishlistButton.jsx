import { Heart } from "lucide-react";
import { useWishlistStore } from "../../../features/wishlist/stores/wishlistStore";

export const WishlistButton = ({ productId, size = "md", className = "" }) => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(productId);

  const sizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = sizes[size];

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-3 right-3 z-10 p-2 cursor-pointer rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform ${
        inWishlist ? "bounce-in" : ""
      } ${className}`}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        size={iconSize}
        className={`transition-colors ${
          inWishlist ? "fill-error text-error" : "text-muted hover:text-error"
        }`}
      />
    </button>
  );
};
