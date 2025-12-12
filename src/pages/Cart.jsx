import { CartSection } from "../features/cart/components/CartSection";
import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "../components/layout/Footer";

export const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <CartSection />
      </main>
      <Footer />
    </div>
  );
};
