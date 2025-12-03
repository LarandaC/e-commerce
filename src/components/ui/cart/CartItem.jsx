import { Plus, Minus, Trash2 } from "lucide-react";
import { formatCurrency } from "../../../utils/formatters";

export const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              {item.name}
            </h3>
            <div className="flex gap-4 text-sm text-foreground/70 mb-2">
              <span>Talla: {item.size}</span>
              <span>Color: {item.color}</span>
            </div>
            <p className="text-lg font-bold text-primary">
              {formatCurrency(item.price)}
            </p>
          </div>

          {/* Quantity Controls & Remove */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3 bg-background border border-border rounded-xl p-1">
              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.size,
                    item.color,
                    item.quantity - 1
                  )
                }
                className="w-8 h-8 flex items-center cursor-pointer justify-center hover:bg-primary/10 rounded-lg transition-colors"
                disabled={item.quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.size,
                    item.color,
                    item.quantity + 1
                  )
                }
                className="w-8 h-8 flex items-center cursor-pointer justify-center hover:bg-primary/10 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id, item.size, item.color)}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors font-medium"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline hover:underline cursor-pointer">
                Eliminar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
