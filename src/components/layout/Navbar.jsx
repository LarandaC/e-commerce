import { useState } from "react";
import { NavLink } from "react-router-dom";
// Importamos todos los íconos necesarios
import { Menu, X, ShoppingCart, User, Home, Package } from "lucide-react";

// 1. ITEMS DE NAVEGACIÓN
// Ítems a la IZQUIERDA (Enlaces principales, se van al menú móvil)
const leftNavItems = [
  { name: "Inicio", to: "/", exact: true, icon: null },
  { name: "Productos", to: "/productos", icon: null },
  { name: "Sobre nosotros", to: "/sobre-nosotros", icon: null },
];

// Ítems a la DERECHA (Acciones, se quedan visibles en móvil como íconos)
const rightNavItems = [
  { name: "Iniciar sesión", to: "/login", icon: User },
  { name: "Carrito", to: "/cart", icon: ShoppingCart },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const renderNavItem = (Icon, name) => (Icon ? <Icon size={20} /> : name);

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      {/* Navbar */}
      <nav className="glass-nav mx-6 md:mx-20 lg:mx-40 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <NavLink to="/" onClick={closeMenu} className="mr-8">
              <span className="text-xl font-bold text-foreground select-none">
                Store-It
              </span>
            </NavLink>

            {/* Desktop Navigation -left */}
            <div className="hidden md:flex items-center space-x-6">
              {leftNavItems.map(({ to, name, exact, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `flex items-center text-foreground text-[14px] font-medium transition-colors ${
                      isActive
                        ? "text-accent-morado2 font-bold"
                        : "hover:text-primary-light"
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
                    `flex items-center gap-2 text-foreground font-medium transition-colors ${
                      isActive
                        ? "text-accent-morado2 font-bold"
                        : "hover:text-primary-light"
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
                  className="text-foreground hover:text-primary-light transition-colors"
                >
                  {Icon && <Icon size={24} />}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 text-foreground hover:text-primary-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {leftNavItems.map(({ to, name, exact }) => (
                <NavLink
                  key={name}
                  to={to}
                  end={exact}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-foreground font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/10 text-accent-morado font-bold"
                        : "hover:bg-gray-100"
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
