import { useState, useEffect } from "react";
import { getProductsById } from "../services/productService";

export const useProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsById = async () => {
      try {
        setLoading(true);
        const data = await getProductsById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err);
        console.error("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsById();
  }, [id]);

  return { product, loading, error };
};
