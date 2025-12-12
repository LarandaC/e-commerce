import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { User, ChevronDown, LogOut, Heart } from "lucide-react";
import { useAuthStore } from "../../../features/auth/stores/authStore";

export const UserMenu = ({ onClose, iconSize = 20 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, isAuthenticated, logout } = useAuthStore();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  if (!isAuthenticated) {
    return (
      <NavLink
        to="/login"
        onClick={onClose}
        className="flex items-center gap-2 text-primary text-lg transition-colors hover:text-secondary"
      >
        <User size={iconSize} />
      </NavLink>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors cursor-pointer"
      >
        <User size={iconSize} />
        <span className="hidden md:inline">{user?.name || "Usuario"}</span>
        <ChevronDown
          size={16}
          className={`transition-transform hidden md:block ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
          <NavLink
            to="/profile"
            onClick={() => {
              setIsOpen(false);
              if (onClose) onClose();
            }}
            className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
          >
            <User size={18} />
            <span>Mi Perfil</span>
          </NavLink>
          <NavLink
            to="/wishlist"
            onClick={() => {
              setIsOpen(false);
              if (onClose) onClose();
            }}
            className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
          >
            <Heart size={18} />
            <span>Lista de deseos</span>
          </NavLink>
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
              if (onClose) onClose();
            }}
            className="w-full cursor-pointer flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
          >
            <LogOut size={18} />
            <span>Salir</span>
          </button>
        </div>
      )}
    </div>
  );
};
