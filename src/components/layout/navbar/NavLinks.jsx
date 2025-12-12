import { NavLink } from "react-router-dom";
import { LEFT_NAV_ITEMS } from "../../../data/constants";

export const NavLinks = ({
  onLinkClick,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div className={className}>
      {LEFT_NAV_ITEMS.map(({ to, name, exact, icon: Icon }) => (
        <NavLink
          key={name}
          to={to}
          end={exact}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `${itemClassName} ${
              isActive ? "font-bold" : "hover:text-primary-light"
            }`
          }
        >
          {Icon ? <Icon size={20} /> : name}
        </NavLink>
      ))}
    </div>
  );
};
