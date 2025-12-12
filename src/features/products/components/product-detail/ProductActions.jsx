import { ShoppingCart, Check } from "lucide-react";
import { QuantitySelector } from "../../../../components/ui/inputs/QuantitySelector";
import { ActionButton } from "../../../../components/ui/buttons/ActionButton";

export const ProductActions = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  handleAddToCart,
  isAdded,
}) => {
  return (
    <div className="space-y-6 pt-6 border-t border-border">
      <div className="flex items-center gap-6">
        {/* Quantity Selector */}
        <QuantitySelector
          quantity={quantity}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          size="lg"
        />

        {/* Add to Cart Button */}
        <ActionButton
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`flex-1 gap-3 ${
            isAdded ? "bg-green-500 hover:bg-green-600" : ""
          }`}
          variant={isAdded ? "success" : "primary"}
        >
          {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          {isAdded ? "¡Agregado al Carrito!" : "Agregar al Carrito"}
        </ActionButton>
      </div>
    </div>
  );
};
