import { NavLink } from "react-router-dom";

export const CtaButton = ({ to, text, children }) => {
  return (
    <NavLink
      to={to}
      className="group inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      {text}
      {children}
    </NavLink>
  );
};
