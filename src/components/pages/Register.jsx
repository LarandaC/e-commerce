import { Navbar } from "../layout/Navbar";
import { RegisterSection } from "../sections/RegisterSection";

export const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center bg-background">
        <RegisterSection />
      </main>
    </div>
  );
};
