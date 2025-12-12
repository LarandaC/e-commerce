import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/navbar/Navbar";
import { ProductSection } from "../features/products/components/ProductSection";

export const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow flex items-center justify-center bg-background">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};
