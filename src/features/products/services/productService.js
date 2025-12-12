import api from "../../../services/api";

const EXCHANGE_RATE = 7500;

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data.map(transformProduct);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return transformProduct(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const transformProduct = (product) => ({
  id: product.id,
  name: product.name,
  price: Math.round(product.price * EXCHANGE_RATE),
  image: product.image,
  description: product.description,
  category: product.category,
  size: product.size,
  color: product.color,
  badge: product.badge,
  stock: product.stock,
  rating: product.rating,
  reviewCount: product.reviewCount,
  discount: product.discount,
  originalPrice: product.originalPrice
    ? Math.round(product.originalPrice * EXCHANGE_RATE)
    : undefined,
});
