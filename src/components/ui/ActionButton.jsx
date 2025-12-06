export const ActionButton = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer";

  const variants = {
    primary:
      "bg-linear-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl",
    secondary:
      "border border-primary text-primary hover:text-white hover:bg-primary",
    ghost: "text-primary hover:text-secondary hover:bg-primary/5",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg",
    success: "bg-green-500 text-white hover:bg-green-600 shadow-lg",
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
