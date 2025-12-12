import { NavLink } from "react-router-dom";
import { BRAND_NAME } from "../../../data/constants";

export const NavbarLogo = ({ onClick, className = "" }) => {
  return (
    <NavLink to="/" onClick={onClick} className={`mr-8 ${className}`}>
      <span className="text-2xl font-bold text-primary select-none">
        {BRAND_NAME}
      </span>
    </NavLink>
  );
};
