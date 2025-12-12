import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "./NavbarLogo";
import { NavLinks } from "./NavLinks";
import { WishlistLink } from "./WishlistLink";
import { CartLink } from "./CartLink";
import { UserMenu } from "./UserMenu";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/40 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavbarLogo onClick={closeMenu} />
            <NavLinks className="hidden md:flex items-center space-x-6" />
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center space-x-6">
              <WishlistLink />
              <CartLink />
              <UserMenu />
            </div>

            {/* Mobile Navigation Icons */}
            <div className="md:hidden flex items-center space-x-4">
              <CartLink size={24} onClick={closeMenu} />
              <UserMenu iconSize={24} onClose={closeMenu} />
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

        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </nav>
    </header>
  );
};
