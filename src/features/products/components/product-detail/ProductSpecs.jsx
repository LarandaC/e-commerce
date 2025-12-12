export const ProductSpecs = ({ product }) => {
  return (
    <div className="flex items-center gap-6 text-sm text-muted-foreground border-y border-border/50 py-4">
      {product.size && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">Talle:</span>
          <span>
            {Array.isArray(product.size)
              ? product.size.join(", ")
              : product.size}
          </span>
        </div>
      )}
      {product.size && product.color && <span className="text-border">|</span>}
      {product.color && (
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">Color:</span>
          <span>
            {Array.isArray(product.color)
              ? product.color.join(", ")
              : product.color}
          </span>
        </div>
      )}
    </div>
  );
};
