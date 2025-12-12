import { useWishlistStore } from "../stores/wishlistStore";
import { useWishlistProducts } from "../hooks/useWishlistProducts";
import { ProductCard } from "../../products/components/cards/ProductCard";
import { Heart, ChevronRight } from "lucide-react";
import { ProductSkeletonGrid } from "../../../components/ui/feedback/ProductSkeleton";
import {
  SECTION_WITH_BG,
  CONTAINER_SECTION,
  HEADING,
} from "../../../utils/classNames";
import { CtaButton } from "../../../components/ui/buttons/CtaButton";
import { EmptyWishlist } from "./EmptyWishlist";

export const WishlistSection = () => {
  const { clearWishlist } = useWishlistStore();
  const { products, loading } = useWishlistProducts();

  if (loading) {
    return (
      <section className={SECTION_WITH_BG}>
        <div className={CONTAINER_SECTION}>
          <h1 className={`${HEADING} mb-8 flex items-center gap-3`}>
            <Heart className="text-error fill-error" />
            Mis Favoritos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductSkeletonGrid count={4} />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} space-y-10 fade-in`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <h1 className={`${HEADING} flex items-center gap-3`}>
            <Heart className="text-error fill-error" />
            Mis Favoritos
            <span className="text-lg font-normal text-foreground">
              ({products.length} productos)
            </span>
          </h1>

          <button
            onClick={clearWishlist}
            className="text-error hover:text-error-dark font-medium text-sm hover:underline transition-colors cursor-pointer"
          >
            Limpiar lista
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
