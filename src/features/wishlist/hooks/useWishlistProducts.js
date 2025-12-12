import { useState, useEffect } from "react";
import { useWishlistStore } from "../stores/wishlistStore";
import { getAllProducts } from "../../products/services/productService";

export const useWishlistProducts = () => {
  const { wishlist } = useWishlistStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        setLoading(true);

        const allProducts = await getAllProducts();
        const wishlistProducts = allProducts.filter((p) =>
          wishlist.includes(p.id)
        );
        setProducts(wishlistProducts);
        setError(null);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistProducts();
  }, [wishlist]);

  return { products, loading, error };
};
