export const SubmitButton = ({
  children,
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles =
    "w-full inline-flex items-center justify-center px-6 py-3 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer shadow-lg hover:shadow-xl";

  const variants = {
    primary: "bg-linear-to-r from-primary to-secondary text-white",
    secondary:
      "border border-primary text-primary hover:text-white hover:bg-primary",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
