import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { AboutUsSection } from "../sections/AboutUsSection";

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
};
