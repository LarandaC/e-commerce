import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Modal } from "./Modal";
import { formatCurrency } from "../../../utils/formatters";
import { useCartStore } from "../../../features/cart/stores/cartStore";
import { QuantitySelector } from "../inputs/QuantitySelector";
import { Badge } from "../feedback/Badge";
import { StarRating } from "../feedback/StarRating";
import { NavLink } from "react-router-dom";

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  const {
    id,
    name,
    price,
    image,
    description,
    badge,
    stock = 10,
    rating = 0,
    reviewCount = 0,
    discount,
    originalPrice,
    size,
    color,
  } = product;

  const isOutOfStock = stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative aspect-square md:aspect-auto bg-background">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {badge && <Badge type={badge} className="top-4 left-4" />}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col h-full">
          <div className="mb-auto">
            <h2 className="text-2xl font-bold text-primary mb-2">{name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={rating} reviewCount={reviewCount} />
              <span className="text-sm text-foreground">
                {stock > 0 ? (
                  <span className="text-success font-medium">En Stock</span>
                ) : (
                  <span className="text-error font-medium">Agotado</span>
                )}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              {discount ? (
                <>
                  <span className="text-3xl font-bold text-primary">
                    {formatCurrency(price)}
                  </span>
                  <span className="text-xl text-foreground line-through">
                    {formatCurrency(originalPrice)}
                  </span>
                  <span className="px-2 py-1 bg-error/10 text-error text-sm font-bold rounded-full">
                    -{discount}%
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary">
                  {formatCurrency(price)}
                </span>
              )}
            </div>

            {/* Size and Color */}
            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              {size && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">Talle:</span>
                  <span>{Array.isArray(size) ? size.join(", ") : size}</span>
                </div>
              )}
              {size && color && <span className="text-border">|</span>}
              {color && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">Color:</span>
                  <span>{Array.isArray(color) ? color.join(", ") : color}</span>
                </div>
              )}
            </div>

            <p className="text-foreground/80 mb-8 line-clamp-4">
              {description}
            </p>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <QuantitySelector
                  quantity={quantity}
                  onIncrement={() => setQuantity((q) => q + 1)}
                  onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={isOutOfStock}
                />
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded || isOutOfStock}
                  className={`flex-1 py-3 px-6 cursor-pointer rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isAdded
                      ? "bg-success text-white"
                      : isOutOfStock
                      ? "bg-background text-foreground cursor-not-allowed"
                      : "bg-primary text-white hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
                  {isAdded ? "Agregado" : isOutOfStock ? "Agotado" : "Agregar"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40">
            <NavLink
              to={`/colecciones/${id}`}
              className="text-primary font-medium hover:underline flex items-center justify-center gap-2"
              onClick={onClose}
            >
              Ver detalle completo
            </NavLink>
          </div>
        </div>
      </div>
    </Modal>
  );
};
