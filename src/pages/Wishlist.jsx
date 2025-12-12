import { WishlistSection } from "../features/wishlist/components/WishlistSection";
import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "../components/layout/Footer";

export const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow flex items-center justify-center bg-background">
        <WishlistSection />
      </main>
      <Footer />
    </div>
  );
};
