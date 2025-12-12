import { ShoppingCart } from "lucide-react";

export const ProductSkeleton = () => {
  return (
    <div className="group relative overflow-hidden mt-4 bg-white shadow-md border border-border/40 rounded-xl">
      {/* Image skeleton */}
      <div className="relative aspect-3/4 overflow-hidden">
        <div className="skeleton w-full h-full"></div>
      </div>

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <div className="skeleton h-6 w-3/4"></div>

        {/* Price skeleton */}
        <div className="skeleton h-8 w-1/2"></div>

        {/* Button skeleton */}
        <div className="skeleton h-12 w-full rounded-2xl"></div>
      </div>
    </div>
  );
};

export const ProductSkeletonGrid = ({ count = 4 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </>
  );
};
