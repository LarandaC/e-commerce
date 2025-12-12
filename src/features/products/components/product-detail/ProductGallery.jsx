export const ProductGallery = ({ product }) => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center pt-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};
