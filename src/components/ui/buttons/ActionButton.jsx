export const ActionButton = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer btn-ripple";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-secondary transition-smooth",
    secondary:
      "border-2 border-primary text-primary hover:text-white hover:bg-primary transition-smooth",
    accent:
      "bg-secondary text-white shadow-lg hover:bg-primary hover:shadow-xl transition-smooth",
    gradient:
      "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-secondary transition-smooth",
    ghost:
      "text-primary hover:text-secondary hover:bg-primary/10 transition-smooth",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-smooth",
    danger: "bg-error text-white hover:bg-error-dark shadow-lg hover:shadow-xl",
    success:
      "bg-success text-white hover:bg-success-dark shadow-lg hover:shadow-xl",
    warning:
      "bg-warning text-white hover:bg-warning-dark shadow-lg hover:shadow-xl",
    info: "bg-info text-white hover:bg-info-dark shadow-lg hover:shadow-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
