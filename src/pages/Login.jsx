import { LoginSection } from "../features/auth/components/LoginSection";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <main className="grow flex items-center justify-center">
        <LoginSection />
      </main>
    </div>
  );
};
