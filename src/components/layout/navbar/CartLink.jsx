import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export const CartLink = ({ onClick, size = 20, className = "" }) => {
  return (
    <NavLink
      to="/cart"
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 text-primary text-lg transition-colors ${
          isActive ? "font-bold" : "hover:text-secondary"
        } ${className}`
      }
    >
      <ShoppingCart size={size} />
    </NavLink>
  );
};
