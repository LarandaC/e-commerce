import { NavLink } from "react-router-dom";
import { StarRating } from "../../../../components/ui/feedback/StarRating";
import { formatCurrency } from "../../../../utils/formatters";

export const ProductInfo = ({ product }) => {
  const {
    id,
    name,
    price,
    rating,
    reviewCount,
    discount,
    originalPrice,
    stock,
  } = product;

  return (
    <div className="space-y-2 p-3">
      <div className="flex justify-between items-start gap-2">
        {/* Left Column: Name + Size/Color */}
        <div className="flex-1 min-w-0">
          <NavLink
            to={`/colecciones/${id}`}
            className="text-sm md:text-md lg:text-base font-medium text-foreground line-clamp-2 hover:underline block mb-1"
          >
            {name}
          </NavLink>

          {/* Size and Color */}
          <div className="text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
            {product.size && (
              <span>
                Talle:{" "}
                {Array.isArray(product.size)
                  ? product.size.join(", ")
                  : product.size}
              </span>
            )}
            {product.size && product.color && <span>•</span>}
            {product.color && (
              <span>
                Color:{" "}
                {Array.isArray(product.color)
                  ? product.color.join(", ")
                  : product.color}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Price + Stock */}
        <div className="flex flex-col items-end shrink-0">
          {discount ? (
            <>
              <span className="text-sm md:text-md lg:text-lg font-bold text-primary">
                {formatCurrency(price)}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted line-through">
                  {formatCurrency(originalPrice)}
                </span>
                <span className="text-[10px] font-bold bg-error text-white px-1.5 py-0.5 rounded-full">
                  -{discount}%
                </span>
              </div>
            </>
          ) : (
            <span className="text-sm md:text-md lg:text-lg font-bold text-primary">
              {formatCurrency(price)}
            </span>
          )}

          {/* Stock Status */}
          <div className="text-xs font-medium mt-1">
            {stock > 0 ? (
              <span className="text-success">En Stock</span>
            ) : (
              <span className="text-error">Agotado</span>
            )}
          </div>
        </div>
      </div>

      {/* Rating */}
      {rating > 0 && (
        <StarRating
          rating={rating}
          reviewCount={reviewCount}
          size="sm"
          showCount={true}
        />
      )}
    </div>
  );
};
