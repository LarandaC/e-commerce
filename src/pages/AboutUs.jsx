import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/navbar/Navbar";
import { AboutUsSection } from "../features/about/components/AboutUsSection";

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow items-center justify-center bg-background">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
};
