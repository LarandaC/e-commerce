import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useProductDetail } from "../../hooks/useProductDetail";
import { useCartStore } from "../../stores/cartStore";
import { formatCurrency } from "../../utils/formatters";
import {
  CONTAINER_SECTION,
  SECTION_WITH_BG,
  HEADING,
  HEADING_2,
} from "../../utils/classNames";
import { QuantitySelector } from "../ui/QuantitySelector";
import { ActionButton } from "../ui/ActionButton";

export const ProductDetailSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProductDetail(id);
  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <section className={SECTION_WITH_BG}>
        <div className={CONTAINER_SECTION}>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className={SECTION_WITH_BG}>
        <div className={CONTAINER_SECTION}>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Producto no encontrado
            </h2>
            <button
              onClick={() => navigate("/colecciones")}
              className="text-primary hover:underline"
            >
              Volver a la tienda
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={SECTION_WITH_BG}>
      <div className={CONTAINER_SECTION}>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center pt-10">
          {/* Product Image */}
          <div className="w-full h-[500px] flex items-center justify-center pt-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className={`${HEADING} text-left mt-2`}>{product.name}</h1>
              <p className="text-2xl font-bold text-primary">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div className="prose prose-lg text-foreground">
              <p>{product.description}</p>
            </div>

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
            <button
              onClick={() => navigate(-1)}
              className="inline-flex cursor-pointer hover:underline items-center gap-2 text-primary hover:text-secondary transition-colors font-medium mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
