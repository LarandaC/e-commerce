import { LoginSection } from "../sections/LoginSection";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-grow flex items-center justify-center p-4">
        <LoginSection />
      </main>
    </div>
  );
};
