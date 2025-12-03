import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { HeroSection } from "../sections/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};
