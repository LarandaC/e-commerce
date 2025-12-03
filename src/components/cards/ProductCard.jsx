import { useState } from "react";
import { ShoppingCart, Check, Plus, Minus } from "lucide-react";
import { formatCurrency } from "../../utils/formatters";
import { useCartStore } from "../../stores/cartStore";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQuantity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="group relative overflow-hidden transition-all duration-300 mt-4 bg-white shadow-md border border-border/40 rounded-xl">
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="w-full h-3/4 flex items-center justify-center pt-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Bottom Overlay with Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/95 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-3">
          {/* Quantity Selector */}
          <div className=" bg-background border border-border rounded-lg p-1 flex items-center gap-2">
            <button
              onClick={decrementQuantity}
              className="w-7 h-7 cursor-pointer flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="w-4 text-center text-sm font-bold text-foreground">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="w-7 h-7 cursor-pointer flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-1 cursor-pointer py-2 px-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isAdded
                ? "bg-accent text-white hover:bg-accent-foreground"
                : "bg-primary text-white hover:bg-secondary"
            }`}
          >
            {isAdded ? <Check size={16} /> : <ShoppingCart size={16} />}
            {isAdded ? "Listo" : "Agregar"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className=" space-y-1 p-3">
        <div className="flex sm:flex-col md:flex-row items-center justify-between">
          <NavLink
            to={`/colecciones/${product.id}`}
            className="text-sm md:text-md lg:text-base font-medium text-foreground line-clamp-1 hover:underline block"
          >
            <span>{product.name}</span>
          </NavLink>
          <p className="text-sm md:text-md lg:text-base font-bold text-primary">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};
