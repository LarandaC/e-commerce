import { useState } from "react";
import { useCartStore } from "../../../cart/stores/cartStore";
import { QuickViewModal } from "../../../../components/ui/overlays/QuickViewModal";
import { ProductImage } from "./ProductImage";
import { ProductControls } from "./ProductControls";
import { ProductInfo } from "./ProductInfo";

export const ProductCard = ({ product }) => {
  const { stock = 10 } = product;

  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const isOutOfStock = stock === 0;
  const isLowStock = stock > 0 && stock < 5;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (isOutOfStock) return;
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

  const handleQuickView = (e) => {
    e.preventDefault();
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <div className="group relative overflow-hidden transition-all duration-300 mt-4 bg-white shadow-md border border-border/40 rounded-xl card-hover">
        {/* Image Container with Controls Overlay */}
        <div className="relative overflow-hidden">
          <ProductImage
            product={product}
            isOutOfStock={isOutOfStock}
            isLowStock={isLowStock}
            onQuickView={handleQuickView}
          />

          <ProductControls
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onAdd={handleAddToCart}
            isAdded={isAdded}
            isOutOfStock={isOutOfStock}
          />
        </div>

        {/* Content */}
        <ProductInfo product={product} />
      </div>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
