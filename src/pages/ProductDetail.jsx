import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/navbar/Navbar";
import { ProductDetailSection } from "../features/products/components/product-detail/ProductDetailSection";

export const ProductDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <ProductDetailSection />
      </main>
      <Footer />
    </div>
  );
};
