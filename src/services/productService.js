import api from "./api";

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
  name: product.title,
  price: Math.round(product.price * EXCHANGE_RATE),
  image: product.image,
  description: product.description,
  category: product.category,
  size: "M",
  color: "Estándar",
});
