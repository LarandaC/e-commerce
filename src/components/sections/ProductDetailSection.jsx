import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProductDetail } from "../../hooks/useProductDetail";
import { useCartStore } from "../../stores/cartStore";
import { formatCurrency } from "../../utils/formatters";
import {
  CONTAINER_SECTION,
  SECTION_WITH_BG,
  HEADING,
} from "../../utils/classNames";

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
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="w-full h-2/3 flex items-center justify-center pt-4">
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
              <h1 className={`${HEADING} text-left`}>{product.name}</h1>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div className="prose prose-lg text-foreground/80">
              <p>{product.description}</p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex items-center gap-6">
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-background border border-border rounded-xl p-2">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors text-foreground"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center text-xl font-bold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-lg transition-colors text-foreground"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isAdded
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-linear-to-r from-primary to-secondary text-white"
                  }`}
                >
                  {isAdded ? <Check size={24} /> : <ShoppingCart size={24} />}
                  {isAdded ? "¡Agregado al Carrito!" : "Agregar al Carrito"}
                </button>
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
