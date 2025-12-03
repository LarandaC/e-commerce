import { Plus, Minus } from "lucide-react";

const sizeVariants = {
  sm: {
    button: "w-7 h-7",
    icon: 14,
    text: "text-sm",
    width: "w-4",
  },
  md: {
    button: "w-8 h-8",
    icon: 16,
    text: "text-base",
    width: "w-8",
  },
  lg: {
    button: "w-10 h-10",
    icon: 16,
    text: "text-md",
    width: "w-12",
  },
};

export const QuantitySelector = ({
  quantity,
  onIncrement,
  onDecrement,
  size = "md",
  disabled = false,
  className = "",
}) => {
  const variant = sizeVariants[size];

  return (
    <div
      className={`flex items-center gap-3 bg-primary/5 border border-border rounded-xl p-1 ${className}`}
    >
      <button
        onClick={onDecrement}
        disabled={disabled}
        className={`${variant.button} cursor-pointer flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors text-foreground disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <Minus size={variant.icon} />
      </button>
      <span
        className={`${variant.width} text-center ${variant.text} font-bold text-foreground`}
      >
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        disabled={disabled}
        className={`${variant.button} cursor-pointer flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors text-foreground disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <Plus size={variant.icon} />
      </button>
    </div>
  );
};
