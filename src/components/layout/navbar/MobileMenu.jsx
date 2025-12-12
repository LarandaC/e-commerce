import { useRef, useEffect } from "react";
import { NavLinks } from "./NavLinks";

export const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="md:hidden mt-4 pt-4 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 rounded-lg p-2"
    >
      <NavLinks
        className="flex flex-col space-y-3"
        itemClassName="flex items-center gap-3 text-primary py-2 px-3 rounded-lg transition-colors hover:bg-primary/10 [&.active]:bg-primary/5 [&.active]:font-bold"
        onLinkClick={onClose}
      />
    </div>
  );
};
