import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/navbar/Navbar";
import { UserProfileSection } from "../features/profile/components/UserProfileSection";

export const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <UserProfileSection />
      </main>
      <Footer />
    </div>
  );
};
