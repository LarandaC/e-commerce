import { NavLink } from "react-router-dom";

export const SecondaryButton = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:text-white font-bold rounded-2xl hover:bg-primary transition-all duration-300 transform hover:scale-105"
    >
      {text}
    </NavLink>
  );
};
