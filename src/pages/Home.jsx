import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/navbar/Navbar";
import { HeroSection } from "../features/home/components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};
