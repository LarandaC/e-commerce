import { ProductCard } from "../cards/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import {
  SECTION_WITH_BG,
  CONTAINER_SECTION,
  HEADING,
} from "../../utils/classNames";

export const ProductSection = () => {
  const { products, loading } = useProducts();

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

  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} space-y-10`}>
        <div className="flex items-center justify-between">
          <h1 className={HEADING}>Colecciones</h1>
          <span className="text-foreground">{products.length} conjuntos</span>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
