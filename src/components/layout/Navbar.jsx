import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Home, Package } from "lucide-react";
import { BRAND_NAME, LEFT_NAV_ITEMS } from "../../data/constants";

// derecha - icons need to be imported in component
const rightNavItems = [
  { name: "Iniciar sesión", to: "/login", icon: User },
  { name: "Carrito", to: "/cart", icon: ShoppingCart },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const closeMenu = () => setIsMenuOpen(false);

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
    },
    [isMenuOpen]
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
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const renderNavItem = (Icon, name) => (Icon ? <Icon size={20} /> : name);

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
                  {renderNavItem(Icon, name)}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation - derecha */}
            <div className="hidden md:flex items-center space-x-6">
              {rightNavItems.map(({ to, name, exact, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-primary text-lg transition-colors ${
                      isActive ? "font-bold" : "hover:text-secondary"
                    }`
                  }
                >
                  {renderNavItem(Icon, name)}
                </NavLink>
              ))}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {rightNavItems.map(({ to, name, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={to}
                  onClick={closeMenu}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  {Icon && <Icon size={24} />}
                </NavLink>
              ))}
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
