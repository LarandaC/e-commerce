import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlistStore } from "../../../features/wishlist/stores/wishlistStore";

export const WishlistLink = ({ onClick, className = "" }) => {
  const wishlistCount = useWishlistStore((state) => state.wishlist.length);

  return (
    <NavLink
      to="/wishlist"
      onClick={onClick}
      className={({ isActive }) =>
        `relative flex items-center gap-2 text-primary text-lg transition-colors ${
          isActive ? "font-bold" : "hover:text-secondary"
        } ${className}`
      }
    >
      <Heart size={20} />
      {wishlistCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-error text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {wishlistCount}
        </span>
      )}
    </NavLink>
  );
};
