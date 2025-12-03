import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { ProductDetailSection } from "../sections/ProductDetailSection";

export const ProductDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <ProductDetailSection />
      </main>
      <Footer />
    </div>
  );
};
