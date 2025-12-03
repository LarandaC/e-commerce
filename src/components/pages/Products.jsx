import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { ProductSection } from "../sections/ProductSection";

export const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};
