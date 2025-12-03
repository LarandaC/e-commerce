import { CartSection } from "../sections/CartSection";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

export const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <CartSection />
      <Footer />
    </div>
  );
};
