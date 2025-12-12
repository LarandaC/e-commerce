import { StarRating } from "../../../../components/ui/feedback/StarRating";
import { formatCurrency } from "../../../../utils/formatters";
import { HEADING } from "../../../../utils/classNames";

export const ProductHeader = ({ product }) => {
  return (
    <div className="space-y-4">
      <span className="text-sm font-medium text-primary uppercase tracking-wider">
        {product.category}
      </span>
      <h1 className={`${HEADING} text-left mt-2`}>{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center gap-4">
        <StarRating
          rating={product.rating || 0}
          reviewCount={product.reviewCount || 0}
          size="md"
          showCount={true}
        />
        <span className="text-sm font-medium">
          {product.stock > 0 ? (
            <span className="text-success">En Stock</span>
          ) : (
            <span className="text-error">Agotado</span>
          )}
        </span>
      </div>

      <p className="text-2xl font-bold text-primary">
        {formatCurrency(product.price)}
      </p>
    </div>
  );
};
