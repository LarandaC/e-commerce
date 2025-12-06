import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Home,
  Package,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { BRAND_NAME, LEFT_NAV_ITEMS } from "../../data/constants";
import { useAuthStore } from "../../stores/authStore";
import { ActionButton } from "../ui/ActionButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const menuRef = useRef(null);
  const userDropdownRef = useRef(null);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleUserDropdown = (e) => {
    e.stopPropagation();
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
      if (
        isUserDropdownOpen &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(e.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    },
    [isMenuOpen, isUserDropdownOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close menu on any scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleMenuScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close menu on any scroll
      if (isUserDropdownOpen) {
        setIsUserDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleMenuScroll);

    return () => {
      window.removeEventListener("scroll", handleMenuScroll);
    };
  }, [isUserDropdownOpen]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/40 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Navbar */}
      <nav className=" container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <NavLink to="/" onClick={closeMenu} className="mr-8">
              <span className="text-2xl font-bold text-primary select-none">
                {BRAND_NAME}
              </span>
            </NavLink>

            {/* Desktop Navigation -left */}
            <div className="hidden md:flex items-center space-x-6">
              {LEFT_NAV_ITEMS.map(({ to, name, exact, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `flex items-center text-primary text-lg transition-colors ${
                      isActive ? "font-bold" : "hover:text-primary-light"
                    }`
                  }
                >
                  {Icon ? <Icon size={20} /> : name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation - derecha */}
            <div className="hidden md:flex items-center space-x-6">
              {/* User Dropdown */}
              {isAuthenticated ? (
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={toggleUserDropdown}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <User size={20} />
                    <span>{user?.name || "Usuario"}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform cursor-pointer ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                      <NavLink
                        to="/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        <User size={18} />
                        <span>Mi Perfil</span>
                      </NavLink>
                      <button
                        onClick={() => {
                          setIsUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full cursor-pointer flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Salir</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="flex items-center gap-2 text-primary text-lg transition-colors hover:text-secondary"
                >
                  <User size={20} />
                </NavLink>
              )}

              {/* Cart */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-primary text-lg transition-colors ${
                    isActive ? "font-bold" : "hover:text-secondary"
                  }`
                }
              >
                <ShoppingCart size={20} />
              </NavLink>
            </div>

            {/* Mobile Navigation Icons */}
            <div className="md:hidden flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={toggleUserDropdown}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <User size={24} />
                    <span className="text-sm">{user?.name || "Usuario"}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                      <NavLink
                        to="/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        <User size={18} />
                        <span>Mi Perfil</span>
                      </NavLink>
                      <button
                        onClick={() => {
                          setIsUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full cursor-pointer flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Salir</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <User size={24} />
                </NavLink>
              )}
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className="text-primary hover:text-secondary transition-colors"
              >
                <ShoppingCart size={24} />
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 text-primary hover:text-secondary transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-4 pt-4 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 rounded-lg p-2"
          >
            <div className="flex flex-col space-y-3">
              {LEFT_NAV_ITEMS.map(({ to, name, exact }) => (
                <NavLink
                  key={name}
                  to={to}
                  end={exact}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-primary py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/5 text-primary font-bold"
                        : "hover:bg-primary/10"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
