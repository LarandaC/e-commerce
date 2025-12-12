import { ShoppingCart, Check } from "lucide-react";
import { QuantitySelector } from "../../../../components/ui/inputs/QuantitySelector";

export const ProductControls = ({
  quantity,
  onIncrement,
  onDecrement,
  onAdd,
  isAdded,
  isOutOfStock,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/95 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-3 z-20">
      {/* Quantity Selector */}
      <QuantitySelector
        quantity={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        size="sm"
        className="bg-background"
        disabled={isOutOfStock}
      />

      {/* Add Button */}
      <button
        onClick={onAdd}
        disabled={isAdded || isOutOfStock}
        className={`flex-1 cursor-pointer py-2 px-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
          isAdded
            ? "bg-success text-white"
            : "bg-primary text-white hover:bg-secondary"
        }`}
      >
        {isAdded ? <Check size={16} /> : <ShoppingCart size={16} />}
        {isOutOfStock ? "Agotado" : isAdded ? "Listo" : "Agregar"}
      </button>
    </div>
  );
};
