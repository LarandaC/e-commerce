import { RegisterSection } from "../features/auth/components/RegisterSection";

export const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center bg-background">
        <RegisterSection />
      </main>
    </div>
  );
};
