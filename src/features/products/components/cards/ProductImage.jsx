import { Eye } from "lucide-react";
import { Badge } from "../../../../components/ui/feedback/Badge";
import { WishlistButton } from "../../../../components/ui/buttons/WishlistButton";

export const ProductImage = ({
  product,
  isOutOfStock,
  isLowStock,
  onQuickView,
}) => {
  const { id, name, image, badge, stock } = product;

  return (
    <div className="relative aspect-3/4 overflow-hidden">
      {/* Badges */}
      {badge && <Badge type={badge} />}
      {isOutOfStock && <Badge type="soldout" />}
      {isLowStock && !badge && (
        <Badge type="lowstock" label={`Solo ${stock}`} />
      )}

      {/* Wishlist Button */}
      <WishlistButton productId={id} />

      {/* Quick View Button - Centered on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <button
          onClick={onQuickView}
          className="pointer-events-auto cursor-pointer transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm text-primary hover:text-secondary px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
        >
          <Eye size={18} />
          <span>Vista Rápida</span>
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
};
