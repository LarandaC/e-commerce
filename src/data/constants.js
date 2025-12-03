/**
 * Application-wide constants
 */

// Brand information
export const BRAND_NAME = "Store-It";
export const BRAND_TAGLINE = "Tu tienda de moda urbana";

// Navigation items
export const LEFT_NAV_ITEMS = [
  { name: "Inicio", to: "/", exact: true, icon: null },
  { name: "Colecciones", to: "/colecciones", icon: null },
  { name: "Sobre nosotros", to: "/about", icon: null },
];

// Right navigation items (icons imported in component)
export const RIGHT_NAV_ITEMS = [
  { name: "Iniciar sesión", to: "/login", iconName: "User" },
  { name: "Carrito", to: "/cart", iconName: "ShoppingCart" },
];

// Developer information
export const DEVELOPER_NAME = "Tu Nombre";
export const DEVELOPER_GITHUB = "https://github.com/laranda";
