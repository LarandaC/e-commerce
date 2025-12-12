import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useProductDetail } from "../../hooks/useProductDetail";
import { useCartStore } from "../../../cart/stores/cartStore";
import {
  CONTAINER_SECTION,
  SECTION_WITH_BG,
} from "../../../../utils/classNames";
import { ProductGallery } from "./ProductGallery";
import { ProductHeader } from "./ProductHeader";
import { ProductSpecs } from "./ProductSpecs";
import { ProductActions } from "./ProductActions";

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
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <ProductHeader product={product} />
              <ProductSpecs product={product} />
            </div>

            <div className="prose prose-lg text-foreground">
              <p>{product.description}</p>
            </div>

            <ProductActions
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleAddToCart={handleAddToCart}
              isAdded={isAdded}
            />

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
